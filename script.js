// HORÁRIO DE FUNCIONAMENTO
const horaAtual = new Date().getHours();
const status = document.getElementById("status");

if (horaAtual >= 19 && horaAtual <= 23) {
  status.textContent = "🟢 Estamos abertos! Faça seu pedido";
} else {
  status.textContent = "🔴 Estamos fechados no momento";
}

// PRODUTOS
const produtos = [
  {
    nome: "Hamburguer",
    preco: "R$ 14,00",
    imagem: "imagens/hamburguer.jpg",
    categoria: "hamburguer"
  },
  {
    nome: "Pizza",
    preco: "R$ 42,00",
    imagem: "imagens/pizza.jpg",
    categoria: "pizza"
  },
  {
    nome: "Bebida",
    preco: "R$ 2,50",
    imagem: "imagens/bebida.png",
    categoria: "bebida"
  }
];

const cards = document.getElementById("cards");

// CRIA OS CARDS AUTOMATICAMENTE (com botão de detalhes)
produtos.forEach(produto => {
  const card = document.createElement("div");
  card.classList.add("card", "reveal");
  card.dataset.nome = produto.nome;
  card.dataset.preco = produto.preco;
  card.dataset.imagem = produto.imagem;

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <p>A partir de ${produto.preco}</p>
    <div class="card-actions">
      <a class="btn" href="https://wa.me/553232161906?text=Quero%20pedir%20${encodeURIComponent(produto.nome)}" target="_blank">
        Pedir agora
      </a>
      <button class="btn details">Ver detalhes</button>
    </div>
  `;

  cards.appendChild(card);

  // Redirecionar para cardápio com filtro baseado na categoria
  card.querySelector('.details').addEventListener('click', (e) => {
    e.stopPropagation();
    // Mapeamento de categorias para os filtros do cardápio
    const filtroMap = {
      'hamburguer': 'hamburguer',
      'pizza': 'pizza',
      'bebida': 'bebida'
    };
    const filtro = filtroMap[produto.categoria] || 'todos';
    window.location.href = `pages/cardapio.html?filtro=${filtro}`;
  });
});

// Modal de produto
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalOrder = document.getElementById('modalOrder');
const modalClose = document.getElementById('modalClose');

function openModal(produto) {
  modalImage.src = produto.imagem;
  modalTitle.textContent = produto.nome;
  modalPrice.textContent = produto.preco;
  modalOrder.href = `https://wa.me/553232161906?text=Quero%20pedir%20${encodeURIComponent(produto.nome)}`;
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// Smooth scroll via JS fallback
document.documentElement.style.scrollBehavior = 'smooth';

// Botão voltar ao topo
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(r => io.observe(r));

// MENU HAMBÚRGUER - MOBILE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  const isActive = navMenu.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
});

// Fechar menu ao clicar em um link
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Fechar menu automaticamente ao redimensionar para desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// Adicionar sombra ao header quando rolar para baixo
const headerEl = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) headerEl.classList.add('scrolled');
  else headerEl.classList.remove('scrolled');
});
