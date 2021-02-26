var span = document.getElementsByClassName('flecha');
var div = document.getElementsByClassName('ccard');
var a= 0;
span[1].onclick=()=>{
    a++;
    for(var i of div)
    {
        if(a==0){i.style.transform='translateX(0px)';}
        if(a==1){i.style.transform='translateX(-300px)';}
        if(a==2){i.style.transform='translateX(-600px)'}
        if(a==3){i.style.transform='translateX(-900px)';}
        if(a==4){i.style.transform='translateX(-1200px)';}
        if(a>4){i.style.transform='translateX(0px)';a=0}
    }
    
}
span[0].onclick=()=>{
    a--;
    for(var i of div)
    {
        if(a==0){i.style.transform='translateX(0px)';}
        if(a==1){i.style.transform='translateX(-300px)';}
        if(a==2){i.style.transform='translateX(-600px)'}
        if(a==3){i.style.transform='translateX(-900px)';}
        if(a==4){i.style.transform='translateX(-1200px)';}
        if(a<0){a+1}
       
    }
    
}
span[3].onclick=()=>{
    a++;
    for(var i of div)
    {
        if(a==0){i.style.transform='translateX(0px)';}
        if(a==1){i.style.transform='translateX(-300px)';}
        if(a==2){i.style.transform='translateX(-600px)'}
        if(a==3){i.style.transform='translateX(-900px)';}
        if(a==4){i.style.transform='translateX(-1200px)';}
        if(a>4){i.style.transform='translateX(0px)';a=0}
    }
    
}
span[2].onclick=()=>{
    a--;
    for(var i of div)
    {
        if(a==0){i.style.transform='translateX(0px)';}
        if(a==1){i.style.transform='translateX(-300px)';}
        if(a==2){i.style.transform='translateX(-600px)'}
        if(a==3){i.style.transform='translateX(-900px)';}
        if(a==4){i.style.transform='translateX(-1200px)';}
        if(a<0){a+1}
       
    }
    
}



