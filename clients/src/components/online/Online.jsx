import './online.css'

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
                <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline">&nbsp;</span>
            </div>
            <span className="rightbarUserName">{user.username}</span>
        </li>
    )
}
