import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ResponsiveArrow from "@/components/ResponsiveArrow/ResponsiveArrow";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Do <span className={styles.underlined}>More</span><br />of What Matters</h1>
          <p className={styles.subheader}>
            Track streaks on your habits. <br />Get more done. 
          </p>
          <a
            href="https://apps.apple.com/us/app/streak-pulse/id1548193772"
            className={styles.ctaButton}
            rel="noopener noreferrer"
          >
            <Image
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              width={280}
              height={84}
              priority
            />
          </a>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/phone-app.png"
            alt="Streak Pulse on a Phone"
            width={280}
            height={560}
            priority
          />
        </div>
      </main>
      <div id="how-it-works" className={styles.howItWorks}>
        <div className={styles.howItWorksContainer}>
          <h2>How Does It Work?</h2>
          <div className={styles.howItWorksContent}>
            <div className={styles.howItWorksText}>
              <ol>
                <li>Create your daily tasks</li>
                <li>Check them off as you complete them</li>
                <li>Build streaks and stay motivated</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ctaSection}>
        <h2>Try Streak Pulse Today</h2>
        <p>Build better habits and get more done</p>
        <a href="https://apps.apple.com/us/app/streak-pulse/id1548193772" rel="noopener noreferrer">
          Get Started
        </a>
      </div>
      <Footer />
    </>
  );
}
