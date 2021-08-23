var publicaciones = [];
window.onload=obtenerPublicaciones;

function obtenerPublicaciones() {
    console.log("carago la pagina");
    axios({
        method: 'GET',
        url: '../../../womanstore/backend/api/publicaciones.php',
        responseType: 'json'
    }).then(res=>{
        //dirreccion(res.data);
        publicaciones = res.data;
        llenarInformacion();
        console.log(res.data);
    }).catch(err=>{
        console.log(err);
    });

}

function obtenerPorCategoria(id) {
    axios({
        method: 'GET',
        url: `../../../womanstore/backend/api/publicaciones.php?id=${id}`,
        responseType: 'json'
    }).then(res=>{
        //dirreccion(res.data);
        publicaciones = res.data;
        console.log(publicaciones);
        llenarInformacion();
    }).catch(err=>{
        console.log(err);
    });
}

function llenarInformacion() {
    document.querySelector('#publicaciones section').innerHTML = '';
    for(let i=0; i<publicaciones.length;i++){
        document.querySelector('#publicaciones section').innerHTML +=
        `<div class="text-center"><H3>${publicaciones[i].titulo}</H3></div>
        <img class="rounded mx-auto d-block img-publicacion" src="${publicaciones[i].url}" alt="Vestido"><br>
        <div class="text-center"><i class="far fa-star">${publicaciones[i].precio}</i></div>
        <section class="text-center">
         <div>
             <p>${publicaciones[i].descripcion}</p>
         </div>
         <div>
             <p>Me gusta mucho como te contacto?</p>
         </div>
         <div>
             <p>Esta muy bello</p>
         </div>
        </section>`;
        console.log(publicaciones[i].titulo);
    }
}

function prueba() {
    document.querySelector('#publicaciones section').innerHTML = '';
    for(let i=0; i<publicaciones.length;i++){
        document.querySelector('#publicaciones section').innerHTML +=
        `<div class="text-center"><H3>${publicaciones[i].titulo}</H3></div>
        <img class="rounded mx-auto d-block" src="${publicaciones[i].url}" alt="Vestido"><br>
        <div class="text-center"><i class="far fa-star">${publicaciones[i].precio}</i></div>
        <section class="text-center">
         <div>
             <p>${publicaciones[i].descripcion}</p>
         </div>
         <div>
             <p>Me gusta mucho como te contacto?</p>
         </div>
         <div>
             <p>Esta muy bello</p>
         </div>
        </section>`;
        console.log(publicaciones[i].titulo);
    }
}