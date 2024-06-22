document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const toggleThemeButton = document.getElementById('toggleTheme');
    const body = document.body;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
        const provincia = document.getElementById('provincia').value.trim();

        if (!nombre || !apellido || !email || !fechaNacimiento || !provincia) {
            alert('Todos los campos son obligatorios.');
        } else {
            alert('Formulario enviado con éxito.');
            form.reset();
        }
    });

    toggleThemeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});
