// Banco de dados com o conteúdo formatado para o museu
const bancoDeDadosMuseu = {
  salaRaizesNegras: {
    titulo: "Raízes Negras e a Identidade Paranaense",
    secoes: [
      {
        id: "introducao",
        botaoTexto: "1. Introdução",
        conteudo: `
          <p><strong>Desconstruindo o Mito do "Paraná Europeu":</strong> Por muito tempo, a história oficial tentou consolidar a narrativa de que o Paraná foi moldado exclusivamente por braços e tradições de imigrantes europeus. Esse <strong>apagamento histórico</strong> silenciou séculos de protagonismo negro.</p>
          <p>A verdade histórica emerge com força: a <strong>presença ancestral negra</strong> está cravada na base da formação demográfica, econômica e cultural do estado desde o período colonial. Homens e mulheres negros ergueram as fundações desta terra.</p>
          <img src="link-da-imagem-introducao-presenca-negra" alt="Representação da presença histórica negra no Paraná antigo" style="max-width:100%; height:auto; margin: 15px 0; border-radius: 8px;">
        `
      },
      {
        id: "geografia_economia",
        botaoTexto: "2. Trabalho e Resistência",
        conteudo: `
          <p><strong>Foco Geográfico e Econômico: O Trabalho e a Resistência</strong></p>
          
          <h3>A) O Litoral (Paranaguá) e o Ciclo do Açúcar</h3>
          <p>O porto de <strong>Paranaguá</strong> foi o ponto central e a porta de entrada de milhares de africanos escravizados, tornando-se também o escoamento de toda a produção regional. A <strong>força de trabalho</strong> desses indivíduos foi o motor na produção do açúcar, no desenvolvimento da infraestrutura portuária e na imponente construção civil colonial que ainda desenha o litoral paranaense.</p>
          
          <h3>B) O Planalto e a Economia da Erva-Mate</h3>
          <p>Nos ervatais do século XIX, a mão de obra negra foi fundamental. Os chamados <strong>Guaias e os Ervateiros</strong> realizavam a complexa coleta, o preparo minucioso (como o <em>sapeco</em>) e o transporte da erva-mate — que viria a ser o principal motor econômico do Paraná. Além disso, nos Campos Gerais, a <strong>lida com o gado</strong> evidenciou a forte presença do negro na construção da cultura tropeira regional.</p>
          <img src="link-da-imagem-ciclo-erva-mate" alt="Trabalhadores na extração e preparo da erva-mate no século XIX" style="max-width:100%; height:auto; margin: 15px 0; border-radius: 8px;">

          <h3>C) A Região de Castro e o Quilombo Marujá</h3>
          <p>O <strong>Quilombo Marujá</strong>, localizado em Castro, carrega uma história rica de luta pela terra e preservação de tradições sagradas. Esta comunidade representa a <strong>resistência ativa</strong>: o quilombo nunca foi apenas um refúgio físico contra a opressão, mas sim um espaço sagrado de manutenção da identidade, da religiosidade e da conquista de autonomia.</p>
        `
      },
      {
        id: "cultura_regionalizacao",
        botaoTexto: "3. Cultura Paranaense",
        conteudo: `
          <p><strong>Cultura e Regionalização Cultural Paranaense:</strong> A riqueza cultural do Paraná pulsa em ritmo e sabor de matriz africana.</p>
          <ul>
            <li><strong>Expressões Culturais e Religiosas:</strong> O vibrante <strong>Fandango caiçara</strong> carrega no compasso do seu tamanco a forte influência da síncopa e do ritmo africano no litoral. Soma-se a isso a grandiosidade da <strong>Congada da Lapa</strong> e a devoção das tradicionais <strong>Festas de São Benedito</strong>.</li>
            <li><strong>Culinária:</strong> A herança negra moldou a gastronomia local de forma definitiva através do uso essencial da mandioca, de sofisticadas técnicas de cozimento lento e das adaptações fundamentais que deram origem ao icônico <strong>barreado paranaense</strong>.</li>
          </ul>
          <img src="link-da-imagem-fandango-ou-congada" alt="Apresentação cultural da Congada ou Fandango no Paraná" style="max-width:100%; height:auto; margin: 15px 0; border-radius: 8px;">
        `
      },
      {
        id: "arte_resistencia",
        botaoTexto: "4. Estética de Resistência",
        conteudo: `
          <p><strong>Conexão Arte: Estética de Resistência</strong></p>
          
          <h3>A) O Artesanato e a Argila como Documento Histórico</h3>
          <p>A argila e as fibras naturais são muito mais do que matéria-prima; são <strong>"A Terra que Fala"</strong>. Esses elementos são utilizados para materializar a cosmovisão e a leitura de mundo de povos tradicionais. A <strong>estética quilombola no Paraná</strong> transparece no uso utilitário e artístico do barro e no trançado preciso da cestaria, ferramentas usadas para narrar o cotidiano, saudar a ancestralidade e resistir à opressão histórica.</p>
          
          <h3>B) O Diálogo com a Iconografia Marajoara e Tapajônica</h3>
          <p>Há um paralelo fascinante entre os <strong>grafismos ancestrais</strong> e padrões geométricos das cerâmicas de Marajó e Tapajós (Pará) com as formas da arte quilombola paranaense. Ambas utilizam a simetria e os elementos da natureza como uma sofisticada linguagem visual.</p>
          <p>Esse <strong>simbolismo</strong> prova que a arte feita por povos tradicionais (indígenas e negros) não é meramente decorativa, mas uma <strong>escrita visual viva</strong> que preserva mitos, hierarquias e identidades que o colonizador tentou apagar. Manter vivas essas técnicas milenares de queima de cerâmica e modelagem manual é, acima de tudo, um <strong>ato político de preservação cultural</strong>.</p>
          <img src="link-da-imagem-ceramica-quilombola-ou-grafismo" alt="Detalhes de cerâmicas e grafismos de resistência tradicional" style="max-width:100%; height:auto; margin: 15px 0; border-radius: 8px;">
        `
      },
      {
        id: "conclusao",
        botaoTexto: "5. Conclusão",
        conteudo: `
          <p><strong>O Legado e a Identidade Hoje:</strong> O debate contemporâneo gira em torno dos <strong>direitos territoriais</strong> essenciais para as comunidades quilombolas remanescentes no Paraná, buscando a titulação de suas terras jurídicas e a devida visibilidade na sociedade.</p>
          <p>A verdadeira <strong>identidade paranaense</strong> é essencialmente plural. Compreender e celebrar as <strong>raízes negras</strong> não é apenas resgatar o passado, mas um passo fundamental para a construção da justiça histórica no presente.</p>
        `
      }
    ]
  }
};

/**
 * Função exemplo para injetar o conteúdo na tela.
 * @param {string} secaoId - O ID da seção que o usuário deseja visualizar.
 */
function injetarConteudoDaSala(secaoId) {
  // Encontra a seção correspondente dentro do nosso banco de dados
  const secaoSelecionada = bancoDeDadosMuseu.salaRaizesNegras.secoes.find(secao => secao.id === secaoId);
  
  if (secaoSelecionada) {
    // Alvo no HTML onde o conteúdo dinâmico será renderizado (ex: <div id="display-museu"></div>)
    const containerExibicao = document.getElementById("display-museu");
    
    if (containerExibicao) {
      // Injeta o conteúdo estruturado com as tags HTML prontas
      containerExibicao.innerHTML = `
        <h2>${bancoDeDadosMuseu.salaRaizesNegras.titulo}</h2>
        <hr>
        ${secaoSelecionada.conteudo}
      `;
    }
  }
}
