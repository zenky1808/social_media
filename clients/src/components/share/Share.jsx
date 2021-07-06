import './share.css'
import { PermMedia, Mood , Videocam} from '@material-ui/icons'
export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input placeholder="What's on your mind, Anh? " type="text" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Videocam htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Live/Video</span>
                        </div>
                        <div className="shareOption">
                            <PermMedia htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <Mood htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feeling/Activity</span>
                        </div>
                    </div>
                    <button className="shareButton">Post</button>
                </div>
            </div>
        </div>
    )
}
