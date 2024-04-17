document.getElementById('ipForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user's name from the form
    var name = document.getElementById('name').value;

    // Use an external API to get the user's IP address
    fetch('https://api.ipify.org?format=json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Display the user's name and IP address
            var ipOutput = document.getElementById('ipOutput');
            ipOutput.innerHTML = `<p>Hello, ${name}! Your IP address is ${data.ip}.</p>`;
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
});