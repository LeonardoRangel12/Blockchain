const isLogged = async () => {
    let endpointUrl = 'http://localhost:3001/islogged';
    let logged = false;
    try {
        const response = await axios.get(endpointUrl, { withCredentials: true });
        if (response.status === 200)
            logged = true;
        else
            logged = false;
        // You can perform any additional actions here
    } catch (error) {
        console.error("Error sending data:", error);
        logged = false;
        // You can handle the error and display a message to the user
    }

    return logged;
}

export default isLogged;