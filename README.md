# Hack The North (Events) 2022

## Important Information

- You can visit the deployed application at the link []()
- Use the Log In Credentials (Username: "john.doe@htn.com", Password: "password")
- Additional functionality implemented: Filter + Sort Events, Search Events, Loading Animations (Skeleton content)

## Development Process

- I first read through the requirements of the application and determined exactly what functionality would need to be implemented along with the extra features I planned on implementing. Then, I took a look at the data schema provided in the description to determine exactly what data would be returned by the backend, which helped me determine what my mockup would look like.
- Then I started to draw a mockup of how the app would look, including the different pages that would be implemented, which helped me determine what components would need to be built.
- As I am currently on coop at Shopify, I used this opportunity to build the application using Shopify's open-source React component library, named Polaris, so that I could further familiarize myself with the standard UI library at Shopify. Therefore, I used many of the pre-styled components provided by the Polaris library and bundled their functionality into custom components that are rendered.
- Lastly, I implemented the GraphQL client and created the corresponding queries. Usually, getting the data is one of the earlier steps I would complete in the process, however, since this was my first time implementing a GraphQL client, I decided to do this step last and use mock data for the earlier steps outlined.
- That is a high-level overview of the process I took in developing this application.

### Technology Used (React)

As far as tools used for this application, the stack consists of React, TypeScript, GraphQL, and Polaris. I decided to use React to build this app since I am quite familiar with it, and it offers features like reusable components (less code), faster render times with no page refreshes, and more. The choice to use TypeScript had to do with the issues I have with using JavaScript in the past for building web apps. TypeScript can prevent so many errors that occur with JavaScript-built React Apps. Lastly, I decided to try using GraphQL for this application since I thought it would be good for me to learn, and it is much more efficient than traditional HTTP requests as you only get back the data you need.

### Challenges Faced

- I ran into many issues with using the Polaris component library. While it is a good library, I found its documentation wasn't as thorough as I wanted it to be. Therefore, there were a lot of times when I had to resort to StackOverflow or GitHub threads to find solutions to issues that should have been outlined in the documentation - which wasted a lot of my time.
  - Another pesky issue I ran into with Polaris was getting it to work with React-Router. For some reason, the React Router did not seem to work with the way I had my App.tsx structured. How I solved this problem was Googling a ton and playing around with the component structure in my App.tsx, until I finally got it to work.
- Another issue I ran into had to deal with retrieving the data for related events. Since in the EventType response, we only get back an array of IDs for related events, to display the related event information, I had to query for all the events in that array separately. I originally that I could use a loop, that calls performs a GraphQL query on each iteration, then wait for all those queries to resolve before rendering the results on the screen. However, I kept on running into issues with how to structure the query and TypeScript async/await errors. After running into these issues for around 30 minutes, I decided to do some Googling and digging through Apollo's documentation. I learned that you should never call hooks in a loop, and instead create a sub-component to handle the data fetching and rendering, eliminating the need to do any GraphQL queries in a loop. Instead, just render the component in a loop. This was a good learning experience!

### Areas that you are proud of

- I am especially proud of the fact that this application uses very little custom CSS. While I know that in this challenge applicants were encouraged to use unique styling. However, having built applications in the past with lots of custom CSS, it becomes a pain to maintain once the application gets fairly large. Having a global stylesheet, or even using a solution like Styled Components can still lead to a high degree of coupling between files, which makes it harder for future developers to make changes to your application. Therefore, I am quite proud of the fact that this application used only small amounts of custom CSS.
- Another area that I am proud of with the application is that it is the first time I built a React application using TypeScript and GraphQL. While I had used TypeScript for making small changes on components for applications that were already built, this is the first time I built a TypeScript React application from scratch. While the beginning was a little confusing (especially when setting up the tsconfig.json), in the end, it was incredibly useful as it helped me avoid a ton of errors and kept my application typed, making it more maintainable. Furthermore, this was the first time I used GraphQL in an application, and while the language seemed a bit daunting at first, I loved it after I understood how it was working. Apollo is amazing!

## Next Steps

There are many areas where this application can be improved:

- Event pagination: On the main page of the application, all the events are retrieved from the backend and rendered on the screen at once. At a scale larger scale, this could become very slow. Therefore, a solution to fix this would be to implement pagination. This would be a client-side and server-side change, as the backend would need to implement GraphQL pagination to only return a subset of the events, and the client-side would request events when the user requests to go to the next page. This approach scales much better than just loading everything at once.
- Persist state on refresh: Currently, on this application, the logged-in state is not persisted across page refreshes. Having the state persisted on page refreshes would be a nice feature to have!
- Unit tests: While I did not have time to implement testing on this application, writing tests are really important for making your application is working as intended. Given more time, I would implement testing in this app.
- Improve styling: Given more time, I would have liked to improve the styling of the components as I feel the color palette is somewhat bland. Perhaps I could consult with a professional graphic designer to get a better-looking and more functional UI.
