const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');obs.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

/* generic modal wiring: any [data-open="id"] button opens .modal-overlay#id */
(function(){
  function close(o){o.hidden=true;document.body.classList.remove('modal-open');}
  document.querySelectorAll('[data-open]').forEach(function(b){
    b.addEventListener('click',function(){
      var m=document.getElementById(b.getAttribute('data-open'));
      if(!m)return;
      m.hidden=false;document.body.classList.add('modal-open');
      var c=m.querySelector('.modal-close');if(c)c.focus();
    });
  });
  document.querySelectorAll('.modal-overlay').forEach(function(o){
    o.addEventListener('click',function(e){if(e.target===o)close(o);});
    var c=o.querySelector('.modal-close');
    if(c)c.addEventListener('click',function(){close(o);});
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape')document.querySelectorAll('.modal-overlay:not([hidden])').forEach(close);
  });
})();
