function mostrarDetalhes(etapa) {
    const conteudoDetalhes = document.getElementById('conteudo-detalhes');
    let texto = '';
  
    switch (etapa) {
      case 'planejamento':
        texto = `
          <h3>Planejamento</h3>
          <p>O planejamento é a base de todo o projeto. Inclui:</p>
          <ul>
            <li><strong>Definição de objetivos:</strong> Qual o propósito do site?</li>
            <li><strong>Público-alvo:</strong> Quem irá utilizá-lo?</li>
            <li><strong>Funcionalidades:</strong> Que recursos ele precisa?</li>
            <li><strong>Estrutura inicial:</strong> Mapa do site e rascunho.</li>
          </ul>
        `;
        break;
      case 'design':
        texto = `
          <h3>Design</h3>
          <p>O design envolve a aparência e a usabilidade do site. Inclui:</p>
          <ul>
            <li><strong>Wireframes:</strong> Esboços das páginas.</li>
            <li><strong>Paleta de cores:</strong> Escolha das cores principais.</li>
            <li><strong>Tipografia:</strong> Seleção de fontes adequadas.</li>
            <li><strong>Ferramentas:</strong> Figma, Adobe XD ou Sketch.</li>
          </ul>
        `;
        break;
      case 'desenvolvimento':
        texto = `
          <h3>Desenvolvimento</h3>
          <p>Aqui, o site é codificado. Etapas incluem:</p>
          <ul>
            <li><strong>HTML:</strong> Estrutura básica das páginas.</li>
            <li><strong>CSS:</strong> Estilização e layout.</li>
            <li><strong>JavaScript:</strong> Funcionalidades interativas.</li>
            <li><strong>Frameworks:</strong> Bootstrap, React ou outros.</li>
          </ul>
        `;
        break;
      case 'testes':
        texto = `
          <h3>Testes</h3>
          <p>Os testes garantem a funcionalidade do site. Incluem:</p>
          <ul>
            <li><strong>Compatibilidade:</strong> Diferentes navegadores e dispositivos.</li>
            <li><strong>Performance:</strong> Velocidade e otimização.</li>
            <li><strong>Usabilidade:</strong> Facilidade de uso para o público-alvo.</li>
          </ul>
        `;
        break;
      case 'publicacao':
        texto = `
          <h3>Publicação</h3>
          <p>O site é colocado no ar. Inclui:</p>
          <ul>
            <li><strong>Hospedagem:</strong> Escolha de um provedor de servidores.</li>
            <li><strong>Domínio:</strong> Registro de um endereço único.</li>
            <li><strong>Deploy:</strong> Envio dos arquivos para o servidor.</li>
          </ul>
        `;
        break;
      case 'manutencao':
        texto = `
          <h3>Manutenção</h3>
          <p>Após o lançamento, é essencial manter o site atualizado. Inclui:</p>
          <ul>
            <li><strong>Atualizações:</strong> Correções de bugs e melhorias.</li>
            <li><strong>Segurança:</strong> Proteção contra vulnerabilidades.</li>
            <li><strong>Conteúdo:</strong> Adição de novas informações ou seções.</li>
          </ul>
        `;
        break;
      default:
        texto = `<p>Clique em uma etapa para saber mais.</p>`;
    }
  
    conteudoDetalhes.innerHTML = texto;
  }
  function mostrarDetalhes(etapa) {
    const conteudoDetalhes = document.getElementById('conteudo-detalhes');
    let texto = '';
  
    switch (etapa) {
      case 'planejamento':
        texto = `
          <h3>Planejamento</h3>
          <p>O planejamento é a base de todo o projeto. Inclui:</p>
          <ul>
            <li><strong>Definição de objetivos:</strong> Qual o propósito do site?</li>
            <li><strong>Público-alvo:</strong> Quem irá utilizá-lo?</li>
            <li><strong>Funcionalidades:</strong> Que recursos ele precisa?</li>
            <li><strong>Estrutura inicial:</strong> Mapa do site e rascunho.</li>
          </ul>
        `;
        break;
      case 'design':
        texto = `
          <h3>Design</h3>
          <p>O design envolve a aparência e a usabilidade do site. Inclui:</p>
          <ul>
            <li><strong>Wireframes:</strong> Esboços das páginas.</li>
            <li><strong>Paleta de cores:</strong> Escolha das cores principais.</li>
            <li><strong>Tipografia:</strong> Seleção de fontes adequadas.</li>
            <li><strong>Ferramentas:</strong> Figma, Adobe XD ou Sketch.</li>
          </ul>
        `;
        break;
      case 'desenvolvimento':
        texto = `
          <h3>Desenvolvimento</h3>
          <p>Aqui, o site é codificado. Etapas incluem:</p>
          <ul>
            <li><strong>HTML:</strong> Estrutura básica das páginas.</li>
            <li><strong>CSS:</strong> Estilização e layout.</li>
            <li><strong>JavaScript:</strong> Funcionalidades interativas.</li>
            <li><strong>Frameworks:</strong> Bootstrap, React ou outros.</li>
          </ul>
        `;
        break;
      case 'testes':
        texto = `
          <h3>Testes</h3>
          <p>Os testes garantem a funcionalidade do site. Incluem:</p>
          <ul>
            <li><strong>Compatibilidade:</strong> Diferentes navegadores e dispositivos.</li>
            <li><strong>Performance:</strong> Velocidade e otimização.</li>
            <li><strong>Usabilidade:</strong> Facilidade de uso para o público-alvo.</li>
          </ul>
        `;
        break;
      case 'publicacao':
        texto = `
          <h3>Publicação</h3>
          <p>O site é colocado no ar. Inclui:</p>
          <ul>
            <li><strong>Hospedagem:</strong> Escolha de um provedor de servidores.</li>
            <li><strong>Domínio:</strong> Registro de um endereço único.</li>
            <li><strong>Deploy:</strong> Envio dos arquivos para o servidor.</li>
          </ul>
        `;
        break;
      case 'manutencao':
        texto = `
          <h3>Manutenção</h3>
          <p>Após o lançamento, é essencial manter o site atualizado. Inclui:</p>
          <ul>
            <li><strong>Atualizações:</strong> Correções de bugs e melhorias.</li>
            <li><strong>Segurança:</strong> Proteção contra vulnerabilidades.</li>
            <li><strong>Conteúdo:</strong> Adição de novas informações ou seções.</li>
          </ul>
        `;
        break;
      default:
        texto = `<p>Clique em uma etapa para saber mais.</p>`;
    }
  
    conteudoDetalhes.innerHTML = texto;
  }
    