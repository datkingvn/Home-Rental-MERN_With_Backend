import React from 'react';
import {FaArrowRightLong} from "react-icons/fa6";

const serviceLists = [
    {
        id: 1,
        title: "Món Ăn",
        description: "Làm hài lòng thực khách với hương vị và cách trình bày của chúng tôi",
        image: "/images/home/services/icon1.png"
    },
    {
        id: 2,
        title: "Giao Hàng Siêu Tốc",
        description: "Chúng tôi giao hàng nhanh chóng đến tận nhà bạn",
        image: "/images/home/services/icon2.png"
    },
    {
        id: 3,
        title: "Đặt Hàng Trực Tuyến",
        description: "Khám phá menu & đặt hàng một cách dễ dàng bằng cách sử dụng Đặt hàng trực tuyến của chúng tôi",
        image: "/images/home/services/icon3.png"
    },
    {
        id: 4,
        title: "Gift Cards",
        description: "Tặng quà ăn uống đặc biệt với Thẻ quà tặng DatFood",
        image: "/images/home/services/icon4.png"
    },
]

const OurServices = () => {
    return (
        <div className='section-container my-16'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12'>

                {/*Text*/}
                <div className='md:w-1/2'>
                    <div className='text-left md:w-4/5'>
                        <p className='subtitle'>Câu chuyện & Dịch vụ của chúng tôi</p>
                        <h3 className='title'>Dịch Vụ Ẩm Thực Của Chúng Tôi</h3>
                        <blockquote className='mt-5 text-secondary leading-[30px]'>
                            "DatFood mang trong mình sứ mệnh gắn kết yêu thương gia đình và cặp đôi thông qua ẩm thực.
                            Chúng tôi tin rằng những bữa ăn chất lượng và không gian đặc biệt có thể tạo ra những kỷ
                            niệm đáng nhớ và kết nối tình cảm giữa các thành viên trong gia đình và những người yêu
                            thương."
                        </blockquote>

                        <button className='btn bg-green text-white px-8 py-3 rounded-full mt-5'>Xem thêm <FaArrowRightLong /></button>
                    </div>
                </div>

                {/*List Services*/}
                <div className='md:w-1/2'>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
                        {
                            serviceLists.map((service) => {
                                return (
                                    <div key={service.id} className='flex justify-center'>
                                        <div className='shadow-sm rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border flex-grow'>
                                            <img src={service.image} alt={service.title} className='mx-auto' />
                                            <h5 className='pt-3 font-semibold'>{service.title}</h5>
                                            <p className='text-[#90BD95]'>{service.description}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurServices;
