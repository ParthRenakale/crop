import React from 'react'
import CropList from '../components/dashboard/CropList';

import CropDashboard from '../components/dashboard/CurrentCrop';

function Dashboard() {
  const crops = [
    {
      id: 1,
      name: "Wheat",
      soilType: "Loamy",
      season: "Rabi",
      expectedYield: "3.5 tons/ha",
      plantingDate: "November 15, 2024",
      harvestDate: "April 10, 2025",
      status:"planned",
      area:34
    },
    {
      id: 2,
      name: "Rice",
      soilType: "Clayey",
      season: "Kharif",
      expectedYield: "4.0 tons/ha",
      plantingDate: "June 20, 2024",
      harvestDate: "October 30, 2024",
      status:"planned",
      area:34
    },
    {
      id: 3,
      name: "Maize",
      soilType: "Sandy Loam",
      season: "Kharif",
      expectedYield: "5.2 tons/ha",
      plantingDate: "July 10, 2024",
      harvestDate: "November 25, 2024",
      status:"planned",
      area:34
    },
    {
      id: 4,
      name: "Sugarcane",
      soilType: "Alluvial",
      season: "Annual",
      expectedYield: "80 tons/ha",
      plantingDate: "March 1, 2024",
      harvestDate: "February 15, 2025",
      status:"planned",
      area:34
    },
    {
      id: 5,
      name: "Cotton",
      soilType: "Black",
      season: "Kharif",
      expectedYield: "2.5 tons/ha",
      plantingDate: "June 15, 2024",
      harvestDate: "December 20, 2024",
      status:"planned",
      area:34
    }
  ];
  
  
  return (
    // <div className='w-full h-screen bg-[#1a1a1a] text-white flex justify-center items-center'>
    //   <h2 className='text-3xl'>DASHBOARD</h2>
    // </div>
    <>
      <div className="flex flex-row justify-around min-h-screen p-4">
  
  <div className="m-4 w-1/4 rounded bg-green-200 p-6 shadow-lg">
    <div className='flex flex-col p-4 m-4 justify-around'>
      <button className='bg-amber-200 p-4'>Add crop</button>
      <div className='p-4'>
        <CropList crops={crops}/>
      </div>
    </div>
  </div>

  
  <div className="m-4 w-3/4 rounded bg-green-200 p-6 shadow-lg">
    <CropDashboard/>
  </div>
</div>
    </>

  )
}

export default Dashboard