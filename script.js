
//to reset

function reset(){
    location.reload()
}


//on load display

dataview()
async function dataview() {
    for (let i = 1; i <= 50; i++) {
        await showdisp(i);
    }
}

async function showdisp(i) {
    try {
        var url = "https://pokeapi.co/api/v2/pokemon/" + i + "/"
    console.log(url);
    var api = await fetch(url)
    var resp = await api.json()
    console.log(resp);

    var container = document.createElement("div")
    container.setAttribute("class", "container")
    container.setAttribute("id", "d1")
    document.getElementById("disp1").append(container)


    var img = document.createElement("img")
    img.src = resp.sprites.front_default
    document.getElementById("d1").append(img)

    var div1 = document.createElement("div")
    div1.innerHTML = "Name : " + resp.name
    document.getElementById("d1").append(div1)

    var len = resp.abilities.length

    for (let i = 0; i < len; i++) {

        const element = resp.abilities[i]
        var div2 = document.createElement("div")
        div2.innerHTML = " * Abilities : " + element.ability.name
        document.getElementById("d1").append(div2)

    }

    for (let i = 0; i < 2; i++) {
        var div3 = document.createElement("div")
        div3.innerHTML = " * Moves : " + resp.moves[i].move.name
        document.getElementById("d1").append(div3)
    }

    var div4 = document.createElement("div")
    div4.innerHTML = "Weight : " + resp.weight + " Kg"
    document.getElementById("d1").append(div4)    
    } catch (error) {
        console.error();
    }
    return false;
} 

// on search button
function search() {

    document.getElementById("disp1").innerHTML=""

    var val = document.getElementById("myInput").value
    if (val == "" || null) {
        alert("input box empty")
    }
    else {
        viewinfo(val)
    }
}

async function viewinfo(val) {

    try {
        var api = await fetch("https://pokeapi.co/api/v2/pokemon/" + val)
    var resp = await api.json()
    console.log(resp);

    var img = document.createElement("img")
    img.src = resp.sprites.front_default
    document.getElementById("disp").append(img)

    var div1 = document.createElement("div")
    div1.innerHTML = "Name : " + resp.name
    document.getElementById("disp").append(div1)

    var len = resp.abilities.length

    for (let i = 0; i < len; i++) {

        const element = resp.abilities[i]
        var div2 = document.createElement("div")
        div2.innerHTML = " * Abilities : " + element.ability.name
        document.getElementById("disp").append(div2)

    }

    for (let i = 0; i < 2; i++) {
        var div3 = document.createElement("div")
        div3.innerHTML = " * Moves : " + resp.moves[i].move.name
        document.getElementById("disp").append(div3)
    }

    var div4 = document.createElement("div")
    div4.innerHTML = "Weight : " + resp.weight + " Kg"
    document.getElementById("disp").append(div4)    
    } catch (error) {
        console.error();         
    }
}

