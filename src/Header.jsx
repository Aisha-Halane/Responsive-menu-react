import {useState} from 'react'

function Header(){
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen =()=>{
        setIsOpen(true)
    }


    return <div>
    <div className="  bg-green-700 flex justify-between p-6 text-white ">
      <h1 className="text-5xl font-bold">Tasbih </h1>
      <i onClick={handleOpen} class="fa-solid fa-bars text-5xl sm:hidden"></i>

      <ul className="hidden sm:flex gap-16 text-3xl">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Blogs</li>
      </ul>
      </div>
      
      <ul style={{display: isOpen == true ? "flex" : "" }} className=" hidden  bg-orange-400 text-white space-y-5 flex-col p-2  text-3xl">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Blogs</li>
      </ul>
      
    </div>
        
    
}
export default Header;