import React from 'react';
import {FaStar} from "react-icons/fa";

const Testimonials = () => {
    return (
        <div className='section-container'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
                <div className='md:w-1/2'>
                    <img src='/images/home/testimonials/testimonials.png' alt=''/>
                </div>
                <div className='md:w-1/2'>
                    <div className='text-left md:w-4/5'>
                        <p className='subtitle'>Đánh giá từ khách hàng</p>
                        <h3 className='title'>Khách Hàng Nói Gì Về <span className='text-green'>DatFood</span></h3>
                        <blockquote className='mt-5 text-secondary leading-[30px]'>
                            "DatFood là một địa điểm lý tưởng cho cả gia đình và cặp đôi. Với không gian rộng rãi và
                            thoải mái, DatFood tạo điều kiện cho gia đình tận hưởng bữa ăn trong không gian ấm cúng. Đội
                            ngũ nhân viên chuyên nghiệp và thân thiện sẽ đảm bảo mọi thành viên trong gia đình được phục
                            vụ tận tâm và hài lòng."
                        </blockquote>

                        {/*Avatar */}
                        <div className='flex items-center gap-4 flex-wrap'>
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="/images/home/testimonials/testimonial1.png" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="/images/home/testimonials/testimonial2.png" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="/images/home/testimonials/testimonial3.png" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-1'>
                                <h5 className='text-lg font-semibold gap-2'>Khách Hàng Feedback</h5>
                                <div className='flex items-center gap-2'>
                                    <FaStar className='text-yellow-400' />
                                    <span className='font-medium'>4.9</span>
                                    <span className='text-[#807E7E]'>(18.6k Đánh Giá)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
