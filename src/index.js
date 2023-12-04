import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './utils/store'
import { Provider } from 'react-redux'
import { Outlet } from "react-router-dom";
import Body from './components/Body';
import Header from './components/Header';
import Event from './components/Event';
import { useState,useEffect } from 'react';
import dateContext from "./utils/dateContext"


const App=()=> {

const [dateMY, setDateMY]=useState({})
const [currentDate] = useState(new Date());


useEffect(()=>{

const data={
date:currentDate.getDate(),
month:currentDate.getMonth()+1,
year:currentDate.getFullYear()

}

setDateMY(data)

}

,[])

  return (
<>
<Provider store={store}>
<dateContext.Provider value={{dateMY,setDateMY}}>
<Header/>
<Outlet />
</dateContext.Provider>
</Provider>
</>
  );
}
const appRouter= createBrowserRouter([

{
path:"/",
element:<App/>,
children:[

{
path:"/event",
element:<Event/>,
},
{
path:"/",
element:<Body/>,
}

]

}

])


const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider  router={appRouter}/>)

reportWebVitals();
