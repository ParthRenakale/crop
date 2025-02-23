
// import { useState } from 'react';
// import { Link, Outlet, useLocation } from 'react-router-dom';

// const Educate = () => {
//   const location = useLocation();
//   const [activeTab, setActiveTab] = useState('rights');

//   const FarmerRightsContent = () => (
//     <div className="space-y-8">
//       <section>
//         <h2 className="text-2xl font-semibold mb-4 text-white">Government Schemes</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="p-6 bg-gray-800 rounded-lg">
//             <h3 className="text-xl font-semibold mb-2 text-teal-400">PM-KISAN Scheme</h3>
//             <p className="text-gray-300">
//               ₹6,000/year income support to landholding farmers through direct benefit transfer.
//             </p>
//           </div>
//           <div className="p-6 bg-gray-800 rounded-lg">
//             <h3 className="text-xl font-semibold mb-2 text-teal-400">PMFBY Insurance</h3>
//             <p className="text-gray-300">
//               Premiums from 1.5-5% for crop insurance against natural calamities and pests.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section>
//         <h2 className="text-2xl font-semibold mb-4 text-white">Legal Rights</h2>
//         <div className="space-y-4">
//           <div className="p-6 bg-gray-800 rounded-lg">
//             <h3 className="text-xl font-semibold mb-2 text-teal-400">Land Acquisition</h3>
//             <p className="text-gray-300">
//               Right to fair compensation and rehabilitation under LARR Act 2013.
//             </p>
//           </div>
//           <div className="p-6 bg-gray-800 rounded-lg">
//             <h3 className="text-xl font-semibold mb-2 text-teal-400">MSP Guarantee</h3>
//             <p className="text-gray-300">
//               Minimum Support Price assurance for 23 crops including wheat and rice.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );

//   // const TutorialsContent = () => {
//   //   const tutorials = [
//   //     {
//   //       title: "Organic Farming Basics",
//   //       duration: "12 min",
//   //       link: "https://www.youtube.com/watch?v=SOcxRMOjXWY",
//   //       description: "Fundamentals of natural farming practices"
//   //     },
//   //     {
//   //       title: "Drip Irrigation Setup",
//   //       duration: "18 min",
//   //       link: "https://www.youtube.com/watch?v=SclaUd90HAc",
//   //       description: "Complete guide to water-efficient systems"
//   //     },
//   //     {
//   //       title: "Soil Health Management",
//   //       duration: "15 min",
//   //       link: "https://www.youtube.com/watch?v=wdfTCY8A1vw",
//   //       description: "Understanding soil nutrition and pH balance"
//   //     },
//   //     {
//   //       title: "Integrated Pest Control",
//   //       duration: "20 min",
//   //       link: "https://www.youtube.com/watch?v=2VT0HLzuXDg",
//   //       description: "Eco-friendly pest management techniques"
//   //     }
//   //   ];

//   const TutorialsContent = () => {
//     const tutorials = [
//       {
//         title: "Organic Farming Basics",
//         duration: "12 min",
//         link: "https://www.youtube.com/watch?v=SOcxRMOjXWY",
//         description: "Fundamentals of natural farming practices",
      
//       },
//       {
//         title: "Drip Irrigation Setup",
//         duration: "18 min",
//         link: "https://www.youtube.com/watch?v=SclaUd90HAc",
//         description: "Complete guide to water-efficient systems",
     
//       },
//       {
//         title: "Soil Health Management",
//         duration: "15 min",
//         link: "https://www.youtube.com/watch?v=wdfTCY8A1vw",
//         description: "Understanding soil nutrition and pH balance",
 
//       },
//       {
//         title: "Integrated Pest Control",
//         duration: "20 min",
//         link: "https://www.youtube.com/watch?v=2VT0HLzuXDg",
//         description: "Eco-friendly pest management techniques",
     
//       },
//     ];

//     return (
//       <div className="grid md:grid-cols-2 gap-6">
//         {tutorials.map((tutorial, index) => (
//           <div key={index} className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
//             <div className="aspect-video bg-gray-900 rounded-lg mb-4"></div>
//             <h3 className="text-xl font-semibold mb-2 text-white">{tutorial.title}</h3>
//             <p className="text-gray-300 mb-2">{tutorial.description}</p>
//             <div className="flex justify-between items-center">
//               <span className="text-teal-400">{tutorial.duration}</span>
//               <a 
//                 href={tutorial.link}
//                 className="px-4 py-2 bg-teal-500 rounded hover:bg-teal-600 transition text-white"
//               >
//                 Watch Tutorial
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto p-6">
//       <div className="flex gap-4 mb-8 border-b border-gray-700">
//         <button
//           onClick={() => setActiveTab('rights')}
//           className={`pb-2 px-4 ${
//             activeTab === 'rights' 
//               ? 'border-b-2 border-teal-500 text-teal-500' 
//               : 'text-gray-400 hover:text-white'
//           }`}
//         >
//           Farmer Rights
//         </button>
//         <button
//           onClick={() => setActiveTab('tutorials')}
//           className={`pb-2 px-4 ${
//             activeTab === 'tutorials' 
//               ? 'border-b-2 border-teal-500 text-teal-500' 
//               : 'text-gray-400 hover:text-white'
//           }`}
//         >
//           Farming Tutorials
//         </button>
//       </div>

//       {activeTab === 'rights' ? <FarmerRightsContent /> : <TutorialsContent />}
//     </div>
//   );
// };

// export default Educate;

const TutorialsContent = () => {
  const tutorials = [
    {
      title: "Organic Farming Basics",
      duration: "12 min",
      link: "https://www.youtube.com/watch?v=SOcxRMOjXWY",
      description: "Fundamentals of natural farming practices",
      image: "/images/organic-farming.jpg" // Add image path
    },
    {
      title: "Drip Irrigation Setup",
      duration: "18 min",
      link: "https://www.youtube.com/watch?v=SclaUd90HAc",
      description: "Complete guide to water-efficient systems",
      image: "/images/drip-irrigation.jpg"
    },
    {
      title: "Soil Health Management",
      duration: "15 min",
      link: "https://www.youtube.com/watch?v=wdfTCY8A1vw",
      description: "Understanding soil nutrition and pH balance",
      image: "/images/soil-health.jpg"
    },
    {
      title: "Integrated Pest Control",
      duration: "20 min",
      link: "https://www.youtube.com/watch?v=2VT0HLzuXDg",
      description: "Eco-friendly pest management techniques",
      image: "/images/pest-control.jpg"
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {tutorials.map((tutorial, index) => (
        <div key={index} className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
          {/* Replace placeholder div with image */}
          <div className="aspect-video bg-gray-900 rounded-lg mb-4 overflow-hidden">
            <img 
              src={tutorial.image} 
              alt={tutorial.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">{tutorial.title}</h3>
          <p className="text-gray-300 mb-2">{tutorial.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-teal-400">{tutorial.duration}</span>
            <a 
              href={tutorial.link}
              className="px-4 py-2 bg-teal-500 rounded hover:bg-teal-600 transition text-white"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Watch Tutorial
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};