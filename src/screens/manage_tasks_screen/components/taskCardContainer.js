export default function TaskCardContainer({ children, config }) {
  return (
    <div className="taskCardRootContainer">
      <div style={{ fontWeight: "700" }}>{config?.title}</div>
      <div className={"taskCardContainer"}>{children}</div>
    </div>
  );
}
