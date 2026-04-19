# ReactJs Design Pattern

Design pattern make your code more readable, organize and scaleable.

---

## 1. Container Presenter Design Pattern

Seperate your component in two parts, one is for data part and another one is for presenter/showing to user part.

---

## 2. Controlled and Uncontrolled Design Pattern

Need to understand where the data is, in state or in DOM.
Do not mess with like some fields in controlled and some fields are in uncontrolled way.
Controlled mindset: User type -> onChange -> state update -> UI re-render
Uncontrolled mindset: User type -> in DOM -> read if needed