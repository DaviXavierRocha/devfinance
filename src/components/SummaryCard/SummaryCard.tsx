
// src/components/SummaryCard/SummaryCard.tsx
import clsx from 'clsx';
import styles from './SummaryCard.module.scss';

// Importação de icones
import { FaArrowCircleUp, FaArrowCircleDown, FaDollarSign } from 'react-icons/fa';

interface SummaryCardProps{
    titulo:string;
    valor:number;
    tipo: 'entrada'|'saida'|'total';
}

export function SummaryCard({titulo, valor, tipo}: SummaryCardProps){
    const iconMap={
        entrada: <FaArrowCircleUp size={28} />,
        saida: <FaArrowCircleDown size={28} />,
        total: <FaDollarSign size={28} />,        
    };
    return(
        <div className={clsx(styles.card, styles[tipo])}>
            <header><span>
                {titulo}
                {iconMap[tipo]}
            </span></header>
            <strong>{new Intl.NumberFormat('pt-BR', {style:'currency',currency:'BRL',}).format(valor)}</strong>
        </div>
    );
}

