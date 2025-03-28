import React from 'react';

// Define the interface directly in the file
interface ImgCardData {
  src: string;
  alt?: string;
  className?: string;
}

// Define the workout images data directly in the component file
const defaultWorkoutImages: ImgCardData[] = [
  {
    src: "/assets/workout1.jpg",
    alt: "Workout Image 1"
  },
  {
    src: "/assets/workout3.jpg", 
    alt: "Workout Image 2"
  },
  {
    src: "/assets/workout4.jpg",
    alt: "Workout Image 3"
  },
  {
    src: "/assets/workout2.jpg",
    alt: "Workout Image 4"
  }
];

interface ImgCardProps {
  images?: ImgCardData[];
}

const ImgCard: React.FC<ImgCardProps> = ({ images = defaultWorkoutImages }) => {
  return (
    <section className="flex flex-col justify-center">
      <div className="flex items-center justify-between mt-12">
        {images.slice(0, 2).map((img, index) => (
          <div 
            key={index} 
            className="w-full md:w-[35rem] h-[40rem] border border-cyan-600"
          >
            <img 
              src={img.src} 
              alt={img.alt || `Workout Image ${index + 1}`} 
              className={`w-full h-full ${img.className || ''}`}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-12">
        {images.slice(2, 4).map((img, index) => (
          <div 
            key={index + 2} 
            className="w-full md:w-[35rem] h-[40rem] border border-cyan-600"
          >
            <img 
              src={img.src} 
              alt={img.alt || `Workout Image ${index + 3}`} 
              className={`w-full h-full ${img.className || ''}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImgCard;