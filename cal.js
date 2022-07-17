function clr()
         {
             document.getElementById("answer").value = ""
         }
function answer()
        {
            let x = document.getElementById("answer").value
            let y = eval(x)
            document.getElementById("answer").value = y
        }
    
        function dis(val){
			var f=document.querySelector("#answer");
			var rgex=/^[0-9]+$|[0-9]+[+*/-][0-9]+/g
			var reg=/^[\d]+[/][0]/
			f.value+=val;
			if(rgex.test(f.value) & !(reg.test(f.value))){
					document.querySelector("#answer").style.backgroundColor="lightgreen";
				}
			else{
				document.querySelector("#answer").style.backgroundColor="red";
				}	
			}
       