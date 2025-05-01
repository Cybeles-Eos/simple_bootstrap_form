


document.getElementById("btn").addEventListener("click", (event)=>{
   event.preventDefault();

   const name = document.querySelector("#name");
   const email = document.querySelector("#email");
   const usersection = document.querySelector("#fm_select");
   const birthdate = document.querySelector("#date");
   const age = document.querySelector("#age");
   const gender = document.querySelector("input[name='terms']:checked");
   
   const aboutYou = document.querySelector("#aboutYou");

   if(!name.value || !email.value || usersection.value == "Open this select menu" || !age.value || !birthdate.value || !gender.value){
      alert("Fill up the form.");
      return;
   }
   if(!email.value.includes('@')){
      alert("Invalid Email");
      return;
   }
   document.getElementById("form_fill").classList.add("d-none");
   let sports_icons = document.querySelectorAll(".spo_s"); //bball, boxing, fball
   const sports = document.querySelectorAll("input[name='hobby']:checked");

   document.getElementById("name_txtcon").textContent = name.value;
   document.getElementById("email_txtcon").textContent = email.value;
   document.getElementById("sec_txtcon").textContent = usersection.value;
   document.getElementById("birt_txtcon").textContent = birthdate.value;
   document.getElementById("age_txtcon").textContent = age.value;
   document.getElementById("gend_txtcon").textContent = gender.value;
   
   document.getElementById("description").textContent = aboutYou.value;

   sports.forEach(sport => {
      sports_icons.forEach(icon => {
         if (icon.classList.contains(sport.value)) {
            icon.classList.remove('d-none');
         }
      });
    });
    

   document.getElementById("form_overview").classList.remove("d-none");
   document.getElementById("complete_form").classList.remove("d-none");
});


document.getElementById("tnx-close").addEventListener('click', ()=>{
   location.reload();
})