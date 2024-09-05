import chefs1 from '../../assets/chef1.png'
import chefs2 from '../../assets/chef2.png'
import chefs3 from '../../assets/chef3.png'
import chefs4 from '../../assets/chef4.png'
import chefs5 from '../../assets/chef5.png'

const Service = () => {
    return (
        <div className='p-5 md:mx-20'>
            <div className='text-center my-10 w-2/3 mx-auto'>
                <h1 className='text-4xl title mt-3 mb-8'>Meet the Chefs</h1>
                <p >Augue insolens at his. Te per perfecto cotidieque, ei vix atqui facilis urbanitas, pro graeco labitur fabellas an. Ut cum oratio tritani recusabo, te tale paulo temporibus vel. Movet intellegebat ut mei.</p>
            </div>


            <div className='flex justify-center items-center gap-10'>
                {/* card 1 */}
                <div className='border border-gray-300 shadow-lg rounded-2xl px-2'>
                    <img className='w-[850px] h-[200px] mx-auto scale-150' src={chefs4} alt="" />
                    <div className='text-center mt-14'>
                        <h1 className='text-2xl font-bold mt-2 titleAdd'>Mike Right</h1>
                        <p className='mb-2'>Chef</p>
                    </div>
                </div>


                {/* card 2 */}
                <div className='border border-gray-300 shadow-lg rounded-2xl px-2'>
                    <img className='w-[850px] h-[200px] mx-auto scale-150' src={chefs1} alt="" />
                    <div className='text-center mt-14'>
                        <h1 className='text-2xl font-bold mt-2 titleAdd'>Mike Right</h1>
                        <p className='mb-2'>Chef</p>
                    </div>
                </div>

                <div className='border border-gray-300 shadow-lg rounded-2xl px-2'>
                    <img className='w-[850px] h-[200px] mx-auto scale-150' src={chefs2} alt="" />
                    <div className='text-center mt-14'>
                        <h1 className='text-2xl font-bold mt-2 titleAdd'>Mike Right</h1>
                        <p className='mb-2'>Chef</p>
                    </div>
                </div>

                <div className='border border-gray-300 shadow-lg rounded-2xl px-2'>
                    <img className='w-[850px] h-[200px] mx-auto scale-150 ' src={chefs5} alt="" />
                    <div className='text-center mt-14'>
                        <h1 className='text-2xl font-bold mt-2 titleAdd'>Mike Right</h1>
                        <p className='mb-2'>Chef</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;