
import {Ideate , CodeCrunch, Data_Hack, Weave_the_Web, Game_Jam, Ancient_Ruins, Line_Follower, Pitch_Tank, Escape_Room, Electronic_Art, Call_of_Duty, Bridge_Building, Mechanism_Building, Robo_Race } from '../models/team.model.js'




export const postEvent = async (req, res) => {

    try {
        const eventName = req.body.eventName;
        console.log(eventName);
        switch (eventName) {
            case 'Ideate':
                const ideate = await Ideate.create(req.body)
                await ideate.sendmail()
                res.status(200).send(ideate)
                break
            case 'CodeCrunch':{
                const codecrunch = await CodeCrunch.create(req.body)
                await codecrunch.sendmail()
                res.status(200).send(codecrunch)
                break
            }
            case 'Data_Hack':{
                const data = await Data_Hack.create(req.body)
                await data.sendmail()
                res.status(200).send(data)
                break
            }
            case 'Weave_the_Web':{
                const data = await Weave_the_Web.create(req.body)
                await data.sendmail()
                res.status(200).send(data)
                break
            }
            case 'Game_Jam':{
                const data = await Game_Jam.create(req.body)
                await data.sendmail()
                res.status(200).send(data)
                break
            }
            case 'Ancient_Ruins':{
                const data = await Ancient_Ruins.create(req.body)
                await data.sendmail()
                res.status(200).send(data)
                break
            }
            case 'Escape_Room':{
                const data = await Escape_Room.create(req.body)
                await data.sendmail()
                res.status(200).send(data)
                break
            }
            case 'Line_Follower':{
                const data = await Line_Follower.create(req.body)
                await data.sendmail()
                res.status(200).send(data)
                break
            }
            case 'Pitch_Tank':{
                const data = await Pitch_Tank.create(req.body)
                await data.sendmail()
                res.status(200).send(data)
                break
            }
            case 'Electronic_Art':{
                const data = await Electronic_Art.create(req.body)
                await data.sendmail()
                res.status(200).send(data)
                break
            }
            case 'Call_of_Duty':{
                const data = await Call_of_Duty.create(req.body)
                await data.sendmail()
                res.status(200).send(data)
                break
            }
            //mech
            case 'Bridge_Building':{
                const data = await Bridge_Building.create(req.body)
                await data.sendmail()
                res.status(200).send(data)
                break
            }
            case 'Mechanism_Building':{
                const data = await Mechanism_Building.create(req.body)
                await data.sendmail()
                res.status(200).send(data)
                break
            }
            case 'Robo_Race':{
                const data = await Robo_Race.create(req.body)
                await data.sendmail()
                res.status(200).send(data)
                break
            }
        }
    }
    catch (err) {
        console.log(err);
        res.status(422).send(err)
    }

}

export const getEvent = async (req, res) => {


    const eventName = req.body.eventName


    try {
        switch (eventName) {
            //comp
            case 'Ideate':{
                const ideate = await Ideate.find()
                res.status(200).send(ideate)
                break
            }
            case 'CodeCrunch':{
                const codecrunch = await CodeCrunch.find()
                res.status(200).send(codecrunch)
                break
            }
            case 'Data_Hack':{
                const data = await Data_Hack.find()
                res.status(200).send(data)
                break
            }
            //IT
            case 'Weave_the_Web':{
                const data = await Weave_the_Web.find()
                res.status(200).send(data)
                break
            }
            case 'Game_Jam':{
                const data = await Game_Jam.find()
                res.status(200).send(data)
                break
            }
            //Etc/Ecomp
            case 'Ancient_Ruins':{
                const data = await Ancient_Ruins.find()
                res.status(200).send(data)
                break
            }
            case 'Escape_Room':{
                const data = await Escape_Room.find()
                res.status(200).send(data)
                break
            }
            case 'Line_Follower':{
                const data = await Line_Follower.find()
                res.status(200).send(data)
                break
            }
            case 'Pitch_Tank':{
                const data = await Pitch_Tank.find()
                res.status(200).send(data)
                break
            }
            case 'Electronic_Art':{
                const data = await Electronic_Art.find()
                res.status(200).send(data)
                break
            }
            case 'Call_of_Duty':{
                const data = await Call_of_Duty.find()
                res.status(200).send(data)
                break
            }
            //mech
            case 'Bridge_Building':{
                const data = await Bridge_Building.find()
                res.status(200).send(data)
                break
            }
            case 'Mechanism_Building':{
                const data = await Mechanism_Building.find()
                res.status(200).send(data)
                break
            }
            case 'Robo_Race':{
                const data = await Robo_Race.find()
                res.status(200).send(data)
                break
            }


        }

    } catch (err) {
        res.status(422).send(err)
    }

}




