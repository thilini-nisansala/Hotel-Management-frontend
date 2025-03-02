import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){

    return(
        <div className="w-full max-h-height-[100vh] overflow-hidden flex">

            <div className="w-[20%] bg-blue-400 h-[100vh] flex flex-col">

                <div className="text-white text-[30px] hover:text-[60px] hover:text-black">
                    <Link to="/admin/bookings">Bookings</Link>
                </div>

                <div className="text-white text-[30px] hover:text-[60px] hover:text-black">
                <Link to="/admin/bookings">Categories</Link>
                </div>

                <div className="text-white text-[30px] hover:text-[60px] hover:text-black">
                    <Link to="/admin/bookings">Rooms</Link>
                </div>

                <div className="text-white text-[30px] hover:text-[60px] hover:text-black">
                    <Link to="/admin/bookings">Users</Link>
                </div>

                <div className="text-white text-[30px] hover:text-[60px] hover:text-black">
                    <Link to="/admin/bookings">Feedback</Link>
                </div>

                <div className="text-white text-[30px] hover:text-[60px] hover:text-black">
                    <Link to="/admin/bookings">Gallary Items</Link>
                </div>

            </div>

        <div className="w-[80%] bg-blue-900">

        </div>

        </div>
    )
}