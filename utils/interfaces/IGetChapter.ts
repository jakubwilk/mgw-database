import { TRestChapters } from '../types/TChapters'
import { ParsedUrlQuery } from 'querystring'

export interface IGetChapterProps {
    chapters: TRestChapters
    chapterId: ParsedUrlQuery
}
