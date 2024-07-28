let str=prompt("Enter a string")
console.log("Iput string: "+str)
str=str.toLowerCase()
str=str.replace(" ","")

let freq1=""
let freq2=""
let count=0 
//count stores value of number of unique characters
const char_arr={}
//creating objects of unique characters
for(let ch of str)
{
    //if charcter exists in object , increment value by 1 
    if(char_arr[ch])
        char_arr[ch]+=1
    //else add character to the object with initial value, and incremenet count by 1
    else{
        count++;
        char_arr[ch]=1
    }
}

//prints required results 
console.log(count)
for(let key in char_arr)
{
    freq1+=char_arr[key]+" "
    freq2+=key+":"+char_arr[key]+", "
}
console.log(freq1)
console.log(freq2)
