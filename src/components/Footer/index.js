import { useEffect, useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { FiPhone } from 'react-icons/fi';
import { FaBriefcase, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

import './Footer.GlobalStyles.scss';
import adchoices from '../../assets/images/adchoices.jpg';

function Footer() {
    const [scrolling, setScrolling] = useState(false);

    const scrollToTopSmoothly = () => {
        const scrollStep = window.scrollY / 100;
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                setScrolling(true);
                window.scrollBy(0, -scrollStep);
            } else {
                clearInterval(scrollInterval);
                setScrolling(false);
            }
        }, 15);
    };

    useEffect(() => {
        const backButton = document.querySelector('.btn-back');
        if (backButton) {
            backButton.addEventListener('click', scrollToTopSmoothly);
        }

        return () => {
            if (backButton) {
                backButton.removeEventListener('click', scrollToTopSmoothly);
            }
        };
    }, []);

    return (
        <div className="wrap-footer">
            <div className="body-footer">
                <div className="body-footer-btn">
                    <button className="btn-back">Quay trở về đầu tiên</button>
                </div>
                <div className="body-footer-nav">
                    <ul className="body-footer-nav-group responsive-group">
                        <li className="body-footer-nav-contactus">
                            <FiPhone className="body-footer-nav-contactus-icon" />
                            <a href="#" className="body-footer-nav-contactus-text">
                                Liên hệ với chúng tôi
                            </a>
                        </li>
                        <li className="body-footer-nav-career">
                            <FaBriefcase className="body-footer-nav-career-icon" />
                            <a href="#" className="body-footer-nav-career-text">
                                Cơ hội việc làm
                            </a>
                            <MdOutlineArrowOutward className="body-footer-nav-career-icon" />
                        </li>
                    </ul>
                    <ul className="body-footer-nav-group">
                        <label className="body-footer-nav-partner-investor">ĐỐI TÁC VÀ NHÀ ĐẦU TƯ</label>
                        <li className="body-footer-nav-investor">
                            <a href="#" className="body-footer-nav-investor-text">
                                Nhà đầu tư
                            </a>
                            <MdOutlineArrowOutward className="body-footer-nav-investor-icon" />
                        </li>
                        <li className="body-footer-nav-partner">
                            <a href="#" className="body-footer-nav-partner-text">
                                Làm đối tác với chúng tôi
                            </a>
                            <MdOutlineArrowOutward className="body-footer-nav-partner-icon" />
                        </li>
                        <li className="body-footer-nav-supplier">
                            <a href="#" className="body-footer-nav-supplier-text">
                                Nhà cung cấp
                            </a>
                            <MdOutlineArrowOutward className="body-footer-nav-supplier-icon" />
                        </li>
                    </ul>
                    <ul className="body-footer-nav-group">
                        <label className="body-footer-nav-group-companyus">CÔNG TY CHÚNG TÔI</label>
                        <li className="body-footer-nav-leader">
                            <a href="#" className="body-footer-nav-leader-text">
                                Lãnh đạo
                            </a>
                        </li>
                        <li className="body-footer-nav-structure">
                            <a href="#" className="body-footer-nav-structure-text">
                                Cấu trúc & Quản trị
                            </a>
                        </li>
                        <li className="body-footer-nav-policy">
                            <a href="#" className="body-footer-nav-policy-text">
                                Chính sách & Thực hành
                            </a>
                        </li>
                        <li className="body-footer-nav-storage">
                            <a href="#" className="body-footer-nav-storage-text">
                                Lưu trữ
                            </a>
                        </li>
                        <li className="body-footer-nav-awards">
                            <a href="#" className="body-footer-nav-awards-text">
                                Giải thưởng & công nhận
                            </a>
                            <MdOutlineArrowOutward className="body-footer-nav-awards-icon" />
                        </li>
                        <li className="body-footer-nav-news">
                            <a href="#" className="body-footer-nav-news-text">
                                Tin tức
                            </a>
                            <MdOutlineArrowOutward className="body-footer-nav-news-icon" />
                        </li>
                    </ul>
                    <ul className="body-footer-nav-group">
                        <label className="body-footer-nav-useful">HỮU ÍCH</label>
                        <li className="body-footer-nav-sitemap">
                            <a href="#" className="body-footer-nav-sitemap-text">
                                Sơ đồ trang web
                            </a>
                        </li>
                    </ul>
                    <ul className="body-footer-nav-group">
                        <label className="body-footer-nav-law">PHÁP LUẬT</label>
                        <li className="body-footer-nav-privacy">
                            <a href="#" className="body-footer-nav-privacy-text">
                                Thông báo bảo mật
                            </a>
                            <MdOutlineArrowOutward className="body-footer-nav-privacy-icon" />
                        </li>
                        <li className="body-footer-nav-conditions">
                            <a href="#" className="body-footer-nav-conditions-text">
                                Điều khoản & Điều lệ
                            </a>
                            <MdOutlineArrowOutward className="body-footer-nav-conditions-icon" />
                        </li>
                        <li className="body-footer-nav-adchoices">
                            <a href="#" className="body-footer-nav-adchoices-text">
                                AdChoices
                            </a>
                            <img src={adchoices} alt="adchoices" className="body-footer-nav-adchoices-img" />
                        </li>
                    </ul>
                </div>
                <div className="body-footer-bottom">
                    <div className="body-footer-bottom-left">
                        <button className="body-footer-bottom-left-btn">
                            <GrLanguage className="body-footer-bottom-left-icon" />
                            <span className="body-footer-bottom-left-text">Tiếng Việt</span>
                        </button>
                    </div>
                    <div className="body-footer-bottom-center">
                        <span className="body-footer-bottom-center-text">&copy; 2024 Procter & Gamble</span>
                    </div>
                    <div className="body-footer-bottom-right">
                        <a href="#">
                            <FaFacebook className="body-footer-bottom-right-facebook" />
                        </a>
                        <a href="#">
                            <FaXTwitter className="body-footer-bottom-right-twitter" />
                        </a>
                        <a href="#">
                            <FaYoutube className="body-footer-bottom-right-youtube" />
                        </a>
                        <a href="#">
                            <FaInstagram className="body-footer-bottom-right-instagram" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="body-footer-bottom-right-linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
