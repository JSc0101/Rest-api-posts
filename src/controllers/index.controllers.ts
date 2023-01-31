import { Request, Response } from "express";

export const getPost = async (req: Request, res: Response) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  res.send(data);
};
