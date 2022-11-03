import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from "../../images/logoNew2.png"
import s from './header.module.scss'
import Navigation from "../navigation/Navigation";
import {Search} from "../search/Search";
import user from '../../images/user.png';
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {logout, selectedIsAuth} from "../../redux/slices/auth";
import ButtonStandart from "../buttonStandart/ButtonStandart";

const Header = () => {

    const [search, setSearch] = useState(false)

    const onclickSearchHandler = () => {
        setSearch(!search)
    }

    const isAuth = useAppSelector(selectedIsAuth)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const navigateUserAccount = () => {
        navigate('usersAccount')
    }

    const onClickLogout = ()=>{
        dispatch(logout())
    }


    return (
        <div className={s.headerBg}>
            <div className={s.containerHeader}>
                <div className={s.wrapperHeader}>
                    <Link className={s.innerLogo} to={'/'}>
                        <img className={s.logo} src={logo} alt="logo"/>
                    </Link>
                    <div className={s.innerHeader}>
                        <div className={s.wrapperInformationBlock}>
                            <div className={s.innerSearch}>
                                {search && <Search search={search} setSearch={setSearch}/>}
                                <div onClick={onclickSearchHandler}>
                                    Поиск
                                    <button>
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"
                                             viewBox="0 0 30 30" aria-labelledby="searchIconTitle"
                                             fill="#eb5837"><title id="searchIconTitle">Search</title>
                                            <path
                                                d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
                                                id="XMLID_223_"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={s.linkWrapper}>
                                <div className={s.phoneWrapper}>
                                    <a className={s.linkPhone} href={'tel:+375291111111'}>+375-29-111-11-11</a>
                                    <p className={s.email}>revertaGroup@gmail.com</p>
                                </div>

                                <Link className={s.link} to={"/"}>
                                    <svg className={s.icon} id="Icons" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 215 215"
                                         fill="#ffffff">
                                        <path id="Background"
                                              d="M277,103.2c0-48.65,0-73,15.11-88.09S331.55,0,380.2,0h8.6c48.65,0,73,0,88.09,15.11S492,54.55,492,103.2v8.6c0,48.65,0,73-15.11,88.09S437.45,215,388.8,215h-8.6c-48.65,0-73,0-88.09-15.11S277,160.45,277,111.8Z"
                                              transform="translate(-277)"/>
                                        <path id="Instagram-2" className={s.iconInner}
                                              d="M384.5,47.55c16.28,0,18.32.07,24.72.36a44,44,0,0,1,14.55,2.79A30.6,30.6,0,0,1,441.3,68.23a44,44,0,0,1,2.79,14.55c.29,6.4.36,8.44.36,24.72s-.07,18.32-.36,24.72a44,44,0,0,1-2.79,14.55,30.6,30.6,0,0,1-17.53,17.53,44,44,0,0,1-14.55,2.79c-6.4.29-8.44.36-24.72.36s-18.32-.07-24.72-.36a44,44,0,0,1-14.55-2.79,30.6,30.6,0,0,1-17.53-17.53,44,44,0,0,1-2.79-14.55c-.29-6.4-.36-8.44-.36-24.72s.07-18.32.36-24.72a44,44,0,0,1,2.79-14.55A30.6,30.6,0,0,1,345.23,50.7a44,44,0,0,1,14.55-2.79C366.18,47.62,368.22,47.55,384.5,47.55ZM408.72,58.7c-6.32-.29-8.21-.35-24.22-.35s-17.9.06-24.22.35a33.06,33.06,0,0,0-11.14,2.07,19.82,19.82,0,0,0-11.37,11.37,33.06,33.06,0,0,0-2.07,11.14c-.29,6.32-.35,8.21-.35,24.22s.06,17.9.35,24.22a33.06,33.06,0,0,0,2.07,11.14,19.82,19.82,0,0,0,11.37,11.37,33.06,33.06,0,0,0,11.14,2.07c6.32.29,8.21.35,24.22.35s17.9-.06,24.22-.35a33.06,33.06,0,0,0,11.14-2.07,19.82,19.82,0,0,0,11.37-11.37,33.06,33.06,0,0,0,2.07-11.14c.29-6.32.35-8.21.35-24.22s-.06-17.9-.35-24.22a33.06,33.06,0,0,0-2.07-11.14,19.82,19.82,0,0,0-11.37-11.37A33.06,33.06,0,0,0,408.72,58.7ZM384.5,127.48a20,20,0,1,0-20-20A20,20,0,0,0,384.5,127.48Zm0-50.77a30.79,30.79,0,1,1-30.79,30.79A30.79,30.79,0,0,1,384.5,76.71Zm39.2-1.21a7.2,7.2,0,1,1-7.2-7.2A7.2,7.2,0,0,1,423.7,75.5Z"
                                              transform="translate(-277)" fill={"#eb5837"}/>
                                    </svg>
                                </Link>
                                <Link className={s.link} to={"/"}>
                                    <svg className={s.icon} id="Icons" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 215 215" fill={"#ffffff"}>
                                        <path id="Background" className="cls-1"
                                              d="M554,103.2c0-48.65,0-73,15.11-88.09S608.55,0,657.2,0h8.6c48.65,0,73,0,88.09,15.11S769,54.55,769,103.2v8.6c0,48.65,0,73-15.11,88.09S714.45,215,665.8,215h-8.6c-48.65,0-73,0-88.09-15.11S554,160.45,554,111.8Z"
                                              transform="translate(-554)"/>
                                        <path id="Telegram-2" className={s.iconInner}
                                              d="M598.29,105q51.57-22.47,68.78-29.63c32.76-13.63,39.56-16,44-16.07a7.7,7.7,0,0,1,4.57,1.37,5,5,0,0,1,1.68,3.19,21,21,0,0,1,.2,4.65c-1.78,18.65-9.46,63.91-13.37,84.79-1.65,8.84-4.9,11.81-8.06,12.1-6.85.63-12.05-4.53-18.68-8.88-10.38-6.8-16.25-11-26.32-17.68-11.65-7.67-4.1-11.89,2.54-18.78,1.74-1.81,31.91-29.26,32.5-31.75a2.41,2.41,0,0,0-.55-2.08,2.68,2.68,0,0,0-2.44-.24q-1.56.36-49.75,32.88-7.07,4.86-12.79,4.73c-4.22-.09-12.32-2.38-18.34-4.34-7.38-2.4-13.25-3.67-12.74-7.75Q589.91,108.31,598.29,105Z"
                                              transform="translate(-554)" fill={"#eb5837"}/>
                                    </svg>
                                </Link>
                                <Link className={s.link} to={"/"}>
                                    <svg className={s.icon} id="Icons" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 215 215"
                                         fill="#ffffff">
                                        <path id="Background"
                                              d="M0,380.2c0-48.65,0-73,15.11-88.09S54.55,277,103.2,277h8.6c48.65,0,73,0,88.09,15.11S215,331.55,215,380.2v8.6c0,48.65,0,73-15.11,88.09S160.45,492,111.8,492h-8.6c-48.65,0-73,0-88.09-15.11S0,437.45,0,388.8Z"
                                              transform="translate(0 -277)"/>
                                        <path className={s.iconInner}
                                              d="M152.45,339.36c-3-2.8-15.3-11.7-42.61-11.82,0,0-32.21-1.94-47.91,12.46-8.74,8.74-11.81,21.53-12.14,37.39S49.05,423,77.7,431h0l0,12.3s-.19,5,3.09,6c4,1.23,6.29-2.55,10.08-6.63,2.08-2.24,5-5.53,7.11-8,19.59,1.65,34.66-2.12,36.37-2.68,4-1.28,26.34-4.15,30-33.86C168.1,367.47,162.52,348.09,152.45,339.36Zm3.32,56.54c-3.07,24.81-21.23,26.37-24.58,27.44A101.66,101.66,0,0,1,99.89,426s-12.4,15-16.27,18.85a2.07,2.07,0,0,1-1.79.73c-.67-.16-.85-.95-.85-2.1,0-1.65.11-20.44.11-20.44h0c-24.23-6.73-22.82-32-22.54-45.27s2.76-24.09,10.15-31.39c13.28-12,40.64-10.23,40.64-10.23,23.1.1,34.17,7.06,36.74,9.39,8.52,7.29,12.86,24.76,9.69,50.34Z"
                                              transform="translate(0 -277)" fill={"#eb5837"}/>
                                        <path id="Viber-3" className={s.iconInner}
                                              d="M121.08,378.24a1.54,1.54,0,0,1-1.54-1.47c-.26-5.25-2.73-7.81-7.77-8.08a1.54,1.54,0,0,1,.16-3.08c6.66.35,10.36,4.15,10.7,11a1.55,1.55,0,0,1-1.47,1.62Z"
                                              transform="translate(0 -277)" fill={"#eb5837"}/>
                                        <path id="Viber-4" className={s.iconInner}
                                              d="M129,380.9h0a1.56,1.56,0,0,1-1.52-1.58,17.81,17.81,0,0,0-4.61-13.07c-3.21-3.51-7.61-5.42-13.45-5.85a1.54,1.54,0,0,1,.22-3.08c6.58.48,11.79,2.78,15.51,6.84a21.1,21.1,0,0,1,5.42,15.23A1.54,1.54,0,0,1,129,380.9Z"
                                              transform="translate(0 -277)" fill={"#eb5837"}/>
                                        <path id="Viber-5" className={s.iconInner}
                                              d="M137.12,384.07a1.53,1.53,0,0,1-1.54-1.53c-.07-9.32-2.87-16.74-8.31-22.05a28.67,28.67,0,0,0-20.49-8.1,1.55,1.55,0,1,1,0-3.09h0c9,.07,16.58,3.09,22.62,9s9.17,14.06,9.25,24.23a1.55,1.55,0,0,1-1.54,1.56Z"
                                              transform="translate(0 -277)" fill={"#eb5837"}/>
                                        <path id="Viber-6" className={s.iconInner}
                                              d="M112.16,397.38a4.22,4.22,0,0,0,3.34-1.25l2.28-2.87a5,5,0,0,1,6.35-.88c2,1.11,3.84,2.32,5.66,3.61s5.26,4.22,5.27,4.22a4.35,4.35,0,0,1,.92,5.7.43.43,0,0,1,0,0,23.64,23.64,0,0,1-4.74,5.84l0,0a9.36,9.36,0,0,1-4.82,2.33,3.3,3.3,0,0,1-.7,0,6.46,6.46,0,0,1-2-.32l-.05-.07c-2.43-.69-6.49-2.4-13.24-6.13a79,79,0,0,1-11.13-7.35,56.84,56.84,0,0,1-5-4.44l-.17-.17-.17-.17h0l-.17-.16c-.06-.06-.11-.12-.17-.17a58.52,58.52,0,0,1-4.43-5,78.36,78.36,0,0,1-7.35-11.12c-3.73-6.76-5.45-10.81-6.13-13.24l-.08-.06a6.43,6.43,0,0,1-.31-2,3.35,3.35,0,0,1,0-.71,9.58,9.58,0,0,1,2.34-4.82l0,0a23.64,23.64,0,0,1,5.84-4.74h0a4.36,4.36,0,0,1,5.7.91s3,3.54,4.21,5.27a67.17,67.17,0,0,1,3.62,5.67,5,5,0,0,1-.88,6.35l-2.87,2.28A4.21,4.21,0,0,0,92,377.26S96.29,393.33,112.16,397.38Z"
                                              transform="translate(0 -277)" fill={"#eb5837"}/>
                                    </svg>
                                </Link>
                            </div>
                            {
                                isAuth ?
                                    <div>
                                        <div className={s.userLoginWrapper} onClick={navigateUserAccount}>
                                            <div className={s.userLogin}><img className={s.userLoginIcon} src={user} alt="user"/></div>
                                            <span className={s.userName}>Александр</span>

                                        </div>
                                        <ButtonStandart title={'Выйти'} onclick={onClickLogout}/>
                                    </div>
                                    :
                                    <Link className={s.linkLogin} to={'/login'}>Войти</Link>
                            }

                        </div>
                        <div>
                            <Navigation/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;