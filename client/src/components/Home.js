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
                <h1 className="landing-message">Create Your Own Blog Today!</h1>
                <Link className="home-link-signup" to="/signup">SIGN UP</Link>
                </div>
            </div>}
            
            <div className="all-posts-section">
            <Filtered allPosts={allPosts}/>
                <h2>Current Posts</h2>
                {allPosts?.map((post)=>{
                    return <div className="home-post-container">
                    <h3 style={{margin:'15px'}}>{post.title}</h3>
                    <p style={{margin:'15px'}} className="post-content-home">{post.content}</p>
                    <p style={{margin:'15px'}}>Posted by: {post.user.username}</p>
                    <p style={{margin:'15px'}}>Tags: {post.tags.map((tag)=>tag.name).join(',')}</p>
                    </div>
                } )}
            </div>
        </div>
    )
}