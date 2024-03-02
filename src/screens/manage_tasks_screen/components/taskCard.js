export default function TaskCard({ heading, description, borderColor }) {
  return (
    <div className="taskCard" style={{ borderLeft: borderColor }}>
      <div className="taskCardHeader">
        <span>{heading}</span>
        <span>Image</span>
      </div>
      <div className="horizontal-line"></div>
      <div className="taskCardContent">
        <span>{description}</span>
      </div>
    </div>
  );
}
