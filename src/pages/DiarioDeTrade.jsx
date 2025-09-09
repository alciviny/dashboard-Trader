import { useState } from 'react';
import DiarioHeader from '../components/DiariodeTrade/DiarioHeader';
import ModalNotas from '../components/DiariodeTrade/modals/ModalNotas';


function DiarioDeTradePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <DiarioHeader />
      
      <main style={{ padding: '20px' }}>
        <h2>Minhas Anotações</h2>
        <button onClick={() => setIsModalOpen(true)}>Adicionar Nova Anotação</button>
      </main>

      <ModalNotas 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default DiarioDeTradePage;
