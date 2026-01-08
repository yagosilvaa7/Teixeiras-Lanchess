// HORÁRIO DE FUNCIONAMENTO
const horaAtual = new Date().getHours();
const status = document.getElementById("status");

if (horaAtual >= 19 && horaAtual <= 23.59) {
  status.textContent = "🟢 Estamos abertos! Faça seu pedido";
} else {
  status.textContent = "🔴 Estamos fechados no momento";
}

// PRODUTOS
const produtos = [
  {
    nome: "Hamburguer",
    preco: "R$ 14,00",
    imagem: "imagens/hamburguer.jpg"
  },
  {
    nome: "Pizza",
    preco: "R$ 39,90",
    imagem: "imagens/pizza.jpg"
  },
  {
    nome: "Combo",
    preco: "R$ 59,90", 
    imagem: "imagens/combo.jpg"
  }
];

const cards = document.getElementById("cards");

// CRIA OS CARDS AUTOMATICAMENTE
produtos.forEach(produto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${produto.imagem}">
    <h3>${produto.nome}</h3>
    <p>${produto.preco}</p>
    <a class="btn" href="https://wa.me/5532987109337?text=Quero%20pedir%20${produto.nome}" target="_blank">
      Pedir agora
    </a>
  `;

  cards.appendChild(card);
});
