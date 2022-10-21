import { computerEvents } from './compEvents';
import { itEvents } from './itEvents';
import { mechEvents } from './mechEvents';
import { etcEvents } from './etcEvents';
import { nationalEvents } from './nationalList';

export const sponserList = [
  {
    name: "Visteon",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/Sponsers/visteon.png",
    link: ""
  },
  {
    name: "Bluelearn",
    image: "/assets/images/sponsers/bluelearn.svg",
    link: ""
  },
  {
    name: "Spintly",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/Sponsers/spintly.png",
    link: ""
  },
  {
    name: "Creative capsule",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/Sponsers/cCapsule.png",
    link: ""
  },
  {
    name: "Maxxcell",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/Sponsers/maxxcell.svg",
    link: ""
  },
  {
    name: "OneShield",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/Sponsers/oneShield.svg",
    link: ""
  },
  {
    name: "SJ Innovation",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/Sponsers/SJ.png",
    link: ""
  },
  {
    name: "Edot",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/Sponsers/edot.png",
    link: ""
  },
];

export const developerList = [
  {
    name: "Aniket Sardesai",
    department: "Computer",
    role: "Frontend Developer",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/WEB/Aniket.jpg",
  },
  {
    name: "Chaitanya Chanekar",
    department: "Computer",
    role: "Frontend Developer",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/WEB/Chaitanya.png",
  },
  {
  name: "Prathamesh Naik",
  department: "Computer",
  role: "Backend Developer",
  image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/WEB/Prathamesh1.jpg",
},
{
  name: "Melitta Pacheco",
  department: "Computer",
  role: "Backend Developer",
  image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/WEB/Melitta.JPG",
},];

export const designerList = [
  {
      name: "K L Rithika",
      department: "Computer",
      role: "UI/UX designer",
      image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/WEB/Rithika.jpg",
    },
    {
      name: "Archana Uscaicar",
      department: "Computer",
      role: "UI/UX designer",
      image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/WEB/Archana.JPG",
    },
];

export const teamList = [
  ...designerList,
  ...developerList

]

export const coordinatorList = [
  {
    name: "Aayush Anand",
    department: "Computer",
    role: "Chief Coordinator",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/COMP/Aayush_Anand1.jpg",
    wa: "https://wa.me/917666023650"
  },
  {
    name: "Shashank M. Kurbet",
    department: "Computer",
    role: "Chief Coordinator",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/COMP/Shashank_Kurbet1.jpg",
    wa: "https://wa.me/917972753427"
  },
  {
    name: "Abhijeet Singh",
    department: "EComputer",
    role: "Chief Coordinator",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/ETC/Abhijeet_Singh.jpg",
    wa: "https://wa.me/919421098900"
  },
  {
    name: "Priyanka H. Biradar",
    department: "EComputer",
    role: "Chief Coordinator",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/ETC/Priyanka_H_Biradar1.jpg",
    wa: "https://wa.me/918080158711"
  },
  {
    name: "Aafil Shaikh",
    department: "Information Technology",
    role: "Chief Coordinator",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/IT/Aafil_Shaikh1.jpg",
    wa: "https://wa.me/919172128696"
  },
  {
    name: "Shivam Korgaonkar",
    department: "Information Technology",
    role: "Chief Coordinator",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/IT/Shivam_Korgaonkar1.jpg",
    wa: "https://wa.me/917507986584"
  },
  {
    name: "Lohit Kumbhar",
    department: "Mechanical",
    role: "Chief Coordinator",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/MECH/Lohit_Kumbar.jpg",
    wa: "https://wa.me/qr/AGQWERVTJLM3A1"
  },
  {
    name: "Mohammed S. Khan",
    department: "Mechanical",
    role: "Chief Coordinator",
    image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/ProfileImages/MECH/Saad_khan1.jpg",
    wa: "https://wa.me/qr/5YKWV6XRYLZLJ1"
  },
];

export const eventList = [
  ...nationalEvents,
    ...computerEvents,
    ...itEvents,
    ...mechEvents,
    ...etcEvents
];
