import PetProceduresModel from "../models/UserPet.js";

export const getAll = async (req, res) => {
    try {
        const userPet = await PetProceduresModel.find().populate('user').exec()

        res.json(userPet)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить процедуры',
        })
    }
}

export const removePetProcedures = async (req, res) => {
    try {

        const petProceduresId = req.params.id

        PetProceduresModel.findByIdAndDelete(
            {
                _id: petProceduresId
            },
            (err, doc) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: 'Не удалось удалить питомца'
                    })
                }

                if (!doc) {
                    return res.status(404).json({
                        message: 'Питомцы не найдены'
                    })
                }

                res.json({
                    success: true
                })
            }
        )

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить питомцев',
        })
    }
}

export const updatePetProcedures = async (req, res) => {
    try {

        const petProceduresId = req.params.id

        await PetProceduresModel.updateOne(
            {
                _id: petProceduresId
            },
            {
                typeVaccination:req.body.typeVaccination,
                dateVaccination:req.body.dateVaccination,
                nameOfVaccine:req.body.nameOfVaccine,
                dateProcedure:req.body.dateProcedure,
                nameOfProcedure:req.body.nameOfProcedure,
                nameClinic: req.body.nameClinic,
            }
        )
        res.json({
            success: true
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось обновить информацию о процедуре',
        })
    }
}

export const createPetProcedures = async (req,res)=>{
    try {

        const doc = new PetProceduresModel({
            typeVaccination:req.body.typeVaccination,
            dateVaccination:req.body.dateVaccination,
            nameOfVaccine:req.body.nameOfVaccine,
            dateProcedure:req.body.dateProcedure,
            nameOfProcedure:req.body.nameOfProcedure,
            nameClinic: req.body.nameClinic,
            userPet: req.userId
        })

        const userPet = await doc.save()

        res.json(userPet)

    }catch (err){
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать процедуру',
        })
    }
}