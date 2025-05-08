'use client';

import styles from './Header.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.navHeader}>
        <div className={styles.logoContainer}>
          <Image
            src="/app-icon.png"
            alt="Streak Pulse App Icon"
            width={44}
            height={44}
            className={styles.appIcon}
          />
          {/* <span className={styles.appName}>Dinners App</span> */}
          <a href="/" className={styles.appName}>Streak Pulse</a>
        </div>
        <a href="#how-it-works" className={styles.navLink}>How Does it Work</a>
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          <div className={styles.hamburger}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </button>
        <a
          href="https://apps.apple.com/us/app/streak-pulse/id1548193772"
          className={styles.downloadButton}
        >
          Download
        </a>
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <a 
            href="#how-it-works" 
            className={styles.mobileMenuItem}
            onClick={() => setIsMenuOpen(false)}
          >
            How Does it Work
          </a>
          <a 
            href="https://apps.apple.com/us/app/streak-pulse/id1548193772"
            className={styles.mobileMenuItem}
            onClick={() => setIsMenuOpen(false)}
          >
            Download
          </a>
        </div>
      </div>
    </header>
  )
} 