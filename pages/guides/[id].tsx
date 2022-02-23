import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

const Level: NextPage = () => {
    const router = useRouter()

    return <div>{router.query.id}</div>
}

export default Level

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {},
    }
}
