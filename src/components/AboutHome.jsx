import { useNavigate } from "react-router-dom";

function AboutHome() {
  const navigate = useNavigate();

  return (
    <div className="p-10 md:p-20 bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900">
          About Us
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-600 mb-8">
          K Selvam Sounds & Hollow Blocks is a trusted name offering two strong
          services — Professional Event Sound Solutions and High-Quality Hollow
          Block Manufacturing. With years of experience, we have built a
          reputation for quality, reliability, and customer-focused service in
          both industries.
        </p>

        <button
          onClick={() => navigate("/about")}
          className="px-8 py-3 text-lg font-semibold bg-blue-700 text-white rounded-full shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-300"
        >
          KNOW MORE ABOUT US
        </button>
      </div>
    </div>
  );
}

export default AboutHome;
