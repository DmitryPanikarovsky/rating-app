"use client";

import { Button, Htag, Paragraph, Rating, Tag } from "@/components";
import { JSX, useState } from "react";
import styles from "./page.module.scss";

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4)

    return (
        <div className={styles.page}>
            <Htag tag="h3">Заголовок</Htag>
            <Button appearance="primary">Узнать подробнее</Button>
            <Button appearance="ghost" arrow="right">
                Читать отзывы
            </Button>
            <Paragraph size="l">Большой</Paragraph>
            <Paragraph>Средний</Paragraph>
            <Paragraph size="s">Маленький</Paragraph>
            <div className={styles.block}>
                <Tag color="grey" size="m">
                    10
                </Tag>
                <Tag color="green" size="s">
                    10 000 ₽
                </Tag>
                <Tag color="ghost" size="s">
                    Гарантия трудоустройства
                </Tag>
                <Tag color="primary" size="s">
                    Подготовка макетов
                </Tag>
                <Tag color="primary" size="s">
                    Курсы Photoshop
                </Tag>
                <Tag color="primary" size="s">
                    Графический дизайн
                </Tag>
                <Tag color="orange" size="s" href="https://hh.ru/?hhtmFrom=resume_search_result">
                    hh.ru
                </Tag>
            </div>
            <Rating rating={rating} setRating={setRating} isEditable />
        </div>
    );
}
