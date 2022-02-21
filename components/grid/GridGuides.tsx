import { SimpleGrid } from '@mantine/core'
import { IGridGuidesProps } from '../../utils/interfaces/IGrid'
import styles from './Grid.module.scss'

export const GridGuides = ({ children }: IGridGuidesProps) => {
    return (
        <SimpleGrid className={styles.guides} cols={2} spacing={'lg'} breakpoints={[{ maxWidth: 992, cols: 1 }]}>
            {children}
        </SimpleGrid>
    )
}
