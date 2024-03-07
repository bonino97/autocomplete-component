### QUESTIONS.md

1. **What is the difference between Component and PureComponent? Give an example where it might break my app.**

   - `Component`: Whenever I explain it, I explain it as if it were the Lego game: They are blocks of code, that if you nest them together, they build the UI. 
   - `PureComponent`: Are similar to normal components but do not have states inside, so they do not re-render.

   Example: If you are using states or complex props, PureComponents may fail because not detect changes, so you will lead to incorrect rendering.

2. **Context + ShouldComponentUpdate might be dangerous. Why is that?**

   Combining context with `shouldComponentUpdate` can be risky because `shouldComponentUpdate` relies on shallow comparisons of props and state. Context updates may not trigger a re-render even if the context data has changed, leading to inconsistent UI states.

3. **Describe 3 ways to pass information from a component to its PARENT.**
4. **Give 2 ways to prevent components from re-rendering.**
5. **What is a fragment and why do we need it? Give an example where it might break my app.**
6. **Give 3 examples of the HOC pattern.**
7. **What's the difference in handling exceptions in promises, callbacks and async...await?**
8. **How many arguments does setState take and why is it async?**
9. **List the steps needed to migrate a Class to Function Component.**
10. **List a few ways styles can be used with components.**
11. **How to render an HTML string coming from the server.**
