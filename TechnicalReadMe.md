# PayPal-Static-Site-Generator
<p>
This will be a more technical document of the work done on this project.

The plugin is broken into several plugins that are then used on the index page, and the productDetails page to display what is shown.
</p>

<h1 align="center">
  Markdown backend
</h1>

<p>
    All the information displayed on the pages are derived from the content markdown files. They are broken down into several keywords:

    title = title of the item being displayed.
    price = price of the item.
    image = location of the image being displayed.
    keyword = category of the item. 
    options =  ['Option 1', 'Option 2'] the options being displayed with the item. ex: small, medium, large 
    enabled = true false which determines if the item is displayed on the page
    active = true false which determines if the payment information is displayed on the page. 
</p>

<h1 align="center">
  Paypal integration
</h1>

<p>
    The paypal button is calculated in two plugins, the paypalButton.js and the paypalCheckoutOptions.js.
    
     payPalButton.js takes the information passed to it from the paypalCheckoutOptions.js to then call PayPals API and process a purchase. Further implementation of this is possible and all the options that are displayed on the PayPal receipt is determined in paypalButton.js.
</p>


