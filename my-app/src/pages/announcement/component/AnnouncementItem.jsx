import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AnnouncementItem.scss';

const dummyPost = [
  { postId: 1, posTitle: '공지사항 1', createAt: '2024.01.01' },
  { postId: 2, posTitle: '공지사항 2', createAt: '2024.01.01' },
  { postId: 3, posTitle: '공지사항 3', createAt: '2024.01.01' },
  { postId: 4, posTitle: '공지사항 4', createAt: '2024.01.01' },
  { postId: 5, posTitle: '공지사항 5', createAt: '2024.01.01' },
];

export const AnnouncementItem = () => {
  const [posts, setPosts] = useState(dummyPost);
  const navigate = useNavigate();

  return (
    <div className="announcement-wrapper">
      <p className="announcement-title">공지사항</p>
      <div className="announcement-list">
        {posts.map((item) => (
          <Link
            to={`/announcement/announcementDetail/${item.postId}`}
            key={item.postId}
            className="announcement-item"
          >
            <div className="announcement-id">0{item.postId}</div>
            <div className="announcement-title-text">{item.posTitle}</div>
            <div className="announcement-date">{item.createAt}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
