

import { useEffect, useState } from "react";

export default function AdminCategories() {
    const [categories, setCategories] = useState([
        { _id: "1", name: "Basic", price: 10, description: "Basic category package" },
        { _id: "2", name: "Standard", price: 20, description: "Standard category package" },
        { _id: "3", name: "Premium", price: 30, description: "Premium category package" }
    ]);
    const [loading, setLoading] = useState(false);

    return (
        <div className="w-full p-4">
            <h1 className="text-xl font-bold mb-4">Admin Categories</h1>
            {loading ? (
                <p>Loading categories...</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Price</th>
                            <th className="border px-4 py-2">Description</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category._id} className="text-center">
                                <td className="border px-4 py-2">{category.name}</td>
                                <td className="border px-4 py-2">${category.price}</td>
                                <td className="border px-4 py-2">{category.description}</td>
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
