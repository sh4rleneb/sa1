let clickCount = 0;
const colors = ['#F8BBD0', '#B2E0D4'];

function changeBGcolor() {
    if (clickCount < 6) { 
        document.body.style.backgroundColor = colors[clickCount % 2];
        clickCount++;
    } else {
        clickCount = 0;
    }
}

document.getElementById('colorButton').addEventListener('click', changeBGcolor);