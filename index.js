
function submitData(name, email) {
    const url = 'http://localhost:3000/users'; // The URL for the POST request
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email
        }),
    }


    return fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                return response.text().then(errorMessage => {
                    throw new Error(errorMessage);
                });
            }

            return response.json();

        })
        .then(responseData => {
            const newId = responseData.id;
            document.body.innerHTML += `<p>New ID: ${newId}</p>`;
        })
        .catch(error => {
            document.body.innerHTML += `<p>Error: ${error.message}</p>`;
        });
}