// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add("was-validated");
        const fistname = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        console.log("Appointment Booked and Details");
        console.log("fistname", fistname.value);
        console.log("lastName", lastName.value);
        console.log("email", email.value);
        console.log("phone", phone.value); 
       },
      false
    );
  });
})();
