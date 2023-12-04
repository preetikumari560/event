import { configureStore } from "@reduxjs/toolkit";
import EventSlice from "./eventSlice";

const store = configureStore(
{
reducer:{
event:EventSlice,

}
}

)

export default store