import React, {useContext, useState} from 'react';
import useCart from "../../hooks/useCart.jsx";
import {FaDeleteLeft} from "react-icons/fa6";
import Swal from "sweetalert2";
import {AuthContext} from "../../contexts/AuthProvider.jsx";

const CartPage = () => {
    const [cart, refetch] = useCart();
    const {user} = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([])


    // handleDecrease function
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            fetch(`http://localhost:3000/carts/${item._id}`, {
                method: "PUT",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({quantity: item.quantity - 1})
            })
                .then(res => res.json())
                .then(data => {
                    const updatedCart = cart.map((cartItem) => {
                        if (cartItem._id === item._id) {
                            return {
                                ...cartItem,
                                quantity: cartItem.quantity - 1
                            };
                        }
                        return cartItem;
                    });
                    setCartItems(updatedCart);
                })

            refetch();
        } else {
            fetch(`http://localhost:3000/carts/${item._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Success!",
                            text: "Xoá thành công!",
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: "Xoá không thành công!",
                            icon: "error"
                        });
                    }
                })
        }
    }

    // handleIncrease function
    const handleIncrease = (item) => {
        fetch(`http://localhost:3000/carts/${item._id}`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({quantity: item.quantity + 1})
        })
            .then(res => res.json())
            .then(data => {
                const updatedCart = cart.map((cartItem) => {
                    if (cartItem._id === item._id) {
                        return {
                            ...cartItem,
                            quantity: cartItem.quantity + 1
                        };
                    }
                    return cartItem;
                });
                refetch();
                setCartItems(updatedCart);
            })

        refetch();
    };

    // Calculate Price
    const calculatePrice = (item) => {
        return item.price * item.quantity
    }

    // Calculate Total Price
    const orderTotal = cart.reduce((total, item) => {
        return total + calculatePrice(item)
    }, 0);

    // Handle Delete Button
    const handleDelete = (item) => {
        Swal.fire({
            title: "Bạn muốn xoá sản phẩm này?",
            text: "Vui lòng xác nhận!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xác Nhận!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Success!",
                                text: "Xoá thành công!",
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                title: "Error",
                                text: "Xoá không thành công!",
                                icon: "error"
                            });
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        Swal.fire({
                            title: "Error",
                            text: "An error occurred while deleting the item.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    return (
        <div
            className="max-w-screen-2xl section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
            <div className="py-24 flex flex-col items-center justify-center gap-8">

                {/* Text */}
                <div className="space-y-7 px-4">
                    <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                        Thông Tin Giỏ Hàng - <span className="text-green">DatFood</span>
                    </h2>
                </div>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table border">
                    {/* Head */}
                    <thead className="bg-green text-white rounded-sm">
                    <tr className="uppercase">
                        <th>#</th>
                        <th>Sản Phẩm</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* Rows */}
                    {cart?.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Image Food"/>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="font-medium">{item.name}</td>
                            <td>
                                <button className='btn btn-xs' onClick={() => handleDecrease(item)}>-</button>
                                <input type='number' value={item.quantity} onChange={() => console.log(item.quantity)}
                                       className='w-10 mx-2 text-center overflow-hidden appearance-none'/>
                                <button className='btn btn-xs' onClick={() => handleIncrease(item)}>+</button>
                            </td>
                            <td>${calculatePrice(item).toFixed(2)}</td>
                            <td>
                                <button className="btn btn-ghost btn-xs text-red" onClick={() => handleDelete(item)}>
                                    <FaDeleteLeft style={{fontSize: "20px"}}/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Detail Customer */}
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
                <div className="border rounded-lg p-4 space-y-3">
                    <h3 className="font-medium text-red uppercase">Thông Tin Khách Hàng</h3>
                    <p>
                        <span className="font-semibold">Khách Hàng:</span>{" "}
                        <span className="text-green font-semibold">{user.displayName}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Email:</span>{" "}
                        <span className="text-green font-semibold">{user.email}</span>
                    </p>
                    <p>
                        <span className="font-semibold">UserID:</span> {user.uid}
                    </p>
                </div>
                <div className="border rounded-lg p-4 space-y-3">
                    <h3 className="font-medium text-red uppercase">Chi Tiết Mua Hàng</h3>
                    <p>
                        <span className="font-semibold">Tổng Sản Phẩm:</span>{" "}
                        <span className="text-red font-semibold">{cart.length}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Tổng Tiền:</span>{" "}
                        <span className="text-red font-semibold">${orderTotal.toFixed(2)}</span>
                    </p>
                    <button className="btn bg-green text-white">Thanh Toán Ngay</button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
