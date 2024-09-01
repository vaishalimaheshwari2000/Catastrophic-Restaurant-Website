import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function cards() {

    const products = [
        {
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.jpg?s=2048x2048&w=is&k=20&c=4kootjYOsFPf6Z-1sxc0d5_kAq6Xu5zJiu-PsVNKkDE=',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://media.istockphoto.com/id/1081421982/photo/pan-fried-duck.jpg?s=1024x1024&w=is&k=20&c=Yfq4DYAsthmBX9jy2jZwJPr6kHWtAQl289AmGraqZgw=',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://media.istockphoto.com/id/935489342/photo/professional-chef-at-work.jpg?s=2048x2048&w=is&k=20&c=8HIMRWK2VWHTipOLnBMCio4X5veIQzYT_QB8F1feVCU=',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://media.istockphoto.com/id/104704117/photo/restaurant-plates.jpg?s=2048x2048&w=is&k=20&c=JoJ1EBe2fNZrJ7-3lrvBarUvdViP45z-jcaEMwv11bk=',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
        // More products...
      ]
      
    return (
      <div className="bg-black">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white">Food menu</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                    
                    </h3>
                     </div>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  