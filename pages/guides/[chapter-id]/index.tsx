import { GetServerSideProps, NextPage } from 'next'
import { IChaptersPageProps } from '../../../utils/interfaces/IChapters'
import { TRestChapters, TRestChaptersData } from '../../../utils/types/TChapters'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Chapter: NextPage<IChaptersPageProps> = ({ chapters }) => {
    const router = useRouter()

    useEffect(() => {
        console.log(router)

        console.log(chapters)
    }, [])

    return <div>{'test'}</div>
}

export default Chapter

export const getServerSideProps: GetServerSideProps = async (context) => {
    const response: Response = await fetch('http://localhost:3000/api/chapters', {
        credentials: 'include',
    })
    const chapters: TRestChapters = await response.json()

    return {
        props: {
            chapters,
        },
    }
}
