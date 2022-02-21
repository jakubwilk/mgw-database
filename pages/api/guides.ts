import type { NextApiRequest, NextApiResponse } from 'next'
import { TRestGuides } from '../../utils/types/TGuides'
import guides from './../../mock/guides.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<TRestGuides>) {
    res.status(200).json(guides)
}
