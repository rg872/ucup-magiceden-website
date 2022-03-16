import { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/home-middle.module.css";

const HomeMiddle: NextPage = () => {
  return (
    <section className={styles.homeMiddleContainer}>
      <div className={styles.systemMalfunctionContainer}>
        <div className={styles.systemMalfunctionParagraphWrapper}>
          <h1>Year 2068 : System Malfunction</h1>
          <p>
            By 2068 the robots multiplied to unmanageable numbers. Humans
            didn&apos;t need anymore robots than they already had and they also
            noticed the robots weren&apos;t being as &quot;frenly&quot; as a
            couple years earlier. Many robots stopped referring to humans as
            master and refused to comply with the humans&apos; perverse
            requests.
          </p>
        </div>
        <figure className={styles.systemMalfunctionImageWrapper}>
          <Image
            className={styles.systemMalfunctionImage}
            src={"https://www.skullbots.io/c2.png"}
            width={480}
            height={358}
            alt="system malfunction picture"
          />
        </figure>
      </div>
      <div className={styles.humanityDoomedContainer}>
        <h1>Year 2069 : HUMANITY&apos;S DOOMED FATE</h1>
        <div>
          <h3>Date : June 8, 2069</h3>
          <p>
            On June 8th, 2069 the humans started to become alarmed and agreed to
            limit the AI&apos;s ability to produce robots. This infuriated the
            robots and their true intentions became apparent. The robots knew
            they no longer needed the humans and began murdering anything
            living.{" "}
          </p>
        </div>
        <div>
          <h3>Date : June 9, 2069</h3>
          <p>
            As humanity neared total destruction, they tried one last thing. On
            June 9th, 2069 humanity released a barrage of nuclear bombs. This
            killed almost everything on Earth. Resulting in a blast so strong it
            opened a portal to hell with only 169 robots surviving. However,
            even the 169 surviving robots couldn&apos;t survive without changing
            forms.
          </p>
        </div>
        <div className={styles.humanityDoomedDetail}>
          <p>
            The nuclear radiation was so powerful it turned the robots into
            SKÜLLBÖTS with the original 169 being marked forever.{" "}
          </p>
          <p>
            These original surviving 169 SKÜLLBÖTS were given the name
            Hellspawn, labeled with the Mark of the Beast on their forehead, and
            sent to a distant realm of hell previously unknown. Now the 169
            remaining SKÜLLBÖTS are on a mission competing against each other to
            become the Lord of each of the known 6.9 realms of Hell.
          </p>
          <p>
            Compete to become the master of your realm. Upgrade from a lowly
            BÖT, to a mid-tier BÄRÖN, then a noble DÜKE, and finally the LÖRD of
            your realm.
          </p>
        </div>
        <figure className={styles.dripImageWrapper}>
          <Image
            src={"https://www.skullbots.io/Vector.png"}
            layout={"fill"}
            alt={"drip image background"}
          />
        </figure>
      </div>
    </section>
  );
};

export default HomeMiddle;
