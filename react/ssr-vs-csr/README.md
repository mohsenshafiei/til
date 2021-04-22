# SSR VS CSR

### What are these?

In *Client Side Rendering* your browser only download a small HTML content and then fill that content using JS.

In *Server Side Rendering* your server first renders React components and the result that we get from server is *HTML Content*.

### PROS OF CSR
- Cheap hosting
- No full page reload required
- Enforced Seperation of concerns (There is no way to hit the DB in here)

### CONS OF CSR
- SEO problems
- First User Interaction Time if user need to fetch a big project
- Social sharing does not work well

### CONS OF SSR

- SSR can improve application performance if app is small and it can degrade if it heavy
- Response time will increase and it will keep the server busy if application is huge
- It increase complexity of our application

### PROS OF SSR

- Improve SEO
- Improve performance (decreasing load time and First User Interaction Time).
- Improve Social Sharing

### What is the best solution

It really depends on the use case, but for the pages that have heavy content it is better to use isomorphic approach.