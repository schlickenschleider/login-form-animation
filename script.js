function animatedForm(){
    const signs = document.querySelectorAll(".fa-sign-in-alt");
    
     signs.forEach(sign => {
           sign.addEventListener("click", () => {
              const input = sign.previousElementSibling;
              const parent = sign.parentElement;
              const nextForm = parent.nextElementSibling;
             
             //     validate
             if(input.type === "email" && validateEmail(input)){
               nextSlide(parent, nextForm);
            }   else if(input.type === "text" && validatePassword(input)){
                    nextSlide(parent, nextForm);
            }   else {
                    parent.style.animation = "shake 0.6s ease";
                }
                //   stop animation
                  parent.addEventListener(`animationend`, () =>{
                      parent.style.animation = "";
                  })
           });                        
   });
  }

  function validateEmail(email){
	const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(validation.test(email.value)){
		errorColor("rgb(127, 127, 213)");
		return true;
	}   else{
		 errorColor("rgb(189,87,87)");
	}
}
    
function validatePassword(text){
    if(text.value.length < 6){
      errorColor("rgb(189,87,87)");
    }else{
      errorColor("rgb(127, 127, 213)");
      return true;
    }
  }

  function nextSlide(parent, nextForm){
      parent.classList.add("inactive");
      parent.classList.remove("active");
      nextForm.classList.add("active")
  }

  function errorColor(color) {
      document.body.style.background = color;
  }
  
  animatedForm();