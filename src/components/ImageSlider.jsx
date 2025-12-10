import React, { useState, useEffect } from "react";

function ImageSlider() {
  const images = [
    "https://res.cloudinary.com/djlxdttvr/image/upload/v1765354524/WhatsApp_Image_2025-12-09_at_12.02.30_bfd6b6d7_nfukyb.jpg",
    "https://res.cloudinary.com/djlxdttvr/image/upload/v1765354500/WhatsApp_Image_2025-12-09_at_11.56.18_ae185f1c_ne04rf.jpg",
    "https://res.cloudinary.com/djlxdttvr/image/upload/v1765354523/WhatsApp_Image_2025-12-09_at_12.02.31_f4c86d44_lev4dy.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden mt-10">
      <div
        className="whitespace-nowrap transition-all duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-64 md:h-96 object-cover inline-block"
            alt="slide"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
