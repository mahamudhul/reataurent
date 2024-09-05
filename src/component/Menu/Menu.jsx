import React from 'react';

// import '../Menu/'

const Menu = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-5 my-5 p-5 md:mx-20'>
            {/* Left side */}
            <div className='md:col-span-3 menu'>
                {/* menu title  */}
                <div className='text-center mb-10'>
                    <p className='text-2xl titleAdd'>DISCOVER</p>
                    <h1 className='text-3xl font-bold font-serif title'>OUR MENU</h1>
                </div>
                <div className='grid grid-cols-3 gap-9'>
                    {/* serial 1 */}
                    <div className='space-y-5'>
                        <div>
                            <div className='flex justify-between text-2xl font-bold font-sans mb-2'>
                                <h1>DUBLE BURGER</h1>
                                <h1>20$</h1>
                            </div>
                            <p>2x beef, smoked cheese, tomatoes, onions & salad </p>
                        </div>
                        <div>
                            <div className='flex justify-between text-2xl font-bold font-sans mb-2'>
                                <h1>DUBLE BURGER</h1>
                                <h1>20$</h1>
                            </div>
                            <p>2x beef, smoked cheese, tomatoes, onions & salad </p>
                        </div>
                        <div>
                            <div className='flex justify-between text-2xl font-bold font-sans mb-2'>
                                <h1>DUBLE BURGER</h1>
                                <h1>20$</h1>
                            </div>
                            <p>2x beef, smoked cheese, tomatoes, onions & salad </p>
                        </div>
                        <div>
                            <div className='flex justify-between text-2xl font-bold font-sans mb-2'>
                                <h1>DUBLE BURGER</h1>
                                <h1>20$</h1>
                            </div>
                            <p>2x beef, smoked cheese, tomatoes, onions & salad </p>
                        </div>
                    </div>

                    {/* serial 2 */}
                    <div className='space-y-5'>
                        <div>
                            <div className='flex justify-between text-2xl font-bold font-sans mb-2'>
                                <h1>DUBLE BURGER</h1>
                                <h1>20$</h1>
                            </div>
                            <p>2x beef, smoked cheese, tomatoes, onions & salad </p>
                        </div>
                        <div>
                            <div className='flex justify-between text-2xl font-bold font-sans mb-2'>
                                <h1>DUBLE BURGER</h1>
                                <h1>20$</h1>
                            </div>
                            <p>2x beef, smoked cheese, tomatoes, onions & salad </p>
                        </div>
                        <div>
                            <div className='flex justify-between text-2xl font-bold font-sans mb-2'>
                                <h1>DUBLE BURGER</h1>
                                <h1>20$</h1>
                            </div>
                            <p>2x beef, smoked cheese, tomatoes, onions & salad </p>
                        </div>
                        <div>
                            <div className='flex justify-between text-2xl font-bold font-sans mb-2'>
                                <h1>DUBLE BURGER</h1>
                                <h1>20$</h1>
                            </div>
                            <p>2x beef, smoked cheese, tomatoes, onions & salad </p>
                        </div>
                    </div>
                    {/* serial 3 */}
                    <div className='space-y-5'>
                        <div>
                            <div className='flex justify-between text-2xl font-bold font-sans mb-2'>
                                <h1>DUBLE BURGER</h1>
                                <h1>20$</h1>
                            </div>
                            <p>2x beef, smoked cheese, tomatoes, onions & salad </p>
                        </div>
                        <div>
                            <div className='flex justify-between text-2xl font-bold font-sans mb-2'>
                                <h1>DUBLE BURGER</h1>
                                <h1>20$</h1>
                            </div>
                            <p>2x beef, smoked cheese, tomatoes, onions & salad </p>
                        </div>
                        <div>
                            <div className='flex justify-between text-2xl font-bold font-sans mb-2'>
                                <h1>DUBLE BURGER</h1>
                                <h1>20$</h1>
                            </div>
                            <p>2x beef, smoked cheese, tomatoes, onions & salad </p>
                        </div>
                        <div>
                            <div className='flex justify-between text-2xl font-bold font-sans mb-2'>
                                <h1>DUBLE BURGER</h1>
                                <h1>20$</h1>
                            </div>
                            <p>2x beef, smoked cheese, tomatoes, onions & salad </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className='drinks'>

                <div className='text-center my-5'>
                    <p className='font-extrabold titleAdd text-2xl'>FRESH</p>
                    <h1 className='text-4xl font-bold font-serif te titleAdd mb-5'>DRINKS</h1>
                </div>

                <hr className='h-px my-8 bg-gray-600 border-0 dark:bg-gray-70' />

                <div className='space-y-5 m-5'>
                    <div className='flex justify-between text-2xl font-sans mb-2'>
                        <h1>DUBLE BURGER</h1>
                        <h1 className='font-bold'>20$</h1>
                    </div>
                    <div className='flex justify-between text-2xl font-sans mb-2'>
                        <h1>DUBLE BURGER</h1>
                        <h1 className='font-bold'>20$</h1>
                    </div>
                    <div className='flex justify-between text-2xl  font-sans mb-2'>
                        <h1>DUBLE BURGER</h1>
                        <h1 className='font-bold'>20$</h1>
                    </div>
                    <div className='flex justify-between text-2xl font-sans mb-2'>
                        <h1>DUBLE BURGER</h1>
                        <h1 className='font-bold'>20$</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;