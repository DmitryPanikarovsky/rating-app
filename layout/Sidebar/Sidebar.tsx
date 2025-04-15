import cn from "classnames";
import styles from "./Sidebar.module.scss";
import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react'

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string;
}

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return <div className={cn(styles.sidebar, className)} {...props}>Sidebar</div>;
};
