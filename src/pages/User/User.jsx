import { useSelector } from "react-redux";
import style from "./user.module.scss";
import UserInfo from "../../components/userInfo/UserInfo";
import EditUser from "../../components/editUser/EditUser";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";

const User = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    !currentUser && navigate("/");
  }, [currentUser]); //eslint-disable-line

  return (
    <>
      {currentUser && (
        <>
          <NavBar />
          <div className={style.UserComponent}>
            <div className={style.TitleContainer}>
              <h1>Edit User</h1>
            </div>
            <div className={style.UserContainer}>
              <div className={style.UserInfo}>
                <UserInfo user={currentUser} />
              </div>
              <div className={style.EditUser}>
                <EditUser user={currentUser} />
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default User;
