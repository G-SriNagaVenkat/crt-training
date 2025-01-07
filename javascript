JavaScript is a scripting language. JavaScript is loosely coupled.

- It is used for creating interactive web pages.
- It is used for creating desktop and mobile applications.
- It is used for server-side programming with technologies like Node.js.

Applications of JavaScript:
- Mobile applications
- Gaming applications
- Server-side applications
- Web applications
Variables :-
- Variables are used to store data in JavaScript.
- They are case sensitive

types of Variables
- let: It is a block scope variable, which means it is only 
accessible within the block it is declared in. It can be reassigned.

- const: It is also a block scope variable, 
but it cannot be reassigned. It is used for declaring constants.

- var: It is a function scope variable, 
which means it is accessible throughout the function it is declared in. It can be reassigned.

example codes:
 <script>
        let name="venkat"
        {
            let name="durga"
            console.log(name);
            console.log(name);
            document.write(name,"<br>"); 
        }
          
          console.log(name)
        console.log(name)
        document.write(name)
    </script>
Dynamic type language
Two types
1)primitive
2) Non - Primitive data type
primitive data type: predefined; we can store single values
1)Numbers: integers,floats
2) String : Stream of chareters enclosed in quotes
--single ,double ,backtick quotes;
3) Boolean: true or false
4) Null: nothing
5) Undefined: no value assigned

-->1)Numbers: +,-,
ex:-1,1,-4,5.6 etc
-->2) String : Stream of chareters enclosed in quotes
ex: "venkat" ,"hemalatha" ,"karuna", etc
exemple code:
  <script>
    let name="venkat"
    console.log(name)
  </script>
-->3) Boolean: true or false
ex:True or false
example code for all the baove one using typeof
<script>
let name="venkat"
console.log(typeof name);
console.log(typeof 5);
console.log(typeof true);
console.log(typeof null);
</script>
