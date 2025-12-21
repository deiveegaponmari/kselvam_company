import React, { useEffect, useState } from "react";
//import { fetchBookings } from "../../services/bookingApi";
import api from "../../api/apiConfig";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      return await api.get("/getEvent");
    } catch (error){
        throw error;
    }
  };
  useEffect(() => {
    fetchBookings()
      .then((res) => {
        setBookings(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

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
          {bookings.map((b) => (
            <tr key={b._id}>
              <td>{b.name}</td>
              <td>{b.email}</td>
              <td>{b.eventName}</td>
              <td>{b.phone}</td>
              <td>{new Date(b.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;
