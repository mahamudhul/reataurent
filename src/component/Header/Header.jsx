import React from 'react';

const Header = () => {
    return (
        <div className='p-5 my-5 mx-14'>
            <div className='flex justify-between items-center gap-3'>
                <div className=''>
                    <h1 className='title'>MOLLY PARADISE</h1>
                </div>
                <div className='space-x-5'>
                    <a href="">HOME</a>
                    <a href="">ABOUT</a>
                    <a href="">MENU</a>
                    <a href="">GALLERY</a>
                    <a href="">CHEFS</a>
                    <a href="">REVIEWS</a>
                    <a href="">CONTACT</a>
                </div>
            </div>
        </div>
    );
};

export default Header;