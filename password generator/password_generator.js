
class Random{
  getFileName(callback)
  {
    let input = document.getElementById("filename_input");
    let str;
    input.addEventListener("keyup",function(event){
      if(event.key==="Enter"){
        str=input.value;
        console.log(str)
        input.value="";
        callback(str);
      }
    });
  }
  
  getInputLength(callback) 
  {
    let input = document.getElementById("my_input");
    let length;
    input.addEventListener("keyup", function(event) 
    {
        if (event.key === "Enter") 
        {
          length=input.value;
          input.value = "";
          callback(length)
          //console.log(length);
        }
    });
  }

  stringGen(length) 
  {
    const alphabet = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
      "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
      "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    let res = "";
    for (let i = 0; i < length; i++) {
      res += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return res;
    //console.log(res);
  }

  numberGen(length) 
  {
    const number = [
      '0','1','2','3','4','5','6','7','8','9'
    ];

    let res = "";
    for (let i = 0; i < length; i++) {
      res += number[Math.floor(Math.random() * number.length)];
    }
    return res;
    console.log(res);
  }  

  spCharGen(length) {
    const spChars = ["@", "#", "$", "^", "&", "*", "!", "~", "/", "*", "-"];
    let res = "";
    for (let k = 0; k < length; k++) {
      res += spChars[Math.floor(Math.random() * spChars.length)];
    }
    return res;
    console.log(res)
  }

  strNumGen(length){
      const strNum = [ 
      "a", "b", "c", "d", "e",'1',"f", "g",'2', "h", "i", "j", "k", "l", 
      "m", "n",'3', "o","p", "q", "r",'4', "s", "t", "u", "v", "w", "x", 
      "y", "z","A", "B",'5',"C",'6', "D", "E", "F", "G", "H", "I", '7', "J", 
      "K", "L", "M", "N", "O","P", "Q", '8', "R", "S", "T", "U", "V", 
      "W", "X", "Y", "Z",'9'
    ];
      let res = "";
      for (let k = 0; k < length; k++) {
        res += strNum[Math.floor(Math.random() * strNum.length)];
      }
      return res;
      console.log(res)
    }

    strSymGen(length){
    const strSym=["a", "b", "c", "$", "d", "e", "f", "g", "h", "i", "*", "j", "k", "l", "m", "n", "o",
      "p", "q", "r", "s", "t",  "!", "u", "v", "w", "/", "x", "y", "z","@",
      "A", "B", "C", "&", "D", "E", "F", "G", "H", "-", "I", "J", "K", "L", "#", "M", "N", "O",
      "P", "Q", "^", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","~"];
      let res = "";
      for (let k = 0; k < length; k++) {
        res += strSym[Math.floor(Math.random() * strSym.length)];
      }
      return res;
      console.log(res)
    }

    numSymGen(length){
      const numSym=['0','1','2','3','4','5','6','7','8','9',
      "@", "#", "$", "^", "&", "*", "!", "~", "/", "*", "-"]
      let res = "";
      for (let k = 0; k < length; k++) {
        res += numSym[Math.floor(Math.random() * numSym.length)];
      }
      return res;
      console.log(res)
    }

    strSymNumGen(length){
    const strSym=["a", "b", '1', "c", "$", "d", '5', "e", "f", "g", "h", "i", "*", 
      "j", "k", "l", "m", '4', "n", "o","p", '8', "q", "r", "s", "t",  "!", "u", "v", 
      '7', "w", "/", "x", "y", "z","@",'0',"A", '6', "B", "C", '2', "&", "D", '3', "E", 
      "F", "G", "H", "-", "I", "J", "K", "L", "#", "M", "N", "O","P", "Q", "^", "R", "S",
      "T","~", "U", "V", "W", "X", "Y", "Z",'9'];
      let res = "";
      for (let k = 0; k < length; k++) {
        res += strSym[Math.floor(Math.random() * strSym.length)];
      }
      return res;
      console.log(res)
    }

  }



  class Check{
    constructor(){
      this.alphabet = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
      "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
      "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
      ];
      this.num=['0','1','2','3','4','5','6','7','8','9']
      this.spChars = ["@", "#", "$", "^", "&", "*", "!", "~", "/", "*", "-"]; 
    }
    
    
    ispresentNum(str){
      for(let i=0;i<str.length;i++)
      {
          if(this.num.includes(str[i])){
            return true;
          }
      }
      return false;
    }

    ispresentSym(str){
      for(let i=0;i<str.length;i++)
      {
          if(this.spChars.includes(str[i])){
            return true;
          }
      }
      return false;
    }
  }

  class SaveFile{
      createFile(str1,fname) {
      console.log(str1);
      const data = str1;
      const textToBLOB = new Blob([data], { type: "text/plain" });
      const filename = fname;

      let newLink = document.createElement("a");
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.download = filename;
      newLink.style.display = "none";
      document.body.appendChild(newLink);
      newLink.click();
      document.body.removeChild(newLink);
    }
  }

  function main(){
  const r=new Random();
  const c=new Check();
  const s=new SaveFile();
  let str1,str2,str3,str4,str5,str6,str7;
        
  const buttonToTxt1=document.getElementById('bt1');
  const buttonToTxt2=document.getElementById('bt2');
  const buttonToTxt3=document.getElementById('bt3');    
  const buttonToTxt4=document.getElementById('bt4');
  const buttonToTxt5=document.getElementById('bt5');
  const buttonToTxt6=document.getElementById('bt6');
  const buttonToTxt7=document.getElementById('bt7');

  r.getFileName(function(name_file){
    r.getInputLength(function(length){
      var num1=length;
      console.log(num1);

      var fname=name_file;
      const generateButton1=document.getElementById("button1");
      const output1=document.getElementById("myOutput1");

      generateButton1.addEventListener("click",function(){
        str1=r.stringGen(length);
        console.log(str1);
        //const password=r.stringGen(length);
        output1.textContent=str1;   
        buttonToTxt1.addEventListener('click',function(){
          console.log(str1);
          console.log(fname);
          s.createFile(str1,fname);
        })
      });

      const generateButton2=document.getElementById("button2"); 
      const output2=document.getElementById("myOutput2")

      generateButton2.addEventListener("click",function(){
        str2=r.numberGen(length);
        console.log(str2);
        // const password2=r.numberGen(length);
        output2.textContent=str2;
        buttonToTxt2.addEventListener('click',function(){
          console.log(str2);
          console.log(fname);
          s.createFile(str2,fname);
        })
      })

      const generateButton3=document.getElementById("button3"); 
      const output3=document.getElementById("myOutput3")

      generateButton3.addEventListener("click",function(){
        str3=r.spCharGen(length);
        console.log(str3);
        // const password3=r.spCharGen(length);
        output3.textContent=str3;
        buttonToTxt3.addEventListener('click',function(){
          console.log(str3);
          console.log(fname);
          s.createFile(str3,fname);
        })
      })

      console.log(str4);
      const generateButton4=document.getElementById("button4"); 
      const output4=document.getElementById("myOutput4")

      generateButton4.addEventListener("click",function(){
        generateValidPassword4(length,fname);
      })
      
      function generateValidPassword4(length, fname) {
        const password = r.strNumGen(length);
        if (c.ispresentNum(password) === true) {
          output4.textContent = password;
          buttonToTxt4.addEventListener("click", function() {
          console.log(password);
          console.log(fname);
          s.createFile(password, fname);
          });
        } 
        else {
        generateValidPassword4(length, fname); // Call the function again recursively
        }
      }

      const generateButton5=document.getElementById("button5"); 
      const output5=document.getElementById("myOutput5");

      generateButton5.addEventListener("click",function(){
        generateValidPassword5(length,fname);
      });


      function generateValidPassword5(length,fname){
        const str5=r.strSymGen(length);
        if(c.ispresentSym(str5)=== true){
            output5.textContent=str5;
            buttonToTxt5.addEventListener('click',function(){
            console.log(str5);
            console.log(fname);
            s.createFile(str5,fname);
          })
        }
        else{
          generateValidPassword5(length, fname);
        }
      }
      
      const generateButton6=document.getElementById("button6"); 
      const output6=document.getElementById("myOutput6")

      generateButton6.addEventListener("click",function(){
        generateValidPassword6(length,fname);
      });
      
      function generateValidPassword6(length,fname){
        const str6=r.numSymGen(length);
        if(c.ispresentSym(str6)===true){
          output6.textContent=str6;
          buttonToTxt6.addEventListener('click',function(){
          console.log(str6);
          console.log(fname);
          s.createFile(str6,fname);
          })
        }
        else{
          generateValidPassword6(length,fname);
        }
      }

      const generateButton7=document.getElementById("button7"); 
      const output7=document.getElementById("myOutput7")

      generateButton7.addEventListener("click",function(){
        generateValidPassword7(length,fname);
      });

      function generateValidPassword7(length,fname){
        const str7=r.strSymNumGen(length);
        if(c.ispresentSym(str7) && c.ispresentNum(str7)){
          output7.textContent=str7;
            buttonToTxt7.addEventListener('click',function(){
            console.log(str7);
            console.log(fname);
            s.createFile(str7,fname);
          })
        }
        else{
          generateValidPassword7(length,fname);
        }
      }
    });
  });

  }
  main();