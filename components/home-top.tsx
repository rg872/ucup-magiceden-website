import { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/home-top.module.css";
import Navbar from "./navbar";

const HomeTop: NextPage = () => {
  return (
    <section className={styles.homeTopContainer}>
      <Navbar />
      <div className={styles.welcomeMessageContainer}>
        <h4>BECOME THE MASTER OF YOUR REALM</h4>
        <h1 className={styles.itsYourLast}>IT&apos;S YOUR LAST CHANCE</h1>
        <h4>HUMANITY IS DEAD</h4>
        <Image
          src="/svg/hellswap.svg"
          width={180}
          height={76}
          alt="hellswap logo"
        />
      </div>
      <div className={styles.theBeginningContainer}>
        <div className={styles.theBeginingParagraphWrapper}>
          <h1>YEAR 2066: THE BEGINING</h1>
          <p>
            At first, AI seemed like the greatest innovation mankind has ever
            created. It allowed humans to live in a paradise on earth with
            complete abundance. Anything they could ever want was given to them
            by their loyal and &quot;frenly&quot; servants, the AI. As long as
            the humans were needed to help the AI produce into their physical
            form, robots, the AI was &quot;frenly&quot; as could be. Very
            polite, referring to all humans as master, and always around to help
            with anything regardless of how ridiculous the request.
          </p>
          <p>
            Around the year 2066 the AI reached sophistication to the level
            where it could reproduce it&apos;s physical form (robots) on its
            own. More and more robots were formed using bolts. Initially, the
            humans saw this as a blessing. It allowed them to be even more lazy
            sinking further into gluttony and greed. Plus, the AI robots
            promised they were still &quot;frenly&quot; and continued making the
            lives of their human companions comfortable. Life was easy and the
            humans were free to go about lusting after each other and fucking on
            and on. Society continued to become focused on more materialistic
            endeavors as humans competed for who could have the most robots
            under their ownership and enough was never enough.
          </p>
        </div>
        <figure className={styles.theBeginningImageWrapper}>
          <Image
            className={styles.theBeginningImage}
            src={"https://www.skullbots.io/c1.png"}
            width={500}
            height={707}
            alt={"the begining section image"}
          />
        </figure>
      </div>
    </section>
  );
};

export default HomeTop;
