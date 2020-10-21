# PayPal-Static-Site-Generator
Outputs an static ecommerce website's HTML file to be hosted.
>Developed by: Brian Bruns, Connor Wardell, Misha Zelechowski, Shaun Xiong, Sonny Huynh

## Introduction
This 'technical' readme is for developers who want to understand more about what this plugin is doing behind the scenes.

This plugin is intended to help small business owners or individual sellers create a website which does not need to rely on server hosting besides the initial hosting of the outputted HTML file.

### What does this plugin do?
This plugin, "PayPal-Static-Site-Generator", contains a broad array of sub-plugins which may be used to generate specific features onto a Gatsby generated HTML document.

> Example sub-plugins:
>- Generating a navigation bar
>- Generating a home page
>- Generating a products page
>- Generating a PayPal payment button

This plugin does not make use of any external server services which allow things like inventory management. If a website owner wishes to update their website, they will have to update their filesystem and use this plugin to output a new HTML file to be hosted.

As released, this plugin contains an example website built through Gatsby using its own sub-plugins. This example website serves two purposes: showcasing the uses and ability of the plugin and being a useable template for developers who do not wish to design their own website.
  
### Broad functionalities of example website
Makes use of sub-plugins to generate individual pieces of an example website which will interact among each other. The outputted example website pulls from a markdown filesystem and allows for checkout and payment.

#### Input of example website
This plugin takes a directory which has a specific format as an input.

#### Output of example website
This plugin creates and outputs a static HTML file which can be hosted by normal means.
  
## Plugins
### 'header'
Header details

### 'footer'
Footer details

### 'itemThumbnails'
itemThumbnail details

### 'itemThumnailInactive'
itemThumnailInactive details

### 'layout'
layout details

### 'paypalButton'
paypalButton details

### 'paypalCheckoutOptions'
paypalCheckoutOptions details

## Current Implementation Details

### PayPal Integration
The PayPal button is calculated into two sub-plugins:
>- paypalButton.js
>- paypalCheckoutOptions.js

**paypalButton.js**
>Creates a PayPal purchase button which receives information from the sub-plugin paypalCheckoutOptions,js and creates a call to PayPal's API to process a purchase. Options on the PayPal receipt is also determined within this function.

**paypalCheckoutOptions.js**
>Calls PayPal's API with product checkout data and returns keys and necessary information for paypalButton.js

---
### File Structure
File structure information here.

---
### Markdown Back-End
All information displayed in the store page and product pages are derived from the content markdown files, which are broken down into several custom keywords:
>-  **'title'** = The title or name of the product being displayed.
>-  **'price'** = The price of the product being displayed.
>-  **'image'** = The location of the image of the product being displayed. (File location)
>-  **'keyword'** = The category of the product being displayed.
>-  **'options'** = The options being displayed with the item.
> Format: ['Option 1', 'Option 2']
> Example: small, medium, large
>-  **'enabled'** = The factor determining whether to display a product.
>> Example: | TRUE => Displaying | FALSE => Not Displaying |
>-  **'active'** = The factor determining whether to display a product's payment information.
>> Example: | TRUE => Displaying Payment Information | FALSE => Not Displaying Payment Information |

## Downloading
Downloading instructions here.

## Installation
Installation instructions here.

## Dependencies
**1. 'gatsby-transformer-sharp'**
> Used to...

**2. 'gatsby-plugin-sharp'**
> Used to...

**3. 'gatsby-image'**
> Used to...

**4. 'gatsby-remark-relative-images'**
> Used to...

**5. 'gatsby-source-filesystem'**
> Used to find product data, images, and files in our plugin's created filesystem.

**6. 'gatsby-transformer-remark'**
> Used to...

**7. 'gatsby-remark-images'**
> Used to...

**8. 'gatsby-remark-copy-linked-files'**
> Used to...

## Metadata
Not sure what goes here.