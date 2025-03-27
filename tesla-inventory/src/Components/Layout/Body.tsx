import React from 'react';
import CarCard from '../Body-Component/Car-Card Component/Car_Card';
import { carData } from '../Body-Component/Car-Card Component/CarCardData';

const Body: React.FC = () => {
    
  // Create rows of 3 cards each
  const cardRows = Array.from({ length: Math.ceil(carData.length / 3) }, (_, rowIndex) => 
    carData.slice(rowIndex * 3, (rowIndex + 1) * 3)
  );

  return (
    <div className="flex flex-col gap-6 pl-4 lg:pl-10 pb-10 md:pb-20 items-center justify-center">
      {cardRows.map((row, rowIndex) => (
        <div 
          key={rowIndex} 
          className='w-full flex flex-col md:flex-row items-center gap-6'
        >
          {row.map((card, cardIndex) => (
            <CarCard key={`${rowIndex}-${cardIndex}`} {...card} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Body;