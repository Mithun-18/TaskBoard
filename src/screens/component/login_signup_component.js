import Button from "../../component/core/button";
import TextFeild from "../../component/core/textFeild";

export default function LoginSingupComponent({
  heading,
  userNameRef,
  passwordRef,
  bName,
  onHandleClick,
}) {
  return (
    <div className="screen-container">
      <div className="rootLoginScreen">
        <div style={{ height: 600, width: 600 }}>
          <img
            height={"100%"}
            width={"100%"}
            src="login_image.jpg"
            alt="login_image"
          />
        </div>
        <div className="loginScreen">
          <span className="heading">{heading}</span>
          <TextFeild placeHolder={"User Name"} inputRef={userNameRef} focus={true}/>
          <TextFeild
            placeHolder={"Password"}
            inputRef={passwordRef}
            type={"password"}
          />
          <Button bName={bName} onClick={onHandleClick} />
        </div>
      </div>
    </div>
  );
}
