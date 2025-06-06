# FLUX | Bespoke Plumbing Services

A modern, minimalist website showcasing bespoke construction plumbing services in London.

**View Site ->** [https://irina2419.github.io/flux/](https://irina2419.github.io/flux/)

## Contents

* [User Experience (UX)](#user-experience-ux)
    * [Project Goals](#project-goals)
    * [User Goals](#user-goals)
    * [Business Goals](#business-goals)
    * [User Stories](#user-stories)
* [Design](#design)
    * [Color Palette](#color-palette)
    * [Typography](#typography)
    * [Imagery](#imagery)
* [Features](#features)
    * [All Pages](#all-pages)
    * [Home Page](#home-page)
    * [WunderFloor (Underfloor Heating) Page](#wunderfloor-underfloor-heating-page)
    * [Areas Covered Page](#areas-covered-page)
* [Accessibility](#accessibility)
* [Feedback](#feedback)
* [Credits](#credits)
* [Media](#media)
* [Code and Resources Used](#code-and-resources-used)
* [Technology and Tools Used](#technology-and-tools-used)
* [Deployment](#deployment)

## User Experience (UX)

### Project Goals

The project goal is to establish a professional, distinctive, and high-quality online presence for the plumbing business, moving beyond the typical, lower-quality plumbing website aesthetic. The aim is to showcase expertise and drive customer inquiries through a modern, minimalist design that aligns with the standards set by leading companies in other industries.

### User Goals

The target audience for this website consists of homeowners, businesses, and property managers in London seeking reliable construction plumbing services and underfloor heating solutions. These users typically want to:

* Find information about construction plumbing services.
* Learn about underfloor heating options.
* Determine if the business covers their area in London.
* Contact the business easily.
* Potentially view completed projects (indicated by the Google Business link).

### Business Goals

The business goals for the website are to:

* Showcase their expertise in construction plumbing and underfloor heating (branded as "WunderFloor").
* Attract potential customers by providing a professional and user-friendly experience.
* Increase customer inquiries and generate leads for both general plumbing and underfloor heating services.
* Provide essential information, such as service areas and contact details, in a clear and accessible manner.
* Encourage users to view completed projects via their Google Business profile.

### User Stories

**User Story 1: Finding Construction Plumbing Services and Contacting the Business**

As a homeowner in London seeking a reliable plumber for a construction project, I want to easily find information about construction plumbing services, understand the scope of services offered (planning, gas piping, heat pumps, water supply), confirm service area coverage in London, and quickly contact the business so that I can get a quote for my project. I also want to see examples of their completed work to assess their quality.

**Acceptance Criteria:**

* The website homepage provides a clear overview of the core construction plumbing services offered (Planning, Gas Piping, Heat Pumps, Water Supply).
* Navigating the website to find specific construction plumbing service details is intuitive and straightforward (primarily on the homepage currently).
* A link to their Google Business profile is prominently displayed, allowing me to view completed projects and reviews.
* The "Areas Covered" page clearly defines the service locations in London, allowing me to easily confirm if my location is included.
* Contact information (phone number and email address) is readily visible in the footer of every page, enabling easy inquiries.

**Tasks:**

* Ensure the homepage clearly lists and briefly describes core construction plumbing services (Planning, Gas Piping, Heat Pumps, Water Supply).
* Implement clear and intuitive navigation to all service pages (currently the homepage serves this purpose for construction plumbing details).
* Ensure the Google Business link is prominent on the homepage and potentially other pages.
* Maintain an "Areas Covered" page with clear indication of the service locations in London (currently includes Kensal Rise, Willesden Green, Queen's Park, Kensington and Chelsea with embedded map placeholders).
* Display prominent contact information (phone number, email address) in the footer of all pages.

**User Story 2: Finding Underfloor Heating Information and Expressing Interest**

As a property manager looking to install underfloor heating in a property, I want to find detailed information about the benefits and how "WunderFloor" systems work, understand the installation process and running costs, and easily contact the business to learn more.

**Acceptance Criteria:**

* A dedicated "WunderFloor" page provides a clear and comprehensive explanation of the hydronic underfloor heating services offered.
* The "WunderFloor" page details how the system works, the installation process, and potential running costs.
* A link to their Google Business profile is available to see examples of previous underfloor heating installations.
* Contact information (phone number and email address) is readily available in the footer of the "WunderFloor" page.

**Tasks:**

* Maintain a dedicated "WunderFloor" page with detailed information about the service (including how it works, installation, and running costs).
* Ensure the Google Business link is accessible from the "WunderFloor" page.
* Display prominent contact information (phone number, email address) in the footer of the "WunderFloor" page.

**User Story 3: Checking the Service Area**

As a homeowner in a specific area of London, I want to easily find out if the business provides services in my location so that I know if I can contact them for a plumbing project.

**Acceptance Criteria:**

* The "Areas Covered" page lists the specific areas in London that the business serves (currently Kensal Rise, Willesden Green, Queen's Park, Kensington and Chelsea are listed with map placeholders).
* The "Areas Covered" page provides some visual indication of the service areas (currently with placeholder embedded maps and links to Google Maps).

**Tasks:**

* Ensure the "Areas Covered" page clearly lists the service areas in London.
* Embed actual, working Google Maps for the listed areas on the "Areas Covered" page.

## Design

* **Color Palette:**
    * **Primary Brand Color:** `#A7D1AB` (A soft green, used as the background color for the main content and footer.)
    * **Accent Color:** `#084913` (A dark green, used for navigation links, some headings, and other key text elements.)
    * **Text Color:** `#222` (A dark grey, used as the primary text color for readability.)
    * **Secondary Text/Link Hover:** `#7ba075` (A lighter green, used for hover effects on navigation links.)
    * **Company Name:** `#222` (Dark grey, used for the company name in the navigation.)
    * **Footer Text:** `#cccccc` (Light grey, used for text in the footer.)
* **Typography:**
    * **Primary Heading Font:** 'CelebriSans', sans-serif (Used for the company name "Flux" and potentially other prominent headings.)
    * **Secondary Heading Font:** 'Roboto', sans-serif (Used for main headings within content areas.)
    * **Body Text Font:** 'Montserrat', 'Roboto', sans-serif (Used for the main body text, providing a modern and readable feel.)
    * **Navigation Links Font:** 'CelebriSans', sans-serif (Used for the navigation links, maintaining a consistent brand voice.)
    * **Footer Font:** 'Roboto', sans-serif (Used for the footer text, ensuring clarity for contact information and copyright details.)
* **Imagery:** High-quality background images are used in the hero sections of the Home and WunderFloor pages to create visual interest. An arrow icon and Google Business icon are used to direct users to their Google profile. Placeholder map iframes are used on the Areas Covered page.
* **Wireframes:** \[*Link to wireframes or brief description of layout structure for each page will be provided here*]

## Features

### All Pages

* Clear and intuitive navigation menu, consistently placed at the top of the page.
* Responsive design achieved through Bootstrap 5, ensuring optimal viewing on all devices.
* Consistent footer displaying contact information (email and phone number) and copyright details.

### Home Page

* Hero section with a static background image (`hero5.jpg`) and no prominent headline or call to action currently.
* Concise descriptions of core construction plumbing services: Planning, Gas Piping, Heat Pumps, and Water Supply, each in its own section.
* A prominent section linking to their Google Business profile to showcase completed projects.

### WunderFloor (Underfloor Heating) Page

* Hero section with a static background image (`second_page_image.png`).
* Introductory text explaining WunderFloor as a specialized division.
* Key aspects of WunderFloor systems explained: How It Works, Installation, and Running Costs, each with a relevant Font Awesome icon.
* A prominent section linking to their Google Business profile.

### Areas Covered Page

* Main heading "Areas Covered" and introductory text.
* Sections for each covered area: Kensal Rise, Willesden Green, Queen's Park, and Kensington and Chelsea.
* Placeholder embedded Google Maps iframes for each area.
* "View on Google Maps" links (currently with placeholder URLs) for each area.

## Accessibility

This website is being developed with accessibility in mind to ensure it is usable by as many people as possible, including those with disabilities. Here are some of the accessibility considerations implemented:

* **Semantic HTML:** The HTML structure uses semantic elements (`<nav>`, `<header>`, `<main>`, `<footer>`).
* **Descriptive Meta Information:** Meta tags for `description` and `keywords` are included.
* **Clear Page Titles:** Each page has a descriptive `<title>` element.
* **Alternative Text for Images:** It is crucial that all images include descriptive `alt` attributes (e.g., for the arrow and Google icons).
* **Color Contrast:** The color palette aims for sufficient contrast between text and background.
* **Responsive Design:** The use of the viewport meta tag and Bootstrap 5 ensures a responsive design.
* **Language Attribute:** The `<html lang="en">` attribute is used.
* **Navbar Toggler Accessibility:** The custom styling of the navbar toggler includes an SVG background and removes default borders and outlines, requiring careful attention to ensure proper ARIA attributes are added for screen reader users if interactive elements are added within.
* **Map `title` Attributes:** The `iframe` elements for the maps include descriptive `title` attributes.

**Further Steps for Accessibility:**

* **Replace Placeholder Map URLs:** Ensure the embedded Google Maps iframes on the "Areas Covered" page have actual, accessible map content.
* **Ensure Link Purpose is Clear:** The placeholder "View on Google Maps" links need to point to actual Google Maps locations.
* **Keyboard Navigation Testing:** Test the website's navigation using only a keyboard.
* **Screen Reader Testing:** Test the website with screen readers to ensure proper content reading order and understanding of elements.
* **WCAG Compliance:** Aim to meet WCAG standards.

## Feedback

Customers can provide feedback or direct inquiries to the company owner, Duncan Leeming, via the following contact methods:

* **Email:** duncan.leeming@gmail.com
* **Phone:** 07946 420 833

## Credits

* **Bootstrap:** Used for the responsive grid system and basic styling.
* **Font Awesome:** Used for icons on the WunderFloor page.
* **Google Fonts:** Used for the 'Montserrat' font.

## Media

* **`assets/images/hero5.jpg`:** Background image for the homepage hero section.
* **`assets/images/second_page_image.png`:** Background image for the WunderFloor page hero section.
* **`assets/images/arrow_icon.png`:** Arrow icon used in the Google Business link sections.
* **`assets/images/google_icon_150.png`:** Google Business icon used in the Google Business link sections.
* **`assets/images/favicon-32x32.png`, `assets/images/apple-touch-icon.png`, `assets/images/android-chrome-196x196.png`:** Favicon and app icons.

## Code and Resources Used

* HTML5
* CSS3
* Bootstrap 5
* Font Awesome
* Google Fonts

## Technology and Tools Used

* VS Code
* GitHub
* GitHub Pages
* GitHub Copilot

## Deployment

The website is currently deployed using GitHub Pages.

1.  The HTML and CSS files were created and committed to a GitHub repository.
2.  GitHub Pages was enabled for the repository through the repository settings, selecting the `main` branch (or the branch containing your website files) as the source.
3.  The website is accessible at the provided URL: [https://irina2419.github.io/flux/](https://irina2419.github.io/flux/)
