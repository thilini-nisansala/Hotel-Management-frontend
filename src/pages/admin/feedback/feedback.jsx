

export default function AdminFeedback() {
    const feedbacks = [
        { id: 1, user: "John Doe", comment: "Great service!", rating: 5 },
        { id: 2, user: "Jane Smith", comment: "Had a good experience.", rating: 4 },
        { id: 3, user: "Alice Johnson", comment: "Could be better.", rating: 3 }
    ];

    return (
        <div className="w-full p-4">
            <h1 className="text-xl font-bold mb-4">Admin Feedback</h1>
            {feedbacks.length === 0 ? (
                <p>No feedback available</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">ID</th>
                            <th className="border px-4 py-2">User</th>
                            <th className="border px-4 py-2">Comment</th>
                            <th className="border px-4 py-2">Rating</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map((feedback) => (
                            <tr key={feedback.id} className="text-center">
                                <td className="border px-4 py-2">{feedback.id}</td>
                                <td className="border px-4 py-2">{feedback.user}</td>
                                <td className="border px-4 py-2">{feedback.comment}</td>
                                <td className="border px-4 py-2">{feedback.rating} / 5</td>
                                <td className="border px-4 py-2">
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
