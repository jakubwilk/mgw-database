import Link from 'next/link'
import { IGridGuideItemProps } from '../../utils/interfaces/IGrid'
import { Paper, Tooltip } from '@mantine/core'
import styles from './Grid.module.scss'

export const GridGuideItem = ({ id, name, description, link, title }: IGridGuideItemProps) => {
    return (
        <Tooltip label={title} position={'top'} placement={'start'} withArrow>
            <Link href={link} passHref>
                <a className={styles.guidesItemLink}>
                    <h3 className={styles.guidesItemTitle}>{name}</h3>
                    <p className={styles.guidesItemText}>{description}</p>
                </a>
            </Link>
        </Tooltip>
    )
}
