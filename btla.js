$( document ).ready(function() {
    // 
   // $this->response->setHeader('Access-Control-Allow-Origin', '*');
    $("#submit-phone").click(function(){
        $("#login").hide();
        
      $.ajax({
          dataType: 'jsonp',
          data: null,
          jsonp: 'jsonCallback',
          url: 'http://www.artech.org.il/index.php?option=com_btla_boss&tmpl=component&view=jobsitems&layout=users',
          success: function (response) {
              $("#users").html(JSON.stringify(response, null, 2));
          },
        });
          
      
        
        
        
     
    });
    
 });