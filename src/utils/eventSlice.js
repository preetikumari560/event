import { createSlice } from "@reduxjs/toolkit";

const EventSlice = createSlice({

        name:"event",
        initialState:{
        items:[
{
      name: "Date Night - A Standup Show by Siddharth Sudhakar",
      location: "Happy High ,119, 5th Floor, Sishan House, near UCO Bank, Shahpur Jat, New Delhi, Delhi 110049",
      capacity: "capacity",
      price: "₹ 900",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWIHqh_Q9xGKEOyhe6jfXfSQQ95wDOiaOQLHsu-Zntg&s",
      utc: "IST",
      isRequired: "yes",
      visibility: "",
      startDate: "Dec 02",  
      weekName:"Saturday",
      startTime: "8:00 PM",
      endDate: "Dec 02",  
      endTime: "9:15 PM", 
      day:2,
      month:12,
      year:2023,
      style:' bg-gradient-to-t from-[#c1dfc4] from-0% via-[#e3eeff] via-50% to-[#deecdd] to-100%'
     
    }

    ,
    {
      name: "Stand Up Comedy Show: Battle of the Comedians",
      location: "Virgin Comedy Corner ,FF-12, PVR Anupam Saket, Ashok Vihar, Saket, New Delhi, Delhi 110017",
      capacity: "capacity",
      price: "₹ 800",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobAEFFPAbp4LhaA_FwQqBL4-T9W_xR8-_4to4mXmruw&s=10",
      utc: "IST",
      isRequired: "isrequired",
      visibility: "visibility",
      startDate: "Nov 29",
      weekName:"Wednesday",  
      startTime: "1 PM",  
      endDate: "Dec 06",  
      endTime: "3 PM",  
      day:29,
      month:11,
      year:2023,
      style:'bg-gradient-to-r from-[#f5f7fa] from-0% to-[#c3cfe2] to-100%'
    },
    {
      name: "Beyonders Hackathon",
      location: "Online",
      capacity: "capacity",
      price: "*Free",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvEMgLhse8O0NUwmVekL1p2fu_IdtAeTC9bv99sWqm3h-60vzxWtPodHHlA&s=10",
      utc: "IST",
      isRequired: "isrequired",
      visibility: "visibility",
      startDate: "Dec 01",  
      weekName:"Friday",
      startTime: "6:30 AM",  
      endDate: "Dec 02 ",  
      endTime: "12:30 PM", 
      day:1,
      month:12,
      year:2024 ,
      style:'bg-gradient-to-t from-cyan-200 from-0% via-sky-200 via-50% to-slate-100 to-100%'
    }

]
        },
        reducers:{
            addItem:(state,action)=>{
            state.items.push(action.payload)  
            },

     removeItem: (state, action) => {
  // Find the index of the first occurrence of the item with the specified id
  const indexToRemove = state.items.findIndex(i => i.id === action.payload);

  // Check if the item was found
  if (indexToRemove !== -1) {
    // Use slice to create a new array without the item at the specified index
    state.items = [...state.items.slice(0, indexToRemove), ...state.items.slice(indexToRemove + 1)];
  }
},
      emptyEventStore:(state)=>{
      state.items=[]
      }
      }

})

export const {addItem,removeItem,emptyEventStore}  = EventSlice.actions

export default EventSlice.reducer


