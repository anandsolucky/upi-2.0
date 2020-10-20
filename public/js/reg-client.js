
console.log('registeer client js');

const generateAccount = (userdata, callback) => {
    fetch('/generateAccount', {
        method: "post",
        body:  JSON.stringify(userdata),
        headers: { 'Content-type': 'application/json' },
        })
    .then((response) => {
        response.json()
            .then((data) => { callback(undefined, data); })
            .catch((error) => { callback(error,undefined); })
    })

    .catch((error) => { callback(error); })
}

const userForm = document.getElementById('rgstr-form');
userForm.addEventListener('submit', (e) => {
    alert('selected');
    e.preventDefault();
    const username = document.getElementById('username-input').value;
    const password = document.getElementById('password-input').value;
    const name = document.getElementById('name-input').value;
    const accountDetails = {
        username,password,name
    }
    console.log("JSON : " + accountDetails);
    generateAccount(accountDetails, (error,response) => {
        if(error) console.log("app.js fetch json convert error!! : " + error);
    })
})

