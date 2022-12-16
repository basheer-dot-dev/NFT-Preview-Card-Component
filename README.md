# NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

To build an NFT preview card component with hover states for certain interactive elements. 

### Screenshot

![](https://i.ibb.co/Twgt77t/newr-2022-12-16-07-38-36.gif)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- My Personal Website/Portfolio: [basheer.dev](https://basheer.dev)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Vanilla Javascript
- CSS Flexbox

### What I learned

I've learnt to position elements with CSS positioning, allowing me to stack sibling elements on top of each other.

Here's an application of CSS Positioning in my code

```html
        <div class="image-header">
            <div class="overlay"></div>
            <img id="eye" src="src/images/icon-view.svg" aria-hidden="true" />
        </div>
```
```css
 image-header {
        position: relative;
} 	
.overlay {
     position: absolute;
}
.eye {
     position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -24px;
    margin-left: -24px;
}

```
The output shows the `.eye` element in the middle of the `.overlay` element, although `.eye` is not a child of `.overlay`.

I've also gained experience in using JavaScript event listeners and the classList method.

Check out how I applied `onmouseover` and `onmouseout` in this project :

```javascript
const element = document.querySelector('.overlay');
const eye = document.getElementById('eye');

element.addEventListener("mouseover", () => {
    eye.classList.add('visible');
    eye.classList.remove('invisible');
});
element.addEventListener("mouseout", () => {
    eye.classList.add('invisible');
    eye.classList.remove('visible');
});

```

## Author

- Website - [basheer.dev](https://basheer.dev)
- LinkedIn - [@basheer-dev](https://www.linkedin.com/in/basheer-dev/)
- Twitter - [@basheer_dev](https://www.twitter.com/basheer_dev)

## Acknowledgments

Many thanks to [freeCodeCamp](https://freecodecamp.org) for their superb content. Also, many thanks to [Frontend Mentor](https://frontendmentor.io) for creating this challenge.
