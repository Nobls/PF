import React from 'react';
import s from './petAccount.module.scss'
import petPhoto from '../../images/pagesBG/02.jpg'
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";

const PetAccount = () => {
    return (
        <div className={s.pageContainer}>
            <div className={s.petAccountInfo}>
                <div className={s.petAccountInfoWrapper}>
                    <div className={s.petAccountPhoto} style={{backgroundImage: `url(${petPhoto})`}}></div>
                    <div className={s.petAccountPersonalInfo}>
                        <div className={s.personalPetName}>Чапа</div>
                        <div>
                            <span className={s.personalPetAge}>5 лет</span>
                            <span className={s.personalPetGender}>М</span>
                        </div>
                        <div className={s.personalPetBreed}>Бульдог</div>
                    </div>
                </div>
                <div className={s.petAccountPersonalCard}>
                    <p className={s.petPersonalCard}>Личная карта №</p>
                    <p className={s.petPersonalCardNumber}>000000001</p>
                </div>
            </div>
            <div className={s.petVaccinations}>
                <h3 className={s.petVaccinationsTitle}>Прививки</h3>
                <ol className={s.petVaccinationsItems}>
                    <li>От бешенства <span>Novak2000</span> <span>21.03.2022</span></li>
                    <li>От бешенства <span>Novak2000</span> <span>21.03.2022</span></li>
                    <li>От бешенства <span>Novak2000</span> <span>21.03.2022</span></li>
                </ol>
                <form className={s.petVaccinationsForm}>
                    <label htmlFor="">Тип прививки<input type="text"/></label>
                    <label htmlFor="">Дата<input type="text"/></label>
                    <label htmlFor="">Название препарата<input type="text"/></label>
                    <label htmlFor="">Название клиники<input type="text"/></label>
                </form>
                <button>Добавить</button>
            </div>
            <div className={s.petProcedures}>
                <h3 className={s.petProceduresTitle}>Прививки</h3>
                <ol className={s.petProceduresItems}>
                    <li>Кастрация <span>Доктор Вет</span> <span>21.03.2022</span></li>
                    <li>Кастрация <span>Доктор Вет</span> <span>21.03.2022</span></li>
                    <li>Кастрация <span>Доктор Вет</span> <span>21.03.2022</span></li>
                </ol>
                <form className={s.petProceduresForm}>
                    <label htmlFor="">Процедура<input type="text"/></label>
                    <label htmlFor="">Дата<input type="text"/></label>
                    <label htmlFor="">Название клиники<input type="text"/></label>
                </form>
                <button>Добавить</button>
            </div>
            <div className={s.petAccountInstruction}>
                <div className={s.petAccountInstructionWrapper}>
                    <p>* Медицинская карта заполняется автоматически при обращение к нам за услугами сопровождения в клинику.</p>
                    <p>Во всех других случаях карта заполняется пользователем.</p>
                </div>
                <ButtonStandart title={'Сохранить'}/>
            </div>
        </div>
    );
};

export default PetAccount;