import  express  from "express";
import singleParticipantRouter from "./singleParticipant.routes.js"
import teamrouter from "./team.routes.js";
const router=express.Router();


router.use('/teamEvent',teamrouter)
router.use("/SingleParticipant", singleParticipantRouter) ;

export default router;




//routes goes here

  


