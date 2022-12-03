// Realizado = Status  1 
// Editado = Status  2 
// Eliminado = Status  3 

window.onload=document.querySelector(".input").focus();
	

//Referenciar objetos 
const qs = selector => document.querySelector(selector);

const btnCreate = qs("#btnCreate");
const input = qs(".input");
const listaTarea = qs(".lista-tarea");
const m = "es un msj";
const btnDelete =qs("#btnDelete");


	
// Para que funcione con ENTER
input.addEventListener("keyup" , function (e){
	// if(e.code === "Enter"){ //Esto es lo moderno , pero solo sirve para el enter del teclado, no del numerico
	if(e.keyCode === 13){  //Esta en desuso , se debe usar code pero aqui funcionan los dos enter del teclado y el numerico	
	
		// Llama a la function crear
		crear();
	} 
	
});


// Funciona con click
// input.addEventListener("click", function (){	
// alert("hizo click")	;
// } );


// Eventos
btnCreate.onclick=crear;


// Funciones parte logica
// Creas un array vacion para poner los elementos creados
arrayTask=[];

function crear()
{
	// if(e.keycode == "13"){
		// alert("presionaste enter")
		
	// }
	
	if(input.value.trim() !== "" )
	{			
		// arrayTask.length + 1 crea dinamicamente el id
		const tarea = new Task(arrayTask.length + 1,input.value,new Date(),"1")
		// push agrega al final del arrayTask la tarea creada
		arrayTask.push(tarea);
		// input.value="";
		input.focus();
		console.log(arrayTask);
		// Crea parte visual del HTML
		Task.crearRender(tarea.id, tarea.status);
		
		// console.log(tarea.id);
		
		
		
		
	}
		else
	{
		alert("El campo de texto no debe estar vacio");
	};	
		// Limpiar los campos
		input.value="";	
	
};

