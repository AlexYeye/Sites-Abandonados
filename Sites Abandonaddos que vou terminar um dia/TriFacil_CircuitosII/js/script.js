// Função para atualizar o conteúdo de block01 com base nos valores do formulário
function atualizarConteudoBlock01() {
    // Obtenha os valores selecionados nos campos de rádio
    const geradorTipo = document.querySelector('input[name="geradorTipo"]:checked').value;
    const geradorForma = document.querySelector('input[name="geradorforma"]:checked').value;
    const cargaTipo = document.querySelector('input[name="cargaTipo"]:checked').value;
    const cargaForma = document.querySelector('input[name="cargaForma"]:checked').value;

    // Crie um novo formulário com base nos valores selecionados
    const novoFormulario = `
        <h3>Novo Formulário</h3>
        <form>
            <div class="input-container">
                <p>Valor Va:</p>
                <input type="text" name="va">
                <p>Valor Vb:</p>
                <input type="text" name="vb">
                <p>Valor Vc:</p>
                <input type="text" name="vc">
                <p>Valor Vab:</p>
                <input type="text" name="vab">
                <p>Valor Vbc:</p>
                <input type="text" name="vbc">
                <p>Valor Vca:</p>
                <input type="text" name="vca">
            </div>
        </form>
    `;

    // Atualize o conteúdo de block01 com o novo formulário
    document.querySelector('.block01').innerHTML = novoFormulario;
}

// Adicione um ouvinte de evento para o botão de envio
document.querySelector('input[name="acao"]').addEventListener('click', function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    atualizarConteudoBlock01(); // Atualiza o conteúdo de block01
});