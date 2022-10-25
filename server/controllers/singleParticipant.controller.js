import { Decrypt, FIFA_Tournament,Canva_It , CodeStorm, MasterMinds_Quiz ,Solid_Works ,
  VFX ,PCB_Design ,FrontEnd_101 ,Game_Development,ML_Basics ,App_Development ,IT_Talk_3D_Printing,
  UIUX_Design ,Game_Development_Workshop,MECH_Workshop_3D_Printing} 

from "../models/singleParticipant.js";

export const getSingleParticipant = async (req, res) => {
  const eventName = req.body.eventName;
  try {
    console.log(req.body)
    switch (eventName) {
      case "Decrypt": {
        // console.log(req.body)
        const data = await Decrypt.find();
        res.status(200).send(data);
        break;
      }
      case "FIFA_Tournament": {
        // console.log(req.body)
        const data = await FIFA_Tournament.find();
        res.status(200).send(data);
        break;
      }
      case "Canva_It": {
        // console.log(req.body)
        const data = await Canva_It.find();
        res.status(200).send(data);
        break;
      }
      case "CodeStorm": {
        // console.log(req.body)
        const data = await CodeStorm.find();
        res.status(200).send(data);
        break;
      }
      case "MasterMinds_Quiz": {
        // console.log(req.body)
        const data = await MasterMinds_Quiz.find();
        res.status(200).send(data);
        break;
      }
      case "Solid_Works": {
        // console.log(req.body)
        const data = await Solid_Works.find();
        res.status(200).send(data);
        break;
      }
      case "VFX": {
        // console.log(req.body)
        const data = await VFX.find();
        res.status(200).send(data);
        break;
      }
      case "PCB_Design": {
        // console.log(req.body)
        const data = await PCB_Design.find();
        res.status(200).send(data);
        break;
      }
      case "FrontEnd_101": {
        // console.log(req.body)
        const data = await FrontEnd_101.find();
        res.status(200).send(data);
        break;
      }
      case "Game_Development": {
        // console.log(req.body)
        const data = await Game_Development.find();
        res.status(200).send(data);
        break;
      }
      case "ML_Basics": {
        // console.log(req.body)
        const data = await ML_Basics.find();
        res.status(200).send(data);
        break;
      }
      case "App_Development": {
        // console.log(req.body)
        const data = await App_Development.find();
        res.status(200).send(data);
        break;
      }
      case "IT_Talk_3D_Printing": {
        // console.log(req.body)
        const data = await IT_Talk_3D_Printing.find();
        res.status(200).send(data);
        break;
      }
      case "UIUX_Design": {
        // console.log(req.body)
        const data = await UIUX_Design.find();
        res.status(200).send(data);
        break;
      }
      case "Game_Development_Workshop": {
        // console.log(req.body)
        const data = await Game_Development_Workshop.find();
        res.status(200).send(data);
        break;
      }
      case "MECH_Workshop_3D_Printing": {
        // console.log(req.body)
        const data = await MECH_Workshop_3D_Printing.find();
        res.status(200).send(data);
        break;
      }
    }
  } catch (err) {
    res.status(422).send(err);
  }
};

export const postSingleParticipant = async (req, res) => {
  const eventName = req.body.eventName;
  console.log(eventName);
  try {
    switch (eventName) {
      // case "Decrypt": {
      //   const data = await Decrypt.create(req.body);
      //   await data.sendmail();
      //   res.status(200).send(data);
      //   break;
      // }
      // case "FIFA_Tournament": {
      //   const data = await FIFA_Tournament.create(req.body);
      //   await data.sendmail();
      //   console.log(data._id.toString());
      //   res.status(200).send(data);
      //   break;
      // }
      // case "Canva_It": {
      //   const data = await Canva_It.create(req.body);
      //   await data.sendmail();
      //   res.status(200).send(data);
      //   break;
      // }
      // case "CodeStorm": {
      //   const data = await CodeStorm.create(req.body);
      //   await data.sendmail();
      //   res.status(200).send(data);
      //   break;
      // }
      // case "MasterMinds_Quiz": {
      //   const data = await MasterMinds_Quiz.create(req.body);
      //   await data.sendmail();
      //   res.status(200).send(data);
      //   break;
      // }
      // case "Solid_Works": {
      //   const data = await Solid_Works.create(req.body);
      //   await data.sendmail();
      //   res.status(200).send(data);
      //   break;
      // }
      // case "VFX": {
      //   const data = await VFX.create(req.body);
      //   await data.sendmail();
      //   res.status(200).send(data);
      //   break;
      // }
      // case "PCB_Design": {
      //   const data = await PCB_Design.create(req.body);
      //   await data.sendmail();
      //   res.status(200).send(data);
      //   break;
      // }
      case "FrontEnd_101": {
        const data = await FrontEnd_101.create(req.body);
        await data.sendmail();
        res.status(200).send(data);
        break;
      }
      case "Game_Development": {
        const data = await Game_Development.create(req.body);
        await data.sendmail();
        res.status(200).send(data);
        break;
      }
      case "ML_Basics": {
        const data = await ML_Basics.create(req.body);
        await data.sendmail();
        res.status(200).send(data);
        break;
      }
      case "App_Development": {
        const data = await App_Development.create(req.body);
        await data.sendmail();
        res.status(200).send(data);
        break;
      }
      case "IT_Talk_3D_Printing": {
        const data = await IT_Talk_3D_Printing.create(req.body);
        await data.sendmail();
        res.status(200).send(data);
        break;
      }
      case "UIUX_Design": {
        const data = await UIUX_Design.create(req.body);
        await data.sendmail();
        res.status(200).send(data);
        break;
      }
      case "Game_Development_Workshop": {
        const data = await Game_Development_Workshop.create(req.body);
        await data.sendmail();
        res.status(200).send(data);
        break;
      }
      case "MECH_Workshop_3D_Printing": {
        const data = await MECH_Workshop_3D_Printing.create(req.body);
        await data.sendmail();
        res.status(200).send(data);
        break;
      }
    }
  } catch (err) {
    res.status(422).send(err);
  }
};

