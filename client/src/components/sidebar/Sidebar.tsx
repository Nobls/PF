import React from 'react';
import s from "./sidebar.module.scss";
import {Link} from "react-router-dom";
import {lastNews} from "../../data/data";

const Sidebar = () => {
    return (
        <div className={s.sideBar}>
            <div className={s.newsCategories}>
                <h4 className={s.sideBarTitle}>Категории</h4>
                <ul className={s.newsCategoriesItems}>
                    <li className={s.newsCategoriesItem}>
                        <Link to={'/news'} className={s.newsCategoriesLink}>
                            Аксессуары
                            <span className={s.newsCategoriesDots}>

                                    </span>
                            <span className={s.newsCategoriesCount}>
                                        25
                                    </span>
                        </Link>
                    </li>
                    <li className={s.newsCategoriesItem}>
                        <Link to={'/news'} className={s.newsCategoriesLink}>
                            Коты
                            <span className={s.newsCategoriesDots}>

                                    </span>
                            <span className={s.newsCategoriesCount}>
                                        6
                                    </span>
                        </Link>
                    </li>
                    <li className={s.newsCategoriesItem}>
                        <Link to={'/news'} className={s.newsCategoriesLink}>
                            Собаки
                            <span className={s.newsCategoriesDots}>

                                    </span>
                            <span className={s.newsCategoriesCount}>
                                        4
                                    </span>
                        </Link>
                    </li>
                    <li className={s.newsCategoriesItem}>
                        <Link to={'/news'} className={s.newsCategoriesLink}>
                            Домашние питомцы
                            <span className={s.newsCategoriesDots}>

                                    </span>
                            <span className={s.newsCategoriesCount}>
                                        8
                                    </span>
                        </Link>
                    </li>
                    <li className={s.newsCategoriesItem}>
                        <Link to={'/news'} className={s.newsCategoriesLink}>
                            Питание
                            <span className={s.newsCategoriesDots}>

                                    </span>
                            <span className={s.newsCategoriesCount}>
                                        2
                                    </span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={s.recentNews}>
                <h4 className={s.sideBarTitle}>Последние новости</h4>

                <div className={s.recentNewsWrapper}>
                    <div className={s.recentNewsImage} style={{backgroundImage: `url(${lastNews[0].image})`}}>
                    </div>
                    <div className={s.recentNewsInner}>
                        <Link to={'/news'} className={s.recentNewsTitle}>{lastNews[0].title}</Link>
                        <div className={s.recentNewsDate}>21.08.2022</div>
                    </div>
                </div>
                <div className={s.recentNewsWrapper}>
                    <div className={s.recentNewsImage} style={{backgroundImage: `url(${lastNews[1].image})`}}>
                    </div>
                    <div className={s.recentNewsInner}>
                        <Link to={'/news'} className={s.recentNewsTitle}>{lastNews[1].title}</Link>
                        <div className={s.recentNewsDate}>21.08.2022</div>
                    </div>
                </div>
                <div className={s.recentNewsWrapper}>
                    <div className={s.recentNewsImage} style={{backgroundImage: `url(${lastNews[2].image})`}}>
                    </div>
                    <div className={s.recentNewsInner}>
                        <Link to={'/news'} className={s.recentNewsTitle}>{lastNews[2].title}</Link>
                        <div className={s.recentNewsDate}>21.08.2022</div>
                    </div>
                </div>
            </div>

            <div className={s.newsTags}>
                <h4 className={s.sideBarTitle}>Теги</h4>
                <div className={s.newsTagsItems}>
                    {
                        lastNews.map(m => {
                            return (
                                <span key={m.id}>{m.tags}</span>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default Sidebar;