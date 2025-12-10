import ServicesCard from "../components/ServicesCard";

function Services() {
  const data = [
    {
      title: "Sound System Rental",
      img: "https://your-img-url",
      description: "High-quality speakers, mics, DJ setup, event sound control.",
    },
    {
      title: "Lighting Setup",
      img: "https://your-img-url",
      description: "Stage lighting, wedding lights, decorative ambient lighting.",
    },
    {
      title: "Hollow Blocks Supply",
      img: "https://your-img-url",
      description: "Durable 4, 6, 8 inch hollow blocks for construction."
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 p-10">
      {data.map((item) => (
        <ServicesCard key={item.title} {...item} />
      ))}
    </div>
  );
}

export default Services;
