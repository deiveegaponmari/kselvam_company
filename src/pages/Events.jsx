import React from "react";

function Events() {
  const events = [
    {
      title: "Wedding Event Setup",
      media:
        "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514136/WhatsApp_Image_2025-12-04_at_12.11.39_4a0f850c_oxyfou.jpg",
      description:
        "Complete wedding sound system, LED wall, lighting and stage arrangement.",
    },
    {
      title: "Stage Lighting Show",
      media:
        "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514319/WhatsApp_Image_2025-12-04_at_12.15.24_b9979ad5_a08qiz.jpg",
      description:
        "Professional stage lighting for concerts, public shows and festivals.",
    },
    {
      title: "Corporate Event",
      media:
        "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514493/WhatsApp_Image_2025-12-04_at_12.10.54_4487b1c5_-_Copy_li4m1g.jpg",
      description:
        "High-quality audio and projector setup for corporate programs.",
    },
    {
      title: "LED Wall + Sound System",
      media:
        "https://res.cloudinary.com/djlxdttvr/video/upload/v1765514682/WhatsApp_Video_2025-12-04_at_12.10.26_d8b4be12_jyovij.mp4",
      description:
        "Ultra-bright LED wall installation for large public events and functions.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      
      {/* PAGE TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our Event Highlights
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
          Explore some of the major events handled by{" "}
          <span className="font-semibold">K Selvam Sounds & Hollow Blocks</span> —
          covering weddings, stage shows, corporate functions, and large public gatherings.
        </p>
      </div>

      {/* EVENTS GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            
            {/* IMAGE / VIDEO DISPLAY */}
            <div className="h-56 w-full overflow-hidden">
              {event.media.endsWith(".mp4") ? (
                <video
                  src={event.media}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={event.media}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              )}
            </div>

            {/* EVENT CONTENT */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {event.title}
              </h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
