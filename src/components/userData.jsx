

function UserTag(props){
   
    return(
        <div className="absolute right-0 flex items-center cursor-pointer mr-2">


            <img className="rounded-full w-[75px] h-[75px]" 
            src = {props.imageLink} />


            <span className="text-white ml-[5px] text-xl ">{props.name}</span>
        </div>
    );
}

export default UserTag;