import React, {useContext} from 'react'
import { AppContext } from '../context/Context'
import ProjectCardHeader from './ProjectCardHeader'
import ProjectCardDescription from './ProjectCardDescription'
import ProjectDeadline from './ProjectDeadline'
import ProjectLeader from './ProjectLeader'
import ProjectAssignee from './ProjectAssignee'
import ProjectProgress from './ProjectProgress'

const ProjectCard = () => {

    const { theme, semi_dark_contrast, semi_light_contrast } = useContext(AppContext)

  return (
    <div className={`relative w-full h-[26.3rem] p-4 xl:h-[26.3rem] flex flex-col items-center justify-start gap-4 px-3 rounded-md ${theme == 'dark' ? semi_dark_contrast : semi_light_contrast}`}>
        <ProjectCardHeader />
        <div className='w-full h-[90%] flex flex-col gap-4 justify-start items-start'>

        <ProjectCardDescription />
        <ProjectDeadline />
        <ProjectLeader />
        <ProjectAssignee />
        <ProjectProgress />
        </div>
    </div>
  )
}

export default ProjectCard