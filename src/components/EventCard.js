
import dayjs from "dayjs";
import defaultImgSrc from "../assets/images/default.png" 
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
const EventCard = (props) => {

    const eventItem=props?.value
    console.log("eventItem",props?.value)

  return (
    <>
      {eventItem?.map((i) => (
        <div className=" flex flex-col justify-evenly m-7 md:flex-row">
          <div className="flex flex-col w-1/5 md:w-1/6  text-sm md:text-lg  border-r-2">

            {/* Check if i.startDate is a Day.js object before using format */}
            <span className="flex justify-between">
              {dayjs.isDayjs(i?.startDate)
                ? i?.startDate.format("MMM DD")
                : String(i?.startDate)}
                <FiberManualRecordTwoToneIcon className="relative left-3 bottom-1 "/>
            </span>
            <span className="text-slate-400">
              {dayjs.isDayjs(i?.startDate)
                ? i?.startDate?.format("dddd")
                : String(i?.weekName)}
            </span>
          </div>

          <div className={i.style+" flex flex-col-reverse  md:flex-row w-full md:w-2/3 h-38 justify-between p-4 shadow text-sm"}>
            <div>
              {/* Check if i.startTime is a Day.js object before using format */}
              <div className="text-gray-400">
              <span >
                {dayjs.isDayjs(i?.startTime)
                  ? i?.startTime?.format("HH:mm")
                  : String(i?.startTime)} -
              </span>
              {/* Similar checks for i.endTime if needed */}
              <span className="mx-2">{dayjs.isDayjs(i?.endTime)?( i?.endTime?.format("HH:mm"))
                  : String(i?.endTime)}
              </span>
              <span>{String(i?.startDate)}</span>
              </div>
              <h2 className="text-lg lg:text-2xl">{String(i?.name)}</h2>
              <p className="text-slate-400">{(String(i?.location).toLocaleLowerCase()==="online")?<VideoCallOutlinedIcon/>:<PlaceOutlinedIcon/>}  {String(i?.location)}</p>
              <p className="relative left-4">{String(i?.price)}</p>
            </div>
            <img src={(i?.img)?String(i?.img): defaultImgSrc} alt={String(i?.name)} className="h-36 w-36 m-auto mb-7 md:m-0 shadow-md" />
          </div>
        </div>
      ))}
    </>
  );
};

export default EventCard;
