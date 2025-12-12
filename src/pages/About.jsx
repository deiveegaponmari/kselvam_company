import React from "react";

function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      
      {/* HERO SECTION */}
      <section className="relative bg-blue-700 text-white py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About K Selvam Sounds & Hollow Blocks
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Delivering quality, trust, and excellence in event sound solutions and construction materials.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div>
            <img
              src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765514823/WhatsApp_Image_2025-12-11_at_15.32.34_1d312387_makrvc.jpg"
              alt="About Us"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              K Selvam Sounds & Hollow Blocks is a trusted name in both the event 
              management and construction industry. With many years of experience, 
              we offer professional sound systems, LED walls, stage lighting, truss 
              setups, generators, and event support for weddings, festivals, and 
              corporate programs.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 mt-4">
              Along with event services, we manufacture high-quality hollow blocks 
              suitable for residential and commercial buildings, ensuring durability 
              and strength. Our team delivers excellence, reliability, and customer 
              satisfaction in every project.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Why Choose Us?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">Professional Sound</h3>
              <p className="text-gray-600 mt-2">High-quality speakers, mixers & event acoustics.</p>
            </div>

            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">LED & Lighting</h3>
              <p className="text-gray-600 mt-2">LED walls, stage lights & truss structures.</p>
            </div>

            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">Hollow Block Factory</h3>
              <p className="text-gray-600 mt-2">Strong & durable blocks for construction.</p>
            </div>

            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">Trusted Team</h3>
              <p className="text-gray-600 mt-2">Experienced crew delivering reliable service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-16 px-6 md:px-20 bg-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to offer top-quality event solutions and construction materials 
            with a commitment to excellence, customer focus, and long-lasting quality.
          </p>
        </div>
      </section>

    </div>
  );
}

export default About;
