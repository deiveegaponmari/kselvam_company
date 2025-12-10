import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <h2
          className="mt-3 text-3xl font-extrabold text-blue-800 mb-3 
        text-center"
        >
          Visit Our Location
        </h2>
        <div style={{ width: "100%", height: "300px" }}>
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
      </footer>
    </>
  );
}

export default Footer;
