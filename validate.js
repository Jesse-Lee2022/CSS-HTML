/*
    This function checks the Color field to make sure it is 3 characters in length
    and it checks the Quantity to make sure it is numeric and from 1 to 12.
*/

function validate() {
      
  if( document.ordForm.colorChoice.value.length != 3 ) {
       alert( "Color should be 3 characters!" );
       document.ordForm.colorChoice.focus() ;
       return false;
  }
  if(isNaN(document.ordForm.qty.value) ||
      (document.ordForm.qty.value < 1) ||
      (document.ordForm.qty.value > 12)) {
       alert( "Quantity must be number from 1 - 12!" );
       document.ordForm.qty.focus() ;
       return false;
  }
    
  return( true );
}
 
