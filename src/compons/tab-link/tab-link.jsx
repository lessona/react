"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./tab-link.module.css";

export const TabLink = ({ href, title }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={classNames(styles.link, {
        [styles.activeLink]: href === pathname,
      })}
    >
      {title}
    </Link>
  );
};
