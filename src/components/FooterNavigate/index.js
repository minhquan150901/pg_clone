import React, { useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { BsArrowUpRight } from 'react-icons/bs';
import { GoArrowUpRight } from 'react-icons/go';

import './FooterNavigate.GlobalStyles.scss';

function FooterNavigate() {
    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('.wrap-navigatefooter');
            if (window.scrollY > 50) {
                footer.classList.add('navigatefooter-container-hidden');
            } else {
                footer.classList.remove('navigatefooter-container-hidden');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="wrap-navigatefooter">
            <div class="navigatefooter-container">
                <div class="navigatefooter-container-left">
                    <div className="wrap-partner-investor">
                        <span class="partner-investor">Đối tác và nhà đầu tư</span>
                        <IoIosArrowUp className="icon-down" />
                        <ul class="partner-investor-list">
                            <li className="partner-investor-list-hidden">
                                <a href="#" title="www.pginvestor.com">
                                    Nhà Đầu Tư
                                </a>
                                <GoArrowUpRight className="partner-investor-icon" />
                            </li>
                            <li className="partner-investor-list-hidden">
                                <a href="#" title="www.connectdevelop.com">
                                    Làm Đối Tác Với Chứng Tôi
                                </a>
                                <GoArrowUpRight className="partner-investor-icon" />
                            </li>
                            <li className="partner-investor-list-hidden">
                                <a href="#" title="www.pgsupplier.com/en-US">
                                    Nhà Cung Cấp
                                </a>
                                <GoArrowUpRight className="partner-investor-icon" />
                            </li>
                        </ul>
                    </div>
                    <div className="wrap-company">
                        <span class="company">Công ty chúng tôi</span>
                        <IoIosArrowUp className="icon-down" />
                        <ul class="company-list">
                            <li className="company-list-hidden">
                                <a href="#">Lãnh Đạo</a>
                            </li>
                            <li className="company-list-hidden">
                                <a href="#">Cấu Trúc & Quản Trị</a>
                            </li>
                            <li className="company-list-hidden">
                                <a href="#">Chính Sách & Thực Hành</a>
                            </li>
                            <li className="company-list-hidden">
                                <a href="#">Lưu Trữ</a>
                            </li>
                            <li className="company-list-hidden">
                                <a href="#">Giải Thưởng & Công Nhận</a>
                                <GoArrowUpRight className="company-icon" />
                            </li>
                            <li className="company-list-hidden">
                                <a href="#" title="www.news.pg.com">
                                    Tin Tức
                                </a>
                                <GoArrowUpRight className="company-icon" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="navigatefooter-container-center">
                    <span>&copy; 2024 Procter & Gamble</span>
                </div>
                <div class="navigatefooter-container-right">
                    <span className="contact-us">Liên hệ với chúng tôi</span>
                    <span className="career" title="www.pgcareers.com">
                        Cơ hội việc làm
                    </span>
                    <BsArrowUpRight className="icon-up" />
                    <button className="btn-accept-cookie">Chấp thuận Cookies</button>
                </div>
            </div>
            <div className="navigatefooter-container-hidden"></div>
        </div>
    );
}

export default FooterNavigate;
