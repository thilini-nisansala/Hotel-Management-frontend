


export default function AdminBookings(){
         return (
    
    <div className="w-full">
        <table className="table-auto border-collapse w h-full text-left">
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
          <tr className="border-b">
              <th className="px-4 py-2">1</th>
              <th className="px-4 py-2">jone1@gmail.com</th>
              <th className="px-4 py-2">2025.04.05</th>
              <th className="px-4 py-2">2025.04.07</th>
              <th className="px-4 py-2">Pending</th>
              <th className="px-4 py-2">Vacation</th>
              <th className="px-4 py-2"></th>
            </tr>

            <tr className="border-b">
              <th className="px-4 py-2">2</th>
              <th className="px-4 py-2">kamal1@gmail.com</th>
              <th className="px-4 py-2">2025.04.08</th>
              <th className="px-4 py-2">2025.04.12</th>
              <th className="px-4 py-2">confirmed</th>
              <th className="px-4 py-2">Vacation</th>
              <th className="px-4 py-2"></th>
            </tr>

            <tr className="border-b">
              <th className="px-4 py-2">3</th>
              <th className="px-4 py-2">nimal1@gmail.com</th>
              <th className="px-4 py-2">2025.04.05</th>
              <th className="px-4 py-2">2025.04.07</th>
              <th className="px-4 py-2">Cancel</th>
              <th className="px-4 py-2">Vacation</th>
              <th className="px-4 py-2"></th>
            </tr>
          </tbody>
        </table>
      </div>
   
  );
};
          
       