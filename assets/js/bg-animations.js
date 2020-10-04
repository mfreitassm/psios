createRandomDiv();

function createRandomDiv() {

    var i;
    var container = document.getElementById('anime');
    console.log(container)
    for (i = 0; i < 15; i++) {

        let {
            randWidth,
            randHeight
        } = randomPosition();

        const left = `left: ${randWidth}%;`;
        const top = `top: ${randHeight}%;`;
        const image = `background-image: url(assets/img/circle/circle${Math.floor(Math.random() * 10) + 1}.svg);`;
        const animation = `animation: animate ${Math.floor(Math.random() * 10) + 4}s linear infinite;`;

        var div_to_insert = document.createElement('div');
        div_to_insert.setAttribute("style", `${top}${left}${image}${animation}`);
        console.log(div_to_insert)


        container.appendChild(div_to_insert);
        //document.body.appendChild(container);
    }
}


function randomPosition() {

    var windowWidth = 90;
    var windowHeight = 24;
    var randWidth = Math.floor((Math.random() * windowWidth));
    var randHeight = Math.floor((Math.random() * windowHeight) + 70);

    return {
        randWidth,
        randHeight
    };
}
