const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () =>{
	menu.classList.toggle('menu-lateral--ativo') /*O toggle ativa e desativa sem a gente 
																								 precisar remover e depois ativar novamente*/
})