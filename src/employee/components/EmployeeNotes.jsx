import React, { useContext } from 'react'
import { SwiperSlide } from "swiper/react"
import { AppContext } from '../../context/Context'
import EmployeeNotesHeader from './EmployeeNotesHeader'
import NotesCard from '../../components/NotesCard'


const EmployeeNotes = () => {

  const dummyArr = [
    {
      date: 'May, 23',
      title: 'FareShare UI Completion',
      description: 'Need to work on the UI of the fareshare web frontend',
      keywords: [
        'Todo', 'Office', 'Reminder'
      ]
    },
    {
      date: 'May, 23',
      title: 'FareShare UI Completion',
      description: 'Need to work on the UI of the fareshare web frontend',
      keywords: [
        'Todo', 'Office', 'Reminder'
      ]
    },
    {
      date: 'May, 23',
      title: 'FareShare UI Completion',
      description: 'Need to work on the UI of the fareshare web frontend',
      keywords: [
        'Todo', 'Office', 'Reminder'
      ]
    },
    {
      date: 'May, 23',
      title: 'FareShare UI Completion',
      description: 'Need to work on the UI of the fareshare web frontend',
      keywords: [
        'Todo', 'Office', 'Reminder'
      ]
    },
  ]

  const { theme, dark_contrast, light_contrast } = useContext(AppContext)
  return (
    <div className={`w-full sm:w-[48.5%]  px-4 py-2 flex flex-col gap-4 justify-start items-start ${theme == 'dark' ? dark_contrast : light_contrast} h-auto rounded-md`}>

      {/* Employee Notes Header */}
      <EmployeeNotesHeader />

      <div className='w-full h-[90%] flex flex-row gap-1 flex-wrap justify-start items-start'>
        {
          dummyArr.splice(0,4).map((item)=>{
            return(
              <NotesCard title={item.title} date={item.date} keywords={item.keywords} description={item.description}/>

            )
          })
        }
      </div>

    </div>
  )
}

export default EmployeeNotes