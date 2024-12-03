const data = {
    html: [
      { 
        term: "div", 
        description: "O elemento <strong>&lt;div&gt;</strong> é um contêiner genérico para organizar outros elementos HTML. É amplamente usado para estruturar e estilizar páginas da web.",
        example: `<div class="container">Este é um exemplo de um contêiner div.</div>`
      },
      { 
        term: "h1", 
        description: "O elemento <strong>&lt;h1&gt;</strong> é usado para criar cabeçalhos principais. Ele representa o nível mais alto de título em um documento.",
        example: `<h1>Bem-vindo ao Guia</h1>`
      },
      { 
        term: "a", 
        description: "O elemento <strong>&lt;a&gt;</strong> cria hyperlinks que permitem a navegação entre páginas ou recursos.",
        example: `<a href="https://example.com">Clique aqui para visitar um site</a>`
      },
    ],
    css: [
      { 
        term: "color", 
        description: "A propriedade <strong>color</strong> define a cor do texto de um elemento.",
        example: `p { color: red; }`
      },
      { 
        term: "margin", 
        description: "A propriedade <strong>margin</strong> define o espaço externo ao redor de um elemento.",
        example: `div { margin: 20px; }`
      },
      { 
        term: "display", 
        description: "A propriedade <strong>display</strong> especifica como os elementos devem ser exibidos na página, como 'block', 'inline', ou 'flex'.",
        example: `div { display: flex; }`
      },
    ],
    javascript: [
      { 
        term: "function", 
        description: "Uma <strong>função</strong> é um bloco de código que pode ser chamado e executado. Ela ajuda a reutilizar código.",
        example: `function saudacao() { console.log("Olá!"); } saudacao();`
      },
      { 
        term: "array", 
        description: "Um <strong>array</strong> é uma estrutura de dados usada para armazenar uma coleção de itens.",
        example: `const frutas = ["maçã", "banana", "laranja"]; console.log(frutas[1]); // banana`
      },
      { 
        term: "event listener", 
        description: "Um <strong>event listener</strong> captura eventos do usuário, como cliques ou teclas pressionadas.",
        example: `document.getElementById("botao").addEventListener("click", () => { alert("Botão clicado!"); });`
      },
    ]
  };
  
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const resultsContainer = document.getElementById('resultsContainer');
  
  function search(term) {
    resultsContainer.innerHTML = ""; // Limpa resultados anteriores
  
    let found = false;
    for (let category in data) {
      data[category].forEach(item => {
        if (item.term.toLowerCase().includes(term.toLowerCase())) {
          found = true;
          const resultDiv = document.createElement('div');
          resultDiv.className = 'result';
          resultDiv.innerHTML = `
            <h3>${item.term} (${category.toUpperCase()})</h3>
            <p>${item.description}</p>
            <pre><code>${item.example}</code></pre>
          `;
          resultsContainer.appendChild(resultDiv);
        }
      });
    }
  
    if (!found) {
      resultsContainer.innerHTML = "<p>Nenhum resultado encontrado. Tente outro termo.</p>";
    }
  }
  
  searchButton.addEventListener('click', () => {
    const term = searchInput.value.trim();
    if (term) {
      search(term);
    }
  });
  
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const term = searchInput.value.trim();
      if (term) {
        search(term);
      }
    }
  });
  
// Navegação entre páginas
const homeLink = document.getElementById('home');
if (homeLink) {
  homeLink.addEventListener('click', () => {
    window.location.href = 'index.html'; // Navega para a página inicial
  });
}

const productLink = document.getElementById('product');
if (productLink) {
  productLink.addEventListener('click', () => {
    window.location.href = 'produtos.html'; // Navega para a página de produtos
  });
}

// Redes sociais
const whatsappIcon = document.getElementById('whatsapp');
if (whatsappIcon) {
  whatsappIcon.addEventListener('click', () => {
    window.location.href = '#'; // Defina o link real se necessário
  });
}

const instagramIcon = document.getElementById('instagram');
if (instagramIcon) {
  instagramIcon.addEventListener('click', () => {
    window.location.href = '#'; // Defina o link real se necessário
  });
}

const twitterIcon = document.getElementById('twitter');
if (twitterIcon) {
  twitterIcon.addEventListener('click', () => {
    window.open('https://www.w3schools.com/howto/howto_css_icon_bar.asp', '_blank'); // Abre em uma nova aba
  });
}

const githubIcon = document.getElementById('github');
if (githubIcon) {
  githubIcon.addEventListener('click', () => {
    window.open('https://github.com/UnsDuds', '_blank'); // Abre em uma nova aba
  });
}


