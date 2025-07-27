// src/App.tsx
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import { TabelaTransacoes } from './components/Transacoes/TabelaTransacoes';
import {useState} from 'react'

function App() {
  const [transacoes, setTransacoes] = useState([
    {
      id: 1,
      titulo: 'Desenvolvimento de site',
      valor: 12000,
      categoria: 'Venda',
      data: '13/07/2025',
      tipo: 'receita', // 'receita' ou 'gasto'
    },
    {
      id: 2,
      titulo: 'Aluguel do escritório',
      valor: 1200,
      categoria: 'Casa',
      data: '10/07/2025',
      tipo: 'gasto',
    },
    {
      id: 3,
      titulo: 'Freela de Logo',
      valor: 2500,
      categoria: 'Venda',
      data: '08/07/2025',
      tipo: 'receita',
    },
    {
      id: 4,
      titulo: 'Outro Freela de Logo',
      valor: 2580,
      categoria: 'Venda',
      data: '08/07/2025',
      tipo: 'receita',
    },
    {
      id: 5,
      titulo: 'Parcela do Carro',
      valor: 1750,
      categoria: 'Custos Fixos',
      data: '10/07/2025',
      tipo: 'gasto',
    },
  ]);

  return (
    <div>
      <Header />
      <Dashboard transacoes={transacoes} />
      <TabelaTransacoes transacoes={transacoes} />
    </div>
  );
}

export default App;