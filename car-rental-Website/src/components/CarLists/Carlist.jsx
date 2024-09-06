import React from 'react'
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carList = [
    {
        id:1,
      name: "BMW UX",
      price: 100,
      image: whiteCar,
      aosDelay: "0",
    },
    {
        id:2,
      name: "KIA UX",
      price: 140,
      image: car2,
      aosDelay: "500",
    },
    {
        id:3,
      name: "BMW UX",
      price: 100,
      image: car3,
      aosDelay: "1000",
    },
  ];
export const Carlist = ({theme}) => {
  return (
    <div id='cars' className='pb-24 dark:text-white text-black'>
        <div className="container text-center">
            <h1 data-aos="fade-up" className='text-3xl sm:text-4xl mb-3 font-semibold text-primary font-serif'>Car Lists</h1>
            <p data-aos="fade-up" className='text-md pb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nisi fuga libero.</p>
            <div className='grid gird-col sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {carList.map((car)=>(
                  
                    <div
                    data-aos="fade-up"
                    data-aos-delay={car.aosDelay}
                    key={car.id} className='cardCarlist border-solid border-2 border-gray-300 rounded-lg shadow-lg shadow-grey-500'>
                        <div>
                            <img src={car.image} alt="" className='sm:scale-95 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] hover:scale-110 duration-300' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold text-left pl-5 pt-2'>{car.name}</h1>
                            <p  className='flex justify-between items-center px-5 font-bold text-green-700'  >${car.price}/Day<a href="#" className='font-semibold text-lg'>Details</a></p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
