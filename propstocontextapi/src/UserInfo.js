import { useContext } from "react";
import { UserInfoContext } from "./utils/userInfoContext";

export default function UserInfo(props) {

  let userInfo = useContext(UserInfoContext);

  return (
    <div className="user-info">
      <img
        className="user-avatar"
        src={userInfo.userInfo.avatarURL}
        width="50"
        height="50"
        alt="User Avatar"
      />
      <p>{userInfo.userInfo.name}</p>
    </div>
  );
}
