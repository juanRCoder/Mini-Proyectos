const submit = document.querySelector(".submit");
const text = document.querySelector(".text");

const numberRamdon = ()=>{
	let entero = Math.trunc(Math.random()*1000);
	text.value = `#${entero}`;
	document.body.style.backgroundColor = text.value;
}
 submit.addEventListener('click',()=>{
	numberRamdon();
})