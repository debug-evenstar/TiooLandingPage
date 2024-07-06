import { Outlet } from "react-router-dom";
import AuthNav from "./partials/authNav";

export default function AuthLayout() {
  return (
    <div className="w-full   h-[40vh] bg-black text-[14px] ">
      <AuthNav />
      <div className="h-[calc(100vh_-_90px)]">
        <Outlet />
      </div>
    </div>
  );
}
