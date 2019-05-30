# CSS Fundamentals

## Objectives
  + Discuss what CSS does and why it is important
  + Differentiate between inline, internal, and external stylesheets
  + Understand how to use class, id, and element selectors, and selector order of importance
  + Demonstrate the use of the box model, positioning, and CSS grid in page layout
  + Introduce CSS frameworks like Bootstrap and Semantic UI

## CSS

Try this (removes all css in a website):

```js
  document.querySelectorAll('[style]')
    .forEach(el => el.removeAttribute('style'));
  document.querySelectorAll('link[rel="stylesheet"]')
    .forEach(el => el.parentNode.removeChild(el));
  document.querySelectorAll('style')
    .forEach(el => el.parentNode.removeChild(el));
```
Press `option + command + j` then paste this code in and press `enter`

**CSS** - Cascading Style Sheets
Good CSS vs. Bad CSS

## Stylesheets and Selectors

How do we add CSS to our HTML page?

Types of CSS selectors

Using multiple selectors

## The Box Model

4 elements of the box model:

(Use Chrome dev tools to explore!)

## Layouts & Positioning - CSS Grid

Grid-based layout system

## CSS Frameworks

Do a lot of the CSS work for us
Semantic UI
Bootstrap

## Resources

- https://www.awwwards.com/
- https://www.epicurrence.com/
- https://flukeout.github.io/
- https://flexboxfroggy.com/
- http://cssgridgarden.com/
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- https://css-tricks.com/snippets/css/complete-guide-grid/
- https://tympanus.net/codrops/css_reference/
- https://getbootstrap.com/
- https://semantic-ui.com/
