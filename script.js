// Lista de emojis interativos sobre agro e sustentabilidade
const emojisAgro = ['🌱', '🚜', '☀️', '🌍', '🌽', '🌳', '💧'];
let indiceAtual = 0;

// Seleciona o elemento do emoji na tela
const iconeAgro = document.querySelector('.icone-agro');
const circuloAnimado = document.querySelector('.circulo-animado');

// Função para mudar o emoji ao clicar
circuloAnimado.addEventListener('click', () => {
    // Avança para o próximo emoji da lista
    indiceAtual = (indiceAtual + 1) % emojisAgro.length;
    
    // Aplica uma pequena animação de rotação ao trocar
    iconeAgro.style.transform = 'scale(0)';
    
    setTimeout(() => {
        iconeAgro.textContent = emojisAgro[indiceAtual];
        iconeAgro.style.transform = 'scale(1)';
        iconeAgro.style.transition = 'transform 0.2s ease';
    }, 200);
});