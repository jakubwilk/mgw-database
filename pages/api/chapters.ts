import type { NextApiRequest, NextApiResponse } from 'next'
import { TRestChapters } from '../../utils/types/TChapters'
import chapters from './../../mock/chapters.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<TRestChapters>) {
    res.status(200).json(chapters)
}
