function Dashboard(){
    document.getElementById("main").innerHTML=`
    <h1 class="title">Dashboard</h1>
    <ul class="breadcrumbs">
        <li><a href="#">Home</a></li>
        <li class="divider">/</li>
        <li><a href="#" class="active">Dashboard</a></li>
    </ul>
    <div id="buscador">
        <input class="form-control me-2" type="text" id="enterId" placeholder="Search" onkeyup="show()">
    </div>
    
    <div class="info-data">
        
    </div>
    `
}

function show(){
    var buscar = document.getElementById("enterId").value;
    var url = "https://imdb.iamidiotareyoutoo.com/search?q=" + buscar ;
    console.log(buscar);
    
    
    fetch(url)
    .then( res => res.json())
    .then( data => {
        document.querySelector(".info-data").innerHTML=""
        data.description.forEach(element => {
            document.querySelector(".info-data").innerHTML+=`
            <div class="card">
                <div class="head">
                    <div>
                        <h2>${element["#TITLE"]}</h2>
                    </div>
                </div>
                <img class="photo" src="${element["#IMG_POSTER"]}">
                <div class="contenido">
                    <p>Year: ${element["#YEAR"]}</p>
                    <p>Actors: ${element["#ACTORS"]}</p>
                    <p>${element["#AKA"]}</p>
                </div>
            </div>
            `
        });
    })
    
}
show();


function año(){
    let buscar = document.getElementById("enterId");
    buscar.setAttribute('placeholder', 'Ingrese el año');
    buscar.setAttribute('onkeyup', mostrar_año()) ;
    buscar.value="";
    document.querySelector(".info-data").innerHTML=""
}
año();
function mostrar_año(){
    var buscar = document.getElementById("enterId").value;
    var url = "https://imdb.iamidiotareyoutoo.com/search?q=" + buscar ;
    console.log(buscar);
    
    
    fetch(url)
    .then( res => res.json())
    .then( data => {
        document.querySelector(".info-data").innerHTML=""
        data.description.forEach(element => {
            if (element["#YEAR"]==buscar){
                document.querySelector(".info-data").innerHTML+=`
                <div class="card">
                    <div class="head">
                        <div>
                            <h2>${element["#TITLE"]}</h2>
                        </div>
                    </div>
                    <img class="photo" src="${element["#IMG_POSTER"]}">
                    <div class="contenido">
                        <p>Year: ${element["#YEAR"]}</p>
                        <p>Actors: ${element["#ACTORS"]}</p>
                        <p>${element["#AKA"]}</p>
                    </div>
                </div>
                `
            }
            
        });
    })
}
mostrar_año();

function actor(){
    let buscar = document.getElementById("enterId");
    buscar.setAttribute('placeholder', 'Ingrese el nombre del actor ');
    buscar.setAttribute('onkeyup', mostrar_actor()) ;
    buscar.value="";
    document.querySelector(".info-data").innerHTML=""
}
actor();
function mostrar_actor(){
    var buscar = document.getElementById("enterId").value;
    var url = "https://imdb.iamidiotareyoutoo.com/search?q=" + buscar ;
    console.log(buscar);
    
    
    fetch(url)
    .then( res => res.json())
    .then( data => {
        document.querySelector(".info-data").innerHTML=""
        data.description.forEach(element => {
            document.querySelector(".info-data").innerHTML+=`
            <div class="card">
                <div class="head">
                    <div>
                        <h2>${element["#TITLE"]}</h2>
                    </div>
                </div>
                <img class="photo" src="${element["#IMG_POSTER"]}">
                <div class="contenido">
                    <p>Year: ${element["#YEAR"]}</p>
                    <p>Actors: ${element["#ACTORS"]}</p>
                    <p>${element["#AKA"]}</p>
                </div>
            </div>
            `
        });
    })
}
mostrar_actor();

function imdb(){
    let buscar = document.getElementById("enterId");
    buscar.setAttribute('placeholder', 'Ingrese el IMDB');
    buscar.setAttribute('onkeyup', mostrar_imdb()) ;
    buscar.value="";
    document.querySelector(".info-data").innerHTML=""
}
imdb();
function mostrar_imdb(){
    var buscar = document.getElementById("enterId").value;
    var url = "https://imdb.iamidiotareyoutoo.com/search?q=" + buscar ;
    console.log(buscar);
    
    
    fetch(url)
    .then( res => res.json())
    .then( data => {
        document.querySelector(".info-data").innerHTML=""
        data.description.forEach(element => {
            document.querySelector(".info-data").innerHTML+=`
            <div class="card">
                <div class="head">
                    <div>
                        <h2>${element["#TITLE"]}</h2>
                    </div>
                </div>
                <img class="photo" src="${element["#IMG_POSTER"]}">
                <div class="contenido">
                    <p>Year: ${element["#YEAR"]}</p>
                    <p>Actors: ${element["#ACTORS"]}</p>
                    <p>${element["#AKA"]}</p>
                </div>
            </div>
            `
        });
    })
}
mostrar_imdb();



