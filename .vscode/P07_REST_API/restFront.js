function getUser(){

    var xhr = new XMLHttpRequest(); 
    xhr.onload = function(){

        if(xhr.status == 200){

            var users = JSON.parse(xhr.responseText); 
            var List  = document.getElementById('List'); 
            List.innerHTML =''; 
            Object.keys(users).map(function(key){
                    

            });

        }

    }


}