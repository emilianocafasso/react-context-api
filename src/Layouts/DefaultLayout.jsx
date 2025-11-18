import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function defaultLayout() {

    return (
        <>
            <Navbar />
            <Outlet />
            {/* inserisci footer */}
        </>
    )

}