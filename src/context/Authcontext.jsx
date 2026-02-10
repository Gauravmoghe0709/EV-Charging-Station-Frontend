import { createContext, useEffect, useState } from "react";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Authcontext = createContext();

const Authprovider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setuser(JSON.parse(storedUser));
    }

    const currentuser = async () => {
      try {
        const res = await axios.get("/EvStation/aboutme", {
          withCredentials: true,
        });

        setuser(res.data.user);

        localStorage.setItem("user", JSON.stringify(res.data.user));
      } catch (error) {
        console.log(error);
        setuser(null);
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };

    currentuser();
  }, []);

  
  const login = async (formdata) => {
    try {
      const res = await axios.post("/EvStation/login", formdata, {
        withCredentials: true,
      });

      setuser(res.data.user);


      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Login successfully");

      if (res.data.user.role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

      return true;
    } catch (error) {
      console.log(error);
      toast.error("Login Failed...");
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.post("/EvStation/logout", {}, { withCredentials: true });

      setuser(null);
      localStorage.removeItem("user"); 

      toast.success("Logout Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Authcontext.Provider value={{ user, login, logout, loading }}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
