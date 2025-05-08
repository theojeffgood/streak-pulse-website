import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          Streak Pulse is a productivity app created by Theo & Julie. The same makers of the beloved{' '}
          <a href="https://apps.apple.com/us/app/half-lemons/id1539975398" className={styles.footerLink}>
            Half Lemons
          </a>
          .
        </p>
        <div className={styles.footerLinks}>
          <a href="#" className={styles.footerLink}>Contact Us</a>
          <a href="/privacy-policy" className={styles.footerLink}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
} 