function user(data, clientCard) {
    for (let i = 0; i < data.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `
<div class="card m-4">
  <ul class="list-group list-group-flush">
     <div class="list-group-item d-flex justify-content-between">
        <div>
            <h2>${data[i].firstName} ${data[i].lastName}</h2>
        </div>
       <div>
            <h4>${data[i].email} </h4>
        </div>
       <div>
            <button class="btn btn-danger" id="deleteBtn">Delete</button>
        </div>
    </div>
  </ul>
</div>
`;          let deleteBtn = card.querySelector("#deleteBtn")
        deleteBtn.addEventListener('click', deleteAction)
        clientCard.appendChild(card)
        function deleteAction(){
            fetch('http://167.172.175.168/bd0b5881-e1bf-482a-8efb-99edc24e8976/Clients/' + data[i].id, {
                method: 'DELETE'

            })
            window.location.reload();
        }
    }
}

window.onload = () => {
    fetch('http://167.172.175.168/bd0b5881-e1bf-482a-8efb-99edc24e8976/Clients', {
        method: 'GET'
    }).then((response) => response.json())
        .then((data) => {
            user(data, clientCard)
        })
}
