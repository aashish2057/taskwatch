// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDate } from '../../prisma/calendar';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const date = req.body;
      console.log(date.date)
      const {day} = await getDate(date.date);
      return res.status(200).json({day})
    } catch (error) {
      return res.status(500).json({error})
    }
  }

  res.setHeader('Allow', ['GET'])
}
