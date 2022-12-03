//Crear constructor 

/* 
* 1) Debemos recibir 3 parametros cuando instanciamos esta clase
* 2) Tenemos 3 estados
*  - status 1 = create v
*  - status 2 = done   v
*  - status 3 = delete v
*  - status 4 = update v
* 3) Tendremos una funcion para poder renderizar nuestra tarea
* 4) Tendremos una funcion para actualizar la tarea
* 5) Tendremos una funcion para eliminar nuestra tarea
* CRUD => CREATE - READ - UPDATE - DELETE
*
*/

let valorTarea = ""

class Task {
	constructor(Id, Name, Date, Status) {
		this.id = Id;
		this.name = Name;
		this.date = Date;
		this.status = Status;
	}

	static crear() {
		alert("creado");

	}	

	static borrar(id) {
		// ESTILOS		
		const task = qs(`.id-${id}`);
		task.style.color= "red";
		task.style.backgroundColor='#F8D7DA'; // rojo
		
		const rpta = confirm("Esta seguro de eliminar la tarea ?")
		if (rpta == false){			
				// ESTILOS		
		const task = qs(`.id-${id}`);		
		task.style.color= "black"; //negro
		task.style.backgroundColor='#FEFEFE'; // blanco
			input.focus();
			return						
		} 
		
		// alert("TODO : Eliminar tarea " + id);
		
		// // TODO filtrar el array para que nos de otro array sin el id seleccionado
		// // console.log(arrayTask);
		
		// // FILTER--------------------------------------
		// // Recorre el array y para buscar y eliminar la tarea
		// // Con filter filtramos el array y devolvemos otro array sin el elemento seleeccionadio
		// // const animales = ['perro', 'gato', 'oso', 'pájaro', 'hormiga'];
		// // const resultado = animales.filter(animal => animal != 'oso');
		// // console.log(resultado);
		// // Resultado -> ["perro", "gato", "pájaro", "hormiga"]
		// // FILTER--------------------------------------
		
		// console.log(Task);			
		
		// // destroyRender(){}
		// console.log("Array principal" ,arrayTask);
		// const e = arrayTask.name;
		// const newArr = arrayTask.filter(e => e !== {id});
		// console.log(newArr);
	
		input.focus();
		// Borra la tarea del array	
		const newArray = arrayTask.filter( e => e.id !== id);		
		arrayTask = newArray;
		console.log(arrayTask);
		

		// Borra la vista 
		const element = qs(`.id-${id}`);
		element.remove();		
	
	};
	
	
	// STATUS 2 = DONE		
	static done(id){		
		// console.log("Realizar tarea :", id )					
		arrayTask.forEach(function(task){
			if (task.id == id){
			task.status= "2"				
			}			
		});
		
		console.log(arrayTask);				
		input.focus();				
				
		// ESTILOS		
		const task = qs(`.id-${id}`);
		task.style.color= "green";
		task.style.backgroundColor='#D1E7DD'; // verde
		
		
	}
	
	
	// STATUS 4 = UPDATE
	
	// Al hacer click en el boton editar cambia su estado a 4 
	// Crea el input para editar
	// Cambiar los estilos 
	
		static update(id)
		{
			arrayTask.forEach(function(task)
			{
				if (task.id == id){
					// console.log("El estado es 2");
					task.status = "4";
					console.log('El estado de la tarea ' + id + " es " + task.status);

				// ESTILOS
				const tk = qs(`.id-${id}`);
				tk.style.color = "green";
				tk.style.backgroundColor = '#FFF3CD'; // amarillo
				
				// CREAR ELEMENTOS
				// 1ro Referencias en nodo donde agregaras elementos
				let tarea1 = document.querySelector(`.tarea-${id}`);
				// 2do Creas el nuevo nodo y lo referencias  
				const inpEdit = document.createElement("textarea");
				// 3ro Agregas atributos, estilos nombre de clase
				inpEdit.className = (`nuevoInput-${id} nuevoInput`);
					// Guardas el valor de la tarea en una variable
				valorTarea = tarea1.textContent;
					// Borras el contenido de la caja tarea
				tarea1.textContent = "";
				
				// 4to Agregas el nuevo elemento en el nodo
				tarea1.appendChild(inpEdit);
				inpEdit.focus();
				
				inpEdit.value = valorTarea;
				
				// Task.controls(id);
				
				if (task.status == "4"){
					// ocultar botones standard y mostrar los botones edit
					const controlesStandard = qs(`.controls-${id}`)
					controlesStandard.style.display = "none";
					
					const controlesEdit = qs(`.editControls-${id}`)
					controlesEdit.style.display = "flex";				
					
				}
				else{
					// console.log("No puedes editar una tarea vacia");
					return
				}
				};								
				
				
			});			
		
		
		};	
	
		
	static doneEdit(id){
				const valorInp = qs(`.nuevoInput-${id}`).value;
				
				let tarea1 = document.querySelector(`.tarea-${id}`);
				tarea1.textContent = valorInp;
				
				console.log("texto en tarea "+ tarea1.textContent)		
				Task.status = "2";			
		
		
					//Oculta los controles Standard
					const controlesStandard = qs(`.controls-${id}`)
					controlesStandard.style.display = "flex";
					
					const controlesEdit = qs(`.editControls-${id}`)
					controlesEdit.style.display = "none";	

	input.focus()

// ESTILOS		
		const task = qs(`.id-${id}`);		
		task.style.color= "black"; //negro
		task.style.backgroundColor='#FEFEFE'; // blanco
					
		
	}
	
	static cancelEdit(id){
		let tarea1 = document.querySelector(`.tarea-${id}`);		
		
		// alert("btnCancelEdit presionado" )
		// console.log("valor de la tarea es : " + valorTarea)
		
		//Oculta los controles edit
					const controlesStandard = qs(`.controls-${id}`)
					controlesStandard.style.display = "flex";
					
					const controlesEdit = qs(`.editControls-${id}`)
					controlesEdit.style.display = "none";						
		//Borra el input
		const inpEdit = qs(`.nuevoInput-${id}`);		
		inpEdit.remove();		
		tarea1.textContent = valorTarea;	

		input.focus()
		
		// ESTILOS		
		const task = qs(`.id-${id}`);		
		task.style.color= "black"; //negro
		task.style.backgroundColor='#FEFEFE'; // blanco
							
	}	
	
	// Parte visual DOM Render

	static crearRender(id, status) {
		
		listaTarea.innerHTML += `
		<div class="obj-tareas id-${id} status-${status}">
			<div class="tarea-1 tarea-${id}">${input.value}</div>
				<div class="controles controls-${id}">
					<button id="btnDone" onclick="Task.done(${id})">
						<img src="./images/done2.png" width="20">
					</button>
					<button id="btnEdit" onclick=Task.update(${id})>
						<img src="./images/Editar1.png" width="18">
					</button>
					<button id="btnDelete" onclick="Task.borrar(${id})">
						<img src="./images/delete.png" width="18">
					</button>
				</div>
				<div class="controlesEdit editControls-${id}">
					<button id="btnAcceptEdit" onclick="Task.doneEdit(${id})">
						<img src="./images/done2.png" width="20">
					</button>					
					<button id="btnCancelEdit" onclick="Task.cancelEdit(${id})">
						<img src="./images/delete.png" width="18">
					</button>
				</div>
			</div>
		</div>
		`
		
		// ESTILOS		
		const task = qs(`.id-${id}`);		
		task.style.color= "black"; //negro
		task.style.backgroundColor='#FEFEFE'; // blanco
		
		
	};
	
	
	
	
	
	
};












