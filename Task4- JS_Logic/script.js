let str=prompt("Enter a string")
str=str.toLowerCase()
str=str.replace(" ","")

let freq=""
let freq2=""
let str_arr=[]
//gets aray of unique characters
for(let ch of str)
{
    if(ch==' ')
        continue
    else if(!str_arr.includes(ch))
        str_arr.push(ch)
}

//checks for frequency
for(let i of str_arr)
{
    let count=0
    for(let ch of str)
    {   
        if(ch==i)
            count++
    }
    freq+= count+" "
    freq2+=i+":"+count+" "
}

//prints required results 
console.log(str_arr.length)
console.log(freq)
console.log(freq2)

