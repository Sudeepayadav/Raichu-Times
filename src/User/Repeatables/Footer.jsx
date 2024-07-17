import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <div className='bg-black text-white p-3 md:h-fit h-screen '>
            <div className='max-w-7xl mx-auto px-4 py-8'><div className='hidden md:flex float-end space-x-3 '>
                    <FaFacebook className='h-6 w-6' />
                    <FaTwitter className='h-6 w-6' />
                    <FaInstagram className='h-6 w-6' />
                    <FaYoutube className='h-6 w-6' />
                </div>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between '>
                    <div className='w-full md:w-11/12 space-y-7 md:p-4'>
                        <h1 className='font-playfair-display-sc  md:text-5xl text-3xl '>RAICHUR TIMES</h1>
                        <div className='md:flex mt-2 text-xs sm:text-sm space-x-4 md:space-x-6 space-y-3 md:space-y-0'>
                            <h1 className='md: ml-4'>Contact Us</h1>
                            <h1>Terms and Conditions</h1>
                            <h1>Privacy Policy</h1>
                            <h1>Pro FAQ</h1>
                            <h1>Media Council</h1>
                            <h1>Commenting FAQ</h1>
                            <h1>Pro Community Rules</h1>
                        </div>
                        <div className='text-xs mt-2 md:space-y-7 space-y-5 md: ml-4'>
                            <p>This Site is Protected by reCAPTCHA and the Google Privacy and Terms of Service apply.</p>
                            <p className=' text-sm'>© 2024 Raichur Times</p>
                        </div>
                        
                    </div>
                    
                    <div className='md:hidden w-full flex justify-center mt-6'>
                        <div className='flex space-x-3'>
                            <FaFacebook className='h-6 w-6' />
                            <FaTwitter className='h-6 w-6' />
                            <FaInstagram className='h-6 w-6' />
                            <FaYoutube className='h-6 w-6' />
                        </div>
                        
                    </div>
                </div>
               
                
            </div>
        </div>
    );
}

export default Footer;