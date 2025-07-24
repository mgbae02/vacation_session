// src/pages/post/component/PostItem.jsx
import { useNavigate } from 'react-router-dom';
import './PostItem.scss';

export const PostItem = ({ post }) => {
  const navigation = useNavigate();

  const handleClick = () => {
    localStorage.setItem('postId', post.id);

    navigation(`detail`);
  };

  return (
    <li className="post-item">
      <h3>Q. {post.title}</h3>
      <p>{post.content}</p>
      <div className="post-item-footer">
        <span>{post.created_at}</span>
        <button className="detail-btn" onClick={handleClick}>
          자세히 보기 →
        </button>
      </div>
    </li>
  );
};
