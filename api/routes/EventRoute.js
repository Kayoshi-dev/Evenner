import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.get("/", (req, res) => {
  res.send("ifjezife");
});

/**
 * Create a new Event
 * Path : /api/event/
 */
router.post("/", async (req, res) => {
  console.log("je suis le body", req.body);
  let { title, description, startDate, endDate, place, attendees, isPrivate } =
    req.body;

  isPrivate === "on" ? (isPrivate = true) : (isPrivate = false);

  const event = await prisma.event.create({
    data: {
      title,
      description,
      startDate,
      endDate,
      place,
      attendees,
      isPrivate,
    },
  });

  return res.json(event);
});

export default router;
