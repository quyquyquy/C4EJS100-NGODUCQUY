let position = ['afterBegin','afterEnd','beforeBegin','BeforeEnd'];
const container = document.getElementById('list');
for(let i = 0; i < position.length; i++)
{
    for(let j = 0; j < 3; j++) {
        container.insertAdjacentHTML(position[i], `<li>${j}</li>`)
    }
}      
