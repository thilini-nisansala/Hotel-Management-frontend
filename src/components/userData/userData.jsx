import "./userData.css";

function UserTag(props){
   
    return(
        <div className="user-data-dive">
            <img src = {props.imageLink} />
            <span>{props.name}</span>
        </div>
    );
}

export default UserTag;