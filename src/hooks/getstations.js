import { useState, useEffect } from "react";
import axios from "axios";

const usestation = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStations = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://ev-charging-station-backend-7ufb.onrender.com/EvStation/admin/station/get",
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
