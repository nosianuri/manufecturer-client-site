import React from 'react';

const Blogs = () => {
    return (
        <div className='px-12 mt-5 my-8'>
        <h1>Answer:</h1>
            <p>1. Improve the performance of a React Application -
            <li>Use memo and PureComponent:</li>
            <p>There's actually a hidden cost with memo and PureComponent. Since these helpers compare old/new props, this can actually be its own performance bottlenecks. For example, if our props are very large, or we're passing React components as props, the comparison of old/new props can be costly.</p>
            <li>Avoid Anonymous Functions:</li>
            <p>Since anonymous functions aren't assigned an identifier "via const/let/var", they aren't persistent whenever this functional component inevitably gets rendered again. This causes JavaScript to allocate new memory each time this component is re-rendered instead of allocating a single piece of memory only once when using 'named functions'.With class-based components, the solution is pretty easy and doesn't really have any downsides. </p>
            <li>Avoid Object Literals:</li>
            <p>Each time ComponentA is re-rendered a new object literal has to be “created” in-memory. Additionally, this also means that ComponentB is actually receiving a different style object. Using memo and PureComponent won't even prevent re-renders here.</p>
            <li>Use React.lazy and React.Suspense:</li>
            <p>If we're using Create React App, it's already configured for code-splitting, so you can simply use React.lazy and React.Suspense out of the gate! If we're configuring webpack yourself it should look like this.</p>
            <li>Avoid Frequent Mounting/Unmounting:</li>
            <p>In order to mitigate this, it's advisable to avoid completely unmounting components. Instead, we can use certain strategies like setting the CSS opacity to zero, or setting CSS visibility to 'none'. This will keep the component in the DOM, while making it effectively disappear without incurring any performance costs.</p>
              </p>
              <br />
            <p>2. 
            Recoil is young and fresh, but has no community nor ecosystem at the moment. Even though Facebook is working on it and the API seems promising, a huge React application cannot rely on a library with weak community support. In addition, it's experimental, making it even more unsafe. It's definitely not a good option for React applications today but it's worth keeping an eye on it.
            MobX and Redux do not share any of these issues and most big players on the market use them. What makes them different from each other is the learning curve. MobX requires a basic understanding of reactive programming. If the engineers involved in the project are not skilled enough, the application may end up with code inconsistencies, performance issues, and increased development time. MobX is acceptable and will meet our needs if our team is aware of reactivity.
            Redux has some issues as well, mostly regarding scalability and performance. However, unlike MobX, there are proven solutions to these problems.
            </p>
            <br />
            <p>3.Prototypal inheritance is a language feature. We have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We'd like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it. When we run a program is very different, because compilers will try their best to make the processor do no work, if they can. They'll remove all objects and functions and operations we write if there's no real need for them to exist. The only way of knowing that is reading the entire source code of a specific compiler on every new commit.
            

             
            </p>
            <br />
            <p>4.When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
            If we update it directly, calling the setState() afterward may just replace the update we made.we will lose control of the state across all components.
            That's why we shouldn't mutate state, even if we immediately call setState. Optimized components might not re-render if we do, and the rendering bugs will be tricky to track down. 
            </p>
            <br />
            <p>5. Sorting affects the order of the products. we can sort our product list to help you find the products that we need to update or review. For example, to see which of our products are running low in stock, we can sort our product list by inventory.
            <br />
            Enter the search words into the field labelled Filter products. The product list automatically refreshes to show only the products that have the words in the product titles, descriptions, and tags.
            </p>
            <br />
            <p>6.Unit test is a method that instantiates a small portion of our application and verifies its behavior independently from other parts.A typical unit test contains 3 phases:  it initializes a small piece of an application it wants to test, then it applies some stimulus to the system under test and it observes the resulting behavior. A unit test can verify different behavioral aspects of the system under test, but most likely it will fall into one of the following two categories: state-based or interaction-based. Verifying that the system under test produces correct results, or that its resulting state is correct, is called state-based unit testing, while verifying that it properly invokes certain methods is called interaction-based unit testing.Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could've been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.  </p>
        </div>
    );
};

export default Blogs;