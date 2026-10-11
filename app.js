(function(){var d=document,h=d.documentElement;h.classList.add('js');
var t=d.querySelector('.thread');function u(){var m=h.scrollHeight-h.clientHeight;if(t)t.style.setProperty('--p',(m>0?Math.min(100,h.scrollTop/m*100):0)+'%')}
addEventListener('scroll',u,{passive:true});addEventListener('resize',u);u();
var b=d.querySelector('.bubbles');if(b){for(var i=0;i<14;i++){var s=document.createElement('i');s.className='bubble';var z=10+Math.random()*46;s.style.cssText='left:'+Math.random()*100+'%;width:'+z+'px;height:'+z+'px;animation-duration:'+(22+Math.random()*30)+'s;animation-delay:-'+Math.random()*40+'s;--dx:'+(Math.random()*80-40)+'px';b.appendChild(s)}}
var r=[].slice.call(d.querySelectorAll('.reveal'));
if(!('IntersectionObserver' in window)){r.forEach(function(x){x.classList.add('in')})}else{
r.forEach(function(x){var p=x.parentElement,k=[].indexOf.call(p.children,x);x.style.setProperty('--d',Math.min(k,6)*.08+'s')});
var o=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');o.unobserve(en.target)}})},{threshold:.12});r.forEach(function(x){o.observe(x)})}
var ts=d.querySelector('.ts');if(ts){var s0=Date.now();setInterval(function(){var n=Math.floor((Date.now()-s0)/1000)+2724,p=function(v){return('0'+v).slice(-2)};ts.textContent='03:'+p(Math.floor(n/60)%60)+':'+p(n%60)},1000)}
})();