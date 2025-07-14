
document.addEventListener("DOMContentLoaded", () => {
    const malla = [
        { nivel: 1, asignaturas: [
            { nombre: "CÁLCULO I" },
            { nombre: "ÁLGEBRA" },
            { nombre: "QUÍMICA GENERAL Y ORGÁNICA" },
            { nombre: "LA INGENIERÍA INDUSTRIAL" },
            { nombre: "COMUNICACIÓN ORAL Y ESCRITA I" },
            { nombre: "IDIOMA EXTRANJERO I" }
        ]},
        { nivel: 2, asignaturas: [
            { nombre: "CÁLCULO II", prereq: ["CÁLCULO I"] },
            { nombre: "ÁLGEBRA LINEAL", prereq: ["ÁLGEBRA"] },
            { nombre: "SOLUCIÓN ALGORÍTMICA DE PROBLEMAS" },
            { nombre: "FUNDAMENTOS DE ADMINISTRACIÓN", prereq: ["LA INGENIERÍA INDUSTRIAL"] },
            { nombre: "COMUNICACIÓN ORAL Y ESCRITA II", prereq: ["COMUNICACIÓN ORAL Y ESCRITA I"] },
            { nombre: "IDIOMA EXTRANJERO II", prereq: ["IDIOMA EXTRANJERO I"] },
            { nombre: "DEPORTE I" }
        ]},
        { nivel: 3, asignaturas: [
            { nombre: "CÁLCULO III", prereq: ["CÁLCULO II"] },
            { nombre: "FÍSICA GENERAL", prereq: ["CÁLCULO I"] },
            { nombre: "PROGRAMACIÓN PARA INGENIERÍA", prereq: ["SOLUCIÓN ALGORÍTMICA DE PROBLEMAS"] },
            { nombre: "ECUACIONES DIFERENCIALES", prereq: ["ÁLGEBRA LINEAL", "CÁLCULO II"] },
            { nombre: "AUTOGESTIÓN DEL APRENDIZAJE" },
            { nombre: "IDIOMA EXTRANJERO III", prereq: ["IDIOMA EXTRANJERO II"] }
        ]},
        { nivel: 4, asignaturas: [
            { nombre: "FUNDAMENTOS DE FLUIDOS Y TERMODINÁMICA", prereq: ["FÍSICA GENERAL", "CÁLCULO II"] },
            { nombre: "TALLER DE ANÁLISIS NUMÉRICO", prereq: ["PROGRAMACIÓN PARA INGENIERÍA", "CÁLCULO III"] },
            { nombre: "SISTEMAS DE OPERACIONES", prereq: ["FUNDAMENTOS DE ADMINISTRACIÓN", "LA INGENIERÍA INDUSTRIAL"] },
            { nombre: "PROBABILIDADES Y ESTADÍSTICA", prereq: ["ÁLGEBRA LINEAL", "CÁLCULO II"] },
            { nombre: "TRABAJO EN EQUIPO Y DESARROLLO DE HABILIDADES SOCIALES", prereq: ["AUTOGESTIÓN DEL APRENDIZAJE"] },
            { nombre: "IDIOMA EXTRANJERO IV", prereq: ["IDIOMA EXTRANJERO III"] },
            { nombre: "DEPORTE II" }
        ]},
        { nivel: 5, asignaturas: [
            { nombre: "ELECTRICIDAD Y MAGNETISMO", prereq: ["FÍSICA GENERAL", "CÁLCULO II"] },
            { nombre: "MODELOS DE INVESTIGACIÓN DE OPERACIONES", prereq: ["PROBABILIDADES Y ESTADÍSTICA", "TALLER DE ANÁLISIS NUMÉRICO"] },
            { nombre: "ESTADÍSTICA INDUSTRIAL", prereq: ["PROBABILIDADES Y ESTADÍSTICA"] },
            { nombre: "GESTIÓN DE RECURSOS HUMANOS", prereq: ["FUNDAMENTOS DE ADMINISTRACIÓN"] },
            { nombre: "COMPRENSIÓN DE CONTEXTOS SOCIALES", prereq: ["COMUNICACIÓN ORAL Y ESCRITA II"] },
            { nombre: "IDIOMA EXTRANJERO V", prereq: ["IDIOMA EXTRANJERO IV"] }
        ]}
        
        ,
        { nivel: 6, asignaturas: [
            { nombre: "ANÁLISIS ECONÓMICO", prereq: ["FUNDAMENTOS DE ADMINISTRACIÓN", "CÁLCULO II"] },
            { nombre: "PROGRAMACIÓN MATEMÁTICA", prereq: ["MODELOS DE INVESTIGACIÓN DE OPERACIONES"] },
            { nombre: "MODELOS ESTOCÁSTICOS Y SIMULACIÓN", prereq: ["ESTADÍSTICA INDUSTRIAL", "MODELOS DE INVESTIGACIÓN DE OPERACIONES"] },
            { nombre: "FUNDAMENTOS DE INGENIERÍA DE PROCESOS", prereq: ["FUNDAMENTOS DE FLUIDOS Y TERMODINÁMICA", "QUÍMICA GENERAL Y ORGÁNICA"] },
            { nombre: "COMPRENSIÓN DE CONTEXTOS CULTURALES", prereq: ["COMPRENSIÓN DE CONTEXTOS SOCIALES"] },
            { nombre: "IDIOMA EXTRANJERO VI", prereq: ["IDIOMA EXTRANJERO V"] }
        ]},
        { nivel: 7, asignaturas: [
            { nombre: "INGENIERÍA ECONÓMICA Y EVALUACIÓN DE PROYECTOS", prereq: ["ANÁLISIS ECONÓMICO", "FUNDAMENTOS DE ADMINISTRACIÓN"] },
            { nombre: "MARKETING TÁCTICO Y OPERATIVO", prereq: ["ANÁLISIS ECONÓMICO"] },
            { nombre: "DISEÑO DE SISTEMAS DE OPERACIONES", prereq: ["MODELOS ESTOCÁSTICOS Y SIMULACIÓN", "PROGRAMACIÓN MATEMÁTICA", "SISTEMAS DE OPERACIONES"] },
            { nombre: "TECNOLOGÍAS DE INFORMACIÓN", prereq: ["SISTEMAS DE OPERACIONES", "PROGRAMACIÓN PARA INGENIERÍA"] },
            { nombre: "PROCESOS Y EQUIPOS INDUSTRIALES I", prereq: ["FUNDAMENTOS DE INGENIERÍA DE PROCESOS"] },
            { nombre: "ÉTICA Y RESPONSABILIDAD SOCIAL", prereq: ["COMPRENSIÓN DE CONTEXTOS CULTURALES", "TRABAJO EN EQUIPO Y DESARROLLO DE HABILIDADES SOCIALES"] }
        ]},
        { nivel: 8, asignaturas: [
            { nombre: "INGENIERÍA FINANCIERA", prereq: ["ANÁLISIS ECONÓMICO"] },
            { nombre: "GESTIÓN DE PROYECTOS", prereq: ["DISEÑO DE SISTEMAS DE OPERACIONES", "INGENIERÍA ECONÓMICA Y EVALUACIÓN DE PROYECTOS", "GESTIÓN DE RECURSOS HUMANOS"] },
            { nombre: "PLANIFICACIÓN Y GESTIÓN DE LAS OPERACIONES", prereq: ["DISEÑO DE SISTEMAS DE OPERACIONES"] },
            { nombre: "PROCESOS Y EQUIPOS INDUSTRIALES II", prereq: ["PROCESOS Y EQUIPOS INDUSTRIALES I", "ELECTRICIDAD Y MAGNETISMO"] },
            { nombre: "PROYECTO DE LICENCIATURA", prereq: ["ÉTICA Y RESPONSABILIDAD SOCIAL", "PROCESOS Y EQUIPOS INDUSTRIALES I", "TECNOLOGÍAS DE INFORMACIÓN", "DISEÑO DE SISTEMAS DE OPERACIONES", "MARKETING TÁCTICO Y OPERATIVO", "INGENIERÍA ECONÓMICA Y EVALUACIÓN DE PROYECTOS"] },
            { nombre: "RESPONSABILIDAD SOCIAL", prereq: ["ÉTICA Y RESPONSABILIDAD SOCIAL"] }
        ]},
        { nivel: 9, asignaturas: [
            { nombre: "DISEÑO DE SISTEMAS DE COSTEO", prereq: ["INGENIERÍA FINANCIERA"] },
            { nombre: "PROYECTO DE DISEÑO DE SISTEMAS DE OPERACIONES", prereq: ["GESTIÓN DE PROYECTOS", "TECNOLOGÍAS DE INFORMACIÓN", "DISEÑO DE SISTEMAS DE OPERACIONES", "INGENIERÍA ECONÓMICA Y EVALUACIÓN DE PROYECTOS"] },
            { nombre: "GESTIÓN DE LA CADENA DE ABASTECIMIENTO", prereq: ["PLANIFICACIÓN Y GESTIÓN DE LAS OPERACIONES"] },
            { nombre: "GESTIÓN DE LA INNOVACIÓN Y EMPRENDIMIENTO", prereq: ["MARKETING TÁCTICO Y OPERATIVO", "INGENIERÍA ECONÓMICA Y EVALUACIÓN DE PROYECTOS"] },
            { nombre: "GESTIÓN AMBIENTAL Y ENERGÉTICA", prereq: ["PROCESOS Y EQUIPOS INDUSTRIALES II"] },
            { nombre: "ELECTIVO I" }
        ]},
        { nivel: 10, asignaturas: [
            { nombre: "ESTRATEGIA Y CONTROL DE GESTIÓN", prereq: ["INGENIERÍA FINANCIERA"] },
            { nombre: "PROYECTO DE DISEÑO DE SISTEMAS DE PLANIFICACIÓN DE OPERACIONES", prereq: ["PLANIFICACIÓN Y GESTIÓN DE LAS OPERACIONES", "TECNOLOGÍAS DE INFORMACIÓN"] },
            { nombre: "PROYECTO DE APLICACIÓN TECNOLÓGICA", prereq: ["GESTIÓN AMBIENTAL Y ENERGÉTICA", "PROCESOS Y EQUIPOS INDUSTRIALES II", "INGENIERÍA ECONÓMICA Y EVALUACIÓN DE PROYECTOS"] },
            { nombre: "MEJORAMIENTO CONTINUO" },
            { nombre: "ELECTIVO II" },
            { nombre: "ELECTIVO III" }
        ]},
        { nivel: 11, asignaturas: [
            { nombre: "PROYECTO DE TÍTULO", prereq: ["MEJORAMIENTO CONTINUO", "PROYECTO DE DISEÑO DE SISTEMAS DE OPERACIONES"] },
            { nombre: "ELECTIVO IV" }
        ]},
        { nivel: 99, asignaturas: [
            { nombre: "PRÁCTICA PROFESIONAL I", prereq: ["IDIOMA EXTRANJERO VI", "COMPRENSIÓN DE CONTEXTOS CULTURALES", "FUNDAMENTOS DE INGENIERÍA DE PROCESOS", "MODELOS ESTOCÁSTICOS Y SIMULACIÓN", "PROGRAMACIÓN MATEMÁTICA", "ANÁLISIS ECONÓMICO"] },
            { nombre: "PRÁCTICA PROFESIONAL II", prereq: ["PRÁCTICA PROFESIONAL I"] }
        ]}

    ];

    const estadoGuardado = JSON.parse(localStorage.getItem("ramosCompletados") || "{}");
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
            ramo.textContent = asig.nombre;
            ramo.title = asig.prereq ? "Prerrequisitos: " + asig.prereq.join(", ") : "";

            if (estadoGuardado[asig.nombre]) {
                ramo.classList.add("completado");
            }

            ramo.addEventListener("click", () => {
                ramo.classList.toggle("completado");
                estadoGuardado[asig.nombre] = ramo.classList.contains("completado");
                localStorage.setItem("ramosCompletados", JSON.stringify(estadoGuardado));
            });

            col.appendChild(ramo);
        });

        container.appendChild(col);
    });
});
