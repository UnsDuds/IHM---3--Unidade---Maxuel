document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedbackForm");

    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita o envio padrão do formulário

        const name = document.getElementById("uname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const satisfaction = document.querySelector('input[name="satisfy"]:checked').value;
        const message = document.getElementById("msg").value.trim();

        // Validação simples
        if (!name || !email || !phone || !message) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Dados para o EmailJS
        const templateParams = {
            user_name: name,
            user_email: email,
            user_phone: phone,
            user_satisfaction: satisfaction,
            user_message: message,
        };

        // Enviar e-mail via EmailJS
        emailjs
            .send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", templateParams)
            .then(() => {
                alert("Feedback enviado com sucesso!");
                feedbackForm.reset(); // Limpa o formulário
            })
            .catch((error) => {
                console.error("Erro ao enviar o feedback:", error);
                alert("Erro ao enviar o feedback. Tente novamente.");
            });
    });
});
