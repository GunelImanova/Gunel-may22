import './style.css'
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
function index() {
  return (
    <>
    
    <div className='navbar'>
        <div className='coloshop'>COLOSHOP</div>
 <div className='link'>
   <ul className='link1'>
    <li>HOME</li>
    <li>SHOP</li>
    <li>PROMOTION</li>
    <li>PAGES</li>
    <li>BLOG</li>
    <li>CONTACT</li>
   </ul>
 </div>
 <div className="icon">
 <ul className='icon1'>
    <li><CiSearch /></li>
 <li><FaUser /></li>
<li><FaBasketShopping /></li>
 </ul>
 </div>
    </div>
    
    </>
  )
}

export default index