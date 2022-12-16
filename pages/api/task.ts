import type { NextApiRequest, NextApiResponse } from 'next';
import { addTask } from '../../prisma/calendar';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const Task = req.body;
      const {task, error} = await addTask(Task);
      if (error) return res.status(500).json({error})
      return res.status(200).json({task})
    } catch (error) {
      return res.status(500).json({error})
    }
  }

  res.setHeader('Allow', ['POST'])
}
