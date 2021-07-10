import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
// import {Posts} from '../../dumdata'
import { useEffect, useState} from 'react';
import axios from 'axios'

export default function Feed() {

    const [posts, setPost] = useState([])

    useEffect( () => {
        const fetchPost = async () => {
            const res = await axios.get("post/timeline/60e9a1faf1546631182ac15d")
            setPost(res.data)
        }
        fetchPost()
    }, [])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                { posts.map(item => (
                    <Post key={ item._id } post={ item }/>
                ))}
                
            </div>
        </div>
    )
}
