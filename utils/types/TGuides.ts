export type TRestGuides = {
    data: Array<TRestGuidesCategory>
}

export type TRestGuidesCategory = {
    id: number
    name: string
    description: string
    link: string
    title: string
}
