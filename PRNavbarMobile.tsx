import React from "react";
import { Link } from "components";
import SVG from "react-inlinesvg";
import { Hidden } from "react-grid-system";
import styles from "styles/PRNavbarMobile.module.scss";
import {
  middleColumnTwo,
  NavbarData,
  MoreMediaLeft,
  middleColumnOne,
  rightColumn,
} from "mocks";

export const PRNavbarMobileVue: React.FC = () => {
  const [clickMenuMobile, setClickMenuMobile] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <nav className={styles.prNav}>
      <div className={styles.prContainer}>
        <div className={styles.menuContainer}>
          <ul className={styles.menuWrapper}>
            <li className={styles.menuMobile}>
              <button
                type="button"
                onClick={() => setClickMenuMobile(!clickMenuMobile)}
              >
                <SVG
                  src="/icons/burgerMobileNew.svg"
                  style={{ display: clickMenuMobile ? "none" : "block" }}
                  className={
                    clickMenuMobile ? styles.closeButton : styles.menuMobile
                  }
                />
                <img
                  src="/icons/closeButtonWhite.png"
                  alt="close icon"
                  className={styles.imgX}
                  style={{ display: clickMenuMobile ? "block" : "none" }}
                />
              </button>
            </li>
            <li className={styles.menuLogo}>
              <Link
                href="https://polskieradio.pl/"
                aria-label="Polskie Radio"
              />
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
        className={styles.prContent}
        style={{ display: clickMenuMobile ? "block" : "none" }}
      >
        {NavbarData.map((item) => (
          <li key={item.id}>
            <Link href={item.href} ariaLabel={item.name} className={item.color}>
              {item.name}{" "}
            </Link>
          </li>
        ))}
        <li className={styles.moreMediaItem}>
          <button type="button" onClick={() => setOpenMenu(!openMenu)}>
            <SVG
              src="/icons/strzalka.svg"
              className={openMenu ? styles.arrowLeft : styles.arrowRight}
            />
          </button>
        </li>
      </div>
      <div
        className={styles.prContentMore}
        style={{ display: openMenu ? "block" : "none" }}
      >
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
    </nav>
  );
};

export const PRNavbarMobile: React.FC = () => {
  return (
    <Hidden xl xxl>
      <PRNavbarMobileVue />
    </Hidden>
  );
};

export default PRNavbarMobile;
