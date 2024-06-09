import React from 'react';

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className="bg-[#F3F3F3]">
            <div className="">
                <div className='relative '>
                    <img className="" src={image} />
                    <p className="absolute top-5 right-5 px-2 bg-slate-900 text-white">${price}</p>
                </div>
                <div className='flex flex-col items-center text-center p-5'>
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <p className="py-6 text-base">{recipe}</p>
                    <button className="uppercase bg-[#E8E8E8] text-xl font-semibold text-[#BB8506] border-b-4 border-[#BB8506] rounded-lg py-3 px-10 hover:bg-black">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;