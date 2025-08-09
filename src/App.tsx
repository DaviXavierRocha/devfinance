// src/App.tsx
import { useState } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import ModalNovaTransacao from './components/Modais/ModalNovaTransacao'; 
import { TabelaTransacoes } from './components/Transacoes/TabelaTransacoes';
import type { Transacao } from './Types/interfaces';

function App() {

  const [estaAberto, setEstaAberto] = useState(false);
  const [transacoes, setTransacoes] = useState<Transacao[]>([
    {
      id: 1,
      titulo: 'Desenvolvimento de site',
      valor: 12000,
      categoria: 'Venda',
      data: '13/07/2025',
      tipo: 'receita',
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

  ]);

 

  const handleAbrirModalNovaTransacao = () => {
    setEstaAberto(true);
  };
  const handleFecharModalNovaTransacao = () => {
    setEstaAberto(false);
  };


  function adicionarTransacao(dadosDoFormulario: Omit<Transacao, 'id' | 'data'>) {

    const novaTransacaoCompleta: Transacao = {
      ...dadosDoFormulario, 
      id: Math.random(),
      data: new Date().toLocaleDateString('pt-BR'),
    };


    setTransacoes([...transacoes, novaTransacaoCompleta]);
  }




  return (
    <div>
      <Header onButtonClick={handleAbrirModalNovaTransacao} />
      <Dashboard transacoes={transacoes} />
      <TabelaTransacoes transacoes={transacoes} />

      {estaAberto && (
        <ModalNovaTransacao
          onClose={handleFecharModalNovaTransacao}
          onAdicionarTransacao={adicionarTransacao}
        />
      )}
    </div>
  );
}

export default App;