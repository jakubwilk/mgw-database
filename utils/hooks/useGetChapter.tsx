import { IGetChapterProps } from '../interfaces/IGetChapter'
import { getChapterQuery } from '../getChapterQuery'
import { TRestChaptersData } from '../types/TChapters'

export const useGetChapter = ({ chapters, chapterId }: IGetChapterProps) => {
    let chapter: TRestChaptersData | null
    const chapId: number | null = getChapterQuery(chapterId['chapter-id'] as string)

    if (chapId) chapter = chapters.data[chapId - 1]
    else chapter = null

    return { chapter }
}
