import Image from 'next/image'
import { ThemeIcon } from '@mantine/core'
import { ArrowRightIcon } from '@modulz/radix-icons'
import styles from './NavbarFooter.module.scss'

export const NavbarFooter = () => {
    return (
        <a href={'https://mageguildwars.pl'} title={'Powrót na stronę główną forum MGW'} className={styles.link}>
            <Image src={'/mgw.png'} alt={'Ikonka forum Mage Guild Wars'} height={45} width={45} />
            <div className={styles.linkWrapper}>
                <p className={styles.linkTitle}>
                    {'Mage Guild Wars'}
                    <span className={styles.linkSubTitle}>{'Powrót na stronę główną forum'}</span>
                </p>
                <ThemeIcon variant={'light'} color={'gray'} size={'lg'}>
                    <ArrowRightIcon />
                </ThemeIcon>
            </div>
        </a>
    )
}
