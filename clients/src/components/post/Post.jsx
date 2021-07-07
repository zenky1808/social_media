import './post.css'
import { MoreVert } from '@material-ui/icons'
import {Users} from '../../dumdata'

export default function Post({post}) {

    const userName = Users.filter(item => item.id === post.userId)[0].username
    const userImg = Users.filter(item => item.id === post.userId)[0].profilePicture
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={userImg} alt="" className="postProfileImg" />
                        <span className="postUserName">{userName}</span>
                        <div className="postDate">{post.date}</div>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="" className="likeIcon" />
                        {/* <img src="assets/heart.png" alt="" className="likeIcon" /> */}
                        <span className="postLikeCounter">{post.like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentsText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
