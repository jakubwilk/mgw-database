import { ReactElement } from 'react'

export interface IGridGuidesProps {
    children: ReactElement | Array<ReactElement>
}

export interface IGridGuideItemProps {
    id: number
    name: string
    description: string
    link: string
    title: string
}
