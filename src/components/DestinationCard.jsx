import React from 'react';
 
 function DestinationCard({ destination }) {
   return (
     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
       <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
       <div className="p-4">
         <h2 className="text-xl font-bold">{destination.name}</h2>
         <p className="text-gray-500">{destination.location}</p>
         <p className="mt-2">{destination.description}</p>
         <p className="text-blue-600 font-semibold mt-2">{destination.price}</p>
       </div>
     </div>
   );
 }
 
 export default DestinationCard;