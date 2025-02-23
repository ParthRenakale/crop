import React from 'react'
import WeatherWidget from '../components/weather'

function Dashboardog() {
  return (
    
          <div className='h-screen'>
            <div className='h-[200px]'>

            </div>
          <WeatherWidget/>
           <p className="text-white text-2xl text-center ">No crop selected.</p>
           <h3 className="text-white text-2xl text-center ">Please select a crop</h3>
          
          </div>
  )
}

export default Dashboardog