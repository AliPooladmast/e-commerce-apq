import React from "react";
import style from "./userInfo.module.scss";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

const UserInfo = ({ user }) => {
  return (
    <div className={style.UserInfo}>
      <div className={style.Top}>
        {user.img ? (
          <img src={user.img} alt="user profile" />
        ) : (
          <Avatar sx={{ width: 50, height: 50 }} />
        )}
        <div className={style.TitleContainer}>
          <span className={style.Name}>{user.fullName || user.username}</span>
          <span className={style.Title}>{user.title}</span>
        </div>
      </div>
      <div className={style.Bottom}>
        <span className={style.Title}>Account Details</span>
        <div className={style.Info}>
          <PermIdentity className={style.Icon} />
          <span>{user.username}</span>
        </div>
        <div className={style.Info}>
          <CalendarToday className={style.Icon} />
          <span>{user.birthdate || "-- / -- / ----"}</span>
        </div>
        <span className={style.Title}>Contact Details</span>
        <div className={style.Info}>
          <PhoneAndroid className={style.Icon} />
          <span>{user.phoneNumber || "-------"}</span>
        </div>
        <div className={style.Info}>
          <MailOutline className={style.Icon} />
          <span>{user.email}</span>
        </div>
        <div className={style.Info}>
          <LocationSearching className={style.Icon} />
          <span>{user.address || "-----"}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;