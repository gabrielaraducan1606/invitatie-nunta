import styles from "./WhereWhen.module.css";
import { Church, PartyPopper } from "lucide-react"; // Import iconițe

const WhereWhen = () => {
  return (
    <div id="wherewhen" className={styles.pageContainer}>
      <div className={styles.background}></div>
      <h1 className={styles.pageTitle}>Unde și Când</h1>
      <p className={styles.subtitle}>Vă așteptăm să celebrăm împreună această zi specială!</p>
      
      <div className={styles.cardsContainer}>
        {/* Cardul pentru ceremonia religioasă */}
        <div className={styles.card}>
          <Church size={50} className={styles.icon} />
          <h2 className={styles.eventTitle}>Ceremonia Religioasă</h2>
          <p className={styles.eventDetails}>
            📍 Catedrala Sfântul Sava, Buzău <br />
            🕰 Ora: 17:00
          </p>
        </div>

        {/* Cardul pentru petrecerea de nuntă */}
        <div className={styles.card}>
          <PartyPopper size={50} className={styles.icon} />
          <h2 className={styles.eventTitle}>Petrecerea de Nuntă</h2>
          <p className={styles.eventDetails}>
            📍 Restaurant Glamour Imperial, Buzău <br />
            🕰 Ora: 19:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhereWhen;
