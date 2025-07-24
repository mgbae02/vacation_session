// src/pages/post/PostDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import './PostDetail.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const postId = localStorage.getItem('postId');

    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://43.202.217.156:8080/api/posting/${postId}`
        );

        setPost(response.data);
      } catch (error) {
        console.log('error');
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log(post);
  }, []);

  // Mock 데이터
  const posts = [
    {
      id: 1,
      title: '해당 사안에도 주휴수당이 발생하는지 궁금합니다',
      content:
        '물류센터 아르바이트 하고 있는데 법정 공휴일 주휴수당 발생 궁금...',
      author: '코카콜라',
      date: '2024.04.01',
      result:
        '상시 5인 이상 사업장에서 근무하시므로 추가적인 가산 수당이 발생합니다.',
      salary: 800000,
    },
    {
      id: 4,
      title: '계약직도 연장여부 미리 말해줘야 하나요?',
      content:
        '정규직일때는 해고하기 한달전에 말해줘야 한다는 법이 있다던데요. 계약직도 그런가요? 예를들어 1개월 계약직이면 1개월만 계약할거고 더 연장의사 없다.라고 말해줘야 하는건가요? 아니면 그냥 계약기간 끝나면 끝나는거고 그런건가요?',
      author: '코카콜라',
      date: '2024.05.11',
      result:
        '주 근로 시간이 14 시간이므로 주휴수당이 발생하지 않습니다. 한 주 동안 야간 근로시간이 0 시간이므로 야간근로수당 0원이 발생합니다.',
      salary: 800000,
    },
  ];

  // 현재 게시글 찾기

  if (!post) {
    return (
      <div className="post-detail-wrapper">
        <div className="post-detail">
          <h2>해당 게시글을 찾을 수 없습니다.</h2>
          <div className="footer-buttons">
            <button className="back-btn" onClick={() => navigate('/post')}>
              목록으로
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="post-detail-wrapper">
      {post && (
        <div className="post-detail">
          <h2>Q. {post.title}</h2>
          <div className="post-meta">
            <span className="author">{post.author}</span>
            <span className="date">{post.date}</span>
          </div>

          <div className="post-content">{post.content}</div>

          <div className="result-box">
            <h4>근무지 이름 근로 결과지</h4>
            <p>{post.result}</p>
            <p>
              <strong>
                따라서, {post.author} 님의 월급은{' '}
                <span className="salary">{post.salary}원</span> 입니다.
              </strong>
            </p>

            <div className="badges">
              <span className="badge active">주휴수당</span>
              <span className="badge">야간근로수당</span>
              <span className="badge">연장근로수당</span>
              <span className="badge">휴일근로수당</span>
            </div>
          </div>

          <div className="bookmark-box">🔖</div>

          <div className="comment-form">
            <h4>{post.author}</h4>
            <textarea placeholder="답변을 남겨주세요" />
            <button className="reply-btn">답변 달기</button>
          </div>

          <div className="comment-sort">
            <button>좋아요순</button>
            <button>최신순</button>
          </div>

          <div className="comment-empty">작성된 댓글이 없습니다.</div>

          <div className="footer-buttons">
            <button className="back-btn" onClick={() => navigate('/post')}>
              목록
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
