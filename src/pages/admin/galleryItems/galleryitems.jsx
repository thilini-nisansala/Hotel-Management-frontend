{/*export default function AdminGalleryItems(){
    return(
        <div className="w-full">
            Admin Gallery Items    
        </div>
    )
}
*/}

import { useEffect, useState } from "react";

export default function AdminGallery() {
    const [galleryItems, setGalleryItems] = useState([
        { _id: "1", name: "Sunset", image: "https://via.placeholder.com/100", description: "Beautiful sunset view" },
        { _id: "2", name: "Mountain", image: "https://via.placeholder.com/100", description: "Snow-covered mountain peak" },
        { _id: "3", name: "Ocean", image: "https://via.placeholder.com/100", description: "Deep blue ocean waves" }
    ]);
    const [loading, setLoading] = useState(false);

    return (
        <div className="w-full p-4">
            <h1 className="text-xl font-bold mb-4">Admin Gallery</h1>
            {loading ? (
                <p>Loading gallery items...</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Image</th>
                            <th className="border px-4 py-2">Description</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {galleryItems.map((item) => (
                            <tr key={item._id} className="text-center">
                                <td className="border px-4 py-2">{item.name}</td>
                                <td className="border px-4 py-2">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mx-auto" />
                                </td>
                                <td className="border px-4 py-2">{item.description}</td>
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
