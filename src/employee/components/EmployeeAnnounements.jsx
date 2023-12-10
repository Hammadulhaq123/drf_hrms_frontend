import React, { useContext } from "react";
import { SwiperSlide } from "swiper/react"
import { AppContext } from "../../context/Context";
import EmployeeAnnouncementHeader from "./EmployeeAnnouncementHeader";
import Announcement from "../../components/Announcement";



const EmployeeAnnounements = () => {

  const { theme, dark_contrast, light_contrast } = useContext(AppContext);

  const dummyArr = [
    {
      profile: "https://randomuser.me/api/portraits/men/86.jpg",
      announcement: 'Saturday is on just for this week',
      keyword: 'General'
    },
    {
      profile: "https://randomuser.me/api/portraits/men/86.jpg",
      announcement: 'Saturday is on just for this week',
      keyword: 'General'
    },
    {
      profile: "https://randomuser.me/api/portraits/men/86.jpg",
      announcement: 'Saturday is on just for this week',
      keyword: 'General'
    },
    {
      profile: "https://randomuser.me/api/portraits/men/86.jpg",
      announcement: 'Saturday is on just for this week',
      keyword: 'General'
    },
  ]
  return (

    <div className={`w-full sm:w-[48.5%] xl:w-[40%]   ${theme == 'dark' ? dark_contrast : light_contrast} h-[30rem] xl:h-[26rem] flex flex-col gap-4 justify-start items-start rounded-md px-4 py-2`}>

      {/* Header for employees */}
      <EmployeeAnnouncementHeader />

      {/* Few Announcements Mapping */}
      <div className="w-full h-[90%] flex flex-col gap-2 justify-start items-start">

        {
          dummyArr.splice(0, 4).map((announcement, key) => {
            return (
              <Announcement key={key} announcement={announcement.announcement} keyword={announcement.keyword} profile={announcement.profile} />
            )
          })
        }
      </div>

    </div>
  );
};

export default EmployeeAnnounements;
