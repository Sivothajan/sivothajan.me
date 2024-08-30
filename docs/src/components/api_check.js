// Function to check the API status
function checkApiStatus() {
    fetch('https://api.sivothajan.me/api/check')  // API URL
        .then(response => response.text())
        .then(data => {
            console.log('API Status Response:', data);
        })
        .catch(error => {
            console.error('Error fetching API status:', error);
        });
}

// Function to send data to the server
function sendData() {
    const data = {
        key: 'value',
        anotherKey: 'anotherValue'
    };

    fetch('https://api.sivothajan.me/api/data', {  // API URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Server Response:', data);
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });
}

// Functions call
checkApiStatus();
sendData();
