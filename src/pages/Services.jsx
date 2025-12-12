import React from "react";

function Services() {
  const services = [
    {
      title: "Professional Sound System",
      desc: "High-quality speakers, mixers, microphones, amplifiers, and bass systems for weddings, festivals, and stage events.",
      img: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514425/WhatsApp_Image_2025-12-04_at_12.12.08_873d1de0_whlv6k.jpg",
    },
    {
      title: "LED Wall & Lighting Setup",
      desc: "LED screens, stage lighting, moving heads, par cans, and decorative lights for all types of events.",
      img: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514136/WhatsApp_Image_2025-12-04_at_12.11.39_4a0f850c_oxyfou.jpg",
    },
    {
      title: "Truss & Stage Setup",
      desc: "Strong truss structures, stage backgrounds, metal frames, and event rigging solutions.",
      img: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514319/WhatsApp_Image_2025-12-04_at_12.15.24_b9979ad5_a08qiz.jpg",
    },
    {
      title: "Silent Generator (DG) Services",
      desc: "Reliable generator support for power backup during events, stage shows, and functions.",
      img: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514493/WhatsApp_Image_2025-12-04_at_12.10.54_4487b1c5_-_Copy_li4m1g.jpg",
    },
    {
      title: "Hollow Block Manufacturing",
      desc: "High-strength hollow blocks suitable for houses, commercial buildings, and construction projects.",
      img: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514272/WhatsApp_Image_2025-12-04_at_12.15.00_24b3d111_tautcr.jpg",
    },
    {
      title: "Event Management Support",
      desc: "From small family functions to large public events, we provide complete event support and coordination.",
      img: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514682/WhatsApp_Video_2025-12-04_at_12.10.26_d8b4be12_jyovij.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      {/* TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our Services
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
          At <span className="font-semibold">K Selvam Sounds & Hollow Blocks</span>, 
          we provide complete solutions for events and construction — combining 
          modern sound technology with durable building materials.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-56 w-full overflow-hidden">
              <img
                src={service.img}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                alt={service.title}
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {service.desc}
              </p>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
