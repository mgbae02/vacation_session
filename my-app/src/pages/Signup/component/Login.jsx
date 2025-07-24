import { SignupInputComponent } from './SignupInputComponent';
import './Login.scss';

export const Login = () => {
  return (
    <div className="loginContainer">
      <div className="inputGroup">
        <SignupInputComponent
          label="아이디"
          placeholder="아이디를 입력하세요"
        />
        <SignupInputComponent
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <div className="login">
        <button className="loginButton">로그인</button>
      </div>
    </div>
  );
};
