import meatImg from '../../assets/meat.jpg'
import burger from '../../assets/burger2.jpg'
import pizza from '../../assets/pizza4.jpg'


// p-5 md:mx-20

const Banner = () => {
    return (
        <div className='p-5 md:mx-20'>
            <div className='md:grid grid-cols-3 justify-evenly mt-5 gap-5'>

                {/* image */}
                <div>
                    <img className='max-h-screen rounded-full' src={burger} alt="" />
                </div>

                {/* Details */}
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-center title text-4xl my-4'>MOLLY PARADISE RESTAURENT </h1>
                    <p className='p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id auctor lorem, ac feugiat quam. Donec egestas mollis odio. Proin non pretium ligula, a finibus dolor.</p>

                </div>

                {/* Image */}
                <div >
                    <img className='rounded-full' src={pizza} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;