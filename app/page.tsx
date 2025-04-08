import { Button, Htag } from "@/components";
import { JSX } from "react";
import styles from "./page.module.scss";

export default function Home(): JSX.Element {
    return (
        <div className={styles.page}>
            <Htag tag="h3">Заголовок</Htag>
            <Button appearance="primary">Узнать подробнее</Button>
            <Button appearance="ghost" arrow="right">
                Читать отзывы
            </Button>
        </div>
    );
}
