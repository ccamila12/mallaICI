
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
        {
            nivel: 3,
            asignaturas: [
                "CÁLCULO III",
                "FÍSICA GENERAL",
                "PROGRAMACIÓN PARA INGENIERÍA",
                "ECUACIONES DIFERENCIALES",
                "AUTOGESTIÓN DEL APRENDIZAJE",
                "IDIOMA EXTRANJERO III"
            ]
        },
        {
            nivel: 4,
            asignaturas: [
                "FUNDAMENTOS DE FLUIDOS Y TERMODINÁMICA",
                "TALLER DE ANÁLISIS NUMÉRICO",
                "SISTEMAS DE OPERACIONES",
                "PROBABILIDADES Y ESTADÍSTICA",
                "TRABAJO EN EQUIPO Y DESARROLLO DE HABILIDADES SOCIALES",
                "IDIOMA EXTRANJERO IV",
                "DEPORTE II"
            ]
        },
        {
            nivel: 5,
            asignaturas: [
                "ELECTRICIDAD Y MAGNETISMO",
                "MODELOS DE INVESTIGACIÓN DE OPERACIONES",
                "ESTADÍSTICA INDUSTRIAL",
                "GESTIÓN DE RECURSOS HUMANOS",
                "COMPRENSIÓN DE CONTEXTOS SOCIALES",
                "IDIOMA EXTRANJERO V"
            ]
        },
        {
            nivel: 6,
            asignaturas: [
                "ANÁLISIS ECONÓMICO",
                "PROGRAMACIÓN MATEMÁTICA",
                "MODELOS ESTOCÁSTICOS Y SIMULACIÓN",
                "FUNDAMENTOS DE INGENIERÍA DE PROCESOS",
                "COMPRENSIÓN DE CONTEXTOS CULTURALES",
                "IDIOMA EXTRANJERO VI"
            ]
        },
        {
            nivel: 7,
            asignaturas: [
                "INGENIERÍA ECONÓMICA Y EVALUACIÓN DE PROYECTOS",
                "MARKETING TÁCTICO Y OPERATIVO",
                "DISEÑO DE SISTEMAS DE OPERACIONES",
                "TECNOLOGÍAS DE INFORMACIÓN",
                "PROCESOS Y EQUIPOS INDUSTRIALES I",
                "ÉTICA Y RESPONSABILIDAD SOCIAL"
            ]
        },
        {
            nivel: 8,
            asignaturas: [
                "INGENIERÍA FINANCIERA",
                "GESTIÓN DE PROYECTOS",
                "PLANIFICACIÓN Y GESTIÓN DE LAS OPERACIONES",
                "PROCESOS Y EQUIPOS INDUSTRIALES II",
                "PROYECTO DE LICENCIATURA",
                "RESPONSABILIDAD SOCIAL"
            ]
        },
        {
            nivel: 9,
            asignaturas: [
                "DISEÑO DE SISTEMAS DE COSTEO",
                "PROYECTO DE DISEÑO DE SISTEMAS DE OPERACIONES",
                "GESTIÓN DE LA CADENA DE ABASTECIMIENTO",
                "GESTIÓN DE LA INNOVACIÓN Y EMPRENDIMIENTO",
                "GESTIÓN AMBIENTAL Y ENERGÉTICA",
                "ELECTIVO I"
            ]
        },
        {
            nivel: 10,
            asignaturas: [
                "ESTRATEGIA Y CONTROL DE GESTIÓN",
                "PROYECTO DE DISEÑO DE SISTEMAS DE PLANIFICACIÓN DE OPERACIONES",
                "PROYECTO DE APLICACIÓN TECNOLÓGICA",
                "MEJORAMIENTO CONTINUO",
                "ELECTIVO II",
                "ELECTIVO III"
            ]
        },
        {
            nivel: 11,
            asignaturas: [
                "PROYECTO DE TÍTULO",
                "ELECTIVO IV"
            ]
        },
        {
            nivel: 99,
            asignaturas: [
                "PRÁCTICA PROFESIONAL I",
                "PRÁCTICA PROFESIONAL II"
            ]
        }
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
            col.appendChild(ramo);
        });

        container.appendChild(col);
    });
});
