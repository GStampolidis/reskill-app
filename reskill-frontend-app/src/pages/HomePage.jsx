import { useState, useEffect } from "react";
import MainPost from "../components/MainPost";
import Posts from "../components/Posts";

function Homepage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then(
        (data) => setPosts(data),
        (error) => setError(error+" HomePage UseEffect Error")
      );
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <MainPost />
      <Posts posts={posts} />
    </div>
  );
}

export default Homepage;
