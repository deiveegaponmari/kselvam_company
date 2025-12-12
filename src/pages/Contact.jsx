import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10 ">
          {/* Left Info Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              K Selvam Sounds & Hollow Blocks
            </h3>

            <p className="text-gray-600 mb-4">
              Have questions or need to book audio equipment or construction blocks?
              We're here to help you!
            </p>

            <div className="mt-5 space-y-3">
              <p className="text-gray-700">
                📍 <strong>Address:</strong> K SELVAM SOUNDS & HOLLOW BLOCKS
                KalitheerthanPatti,
                Idaikal,
                Tirunelveli-627423

              </p>
              <p className="text-gray-700">
                📞 <strong>Phone:</strong> +91 9843343962 <br/>
                📞 <strong>Phone:</strong> +91 6385457813
              </p>
              <p className="text-gray-700">
                ✉️ <strong>Email:</strong> kselvamaudioshallowblocks@gmail.com
              </p>
            </div>
          </div>

          {/* Right Form Section */}
          <form className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:ring focus:ring-blue-300 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-md focus:ring focus:ring-blue-300 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 p-3 rounded-md focus:ring focus:ring-blue-300 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 p-3 rounded-md focus:ring focus:ring-blue-300 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
