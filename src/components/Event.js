import { useState } from "react";
import EventCard from "./EventCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import dateContext from "../utils/dateContext";
import { useContext } from "react";

const Event =()=>{

const [isClickBtnUpcoming,setIscClickBtnUpcoming]=useState(true)
const [isClickBtnPast,setIscClickBtnPast]=useState(false)
    
const {dateMY}=useContext(dateContext)

const eventItem = useSelector((store) => store?.event?.items);


const data = eventItem.filter((i) => {
  const eventDate = new Date(i?.year, i?.month - 1, i?.day); 
  const currentDate = new Date(dateMY?.year, dateMY?.month - 1, dateMY?.date);

  return eventDate >= currentDate;
});

const [event,setEvent]= useState(data)


console.log("dateMY",dateMY)



const UpcomingEventHandler=()=>{
    console.log("UpcomingEventHandler",data)
    setIscClickBtnPast(false)
    setIscClickBtnUpcoming(true)
    setEvent(data);

}

const PastEventHandler=()=>{

const data = eventItem.filter(
  (i) => {
    const eventDate = new Date(i.year, i.month - 1, i.day); 
    const currentDate = new Date(dateMY.year, dateMY.month - 1, dateMY.date); // Subtract 1 from month

    return eventDate < currentDate;
  }
);


    console.log("PastEventHandler",data)
    
    setIscClickBtnUpcoming(false)
    setIscClickBtnPast(true)
    setEvent(data);
}

    console.log(event);

return(<>

    <div className="flex justify-between m-10 ">
    <h2 className="text-3xl md:text-5xl">Events</h2>
   <span className="bg-slate-100 p-1 mr:0 md:mr-20 w-2/5  md:w-1/5 flex text-sm md:text-lg  rounded-xl shadow-2xl">
     <button className={((!isClickBtnPast && isClickBtnUpcoming)?("bg-black text-white rounded-lg  "):("bg-white rounded-l-lg") )+ " p-1  pr-5 w-1/2 "} onClick={UpcomingEventHandler} >Upcoming</button>  
     <button className={((!isClickBtnUpcoming && isClickBtnPast)?("bg-black text-white "):("bg-white") )+ " relative right-3 p-1  w-1/2 rounded-lg"} onClick={PastEventHandler}>Past</button>
        </span>
 </div>
<EventCard  value={event}/>



</>)

}

export default Event

// const url = 'https://predicthq.p.rapidapi.com/v1/events/';


// useEffect(()=>{

// fetchData()

// },[])


// const fetchData= async ()=>{

// const data= await fetch(url,options)

// const json= await data?.json()


// console.log("json",json)


// }