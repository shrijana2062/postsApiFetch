import { useEffect, useState } from "react";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      let res = await fetch("https://dummyjson.com/posts");
      res = await res.json();
      console.log(res.posts); 
      setPosts(res.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {posts.length > 0 ? (
        <div className="parent">
          {posts.map((item) => {
            return (
              <div key={item.id} className="child">
                <p>{item.title}</p>
                <p>{item.body}</p>
                <p>Tags: {item.tags.join(", ")}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading...................</div>
      )}
    </div>
  );
}

export default Posts;