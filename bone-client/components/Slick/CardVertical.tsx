import Image from 'next/image';
import React from 'react'

interface Props{
    heading: string;
    context: string;
    url: string;
}

const CardVertical = ({heading, context, url}:Props) => {
  return (
    <div className= 'shadow-lg p-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105'>
        <img src={url} alt="image1" className='rounded-lg'/>
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{heading}</div>
                <p className='text-gray-700 text-base'>{context}</p>
            </div>
    </div>
  )
}

export default CardVertical