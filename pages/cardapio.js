// Scripts específicos para a página Cardápio

// Base de dados dos itens do cardápio
const cardapioItems = [
    // LANCHES ARTESANAIS - Gourmet
    {
        id: 1,
        nome: 'Gourmet 1',
        categoria: 'artesanal',
        descricao: 'Pão, bife de 120grs, cheddar e bacon.',
        preco: 'R$ 22,00',
        emoji: '🍔'
    },
    {
        id: 2,
        nome: 'Gourmet 2',
        categoria: 'artesanal',
        descricao: 'Pão, bife de 120 grs e queijo prato.',
        preco: 'R$ 20,00',
        emoji: '🍔'
    },
    {
        id: 3,
        nome: 'Gourmet 3',
        categoria: 'artesanal',
        descricao: 'Pão, bife de 120 grs, lombo canadense, catupiry e ovo.',
        preco: 'R$ 24,00',
        emoji: '🍔'
    },
    {
        id: 4,
        nome: 'Gourmet 4',
        categoria: 'artesanal',
        descricao: 'Pão, 2 bifes de 120grs, 2 queijos e bacon.',
        preco: 'R$ 34,00',
        emoji: '🍔'
    },
    {
        id: 5,
        nome: 'Gourmet 5',
        categoria: 'artesanal',
        descricao: 'Pão, 2 bifes de 120 grs, bacon, lombo canadense, catupiry, cheddar, salada e batata.',
        preco: 'R$ 36,00',
        emoji: '🍔'
    },
    // LANCHES
    {
        id: 6,
        nome: 'Vegetariano',
        categoria: 'hamburguer',
        descricao: 'Pão, ovo, mussarela, catupiry, alface, tomate e batata palha.',
        preco: 'R$ 15,00',
        emoji: '🍔'
    },
    {
        id: 7,
        nome: 'Pão com Linguiça',
        categoria: 'hamburguer',
        descricao: 'Pão, linguiça calabresa, mussarela e batata palha.',
        preco: 'R$ 14,00',
        emoji: '🍔'
    },
    {
        id: 8,
        nome: 'Hambúrguer',
        categoria: 'hamburguer',
        descricao: 'Pão, bife de hamburguer, alface, tomate e batata palha.',
        preco: 'R$ 11,00',
        emoji: '🍔'
    },
    {
        id: 9,
        nome: 'X-Burguer',
        categoria: 'hamburguer',
        descricao: 'Pão, bife de hamburguer, mussarela, alface, tomate e batata palha.',
        preco: 'R$ 14,00',
        emoji: '🍔'
    },
    {
        id: 10,
        nome: 'X-Burguer Duplo',
        categoria: 'hamburguer',
        descricao: 'Pão, 2 bifes de hamburguer, 2 mussarelas, alface, tomate e batata palha.',
        preco: 'R$ 18,00',
        emoji: '🍔'
    },
    {
        id: 11,
        nome: 'X-Presunto',
        categoria: 'hamburguer',
        descricao: 'Pão, bife de hamburguer, mussarela, presunto, alface, tomate e batata palha.',
        preco: 'R$ 15,00',
        emoji: '🍔'
    },
    {
        id: 12,
        nome: 'X-Egg',
        categoria: 'hamburguer',
        descricao: 'Pão, bife de hamburguer, mussarela, ovo, alface, tomate e batata palha.',
        preco: 'R$ 15,00',
        emoji: '🍔'
    },
    {
        id: 13,
        nome: 'X-Bacon',
        categoria: 'hamburguer',
        descricao: 'Pão, bife de hamburguer, mussarela, bacon, alface, tomate e batata palha.',
        preco: 'R$ 16,00',
        emoji: '🍔'
    },
    {
        id: 14,
        nome: 'X-Calabresa',
        categoria: 'hamburguer',
        descricao: 'Pão, bife de hamburguer, mussarela, linguiça calabresa, alface, tomate e batata palha.',
        preco: 'R$ 15,00',
        emoji: '🍔'
    },
    {
        id: 15,
        nome: 'X-Egg Bacon',
        categoria: 'hamburguer',
        descricao: 'Pão, bife de hamburguer, mussarela, ovo, bacon, alface, tomate e batata palha.',
        preco: 'R$ 18,00',
        emoji: '🍔'
    },
    {
        id: 16,
        nome: 'X-Tudo',
        categoria: 'hamburguer',
        descricao: 'Pão, 2 bifes de hamburguer, mussarela, ovo, bacon, alface, tomate e batata palha.',
        preco: 'R$ 22,00',
        emoji: '🍔'
    },
    // LANCHES - Frango
    {
        id: 17,
        nome: 'X-Frango',
        categoria: 'hamburguer',
        descricao: 'Pão, filé de frango, mussarela, alface, tomate e batata palha.',
        preco: 'R$ 16,00',
        emoji: '🍔'
    },
    {
        id: 18,
        nome: 'X-Frango Presunto',
        categoria: 'hamburguer',
        descricao: 'Pão, filé de frango, mussarela, presunto, alface, tomate e batata palha.',
        preco: 'R$ 17,00',
        emoji: '🍔'
    },
    {
        id: 19,
        nome: 'X-Frango Egg',
        categoria: 'hamburguer',
        descricao: 'Pão, filé de frango, mussarela, ovo, alface, tomate e batata palha.',
        preco: 'R$ 17,00',
        emoji: '🍔'
    },
    {
        id: 20,
        nome: 'X-Frango Bacon',
        categoria: 'hamburguer',
        descricao: 'Pão, filé de frango, mussarela, bacon, alface, tomate e batata palha.',
        preco: 'R$ 19,00',
        emoji: '🍔'
    },
    {
        id: 21,
        nome: 'X-Frango Calabresa',
        categoria: 'hamburguer',
        descricao: 'Pão, filé de frango, mussarela, linguiça calabresa, alface, tomate e batata palha.',
        preco: 'R$ 17,00',
        emoji: '🍔'
    },
    {
        id: 22,
        nome: 'X-Frango Tudo',
        categoria: 'hamburguer',
        descricao: 'Pão, filé de frango, mussarela, presunto, ovo, bacon, alface, tomate e batata palha.',
        preco: 'R$ 22,00',
        emoji: '🍔'
    },
    // LANCHES - Hambúrguer & Filé de Frango
    {
        id: 23,
        nome: 'X-Franboi',
        categoria: 'hamburguer',
        descricao: 'Pão, bife de hamburguer, filé de frango, mussarela, alface, tomate e batata palha.',
        preco: 'R$ 18,00',
        emoji: '🍔'
    },
    {
        id: 24,
        nome: 'X-Tudo Misto',
        categoria: 'hamburguer',
        descricao: 'Pão, bife de hamburguer, filé de frango, presunto, mussarela, ovo, bacon, alface, tomate e batata palha.',
        preco: 'R$ 24,00',
        emoji: '🍔'
    },
    {
        id: 25,
        nome: 'X-Gulosinho',
        categoria: 'hamburguer',
        descricao: 'Pão, bife de hamburguer, filé de frango, presunto, mussarela, ovo, bacon, calabresa, alface, tomate e batata palha.',
        preco: 'R$ 27,00',
        emoji: '🍔'
    },
    {
        id: 26,
        nome: 'X-Guloso',
        categoria: 'hamburguer',
        descricao: 'Pão, 2 bifes de hamburguer, filé de frango, presunto, mussarela, ovo, bacon, calabresa, alface, tomate e batata palha.',
        preco: 'R$ 30,00',
        emoji: '🍔'
    },
    {
        id: 27,
        nome: 'Da Casa',
        categoria: 'hamburguer',
        descricao: 'Pão, 2 bifes de hamburguer, filé de frango, presunto, mussarela, ovo, bacon, calabresa, lombo defumado, catupiry, alface, tomate e batata palha.',
        preco: 'R$ 39,00',
        emoji: '🍔'
    },
    // Pizzas
    {
        id: 28,
        nome: 'Mista',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 42,00',
            grande: 'R$ 46,00',
            familia: 'R$ 50,00'
        },
        emoji: '🍕'
    },
    {
        id: 29,
        nome: 'Atum',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 44,00',
            grande: 'R$ 48,00',
            familia: 'R$ 52,00'
        },
        emoji: '🍕'
    },
    {
        id: 30,
        nome: 'Frango',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 43,00',
            grande: 'R$ 47,00',
            familia: 'R$ 51,00'
        },
        emoji: '🍕'
    },
    {
        id: 31,
        nome: 'Frango c/ Catupiry',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 47,00',
            grande: 'R$ 51,00',
            familia: 'R$ 55,00'
        },
        emoji: '🍕'
    },
    {
        id: 32,
        nome: 'Bacon',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 44,00',
            grande: 'R$ 48,00',
            familia: 'R$ 52,00'
        },
        emoji: '🍕'
    },
    {
        id: 33,
        nome: 'Bacon c/ Ovo',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 46,00',
            grande: 'R$ 50,00',
            familia: 'R$ 54,00'
        },
        emoji: '🍕'
    },
    {
        id: 34,
        nome: 'Calabresa',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 43,00',
            grande: 'R$ 47,00',
            familia: 'R$ 51,00'
        },
        emoji: '🍕'
    },
    {
        id: 35,
        nome: 'Calabresa c/ Catupiry',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 47,00',
            grande: 'R$ 51,00',
            familia: 'R$ 55,00'
        },
        emoji: '🍕'
    },
    {
        id: 36,
        nome: 'Lombo Defumado',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 45,00',
            grande: 'R$ 49,00',
            familia: 'R$ 53,00'
        },
        emoji: '🍕'
    },
    {
        id: 37,
        nome: 'Da Casa',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 46,00',
            grande: 'R$ 50,00',
            familia: 'R$ 54,00'
        },
        emoji: '🍕'
    },
    {
        id: 38,
        nome: 'Marguerita',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 46,00',
            grande: 'R$ 50,00',
            familia: 'R$ 54,00'
        },
        emoji: '🍕'
    },
    {
        id: 39,
        nome: 'Teixeira',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 48,00',
            grande: 'R$ 52,00',
            familia: 'R$ 56,00'
        },
        emoji: '🍕'
    },
    {
        id: 40,
        nome: 'Lombo Def. c/ Catupiry',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 50,00',
            grande: 'R$ 54,00',
            familia: 'R$ 58,00'
        },
        emoji: '🍕'
    },
    {
        id: 41,
        nome: '4 Queijos',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 50,00',
            grande: 'R$ 54,00',
            familia: 'R$ 58,00'
        },
        emoji: '🍕'
    },
    {
        id: 42,
        nome: 'A Moda',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 50,00',
            grande: 'R$ 54,00',
            familia: 'R$ 58,00'
        },
        emoji: '🍕'
    },
    {
        id: 43,
        nome: 'Portuguesa',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 50,00',
            grande: 'R$ 54,00',
            familia: 'R$ 58,00'
        },
        emoji: '🍕'
    },
    {
        id: 44,
        nome: 'Do Chefe',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 52,00',
            grande: 'R$ 56,00',
            familia: 'R$ 60,00'
        },
        emoji: '🍕'
    },
    {
        id: 45,
        nome: 'Gulosa',
        categoria: 'pizza',
        tamanhos: {
            media: 'R$ 60,00',
            grande: 'R$ 64,00',
            familia: 'R$ 68,00'
        },
        emoji: '🍕'
    },
    // Bebidas
    {
        id: 46,
        nome: 'Guaramil de copo',
        categoria: 'bebida',
        descricao: 'Uva ou Açaí',
        preco: 'R$ 2,50',
        emoji: '🥤'
    },
    {
        id: 47,
        nome: 'Refri Pitulinha (200ml)',
        categoria: 'bebida',
        descricao: 'Vários sabores',
        preco: 'R$ 3,00',
        emoji: '🥤'
    },
    {
        id: 48,
        nome: 'Refrigerante lata (350ml)',
        categoria: 'bebida',
        descricao: 'Vários sabores',
        preco: 'R$ 6,00',
        emoji: '🥤'
    },
    {
        id: 49,
        nome: 'Refrigerante 600ml',
        categoria: 'bebida',
        descricao: 'Vários sabores',
        preco: 'R$ 8,00',
        emoji: '🥤'
    },
    {
        id: 50,
        nome: 'Suco Tial 1L',
        categoria: 'bebida',
        descricao: 'Vários sabores',
        preco: 'R$ 11,00',
        emoji: '🧃'
    },
    {
        id: 51,
        nome: 'Sukita Uva / Sukita Laranja / Kuat (2L)',
        categoria: 'bebida',
        descricao: 'Refrigerante de 2 Litros',
        preco: 'R$ 11,00',
        emoji: '🥤'
    },
    {
        id: 52,
        nome: 'Coca-Cola / Antárctica (2L)',
        categoria: 'bebida',
        descricao: 'Refrigerante de 2 Litros',
        preco: 'R$ 15,00',
        emoji: '🥤'
    },
    // MOLHOS E ACRÉSCIMOS
    {
        id: 53,
        nome: 'Bisnaga + molho',
        categoria: 'acrescimo',
        descricao: 'Molhos da casa',
        preco: 'R$ 10,00',
        emoji: '🧴'
    },
    {
        id: 54,
        nome: 'Encher bisnaga',
        categoria: 'acrescimo',
        descricao: 'Molhos da casa',
        preco: 'R$ 7,00',
        emoji: '🧴'
    },
    {
        id: 55,
        nome: 'Meio saquinho de chup-chup',
        categoria: 'acrescimo',
        descricao: 'Molhos da casa',
        preco: 'R$ 2,50',
        emoji: '🧴'
    },
    {
        id: 56,
        nome: 'Saquinho de chup-chup inteiro',
        categoria: 'acrescimo',
        descricao: 'Molhos da casa',
        preco: 'R$ 4,00',
        emoji: '🧴'
    },
    {
        id: 57,
        nome: 'Milho',
        categoria: 'acrescimo',
        descricao: 'Acréscimos',
        preco: 'R$ 1,00',
        emoji: '🌽'
    },
    {
        id: 58,
        nome: 'Mussarela / Presunto / Calabresa / Catupiry ou Cheddar',
        categoria: 'acrescimo',
        descricao: 'Acréscimos',
        preco: 'R$ 4,00',
        emoji: '🧀'
    },
    {
        id: 59,
        nome: 'Ovo (und.)',
        categoria: 'acrescimo',
        descricao: 'Acréscimos',
        preco: 'R$ 2,00',
        emoji: '🥚'
    },
    {
        id: 60,
        nome: 'Bife de hamburguer (und.)',
        categoria: 'acrescimo',
        descricao: 'Acréscimos',
        preco: 'R$ 4,00',
        emoji: '🍖'
    },
    {
        id: 61,
        nome: 'Filé de frango (und.)',
        categoria: 'acrescimo',
        descricao: 'Acréscimos',
        preco: 'R$ 6,00',
        emoji: '🍗'
    },
    {
        id: 62,
        nome: 'Bacon ou lombo defumado',
        categoria: 'acrescimo',
        descricao: 'Acréscimos',
        preco: 'R$ 6,00',
        emoji: '🥓'
    }
    ,
    // Mini Pizzas
    {
        id: 63,
        nome: 'Mini Pizza Mista',
        categoria: 'pizza',
        descricao: 'Mini tamanho',
        preco: 'R$ 12,00',
        mini: true,
        emoji: '🍕'
    },
    {
        id: 64,
        nome: 'Mini Pizza Calabresa',
        categoria: 'pizza',
        descricao: 'Mini tamanho',
        preco: 'R$ 12,00',
        mini: true,
        emoji: '🍕'
    },
    {
        id: 65,
        nome: 'Mini Pizza Mussarela',
        categoria: 'pizza',
        descricao: 'Mini tamanho',
        preco: 'R$ 12,00',
        mini: true,
        emoji: '🍕'
    },
    {
        id: 66,
        nome: 'Mini Pizza Misturada',
        categoria: 'pizza',
        descricao: 'Mini tamanho',
        preco: 'R$ 14,00',
        mini: true,
        emoji: '🍕'
    }
];

// Função para renderizar os cards
function renderizarCardapio(filtro = 'todos') {
    const container = document.getElementById('cardapioGrid');
    container.innerHTML = '';

    const itemsFiltrados = filtro === 'todos'
        ? cardapioItems
        : cardapioItems.filter(item => item.categoria === filtro);

    // Função auxiliar para criar o card de um item
    function createCard(item) {
        const card = document.createElement('div');
        card.className = 'cardapio-item';

        const categoryToImage = {
            artesanal: 'hamburguer.jpg',
            hamburguer: 'hamburguer.jpg',
            pizza: 'pizza.jpg',
            bebida: 'bebida.png',
            acrescimo: 'acrescimo.svg'
        };

        const imageFile = categoryToImage[item.categoria] || `${item.categoria || 'default'}.svg`;

        if (item.tamanhos) {
            card.innerHTML = `
                <div class="item-imagem"><img src="../imagens/${imageFile}" alt="${item.nome}"></div>
                <div class="item-conteudo">
                    <span class="item-categoria">${item.categoria.toUpperCase()}</span>
                    <h3 class="item-nome">${item.nome}</h3>
                    <div class="item-tamanhos">
                        <div class="tamanho-linha">
                            <span class="tamanho-label">Média:</span>
                            <span class="tamanho-preco">${item.tamanhos.media}</span>
                        </div>
                        <div class="tamanho-linha">
                            <span class="tamanho-label">Grande:</span>
                            <span class="tamanho-preco">${item.tamanhos.grande}</span>
                        </div>
                        <div class="tamanho-linha">
                            <span class="tamanho-label">Família:</span>
                            <span class="tamanho-preco">${item.tamanhos.familia}</span>
                        </div>
                    </div>
                    <div class="item-footer">
                        <button class="btn-pedir" onclick="pedirNoWhatsApp('${item.nome}', 'Escolha um tamanho')">
                            Pedir
                        </button>
                    </div>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div class="item-imagem"><img src="../imagens/${imageFile}" alt="${item.nome}"></div>
                <div class="item-conteudo">
                    <span class="item-categoria">${item.categoria.toUpperCase()}</span>
                    <h3 class="item-nome">${item.nome}</h3>
                    <p class="item-descricao">${item.descricao}</p>
                    <div class="item-footer">
                        <span class="item-preco">${item.preco}</span>
                        <button class="btn-pedir" onclick="pedirNoWhatsApp('${item.nome}', '${item.preco}')">
                            Pedir
                        </button>
                    </div>
                </div>
            `;
        }

        return card;
    }

    // Se for a aba de pizzas, separar mini pizzas e posicioná-las abaixo com um separador
    if (filtro === 'pizza') {
        const grandes = itemsFiltrados.filter(i => !i.mini);
        const minis = itemsFiltrados.filter(i => i.mini);

        grandes.forEach(item => container.appendChild(createCard(item)));

        if (minis.length > 0) {
            const separador = document.createElement('div');
            separador.className = 'mini-separator';
            separador.innerHTML = `<h2 class="mini-titulo">🍕 Mini Pizza</h2>`;
            container.appendChild(separador);

            minis.forEach(item => container.appendChild(createCard(item)));
        }
    } else {
        itemsFiltrados.forEach(item => container.appendChild(createCard(item)));
    }
}

// Função para abrir WhatsApp com a mensagem
function pedirNoWhatsApp(nomeProduto, preco) {
    const mensagem = `Olá! Gostaria de pedir: ${nomeProduto} (${preco})`;
    const whatsappURL = `https://wa.me/5532987109337?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappURL, '_blank');
}

// Event listeners dos filtros
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar cardápio inicial
    renderizarCardapio();

    // Adicionar listeners aos botões de filtro
    const botoesFiltro = document.querySelectorAll('.filtro-btn');
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remover classe ativa de todos os botões
            botoesFiltro.forEach(b => b.classList.remove('ativo'));

            // Adicionar classe ativa ao botão clicado
            botao.classList.add('ativo');

            // Filtrar cardápio
            const filtro = botao.getAttribute('data-filtro');
            renderizarCardapio(filtro);
        });
    });

    // Verificar se há um filtro na URL (vindo da página inicial)
    const urlParams = new URLSearchParams(window.location.search);
    const filtroURL = urlParams.get('filtro');
    if (filtroURL) {
        // Encontrar e ativar o botão de filtro correspondente
        const botaoFiltro = document.querySelector(`.filtro-btn[data-filtro="${filtroURL}"]`);
        if (botaoFiltro) {
            // Remover classe ativa de todos os botões
            botoesFiltro.forEach(b => b.classList.remove('ativo'));

            // Ativar o botão correspondente
            botaoFiltro.classList.add('ativo');

            // Aplicar o filtro
            renderizarCardapio(filtroURL);
        }
    }
});

// Botão Voltar ao Topo
const botaoTopo = document.getElementById('botaoTopo');

// Mostrar/ocultar botão ao fazer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        botaoTopo.classList.add('ativo');
    } else {
        botaoTopo.classList.remove('ativo');
    }
});

// Voltar ao topo ao clicar
botaoTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});