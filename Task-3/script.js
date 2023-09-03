function solve(after){
    document.querySelector('input').value= Math.sqrt(after);
}
let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='√'){
            string=Math.sqrt(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='del'){
            var l=string.length;
            string=string.slice(0,l-1);
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})
