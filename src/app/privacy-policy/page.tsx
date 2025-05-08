import styles from './page.module.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className={styles.privacyPolicy}>
        <section className={styles.section}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.text}>
            Your privacy is important to us. It is Streak Pulse&apos; policy to respect your privacy regarding any information we may collect from you across our website, <a href="http://streakpulse.com" className={styles.link}>http://streakpulse.com</a>, and other sites and apps we own and operate.
          </p>
          <p className={styles.text}>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we&apos;re collecting it and how it will be used.
          </p>
          <p className={styles.text}>
            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we&apos;ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
          </p>
          <p className={styles.text}>
            We don&apos;t share any personally identifying information publicly or with third-parties, except when required to by law.
          </p>
          <p className={styles.text}>
            Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
          </p>
          <p className={styles.text}>
            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
          </p>
          <p className={styles.text}>
            Your continued use of our website and app will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
          </p>
          <p className={styles.text}>
            This policy is effective as of January 1st 2024.
          </p>
        </section>

        <section id="terms-of-service" className={styles.section}>
          <h2 className={styles.subtitle}>Terms of Use</h2>
          
          <h3 className={styles.subtitle}>1. Terms</h3>
          <p className={styles.text}>
            By accessing the website at <a href="http://www.streakpulse.com" className={styles.link}>http://www.streakpulse.com</a> and Streak Pulse App, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>

          <h3 className={styles.subtitle}>2. Use License</h3>
          <p className={styles.text}>
            Permission is granted to temporarily download one copy of the materials (information or software) on Streak Pulse&apos; website or app for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className={styles.list}>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on Streak Pulse&apos; website or app;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
          </ul>
          <p className={styles.text}>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Streak Pulse at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </p>

          <h3 className={styles.subtitle}>3. Disclaimer</h3>
          <p className={styles.text}>
            The materials on Streak Pulse&apos; website and app are provided on an &apos;as is&apos; basis. Streak Pulse makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p className={styles.text}>
            Further, Streak Pulse does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>

          <h3 className={styles.subtitle}>4. Limitations</h3>
          <p className={styles.text}>
            In no event shall Streak Pulse or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Streak Pulse&apos; website or app, even if Streak Pulse or a Streak Pulse authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
          </p>

          <h3 className={styles.subtitle}>5. Accuracy of materials</h3>
          <p className={styles.text}>
            The materials appearing on Streak Pulse&apos; website and app could include technical, typographical, or photographic errors. Streak Pulse does not warrant that any of the materials on its website or app are accurate, complete or current Streak Pulse may make changes to the materials contained on its website and app at any time without notice. However, Streak Pulse does not make any commitment to update the materials.
          </p>

          <h3 className={styles.subtitle}>6. Links</h3>
          <p className={styles.text}>
            Streak Pulse has not reviewed all of the sites linked to its website and app and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Streak Pulse of the site and app. Use of any such linked website is at the user&apos;s own risk.
          </p>

          <h3 className={styles.subtitle}>7. Modifications</h3>
          <p className={styles.text}>
            Streak Pulse may revise these terms of service for its website at any time without notice. By using this website and app, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h3 className={styles.subtitle}>8. Governing Law</h3>
          <p className={styles.text}>
            These terms and conditions are governed by and construed in accordance with the laws of New York and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
} 