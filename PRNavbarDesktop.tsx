import React from "react";
import { Link } from "components";
import SVG from "react-inlinesvg";
import { Visible } from "react-grid-system";
import styles from "styles/PRNavbarDesktop.module.scss";
import {
  middleColumnTwo,
  NavbarData,
  MoreMediaLeft,
  middleColumnOne,
  rightColumn,
} from "mocks";

export const PRNavbarDesktopVue: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <nav className={styles.prNav}>
      <div className={styles.prContainer}>
        <div className={styles.menuContainer}>
          <ul className={styles.menuWrapper}>
            <li className={styles.menuLogo}>
              <Link href="https://polskieradio.pl/" aria-label="Polskie Radio">
                .
              </Link>
            </li>

            {NavbarData.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  ariaLabel={item.name}
                  className={item.color}
                >
                  {item.name}{" "}
                </Link>
              </li>
            ))}

            <li className={styles.moreMediaItem}>
              <button type="button" onClick={() => setOpenMenu(!openMenu)}>
                <SVG
                  src="/icons/strzalka.svg"
                  className={openMenu ? styles.arrowUp : styles.arrowDown}
                />
              </button>
            </li>

            <li className={styles.SpeakerItem}>
              <a
                href="https://player.polskieradio.pl/"
                target="_blank"
                aria-label="Player"
                rel="noreferrer"
              >
                <SVG src="/icons/equalizer.svg" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={styles.prContainerMore}
        style={{ display: openMenu ? "flex" : "none" }}
      >
        <div className={styles.prContent}>
          <ul className={styles.leftColumn}>
            {MoreMediaLeft.map((item) => (
              <li key={item.id} className={item.class}>
                <SVG src={item.src} />
                <Link href={item.href}> {item.name}</Link>
              </li>
            ))}
          </ul>

          <ul className={styles.middleColumnOne}>
            {middleColumnOne.map((item) => (
              <li key={item.id} className={item.class}>
                <SVG src={item.src} />
                <Link href={item.href}> {item.name}</Link>
              </li>
            ))}
          </ul>

          <ul className={styles.middleColumnTwo}>
            {middleColumnTwo.map((item) => (
              <li key={item.id} className={item.class}>
                <SVG src={item.src} />
                <Link href={item.href}> {item.name}</Link>
              </li>
            ))}
          </ul>

          <ul className={styles.rightColumn}>
            {rightColumn.map((item) => (
              <li key={item.id} className={item.class}>
                <SVG src={item.src} />
                <Link href={item.href}> {item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export const PRNavbarDesktop: React.FC = () => {
  return (
    <Visible xl xxl>
      <PRNavbarDesktopVue />
    </Visible>
  );
};

export default PRNavbarDesktop;
