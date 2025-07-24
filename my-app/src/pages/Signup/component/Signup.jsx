import { SignupInputComponent } from './SignupInputComponent';
import './Signup.scss';

export const Signup = () => {
  return (
    <div className="signupContainer">
      <div className="inputGroup">
        <SignupInputComponent
          label="아이디"
          placeholder="아이디를 입력하세요"
        />
        <SignupInputComponent
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
        />
        <SignupInputComponent
          label="이메일"
          placeholder="이메일을 입력하세요"
        />
        <SignupInputComponent label="이름" placeholder="이름을 입력하세요" />
        <SignupInputComponent
          label="닉네임"
          placeholder="닉네임을 입력하세요"
        />
      </div>
      <div className="signup">
        <button className="signupButton">가입하기</button>
      </div>
    </div>
  );
};
