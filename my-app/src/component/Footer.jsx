import './Footer.scss';

export const Footer = () => {
  return (
    <div>
      <div className="footer_header">
        <div className="footer_text">
          <p>회사소개</p>
          <p>개인정보처리방침</p>
          <p>영상정보처리기기운영 관리방침</p>
          <p>이용약관</p>
          <p>청소년보호방침</p>
        </div>
        <div className="footer_sns">
          <p>인스타그램</p>
          <p>카카오톡</p>
        </div>
      </div>

      <div className="footer_main">
        <div className="footer_left">
          <p>네편</p>
          <p>대표이사</p>
          <p>주소</p>
          <p>사업자등록번호</p>
          <p>개인정보보호책임자</p>
          <p>이메일</p>
          <p>Copyright</p>
        </div>
        <div className="footer_right">
          <p>1234-5678</p>
          <p>오전9시~오후6시(토요일,공휴일 휴뮤)</p>
        </div>
      </div>
    </div>
  );
};
