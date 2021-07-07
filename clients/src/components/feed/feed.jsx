import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts} from '../../dumdata'

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                { Posts.map(item => (
                    <Post key={ item.id } post={ item }/>
                ))}
                
            </div>
        </div>
    )
}
