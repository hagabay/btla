$( document ).ready(function() {
    // 
   // $this->response->setHeader('Access-Control-Allow-Origin', '*');
    $("#submit-phone").click(function(){
      $("#login").hide();
        
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
                     $("#users").append('<li><a class="selecteduser" href="#" id="bosid-'+item.bosid+'" '+temp+'>'+item.username+"</li>");   
                    
                });
               $("li a[id^='bosid']").click(function(){
                        $("#users").hide();
                        $("#sendForm").show();
                       $.each(this.attributes, function(i, attrib){
                             var name = attrib.name;
                             var value = attrib.value;
                           if(name.indexOf("data")==0)
                               $("#form2").append('<input type="hidden" name="jform['+name+']" value="'+value+'" />');
                          });
                   var header = "<h2>"+$(this).attr("data-username")+'</h2>';
                   header += '<div class="tomech">'+$(this).attr("data-ttitle")+' '+$(this).attr("data-mentorname")+'<span>'+$(this).attr("data-ptitle")+' <a href="tel:'+$(this).attr("data-mentorphone")+'">'+$(this).attr("data-mentorphone")+'</a></span></div>';
                    $("#sendForm").prepend(header);
                    $("#form2").append('<input type="hidden" name="'+obj.message+'" value="1" />');
                });
          } //success
          

         
        }); //ajax

        
     
    }); //submit phone
    
    $("#submit-form").click(function(){
      //  alert("submit");
        var data = $("#form2").serialize();
       // alert(data);
        $.post("http://www.artech.org.il/index.php?option=com_btla_tracing&task=boss.save&tmpl=component",data,function(d){  $("#sendForm").hide(); 
                                                                                                                          $("#thanks").show();},'jsonp');
        
    });
 });