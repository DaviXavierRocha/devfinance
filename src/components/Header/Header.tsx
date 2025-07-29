// src/components/Header/Header.tsx
import styles from './Header.module.scss';

interface headerProps{
  onButtonClick:() => void;
}

export function Header({onButtonClick}:headerProps) {

  return (
    <header className={styles.header}>
      <button className={styles.botao} onClick={onButtonClick}> Nova transação </button>
      <div className={styles.container}>

        <h1>DevFinance</h1>
        {/* Você pode adicionar um logo aqui depois, se quiser */}

      </div>
    </header>
  );
}
export default Header