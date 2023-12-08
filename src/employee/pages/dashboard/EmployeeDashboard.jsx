import React, {useContext} from 'react'
import { AppContext } from '../../../context/Context'
import EmployeeSidebar from '../../components/EmployeeSidebar'
import EmployeeDashboardPage from './EmployeeDashboardPage'


const EmployeeDashboard = () => {

  const {
    theme, 
    dark_background, 
    light_background, 
    dark_text_color, 
    light_text_color
  }  = useContext(AppContext)

  return (
    <div className={`w-full h-screen ${theme == 'dark' ? dark_background : light_background} ${theme == 'dark' ? dark_text_color : light_text_color} flex justify-start items-start relative`}>
      <EmployeeSidebar />
      <EmployeeDashboardPage />
    </div>
  )
}

export default EmployeeDashboard