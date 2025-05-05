# TESTING.md: FLUX Testing

View Site -> FLUX | Bespoke Plumbing Services

CONTENTS

* [Solved Bugs](#solved-bugs)
* [Automated Testing](#automated-testing)
    * [W3C CSS Validator](#w3c-css-validator)
    * [W3C HTML Validator](#w3c-html-validator)
* [Perfomance Testing](#perfomance-testing)
    * [Considerations For Test Results](#considerations-for-test-results)
    * [Steps Taken to Improve Performance](#steps-taken-to-improve-performance)
    * [Perfomrance Score Research](#perfomrance-score-research)
* [Accesibility Testing](#accesibility-testing)
    * [Steps Taken to Improve Accesibility](#steps-taken-to-improve-accesibility)
* [SEO](#seo)
    * [Steps Taken to Improve SEO](#steps-taken-to-improve-seo)
* [Manual Testing](#manual-testing)
    * [User Story Testing](#user-story-testing)
    * [Full Testing](#full-testing)
* [Solved Bugs](#solved-bugs)

## Solved Bugs

* I did not encounter many bugs as this is a static page, most issues were solved during the development cycle

## Automated Testing

### W3C CSS Validator

Used [W3C Schools CSS validator](https://jigsaw.w3.org/css-validator/)

![CSS Validation Results](assets/images/css_validation.png)

### W3C HTML validator

Used [W3C Nu HTML Checker](https://validator.w3.org/nu/)

**Index Page:**
![HTML Validation Results - Index Page](assets/images/html_validation_index.png)

**WunderFloor Page:**
![HTML Validation Results - WunderFloor Page](assets/images/html_validation_wundefloor.png)

**Areas Page:**
![HTML Validation Results - Areas Page](assets/images/html_validation_areas.png)

## Perfomance Testing

Used [Google Lighthouse](https://developers.google.com/speed/pagespeed/) for testing.

Scores are defined by Google as follows:
> source

Scores were obtained by running Lighthouse on Chrome Developer Tools on each page around 5 times for mobile and desktop, and the highest score was taken. From this, it is important to note that the Lighthouse score can vary each time you run the test; thus, it should be taken as a metric and not an absolute.

* **Home Page**
    * Desktop
    * Mobile
* **About Us Page**
    * Desktop
    * Mobile
* **Subsidiaries Page**
    * Desktop
    * Mobile
* **Corporate Responsibility Page**
    * Desktop
    * Mobile
* **Investor Relations Page**
    * Desktop
    * Mobile
* **Contact Page**
    * Desktop
    * Mobile
* **Careers Page**
    * Desktop
    * Mobile
* **Under Construction Page**
    * Desktop
    * Mobile

### Considerations For Test Results

Through some research, I have found that the largest factors holding the score back are the following. I did take a lot of steps to improve my store, and these are related in the following section. But keep working on the score further would be a large time sink and would yield diminishing returns. Even according to Google: "taking a score from 99 to 100 needs about the same amount of metric improvement that would take a 90 to 94." [source](https://web.dev/performance/optimizing-content-efficiency/lighthouse-performance-scoring/#:~:text=Considerations%20for%20chasing%20a%20perfect%20score)

Improvement could be made but would require possible restructuring of the project or removing features that help the site stand out and is beyond the scope of the project. The following improvements could be considered if Lighthouse scores close to 100 on all tests were needed:

* **Bootstrap**: This is a 3rd party import and takes up load resources.
    * Could be improved by importing Bootstrap locally.
    * Minifying Bootstrap CSS.
    * Use a library like Tailwind that purges unused CSS.
* **Google Fonts**: This is a 3rd party font library that takes up load resources.
    * Could locally import fonts to improve.
    * Could compress fonts.
* **Font Awesome**: This is a 3rd party icon library that takes up load resources.
* **Animations**: These animations take up constant load time.
    * Could remove animations.

### Steps Taken to Improve Performance

* Converted problematic images to webp format.
* Compressed hero videos.
* Added `poster` tag to videos.
* Modified import scripts and links in the head tag to "reduce block-size rendering":
    * Added `defer = ""` attribute to 3rd party scripts.
    * Added `rel="preload" as="style" onload="this.rel='stylesheet'"` attribute to 3rd party links (Bootstrap).
    * This saw a Lighthouse increase of 88 to 90 on my `index.html` page, which is one of the heaviest pages. These results were comparable on other pages, generally going from 95 to 98.
    * Before
    * After
* Changing the h1 animation had extreme improvements in `index.html` and `about-us.html`.
    * Was previously using an `animation` that affected the `letter-spacing` of the text; this caused the layout to go through various shifts and greatly increased load time.
    * Changing this animation to a simpler one that only used `filter` fixed this issue, improving the load speed from around 90 to 99 in `index.html` and up to 95 in `about-us.html`.
    * Before
    * After
* Adding a smaller video file that only gets shown to mobile devices had a big improvement in performance on mobile tests (no effect on desktop tests).
    * Before
    * After
* Added smaller images to pages where the image load was generating a Lighthouse warning, set images that don't appear immediately to `loading="lazy"`.
    * Saw minor improvements in mobile performance scores.
    * Before
    * After

### Perfomrance Score Research

I wanted to do some light research to see the performance score on similar websites, that being a conglomerate company that has a website that showcases their subsidiaries and industries they work in. I did this to compare the score that I have achieved and see how they fare in relation to professional websites. The test was only conducted on the home page of each site and was repeated a few times to ensure the best score. Note: I appreciate that these websites probably have much heavier 3rd party dependencies than mine, so this test should not be taken as a direct comparison.

* [ABB Group page link](https://global.abb/)
    * Desktop
    * Mobile
* [General Motors page link](https://www.gm.com/)
    * Desktop
    * Mobile
* [General Electric page link](https://www.ge.com/)
    * Desktop
    * Mobile

## Accesibility Testing

I used the web inspector **Audit Tool** to find accessibility issues on my website.
I also used [AC checker](https://achecker.ca/checker) to check for accessibility compliance.
In the Audit, I managed to get all scores up to 100%.
In the AC checker, I managed to remove all errors except for one regarding the heading nesting in my footer. But this didn't affect the Accessibility Audit, so I left it.

* **Home Page Accessibility Audit**
* **About Us Page Accessibility Audit**
* **Subsidiaries Page Accessibility Audit**
* **Corporate Responsibility Page Accessibility Audit**
* **Investor Relations Page Accessibility Audit**
* **Contact Page Accessibility Audit**
* **Careers Page Accessibility Audit**
* **Under Construction Page Accessibility Audit**

### Steps taken to improve Accesibility

* Used `title` attribute on links.
* Used `span` instead of `i` for icons.

These two saw improvements in Accessibility results on both the Audit and the AC checker.

## SEO

Steps Taken to Improve SEO

## Manual Testing

### User Story Testing

### Full Testing