import "./sidebar.css"
import { 
    RssFeed,
    Chat,
    OndemandVideo,
    People,
    Work,
    Bookmark,
    Event,
    School,
    GroupAdd,
    Flag,
    ExpandMore
} from '@material-ui/icons'
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <People className="sidebarIcon"/>
                        <span className="sidebarListItemText">Friends</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupAdd className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <Flag className="sidebarIcon"/>
                        <span className="sidebarListItemText">Pages</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Save</span>
                    </li>
                    <li className="sidebarListItem">
                        <OndemandVideo className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Schools</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon"/>
                        <span className="sidebarListItemText">Work</span>
                    </li>
                </ul>
                <button className="sidebarButton"><ExpandMore/>Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Wick</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Wick</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Wick</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Wick</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Wick</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Wick</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Wick</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Wick</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
