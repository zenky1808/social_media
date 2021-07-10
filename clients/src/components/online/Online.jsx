import './online.css'

export default function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
                <img src={PF+user.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline">&nbsp;</span>
            </div>
            <span className="rightbarUserName">{user.username}</span>
        </li>
    )
}
