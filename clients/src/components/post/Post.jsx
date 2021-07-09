import './post.css'
import { MoreVert, ThumbUpAlt, ChatBubbleOutline, Share } from '@material-ui/icons'
import {Users} from '../../dumdata'
import { useState } from 'react'

export default function Post({post}) {

    const userName = Users.filter(item => item.id === post.userId)[0].username
    const userImg = Users.filter(item => item.id === post.userId)[0].profilePicture
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const [isActive, setActive] = useState(false);
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1 )
        setIsLiked(!isLiked)
        setActive(!isActive);
    }
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
                        <MoreVert className="postTopRightIcon"/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                {/* <hr /> */}
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="" className="likeIcon" />
                        {/* <img src="assets/heart.png" alt="" className="likeIcon" /> */}
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentsText">{post.comment} comments</span>
                    </div>
                </div>
                <hr className="postHr" />
                <div className="postActions">
                    <div className={isActive ? "postActionLike" : ""}>
                        <div className="postAction " onClick={ likeHandler }>
                            <ThumbUpAlt className="postActionIcon"/> 
                            <span className="postActionLikeText">Like</span>
                            </div>
                        </div>
                    <div className="postActionComment postAction">
                        <ChatBubbleOutline className="postActionIcon"/> 
                        <span className="postActionCommentText">Comment</span>
                    </div>
                    <div className="postActionShare postAction">
                        <Share className="postActionIcon"/> 
                        <span className="postActionShareText">Share</span>
                    </div>
                </div>
                <hr className="postHr"/>
                <div className="postInputComments">
                    <img src="assets/person/avata.jpg" alt="" className="postInputCommentProfileImg" />
                    <input type="text" className="postInputComment" placeholder="Write a comment..." />
                </div>
            </div>
        </div>
    )
}
