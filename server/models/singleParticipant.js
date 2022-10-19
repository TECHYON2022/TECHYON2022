// single participation model
import mongooseSerial from "mongoose-serial"
import mongoose from "mongoose";
import nodemailer from 'nodemailer';

const SingleParticipantSchema =  mongoose.Schema({
  participantNo:{type:String},
  name: { type: String, required: true },
  phone_no: { type: Number, required: true, unique: true },
  email: { type: String, required: true , lowercase:true},
  roll_no:String,
  college: String,
  branch: String,
  score: String,
  eventName:String
},
{
  timestamps: true 
});
SingleParticipantSchema.plugin(mongooseSerial, { field:"participantNo",digits:3});

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'techyon2022@gmail.com', // generated ethereal user
      pass: 'neawvayddesktqzs', // generated ethereal password
    },
  });


SingleParticipantSchema.methods.sendmail = async function () {
  let info = await transporter.sendMail({
        from: 'techyon2022@gmail.com', // sender address
        to: this.email, // list of receivers
        subject: `Registered for ${this.eventName}, Techyon 2022`, // Subject line
        text: ` You have now successfully registered for ${this.eventName}.
        Thank you for your active participation. 
        For any further queries regarding the event please connect with the event coordinators `, // plain text body
        // html body
      
      });

      console.log("Message sent: %s", info.messageId);

}
export const Decrypt= mongoose.model('Decrypt', SingleParticipantSchema);
export const FIFA_Tournament= mongoose.model('FIFA_Tournament', SingleParticipantSchema);
export const Canva_It= mongoose.model('Canva_It', SingleParticipantSchema);
export const CodeStorm= mongoose.model('CodeStorm', SingleParticipantSchema);
export const MasterMinds_Quiz= mongoose.model('MasterMinds_Quiz', SingleParticipantSchema);
export const Solid_Works= mongoose.model('Solid_Works', SingleParticipantSchema);
export const VFX= mongoose.model('VFX', SingleParticipantSchema);
export const PCB_Design= mongoose.model('PCB_Design', SingleParticipantSchema);
export const FrontEnd_101= mongoose.model('FrontEnd_101', SingleParticipantSchema);
export const Game_Development= mongoose.model('Game_Development', SingleParticipantSchema);
export const  ML_Basics= mongoose.model('ML_Basics', SingleParticipantSchema);
export const App_Development= mongoose.model('App_Development', SingleParticipantSchema);
export const IT_Talk_3D_Printing = mongoose.model('IT_Talk_3D_Printing', SingleParticipantSchema);
export const UIUX_Design= mongoose.model('UIUX_Design', SingleParticipantSchema);
export const Game_Development_Workshop= mongoose.model('Game_Development_Workshop', SingleParticipantSchema);
export const MECH_Workshop_3D_Printing= mongoose.model('MECH_Workshop_3D_Printing', SingleParticipantSchema);