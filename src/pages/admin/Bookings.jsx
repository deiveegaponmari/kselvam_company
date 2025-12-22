import React, { useEffect, useState } from "react";
import api from "../../api/apiConfig";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  /* const fetchBookings = () => {
    return api.get("/viewEvent");
  };

  useEffect(() => {
    fetchBookings()
      .then((res) => {
        setBookings(res.data?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setLoading(false);
      });
  }, []); */
  useEffect(() => {
      fetchBookings();
    }, []);
  
    const fetchBookings = async () => {
      try {
        const response = await api.get("/viewEvent");
        console.log("view event ",response.data);
          setBookings(response.data?.data || []);
          setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      }
    };

  if (loading) return <p>Loading bookings...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Event Bookings</h2>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Event</th>
            <th>Phone</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="5" align="center">
                No bookings found
              </td>
            </tr>
          ) : (
            bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.eventName}</td>
                <td>{b.phone}</td>
                <td>{new Date(b.createdAt).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;
