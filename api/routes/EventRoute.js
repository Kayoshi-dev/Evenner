import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import multer from "multer";

const prisma = new PrismaClient();
const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const upload = multer({ storage });

/**
 * Create a new Event
 * Type : REST
 * Path : /api/event/
 */
router.post("/", upload.single("headerUpload"), async (req, res) => {
  let {
    title,
    description,
    startDate,
    endDate,
    adress,
    city,
    zipCode,
    attendees,
    isPrivate,
  } = req.body;

  isPrivate === "on" ? (isPrivate = true) : (isPrivate = false);

  const event = await prisma.event.create({
    data: {
      title,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      adress,
      city,
      zipCode: Number(zipCode),
      attendees,
      isPrivate,
    },
  });

  return res.json(event);
});

export default router;
