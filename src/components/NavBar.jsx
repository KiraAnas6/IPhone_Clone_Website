import { searchImg , bagImg , appleImg } from "../utils"
import { navLists } from "../constants"
const NavBar = () => {
  return (
    <header className="w-full">
        <nav className="w-full screen-max-width py-5 sm:px-10 px-5 flex items-center justify-between">
            <img src={appleImg} alt="Apple" width={14} height={18} />
            <div className="max-sm:hidden flex">
                {navLists.map((nav) => (
                    <div key={nav} className="px-5 cursor-pointer text-sm text-gray hover:text-white transition-all">{nav}</div>
                ))}
            </div>
            <div className="max-sm:flex-1 flex max-sm:justify-end gap-7">
                <img src={searchImg} alt="Search Icon" width={18} height={18}/>
                <img src={bagImg} alt="Bag Icon" width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default NavBar