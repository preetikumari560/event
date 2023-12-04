import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import { Link } from 'react-router-dom';


const Header=()=>{

return(
<ul className="flex  mx-auto  h-16 bg-white mb-5 shadow-md">
<Link to="/event">
<span className="mr-20 my-5 flex hover:text-gray-500  ml-5 md:ml-32 "><LocalActivityOutlinedIcon/><li >Events</li></span>
</Link>
<Link to="/">
<span className="mr-20 my-5 flex hover:text-gray-500"><CalendarMonthOutlinedIcon/><li  >Calendar</li></span>
</Link>
<span className=" my-5 flex hover:text-gray-500"><ExploreOutlinedIcon/><li >Explore</li></span>


</ul>

)


}



export default Header