// src/pages/post/PostWrite.jsx
import { useState } from 'react';
import axios from 'axios';
import './PostWrite.scss';

export const PostWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState(1); // 기본값은 네편 답변

  const handleSubmit = async () => {
    try {
      const data = {
        user_id: 1,
        worksheet_id: 1,
        title,
        content,
        type,
      };

      const response = await axios.post(
        'http://43.202.217.156:8080/api/posting',
        data
      );

      console.log(response);
    } catch (error) {}
  };

  return (
    <div className="post-write">
      <h2>게시글 작성</h2>

      <label htmlFor="title">게시글 제목</label>
      <input
        id="title"
        type="text"
        placeholder="질문 제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>게시판 선택</label>
      <div className="checkbox-group">
        <label>
          <input
            type="radio"
            name="board"
            value="1"
            checked={type === 1}
            onChange={() => setType(1)}
          />{' '}
          네편 답변
        </label>
        <label>
          <input
            type="radio"
            name="board"
            value="2"
            checked={type === 2}
            onChange={() => setType(2)}
          />{' '}
          네편 정보
        </label>
      </div>

      <label htmlFor="content">게시글 내용</label>
      <textarea
        id="content"
        placeholder="질문 내용을 입력해주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <label>내 결과지 가져오기(선택)</label>
      <div className="upload-box">
        <div className="plus">＋</div>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        등록하기
      </button>
    </div>
  );
};
