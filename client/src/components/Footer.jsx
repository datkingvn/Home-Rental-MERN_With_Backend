import React from 'react';

const Footer = () => {
    return (
        <div className='section-container'>
            <footer className="footer xl:px-10 py-10 px-4 text-base-content">
                <aside>
                    <img src='/logo.png' alt='logo'/>
                    <p className='my-3 md:w-40'>Gia vị cho gia đình, Ngọt ngào cho đôi ta...</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Liên kết</h6>
                    <a className="link link-hover">Về chúng tôi</a>
                    <a className="link link-hover">Sự kiện</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Hỏi - Đáp</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Main Menu</h6>
                    <a className="link link-hover">Trang chủ</a>
                    <a className="link link-hover">Offers</a>
                    <a className="link link-hover">Menus</a>
                    <a className="link link-hover">Dịch vụ</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Chính sách</h6>
                    <a className="link link-hover">Điều khoản và dịch vụ</a>
                    <a className="link link-hover">Chính sách</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
