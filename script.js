// Fetch users from JSONPlaceholder API and display in a table
function fetchUsers() {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            const users = response.data;
            const tableBody = document.getElementById("user-table");
            tableBody.innerHTML = ""; // Clear existing content

            users.forEach(user => {
                const row = `
                    <tr class="border">
                        <td class="border px-4 py-2">${user.id}</td>
                        <td class="border px-4 py-2">${user.name}</td>
                        <td class="border px-4 py-2">${user.email}</td>
                        <td class="border px-4 py-2">${user.username}</td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error("Error fetching users:", error));
}

// Call function on page load
fetchUsers();
