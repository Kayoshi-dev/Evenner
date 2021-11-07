import { Router } from "express";

import EventRoute from "./EventRoute";

const router = Router();

router.use("/event", EventRoute);

export default router;
