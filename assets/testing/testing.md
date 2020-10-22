# Testing

This project has been tested throughout with use of preview, devtools, manual testing and also the website was deployed on github pages very early in development to allow live testing after each commit was made.

## Mid Stage Testing Review

### HTML

* I ran my index.html code through [W3C HTML Validator](https://validator.w3.org)
* And recieved 8 errors/warnings [Error's Image](https://github.com/Birrellc/ms2-ci/tree/master/assets/images/testing-images/html-validator-errors.png/)
* 1 by 1 each error has been located and corrected and the results now display 0 errors / warnings [Error's Fixed Image](https://github.com/Birrellc/ms2-ci/tree/master/assets/images/testing-images/html-validator-fixed.png/)
* Using the preview feature of my IDE i have found that the corrected code has caused an issue with the position of my "hr" element for my contact page which will now have to be adjusted via CSS. 

### CSS

* I ran my styles.css code through [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
* No Errors recieved [No Error Found Image](https://github.com/Birrellc/ms2-ci/tree/master/assets/images/testing-images/css-validator-1.png/)

### SPEED TEST

* I ran a speed test on the live github page of my website via [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
* The results recieved we're poor and the website will need to be improved for speed by reducing image file sizing and better optimizing before project is fully live [Speed test results](https://github.com/Birrellc/ms2-ci/tree/master/assets/images/testing-images/initial-speed-test.png)

### RESPONSIVE TEST

* For the responsive test i used an app called [Responsivley App](https://responsively.app/) which allowed me to view my website with multiple device sizes \(iPhone 5/5se 320px, iPhone X 375px, Ipad 768px, and a generic laptop size of 1280px\)
* ![picture](assets/images/testing-images/responsive-test-part1.gif)
* ![picture](assets/images/testing-images/responsive-test-part2.gif)
* i have also tested responsiveness of site and forms fully via use of devtools on my IDE preview and also on my deployed github page showing no issues with the viewports of \(320px, 375px, 414px,  768px, 1024px, 1440px, 1920px)