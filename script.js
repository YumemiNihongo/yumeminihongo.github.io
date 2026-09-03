document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
// Small touch-friendly interaction for the static GitHub Pages site.
document.querySelectorAll('.level-card, .material').forEach(card=>{
  card.addEventListener('keydown', e=>{
    if(e.key==='Enter') card.querySelector('a')?.click();
  });
});
