// src/components/Header/Header.tsx
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>DevFinance</h1>
        {/* Você pode adicionar um logo aqui depois, se quiser */}
      </div>
    </header>
  );
}
export default Header