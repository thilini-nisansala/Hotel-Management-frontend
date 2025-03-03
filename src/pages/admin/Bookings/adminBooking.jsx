

    // Sample booking data arrays
    const bookings = [
      {
        bookingId: 1,
        roomId: 101,
        email: "user1@gmail.com",
        status: "pending",
        reason: "Meeting",
        start: new Date("2025-03-10"),
        end: new Date("2025-03-10"),
        notes: "Urgent meeting",
      },
      {
        bookingId: 2,
        roomId: 102,
        email: "user2@gmail.com",
        status: "confirmed",
        reason: "Conference",
        start: new Date("2025-03-11"),
        end: new Date("2025-03-11"),
        notes: "",
      },
      {
        bookingId: 3,
        roomId: 103,
        email: "user3@gmail.com",
        status: "cancelled",
        reason: "Rescheduled",
        start: new Date("2025-03-12"),
        end: new Date("2025-03-12"),
        notes: "Rescheduling",
      },
      {
        bookingId: 4,
        roomId: 104,
        email: "user4@gmail.com",
        status: "pending",
        reason: "Training Session",
        start: new Date("2025-03-13"),
        end: new Date("2025-03-13"),
        notes: "Prepare slides",
      },
      {
        bookingId: 5,
        roomId: 105,
        email: "user5@gmail.com",
        status: "confirmed",
        reason: "Team Discussion",
        start: new Date("2025-03-14"),
        end: new Date("2025-03-14"),
        notes: "Coffee required",
      },
    ];



export default function AdminBookings(){
         return (
    
    <div className="w-full">
        <table className="table-auto border-collapse w-full text-left">
          <thead>
            <tr className="bg-blue-400 text-white">
              <th className="px-4 py-2">Booking ID</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Start Date</th>
              <th className="px-4 py-2">End date</th>
              <th className="px-4 py-2">Start Time</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Reason</th>
            </tr>
          </thead>
          <tbody>
        {bookings.map((booking) => {
            return(
                <tr key={booking.bookingId}>
                    <td>{booking.bookingId}</td>
                    <td>{booking.email}</td>
                    <td>{booking.start.toDateString()}</td>
                    <td>{booking.end.toDateString()}</td>
                    <td>{booking.status}</td>
                    <td>{booking.reason}</td>
                </tr>
            )})}
          </tbody>
        </table>
      </div>
   
  );
}
          
    