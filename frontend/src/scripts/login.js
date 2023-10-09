// signup.js

const handleLogIn = () => {
    var signupButton = document.getElementById("login_button");
    var signupForm = document.getElementById("login_form");

    signupButton.addEventListener("click", function () {
        // Get form data
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Create a JSON object with the input values
        const formData = {
            email: email,
            password: password
        };

        console.log(formData);

        // Replace 'your_endpoint_url' with the actual endpoint URL you want to send data to
        var endpointUrl = 'http://localhost:3001/login';

        // Send a POST request using Axios
        axios.post(endpointUrl, formData, { withCredentials: true })
            .then(function (response) {
                // Handle success
                console.log("Data sent successfully:", response.data);
                // You can perform any additional actions here
            })
            .catch(function (error) {
                // Handle error
                console.error("Error sending data:", error);
                // You can handle the error and display a message to the user
            });
    });

    console.log("Hola");
}
export default handleLogIn;
