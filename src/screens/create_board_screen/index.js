import NewTaskBoard from "./components/newTaskBoard";

const rootStyle = {textAlign:'center',fontWeight: '500',fontSize:'40px'};

export default function CreateBoardScreen() {
  return (
    <div className="screen-container">
    <div style={rootStyle}>

     <div style={{marginBottom: 16}}>  <span >Task Board App</span>
      
      </div> 

      <div className="createTaskBoard">
        <img src="taskBoard.jpg" alt="Task Board" height={'400px'} width={'500px'} />
        <NewTaskBoard />
      </div>
    </div>

    </div>
  );
}
