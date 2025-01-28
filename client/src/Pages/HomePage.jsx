import CreatePost from "../components/CreatePost";
import { useEffect, useState } from "react";
import { myAxios } from "../Api/myAxios";
import Loading from "../components/Loading";
import Post from "../components/Post";
import { Helmet } from "react-helmet";

export default function HomePage() {
  let [loading, setLoading] = useState(true);
  let [posts, setPosts] = useState([]);
  let [noFeed, setNoFeed] = useState(false);
  useEffect(() => {
    myAxios
      .get("post/feed")
      .then(({ data }) => {
        setPosts(data.feedPosts);
        setNoFeed(false);
      })
      .catch(({ response }) => {
        setPosts(false);
        setNoFeed(response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      {loading && <Loading />}
      {!noFeed &&
        posts.map((post, index) => (
          <Post post={post} posterId={post.postedBy} key={index} />
        ))}
      {noFeed && (
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>{noFeed}</h1>
      )}
      <CreatePost />
    </>
  );
}
