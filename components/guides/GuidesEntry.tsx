import styles from './GuidesEntry.module.scss'

export const GuidesEntry = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>
                {'Baza '}
                <span>{'poradników'}</span>
            </h2>
            <p className={styles.description}>
                {
                    'Na naszym forum istnieje szereg mechanizmów mających za zadanie regulować rozgrywkę, ograniczając tym samym akcje, które nie są dopuszczalne w obrębie wykreowanego przez nas uniwersum, bądź świata, z którego czerpiemy inspiracje. Jednakże najważniejszą funkcją tychże poradników jest przedstawienie Graczowi możliwości, jakie istnieją na naszym forum, jak działają poszczególne elementy rozgrywki, a także jak samemu bez większych problemów rozwijać uniwersum na naszym grajdołku.'
                }
            </p>
        </header>
    )
}
