// public/scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      const nameInput = document.getElementById('name');
      if (nameInput.value.trim() === '') {
        alert('O nome não pode estar vazio.');
        event.preventDefault(); // Impede o envio do formulário
      }
    });
  });
  