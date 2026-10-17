// Theme switch (dark default, remembered per visitor)
(function(){var root=document.documentElement;
function label(b){var light=root.getAttribute('data-theme')==='light';b.setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');b.setAttribute('aria-pressed',light?'true':'false');}
document.querySelectorAll('[data-theme-toggle]').forEach(function(b){label(b);b.addEventListener('click',function(){
 var next=root.getAttribute('data-theme')==='light'?'dark':'light';root.classList.add('theme-anim');root.setAttribute('data-theme',next);
 try{localStorage.setItem('theme',next);}catch(e){}label(b);setTimeout(function(){root.classList.remove('theme-anim');},450);});});})();
// Live Lagos clock (template "Time Component")
(function(){var el=document.querySelectorAll('[data-clock]');if(!el.length)return;
var f=new Intl.DateTimeFormat('en-GB',{timeZone:'Africa/Lagos',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
function tick(){var t=f.format(new Date());el.forEach(function(e){e.textContent=t;});}tick();setInterval(tick,1000);})();
// Back to top
document.querySelectorAll('[data-top]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});});});
// Year
document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear();});
