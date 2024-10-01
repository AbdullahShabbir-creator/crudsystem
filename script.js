// // post data 
function postdata() {
    const firstname = document.getElementById("fname").value;
    const lastname = document.getElementById("lname").value;
    const email = document.getElementById("em").value;
    fetch("http://localhost:3000/signup", {
        method: "POST",
        body: JSON.stringify({ firstname, lastname, email })
    }).then(response => response.json())
        .then(data => console.log(data))
};
fetch("http://localhost:3000/signup").then(response => response.json())
    .then(data => {
        console.log(data)
        const table = document.getElementById('data');
        table.innerHTML = '';
        data.forEach(data => {
            const row = `<tr>
                                <td>${data.id}</td>
                                <td>${data.firstname}</td>
                                <td>${data.lastname}</td>
                                <td>${data.email}</td>
                                <td>
          <button  class="btn btn-primary" onclick="edit('${data.id}', '${data.firstname}', '${data.lastname}', '${data.email}')">Edit</button>
                                    <button  class="btn btn-primary" onclick="deleteData('${data.id}')">Delete</button>
                                </td>
                        </tr>`;
            table.innerHTML += row;
        });
    });
// // delete user
const apiUrl = "http://localhost:3000/signup";
async function deleteData(id) {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        alert('Data deleted successfully');
        getdata()
    };
};
function edit(id, firstname, lastname, email) {
    editingId = id;
    document.getElementById("fname").value = firstname;
    document.getElementById('lname').value = lastname;
    document.getElementById('em').value = email;
    async () => {
        const firstname = document.getElementById("fname").value;
        const lastname = document.getElementById("lname").value
        const email = document.getElementById("em").value;
        const response = await fetch(`${apiUrl}/${editingId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstname, lastname, email })
                .then(response => response.json())
        });

    }
}