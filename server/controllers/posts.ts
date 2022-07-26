import { Request, Response } from 'express';

import PostMessage from '../models/postMessage.js';

export const getPost = async (req: Request, res: Response) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req: Request, res: Response) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};
