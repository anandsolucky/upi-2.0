console.log('search client js');

const searchForm = document.getElementById('frm-form');
const fetchRecods = (accountNumber, callback) => {
    fetch("/searchRecords?ac=" + accountNumber)
        .then((response) => {
            response.json()
                .then((data) => {callback(undefined, data)})
                .catch((error) => {callback(error, undefined)})
        })
        .catch((error) => {callback(error, undefined)})
}
searchForm.addEventListener('submit', (e) => {
    const inputAccountnum = document.getElementById("ac-input").value
    e.preventDefault();
    const fetchedData = fetchRecods(inputAccountnum,(error, response) => {
        if(error) console.log("error in receiving data " + error);
        else {
            console.log("data successfully received! " + response.status);
            if(response.status == "found") {
                alert("status: " + response.status + " | name: " 
                + response.data.name + " | username : " + response.data.username)
            } else {
                alert("user not found!")
            }
            
        }
    })
})