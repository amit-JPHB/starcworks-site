const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');obs.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
