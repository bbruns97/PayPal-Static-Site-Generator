# PayPal-Static-Site-Generator

This will be a more technical document of the work done on this project.

The plugin is broken into several plugins that are then used on the index page, and the productDetails page to display what is shown.

All the information displayed on the pages are derived from the content markdown files. They are broken down into several keywords:

title = title of the item being displayed.
price = price of the item.
image = location of the image being displayed.
keyword = category of the item. 
options =  ['Option 1', 'Option 2'] the options being displayed with the item. ex: small, medium, large 
enabled = true false which determines if the item is displayed on the page
active = true false which determines if the payment information is displayed on the page. 

The paypal button is calculated in two plugins, the paypalButton.js and the paypalCheckoutOptions.js. payPalButton.js takes the information passed to it from the paypalCheckoutOptions.js to then call paypals API and process a purchase. Further implementation of this is possible and all the options that are displayed on the paypal receipt is determined in paypalButton.js.



