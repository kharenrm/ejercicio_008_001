var formulario = {
	campo1: "nombre",
	campo2: "apellido",
	campo3: "email",
	campo4: "urlFoto"
}

class Contacto {
    constructor(nombre, apellido, email, urlFoto) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._urFoto = urlFoto;
    }
}

class Agenda {
    constructor() {
        this._contactos = [];
        this._gestorMemoria = new GestorMemoria();
        this.pintarEstructura();
    }
    pintar(){

    }

    getContactos(){
    		this._gestorMemoria.get();
    }

    addContacto(){
    	var nombre = document.getElementById('nombre').value;
    	var apellido = document.getElementById('apellido').value;
    	var email = document.getElementById('email').value;
    	var urlFoto = document.getElementById('urlFoto').value;

    	var contacto = new Contacto(nombre, apellido, email, urlFoto);
    	console.log(contacto);
    	this._gestorMemoria.set(contacto);
    }

    pintarEstructura() {
    	var divP = document.getElementById('contenedor');
    	var divForm = document.createElement('div');
    		divForm.id = "divForm";
    		divForm.className = "divForm";
    		divForm.appendChild(this.pintarFormulario());

    	var divAgenda = document.createElement('div');
    		divAgenda.id = "divAgenda";
    		divAgenda.className = "divAgenda";

    	divP.appendChild(divForm);
    	divP.appendChild(divAgenda);
    }
    pintarFormulario(){
    	var form = document.createElement('form');
    		form.className = "formulario";
    	for (var i in formulario) {
            var input = document.createElement('input');
            input.type = "text";
            input.placeholder = formulario[i];
            input.id = formulario[i];
            form.appendChild(input);
        }
        var boton = document.createElement('button');
        	boton.innerHTML = "Crear contacto";
        	boton.className = "boton_accion";
        	boton.addEventListener('click', (e) => {
        		e.stopPropagation();
        		e.preventDefault();
        		this.addContacto();
        	});
        	form.appendChild(boton);

        return form;
    }
}

class GestorMemoria{
	constructor(){
		
	}
	set(contacto){
		localStorage.setItem("contactos", contacto);
	}
	get(){
		localStorage.getItem("contactos");
	}
}

let miAgenda = null;

window.onload = () => {
	miAgenda = new Agenda();
	//miAgenda.pintar();
}

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZviNgUeDT1PgdkmYzT4CA_YUEI7Y0czRwNUSlj155MGEMG7_
