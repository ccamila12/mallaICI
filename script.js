document.addEventListener("DOMContentLoaded", () => {
    const malla = [
        {
            nivel: 1,
            asignaturas: [
                "CÁLCULO I",
                "ÁLGEBRA",
                "QUÍMICA GENERAL Y ORGÁNICA",
                "LA INGENIERÍA INDUSTRIAL",
                "COMUNICACIÓN ORAL Y ESCRITA I",
                "IDIOMA EXTRANJERO I"
            ]
        },
        {
            nivel: 2,
            asignaturas: [
                "CÁLCULO II",
                "ÁLGEBRA LINEAL",
                "SOLUCIÓN ALGORÍTMICA DE PROBLEMAS",
                "FUNDAMENTOS DE ADMINISTRACIÓN",
                "COMUNICACIÓN ORAL Y ESCRITA II",
                "IDIOMA EXTRANJERO II",
                "DEPORTE I"
            ]
        },
        // Agrega aquí los niveles restantes igual que antes...
    ];

    const container = document.getElementById("malla-container");

    malla.forEach(sem => {
        const col = document.createElement("div");
        col.className = "semestre";
        const title = document.createElement("h3");
        title.textContent = `Nivel ${sem.nivel}`;
        col.appendChild(title);

        sem.asignaturas.forEach(asig => {
            const ramo = document.createElement("div");
            ramo.className = "ramo";
            ramo.textContent = asig;

            // Acción al hacer clic
            ramo.addEventListener("click", () => {
                ramo.classList.toggle("completado");
            });

            col.appendChild(ramo);
        });

        container.appendChild(col);
    });
});
