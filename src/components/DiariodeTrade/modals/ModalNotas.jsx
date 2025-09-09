import styles from './ModalNotas.module.css';


function ModalNotas({ isOpen, onClose }) {
  
 
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Adicionar Nova Anotação</h2>
          {/* O botão de fechar agora funciona novamente */}
          <button onClick={onClose} className={styles.closeButton}>X</button>
        </div>
        
        <form className={styles.form}>
          <label>Título</label>
          <input type="text" placeholder='Título de Anotação'/>
      
          <label>Categoria</label>
          <select>
            <option value="estrategia">Estratégia</option>
            <option value="aprendizado">Aprendizado</option>
            <option value="mercado">Mercado</option>
            <option value="ideia">Ideia</option>
          </select>

          <label>Conteúdo</label>
          <textarea rows="4" placeholder="Escreva sua anotação aqui..."></textarea>

          <button type="submit" className={styles.submitBtn}>Salvar Anotação</button>
        </form>
      </div>
    </div>
  );
}

export default ModalNotas;