{/*let i = 1
let x = 1
while(i<=9){
    for(let j = 7; j <= 7 && j>=5  ;j--){
    console.log("I="+i+" J="+j)
    }
    i = x * 3
    x++
}*/}

let j = 7
let primeiro = 7


for(let i=1;i<=9;i=i+2){
    let count = 0
    primeiro = primeiro + 2
    for(j; count < 3 ;j--){
        count++
        console.log("I="+i+" J="+j)   
    }
    j=primeiro
    
}

