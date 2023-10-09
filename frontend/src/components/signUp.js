const signUp = async () => {
    const template = `
    <div style = 'margin: 40px;'>
    <h2>SignUp</h2>
    <form id= "signup_form">
        <div style = 'margin-bottom: 15px;'>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" required>
        </div>
        <div style = 'margin-bottom: 10px;'>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <div>
            <button type = "button" id="signup_button">Sign Up</button>
        </div>
    </form>
</div>
    `;
    return template;
}

export default signUp;