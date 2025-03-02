import { Route, Routes } from "react-router-dom";

export default function AdminPage(){

    return(
        <div className="w-full h-[100vh] bg-red-400">
            <h1>Admin page Booking Rooms categries</h1>
            <Routes path="/*">
                <Route path="/romms" element={
                    <div>
                        <h1>Rooms</h1>
                    </div>
            }/>
            <Route path="/booking" element={
                <div>
                    <h1>Booking</h1>
                    </div>
            }/>
            <Route path="/" element={
                <div>
                    <h1>404</h1>
                </div>
            }/> 

            </Routes>
        </div>
    )
}