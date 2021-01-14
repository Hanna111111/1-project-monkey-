const closedF = document.querySelector('.closed');
const openF = document.querySelector('.open');

//добавляем событие
closedF.addEventListener('click', () =>
{
if(openF.classList.contains('open')){
	openF.classList.add('active');
	closedF.classList.remove('active');
}
})

openF.addEventListener('click', () =>
{
	if(closedF.classList.contains('closed')){
		closedF.classList.add('active');
		openF.classList.remove('active');
	}
})