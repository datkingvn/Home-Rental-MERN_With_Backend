import React, {useContext} from 'react';
import useCart from "../../hooks/useCart.jsx";
import {FaDeleteLeft} from "react-icons/fa6";
import Swal from "sweetalert2";
import {AuthContext} from "../../contexts/AuthProvider.jsx";

const CartPage = () => {
    const [cart, refetch] = useCart();
    const {user} = useContext(AuthContext);

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
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
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
            <div className="my-12 flex flex-col md:flex-row justify-between items-start">
                <div className="md:w-1/2 space-y-3">
                    <h3 className="font-medium">Thông Tin Khách Hàng</h3>
                    <p>Khách Hàng: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <p>UserID: {user.uid}</p>
                </div>
                <div className="md:w-1/2 space-y-3 mb-8">
                    <h3 className="font-medium">Shopping Details</h3>
                    <p>Tổng Sản Phẩm: {cart.length}</p>
                    <p>Tổng Tiền: $0.00</p>
                    <button className="btn bg-green text-white">Thanh Toán Ngay</button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
