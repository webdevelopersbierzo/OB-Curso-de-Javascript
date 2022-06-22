const btn = document.querySelector("#btn")

btn.addEventListener("click", ()=>{
    console.log("click en el boton")
})

$(()=>{

    $("#btn-query").click(()=>{
        console.log("Hola, estoy utilizando jquery")
    })

})