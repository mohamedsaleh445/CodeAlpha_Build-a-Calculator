const container = document.getElementById('container')
const display = document.getElementById('display')


container.addEventListener('click' , (e)=>{
if (e.target.nodeName == 'BUTTON') {
    switch (e.target.textContent) {
        case 'C':
            clearData()
            break;
        case "DEL":
            deleteValue()
            break;
            case '=':
                evaluate()
                break;
        default:
            addToDisplay(e.target.textContent)
            break;
    }
}
})


function deleteValue() {
    let displayContent = display.textContent
    display.textContent = displayContent.substring(0,displayContent.length-1)
}

function clearData() {
    display.textContent = ''
}

function addToDisplay(element) {
    display.textContent = display.textContent + element
}

function evaluate() {
    try {
        let calculation = math.evaluate(display.textContent)
        display.textContent = calculation
    } catch (error) {
        display.textContent = 'invalid opration'
        
    }

}