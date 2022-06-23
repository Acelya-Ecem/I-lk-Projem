//$(seçici).fonksiyon

/* $(document).ready(function(){ //doküman hazır olduğunda (?Bu fonksiyon oluştu/oluşur?)
    
});
*/

//seçici (?Class'a .?) id ise başına #

$(document).ready(function(){
    $("#button1").click(function(){
        var isim = "Acelya";
        alert("Merhaba 1 " + isim);
    });

    $("#button2").click(function(){
        alert("Merhaba 2");
    });
});