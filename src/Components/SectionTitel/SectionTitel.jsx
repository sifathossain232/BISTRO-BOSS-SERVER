import React from 'react';

const SectionTitel = ({heading, subHeading}) => {
    return (
        <div className='flex flex-col justify-center mx-auto  w-96 '>
            <p className='text-xl italic text-[#D99904] text-center'>---{subHeading}---</p>
            <h3 className='text-3xl uppercase border-y-2 text-center py-2 mb-8 mt-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitel;