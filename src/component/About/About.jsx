import React from 'react';
import aboutImg from '../../assets/restaurent1.jpg'

const About = () => {
    return (
        <div className='p-5 md:mx-20'>
            <div className='md:flex items-center justify-between mt-5 gap-5 p-5'>
                <div className='md:w-2/5 md:mr-10'>
                    <h1 className='text-4xl title mt-3 mb-8'>ABOUT US</h1>

                    <hr className='h-px my-8 bg-gray-600 border-0 dark:bg-gray-70' />
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper ac mauris ut facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget magna eu dolor semper eleifend. Praesent id magna consequat, congue dolor non, <br />

                        tristique mi. Ut rhoncus elit at metus mattis, vitae sollicitudin ante congue. Nulla facilisi. Maecenas rhoncus mauris et erat facilisis luctus. In hac habitasse platea dictumst. <br />

                        Sed blandit bibendum semper. Sed malesuada sagittis nunc ut sollicitudin.

                    </p>
                    <button className='bg-emerald-800 hover:bg-emerald-950 text-white py-4 px-5 mt-5 rounded-2xl border'>RESERVE TABLE</button>
                </div>
                <div className='md:w-3/5 sm:mt-5 md:ml-10'>
                    <img className='rounded-2xl' src={aboutImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;