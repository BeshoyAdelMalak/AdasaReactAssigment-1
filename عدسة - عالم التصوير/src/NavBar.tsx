import { Link, NavLink } from 'react-router'
import pic from './assets/favicon.png'

function Navbar() {
  return (
<nav className="bg-[#111] text-white fixed top-0 z-50 w-full pt-2">
  <div className="flex w-[85%] mx-auto items-center justify-between">
    <div className='flex items-center'><img src={pic} alt="Adassa" className='h-10 w-10'/>
    <div>
      <h1 className="text-2xl font-bold">عدسة</h1>
      <p className="text-xs text-orange-500">
        عالم التصوير الفوتوغرافي
      </p>
    </div>
    </div>
    <div className="flex items-center bg-[#151515] rounded-full p-2">
      <div className="flex items-center bg-[#151515] rounded-full p-2">
  <NavLink 
    to="/"
    className={({ isActive }) => 
      isActive 
        ? "px-7 py-3 rounded-full bg-orange-500 font-bold text-white " 
        : "px-7 py-3 text-gray-400 hover:text-white"
    }
  >
    الرئيسية
  </NavLink>
  
  <NavLink 
    to="/Blog" 
    className={({ isActive }) => 
      isActive 
        ? "px-7 py-3 rounded-full bg-orange-500 font-bold text-white" 
        : "px-7 py-3 text-gray-400 hover:text-white"
    }
  >
    المدونة
  </NavLink>
  
  <NavLink 
    to="/Aboutus" 
    className={({ isActive }) => 
      isActive 
        ? "px-7 py-3 rounded-full bg-orange-500 font-bold text-white" 
        : "px-7 py-3 text-gray-400 hover:text-white"
    }
  >
    من نحن
  </NavLink>
</div>


      
    </div>
    <Link to="/Blog" className="px-5 py-5 rounded-full bg-orange-500 font-bold hover:bg-orange-600">
      ابدأ القراءة
    </Link>
  </div>
</nav>
)}
export default Navbar;
