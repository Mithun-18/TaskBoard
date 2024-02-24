export default function TaskCardContainer({ children, todoState }) {
  return (
    <div className="taskCardRootContainer">
      <div style={{ fontWeight: "700" }}>{todoState?.title}</div>
      <div className={"taskCardContainer"}>{children}</div>
    </div>
  );
}
