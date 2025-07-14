document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".ramo");

  // Deshabilita todos los ramos con prerrequisitos al inicio
  botones.forEach(btn => {
    if (btn.dataset.prerreq) {
      btn.disabled = true;
    }
  });

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;

      btn.classList.add("aprobado");
      btn.disabled = true;

      const id = btn.dataset.id;

      // Buscar todos los ramos que tienen este como prerrequisito
      botones.forEach(otherBtn => {
        const prerreq = otherBtn.dataset.prerreq;
        if (prerreq === id) {
          otherBtn.disabled = false;
        }
      });
    });
  });
});
