
function show(){
    var buscar = document.getElementById("enterId").value
    var url = "https://imdb.iamidiotareyoutoo.com/search?q=" + buscar ;
    var busqueda = url+"true beauty";
    function buscar_id(url){
        fetch(busqueda)
        .then( res => res.json())
        .then( data => {
            console.log(data);
            
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
    buscar_id(busqueda)
    

}
show();

// function search_Id(){
//     let search = document.getElementById("enterId").value;
//     let link = "https://imdb.iamidiotareyoutoo.com/search?q="+search;
//     show(link)
// }

// function show(link){

//     fetch(link)
//         .then( res => res.json())
//         .then( data => {
//             console.log(data);
            
//             data.description.forEach(element => {
                
//                 document.querySelector(".info-data").innerHTML+=`
//                 <div class="card">
//                     <div class="head">
//                         <div>
//                             <h2>${element["#TITLE"]}</h2>
//                         </div>
//                     </div>
//                     <img class="photo" src="${element["#IMG_POSTER"]}">
//                     <div class="contenido">
//                         <p>Year: ${element["#YEAR"]}</p>
//                         <p>Actors: ${element["#ACTORS"]}</p>
//                         <p>${element["#AKA"]}</p>
//                     </div>
//                 </div>
//                 `
                
//             });
            
//         })
// }