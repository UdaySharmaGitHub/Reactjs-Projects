import { MdLightMode } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { ResponsivMenu } from "./ResponsivMenu";
import { useState } from "react";
// Menu Icon 
import { RiMenuFill } from "react-icons/ri"; // Open Menu
import { RiMenu3Fill } from "react-icons/ri"; // Close Menu


export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "CARS",
    link: "/#cars",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 4,
    name: "BOOKING",
    link: "/#booking",
  },
];
export const Navbar = ({theme,setTheme}) => {
  const [showMenu,setShowMenu] = useState(false);
  const toggleMenu = ()=> setShowMenu(!showMenu);
  return (
    <nav className="shadow-md bg-white dark:bg-dark py-2 md:py-0 dark:text-white duration-200 relative z-10">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1
            className="text-3xl font-bold font-serif uppercase dark:text-lightPrimary">Crent</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {Navlinks.map((data) => (
                <li
                key={data.id} className="py-4">
                  <a href={data.link} className="py-2 hover:text-primary hover:border-b-2 hover:border-primary transition-colors duration-500 text-lg font-medium">
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2 justify-center items-center">
            {/* Dark Mode Icon */}
          <div className="duration-200">
            {
                theme === "dark"? 
                (<MdLightMode
                  onClick={()=>setTheme('light')}
                   className="text-4xl"/>):(
                   <GiNightSleep
                    onClick={()=>setTheme('dark')}
                    className="text-4xl"/>)
            }
          </div>
            
          {/* Mobile Humbur Menu */}
          {
            showMenu?
            (
              <RiMenu3Fill
              size={30}
                className = "cursor-pointer transition-all"
                onClick ={toggleMenu} />):
            (<RiMenuFill 
              size={30}
              className = "cursor-pointer transition-all"
              onClick ={toggleMenu}
              />)
          }
          </div>
        </div>
      </div>
      <ResponsivMenu showMenu={showMenu} setShowMenu={setShowMenu} theme={theme}/>
    </nav>
  );
};
