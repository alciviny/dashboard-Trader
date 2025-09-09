import styles from './DiarioHeader.module.css';

function DiarioHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="" alt="Logo" className={styles.logo} />
        <div>
          <h1 className={styles.title}>Diário de Trade</h1>
          <p className={styles.subtitle}>
            Gerencie seus trades, anotações e agenda em um só lugar.
          </p>
        </div>
      </div>
     
     <nav>
        <button className={styles.button}>
          <span>Diário</span>
        </button>

         <button className={styles.button}>
          <span>anotações</span>
        </button>

        <button className={styles.button}>
          <span>Agenda</span>
        </button>

     </nav>
    </header>
  );
}

export default DiarioHeader;
