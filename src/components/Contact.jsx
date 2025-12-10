function Contact() {
  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-3">Contact Us</h1>

      <form className="bg-white shadow-md p-6 rounded-xl max-w-lg space-y-4">
        <input className="w-full p-3 border rounded" placeholder="Your Name" />
        <input className="w-full p-3 border rounded" placeholder="Your Email" />
        <input className="w-full p-3 border rounded" placeholder="Phone Number" />
        <textarea className="w-full p-3 border rounded" placeholder="Message"></textarea>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
