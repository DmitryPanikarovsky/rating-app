import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
            <body className={`${montserrat.className}`}>{children}</body>
        </html>
    );
}
