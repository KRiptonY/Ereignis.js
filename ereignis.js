'use strict';


let ereignis = {}, 
    counter_elements = 0;

HTMLElement.prototype.addEreignisListener = function (evt, handler) {
    
    sieve( [evt,handler] );

    this.addEventListener(evt, handler);
  
    if ( !ereignis[evt] ) {
        ereignis[evt] = {};
        ereignis[evt]['el_'+counter_elements] = {
            func: handler,
            curr: this
        };
        
        if ( !document[evt] ) {

             HTMLElement.prototype[evt] = function () {

                    let i;
                    for ( i in ereignis[evt] ) {

                        if ( this == ereignis[evt][i].curr ) {
                            ereignis[evt][i].func();
                        return;
                        }

                    }  

                }; 

        } 
    } 


}

function sieve (els) {

    if ( typeof els[0] !== "string" ) throw new Error ( " addEreignisListener:  The first parameter expects a string" );
    if ( typeof els[1] !== "function" ) throw new Error ( " addEreignisListener:  The second parameter was expected function" ); 

}
