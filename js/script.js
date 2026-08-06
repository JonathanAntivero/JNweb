const secs=document.querySelectorAll('section[id]'); emailjs.init('CTIQ_fKo_fndVen_u');
const navAs=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur='';
  secs.forEach(s=>{if(window.scrollY>=s.offsetTop-120)cur=s.id});
  navAs.forEach(a=>{a.style.color=a.getAttribute('href')==='#'+cur?'var(--bright)':''});
});
function handleSubmit(e) {
  e.preventDefault();
  // Honeypot: si el bot completó este campo, no se va a enviar nada 
  const honeypot = e.target.querySelector('[name="website"]');
  if (honeypot && honeypot.value !==''){
    return;
  }
  const btn = e.target.querySelector('button[type="submit"]');
  emailjs.sendForm('service_xk5twd7', 'template_tfot3wt', e.target)
    .then(() => {
      btn.textContent = '✓ Mensaje enviado';
      btn.style.background = '#25d366';
      btn.style.color = '#fff';
    })
    .catch(() => alert('Error al enviar el mensaje. Por favor, intentá de nuevo.'));
  }