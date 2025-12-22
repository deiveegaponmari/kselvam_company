import React, { useEffect, useState } from "react";
import api from "../../api/apiConfig";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await api.get("/viewEvent");
      console.log("view event ", response.data);
      setBookings(response.data?.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading bookings...</p>
      </div>
    );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          📅 Event Bookings
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Event
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Phone
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No bookings found
                  </td>
                </tr>
              ) : (
                bookings.map((b, index) => (
                  <tr
                    key={b._id}
                    className={`border-t ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-blue-50 transition`}
                  >
                    <td className="px-4 py-3 text-sm text-gray-800">
                      {b.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {b.email}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800">
                      {b.eventName}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {b.phone}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {new Date(b.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Bookings;
