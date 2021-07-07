import "./rightbar.css"
import Online from "../online/Online"
import {Users} from '../../dumdata'

export default function Rightbar() {

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>John</b> and <b>3 people</b> have a birthday to day</span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAdd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendLists">
                    {Users.map(item => 
                        <Online key={item.id} user={item}/>
                    )}
                </ul>
            </div>
        </div>
    )
}
