import NewTaskBoard from "./components/newTaskBoard";

const rootStyle = {textAlign:'center',fontWeight: '500',fontSize:'40px'};

export default function CreateBoardScreen() {
  return (
    <div style={rootStyle}>
        <span style={{paddingBottom:'32px'}}>Task Board App</span>

      <div className="createTaskBoard">
        <img src="taskBoard.jpg" alt="Task Board" height={'400px'} width={'500px'} />
        <NewTaskBoard />
      </div>
    </div>
  );
}
