export default function TextFeild({ placeHolder, inRef, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeHolder + " *"}
      className={"inputField"}
      ref={inRef}
    />
  );
}
