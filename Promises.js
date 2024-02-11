let p1= new Promise((resolve,reject)=>{

    let status=false;
    setTimeout(()=>{
        status=true;
    },5000)

    if(status)
    {
        resolve('This is my first progream on Promises.')
    }
    else{
        reject('I have not understood the program: ');
    }
})
console.log(p1);
p1.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})


console.log('hello');