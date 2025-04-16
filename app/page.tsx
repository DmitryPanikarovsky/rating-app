import { Button } from '@/components'
import styles from "./page.module.scss";

export default function Home() {
    return (
        <div className={styles.page}>
            <Button appearance="primary">Регистрация</Button>
        </div>
    );
}
