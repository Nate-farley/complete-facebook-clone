import React, { useState, useEffect } from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from "./firebase";
import {
    collection,
    query,
    onSnapshot,
    orderBy,
  } from "firebase/firestore";


function Feed() {
    const [posts, setPosts] = useState([]);


useEffect(() => {
    const msgsRef = collection(db, "posts");
    const q = query(msgsRef, orderBy('timestamp', 'desc'));
    console.log(msgsRef)
    console.log(q)
    
    onSnapshot(q, (querySnapshot) => {
      let posts = [];
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      });
      setPosts(posts);
      console.log(posts)
    });

}, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender/>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.profilePic}
                    message={post.message}
                    timestamp={post.timestamp}
                    username={post.username}
                    image={post.image}
                />

            ))}

        </div>


    );
}

export default Feed;


