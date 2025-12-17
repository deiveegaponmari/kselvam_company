import { useNavigate } from "react-router-dom";
import api from '../api/apiConfig'
import { useState ,useEffect} from "react";

function ServiceHome() {
  const navigate = useNavigate();
   const [service, setService] = useState([]);
  
    useEffect(() => {
      fetchServices();
    }, []);
  
    const fetchServices = async () => {
      try {
        const response = await api.get("/getservice");
        //console.log(response.data);
        setService(response.data);
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };
  return (
    <div className="p-10 md:p-20 bg-gray-100 text-gray-800 ">
      <div className="max-w-3xl mx-auto text-center ">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900">
          OUR SERVICES
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-600 mb-8">
           K Selvam Sounds & Hollow Blocks, we provide complete event
          solutions including professional sound systems, lighting, LED walls,
          truss setups, and silent generators for all types of functions.
          Whether it’s a wedding, festival, live show, or corporate event, our
          team ensures a smooth and memorable experience. We also manufacture
          strong and durable hollow blocks suitable for residential and
          commercial construction. Our goal is to deliver quality, reliability,
          and customer satisfaction in every service we offer.
        </p>
         {/* 🔥 SERVICE MEDIA GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {service.map((item, index) => (
            <div
              key={item._id}
              className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden shadow-md"
            >
              {item.imageUrl.endsWith(".mp4") ? (
                <video
                  src={item.imageUrl}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={item.imageUrl}
                  alt="Service"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate("/services")}
          className="px-8 py-3 text-lg font-semibold bg-blue-700 text-white rounded-full shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-300"
        >
          ALL SERVICES
        </button>
      </div>
    </div>
  );
}

export default ServiceHome;
