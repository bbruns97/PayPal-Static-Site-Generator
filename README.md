# NON-TECHNICAL SETUP

## FIRST TIME USERS:-

1. Download Microsoft Visual Code.

2. Download our github project at: https://github.com/bbruns97/PayPal-Static-Site-Generator

3. Unzip our project into a folder of your choice.

4. Open Microsoft Visual Code.

5. Using Microsoft Visual Code terminal:

    >Enter "cd [project file location]"
    Enter the command "npm install gatsby"
    Enter the command "gatsby develop"

6. View our example project at "localhost:8000/" in your web browser!

## AFTER YOU HAVE INSTALLED OUR PROJECT AND GATSBY AND WISH TO DEPLOY THE WEBSITE AGAIN:-

1. Open Microsoft Visual Code.

2. Using Microsoft Visual Code terminal:

    >Enter "cd [project file location]"
    Enter the command "gatsby develop"

3. View the website at "localhost:8000/" in your web browser!

## ADDING YOUR OWN ITEMS:-

1. Using your file explorer of choice, navigate to the file location of the project.

2. Next, navigate to PayPal-Static-Site-Generator/tree/master/src/content

>Each folder (cake, cookies, cupcakes, pasteries) represents a different "category" of products for conveniences'.
For instance, the "cake" folder contains various cakes, "cookies" folder contains various cookies, etc.

3. Navigate to the "cake" folder.

As you can see, there are 3 different types of cakes (Chocolate, Smores, Vanilla) in the "cake" folder.

4. In the "cake" folder, open the "chocolate-cake.md" file with your file editor of choice.

>Note that there are 7 different categories that can be adjusted or edited accordingly:
**title:** (The title of the product)
**price:** (The price[s] of the product)
**image:** (The location of the product image [the "./" before the image represents being in the same location as the .md file])
**keyword:** (An identifier for the product)
**options:** (The option[s] for the product)
**enabled:** (An identifier for whether or not the product is enabled [true means product is enabled or visible, false means product is not enabled or not visible])
**active:** (An identifier for whether or not the product is active [true means product is active and can be purchased, false means product is not active and cannot be purchased])

>It is important to note that the number of price(s) must be equal to the number of option(s), and vice-versa.

5. If you want to add a new product, simply create a new .md file with the product's name being anything of your choice.

6. Add an accompanying image for your product.

7. In the newly created .md file for your product, follow the same .md format as "chocolate-cake.md"

>The file should contain:
**title:** (The title of the product)
**price:** (The price[s] of the product)
**image:** (The location of the product image that you just added [the "./" before the image represents being in the same location as the .md file])
**keyword:** (An identifier for the product)
options: (The option[s] for the product)
**enabled:** (An identifier for whether or not the product is enabled [true means product is enabled or visible, false means product is not enabled or not visible])
**active:** (An identifier for whether or not the product is active [true means product is active and can be purchased, false means product is not active and cannot be purchased])

>Again, it is important to note that the number of price(s) must be equal to the number of option(s), and vice-versa.

8. Save your changes.

9. Open Microsoft Visual Code

10. Using Microsoft Visual Code terminal:

    >Enter "cd [project file location]"
    Enter the command "gatsby develop"

11. View the new item you have added at "localhost:8000/" in your web browser!

12. Your static files should be in the "public" folder located in the [project file location]/public

## DELETING ITEMS:-

1. Using your file explorer of choice, navigate to the file location of the project.

2. Next, navigate to PayPal-Static-Site-Generator/tree/master/src/content

3. Navigate to the category of the item that you wish to delete.

4. Delete the item's .md file and accompanying image.

5. Open Microsoft Visual Code

6. Using Microsoft Visual Code terminal:

    >Enter "cd [project file location]"
    Enter the command "gatsby develop"

7. View the change (deletion) you have made at "localhost:8000/" in your web browser!

8. Your static files should be in the "public" folder located in the [project file location]/public

## CHANGING WEBSITE PATH NAMES:-

1. Using your file explorer of choice, navigate to the file location of the project.

2. Next, navigate to PayPal-Static-Site-Generator/tree/master/src/content

3. Simply rename any of the folder/categories you wish to change.

>Renaming the folder/category will also rename the website path.
For instance, renaming "cake" in the file explorer will change the subsequent path from
**localhost:8000/cake/[product]** to **localhost:8080/[renamed folder]/[product]**  

4. Open Microsoft Visual Code

5. Using Microsoft Visual Code terminal:

    >Enter "cd [project file location]"
    Enter the command "gatsby develop"

6. View the change to the webpath you have made at "localhost:8000/" in your web browser!

7. Your static files should be in the "public" folder located in the [project file location]/public

## CHANGING INFORMATION IN THE HEADER AND/OR FOOTER:-

1. Using your file explorer of choice, navigate to the file location of the project.

2. Next, navigate to PayPal-Static-Site-Generator/tree/master/src/components

3. Open the "headerFooterInformation.json" file with your file editor of choice.

4. Note the categories: "**title**", "**address**", "**phoneNumber**", "**email**", "**twitterLink**", "**facebookLink**", "**instagramLink**", "**mondayHours**", "**tuesdayHours**", "**wednesdayHours**", "**thursdayHours**", "**fridayHours**", "**saturdayHours**", and "**sundayHours**".

5. Changing the title, address, phoneNumber, etc. should change all the information on your website accordingly.

>For instance, changing the line:
**"title": "Acme Bakery"** to **"title": "TEST BAKERY"** changes the name of the header to **TEST BAKERY**.

>Remember ONLY to change the information INSIDE the quotation marks FOLLOWING the respective categories and not changing any of the category names themselves!

6. Change the information you want to change, then save the edited file.

7. Open Microsoft Visual Code

8. Using Microsoft Visual Code terminal:

    >Enter "cd [project file location]"
    Enter the command "gatsby develop"

9. View the changes you have made at "localhost:8000/" in your web browser!

10. Your static files should be in the "public" folder located in the [project file location]/public
