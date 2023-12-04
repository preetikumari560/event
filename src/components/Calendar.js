import  React from 'react';
import {timeZone} from "./timezones"
import { useState } from "react"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Switch from '@mui/material/Switch'

import { addItem} from "../utils/eventSlice";
import { useDispatch } from "react-redux";
import ImgSelector from './ImgSelector';
import { useNavigate } from 'react-router-dom';
import Theme from './Theme';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';

const Calendar=()=>{
 const navigate = useNavigate();
const [name,setName]= useState(null)
const [location, setLocation]= useState()
const [capacity, setCapacity]= useState()
const [ticket, setTicket]= useState("*Free")
const [isrequired, isSetRequired]= useState(false)
 const [isEditable, setIsEditable] = useState(false);
 const [currentDate] = useState(new Date());
const [selectedTimeZone, setSelectedTimeZone] = useState('UTC')
const [visibility,setVisibility]=useState()


// Inside  Calendar component

const [startDate, setStartDate] = useState(); // For the start date
const [startTime, setStartTime] = useState(); // For the start time
const [endDate, setEndDate] = useState(); // For the end date
const [endTime, setEndTime] = useState(); // For the end time
 const [selectedImage, setSelectedImage] = useState(null);
const [style,setStyle]=useState("bg-gradient-to-t from-[#c1dfc4] from-0% via-[#e3eeff] via-50% to-[#deecdd] to-100%")
const dispatch= useDispatch()



  const handleTimeZoneChange = (event) => {
    setSelectedTimeZone(event.target.value);
  };

  const handleChange = (event) => {
    isSetRequired(event.target.checked);
  };

  const handleVisibility=(event)=>{
    setVisibility(event.target.value)
  }


  const day = currentDate.getDate();

  const mnth=currentDate.getMonth()+1;
    console.log(mnth)
  const month = currentDate.toLocaleString('default', { month: 'short' ,   timeZone: selectedTimeZone,}) // Adding 1 to convert from 0-indexed to 1-indexed



    const options = {
  weekday: 'short', // 'short', 'long', or 'narrow'

  month: 'short', // 'short', or 'numeric'
  day: 'numeric',
};

const formattedDate = currentDate.toLocaleString('en-US', options);                                   

const optionsTime = {
  hour: 'numeric',
  minute: 'numeric',

  hour12: true,
};

const formattedTime = currentDate.toLocaleTimeString('en-US', optionsTime);




const eventAdd = () => {

 if (!startDate || !startTime || !name || !location ||!endDate || !endTime  ) {
    // Display an error message or take any other appropriate action
    alert("Please fill in name, start date, start time,end date ,end time  and location.");
    return;
  }
 const currentDate = new Date();
   if (startDate < currentDate || endDate < currentDate) {
    alert("Start date and end date must not be Present and past date.");
    return;
  }
 const day = startDate.format('D'); // day of the month
  const month = startDate.format('M'); // month (1-indexed)
  const year = startDate.format('YYYY'); // year
  dispatch(
    addItem({
      name: name,
      location: location,
      capacity: capacity,
      price: ticket,
      img: selectedImage,
      utc: selectedTimeZone,
      isRequired: isrequired,
      visibility: visibility,
      startDate: startDate,  // Convert to string or another serializable format
      startTime: startTime,  // Convert to string or another serializable format
      endDate: endDate,  // Convert to string or another serializable format
      endTime: endTime,  // Convert to string or another serializable format
      day:parseInt(day, 10),  // Convert string to integer
      month:parseInt(month, 10),
      year:parseInt(year, 10),
      style:style
    })
  );
     navigate('/event');
};


return (
<div className=' flex flex-col  items-center w-10/12 bg-white mx-auto py-3 rounded-xl shadow-md '>
<input className="text-2xl md:text-4xl focus:outline-none mb-5  w-1/2 relative right-0 md:right-32" type="text" required placeholder='Event Name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
<div className='flex justify-between  flex-col md:flex-row w-11/12   '>


<div className='flex flex-col justify-around w-11/12  '>


{console.log(name)}

<div className='flex text-sm justify-evenly md:text-lg'>

<div className=' flex flex-col w-12 h-fit  text-center  '>
<span className='bg-slate-200 rounded-t-xl text-gray-500'> {day}</span>
<span className='border'>{month}</span>
</div>

<div className='flex flex-col w-3/4'>
<div className='bg-slate-200 rounded-xl p-4 '>
<label className='md:flex flex-col  items-center justify-around lg:flex-row'>Start   <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DatePicker']}>
        <DatePicker     label={formattedDate}
      value={startDate}
      onChange={(date) => setStartDate(date)} />
      </DemoContainer>
    </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker    label={formattedTime}
      value={startTime}
      onChange={(time) => setStartTime(time)} />
      </DemoContainer>
    </LocalizationProvider>
    
    </label>

<label className=' md:flex items-center justify-around flex-col  lg:flex-row '>End<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker       label={formattedDate}
      value={endDate}
      onChange={(date) => setEndDate(date)} />
      </DemoContainer>
    </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker    label={formattedTime}
      value={endTime}
      onChange={(time) => setEndTime(time)}/>
      </DemoContainer>
    </LocalizationProvider>
    
    </label>


   <div className='my-3 '>

        <label className='bg-inherit  '>Select Time Zone : </label>
        <select className='bg-inherit w-1/2' onChange={handleTimeZoneChange}>
          {timeZone.map((zone,index) => (
            <option key={index} value={zone.utc[0]}>
              {zone.text}
            </option>
          ))}
        </select>
      </div>
      <div className='flex items-center '>
<PlaceTwoToneIcon fontSize='large' className=' pt-2 ' ></PlaceTwoToneIcon>
    <input className='text-sm md:text-lg bg-inherit w-full my-3 ml-2 pt-2 border-t-2 border-gray-300  focus:outline-none' required type='text' placeholder='Add Event Location Offline location or virtual link' onChange={(e)=>setLocation(e.target.value)}/>
    </div>
    </div>
<span className='pl-4 pt-2 '>
<label>Ticket : <input   className='w-1/2 text-left md:text-center focus:outline-none text-gray-500'   type='text'
          value={ticket}
          onChange={(e)=>{setTicket(e?.target?.value)}}
          readOnly={!isEditable} placeholder='Free'/></label>
  <button className='relative right-12 text-gray-500 hover:text-indigo-400' onClick={()=>setIsEditable(true)}><EditOutlinedIcon/></button></span>
<label className='pl-4 pt-2'>Require Approval :    <Switch
      checked={isrequired}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /></label>
        
<label className='pl-4 pt-2'>Capacity : <input type='text ' className='focus:outline-none  w-1/2' onChange={(e)=>setCapacity(e?.target?.value)}/></label>
<label className='pl-4 pt-2'>Visibility :

  <select className='pl-12 ' class="arrows"  onChange={handleVisibility}>
      <option value="public">public</option>
      <option value="private">private</option>
      
   </select>
</label>


<ImgSelector  value={selectedImage} setSelectedImage={setSelectedImage} />




    </div>
<div className='hidden  md:block md:border-r-2 border-r-slate-300'></div>


    </div>
   
</div> 
       <Theme setStyle={setStyle} style={style} />
       </div>
  <button className='text-gray-500 relative left- p-1 rounded-lg my-5 w-1/3 bg-gradient-to-r from-indigo-400  border hover:bg-gradient-to-l  hover:shadow-xl m-auto  md:ml-28 md:w-1/5 md:left-20' onClick={eventAdd}>Create Event</button>
</div>
)
}


export default Calendar


  
  // useEffect(() => {
  //   // Update the current date every second
  //   const intervalId = setInterval(() => {
  //     setCurrentDate(new Date());
  //   }, 1000);

  //   // Clear the interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);
