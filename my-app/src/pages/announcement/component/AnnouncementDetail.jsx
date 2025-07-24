import './AnnouncementDetail.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const dummyPost = [
  {
    postId: 1,
    posTitle: '공지사항 1',
    createAt: '2024.01.01',
    content: '공지사항 1 내용입니다.',
  },
  {
    postId: 2,
    posTitle: '공지사항 2',
    createAt: '2024.01.02',
    content: '공지사항 2 내용입니다.',
  },
];

export const AnnouncementDetail = () => {
  const [posts] = useState(dummyPost);
  const { id } = useParams();

  const post = posts.find((p) => p.postId === parseInt(id));

  if (!post) return <p>해당 공지사항을 찾을 수 없습니다.</p>;

  return (
    <div>
      <div className="announcement1-title">
        <div className="title-main">{post.posTitle}</div>
        <div className="title-suv">주요</div>
      </div>
      <div className="announcement1-date">
        <p>{post.createAt}</p>
      </div>
      <div className="announcement1-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
};
