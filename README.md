# jquery-nextform

A simple free and open source app to count document pages from anywhere. Drag and drop any number of pdfs, docxs to the app to display the total amount of page.


## Getting Started

**jQuery Steps** is a lightweight wizard UI component written for **jQuery**.

Everything you need to start is:

1. Include **jQuery** and **jQuery Steps** in your HTML code.
2. Then select an element represents the wizard and call the `steps` method.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Demo</title>
        <meta charset="utf-8">
        <script src="jquery.js"></script> 
        <script src="jquery.steps.js"></script>
        <link href="jquery.steps.css" rel="stylesheet">
    </head>
    <body>
        <script>
            $("#wizard").steps();
        </script>
        <div id="wizard"></div>
    </body>
</html>
```

> For more information [check the documentation](https://github.com/rstaib/jquery-steps/wiki).

### How to add initial steps?

There are two ways to add steps and their corresponding content.

1. Add HTML code into the representing wizard element.

```html
<div id="wizard">
    <h1>First Step</h1>
    <div>First Content</div>

    <h1>Second Step</h1>
    <div>Second Content</div>
</div>
```


## Demo

[![Demo jquery-nextform alpha](https://j.gifs.com/Krpmkz.gif)](https://gifs.com/gif/Krpmkz)


## Bug Reports & Feature Requests

You can help by reporting bugs, suggesting features, reviewing feature specifications or just by sharing your opinion.

Use [GitHub Issues](https://github.com/fido93/jquery-nextform/issues) for all of that.



## License

Copyright (c) 2016 FidoUnity. See [LICENSE](https://github.com/fido93/jquery-nextform/blob/master/LICENSE) for more details.
