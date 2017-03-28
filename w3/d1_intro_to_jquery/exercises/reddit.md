## Reddit - Independent Practice (20 mins)

Follow the directions below to practice using jQuery:

- Go to http://www.reddit.com.

- Reddit uses jQuery, so we can use our Chrome Developer Console to manipulate the site in real time using jQuery.

- To do this, once Reddit.com has loaded, go to your view menu in Chrome. Select View > Developer > JavaScript Console.

- Once that's loaded, try entering the following command into the Chrome REPL:

```javascript
$('img').hide()
```

- Hit the enter key. All the images should have disappeared from the Reddit.com home page. Make sure you understand why before moving on.

- Now try this:
```js
$('img').show()
```

- That should have brought all the images back. Make sense so far?

- With the Chrome Inspector, try to match the title of the first Reddit post and replace the text using `.text()` or `.html()`.

- Try to replace the blue background in the header with another color by using the function `.css()`.

- Now try some of the other examples we've gone over in the Chrome REPL and see what happens to the Reddit.com website. Remember, this is your laboratory, and your chance to experiment and learn. Make use of it.
