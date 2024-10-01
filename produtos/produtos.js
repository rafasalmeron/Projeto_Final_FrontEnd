const produtos = [
  {
    id: 1,
    nome: "Aff...",
    preco: 999,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Aff.jpeg",
  },
  {
    id: 2,
    nome: "Você Brocha?",
    preco: 799,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/brocha.jpg",
  },
  {
    id: 3,
    nome: "Cadeirada Sinistra",
    preco: 499,
    raridade: "Comum",
    disponibilidade: "Fora de Estoque",
    imagem: "../assets/cartas/cadeirada.jpeg",
  },
  {
    id: 4,
    nome: "Cat Die",
    preco: 599,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Catdie.jpeg",
  },
  {
    id: 5,
    nome: "Encontro Serratec",
    preco: 899,
    raridade: "Épico",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/EncontroSerratec.jpeg",
  },
  {
    id: 6,
    nome: "Era pra rir",
    preco: 1299,
    raridade: "Lendário",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/eraprarir.jpeg",
  },
  {
    id: 7,
    nome: "Leve Isto",
    preco: 299,
    raridade: "Comum",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Leveisto.jpeg",
  },
  {
    id: 8,
    nome: "Fight Pós Seita",
    preco: 349,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/FightPósSeita.jpeg",
  },
  {
    id: 9,
    nome: "Macaco Danado",
    preco: 699,
    raridade: "Épico",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Macacodanado.jpeg",
  },
  {
    id: 10,
    nome: "Macaco Feliz",
    preco: 399,
    raridade: "Comum",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/MacacoFeliz.jpeg",
  },
  {
    id: 11,
    nome: "Macaco Flamengo",
    preco: 549,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Macacoflamengo.jpeg",
  },
  {
    id: 12,
    nome: "Macaco Sério",
    preco: 799,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Macacosério.jpeg",
  },
  {
    id: 13,
    nome: "Macaco Triste",
    preco: 799,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Macacotriste.jpeg",
  },
  {
    id: 14,
    nome: "Mouse Hunter(Caça Rato Flávio)",
    preco: 799,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/MouseHunter.jpeg",
  },
  {
    id: 15,
    nome: "Narutoisdie",
    preco: 1500,
    raridade: "Lendário",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Narutoisdie.jpeg",
  },
  {
    id: 16,
    nome: "Nem Ri",
    preco: 799,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/nemri.jpeg",
  },
  {
    id: 17,
    nome: "Paia",
    preco: 799,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Paia.jpeg",
  },
  {
    id: 18,
    nome: "Exódia Perna Direita",
    preco: 99999,
    raridade: "Lendário",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/PernadireitadeJoão.jpeg",
  },
  {
    id: 19,
    nome: "Exódia Perna Esquerda",
    preco: 99999,
    raridade: "Lendário",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/PernaesquerdadePatrick.jpeg",
  },
  {
    id: 20,
    nome: "Exódia Braço Direito",
    preco: 99999,
    raridade: "Lendário",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/BraçodireitodeRafael.jpeg",
  },
  {
    id: 21,
    nome: "Exódia Braço Esquerdo",
    preco: 99999,
    raridade: "Lendário",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/BraçoesquerdodeDaiane.jpeg",
  },
  {
    id: 22,
    nome: "PikaretaChu",
    preco: 799,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Pikaretachu.jpeg",
  },
  {
    id: 23,
    nome: "Exódia Hydra Cabeça",
    preco: 799,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/RafaelOEXODIAHIDRA.jpeg",
  },
  {
    id: 24,
    nome: "Professor",
    preco: 8000,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Professor.jpeg",
  },
  {
    id: 25,
    nome: "Ratao",
    preco: 3000,
    raridade: "Mascote",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/ratao.jpg",
  },
  {
    id: 26,
    nome: "RJ",
    preco: 1500000000,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/RJ.jpeg",
  },
  {
    id: 27,
    nome: "Seita Felina",
    preco: 799,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Seitafelina.jpeg",
  },
  {
    id: 28,
    nome: "Semana Concluída",
    preco: 799,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Semanaconcluída.jpeg.png",
  },
  {
    id: 29,
    nome: "Terça Feira Meus Bacanos",
    preco: 799,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/terca.jpeg",
  },
  {
    id: 30,
    nome: "Viajante",
    preco: 799,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Viajante.jpeg",
  },
  {
    id: 31,
    nome: "ValdeMoraes",
    preco: 50000,
    raridade: "Rara",
    disponibilidade: "Em Estoque",
    imagem: "../assets/cartas/Xandao.jpeg",
  },
];
