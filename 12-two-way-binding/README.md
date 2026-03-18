# ⚛️ React Notes – Two Way Binding & Form Handling

## 📌 Overview

This project demonstrates basic React concepts:

* useState Hook
* Two-Way Data Binding
* Controlled Components
* Form Handling

---

## 🧠 Key Concepts

### 🔹 1. useState Hook

```js
const [title, setTitle] = useState('')
```

* `title` → current state value
* `setTitle` → state update function

👉 Used to store and update input data dynamically.

---

### 🔹 2. Two-Way Data Binding

```js
<input 
  value={title} 
  onChange={(e) => setTitle(e.target.value)}
/>
```

✔ Flow:

* User types → state updates
* State updates → UI reflects

👉 This is called **Two-Way Binding**

---

### 🔹 3. Controlled Component

* Input field is controlled by React state
* React decides what appears in the input

👉 Not controlled by DOM directly

---

### 🔹 4. Form Handling

```js
const handleSubmit = (e) => {
  e.preventDefault()
  alert("Form Submitted Successfully")
  console.log(`Form data: ${title}`)
}
```

✔ Prevent page reload
✔ Handle user input
✔ Perform actions on submit

---

### 🔹 5. Form Usage

```js
<form onSubmit={handleSubmit}>
```

👉 Clean and standard way to handle submit

---

## 🚀 Code Example

```js
import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form Submitted Successfully")
    console.log(`Form data: ${title}`)
  }

  return (
    <div>
      <h1>Two Way Binding</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
```

---

## 📚 Quick Revision Points

* 🔁 Two-way binding = UI ↔ State sync
* 🎯 Controlled component = React controls input
* ⚡ useState = dynamic data handling
* 🛑 preventDefault() = stop reload
* 📥 onChange = capture input
* 📤 onSubmit = handle form

---

## 💡 Best Practice

* Keep forms controlled
* Use clean event handlers
* Avoid inline functions when not needed

---

## 🧪 Future Improvements

* Add multiple inputs (name, email, password)
* Add validation
* Use custom hooks

---
