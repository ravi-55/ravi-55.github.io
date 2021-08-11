function start(name){
  return document.getElementsByClassName(name);
}
 
let tabPanes = start("tab-header")[0].getElementsByTagName("div");
 
for(let i=0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    start("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");
    
    start("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;
    
    start("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    start("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
    
  });
}