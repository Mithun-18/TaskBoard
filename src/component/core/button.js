import "./../../../src/styles.css";

export default function Button({ bName ,onClick}) {
  return <button className="button" onClick={()=> onClick?.()}>{bName}</button>;
}
