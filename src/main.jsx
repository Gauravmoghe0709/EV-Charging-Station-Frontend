import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import Authprovider from "./context/Authcontext.jsx"
import { ToastContainer } from "react-toastify";
import "leaflet/dist/leaflet.css";
import "./leafletIconFix"; 



createRoot(document.getElementById('root')).render(
 
  <HashRouter>
   <Authprovider>
      <App />
    <ToastContainer></ToastContainer>
   </Authprovider>
 
 </HashRouter>

)
