import { Outlet } from "react-router-dom";
import AuthNav from "./partials/authNav";

export default function AuthLayout() {
  return (
    <div className="w-full bg-white h-screen text-[14px] ">
      <AuthNav />
      <div className="h-[calc(100%_-_90px)]">
        <Outlet />
      </div>
    </div>
  );
}
