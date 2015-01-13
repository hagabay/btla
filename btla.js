$( document ).ready(function() {
    // 
   // $this->response->setHeader('Access-Control-Allow-Origin', '*');
    $("#submit-phone").click(function(){
     //   $("#login").hide();
        
      $.ajax({
          dataType: 'jsonp',
          data: {phone:$("#phone").val()},
          jsonp: 'jsonCallback',
          url: 'http://www.artech.org.il/index.php?option=com_btla_boss&tmpl=component&view=jobsitems&layout=users',
          success: function (response) {
              //$("#users").html(JSON.stringify(response, null, 2));
            //  $.parseJSON(JSON.stringify(response, null, 2));
               var obj = $.parseJSON( JSON.stringify(response, null, 2) );
             // alert( obj.data );
              $.each(obj.data, function(i, item) {
                   var temp = '';
                    $.each(item, function(j, val) {
                        temp += 'data-'+j+'="'+val+'" ';
                    });
                     $("#users").append('<li><a href="http://www.artech.org.il/index.php?option=com_btla_boss&tmpl=component&" id="bosid-'+item.bosid+'" '+temp+'>'+item.username+"</li>");                
                });
          }
          

         
        });
          
      
        
        
        
     
    });
    
 });