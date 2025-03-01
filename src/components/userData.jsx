

function UserTag(props){
   
    return(
        <div className="user-data-dive testing">
            <img src = {props.imageLink} />
            <span>{props.name}</span>
        </div>
    );
}

export default UserTag;