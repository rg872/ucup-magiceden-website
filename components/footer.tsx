import { NextPage } from "next";
import Image from "next/image";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

import styles from "../styles/footer.module.css";

const Footer: NextPage = () => {
  return (
    <section className={styles.joinUsContainer}>
      <div className={styles.joinUsWrapper}>
        <h1>
          JOIN T<span>H</span>E SKULLBOT BIKER GANG
        </h1>
        <figure>
          <Image
            src={"https://www.skullbots.io/Arrow.gif"}
            width={260}
            height={260}
            alt={"arrow to fuck you up"}
          />
        </figure>
      </div>
      <figure style={{ textAlign: "end" }}>
        <Image
          src={"https://www.skullbots.io/card2.png"}
          width={378}
          height={531}
          alt={"card"}
        />
      </figure>
      <div className={styles.footer}>
        <div className={styles.socialIcons}>
          <a
            href="https://discord.gg/45zkBzF75g"
            target="_blank"
            rel="noreferrer"
          >
            <BsDiscord size={"2rem"} />
          </a>
          <a
            href="https://twitter.com/SKULLBOTS"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle size={"2rem"} />
          </a>
        </div>
        <div>
          <Image
            src="/svg/logo-white.svg"
            width={180}
            height={83}
            alt="white logo"
          />
        </div>
        <div style={{ padding: "8px 16px", border: "2px solid white" }}>
          <a
            href="https://discord.gg/45zkBzF75g"
            target="_blank"
            rel="noreferrer"
          >
            JOIN OUR DISCORD
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
