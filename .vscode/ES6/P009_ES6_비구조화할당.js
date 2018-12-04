var test = [ ["bHideResizeNotice", "1"] , [" mycookie", "test"] ].reduce(    (acc,[k,v])=>{ acc[k.trim()] = decodeURIComponent(v); return acc;},    {}   ); 







var array= [["bHideResizeNotice", "1"]];  
var good = array.reduce(    (acc,[k,v])=>{ acc[k.trim()] = decodeURIComponent(v); return acc;},    {}   ); 



console.log(good); 