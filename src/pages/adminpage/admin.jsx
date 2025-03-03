import { Link, Route, Routes } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdOutlineCategory, MdOutlineRoom, MdPeopleOutline, MdFeedback, MdPhotoLibrary } from "react-icons/md";
import AdminBookings from "../admin/Bookings/adminBooking";
import AdminCategories from "../admin/categories/adminCategories";
import AdminRooms from "../admin/rooms/rooms";
import AdminUsers from "../admin/users/users";
import AdminFeedback from "../admin/feedback/feedback";
import AdminGalleryItems from "../admin/galleryItems/galleryitems";




export default function AdminPage() {
    return (
        <div className="w-full max-h-[100vh] overflow-hidden flex">
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

            <div className="w-[80%] max-h-[100vh] overflow-y-scroll bg-blue-900">
                {/* Admin page content goes here */}
                <Routes>
                    <Route path="/bookings" element={<AdminBookings />} />
                    <Route path="/categories" element={<AdminCategories/>} />
                    <Route path="/rooms" element={<AdminRooms/>} />
                    <Route path="/users" element={<AdminUsers/>} />
                    <Route path="/feedback" element={<AdminFeedback/>} />
                    <Route path="/gallery-Items" element={<AdminGalleryItems/>} />
                </Routes>
            </div>
        </div>
    );
}
