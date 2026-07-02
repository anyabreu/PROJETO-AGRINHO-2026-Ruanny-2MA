/* ==========================================================================
   Controlo de Acessibilidade - Consciência Verde
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const btnContrast = document.getElementById('toggle-contrast');
    const btnIncrease = document.getElementById('increase-font');
    const btnReset = document.getElementById('reset-font');

    // 1. Alternância de Alto Contraste
    btnContrast.addEventListener('click', () => {
        // Ativa ou desativa a classe que altera as cores no CSS
        body.classList.toggle('high-contrast');
        
        // Verifica se o modo está ativo para atualizar os leitores de ecrã
        const hasContrast = body.classList.contains('high-contrast');
        
        // ATRIBUTO ARIA: Informa o estado (ativado/desativado) ao leitor de voz
        btnContrast.setAttribute('aria-pressed', hasContrast);
    });

    // 2. Aumento Progressivo do Texto (A+)
    btnIncrease.addEventListener('click', () => {
        // Se o texto estiver no tamanho normal, muda para Grande
        if (!body.classList.contains('font-large') && !body.classList.contains('font-xlarge')) {
            body.classList.add('font-large');
        } 
        // Se já estiver Grande, muda para Muito Grande
        else if (body.classList.contains('font-large')) {
            body.classList.remove('font-large');
            body.classList.add('font-xlarge');
        }
    });

    // 3. Restaurar Tamanho Padrão (A-)
    btnReset.addEventListener('click', () => {
        // Remove as classes de ampliação, voltando ao tamanho base (16px)
        body.classList.remove('font-large', 'font-xlarge');
    });
});
