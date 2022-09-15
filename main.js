let menu = document.getElementById('mnUsers');
menu.addEventListener('change', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${menu.value}`)
        .then(response => response.json())
        .then(json => {
            document.getElementById('infoUsers').innerHTML = '';
            let info = document.getElementById('infoUsers');
            info.innerHTML += `<p>Id de usuario: ${json.id}<br><br>Nombre: ${json.name}<br>Direccion: ${json.address.street}<br>Telefono: ${json.phone}<br>E-mail: ${json.email}<br>Sitio web: ${json.website}<br><br></p>`
            console.log(json)
        })

})

const btnPosts = document.getElementById('btnPosts');
btnPosts.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${menu.value}`)
        .then(response => response.json())
        .then(json => {
            let info2 = document.getElementById('posts');
            let data = '';
            json.forEach(pub => {

                document.getElementById('posts').innerHTML = '';
                data += `<div class='div-style' id='posts'><h3>${pub.title}</h3><p>${pub.body}</p><br>
                <button class='botoncom' onclick='comentarios(${pub.id})'>Cargar comentarios</button><button class='botoncom' onclick='ocultar(${pub.id})'>Ocultar </button><br>
                </div>
                <div class='div-style2' id='dv${pub.id}'></div>
                <br>`


            });
            info2.innerHTML = data;
        })
})

fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(json => {
        let menu = document.getElementById('mnUsers');
        let opciones = '';
        for (let i = 0; i < json.length; i++) {
            opciones += `<option value="${json[i].id}">${json[i].username}</option>`
        }
        menu.innerHTML = opciones;
    })


function comentarios(num) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${num}`)
        .then(response => response.json())
        .then(json => {
            let info3 = document.getElementById(`dv${num}`);
            let coment = '';
            json.forEach(pub => {
                coment += `<h3>${pub.name}</h3><p>${pub.body}</p>`
            })

            info3.innerHTML = coment;
        })

}

const btnOcul = document.getElementById('btnOcul');
btnOcul.addEventListener('click', () => {
    document.getElementById('posts').innerHTML = '';
})

function ocultar(num) {
    document.getElementById(`dv${num}`).innerHTML = '';
}