document.addEventListener("DOMContentLoaded", function() {
    //header
    const header = document.querySelector('header');
    header.id = 'header';
  
    const headerLink = document.createElement('a');
    headerLink.href = './index.html';
  
    const headerH1 = document.createElement('h1');
    headerH1.textContent = 'Squirtle';
    headerLink.appendChild(headerH1);
  
    header.appendChild(headerLink);
  
    //navbar
    const nav = document.querySelector('nav');
    nav.setAttribute('aria-label', 'Navegação principal');
  
    const navUl = document.createElement('ul');
  
    const navItems = [
      { href: '#info-squirtle', text: 'Informações sobre Squirtle' },
      { href: '#caracteristicas', text: 'Características' },
      { href: '#curiosidades', text: 'Curiosidades' },
      { href: '#artigo-squirtle', text: 'Artigo sobre Squirtle' },
      { href: '#recursos', text: 'Recursos Adicionais' },
      { href: '#evolucao', text: 'Evolução' }
    ];
  
    navItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.text;
      li.appendChild(a);
      navUl.appendChild(li);
    });
  
    nav.appendChild(navUl);
  
    //main
    const main = document.querySelector('main');
  
    //Squirtle
    const infoSquirtleSection = document.createElement('section');
    infoSquirtleSection.id = 'info-squirtle';
    infoSquirtleSection.setAttribute('aria-labelledby', 'info-squirtle-label');
  
    const infoSquirtleHeading = document.createElement('h2');
    infoSquirtleHeading.id = 'info-squirtle-label';
    infoSquirtleHeading.textContent = 'Informações sobre Squirtle';
    infoSquirtleSection.appendChild(infoSquirtleHeading);
  
    const imgContainer = document.createElement('div');
  
    const img1 = document.createElement('img');
    img1.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';
    img1.alt = 'Squirtle 1';
    imgContainer.appendChild(img1);
  
    const img2 = document.createElement('img');
    img2.src = 'https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png';
    img2.alt = 'Squirtle 2';
    imgContainer.appendChild(img2);
  
    infoSquirtleSection.appendChild(imgContainer);
  
    const infoSquirtleParagraph = document.createElement('p');
    infoSquirtleParagraph.textContent = 'Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.';
    infoSquirtleSection.appendChild(infoSquirtleParagraph);
  
    main.appendChild(infoSquirtleSection);
  
    //Características
    const caracteristicasSection = document.createElement('section');
    caracteristicasSection.id = 'caracteristicas';
    caracteristicasSection.setAttribute('aria-labelledby', 'caracteristicas-label');
  
    const caracteristicasHeading = document.createElement('h2');
    caracteristicasHeading.id = 'caracteristicas-label';
    caracteristicasHeading.textContent = 'Características';
    caracteristicasSection.appendChild(caracteristicasHeading);
  
    const caracteristicasParagraph = document.createElement('p');
    caracteristicasParagraph.textContent = 'Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.';
    caracteristicasSection.appendChild(caracteristicasParagraph);
  
    main.appendChild(caracteristicasSection);
  
    //Curiosidades
    const curiosidadesSection = document.createElement('section');
    curiosidadesSection.id = 'curiosidades';
    curiosidadesSection.setAttribute('aria-labelledby', 'curiosidades-label');
  
    const curiosidadesHeading = document.createElement('h2');
    curiosidadesHeading.id = 'curiosidades-label';
    curiosidadesHeading.textContent = 'Curiosidades';
    curiosidadesSection.appendChild(curiosidadesHeading);
  
    const curiosidadesList = document.createElement('ul');
  
    const curiosidade1 = document.createElement('li');
    curiosidade1.textContent = 'Squirtle é um dos Pokémon mais populares e adoráveis.';
    curiosidadesList.appendChild(curiosidade1);
  
    const curiosidade2 = document.createElement('li');
    curiosidade2.textContent = 'Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).';
    curiosidadesList.appendChild(curiosidade2);
  
    const curiosidade3 = document.createElement('li');
    curiosidade3.textContent = 'Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.';
    curiosidadesList.appendChild(curiosidade3);
  
    curiosidadesSection.appendChild(curiosidadesList);
  
    main.appendChild(curiosidadesSection);
  
    // Artigo sobre Squirtle
    const artigoSection = document.createElement('article');
    artigoSection.id = 'artigo-squirtle';
    artigoSection.setAttribute('aria-labelledby', 'artigo-squirtle-label');
  
    const artigoHeading = document.createElement('h2');
    artigoHeading.id = 'artigo-squirtle-label';
    artigoHeading.textContent = 'Squirtle: O Amigo Aquático';
    artigoSection.appendChild(artigoHeading);
  
    const artigoParagraph1 = document.createElement('p');
    artigoParagraph1.textContent = 'Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.';
    artigoSection.appendChild(artigoParagraph1);
  
    const artigoParagraph2 = document.createElement('p');
    artigoParagraph2.textContent = 'Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.';
    artigoSection.appendChild(artigoParagraph2);
  
    const artigoParagraph3 = document.createElement('p');
    artigoParagraph3.textContent = 'Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.';
    artigoSection.appendChild(artigoParagraph3);
  
    main.appendChild(artigoSection);
  
    //Recursos Adicionais
    const recursosSection = document.createElement('section');
    recursosSection.id = 'recursos';
    recursosSection.setAttribute('aria-labelledby', 'recursos-label');
  
    const recursosHeading = document.createElement('h2');
    recursosHeading.id = 'recursos-label';
    recursosHeading.textContent = 'Recursos Adicionais';
    recursosSection.appendChild(recursosHeading);
  
    const recursosList = document.createElement('ul');
  
    const recurso1 = document.createElement('li');
    const recurso1Link = document.createElement('a');
    recurso1Link.href = 'https://www.pokemon.com/br/pokedex/squirtle';
    recurso1Link.target = '_blank';
    recurso1Link.textContent = 'Pokédex - Squirtle';
    recurso1.appendChild(recurso1Link);
    recursosList.appendChild(recurso1);
  
    const recurso2 = document.createElement('li');
    const recurso2Link = document.createElement('a');
    recurso2Link.href = 'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)';
    recurso2Link.target = '_blank';
    recurso2Link.textContent = 'Bulbapedia - Squirtle';
    recurso2.appendChild(recurso2Link);
    recursosList.appendChild(recurso2);
  
    recursosSection.appendChild(recursosList);
  
    main.appendChild(recursosSection);
  
    //Evoluções
    const evolucaoSection = document.createElement('section');
    evolucaoSection.id = 'evolucao';
    evolucaoSection.setAttribute('aria-labelledby', 'evolucao-label');
  
    const evolucaoHeading = document.createElement('h2');
    evolucaoHeading.id = 'evolucao-label';
    evolucaoHeading.textContent = 'Evoluções';
    evolucaoSection.appendChild(evolucaoHeading);
  
    const evolucaoList = document.createElement('ul');
  
    const evolucaoSquirtle = document.createElement('li');
    const evolucaoSquirtleFigure = document.createElement('figure');
  
    const evolucaoSquirtleImg = document.createElement('img');
    evolucaoSquirtleImg.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png';
    evolucaoSquirtleImg.alt = 'Squirtle';
    evolucaoSquirtleFigure.appendChild(evolucaoSquirtleImg);
  
    const evolucaoSquirtleFigcaption = document.createElement('figcaption');
    evolucaoSquirtleFigcaption.textContent = '1. Squirtle';
    evolucaoSquirtleFigure.appendChild(evolucaoSquirtleFigcaption);
  
    evolucaoSquirtle.appendChild(evolucaoSquirtleFigure);
    evolucaoList.appendChild(evolucaoSquirtle);
  
    const evolucaoWartortle = document.createElement('li');
    const evolucaoWartortleFigure = document.createElement('figure');
  
    const evolucaoWartortleImg = document.createElement('img');
    evolucaoWartortleImg.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png';
    evolucaoWartortleImg.alt = 'Wartortle';
    evolucaoWartortleFigure.appendChild(evolucaoWartortleImg);
  
    const evolucaoWartortleFigcaption = document.createElement('figcaption');
    evolucaoWartortleFigcaption.textContent = '2. Wartortle';
    evolucaoWartortleFigure.appendChild(evolucaoWartortleFigcaption);
  
    evolucaoWartortle.appendChild(evolucaoWartortleFigure);
    evolucaoList.appendChild(evolucaoWartortle);
  
    const evolucaoBlastoise = document.createElement('li');
    const evolucaoBlastoiseFigure = document.createElement('figure');
  
    const evolucaoBlastoiseImg = document.createElement('img');
    evolucaoBlastoiseImg.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png';
    evolucaoBlastoiseImg.alt = 'Blastoise';
    evolucaoBlastoiseFigure.appendChild(evolucaoBlastoiseImg);
  
    const evolucaoBlastoiseFigcaption = document.createElement('figcaption');
    evolucaoBlastoiseFigcaption.textContent = '3. Blastoise';
    evolucaoBlastoiseFigure.appendChild(evolucaoBlastoiseFigcaption);
  
    evolucaoBlastoise.appendChild(evolucaoBlastoiseFigure);
    evolucaoList.appendChild(evolucaoBlastoise);
  
    evolucaoSection.appendChild(evolucaoList);
  
    main.appendChild(evolucaoSection);
  
    //footer
    const footer = document.querySelector('footer');
  
    const footerParagraph1 = document.createElement('p');
    footerParagraph1.setAttribute('aria-label', 'Copyright');
    footerParagraph1.innerHTML = '&copy; 2024 Página do Pokémon Squirtle. Todos os direitos reservados.';
    footer.appendChild(footerParagraph1);
  
    const footerParagraph2 = document.createElement('p');
    const footerLinkToTop = document.createElement('a');
    footerLinkToTop.href = '#header';
    footerLinkToTop.textContent = 'Voltar para o topo';
    footerParagraph2.appendChild(footerLinkToTop);
    footer.appendChild(footerParagraph2);
  
    const footerParagraph3 = document.createElement('p');
    const footerMailLink = document.createElement('a');
    footerMailLink.href = 'mailto:contato@squirtlepage.com';
    footerMailLink.textContent = 'Contato via e-mail';
    footerParagraph3.appendChild(footerMailLink);
    footer.appendChild(footerParagraph3);
  
    const footerParagraph4 = document.createElement('p');
    const footerPhoneLink = document.createElement('a');
    footerPhoneLink.href = 'tel:+5555555555';
    footerPhoneLink.textContent = 'Telefone: (55) 5555-5555';
    footerParagraph4.appendChild(footerPhoneLink);
    footer.appendChild(footerParagraph4);
  });
  