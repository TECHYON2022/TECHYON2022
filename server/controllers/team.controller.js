
import {Ideate , CodeCrunch} from '../models/team.model.js'




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
            case 'CodeCrunch':
                const codecrunch = await CodeCrunch.create(req.body)
                await codecrunch.sendmail()
                res.status(200).send(codecrunch)
                break
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
            case 'Ideate':
                const ideate = await Ideate.find()
                res.status(200).send(ideate)
                break
            case 'CodeCrunch':
                const codecrunch = await CodeCrunch.find()
                res.status(200).send(codecrunch)
                break

        }

    } catch (err) {
        res.status(422).send(err)
    }

}




