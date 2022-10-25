function validate() {
            
    if( document.ordForm.nameChoice.value.length<1 ) {
        alert( "Fill your name" );
        document.ordForm.nameChoice.focus() ;
        return false;
    }
    if(( document.ordForm.ageChoice.value < 1) ||
        (document.ordForm.ageChoice.value > 150)) {
        alert( "Quantity must be a number from 1 - 150!" );
        document.ordForm.qty.focus() ;
        return false;
    }
    if (( document.ordForm.emailChoice.value.length < 4) ||
        (document.ordForm.emailChoice.value.indexOf("@"))>
        (document.ordForm.emailChoice.value.indexOf("."))){
          alert( "The email filled is not real" );
          document.ordForm.qty.focus() ;                  
        }
    alert("Thank You")
    }