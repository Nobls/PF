import React from 'react';
import {Link} from "react-router-dom";
import s from './footer.module.scss'
import logo from "../../images/logoNew2.png";
import {NavigationFooter} from "../navigationFooter/NavigationFooter";

const Footer = () => {
    return (
        <div className={s.footerBg}>
            <div className={s.wrapper}>
                <div>
                    <div className={s.wrapperLogo}>
                        <Link to={'/'}>
                            <img className={s.logo} src={logo} alt="logo"/>
                        </Link>
                        <div className={s.sloganFooter}>
                            <p>С заботой о ваших питомцах. <br/> Премиальный уход и <br/> счастливае питомцы.</p>
                        </div>
                        <div className={s.wrapperSocials}>
                            <Link to={"/"}>
                                <svg id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 215" fill="#eb5837">
                                    <g id="Instagram">
                                        <circle id="Background" cx="107.5" cy="107.5" r="107.5"/>
                                        <path id="Instagram-2" className="cls-1" fill="#fff"
                                              d="M384.5,53c14.8,0,16.66.06,22.47.33a39.85,39.85,0,0,1,13.23,2.53A27.92,27.92,0,0,1,436.14,71.8,39.85,39.85,0,0,1,438.67,85c.27,5.81.33,7.67.33,22.47s-.06,16.66-.33,22.47a39.85,39.85,0,0,1-2.53,13.23,27.92,27.92,0,0,1-15.94,15.94A39.85,39.85,0,0,1,407,161.67c-5.81.27-7.67.33-22.47.33s-16.66-.06-22.47-.33a39.85,39.85,0,0,1-13.23-2.53,27.92,27.92,0,0,1-15.94-15.94A39.85,39.85,0,0,1,330.33,130c-.27-5.81-.33-7.67-.33-22.47s.06-16.66.33-22.47a39.85,39.85,0,0,1,2.53-13.23A27.92,27.92,0,0,1,348.8,55.86,39.85,39.85,0,0,1,362,53.33C367.84,53.06,369.7,53,384.5,53Zm22,10.14c-5.74-.26-7.47-.32-22-.32s-16.28.06-22,.32A30.26,30.26,0,0,0,352.36,65,18.07,18.07,0,0,0,342,75.36a30.26,30.26,0,0,0-1.87,10.12c-.26,5.74-.32,7.47-.32,22s.06,16.28.32,22A30.26,30.26,0,0,0,342,139.64,18.07,18.07,0,0,0,352.36,150a30.26,30.26,0,0,0,10.12,1.87c5.74.26,7.47.32,22,.32s16.28-.06,22-.32A30.26,30.26,0,0,0,416.64,150,18.07,18.07,0,0,0,427,139.64a30.26,30.26,0,0,0,1.87-10.12c.26-5.74.32-7.47.32-22s-.06-16.28-.32-22A30.26,30.26,0,0,0,427,75.36,18.07,18.07,0,0,0,416.64,65,30.26,30.26,0,0,0,406.52,63.14Zm-22,62.53a18.17,18.17,0,1,0-18.17-18.17A18.18,18.18,0,0,0,384.5,125.67Zm0-46.16a28,28,0,1,1-28,28A28,28,0,0,1,384.5,79.51Zm35.63-1.1a6.54,6.54,0,1,1-6.54-6.54A6.54,6.54,0,0,1,420.13,78.41Z"
                                              transform="translate(-277)"/>
                                    </g>
                                </svg>
                            </Link>
                            <Link to={"/"}>
                                <svg id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 215" fill="#eb5837">
                                    <g id="Viber">
                                        <circle id="Background" cx="107.5" cy="107.5" r="107.5"/>
                                        <g id="Viber-2">
                                            <path className="cls-1" fill="#fff"
                                                  d="M148.37,343.83c-2.75-2.55-13.9-10.64-38.73-10.75,0,0-29.28-1.77-43.55,11.33-8,7.94-10.74,19.57-11,34s-.68,41.43,25.37,48.76h0v11.18s-.17,4.52,2.81,5.45c3.6,1.11,5.72-2.33,9.16-6,1.89-2,4.5-5,6.46-7.31,17.82,1.5,31.51-1.93,33.07-2.44,3.6-1.16,23.95-3.77,27.26-30.79C162.6,369.38,157.53,351.77,148.37,343.83Zm3,51.4c-2.79,22.55-19.3,24-22.34,24.95a92.89,92.89,0,0,1-28.46,2.42S89.32,436.2,85.8,439.74a1.89,1.89,0,0,1-1.63.66c-.6-.15-.77-.86-.76-1.91,0-1.5.09-18.58.09-18.58h0c-22-6.12-20.74-29.11-20.49-41.15s2.51-21.91,9.23-28.54c12.07-10.94,36.94-9.3,36.94-9.3,21,.09,31.07,6.41,33.4,8.53,7.75,6.64,11.7,22.51,8.81,45.77Z"
                                                  transform="translate(0 -277)"/>
                                            <path id="Viber-3" className="cls-1" fill="#fff"
                                                  d="M119.86,379.17a1.4,1.4,0,0,1-1.4-1.33c-.24-4.77-2.48-7.11-7.06-7.35a1.4,1.4,0,0,1,.14-2.8c6,.32,9.41,3.78,9.72,10a1.41,1.41,0,0,1-1.33,1.47Z"
                                                  transform="translate(0 -277)"/>
                                            <path id="Viber-4" className="cls-1" fill="#fff"
                                                  d="M127.06,381.59h0a1.41,1.41,0,0,1-1.37-1.44,16.27,16.27,0,0,0-4.19-11.88c-2.92-3.19-6.92-4.92-12.23-5.31a1.4,1.4,0,1,1,.2-2.8c6,.43,10.72,2.53,14.1,6.22a19.13,19.13,0,0,1,4.93,13.83A1.41,1.41,0,0,1,127.06,381.59Z"
                                                  transform="translate(0 -277)"/>
                                            <path id="Viber-5" className="cls-1" fill="#fff"
                                                  d="M134.44,384.47a1.4,1.4,0,0,1-1.4-1.39c-.07-8.47-2.61-15.21-7.56-20a26,26,0,0,0-18.63-7.36,1.41,1.41,0,0,1,0-2.81h0A28.71,28.71,0,0,1,127.44,361c5.51,5.37,8.33,12.78,8.4,22a1.39,1.39,0,0,1-1.39,1.41Z"
                                                  transform="translate(0 -277)"/>
                                            <path id="Viber-6" className="cls-1" fill="#fff"
                                                  d="M111.75,396.58a3.86,3.86,0,0,0,3-1.15l2.08-2.6a4.53,4.53,0,0,1,5.77-.8,59,59,0,0,1,5.15,3.28c1.56,1.16,4.77,3.83,4.78,3.83a4,4,0,0,1,.85,5.19v0a21.69,21.69,0,0,1-4.32,5.31l0,0a8.55,8.55,0,0,1-4.38,2.12,2.76,2.76,0,0,1-.64,0,5.88,5.88,0,0,1-1.86-.29l0-.07c-2.21-.62-5.9-2.18-12-5.57A70.72,70.72,0,0,1,100,399.26a51.18,51.18,0,0,1-4.55-4l-.16-.15-.15-.16h0l-.15-.15-.16-.15a54.36,54.36,0,0,1-4-4.55A71.67,71.67,0,0,1,84.09,380c-3.39-6.14-5-9.82-5.57-12l-.07,0a5.87,5.87,0,0,1-.28-1.86,2.72,2.72,0,0,1,0-.64A8.7,8.7,0,0,1,80.32,361s0,0,0,0a21.65,21.65,0,0,1,5.31-4.32h0a4,4,0,0,1,5.18.84s2.68,3.22,3.83,4.78S97,365.63,98,367.4a4.55,4.55,0,0,1-.8,5.77l-2.61,2.07a3.86,3.86,0,0,0-1.14,3S97.32,392.89,111.75,396.58Z"
                                                  transform="translate(0 -277)"/>
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                            <Link to={"/"}>
                                <svg id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 215" fill="#eb5837">
                                    <g id="Telegram">
                                        <circle id="Background" cx="107.5" cy="107.5" r="107.5"/>
                                        <path id="Telegram-2" className="cls-1" fill="#fff"
                                              d="M603.31,105.65q46.89-20.43,62.53-26.94c29.78-12.38,36-14.53,40-14.61A7.09,7.09,0,0,1,710,65.35a4.49,4.49,0,0,1,1.53,2.9,19.25,19.25,0,0,1,.18,4.23c-1.61,17-8.6,58.09-12.15,77.08-1.5,8-4.46,10.73-7.33,11-6.22.57-11-4.12-17-8.07-9.44-6.19-14.77-10-23.93-16.08-10.59-7-3.72-10.81,2.31-17.07,1.58-1.64,29-26.6,29.54-28.86a2.18,2.18,0,0,0-.5-1.9,2.49,2.49,0,0,0-2.22-.21q-1.41.31-45.22,29.89-6.42,4.41-11.63,4.3c-3.83-.09-11.19-2.17-16.67-4-6.71-2.18-12-3.33-11.58-7Q595.7,108.68,603.31,105.65Z"
                                              transform="translate(-554)"/>
                                    </g>
                                </svg>
                            </Link>
                            <Link to={"/"}>
                                <svg id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 215" fill="#eb5837">
                                    <g id="VK">
                                        <circle id="Background" cx="107.5" cy="107.5" r="107.5"/>
                                        <path id="VK-2" className="cls-1" fill="#fff"
                                              d="M111.44,147.14C69.76,147.14,46,118.56,45,71H65.87c.69,34.9,16.08,49.69,28.27,52.74V71h19.67v30.1c12-1.29,24.69-15,28.95-30.1h19.67c-3.28,18.59-17,32.31-26.75,37.95A60.16,60.16,0,0,1,167,147.14H145.36c-4.65-14.48-16.24-25.68-31.55-27.2v27.2Z"/>
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={s.footerNav}>
                    <NavigationFooter/>
                </div>
                <div>
                    <h4>Галерея</h4>
                    <div className={s.galleryFooter}>

                        <div><img src="" alt="gallery"/></div>
                        <div><img src="" alt="gallery"/></div>
                        <div><img src="" alt="gallery"/></div>
                        <div><img src="" alt="gallery"/></div>
                        <div><img src="" alt="gallery"/></div>
                        <div><img src="" alt="gallery"/></div>
                    </div>
                </div>


                <div className={s.wrapperLink}>
                    <h4>Контакты</h4>
                    <a className={s.link} href={'tel:+375291111111'}>+375-29-111-11-11</a>
                    <a className={s.link} href={'tel:+375291111122'}>+375-29-111-11-22</a>
                    <a className={s.link} href={'mailto:revertagroup@gmail.com'}>revertagroup@gmail.com</a>
                </div>
            </div>
            <div className={s.protection}>Все права защищены © 2022</div>
        </div>
    );
};

export default Footer;