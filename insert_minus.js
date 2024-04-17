// chen dau tru vao giua 2 so chan
let num = prompt('Enter a number');
let str = num.toString();
let result = [str[0]];
for (let i = 1; i < str.length; i++) {
    if (str[i]%2===0&&str[i-1]%2===0){
        result.push('-',str[i]);
    } else result.push(str[i]);
}
document.write(result.join(''));
