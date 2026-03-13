<!-- function calling in React Hinglish short concepts  -->

# React Function Calling Concepts
fucntion calling in React is a fundamental concept that allows you to execute functions in response to user interactions or lifecycle events. Here are some key points about function calling in React:
1. **Event Handlers**: You can call functions in response to user events such as clicks, form submissions, or keyboard input. For example:
   ```jsx
   function handleClick() {
     console.log('Button clicked!');
   }

   return <button onClick={handleClick}>Click Me</button>;
   ```
2. **Passing Arguments**: You can pass arguments to functions when calling them. This is
    useful for handling dynamic data. For example:
    ```jsx
    function handleClick(name) {
      console.log(`Hello, ${name}!`);
    }
    
    return <button onClick={() => handleClick('Alice')}>Greet Alice</button>;
    ```
