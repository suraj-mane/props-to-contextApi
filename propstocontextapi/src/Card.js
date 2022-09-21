import { useContext } from "react";
import { UserInfoContext } from "./utils/userInfoContext";

export default function Card() {

	let userInfo = useContext(UserInfoContext);

  return (
		<div className="card">
			<div className="card-info">
			  <img src={userInfo.userInfo.avatarURL} alt="Avatar" style={{ width: "50%", height: "50%" }} />
				<h4>
					<b>{userInfo.userInfo.name}</b>
				</h4>
			</div>
				<p>{userInfo.userInfo.description}</p>
		</div>
  );
}
