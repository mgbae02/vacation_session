import { useState } from 'react'; // ⭐ useState import
import './AnnouncementItem.scss';

const dummyPost = [
  { postId: 1, posTitle: '공지사항 1', createAt: '2024-01-01' },
  { postId: 2, posTitle: '공지사항 2', createAt: '2024-01-01' },
  { postId: 3, posTitle: '공지사항 3', createAt: '2024-01-01' },
];

export const AnnouncementItem = () => {
  const [posts, setPosts] = useState(dummyPost);

  return (
    <div>
      <p>공지사항</p>
      <div>
        {posts.map((item, index) => (
          <div key={item.postId}>
            <strong>{item.posTitle}</strong> - {item.createAt}
          </div>
        ))}
      </div>
    </div>
  );
};
