

import { useState } from "react";

export default function AdminRooms() {
    const [rooms, setRooms] = useState([
        { roomId: 101, category: "Deluxe", maxGuests: 3, available: true, photos: ["https://via.placeholder.com/100"], specialDescription: "Ocean view", notes: "Includes breakfast" },
        { roomId: 102, category: "Standard", maxGuests: 2, available: false, photos: ["https://via.placeholder.com/100"], specialDescription: "City view", notes: "No smoking" },
        { roomId: 103, category: "Suite", maxGuests: 4, available: true, photos: ["https://via.placeholder.com/100"], specialDescription: "Luxury suite", notes: "VIP access" }
    ]);
    
    return (
        <div className="w-full p-4">
            <h1 className="text-xl font-bold mb-4">Admin Rooms</h1>
            {rooms.length === 0 ? (
                <p>No rooms available</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Room ID</th>
                            <th className="border px-4 py-2">Category</th>
                            <th className="border px-4 py-2">Max Guests</th>
                            <th className="border px-4 py-2">Available</th>
                            <th className="border px-4 py-2">Photos</th>
                            <th className="border px-4 py-2">Special Description</th>
                            <th className="border px-4 py-2">Notes</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room) => (
                            <tr key={room.roomId} className="text-center">
                                <td className="border px-4 py-2">{room.roomId}</td>
                                <td className="border px-4 py-2">{room.category}</td>
                                <td className="border px-4 py-2">{room.maxGuests}</td>
                                <td className="border px-4 py-2">{room.available ? "Yes" : "No"}</td>
                                <td className="border px-4 py-2">
                                    {room.photos && room.photos.length > 0 ? (
                                        <img src={room.photos[0]} alt="Room" className="w-16 h-16 object-cover mx-auto" />
                                    ) : (
                                        "No Image"
                                    )}
                                </td>
                                <td className="border px-4 py-2">{room.specialDescription}</td>
                                <td className="border px-4 py-2">{room.notes}</td>
                                <td className="border px-4 py-2">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}


