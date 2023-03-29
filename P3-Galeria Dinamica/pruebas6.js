
const archivo = document.getElementById('archivo');
archivo.addEventListener('change',()=>{
	leerArchivo(archivo.files);
})
//Va a leer cada archivo mande el usuario
const leerArchivo = ar =>{
	for (let i=0; i < ar.length; i++){
		const reader = new FileReader();
//		va a leer la URL del archivo
		reader.readAsDataURL(ar[i]);
		reader.addEventListener('load',(e)=>{
			let img = `<img src="${e.currentTarget.result}">`;
			document.querySelector(".resultado").innerHTML += img;
		})
	}
}