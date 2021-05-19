setInterval(() => {
    d = new Date() ;
    h = d.getHours() ;
    m = d.getMinutes() ;
    s = d.getSeconds() ;
    hrotation = 30 * h + m / 2 ;
    mrotation = 6 * m ;
    srotation = 6 * s ;
    
    hour.style.transform = `rotate(${hrotation}deg)` ;
    min.style.transform = `rotate(${mrotation}deg)` ;
    sec.style.transform = `rotate(${srotation}deg)` ;
}, 1000);