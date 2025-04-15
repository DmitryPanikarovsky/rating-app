import { Footer } from "@/layout/Footer/Footer";
import { Header } from "@/layout/Header/Header";
import { Sidebar } from "@/layout/Sidebar/Sidebar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.scss";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["cyrillic"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Courses Top",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${montserrat.className}`}>
                <div className={styles.wrapper}>
                    <Header className={styles.header} />
                    <Sidebar className={styles.sidebar} />
                    <div className={styles.body}>{children}</div>
                    <Footer className={styles.footer} />
                </div>
            </body>
        </html>
    );
}
