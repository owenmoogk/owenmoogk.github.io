
function loadSplash(){
    $.ajax({
        url: '/v5/assets/splashes.txt',
        dataType: 'text',
    }).done(CSVSuccess);
}

function CSVSuccess(data) {
    items = data.split(/\r?\n|\r/);
    index = getRandomInt(0, items.length-1)
    item = items[index]
    subtitle = document.getElementById("subtitle")
    console.log(item, index, items)
    subtitle.innerText = item
}

// from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return (Math.floor(Math.random() * (max - min + 1)) + min)
}