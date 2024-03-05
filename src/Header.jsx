import {useState} from 'react'

function Header(){
    const [isOpen , setIsOpen] = useState(false)
    const handleIsOpen = () =>
{
    setIsOpen(true)
}
const handleClose = () => {
    setIsOpen(false)
}
  return(
        <div className="">
        <div className="bg-teal-500 p-5 flex justify-between text-white">
            <h1 className="font-semibold text-white text-center text-3xl">Light</h1>
            <i style={{display : isOpen == true ? "none" : " "}} onClick={handleIsOpen} class="fa-solid fa-bars text-5xl font-bold sm:hidden"></i>
            <i onClick={handleClose} style={{display : isOpen == true ? "block" : "none"}} class="fa-solid fa-x text-5xl font-bold"></i>
             <ul className="hidden sm:flex gap-16 text-2xl ">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
             </ul>
             
             

          </div>
          <div className="">
              <ul style={{display : isOpen == true ? "flex" : "" }} className="hidden absolute w-full bg-orange-500 text-white flex-col space-y-3  gap-16 text-2xl ">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
             </ul>
          </div>
        </div>
        
    )
}
export default Header;