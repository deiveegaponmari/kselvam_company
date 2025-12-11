import { useNavigate } from "react-router-dom";

function ServiceHome() {
  const navigate = useNavigate();

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
