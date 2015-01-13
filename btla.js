$( document ).ready(function() {
    // 
   // $this->response->setHeader('Access-Control-Allow-Origin', '*');
    $("#submit-phone").click(function(){
        //$("#login").hide();
        
      $.ajax({
          dataType: 'json',
          data: null,
         
          url: 'http://www.artech.org.il/?option=com_ajax&plugin=session&format=json',
          success: function (response) {
            alert(response.text)
          },
        });
          
      
        
        
        
     
    });
    
 });