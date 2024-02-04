import React from 'react';

const categoryItems = [
    {id: 1, title: "Món Chính", description: "55 Món", image: "/images/home/category/img1.png"},
    {id: 2, title: "Bữa Sáng", description: "12 Món", image: "/images/home/category/img2.png"},
    {id: 3, title: "Tráng Miệng", description: "38 Món", image: "/images/home/category/img3.png"},
    {id: 4, title: "Tất Cả", description: "142 Món", image: "/images/home/category/img4.png"}
]

const Categories = () => {
    return (
        <div className='section-container py-16'>
            <div className='text-center'>
                <p className='subtitle'>Khách Hàng Yêu Thích</p>
                <h3 className='title'>Danh Mục Phổ Biến</h3>
            </div>

            {/*Categories*/}
            <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
                {
                    categoryItems.map((item, index) => (
                        <div key={index}
                             className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
                            <div className='flex w-full mx-auto items-center justify-center'>
                                <img src={item.image} alt='' className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28'/>
                            </div>
                            <div className='mt-5 space-y-1'>
                                <h5 className="font-bold">{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;
