import UserTag  from "./userData";


function Header(){
    return(
        <header className="w-full bg-blue-500">
              <h1 className=" text-2xl font-bold text-red-600 ml-5">Hotel Management System</h1>
            
              <UserTag imageLink="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png" name="Testing"/>
                  
        </header>
      
    )
}
export default Header;