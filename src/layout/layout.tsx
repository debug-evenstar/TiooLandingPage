import { Outlet } from "react-router";

export default function Layout(){
    return (
        <div className="py-20">
            <Outlet/>
        </div>
    );
}