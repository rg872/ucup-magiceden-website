import { NextPage } from "next";
import Image from "next/image";
import { SiDiscord, SiTwitter } from "react-icons/si";

import styles from "../styles/home-bottom.module.css";

const HomeBottom: NextPage = () => {
  return (
    <section className={styles.homeBottomContainer}>
      <h1>
        !THE <span>6.9</span> REALMS OF HELL!
      </h1>
      <div className={styles.nftContainer}>
        <figure className={styles.nftWrapper}>
          <Image
            src="https://www.skullbots.io/nfts/Pride.png"
            width={160}
            height={160}
            alt="nft pride"
          />
          <p>PRIDE</p>
        </figure>
        <figure className={styles.nftWrapper}>
          <Image
            src="https://www.skullbots.io/nfts/Greed.png"
            width={160}
            height={160}
            alt="nft pride"
          />
          <p>GREED</p>
        </figure>
        <figure className={styles.nftWrapper}>
          <Image
            src="https://www.skullbots.io/nfts/Lust.png"
            width={160}
            height={160}
            alt="nft pride"
          />
          <p>LUST</p>
        </figure>
        <figure className={styles.nftWrapper}>
          <Image
            src="https://www.skullbots.io/nfts/Envy2.png"
            width={160}
            height={160}
            alt="nft pride"
          />
          <p>ENVY</p>
        </figure>
        <figure className={styles.nftWrapper}>
          <Image
            src="https://www.skullbots.io/nfts/Gluttony.png"
            width={160}
            height={160}
            alt="nft pride"
          />
          <p>GLUTTONY</p>
        </figure>
        <figure className={styles.nftWrapper}>
          <Image
            src="https://www.skullbots.io/nfts/Wrath.png"
            width={160}
            height={160}
            alt="nft pride"
          />
          <p>WRATH</p>
        </figure>
        <figure className={styles.nftWrapper}>
          <Image
            src="https://www.skullbots.io/nfts/Sloth.png"
            width={160}
            height={160}
            alt="nft pride"
          />
          <p>SLOTH</p>
        </figure>
      </div>
      <div className={styles.nftGuardContainer}>
        <figure>
          <Image
            src="https://www.skullbots.io/image1.png"
            width={200}
            height={260}
            alt={"skullbots 1"}
          />
        </figure>
        <figure>
          <Image
            src="https://www.skullbots.io/image2.png"
            width={200}
            height={380}
            alt={"skullbots door"}
          />
        </figure>
        <figure>
          <Image
            src="https://www.skullbots.io/image3.png"
            width={200}
            height={260}
            alt={"skullbots 2"}
          />
        </figure>
      </div>
      <h1>Roadmap To Victory</h1>
      <figure>
        <Image
          src={"https://www.skullbots.io/roadmap2.png"}
          width={1020}
          height={462}
          alt={"roadmap"}
        />
      </figure>
      <h1>
        MEE<span>T</span> T<span>H</span>E TEAM BEHIND
      </h1>
      <figure>
        <Image
          src={"https://www.skullbots.io/whitelogo.png"}
          width={210}
          height={72}
          alt={"white logo"}
        />
      </figure>
      <div className={styles.nftContainer}>
        <figure className={styles.nftWrapper}>
          <Image
            src="https://www.skullbots.io/team/michaela.png"
            width={160}
            height={160}
            alt="nft pride"
          />
          <p>
            MICHAELA
            <br />
            (MERLIN)
          </p>
        </figure>
        <figure className={styles.nftWrapper}>
          <Image
            src="https://www.skullbots.io/team/olga.png"
            width={160}
            height={160}
            alt="nft pride"
          />
          <p>
            OLGA
            <br />
            (MADRID)
          </p>
        </figure>
        <figure className={styles.nftWrapper}>
          <Image
            src="https://www.skullbots.io/team/john.png"
            width={160}
            height={160}
            alt="nft pride"
          />
          <p>
            JHON
            <br />
            (MEME)
          </p>
        </figure>
        <figure className={styles.nftWrapper}>
          <Image
            src="https://www.skullbots.io/team/joshua.png"
            width={160}
            height={160}
            alt="nft pride"
          />
          <p>
            JOSHUA KEZZER
            <br />
            (BRAINS)
          </p>
        </figure>
        <figure className={styles.nftWrapper}>
          <Image
            src="https://www.skullbots.io/team/pp.png"
            width={160}
            height={160}
            alt="nft pride"
          />
          <p>
            PIXEL
            <br />
            (PRINCESS)
          </p>
        </figure>
      </div>
    </section>
  );
};

export default HomeBottom;
