import React, {useEffect, useState} from 'react';
import s from './petAccount.module.scss'
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";
import {Link, useParams} from "react-router-dom";
import axios from "../../axios/axios";
import {PetVaccines} from "../../components/petVaccines/PetVaccines";
import {PetProcedures} from "../../components/petProcedures/PetProcedures";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {fetchCreateProcedures, fetchPetProcedures} from "../../redux/slices/procedures";

const PetAccount = () => {

    const dispatch = useAppDispatch()
    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<any>(true)

    const [typeVaccination, setTypeVaccination] = useState('')
    const [dateVaccination, setDateVaccination] = useState('')
    const [nameOfVaccine, setNameOfVaccine] = useState('')
    const [nameClinic, setNameClinic] = useState('')

    //const {userPet} = useAppSelector((state)=> state.userPet)
    //const {procedures} = useAppSelector((state)=>state.procedures)
    const params = useParams()

    useEffect(() => {
        axios.get(`petAccount/${params.id}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
            }).catch(err => {
            console.warn(err)
        })
    }, [params.id])
    useEffect(()=>{

    },[])

    const onSubmitVaccine = () => {
        try {
            setLoading(!loading)
            const fieldsProcedures = {
                typeVaccination,
                dateVaccination,
                nameOfVaccine,
                nameClinic,
            }

            const userPetId = params.id
            dispatch(fetchCreateProcedures({userPetId, fieldsProcedures}))

        } catch (error) {
            console.log(error)
        }
    }

    if (loading) {
        return <div>Загрузка...</div>
    }

    return (
        <div className={s.pageContainer}>
            <div className={s.petAccountInfo}>
                <div className={s.petAccountInfoWrapper}>
                    <div className={s.petAccountPhoto} style={{backgroundImage: `url(http://localhost:3157${data.petAvatarUrl})`}}>
                    </div>
                    <div className={s.petAccountPersonalInfo}>
                        <div className={s.personalPetName}>{data.petName}</div>
                        <div>
                            <span className={s.personalPetAge}>{data.agePet} лет</span>
                            <span className={s.personalPetGender}>{data.petGender}</span>
                        </div>
                        <div className={s.personalPetBreed}>{data.petBreed}</div>
                    </div>
                </div>
                <div className={s.petAccountPersonalCard}>
                    <p className={s.petPersonalCard}>Личная карта №</p>
                    <p className={s.petPersonalCardNumber}>000000001</p>
                </div>
            </div>

            <div className={s.petVaccinations}>
                <h3 className={s.petVaccinationsTitle}>Прививки</h3>
                {/*{
                procedures.map((m,index)=> (
                    <ol key={index} className={s.petVaccinationsItems}>
                        <li className={s.petVaccinationsItem}>{m.typeVaccination} <span>{m.nameOfVaccine}</span> <span>{m.dateVaccination}</span>
                        </li>
                    </ol>
                ))
            }*/}
                <form className={s.petVaccinationsForm}>
                    <div className={s.petVaccinationsFormItemBlock}>
                        <label className={s.petVaccinationsFormItemType} htmlFor="">Тип прививки<input
                            className={s.petVaccinationsFormItemTypeInp} type="text" onChange={e => setTypeVaccination(e.currentTarget.value)}/></label>
                        <label className={s.petVaccinationsFormItemDate} htmlFor="">Дата<input
                            className={s.petVaccinationsFormItemDateInp} type="date" onChange={e => setDateVaccination(e.currentTarget.value)}/></label>
                    </div>
                    <label className={s.petVaccinationsFormItem} htmlFor="">Название препарата<input
                        className={s.petVaccinationsFormItemDrugName} type="text"
                        onChange={e => setNameOfVaccine(e.currentTarget.value)}/></label>
                    <label className={s.petVaccinationsFormItem} htmlFor="">Название клиники<input
                        className={s.petVaccinationsFormItemClinicName} type="text" onChange={e => setNameClinic(e.currentTarget.value)}/></label>
                </form>
                <div className={s.petAccountInfoBtnWrapper}>
                    <ButtonStandart title={"Добавить"} onclick={onSubmitVaccine}/>
                </div>

            </div>

            {/*<div className={s.petVaccinations}>
                <h3 className={s.petVaccinationsTitle}>Прививки</h3>
                <ol className={s.petVaccinationsItems}>
                    <li className={s.petVaccinationsItem}>От бешенства <span>Novak2000</span> <span>21.03.2022</span>
                    </li>
                    <li className={s.petVaccinationsItem}>От бешенства <span>Novak2000</span> <span>21.03.2022</span>
                    </li>
                    <li className={s.petVaccinationsItem}>От бешенства <span>Novak2000</span> <span>21.03.2022</span>
                    </li>
                </ol>
                <form className={s.petVaccinationsForm}>
                    <div className={s.petVaccinationsFormItemBlock}>
                        <label className={s.petVaccinationsFormItemType} htmlFor="">Тип прививки<input
                            className={s.petVaccinationsFormItemTypeInp} type="text"/></label>
                        <label className={s.petVaccinationsFormItemDate} htmlFor="">Дата<input
                            className={s.petVaccinationsFormItemDateInp} type="date"/></label>
                    </div>
                    <label className={s.petVaccinationsFormItem} htmlFor="">Название препарата<input
                        className={s.petVaccinationsFormItemDrugName} type="text"/></label>
                    <label className={s.petVaccinationsFormItem} htmlFor="">Название клиники<input
                        className={s.petVaccinationsFormItemClinicName} type="text"/></label>
                </form>
                <div className={s.petAccountInfoBtnWrapper}>
                    <ButtonStandart title={"Добавить"}/>
                </div>

            </div>*/}
            {/*<div className={s.petProcedures}>
                <h3 className={s.petProceduresTitle}>Процедуры</h3>
                <ol className={s.petProceduresItems}>
                    <li className={s.petProceduresItem}>Кастрация <span>Доктор Вет</span> <span>21.03.2022</span></li>
                    <li className={s.petProceduresItem}>Кастрация <span>Доктор Вет</span> <span>21.03.2022</span></li>
                    <li className={s.petProceduresItem}>Кастрация <span>Доктор Вет</span> <span>21.03.2022</span></li>
                </ol>
                <form className={s.petProceduresForm}>
                    <label htmlFor="" className={s.petProceduresFormItem}>Дата<input type="date"
                                                                                     className={s.petProceduresFormItemDateInp}/></label>
                    <label htmlFor="" className={s.petProceduresFormItem}>Процедура<input type="text"
                                                                                          className={s.petProceduresFormInput}/></label>
                    <label htmlFor="" className={s.petProceduresFormItem}>Название клиники<input type="text"
                                                                                                 className={s.petProceduresFormInput}/></label>
                </form>
                <div className={s.petAccountInfoBtnWrapper}>
                    <ButtonStandart title={"Добавить"}/>
                </div>
            </div>*/}

            {/*<PetVaccines  procedures={procedures}/>*/}

            {/*<PetProcedures procedures={procedures}/>*/}

            <div className={s.petAccountInstruction}>
                <div className={s.petAccountInstructionWrapper}>
                    <p className={s.petAccountInstructionDescription}><span
                        className={s.petAccountInstructionDescriptionStar}>*</span> Медицинская карта заполняется
                        автоматически при обращение к нам за услугами сопровождения в клинику.</p>
                    <p className={s.petAccountInstructionDescription}>Во всех других случаях карта заполняется
                        пользователем.</p>
                </div>
                <div className={s.petAccountInfoBtnWrapper}>
                    <ButtonStandart title={'Сохранить'}/>
                </div>
            </div>
        </div>
    );
};

export default PetAccount;