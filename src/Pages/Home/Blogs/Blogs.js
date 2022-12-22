import React from 'react';

const Blogs = () => {
    return (
        <div className="bg-[#fff5cb]  lg:p-8">
            <h1 className="text-3xl bg-white text-[#175c62] lg:p-8">1.What are the different ways to manage a state in a React application?</h1>
            <p className="bg-white text-[#175c62] lg:p-8">State management is best in React? React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.</p>

            <h1 className="text-3xl bg-white text-[#175c62] lg:p-8">2.How does prototypical inheritance work?</h1>
            <p className="bg-white text-[#175c62] lg:p-8">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

            <h1 className="text-3xl bg-white text-[#175c62] lg:p-8">3.What is a unit test? Why should we write unit tests?</h1>
            <p className="bg-white text-[#175c62] lg:p-8">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>

            <h1 className="text-3xl bg-white text-[#175c62] lg:p-8">4.React vs. Angular vs. Vue?</h1>
            <p className="bg-white text-[#175c62] lg:p-8">Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
        </div>
    );
};

export default Blogs;