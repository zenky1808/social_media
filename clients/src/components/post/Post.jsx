
import './post.css'
import { MoreVert, ThumbUpAlt, ChatBubbleOutline, Share } from '@material-ui/icons'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'


export default function Post({post}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [isActive, setActive] = useState(false)
    const [user, setUser] = useState({})

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1 )
        setIsLiked(!isLiked)
        setActive(!isActive);
    }

    useEffect( () => {
        const fetchUser = async () => {
            const res = await axios.get(`user/${post.userId}`)
            setUser(res.data)
        }
        fetchUser()
        
    }, [post.userId])

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture || PF+"person/noAvatar.png"} alt="" className="postProfileImg" />
                        <div className="potsProfile">
                            <span className="postUserName">{user.userName}</span>
                            <div className="postDate">{format(post.createdAt)}</div>
                        </div>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="postTopRightIcon"/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF+post.img} alt="" className="postImg" />
                </div>
                {/* <hr /> */}
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" className="likeIcon" />
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
                    <img src={`${PF}person/avata.jpg`} alt="" className="postInputCommentProfileImg" />
                    <input type="text" className="postInputComment" placeholder="Write a comment..." />
                </div>
            </div>
        </div>
    )
}
