
# C# Interview Questions
https://www.youtube.com/watch?v=BKynEBPqiIM
Questpond 






## What is the difference between C# and .Net? 
- C# is the programming language, .Net is the framework. 
- .Net is a collection of libraries, and it has 
 - a runtime
 - a CLR
 -  garbage collector
 -  CTS
 -  CLS. 

## Difference Between .Net Framework, .Net Core, and .Net 5.0

.Net Framework
 - only works on Windows
 - slow, compared to Core
 - supports Winform, WPF, ASP.Net, webforms, ASP.Net MVC 5
 - has WCF, WPF, WWF
 - packaged as one big framwork
 - no microservice support
 - no cli, IDE-based
 - no support for mobile compatibility
 - cloud support only for windows

.Net Core
- cross platform: linus, mac, and windows
- faster than .net framework
- supports WVC core 3.x 
- no support for WCF, WPF, WWF
- packaged as modules via Nuget
- microservice support
- full cli command
- with .Net Standard, compatible with Xamarin 
- cloud support

.Net 5.0 
- .Net 5.0 is a unified platform which unifies all .Net runtimes such as .Net Framework, .Net Core, Mono, etc. 
- Developers no longer need to choose between core, framework, and Mono based on which platform they're developing their app. 
- This provides a common experience to developers irrespective of which .Net version they are working with. 
  

## What is IL Code? 
C# has to be converted to machine language in order to run on a computer. It is first compiled into partially compiled code called IL ( Intermediate Language ). The code is later finished compiled by the JIT compiler. 


## What is the use of JIT? 
JIT compiles the IL code into machine language. 


## Why do we compile to IL first? 
Because of the difference between the dev environment and the runtime environment. The developer may be developing on a different operating system than the end-use. In order for the end-user to always be able to run the code, it first gets saved in IL code, and then compiled to a compatible machine code using the JIT compiler. 


## Does .Net Support Multiple Languages
- .Net supports C#, VB .Net, F#, C++, and more 

It doesn't matter which code you use at dev time, it still gets compiled into IL code, which the JIT will compile to machine code. 


## What is CLR ( Common Language Runtime ) 
 - It converts your IL code to Native language
 - it runs your application and any unused memory is consumed by garbage collector. 


 ## What is the Difference Between Managed Code and Unmanaged Code
 - Code that executes under the environment of CLR is called managed code. 
 - Unmanaged code have their own environment in which the code runs and is completely outside the control of CLR. 


 ## Explain the Importance of Garbage Collector 
 Garbage collector is a background process that runs continuously and claims any kind of unused *managed* resources. 


## Can Garbage Collector Claim Unmanaged Resources? 
No, garbage collector can only claim managed resources. 


## Explain the Importance of CTS ( Common Type System ) 
CTS ensures that data types defined in two difference languaged gets compiled to a common data type of the .Net framework. 


## Explain CLS ( Common Language Specification ) 
CLS is a set of guidelines that, if followed, allow the code written in different languages to be resused easily
- case-sensitive vs not case-sensitive
- some use pointers, some don't 
- function language vs non functional language 


## Explain the Difference Between Stack and Heap 
Stack and heap are memory types. 

Stack 
 - primitive data types are allocated here 
 - both the memory location *and* the value are allocated here 

Heap 
 - objects are stored

 For an object, a pointer will be stored in the stack, and the value  of the object will be stored in the heap. 


## What are Value Types and Reference Types? 
- Value type means the memory location and the value are both stored in the same place 
```c 
  int i = 10
```
- Reference type means the memory location (pointer) is stored on the stack, while the actual value is stored on the heap. 
```c
  People p = new People();
```

## Explain explicit casting and implicit casting 
When changing from an int to a double there is no data loss so the change is converted implicitly. 
But when there is a potential of data-loss, such as double to int, then you must cast it explicitly. 
```c 
  int i = 10;
  double d = i; // implicit
  
  double d1 = 100.11;
  int i = (int)d1; // explicit casting
  // the decimal portion is truncated, not rounded 
```



## What is the concept of boxing and unboxing 
Boxing is when your data moves from a value type to a reference type.
Unboxing is when your data moves from a reference type to a value type.

## What is the consequence of boxing and unboxing? 
Performance if affected. Memory is jumping from stack to heap, or visa versa. 






## What is the difference between array and arrayList?

Array is a fixed size, and all data type (strongly typed). 
```c
  int[] intarr = {1, 2, 3};
```

ArrayList is a flexible size and can contain multiple data types.

```c 
  ArrayList myList = new ArrayList(); 
  myList.Add(1);
  myList.Add("one");
```
















.
.
.


[](https://www.indeed.com/hire/interview-questions/csharp?gclid=EAIaIQobChMIkP232pXX9AIVEmpvBB1tlAv5EAAYAiAAEgJb8vD_BwE&aceid=)

[](https://interviewing.io/csharp-interview-questions/?utm_source=google&utm_medium=cpc&utm_campaign=DSA&utm_term=&utm_content=&gclid=EAIaIQobChMIkP232pXX9AIVEmpvBB1tlAv5EAAYAyAAEgLeVvD_BwE)

[](https://www.youtube.com/watch?v=pXmMdmJUC0g)

