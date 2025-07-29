import styles from './ModalNovaTransacao.module.scss'

interface ModalNovaTransacaoProps{
    onClose:() => void;
  }

function ModalNovaTransacao({onClose}:ModalNovaTransacaoProps){
    <div className={styles.container}>
        <button className={styles.button} onClick={onClose}>X</button>
        <h2>Nova Transação</h2>
    </div>
}
export default ModalNovaTransacao