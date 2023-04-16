import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Post from './Post'
import Search from './Search';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((posts) => {
            setPosts(posts.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }

    useEffect(() => {
        getPosts()
    }, []);
    
  return (
    <div>
        <Search/>
        {posts.map((post) => {
           return (
            <Post 
                key={post.id} 
                // post={post} 
                userId={post.userId} 
                title={post.title} 
                body={post.body}
            />
           )
        }
        )}
    </div>
  )
}
