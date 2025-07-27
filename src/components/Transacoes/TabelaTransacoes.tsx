// src/components/Transacoes/TabelaTransacoes.tsx
import styles from './TabelaTransacoes.module.scss';
// agora eu transferi a interface para um arquivo separado e o estou importando
import type { Transacao } from '../../Types/interfaces.ts';

// agora eu vou criar as propriedades da transação. note que é um vetor, pois vai armazenar mais de um dado do tipo transação
interface TabelaTransacoesProps {
  transacoes: Transacao[];
}

export function TabelaTransacoes({transacoes}:TabelaTransacoesProps) {


  return (
    <section className={styles.container}>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
          {/* 3. Use o .map() para criar as linhas da tabela dinamicamente */}
          {transacoes.map(transacao=> (
            <tr key={transacao.id}>
              <td>{transacao.titulo}</td>
              <td className={styles[transacao.tipo]}>
                {transacao.tipo === 'gasto' && '- '}
                {new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL',}).format(transacao.valor)}
              </td>
              <td>{transacao.categoria}</td>
              <td>{transacao.data}</td>
            </tr>
          ))}

            </tbody>
        </table>
    </section>
  );
}

