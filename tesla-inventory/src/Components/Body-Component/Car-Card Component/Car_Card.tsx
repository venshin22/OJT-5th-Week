import React from 'react';
import { CarCardProps } from './CarCardTypes';

const CarCard: React.FC<CarCardProps> = ({
  imageUrl, 
  title, 
  price, 
  model, 
  range, 
  customizationOptions
}) => {
  return (
    <div className="flex flex-col w-[24rem] md:w-[30rem] h-[28.082rem] ml-0.5 md:ml-0 rounded-lg border shadow-sm">
      <img 
        src={imageUrl} 
        alt={title} 
        className="h-[10rem] md:h-[17.332rem]  md:w-full rounded-lg rounded-b-none object-cover hover:bg"
      />
      <div className="flex flex-col w-full h-[10rem] text-gray-600 px-4 py-6 gap-4">
        <div className="flex flex-col w-max text-gray-600 text-sm">
          <h1 className="text-lg font-semibold text-black">{title}</h1>
          <span className="font-semibold text-black">{price}</span>
          <span>{model}</span>
          <span>{range}</span>
        </div>

        <ul className="flex w-full text-xs">
          {customizationOptions.map((option, index) => (
            <li key={index} className="px-2">{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarCard;