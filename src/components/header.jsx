import UserTag  from "./userData";


function Header(){
    return(
        <header className="w-full bg-blue-500 flex h-[100px] relative items-center p-[10px]">
              <h1 className=" text-white text-[30px]">Leonine villa</h1>
            
              <UserTag imageLink="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png" name="Thili Nisansala"/>
                  
        </header>
      
    )
}
export default Header;