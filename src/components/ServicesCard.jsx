function ServicesCard({ title, description, img }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition">
      <img src={img} className="w-full h-40 object-cover rounded-xl mb-3" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

export default ServicesCard;
