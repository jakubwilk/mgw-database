export type TRestChapters = {
    data: Array<TRestChaptersData>
}

export type TRestChaptersData = {
    id: number
    title: string
    episodes: Array<TRestChaptersEpisodes>
}

export type TRestChaptersEpisodes = {
    id: number
    name: string
    link: string
    title: string
}
