import { useEffect, useState } from "react"
import {Link} from 'react-router-dom';
import Filtered from "./Filtered";
// import Post from "./Post";

export default function Home({currentUser}){
    const[allPosts, setAllPosts] = useState([]);
    // const[filterName, setFilter] = useState('');    
    
    useEffect(()=>{
        fetch(`/post`)
        .then((r)=>r.json())
        .then((p)=> setAllPosts(p))
    },[])



    return(
        <div className="home-container">
            {currentUser ? null : <div className="landing-page">
                <div className="landing-page-message">
                <h1 className="landing-message">Sign Up or Login to get started!</h1>
                <Link className="home-link-signup" to="/signup">Sign Up</Link>
                </div>
            </div>}
            
            <div className="all-posts-section">
            <Filtered allPosts={allPosts}/>
                <h2 className="recent-posts">Recent Posts</h2>
                {allPosts?.map((post)=>{
                    return <div className="home-post-container">
                    <h3 style={{margin:'15px'}}>{post.title}</h3>
                    <p style={{margin:'15px'}}>Author: {post.user.username}</p>
                    <p style={{margin:'15px'}}>Tags: {post.tags.map((tag)=>tag.name).join(',')}</p>
                    <p style={{margin:'15px'}} className="post-content-home">{post.content}</p>
                    </div>
                } )}
            </div>
        </div>
    )
}