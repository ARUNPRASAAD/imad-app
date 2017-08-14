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
              