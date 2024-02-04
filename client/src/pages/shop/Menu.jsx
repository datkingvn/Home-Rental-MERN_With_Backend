import React, {useEffect, useState} from 'react';
import {RiShoppingBasketFill} from "react-icons/ri";
import Cards from "../../components/Cards.jsx";
import {FaFilter} from "react-icons/fa";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8) // 8 products per page

    // Loading data
    useEffect(() => {
        // fetch data from the backend
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/menu");
                const data = await response.json();

                setMenu(data);
                setFilteredItems(data);
            } catch (e) {
                console.log("Error Fetch Data", e);
            }
        };

        // Call function
        fetchData();
    }, []);


    // Filtering data based on category
    const filterItems = (category) => {
        const filtered = category === "all" ? menu : menu.filter((item) => item.category === category);

        setFilteredItems(filtered);
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    // Show all data
    const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategory("all");
        setCurrentPage(1);
    }

    // Sorting based on A-Z, Z-A, Low-High Price
    const handleSortChange = (option) => {
        setSortOption(option);

        let sortedItems = [...filteredItems];

        // Logic
        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.name.localeCompare(a.name))
                break;
            case "Low-to-High":
                sortedItems.sort((a, b) => a.price - b.price)
                break;
            case "High-to-Low":
                sortedItems.sort((a, b) => b.price - a.price)
                break;
            default:
                break;
        }

        setFilteredItems(sortedItems);
        setCurrentPage(1);
    }

    // Logic Pagination
    const indexOfLastItem = currentPage * itemsPerPage; // Tính chỉ số của phần tử cuối cùng trong trang hiện tại
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Tính chỉ số của phần tử đầu tiên trong trang hiện tại
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem); // Lấy ra các phần tử hiện tại để hiển thị trên trang hiện tại
    const paginate = (pageNumber) => setCurrentPage(pageNumber); // Hàm để thiết lập trang hiện tại


    return (
        <div>
            {/*Menu Banner*/}
            <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
                <div className='py-48 flex flex-col justify-center items-center gap-8'>

                    {/* Text */}
                    <div className='text-center space-y-7 px-4'>
                        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug uppercase'>Thức ăn
                            phong phú
                            - Bùng nổ <span className='text-red'>tình yêu</span></h2>
                        <p className='text-[#4A4A4A] text-sm italic'>
                            "Đố ai định nghĩa được từ hôn.<br/>
                            Có khó gì đâu một tâm hồn.<br/>
                            Hai đứa yêu nhau ngồi xích lại.<br/>
                            Môi kề mắt nhắm thế là hôn."
                        </p>
                        <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order
                            Ngay <RiShoppingBasketFill style={{fontSize: '20px'}}/></button>
                    </div>

                </div>
            </div>

            {/*Menu Shop Section*/}
            <div className='section-container'>
                {/*All Category Button*/}
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
                    {/*All Category Button*/}
                    <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap font-semibold py-10'>
                        <button onClick={showAll} className={selectedCategory === "all" ? "active" : ""}>Tất cả</button>
                        <button onClick={() => filterItems('salad')}
                                className={selectedCategory === "salad" ? "active" : ""}
                        > Salad
                        < /button>
                        <button onClick={() => filterItems('pizza')}
                                className={selectedCategory === "pizza" ? "active" : ""}
                        > Pizza
                        < /button>
                        <button onClick={() => filterItems('soup')}
                                className={selectedCategory === "soup" ? "active" : ""}
                        > Soups
                        < /button>
                        <button onClick={() => filterItems('dessert')}
                                className={selectedCategory === "dessert" ? "active" : ""}
                        > Tráng miệng
                        </button>
                        <button onClick={() => filterItems('drinks')}
                                className={selectedCategory === "drinks" ? "active" : ""}
                        > Nước uống
                        </button>

                    </div>

                    {/*Sorting Filter*/}
                    <div className='flex justify-end mb-4 rounded-sm'>
                        <div className='bg-black p-2'>
                            <FaFilter className='h-4 w-4 text-white'/>
                        </div>

                        {/*Sorting Options*/}
                        <select name='sort' id='sort'
                                onChange={(e) => handleSortChange(e.target.value)}
                                value={sortOption}
                                className='bg-black text-white px-2 py-1 rounded-sm'
                        >
                            <option value='default'>Default</option>
                            <option value='A-Z'>A-Z</option>
                            <option value='Z-A'>Z-A</option>
                            <option value='Low-to-High'>Low to High</option>
                            <option value='High-to-Low'>High to Low</option>
                        </select>
                    </div>
                </div>

                {/*Products Card*/}
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        currentItems.map((item) => (
                            <Cards key={item._id} item={item}/>
                        ))
                    }
                </div>
            </div>

            {/* Pagination Section */}
            <div className='flex justify-center my-8'>
                {
                    Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-green text-white" : "bg-gray-200"}`}
                        >
                            {index + 1}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default Menu;
