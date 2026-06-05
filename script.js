document.getElementById("signin").addEventListener("click", signpage);
function signpage(){
   let name =  prompt("Enter Your E-Mial : ", " xyz.email.com");
   console.log(name);
}
console.log('hii');


const st = document.getElementById("started");

st.addEventListener("click", () => {

    const email = document.getElementById("email").value;

   //  if(email.trim() === ""){
   //      alert("Please enter your email address.");
   //      return;
   //  }

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
}

    alert(`Welcome! Email: ${email}`);
});

document
.getElementById("email")
.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        document.getElementById("started").click();
    }
});


const btn = document.getElementById("start-btn");

btn.addEventListener("click", () => {

    const email2 = document.getElementById("email2").value;

    const emailRegex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex2.test(email2)) {
    alert("Please enter a valid email address");
    return;
}

    alert(`Welcome! Email: ${email2}`);
});


document.getElementById("email2")
.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        document.getElementById("start-btn").click();
    }
});