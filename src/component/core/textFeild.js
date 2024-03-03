export default function TextFeild({ placeHolder, inputRef, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeHolder + " *"}
      className={"inputField"}
      ref={inputRef}
    />
  );
}
