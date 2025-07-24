import './Signup.scss';

export const SignupInputComponent = ({ label, placeholder }) => {
  return (
    <>
      <div>
        <p>{label}</p>
        <input placeholder={placeholder} />
      </div>
    </>
  );
};
