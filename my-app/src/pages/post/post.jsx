// src/pages/post/Post.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ 추가
import { PostItem } from './component/PostItem';
import { useEffect } from 'react';
import axios from 'axios';
import './post.scss';

export const Post = () => {
  const [activeTab, setActiveTab] = useState('answer');
  const navigate = useNavigate(); // ✅ 선언

  const [popularPosts, setPopularPosts] = useState([
    {
      id: 1,
      title: '해당 사안에도 주휴수당이 발생하는지 궁금합니다',
      preview: '물류센터 아르바이트 하고 있는데...',
      date: '2024.04.01',
    },
    {
      id: 2,
      title: '공휴일 알바 대타해도 휴일근로수당 발생하나요?',
      preview: '이번 15일 부처님 오신 날에...',
      date: '2024.04.02',
    },
    {
      id: 3,
      title: '퇴사시 문제가 생길까요? (매장관리)',
      preview: '지금 현재 1년 계약직으로...',
      date: '2024.04.03',
    },
  ]);

  const [posts, setPosts] = useState([
    {
      id: 4,
      title: '계약서 쓴 날짜 보다 미리 와서 2시간 있다갔어요.',
      preview:
        '물류센터 아르바이트 하고 있는데 5월1일 근로자의날이나 6일 대체 공휴일 같은 날은...',
      date: '2024.04.11',
    },
    {
      id: 5,
      title: '공휴일 알바 대타해도 휴일근로수당 발생하나요?',
      preview:
        '이번 15일 부처님 오신 날에 알바 대타 해주기로 했는데 이럴 경우...',
      date: '2024.04.10',
    },
    {
      id: 6,
      title: '퇴직금 이래도 받을 수 있나요?',
      preview:
        '1년 넘게 일했는데 시급을 올려주지 않아 퇴사했어요. 그런데 퇴직금을 안 준다네요...',
      date: '2024.04.09',
    },
  ]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'http://43.202.217.156:8080/api/posting/list/1'
        );

        console.log(response.data.data);

        setPosts(response.data.data);

        console.log('post는: ' + posts);
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-wrapper">
      <div className="post-tab">
        <button
          className={activeTab === 'answer' ? 'active' : ''}
          onClick={() => setActiveTab('answer')}
        >
          네편 답변
        </button>
        <button
          className={activeTab === 'info' ? 'active' : ''}
          onClick={() => setActiveTab('info')}
        >
          네편 정보
        </button>
      </div>

      <section className="post-section popular">
        <h2>인기게시글</h2>
        <div className="popular-list">
          {popularPosts.map((post) => (
            <div className="popular-card" key={post.id}>
              <h3>Q. {post.title}</h3>
              <p>{post.preview}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="post-section">
        <div className="post-list-header">
          <h2>게시글</h2>
          <button className="write-btn" onClick={() => navigate('/write')}>
            게시글 작성
          </button>
        </div>

        <ul className="post-list">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </ul>
      </section>

      <div className="pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>&gt;</span>
        <span>&gt;&gt;</span>
      </div>
    </div>
  );
};
