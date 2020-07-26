let readline=require('readline');let rl = readline.createInterface({input:process.stdin,output:process.stdout});
const q=(str)=>new Promise(resolve=>rl.question(str,resolve));
(async()=>{let l=await q('Password Lenght: ')
p(l.length?l:10);
})();
function p(l){let ch="\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~\'",c=[];while(c.length<l)c.push(ch[Math.floor((Math.random()*ch.length-1)+1)]);return console.log('Password: ',c.join(""));}
