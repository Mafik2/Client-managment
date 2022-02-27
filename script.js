
window.onload = () => {
    let addBtn = document.getElementById('addBtn');
    addBtn.addEventListener("click", write);

    function write() {
        let email = document.getElementById('inputEmail');
        let firstName = document.getElementById('firstName');
        let lastName = document.getElementById('lastName');
        const userData = {
            email: email.value,
            firstName: firstName.value,
            lastName: lastName.value
        }

        fetch("http://167.172.175.168/bd0b5881-e1bf-482a-8efb-99edc24e8976/Clients",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                location.href = 'index.html'
            });
    }
}




