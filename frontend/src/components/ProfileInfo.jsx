import React from "react";
import { getInitials } from "../utils/helpers";

const ProfileInfo = ({ userInfo, onLogout }) => {
  if (!userInfo) {
    return null; // Render nothing if userInfo is null
  }
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials(userInfo?.fullName)}
      </div>

      <div className="">
        <p className="text-sm font-medium">{userInfo.fullName}</p>
        <button className="text-sm text-slate-400 underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
