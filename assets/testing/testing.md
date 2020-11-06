# TESTING

This project has been tested throughout with use of preview, devtools, manual testing and also the website was deployed on github pages very early in development to allow live testing after each commit was made.


## BUGS

* Only one cart item adding to cart - I fixed this issue by having my objects pushed into an array after being taken out of storage so they could then be pushed to my cart when selected.

* Issues with Total Cost calculation - I fixed the problem where the total cost was being calculated incorrectly with an if, else statement that would save the current cart price in order for my total cost to be added.

* Google Map API not displaying correct information - To fix this problem after trying various ways to fix i eventually took the example code from the documentation and just switched the coordinates to suit my needs. **No longer using Google Maps API switched to Iframe**

* Overflow - Page overflow was found to be an issue once i added animations which i fixed by adding *overflow-x: hidden to the html* - identified by adding a border to all my elements to detect the leak.


## MID STAGE TESTING REVIEW

### HTML

* I ran my index.html code through [W3C HTML Validator](https://validator.w3.org)
* And recieved 8 errors/warnings [Error's Image](https://github.com/Birrellc/Eternity-MS2/tree/master/assets/images/testing-images/html-validator-errors.png/)
* 1 by 1 each error has been located and corrected and the results now display 0 errors / warnings [Error's Fixed Image](https://github.com/Birrellc/Eternity-MS2/tree/master/assets/images/testing-images/html-validator-fixed.png/)
* Using the preview feature of my IDE i have found that the corrected code has caused an issue with the position of my "hr" element for my contact page which will now have to be adjusted via CSS.

### CSS

* I ran my styles.css code through [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
* No Errors recieved [No Error Found Image](https://github.com/Birrellc/Eternity-MS2/tree/master/assets/images/testing-images/css-validator-1.png/)

### JAVASCRIPT

* All function's were tested for individual purpose manually via console.log & dev tools through my IDE's Live Preview.
* All function's were then further tested collectivley by pushing live to my deployed page to see if any issues appeared on the live version or if any of the functions caused issues with each other.
* By combining these processes of i have been able to track issues created via my code through the commit log of my repository allowing the ability to navigate back through code to identify any errors and if necessary rolling back the code which i did on atleast 1 occasion.


### SPEED TEST

* I ran a speed test on the live github page of my website via [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
* The results recieved we're poor and the website will need to be improved for speed by reducing image file sizing and better optimizing before project is fully live [Speed test results](https://github.com/Birrellc/Eternity-MS2/tree/master/assets/images/testing-images/initial-speed-test.png)

### RESPONSIVE TEST

* For the responsive test i used an app called [Responsivley App](https://responsively.app/) which allowed me to view my website with multiple device sizes \(iPhone 5/5se 320px, iPhone X 375px, Ipad 768px, and a generic laptop size of 1280px\)
* ![picture](../images/testing-images/responsive-test-part1.gif)
* ![picture](../images/testing-images/responsive-test-part2.gif)
* I have also tested responsiveness of site and forms fully via use of devtools on my IDE preview and also on my deployed github page showing no issues with the viewports of \(320px, 375px, 414px,  768px, 1024px, 1440px, 1920px)

## FULL FINAL TESTING

### HTML

* I ran my index.html code through [W3C HTML Validator](https://validator.w3.org)
* And recieved 8 errors/warnings [Error's Image](https://github.com/Birrellc/Eternity-MS2/tree/master/assets/images/testing-images/html-validator-final-before.png/)
* 1 by 1 each error has been located and corrected and the results now display 0 errors / warnings [Error's Fixed Image](https://github.com/Birrellc/Eternity-MS2/tree/master/assets/images/testing-images/html-validator-final-after.png/)
* Using the preview feature of my IDE i have found that the corrected code has caused an issue with the position of my "hr" element for my contact page which will now have to be adjusted via CSS.
* Forms - All have are validated with the *required* feature to stop submission without key information e.g - Email Address or Name / Which has been tested.
* Buttons - All work correctly - Tested by clicking each button on the website.
* Map - Clicked Map was able to move view around, zoom in and out & also able to view larger map on google and get directions.
* Social Media Links - I clicked each link individually which opened a new browser tab to the correct targeted addresses for each link.

### CSS

* I ran my code through [Auto Prefixer CSS](https://autoprefixer.github.io) to make sure my CSS has all the correct vendor prefixes.
* I ran my styles.css code through [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and recieved no errors.
* I applied a red border to all my elements to check for any overflow issues & there are none.

### JAVASCRIPT

#### OVERVIEW

* All my JavaScript code was tested via manual testing which was also then used to solve error's i had missed [Example here](../images/testing-images/manual-testing-example.png).
* When running devtools to inspect the website for errors i found verbose warnings for **Violation Added for non-passive event listener to scroll blocking** - planning to discuss with mentor in final session.
* Ran code through [JSHINT](https://jshint.com/) - Warnings recieved for using ES6 & higher which are fine to ignore as the code works in all browsers apart from Internet Explorer.
I also recieved the warning 

*Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (foodindex, i, basketItem, addItemToBasket, food)* & *Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (storedBasketItems, foodIndex)*

after research of [Stack Overflow](https://stackoverflow.com/) i found that these warnings are false positives so i then created my own post to confirm that this was correct [Here](https://stackoverflow.com/a/64688795/14580125) this is also linked to in my code.
I also recieved the warning 

*The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.* 

which i also resorted to use of [Stack Overflow](https://stackoverflow.com/) to fix which lead to me correcting my code [Here](https://stackoverflow.com/a/64688795/14580125) credit has been given on that line of code.
[JSHINT WARNING IMAGE](../images/testing-images/jshint.png)

#### NAVIGATION

* Clicked on the **fas fa-bars** icon which is the navigation button - Navigation menu opens.
* Clicked on the **fas fa-times** icon which replaces the **fas fa-bars** icon - Navigation menu closes.
* Clicked on the **fas fa-bars** then selected the **About** link which took me to the **About Us Page** and closed the navigation menu for me. - Credit to Jon from CI slack community for peer code review where he pointed out i had forgotten to re-add the auto close when links clicked.
* Repeated the above process for all links - All worked successfully.

#### PAGES

* Clicked and also manually scrolled to all pages one by one refreshing the website each time - No issues found.

#### ANIMATION

* Scrolled through the website on mobile and desktop view - All animations caused page overflow initially which was solved by adding *overflow-x:hidden* to **Body & HTML tags**.

#### SHOPPING CART / MENU

* Clicked **Add to Basket** buttons for all items on the menu page - all buttons changed to **Item Added** & disabled for 5 seconds correctly.
* Clicked **Add to Basket** buttons for all items on menu page - all items loaded into shopping cart correctly in name, price, quantity & total cost.
* Clicked on **View Basket** button on the menu page - Shopping basket opened correctly.
* Clicked on the **fas fa-shopping-cart** icon - Shopping basket opened correctly.
* Clicked the **fas fa-plus** icon to increase the quantity - Correctly increased the quantity for the items selected while also increasing the total cost by the correct amount.
* Clicked the **fas fa-minus** icon to decrease the quantity - Correctly drecreased the quantity for the items selectioned while also decreasing the total cost. (cant decrease lower than one)
* Clicked the **far fa-times-circle** icon to remove items from basket - Worked correctly & correctly adjusted total cost.
* I re-added all items to the basket and increased the quantity of some of the items then refreshed the page to check if local storage restored the data correctly - this was successful.
* I re-added all items to the basket and increased the quantity of some of the items then closed the browser and reopened to check if local storage restored the data correctly - this was successful.
* This is as far as the shopping cart goes, i'm unable yet to create a database for storing data correctly and also setting up a functioning payment system but plan to implement this when i am capable.

#### DARK MODE

* I clicked on **fas fa-adjust** icon which successfully loaded the dark mode options and replaced the correct images also.
* I refreshed my page to check if local storage kept the dark mode settings - this was successful.
* I closed my browser and reopened to check if local storage kept the dark mode settings - this was successful.
* I clicked on **fas fa-adjust** icon again which then successfully transitioned back to light mode.

#### EMAILJS FORMS

##### BOOKING FORM

* Filled out **Booking Form** information then clicked submit - emails were sent correctly to customer & owner [Customer Email](../images/testing-images/booking-customer.png) [Owner Email](../images/testing-images/booking-owner.png)
* Also when the emails we're sent the button text changes to **Submitted** & disabled till page refreshed to prevent spam.
* Clicked Date & Time - Was unable to select booking times and dates outside of opening hours and days accomplished by using & [TempusDominus Time & Date Plugin](https://tempusdominus.github.io/bootstrap-4/)

##### CONTACT FORM

* Filled **Contact Form** information then clicked submit - email was sent correctly to  owner [Contact Form Email](../images/testing-images/contact-email.png).
* Also when the emails we're sent the button text changes to **Submitted** & disabled till page refreshed to prevent spam.

### BROWSER TESTING