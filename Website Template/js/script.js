function greetUser() {
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById('greeting').innerText = `Hello, ${userName}! Welcome to the Yuta Okkotsu fan page!`;
    }
}
