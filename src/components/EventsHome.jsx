import { useNavigate } from "react-router-dom";

function EventsHome() {
  const navigate = useNavigate();
  const eventLinks=[
    "https://res.cloudinary.com/djlxdttvr/image/upload/v1765445297/WhatsApp_Image_2025-12-04_at_12.10.56_e773881c_wba5om.jpg",
    "https://res.cloudinary.com/djlxdttvr/image/upload/v1765354524/WhatsApp_Image_2025-12-09_at_12.02.30_bfd6b6d7_nfukyb.jpg",
  ]

  return (
    <div className="p-10 md:p-20 bg-gray-100 text-gray-800 ">
      <div className="max-w-3xl mx-auto text-center ">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900">
            RECENT EVENTS
        </h1>

        <h1 className="text-lg md:text-xl leading-relaxed text-gray-600 mb-8">
           THE GRAND EVENTS
        </h1>
        <div>

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
