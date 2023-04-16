let defaultSize = 16


const container = document.querySelector('.grid')

let squares = document.querySelectorAll('.grid-square')
const slider = document.getElementById("mySlider");
const output = document.getElementById("sliderValue");
output.innerHTML = defaultSize // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    deleteGrid()
    setGridSize(this.value)
    output.innerHTML = this.value;
}



function setGridSize(size){

    for(let i = 0; i < size * size; i++)
    {
        const div = document.createElement('div')
        div.classList.add('grid-square')
        div.style.width = (512 / size) + 'px';
        div.style.height = (512 / size) + 'px';
        container.appendChild(div)
    }
    squares = document.querySelectorAll('.grid-square')
    updateEvents()
}

function deleteGrid()
{
    squares.forEach(square => {
        square.remove();
      });
}

function updateEvents()
{
    squares.forEach(square => {
        square.addEventListener("mouseover", (e) => {
            square.style.backgroundColor = 'black'
        })
        
    });
}

setGridSize(defaultSize)


