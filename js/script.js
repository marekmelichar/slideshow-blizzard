(function($) {

    var ul = $('ul'),
        li = ul.find('li'), // v ul najde vsechny li
        i = $('#current').find('img').data('index'), // v #current najde vsechny img a rozlisi podle indexu
        bigSize = 940,
        smallSize = 875;
    
    ul.css({
        width: li.length * li.outerWidth()
    });
    
    ul.animate({ 
        left: ul.position().left - smallSize*(i-1) }, 1000); // zacne web a obrazek 875px zajede pod obrazek 940px, takze je pod nim schovany
    
    
    
    
    $('#prev, #next').click(function(e) /* funkce na kliknuti na obrazek */
       { 
        if ( ul.is(':animated') ) return false; /* na vic kliknuti se nereaguje, posune se jen jeden obrazek */
        
        
        
        
        
        
        
        if(e.target.id === 'next')
            
            
            
            
            {
                
                
                i = (++i /* pokud zvysim i */ <= li.length /* a je to mensi nebo rovno poctu obrazku */) ? i /* chci aktualni cislo obrazku */ : 1 /* a nebo prvni */; 
      
        var newImg = $('img[data-index="'+i+'"]').clone();
            newImg.css({ left: bigSize*2 }).appendTo('#current p');
        
        
        $('#current img:first-child').animate({ left: 0 }, 1000, function() { $(this).remove(); }); 
        $('#current img:last-child').animate({ left: bigSize }, 1000);
        
        
        
            ul.animate({ left: ul.position().left - smallSize }, 1000, function()
                       
        {            
            var tmp = ul.children(':first-child').detach(); /* vyjme prvni obrazek seznamu */ 
            ul.append(tmp).css({ left: ul.position().left + smallSize });/* soupne prvni obrazek seznamu na konec rady, potom korekce posuvu obrazku */    
                
         });
                
                
            }
        
        
        
    else if (e.target.id === 'prev')
        
        
        
            {
                
                  i = (--i /* pokud snizim i */ >= 1 /* a je to stale vetsi nebo rovno poctu obrazku */) ? i /* chci aktualni cislo obrazku */ : li.length /* a nebo cislo polozky tohoto seznamu */; 
      
        var newImg = $('img[data-index="'+i+'"]').clone();
            newImg.css({ left: 0 }).appendTo('#current p');
        
        
        $('#current img:first-child').animate({ left: bigSize*2 }, 1000, function() { $(this).remove(); }); 
        $('#current img:last-child').animate({ left: bigSize }, 1000);
        
        
        
            ul.animate({ left: ul.position().left + smallSize }, 1000, function()
                       
        {            
            var tmp = ul.children(':last-child').detach(); /* vyjme posledni obrazek seznamu */ 
            ul.prepend(tmp).css({ left: ul.position().left - smallSize });/* soupne posledni obrazek seznamu na zacatek rady, potom korekce posuvu obrazku */    
                
         });
                
                
            }
        
        
        
        
        
        
       
    });
  
})(jQuery);
  