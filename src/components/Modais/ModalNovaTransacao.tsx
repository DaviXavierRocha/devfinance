// src/Modais/ModalNovaTransacao.tsx

import { useState } from 'react';
import styles from './ModalNovaTransacao.module.scss';
import type { Transacao } from '../../Types/interfaces';
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa'; // Ícones para os botões

interface ModalNovaTransacaoProps {
  onClose: () => void;
  onAdicionarTransacao: (transacao: Omit<Transacao, 'id' | 'data'>) => void;
}

export function ModalNovaTransacao({ onClose, onAdicionarTransacao }: ModalNovaTransacaoProps) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState('receita'); // 'receita' ou 'gasto'
  const [categoria, setCategoria] = useState('');

  function handleCriaNovaTransacao(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!descricao.trim() || valor <= 0) {
      return alert('Por favor, preencha todos os campos corretamente.');
    }
    onAdicionarTransacao({
      titulo: descricao,
      valor,
      tipo,
      categoria: categoria,
    });
    setDescricao('');
    setValor(0);
    setTipo('receita');
    setCategoria('Genérico')
    onClose();
  }

  return (
    <div className={styles.overlay}>
      <form className={styles.content} onSubmit={handleCriaNovaTransacao}>
        <h2>Nova Transação</h2>
        <button type="button" className={styles.botaoFechar} onClick={onClose}>
          X
        </button>

        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={valor === 0 ? '' : valor}
          onChange={(event) => setValor(Number(event.target.value))}
        />

        <input
          type="text"
          placeholder="Categoria"
          value={categoria}
          onChange={(event) => setCategoria(event.target.value)}
        />

        <div className={styles.tipoContainer}>
          <button
            type="button"
            className={tipo === 'receita' ? styles.entradaAtiva : ''}
            onClick={() => setTipo('receita')}
          >
            <FaArrowCircleUp color="#33cc95" />
            Entrada
          </button>
          <button
            type="button"
            className={tipo === 'gasto' ? styles.saidaAtiva : ''}
            onClick={() => setTipo('gasto')}
          >
            <FaArrowCircleDown color="#e92929" />
            Saída
          </button>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default ModalNovaTransacao;