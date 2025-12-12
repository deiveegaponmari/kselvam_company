import React from "react";

function Equipment() {
  const equipmentList = [
    {
      title: "High Power Speakers",
      desc: "Top-quality bass speakers and line-array systems for weddings, concerts, and stage shows.",
      img: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514425/WhatsApp_Image_2025-12-04_at_12.12.08_873d1de0_whlv6k.jpg",
    },
    {
      title: "LED Wall Display",
      desc: "Ultra-bright LED screens suitable for indoor and outdoor events with crystal-clear visuals.",
      img: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514136/WhatsApp_Image_2025-12-04_at_12.11.39_4a0f850c_oxyfou.jpg",
    },
    {
      title: "Stage Lighting Setup",
      desc: "Moving heads, par cans, laser lights, and full event lighting rigs for night events.",
      img: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514319/WhatsApp_Image_2025-12-04_at_12.15.24_b9979ad5_a08qiz.jpg",
    },
    {
      title: "Truss & Stage Frames",
      desc: "Heavy-duty truss structures for LED walls, lighting rigs, banners, and stage backgrounds.",
      img: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514493/WhatsApp_Image_2025-12-04_at_12.10.54_4487b1c5_-_Copy_li4m1g.jpg",
    },
    {
      title: "Silent Generator (DG)",
      desc: "Reliable and low-noise generators for uninterrupted power during events and functions.",
      img: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514272/WhatsApp_Image_2025-12-04_at_12.15.00_24b3d111_tautcr.jpg",
    },
    {
      title: "Sound Mixers & Controllers",
      desc: "Professional audio mixers, equalizers, audio interfaces, and controllers for any event size.",
      img: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514682/WhatsApp_Video_2025-12-04_at_12.10.26_d8b4be12_jyovij.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      
      {/* TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our Equipment
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
          Explore the premium-quality equipment used by{" "}
          <span className="font-semibold">K Selvam Sounds & Hollow Blocks</span>  
          to deliver powerful sound, lighting, and stage experiences for all events.
        </p>
      </div>

      {/* EQUIPMENT GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {equipmentList.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-56 w-full overflow-hidden">
              {item.img.endsWith(".mp4") ? (
                <video
                  src={item.img}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              )}
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipment;
