

const submitButton = document.querySelector('button');

submitButton.addEventListener('click',function(event){
    event.preventDefault();
    
    
   let inputs = document.querySelectorAll('input');
   inputs.forEach(item=>{
       
       console.log(item.type)
       if(item.type == 'text' || item.type == 'password'){
           if (item.value == "") {
             item.className = "error";
             item.style.borderColor = "var(--pink)";
             item.style.borderWidth="2px";
             item.nextElementSibling.style.display='block'
           }

       }
       else if(item.type=='email'){
           let mailValue = item.value;
           console.log(mailValue)
           const reg = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
            if(!reg.test(mailValue)){
                item.className = 'error';
                item.style.borderColor = "var(--pink)";
                item.style.borderWidth = "2px";
                item.nextElementSibling.style.display = "block";

            } else if(mailValue==""){
               item.className = 'error';
                item.style.borderColor = "var(--pink)";
                item.style.borderWidth = "2px";
                item.nextElementSibling.style.display = "block";
            }
        }
  
   })


})