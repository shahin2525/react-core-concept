/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  return (
    <div className="post">
      <p>title:{post.title}</p>
      <p>title:{post.userId}</p>
    </div>
  );
};

export default Post;
