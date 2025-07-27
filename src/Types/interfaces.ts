export interface Transacao {
    id: number;
    titulo: string;
    valor: number;
    categoria: string;
    data: string;
    tipo: 'receita' | 'gasto';
}

