
// src/components/Dashboard/Dashboard.tsx
import { SummaryCard } from '../SummaryCard/SummaryCard';
import styles from './Dashboard.module.scss';
import type { Transacao } from '../../Types/interfaces';

interface DashboardProps {
    transacoes: Transacao[];
  }

export function Dashboard({transacoes}:DashboardProps){
    const resumo =transacoes.reduce((acc, transacao)=>{
        if (transacao.tipo === 'receita'){
            acc.entradas += transacao.valor;
            acc.total +=transacao.valor;
        }else{
            acc.saidas += transacao.valor;
            acc.total -= transacao.valor;
        }
        return acc;
    }, {
        entradas: 0,
        saidas: 0,
        total: 0,
    });
    return (
        <section className={styles.container}>
            <SummaryCard tipo="entrada" titulo="Entradas" valor={resumo.entradas}/>
            <SummaryCard tipo="saida" titulo="Gastos" valor={resumo.saidas}/>
            <SummaryCard tipo="total" titulo="Saldo" valor={resumo.total}/>
        </section>
    );
}