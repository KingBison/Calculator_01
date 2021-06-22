var text_section = "";
var function_used = "";
var first_int = "";
var output;


            function updateText(){
                if(text_section!=""){
                    document.getElementById("text_section").innerHTML = text_section;
                }else{
                    document.getElementById("text_section").innerHTML = "        ";
                }
                
                if(first_text!=""){
                    document.getElementById("first_text").innerHTML = first_int;
                }else{
                    document.getElementById("first_text").innerHTML = "--------";
                }
                
            }

            updateText()


            document.getElementById("zero").addEventListener("click", zero)
            function zero() {
                text_section = text_section + "0";
                updateText();
            }

            document.getElementById("one").addEventListener("click", one)
            function one() {
                text_section = text_section + "1";
                updateText();
            }
            document.getElementById("two").addEventListener("click", two)
            function two() {
                text_section = text_section + "2";
                updateText();
            }
            document.getElementById("three").addEventListener("click", three)
            function three() {
                text_section = text_section + "3";
                updateText();
            }
            document.getElementById("four").addEventListener("click", four)
            function four() {
                text_section = text_section + "4";
                updateText();
            }
            document.getElementById("five").addEventListener("click", five)
            function five() {
                text_section = text_section + "5";
                updateText();
            }
            document.getElementById("six").addEventListener("click", six)
            function six() {
                text_section = text_section + "6";
                updateText();
            }
            document.getElementById("seven").addEventListener("click", seven)
            function seven() {
                text_section = text_section + "7";
                updateText();
            }
            document.getElementById("eight").addEventListener("click", eight)
            function eight() {
                text_section = text_section + "8";
                updateText();
            }
            document.getElementById("nine").addEventListener("click", nine)
            function nine() {
                text_section = text_section + "9";
                updateText();
            }
            document.getElementById("plus").addEventListener("click", plus)
            function plus() {
                first_int = text_section;
                function_used = "+";
                text_section = "";
                updateText();
            }
            document.getElementById("minus").addEventListener("click", minus)
            function minus() {
                first_int = text_section;
                function_used = "-";
                text_section = "";
                updateText();
            }
            document.getElementById("times").addEventListener("click", times)
            function times() {
                first_int = text_section;
                function_used = "*";
                text_section = "";
                updateText();
            }
            document.getElementById("divide").addEventListener("click", divide)
            function divide() {
                first_int = text_section;
                function_used = "/";
                text_section = "";
                updateText();
            }
            document.getElementById("equal").addEventListener("click", equal)
            function equal() {
                if(function_used == "+") {
                    output = parseFloat(text_section) + parseFloat(first_int);
                    first_int = "";
                    text_section = output;
                }
                else if(function_used == "-"){
                    output = parseFloat(first_int) - parseFloat(text_section);
                    first_int = "";
                    text_section = output;
                } 
                else if(function_used == "*"){
                    output = parseFloat(first_int) * parseFloat(text_section);
                    first_int = "";
                    text_section = output;
                } 
                else if(function_used == "/"){
                    output = parseFloat(first_int) / parseFloat(text_section);
                    first_int = "";
                    text_section = output;
                } 

                function_used = ""
            
                updateText();
            }

            document.getElementById("clear").addEventListener("click", clear)
            function clear() {
                first_int = "";
                function_used = "";
                text_section = "";
                updateText();
            }