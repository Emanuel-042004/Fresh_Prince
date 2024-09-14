
const form = document.querySelector("form");
form.addEventListener("submit", async (e)=> {
    e.preventDefault();
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;

    // Traer la info del data.json
    const dataUsuario = await Getdata(USUARIOS);
    console.log(dataUsuario);

    // Validar la información en data
    const result = dataUsuario.find(
        (fi) => fi.email === email && fi.password===pass
    );

    if (result !== undefined) {
        sesionStorage.setItem("InfoUser", JSON.stringify(result))
        form.reset();
        redi();
    } else {
        alert("Email o Password Incorrectos");
    }
});

const redi = () => {
    console.log("redirección");
    window.location.href = "../index.html";
}