export default function TextFeild({
  placeHolder,
  inputRef,
  type = "text",
  focus=false,
}) {
  return (
    <input
      type={type}
      placeholder={placeHolder + " *"}
      className={"inputField"}
      ref={inputRef}
      autoFocus={focus}
    />
  );
}
