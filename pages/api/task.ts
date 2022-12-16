import type { NextApiRequest, NextApiResponse } from 'next';
import { addTask, deleteTask } from '../../prisma/tasksDB';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
      const Task = req.body;
      const {task, error} = await addTask(Task);
      if (error) return res.status(500).json({error})
      return res.status(200).json({task})
  }
  if (req.method === 'DELETE') {
      const Task = req.body;
      const {task, error} = await deleteTask(Task.id);
      console.log(error)
      if (error) return res.status(500).json({error})
      // return res.status(200).json({task})
  }

  res.setHeader('Allow', ['POST', 'DELETE'])
}
