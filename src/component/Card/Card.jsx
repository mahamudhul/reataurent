import pickup from '../../assets/pickup.jpg';
import delivery from '../../assets/delivery.jpg';
import shop from '../../assets/shop.jpg';

const Card = () => {
    return (
        <div className='p-5 md:mx-32'>

            <div className='text-center my-10 w-2/3 mx-auto'>
                <p className='text-4xl title mt-3 mb-8'>WE PROVIDE</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae porro suscipit odio vel atque autem quo repudiandae, quod perferendis </p>
            </div>
            {/* grid grid-cols-3 */}

            <div className='md:flex md:justify-around md:items-center gap-10'>
                {/* Card 1 */}
                <div className='text-center border py-5 rounded-2xl border-gray-200 '>
                    <div>
                        <img className='w-40 rounded-xl mx-auto hover:scale-150 duration-150' src={shop} alt="" />
                    </div>
                    <h1 className='titleAdd text-2xl my-5'>EAT IN</h1>
                    <p className='text-sm w-60 mx-auto'>Consectetur adipiscing elit. Vivamus auctor condimentum maecenas</p>
                    <button className='bg-emerald-600 hover:bg-emerald-950 text-white p-3 mt-5 rounded-2xl border'>Visit Us</button>
                </div>

                {/* Card 2 */}
                <div className='text-center border py-5 rounded-2xl border-gray-200 '>
                    <div>
                        <img className='w-40 rounded-xl mx-auto hover:scale-150 duration-150' src={pickup} alt="" />
                    </div>
                    <h1 className='titleAdd text-2xl my-5'>PICK UP</h1>
                    <p className='text-sm w-60 mx-auto'>Consectetur adipiscing elit. Vivamus auctor condimentum maecenas</p>
                    <button className='bg-emerald-600 hover:bg-emerald-950 text-white p-3 mt-5 rounded-2xl border'>Visit Us</button>
                </div>

                {/* Card 3 */}
                <div className='text-center border py-5 rounded-2xl border-gray-200 '>
                    <div>
                        <img className='w-40 rounded-xl mx-auto hover:scale-150 duration-150' src={delivery} alt="" />
                    </div>
                    <h1 className='titleAdd text-2xl my-5'>DELIVERY</h1>
                    <p className='text-sm w-60 mx-auto'>Consectetur adipiscing elit. Vivamus auctor condimentum maecenas</p>
                    <button className='bg-emerald-600 hover:bg-emerald-950 text-white p-3 mt-5 rounded-2xl border'>Visit Us</button>
                </div>
            </div>
        </div>
    );
};

export default Card;


// style = {{ backgroundImage: `url('/images/card1.jpg')` }}