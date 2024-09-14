
const form = document.getElementById("form").value;
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let ObjUser = {
        name,
        email,
        password,
    };
    console.log(ObjUser);

    // postData(User,ObjUser)
});