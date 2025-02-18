// Importaciones de funciones
const { addTask, listTasks, removeTask, updateTask } = require("./tasks");

// Agregar algunas tareas 
addTask("Estudiar Node.js");
addTask("Practicar JavaScript");
addTask("Hacer ejercicio");

// Listar tareas
listTasks();

// Eliminar una tarea
removeTask(1);

// Listar nuevamente para verificar
listTasks();

// Agregar tareas
addTask("Leer un libro");
addTask("Planear proyecto");
addTask("Hacer la tarea");
listTasks();

// Actualizar una tarea
updateTask(2, "Leer 10 páginas del libro");
listTasks();	

// Comprobar que no se puede agregar un index ni mayor ni menor al límite
updateTask(9, "Planear proyecto final");
updateTask(-2, "Planear proyecto final");


// Comprobar que no se puede agregar más tareas
addTask("Ir a la tienda");
