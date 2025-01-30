import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
   
    
    {
      question: "La ce numere de telefon putem fi contactați?",
      answer: (
        <>
          📞 Gabriela: <a href="tel:0761941832" className={styles.link}>0761941832</a> <br />
          📞 Silviu: <a href="tel:0764837584" className={styles.link}>0764837584</a>
        </>
      )
    },
    {
      question: "Când și unde va avea loc evenimentul?",
      answer: "Evenimentul va avea loc pe 17 Mai 2025, în Buzău. Ceremonia religioasă se va desfășura la Catedrala Sfântul Sava la ora 17:00, iar petrecerea la Restaurantul Glamour Imperial începând cu ora 19:00.",
    },
    {
      question: "Ce ținută este recomandată?",
      answer: "Evenimentul nostru este unul elegant, așa că vă recomandăm o ținută de gală."
    },
    {
      question: "Cum pot confirma prezența?",
      answer: "Te rugăm să completezi formularul de confirmare de pe site, secțiunea 'Confirmare', sau să ne contactezi telefonic.",
    },
    {
      question: "Există posibilitatea de cazare?",
      answer: "Da, restaurantul dispune de camere pentru cazare. Dacă ai nevoie de cazare, selectează opțiunea corespunzătoare în formularul de confirmare.",
    },
    {
      question: "Pot veni cu copii?",
      answer: "Bineînțeles! Avem un meniu special pentru copii. Te rugăm să menționezi în formularul de confirmare dacă vei veni cu copii.",
    }
  ];

  return (
    <div id="faq" className={styles.faqContainer}>
      <h1 className={styles.faqTitle}>Întrebări frecvente</h1>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button className={styles.faqQuestion} onClick={() => toggleAnswer(index)}>
              {faq.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && <p className={styles.faqAnswer}>{faq.answer}</p>}
            
          </div>
        ))}
      </div>
      <h4 className={styles.footerPage}>Vă mulțumim!</h4>
    </div>
  );
};

export default FAQ;
