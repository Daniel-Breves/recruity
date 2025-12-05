document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos da Etapa 1
    const nextButton = document.getElementById('companies-next-button');
    const stepOne = document.getElementById('step-one');
    const companyNameInput = document.getElementById('company-name');
    const companyTokenInput = document.getElementById('company-token');

    // 2. Elementos da Etapa 2
    const stepTwo = document.getElementById('step-two');
    const backButton = document.getElementById('back-button');
    const formStepTwo = document.getElementById('form-step-two');

    // 3. Função para Avançar (Next)
    nextButton.addEventListener('click', () => {
        // Validação simples (apenas para demonstração)
        if (companyNameInput.value.trim() === "" || companyTokenInput.value.trim() === "") {
            alert("Please fill in both fields.");
            return; 
        }

        // Passa para a Etapa 2
        stepOne.classList.add('hidden');
        stepTwo.classList.remove('hidden');

        // Opcional: Anexa os dados da Etapa 1 como campos ocultos no Formulário 2 (para envio ao PHP)
        formStepTwo.innerHTML += `
            <input type="hidden" name="company_name" value="${companyNameInput.value}">
            <input type="hidden" name="company_token" value="${companyTokenInput.value}">
        `;
    });

    // 4. Função para Voltar (Back)
    backButton.addEventListener('click', () => {
        // Volta para a Etapa 1
        stepTwo.classList.add('hidden');
        stepOne.classList.remove('hidden');
        
        // Remove os campos ocultos para evitar duplicatas se o usuário clicar em Next novamente
        const hiddenFields = formStepTwo.querySelectorAll('input[type="hidden"]');
        hiddenFields.forEach(field => field.remove());
    });
});