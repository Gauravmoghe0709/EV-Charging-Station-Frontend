import { useState, useEffect } from "react";
import axios from "axios";

const usestation = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStations = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:3000/EvStation/admin/station/get",
        { withCredentials: true }
      );
      setStations(res.data.stations);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStations(); 
  }, []);

  return {
    stations,
    loading,
    refetchStations: fetchStations,
  };
};

export default usestation;
