# GitHub user profile

It's a simple application where you can find GitHub profile information by giving a username.

## Introduction

GitHub is a very essential platform in the process of software development, be it for open-source software, private tools, continuous integration, or any of its many other use cases. In this guide, you'll learn how to use the fetch API with the GitHub Application Programming Interface.

## Understanding the API

Before you make a request to any API, you need to figure out which endpoints are exposed by the provider. In this case, GitHub provides endpoints for search, repositories, projects, markdowns, **users**, and many more. Find out more in Github's official docs. In this guide, you will only make use of the /users endpoint. All requests to the API are supposed to be made to the root endpoint [https://api.github.com](https://api.github.com).

## An Introduction to Fetch
The fetch API provides a Javascript interface for accessing and manipulating requests and responses over a network. This is provided via the global **window.fetch()** method in the browser.

## Using Fetch
Now that you have a fair idea of where your request would be made and the structure of the data you would be getting, you can now make a request to the API with your code comfortably.

A fetch request is shown below:
```javascript
fetch(URL,  init:{method: 'GET', headers:{},  body})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
// URL - Url of the resource
// Headers - Headers for the request( Content-Type, ...)
// Body - Request content
// Init - Contains request body and headers and other configurations such as the request method.
```
Because **fetch()** returns a promise, you can chain as many **.then()** as you want and a catch method to gracefully handle errors thrown in a failed request.

Applying all the knowledge so far, you can make a request to the GitHub **/users** endpoint with the code below.

```javascript
fetch('https://api.github.com/users/{YOUR_USERNAME}')
    .then(response => response.json()) //Converting the response to a JSON object
    .then( data => console.log(data)) // Now you will be able to see the data on you browser console
    .catch( error => console.error(error));
```

## Live Demo

[Live Demo](https://coderkhalide.github.io/github-users-profile/)

## Follow me

My Company Website [KS Devware](https://ksdevware.com/)

[Facebook](https://www.facebook.com/coderkhalid) [Twitter](https://twitter.com/coderkhalid) [Instagram](https://www.instagram.com/coderkhalid/) [Linkdin](https://www.linkedin.com/in/coderkhalid/)

