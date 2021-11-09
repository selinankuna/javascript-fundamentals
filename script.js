const names = ["selina", "kagiso", "pericus","wandile","mdudzi","sithembiso","sophie","happ","lucky","mhlompheni","nkosiphandule","vusumzi"];

const display=document.getElementById("display");
for(let i=0; i < names.length; i++){
    display.innerHTML += "<hr>" + names[i] + "</hr>";
}