var total = 1000;
var completedValue=0;
var previousValue=0;
function saveFunction(){
	alert("SAVED");
    };
    
function incr() { 
        var x = parseInt(document.getElementById("donateval").value);
        previousValue = completedValue;
        completedValue = completedValue + x;
            if(completedValue==1000)
                {
                    document.getElementById("value").innerHTML = "Project Accomplished";
                }
            else if(completedValue>1000){
                alert("Donation should be less than " + (total - previousValue));
            }
            else{
            document.getElementById("value").innerHTML ="$"+(total-completedValue)+" still needed for this project";
            document.getElementsByTagName("progress")[0].setAttribute("value",completedValue);
            }	
			
}