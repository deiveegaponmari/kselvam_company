import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {

    emailjs.sendForm(
      "service_b74rv6i",   // Replace with your Service ID
      "template_j142ox9",  // Replace with your Template ID
      form.current,
      "m2Ze3EooFmELn92wo"    // Replace with your Public Key
    )
    .then(
      (result) => {
        console.log("Email sent:", result.text);
        alert("Message sent successfully!");
        form.current.reset(); // clear form
      },
      (error) => {
        console.log("Email error:", error.text);
        alert("Failed to send message, try again.");
      }
    );
  };

  return (
    <section id="contact" className="bg-gray-100 py-16 px-5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              K Selvam Sounds & Hollow Blocks
            </h3>
            <p className="text-gray-600 mb-4">
              Have questions or need to book audio equipment or construction blocks? We're here to help!
            </p>
            <div className="mt-5 space-y-3">
              <p className="text-gray-700">📍 Address: KalitheerthanPatti, Idaikal, Tirunelveli-627423</p>
              <p className="text-gray-700">📞 Phone: +91 9843343962 / +91 6385457813</p>
              <p className="text-gray-700">✉️ Email: kselvamaudioshallowblocks@gmail.com</p>
            </div>
          </div>

          <form ref={form}  className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>

            <div className="space-y-5">
              <input type="text" name="user_name" placeholder="Your Name" className="w-full border p-3 rounded-md focus:ring-blue-300 outline-none" />
              <input type="email" name="user_email" placeholder="Your Email" className="w-full border p-3 rounded-md focus:ring-blue-300 outline-none" />
              <input type="text" name="subject" placeholder="Subject" className="w-full border p-3 rounded-md focus:ring-blue-300 outline-none" />
              <textarea name="message" placeholder="Your Message" rows="5" className="w-full border p-3 rounded-md focus:ring-blue-300 outline-none"></textarea>
              <button type="button"  onClick={sendEmail} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition">
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
