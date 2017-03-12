(function($){
 
 'use strict';
 
 $.fn.validolEmail = function(){
 	
   var pattern = /^([A-Za-z0-9_.]){2,15}\@([A-Za-z0-9._]){2,15}\.([A-Za-z0-9._]){2,15}$/;	
   
   var undef = /undefined/;
  
   if(pattern.test($(this).val()) && !undef.test($(this).val())){ 
   	   
   	   return true;	 
   }
   $(this).parent().append("<span style='color:red'>*Email is not correct</span>");
   $(this).parent().find('span').fadeOut(5000);	
     return false;	  	 	
 };
 
  
 $.fn.validolInput = function(min,max){
 	    
    var pattern = new RegExp("^([A-Za-z0-9]){"+min+","+max+"}$");	
 	 	
 	var undef = /undefined/;
 	
 	if(pattern.test($(this).val()) && !undef.test($(this).val()))
 	{	  
 	  return true; 				
 	} 
 	
 	$(this).parent().append("<span style='color:red'>*Please,fill the field  min:"+min+" and max:"+max+"</span>");
 	$(this).parent().find('span').fadeOut(5000);
 	return false; 
 		
 };
 
 $.fn.validolPassword = function(min,max){
   
  var pattern = new RegExp("^([A-Za-z0-9]){"+min+","+max+"}$");	
  	
  var undef = /undefined/;	
  
  if(pattern.test($(this).val()) && !undef.test($(this).val())){ 
   	
   	   return true;	 
   
   }	
    $(this).parent().append("<span style='color:red'>*Please,fill the field  min:"+min+" and max:"+max+"</span>");
 	$(this).parent().find('span').fadeOut(5000); 
    return false;		
 		 
 };
 
 
 $.fn.validolInt = function(min,max){
 	
  var pattern = new RegExp("^([0-9]){"+min+","+max+"}$");	
  	
  var undef = /undefined/;	
  
  if(pattern.test($(this).val()) && !undef.test($(this).val())){ 
   	
   	   return true;	 
   
   }	
    $(this).parent().append("<span style='color:red'>*Only integers accepted min: "+min+" and max: "+max+"</span>");
 	$(this).parent().find('span').fadeOut(5000); 
    return false;		
 	
 	
 };
 
 
 $.fn.validolStr = function(min,max){
   
  var pattern = new RegExp("^([A-Za-z]){"+min+","+max+"}$");	
  	
  var undef = /undefined/;	
  
  if(pattern.test($(this).val()) && !undef.test($(this).val())){ 
   	
   	   return true;	 
   }	
    $(this).parent().append("<span style='color:red'>*Only string values accepted min:"+min+" and max:"+max+"</span>");
 	$(this).parent().find('span').fadeOut(5000); 
    return false;		
 		 
 };
  
  	
})
(jQuery)
