function generateGreeting() {
       // We will Get the value which is the name from the input field in html
    const name = document.getElementById("inputName").value;
  
     // ab If the name is not empty matlab agar input field mai koi name hai toh, display the greeting
    if (name) {
      document.getElementById("greetingMessage").innerText = "Hello, " + name + "! Welcome to our site!";
    } else {// aur agar koi name ahi haitoh yeh show karao k please enter the name SIMPLE
        alert("Please enter your name")
      document.getElementById("greetingMessage").innerText = "Please enter your name";
    }
  }