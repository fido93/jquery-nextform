# jquery-nextform

A simple free and the form having 5 pages combining as a 1 page. Consist previous,next and submit button.
Inspiration from [Jquery-Steps](https://github.com/rstaib/jquery-steps).

## Getting Started

**jQuery-nextform** is a lightweight UI component written for **jQuery**.

Everything you need to start is:

1. Include **jQuery** and **jquery-nextform** in your HTML code.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Demo</title>
        <meta charset="utf-8">
        <script src="jquery.js"></script> 
        <script src="jquery-nextform.js"></script>
    </head>
    <body>
        <div class="next" id="1">
        </div>
        <div class="next" id="2">
        </div>
        <div class="form-group pull-right">
            <button id="pre-btn" disabled>Previous</button>
            <button id="nxt-btn">Next</button>
            <button id="submit-btn" disabled>Submit</button>
        </div>
        <script type="text/javascript">
        // When onclick Submit Button
        $('#submit-btn').click(function() {

            //You can type what u want

            alert("hello world");

        });
       </script>
    </body>
</html>
```

> For more information [check the documentation](https://github.com/rstaib/jquery-steps/wiki).

### How to add initial steps?

To add steps and their corresponding content.

1. Add HTML code have class call next and id must be in integer.

```html
<div class="next" id="1">
<h1>Hello World</h1>
</div>
<div class="next" id="2">
<h2>It's me!</h2>
</div>
<div class="next" id="3">
<h2>It's me three!</h2>
</div>
```


## Demo

[![Demo jquery-nextform alpha](https://j.gifs.com/Krpmkz.gif)](https://gifs.com/gif/Krpmkz)


## Bug Reports & Feature Requests

You can help by reporting bugs, suggesting features, reviewing feature specifications or just by sharing your opinion.

Use [GitHub Issues](https://github.com/fido93/jquery-nextform/issues) for all of that.



## License

Copyright (c) 2016 FidoUnity. See [LICENSE](https://github.com/fido93/jquery-nextform/blob/master/LICENSE) for more details.
