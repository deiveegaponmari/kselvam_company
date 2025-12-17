import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EventsHome() {
  const navigate = useNavigate();
   const [event, setEvent] = useState([]);
    
      useEffect(() => {
        fetchEvents();
      }, []);
    
      const fetchEvents = async () => {
        try {
          const response = await api.get("/getevent");
          //console.log(response.data);
          setEvent(response.data);
        } catch (error) {
          console.error("Error fetching slides:", error);
        }
      };

  return (
    <div className="p-10 md:p-20 bg-gray-100 text-gray-800 ">
      <div className="max-w-3xl mx-auto text-center ">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900">
          RECENT EVENTS
        </h1>

        <h1 className="text-lg md:text-xl leading-relaxed text-gray-600 mb-8">
          THE GRAND EVENTS
        </h1>
        {/* 🎉 EVENT IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {event.map((item, index) => (
            <div
              key={item._id}
              className="w-full h-56 bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.imageUrl}
                alt="Event"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/events")}
          className="px-8 py-3 text-lg font-semibold bg-blue-700 text-white rounded-full shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-300"
        >
          VIEW ALL EVENTS
        </button>
      </div>
    </div>
  );
}

export default EventsHome;
