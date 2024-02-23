export default function TaskCard({heading,description,borderColor}){
    return(<div className="taskCard" style={{borderLeft:borderColor}}>
        <div className="taskCardHeader">
            <span>{heading}</span>
            <span>Image</span>
        </div>
        <div style={{height:'1px',backgroundColor: 'rgba(0, 0, 0, 0.12)'}}></div>
        <div className="taskCardContent">
            <p>{description}</p>
        </div>
    </div>);
}