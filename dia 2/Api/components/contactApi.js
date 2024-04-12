const URL_API = "http://localhost:3001"
const myHeaders = new Headers({
    "content-Type": "application/json"
});
const getProduct = async() => {
    try {
        const respuesta = await fetch(`${URL_API}/contacts`);
        // Si la respuesta es correcta
        if(respuesta.status === 200){
            const datos = await respuesta.json();
        } else if(respuesta.status === 401){
            console.log('La url no es correcta');
        } else if(respuesta.status === 404){
            console.log('El estudiante no existe en el sistema...')
        }else{
            console.log('Se presento un Error enla peticion, consulte con el Administrador');
        }
    } catch(error){
        console.log(error);
    }
}
const postProduct = (datos) =>{
    fetch(`${URL_API}/product`,
    {
        method: "POST",
        headers: myHeaders,
        body:JSON.stringify(datos)
    }
    ).then(res=>{
        return res.json()
    }).then(res=>{
        idUser=res.id
    }).catch(err=>{
        console.log(err);
    })
}