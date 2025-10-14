// Categorías fijas
let tareasDWEC = [];
let tareasDWES = [];
let tareasEMPLEO = [];
let tareasPERSONAL = [];

let opcion;
do {
    opcion = prompt(
        "Elige una opción escribiendo el número:\n" +
        "1. Agregar tarea\n" +
        "2. Borrar tarea\n" +
        "3. Ver tareas\n" +
        "4. Salir"
    );


    if (opcion == 1) {

        let categoria = prompt("Categorías:\n1. DWEC\n2. DWES\n3. EMPLEO\n4. PERSONAL");

        // el .push añade alfinal del ARRAY. MUY UTIL!!!---------------------------------

        do {
            let tarea = prompt("Escribe la tarea:");
            if (categoria == 1) tareasDWEC.push(tarea);
            else if (categoria == 2) tareasDWES.push(tarea);
            else if (categoria == 3) tareasEMPLEO.push(tarea);
            else if (categoria == 4) tareasPERSONAL.push(tarea);
            else alert("Categoría no válida");

        } while (confirm("¿Deseas ingresar otra tarea?"));
    } else if (opcion == 2) {
        // BORRAR TAREA
        let categoria = prompt("¿De qué categoría quieres borrar?\n1. DWEC\n2. DWES\n3. EMPLEO\n4. PERSONAL");

        let lista = [];
        if (categoria == 1) lista = tareasDWEC;
        else if (categoria == 2) lista = tareasDWES;
        else if (categoria == 3) lista = tareasEMPLEO;
        else if (categoria == 4) lista = tareasPERSONAL;
        else alert("Categoría no válida");

        if (lista.length == 0) {
            alert("No hay tareas en esta categoría.");
        } else {
            // Mostrar tareas
            // Cargamos todas las tareas en texto y las mostramos
            let texto = "Tareas:\n";
            for (let i = 0; i < lista.length; i++) {
                texto += (i + 1) + ". " + lista[i] + "\n";
            }

            // el .splice borra en la posicion indicada(primer espacio), una cosa(segundo espacio)

            let borrar = prompt(texto + "\nNúmero a borrar:");
            lista.splice(borrar - 1, 1);
            alert("Tarea borrada.");




        }
    } else if (opcion == 3) {
        // VER TAREAS

        //volvemos a cargar todas las tareas en texto y se muestran

        let texto = "LISTA DE TAREAS\n\n";
        texto += "DWEC\n----------------------\n";
        if (tareasDWEC.length == 0) texto += "- (sin tareas)\n";
        else for (let t of tareasDWEC) texto += "- " + t + "\n";

        texto += "\nDWES\n----------------------\n";
        if (tareasDWES.length == 0) texto += "- (sin tareas)\n";
        else for (let t of tareasDWES) texto += "- " + t + "\n";

        texto += "\nEMPLEO\n----------------------\n";
        if (tareasEMPLEO.length == 0) texto += "- (sin tareas)\n";
        else for (let t of tareasEMPLEO) texto += "- " + t + "\n";

        texto += "\nPERSONAL\n----------------------\n";
        if (tareasPERSONAL.length == 0) texto += "- (sin tareas)\n";
        else for (let t of tareasPERSONAL) texto += "- " + t + "\n";

        alert(texto);




    }
 }while (opcion != 4);

    alert("¡Programa finalizado!");
