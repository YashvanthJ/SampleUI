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
        console.log("Rating on hair cut and Details");
        console.log("fistname", fistname.value);
        console.log("lastName", lastName.value);
        console.log("email", email.value);
        console.log("phone", phone.value);
        if(document.getElementById('star1').checked) {
          console.log("Hair Cut Rating is 1 star");
        } else if(document.getElementById('star2').checked) {
          console.log("Hair Cut Rating is 2 star");
        } else if(document.getElementById('star3').checked) {
          console.log("Hair Cut Rating is 3 star");
        } else if(document.getElementById('star4').checked) {
          console.log("Hair Cut Rating is 4 star");
        } else if(document.getElementById('star5').checked) {
          console.log("Hair Cut Rating is 5 star");
        }
        document.getElementById('appointments').reset();
       },
      false
    );
  });
})();
