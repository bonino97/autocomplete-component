### QUESTIONS.md

1. **What is the difference between Component and PureComponent? Give an example where it might break my app.**

   - `Component`: Whenever I explain it, I explain it as if it were the Lego game: They are blocks of code, that if you nest them together, they build the UI.
   - `PureComponent`: Are similar to normal components but do not have states inside, so they do not re-render.

   Example: If you are using states or complex props, PureComponents may fail because not detect changes, so you will lead to incorrect rendering.

2. **Context + ShouldComponentUpdate might be dangerous. Why is that?**
   - Combining context with `shouldComponentUpdate` can be risky because `shouldComponentUpdate` relies on shallow comparisons of props and state. Context updates may not trigger a re-render even if the context data has changed, leading to inconsistent UI states.
3. **Describe 3 ways to pass information from a component to its PARENT.**
   - Props
   - Context
   - Redux
4. **Give 2 ways to prevent components from re-rendering.**
   - Memoization (useMemo, or HOC React.memo)
   - Pure Components
5. **What is a fragment and why do we need it? Give an example where it might break my app.**

   - A fragment is a container that allows you to group multiple child elements in React without the need to use HTML tags to wrap the nodes or components

   Example: If in your Component you do not wrap two direct elements without a container, that would break the structure of your application, and break the building.

6. **Give 3 examples of the HOC pattern.**

   - I can give examples of HOCs I have used in my projects and React/Redux HOCs.

   Examples: - React.memo (react): Avoid unnecesary re-rendering. - withRouter (react-router-dom): Injects router props. - withStyles (material ui): Involves pre-defined styels into component. - withConnect (react-redux): Connects a React component to a Redux Store. - Also HOCs that I have used in some projects, such as withAuth, withLoading, withErrorHandling, all of these were injected into the component, to maintain re-use and encapsulation of these functionalities.

7. **What's the difference in handling exceptions in promises, callbacks and async...await?**

   - Im not quite sure how to answer this question, but I understand that the difference lies in how exceptions are structured and handled in each of the methods.

8. **How many arguments does setState take and why is it async?**

   - Takes 2 arguments (state and function). It is asynchronous because one of its benefits is to accumulate updates in its queue, and thus render everything in a single cycle. This avoids unnecessary re-renderings.

9. **List the steps needed to migrate a Class to Function Component.**
   - Change the syntax from class to functional.
   - Identify the this.state and change it to a useState.
   - Identify the life cycles and change them to effects, calback or memos depending on the type of each one.
   - Check if you have this.props and make the change as parameters of the function.
10. **List a few ways styles can be used with components.**
    - Inline CSS
    - Module CSS
    - Styled components
11. **How to render an HTML string coming from the server.**
    - Without using libraries there is dangerouslySetInnerHTML but you have to be careful because it can be vulnerable to receive injections (XSS).
    - But there are some libraries that can help us to do this in a better way.
