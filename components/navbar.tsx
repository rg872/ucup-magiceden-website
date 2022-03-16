import { NextPage } from "next";
import { SiDiscord, SiTwitter } from "react-icons/si";

import styles from "../styles/navbar.module.css";

import "../styles/navbar.module.css";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <nav className={styles.navbarContainer}>
      <ul>
        <li>
          <Image src="/svg/logo.svg" width={175} height={69} alt="logo" />
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://discord.com/">
            <SiDiscord size={"1.5rem"} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <SiTwitter size={"1.5rem"} />
          </a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Roadmap</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Hellswap</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
