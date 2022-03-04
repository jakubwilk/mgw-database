export const getChapterQuery = (query: string): number | null => {
    const chapterKey = 'chapter-'
    const chapterNumber: string = query.substring(chapterKey.length, query.length)

    if (isNaN(Number(chapterNumber))) return null

    return Number(chapterNumber)
}
