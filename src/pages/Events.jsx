import React, { useState } from "react";
import api from "../api/apiConfig";

function Events() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const events = [
    {
      title: "Festival Event",
      media:
        "https://res.cloudinary.com/djlxdttvr/image/upload/v1765531718/satish-dharmavarapu-kMz2xl-dcmE-unsplash_yg0hpr.jpg",
      description:
        "Complete festival sound system, stage lights, speakers and decorative ambience.",
    },
    {
      title: "Church Festival Event",
      media:
        "https://res.cloudinary.com/djlxdttvr/image/upload/v1765532164/yana-hurska-GIwrvDUeZcI-unsplash_quy5bi.jpg",
      description:
        "Full church festival sound arrangements, LED walls and wireless mic setup.",
    },
    {
      title: "Wedding Event Setup",
      media:
        "https://res.cloudinary.com/djlxdttvr/image/upload/v1765527799/kogulanath-ayappan--jueArtQR3U-unsplash_uwp2eg.jpg",
      description:
        "Wedding speakers, LED wall, lighting and complete stage decoration.",
    },
    {
      title: "Puberty Event Setup",
      media:
        "https://res.cloudinary.com/djlxdttvr/image/upload/v1765528352/vijay-raju-2ZEjKBEtr-Y-unsplash_kloafk.jpg",
      description:
        "High-quality audio and lighting for puberty ceremonies and family celebrations.",
    },
    {
      title: "Birthday Party Event Setup",
      media:
        "https://res.cloudinary.com/djlxdttvr/image/upload/v1765529481/asif-khan-0-ByM99gaLU-unsplash_djbzlr.jpg",
      description:
        "Event sound system and decorative lighting for birthday parties.",
    },
    {
      title: "Stage Lighting Show",
      media:
        "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514319/WhatsApp_Image_2025-12-04_at_12.15.24_b9979ad5_a08qiz.jpg",
      description: "Professional stage lights for concerts and live shows.",
    },
    {
      title: "Corporate Event",
      media:
        "https://res.cloudinary.com/djlxdttvr/image/upload/v1765514493/WhatsApp_Image_2025-12-04_at_12.10.54_4487b1c5_-_Copy_li4m1g.jpg",
      description:
        "Audio systems, projector setup and stage arrangements for corporate events.",
    },
    {
      title: "LED Wall + Sound System",
      media:
        "https://res.cloudinary.com/djlxdttvr/video/upload/v1765514682/WhatsApp_Video_2025-12-04_at_12.10.26_d8b4be12_jyovij.mp4",
      description: "Ultra-bright LED wall setup with high-quality sound.",
    },
  ];

  const handleBookNow = (event) => {
    setSelectedEvent(event);
    setOpenModal(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/event-book", {
        eventName: selectedEvent.title,
        ...formData,
      });

      alert("Your event booking request has been sent!");

      setOpenModal(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      {/* PAGE TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our Event Highlights
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
          Experience the finest event setups managed by{" "}
          <span className="font-semibold">K Selvam Sounds & Hollow Blocks</span>
          .
        </p>
      </div>

      {/* EVENTS GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
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

            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>
              <p className="text-gray-600 mt-2">{event.description}</p>

              <button
                onClick={() => handleBookNow(event)}
                className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg 
                hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-md"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL FORM */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl w-96 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {selectedEvent.title}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />

              <button
                className="w-full bg-green-600 text-white py-2 rounded-lg 
                hover:bg-green-700 transition"
              >
                Send Booking Request
              </button>

              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="w-full bg-gray-300 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
