import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

const ProjectProgress = () => {

    const {theme, dark_background, light_background} = useContext(AppContext)
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
      <h2 className="text-md font-medium">Progress</h2>
        <div className={`w-full flex justify-start items-start rounded-full h-1 ${theme == 'dark' ? dark_background : light_background}`}>
            <span className='w-[75%] h-full rounded-full bg-green-500'/>
        </div>
    </div>
  )
}

export default ProjectProgress