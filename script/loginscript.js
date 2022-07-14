const container = document.querySelector(".container"),
      showpw = document.querySelector(".show"),
      showpw2 = document.querySelector(".show2"),
      pwfields = document.querySelectorAll(".password"),
      signup = document.querySelector(".signuplink"),
      login = document.querySelector(".loginlink");

var dontshow = document.createElement('img');
    dontshow.src=("img/showpw2.png");

      //show pw
      showpw.addEventListener("click", function(){
         pwfields.forEach(pwfield =>{
            if(pwfield.type === "password"){
               pwfield.type = "text";

            }else{
            pwfield.type = "password";
            }
         })
      })

      showpw2.addEventListener("click", function(){
         pwfields.forEach(pwfield =>{
            if(pwfield.type === "password"){
               pwfield.type = "text";
            }else{
            pwfield.type = "password";
            }
         })
      })

      //appear forms
      signup.addEventListener("click", ( )=>{
         container.classList.add("active");
      });
      login.addEventListener("click", ( )=>{
         container.classList.remove("active");
      });


      