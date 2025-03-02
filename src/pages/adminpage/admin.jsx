import { Link, Route, Routes } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdOutlineCategory, MdOutlineRoom, MdPeopleOutline, MdFeedback, MdPhotoLibrary } from "react-icons/md";

export default function AdminPage() {
    return (
        <div className="w-full max-h-height-[100vh] overflow-hidden flex">
            <div className="w-[20%] bg-blue-400 h-[100vh] flex flex-col">
                <Link to="/admin/bookings" className="text-white text-[30px] hover:font-bold flex items-center gap-2">
                    <CiBookmarkCheck /> Bookings
                </Link>
                <Link to="/admin/categories" className="text-white text-[30px] hover:font-bold flex items-center gap-2">
                    <MdOutlineCategory /> Categories
                </Link>
                <Link to="/admin/rooms" className="text-white text-[30px] hover:font-bold flex items-center gap-2">
                    <MdOutlineRoom /> Rooms
                </Link>
                <Link to="/admin/users" className="text-white text-[30px] hover:font-bold flex items-center gap-2">
                    <MdPeopleOutline /> Users
                </Link>
                <Link to="/admin/feedback" className="text-white text-[30px] hover:font-bold flex items-center gap-2">
                    <MdFeedback /> Feedback
                </Link>
                <Link to="/admin/gallery" className="text-white text-[30px] hover:font-bold flex items-center gap-2">
                    <MdPhotoLibrary /> Gallery Items
                </Link>
            </div>

            <div className="w-[80%] bg-blue-900">
                {/* Admin page content goes here */}
            </div>
        </div>
    );
}
