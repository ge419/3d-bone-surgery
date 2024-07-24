import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import FeatureCard from './FeatureCard'
import Icon1 from '@/public/images/icon1.png'
import Icon2 from '@/public/images/icon2.png'
import Icon3 from '@/public/images/icon3.png'


const Features = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <SectionHeading headingMini='Ideal MJ' headingPrimary='Explor fun fun fun'/>
        <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]'>
            <div>
                <FeatureCard title="Email subscription" image={Icon1.src}/>
            </div>
            <div>
                <FeatureCard title="Email subscription" image={Icon2.src}/>
            </div>
            <div>
                <FeatureCard title="Email subscription" image={Icon3.src}/>
            </div>
        </div>
    </div>

  )
}

export default Features