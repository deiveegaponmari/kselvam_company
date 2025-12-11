import React from "react";
import { MapPin, Phone, Mail, Building } from "lucide-react"; // icons

function Footer() {
  return (
    <>
      <footer className="mt-10">
        {/* Map Section */}
        <h2 className="text-3xl font-extrabold text-blue-800 text-center mb-5">
          Visit Our Location
        </h2>

        <div className="w-full h-[300px]">
          <iframe
            title="kselvam_company-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.2416792911104!2d77.4545921!3d8.763317599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b043b7b29c6a3d9%3A0x8c6ad62e27680b64!2sK.Selvam%20hallow%20blocks%20%26%20bricks!5e0!3m2!1sen!2sin!4v1765352753760!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Footer Content */}
        <div className="bg-blue-900 text-white py-10 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* About Section */}
            <div>
              <h1 className="text-xl font-bold mb-3">K Selvam</h1>
              <p className="text-sm leading-relaxed">
                K Selvam Sounds & Hollow Blocks specialises in professional
                sound services and premium-quality hollow block manufacturing.
                We offer complete event audio solutions—sound systems, lighting,
                truss, generators, and LED screens. We also supply strong,
                durable hollow blocks for all construction needs.
              </p>
            </div>

            {/* Branch Office */}
            <div>
              <h1 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Building size={18} /> Branch Office
              </h1>
              <p className="text-sm leading-relaxed">
                K Selvam Sounds & Hollow Blocks  
                <br />
                Kalitheerthanpatti
                <br />
              Idaikal(Near by Merit Polytechnic College)
                <br />
                Tirunelveli District – 627423.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h1 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Phone size={18} /> Contact Us
              </h1>
              <p className="text-sm">
                +91 9843343962 <br />
                +91 6385457813
              </p>
            </div>

            {/* Email */}
            <div>
              <h1 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Mail size={18} /> Email Us
              </h1>
              <p className="text-sm">
                kselvamsounds@gmail.com  
                <br />
                rajankmuthu99@gmail.com
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-blue-700 mt-10 pt-4 text-center text-sm opacity-80">
            © {new Date().getFullYear()} K Selvam Sounds & Hollow Blocks. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
