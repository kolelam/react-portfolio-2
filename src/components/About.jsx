import React from 'react';
import selfImg from './assets/IMG_1525.jpg';

export default function AboutMe() {
    return (
        <div className='about-me bg-gray-100 py-16'>
            <section className='main-container about-container bg-white shadow-md rounded-lg p-6'>
                <div className='self-image mx-auto w-64 h-64'>
                    <img src={selfImg} alt='What Kole Lam would look like through a camera' className='rounded-full object-cover w-full h-full' />
                </div>
                <p className='about-description mt-6 text-gray-700'>
                    I've always been drawn to the world of tech. As a child, I grew up in an auto repair family so I garnered an interest in mechanics at a young age. Throughout the years, that translated into a love
                    for all things technical. It led to my enlistment in the USMC as a radio tech, where I further delved into the inner workings of machinery and electronics. From there, I maintained an interest
                    in the world of web development and coding in general. I have always been fascinated by the idea of creating something from nothing, and the world of coding allows me to do just that. I have a love
                    of animals and all things outdoors, whether it be in the deserts or deep in the forested mountains. I'm always striving to learn and improve, and I hope this portfolio reflects that.
                </p>
            </section>
        </div>
    );
}
