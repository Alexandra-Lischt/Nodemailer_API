import { Router } from "express";
import { SendMailController } from "./controllers/SendMailController";
import { SurveyController } from "./controllers/SurveyController";
import { UserController } from "./controllers/UserController";
import { AnswerController } from "./controllers/AnswerController";
import { NpsController } from "./controllers/NpsController";

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post("/users", userController.create);

router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.show);
router.delete("/survey", surveyController.delete);

router.post("/send-mail", sendMailController.execute)

router.get("/answers/:value", answerController.execute)

router.get("/nps/:survey_id", npsController.execute)

export { router };
