console.log('Loaded!');
 var button= document.getElementById("but");
            button.onclick = function(){

              
              var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
       // if (xhttp.readyState === XML.HttpRequest.DONE) {
           // if(xhttp.status === 200){
           if (this.readyState == 4 && this.status == 200){

                         var counter=xhttp.responseText;
              var counte=document.getElementById("count");

              counte.innerHTML=counter.toString();
           }
          //  }
      // }
    }
    xhttp.open("GET", "http://arunprasaadc.imad.hasura-app.io/counter",true);
    xhttp.send(null);
     
};

//p6
var submit= document.getElementById("submitid");
            submit.onclick= function(){
              var box=document.getElementById("txtvalue"); 
                 var xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange=function(){
      
                if (this.readyState == 4 && this.status == 200){
                            var arun=[];
                         var arun=xhttp.responseText;
                         

                        
                         
                      
               
                var b=box.value;
                arun=JSON.parse(arun);
             
                var list='';
                for(var i=0;i<arun.length;i++){
               list += '<li>'+arun[i]+'</li>';
               // list += '<li>'+names[i]+'</li>';
                }
                var ui=document.getElementById("uivalue");
                ui.innerHTML=list;
                     }
             
                      }
                      var box1=document.getElementById("txtvalue").value;
                      
                      xhttp.open('GET', 'http://arunprasaadc.imad.hasura-app.io/submit?name=' + box1,true);
             xhttp.send(null);
  
     
              
            };