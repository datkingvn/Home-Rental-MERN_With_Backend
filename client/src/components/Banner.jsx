import React from 'react';
import {RiShoppingBasketFill} from "react-icons/ri";

const Banner = () => {
    return (
        <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
            <div className='py-24 flex flex-col md:flex-row-reverse items-center gap-8'>
                {/* Image */}
                <div className='md:w-1/2'>
                    <img src='/images/home/DatFood.png'/>

                    <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
                        <div className='bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-64'>
                            <img src='/images/home/b-food1.png' alt='' className='rounded-2xl'/>
                            <div>
                                <h5 className='font-medium mb-1'>Mỳ Cay</h5>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500"/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500"
                                           checked/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500"/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500"/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500"/>
                                </div>
                                <p className='text-red'>$18.00</p>
                            </div>
                        </div>

                        <div className='sm:flex hidden bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-64'>
                            <img src='/images/home/b-food1.png' alt='' className='rounded-2xl'/>
                            <div>
                                <h5 className='font-medium mb-1'>Mỳ Cay</h5>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly
                                           checked/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                                </div>
                                <p className='text-red'>$18.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className='md:w-1/2 space-y-7 px-4'>
                    <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Đắm Chìm Trong Hương Vị
                        - Ghé Ngay <span className='text-green'>DatFood</span></h2>
                    <p className='text-xl text-[#4A4A4A]'>Hãy khám phá niềm vui ẩm thực, tạo nên những kỷ niệm đáng nhớ
                        của đôi ta.</p>
                    <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Ngay <RiShoppingBasketFill style={{ fontSize: '20px' }}/></button>
                </div>

            </div>
        </div>
    );
};

export default Banner;
