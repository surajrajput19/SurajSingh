/*================ scroll reveal ====================*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .skill-content, .contact from',{ origin: 'buttom'} );
 ScrollReveal().reveal('.home-contact h3, .about-img',{ origin: 'left'});
 ScrollReveal().reveal(' .home-contact p, .about-content', {origin: 'right'});

 /*================ typed  js ====================*/
 const typed = new Typed('.multiple-text',{
    strings: ['Suraj Singh', 'Web Designer', 'Photographer', 'Video Editor'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  
 });