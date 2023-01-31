import { Request, Response } from "express";

export const getPost = (req: Request, res: Response) => {
  res.send("hi !");
};
