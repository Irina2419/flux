# Plumbing Services Website

A modern, minimalist website for a construction plumbing business in North West London.

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
    * [Wireframes](#wireframes)
* [Features](#features)
    * [All Pages](#all-pages)
    * [Home Page](#home-page)
    * [Underfloor Heating Page](#underfloor-heating-page)
    * [Areas Covered and Contact Page](#areas-covered-and-contact-page)
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

The target audience for this website consists of homeowners, businesses, and property managers in North West London seeking reliable construction plumbing services. These users typically want to:

* Find information about construction plumbing services.
* View a portfolio of completed projects.
* Determine if the business covers their area.
* Contact the business easily.

### Business Goals

The business goals for the website are to:

* Showcase their expertise in construction plumbing and underfloor heating.
* Attract potential customers by providing a professional and user-friendly experience.
* Increase customer inquiries and generate leads.
* Provide essential information, such as service areas and contact details, in a clear and accessible manner.

### User Stories

**User Story 1: Finding Plumbing Services and Contacting the Business**

As a homeowner in North West London seeking a reliable plumber for a home renovation project, I want to easily find information about construction plumbing services, view examples of past work, confirm service area coverage, and quickly contact the business so that I can get a quote for my project.

**Acceptance Criteria:**

* The website homepage provides a clear overview of the core construction plumbing services offered.
* Navigating the website to find specific construction plumbing service details is intuitive and straightforward.
* A link to an online portfolio of completed projects is prominently displayed and allows me to assess the quality of work.
* The "Areas Covered" page clearly defines the service locations, allowing me to easily confirm if my location in North West London is included.
* Contact information (phone number and/or email address) is readily visible on the website, enabling easy inquiries.

**Tasks:**

* Ensure the homepage clearly lists and briefly describes core construction plumbing services.
* Implement clear and intuitive navigation to all service pages.
* Create and link to an online portfolio showcasing completed construction plumbing projects.
* Develop an "Areas Covered" page with a clear indication of the service locations in North West London.
* Display prominent contact information (phone number, email address) on all relevant pages, especially the homepage and contact page.

**User Story 2: Finding Underfloor Heating Information and Requesting a Consultation**

As a property manager looking to install underfloor heating in a commercial building, I want to find detailed information about the benefits and types of underfloor heating systems offered, see examples of previous underfloor heating installations, and easily request a consultation so that I can discuss my project requirements.

**Acceptance Criteria:**

* A dedicated "Underfloor Heating" page provides a clear and comprehensive explanation of the underfloor heating services offered.
* The "Underfloor Heating" page details the benefits of underfloor heating systems.
* The "Underfloor Heating" page showcases different types of underfloor heating systems available.
* The online portfolio includes examples of completed underfloor heating installation projects.
* A user-friendly contact form is available on the "Areas Covered and Contact" page to facilitate consultation requests.

**Tasks:**

* Create a dedicated "Underfloor Heating" page with detailed information about the service.
* Ensure the portfolio includes a section showcasing underfloor heating projects.
* Implement a functional and user-friendly contact form on the "Areas Covered and Contact" page.

**User Story 3: Checking for Heat Pump Installation Services**

As a homeowner in North West London interested in environmentally friendly heating solutions, I want to easily determine if the company offers heat pump installation services so that I can explore this option for my property.

**Acceptance Criteria:**

* The website clearly indicates whether or not heat pump installation is offered as a service.
* Information about heat pump installation services is easily discoverable through the website navigation or on a dedicated service page.
* If heat pump installation is offered, a brief overview of the types of heat pumps installed or the benefits of heat pumps is provided.

**Tasks:**

* Clearly state on the website whether heat pump installation is offered.
* If heat pump installation is a service, create a dedicated page or section with more details about it.
* Ensure the website navigation allows users to easily find information about heat pump installation services.

## Design

* **Color Palette:**
    * **Primary Brand Color:**
        * **HEX:** #256d20 (A rich green, likely intended to convey trust and professionalism for a construction plumbing business.)
    * **Secondary Color:**
        * **HEX:** #7ba075 (A lighter shade of the primary green, used for hover states on navigation links, providing subtle visual feedback.)
        * **Rationale:** Offers a lighter variation of the brand color for interactive elements.
    * **Text Color:**
        * **Primary Text:**
            * **HEX:** #084913 (A darker shade of green, used for primary text elements, ensuring good contrast against lighter backgrounds.)
        * **Secondary Text:**
            * **HEX:** #000000 (Black, used for the company name and potentially other key text, providing strong contrast.)
    * **Background Colors:**
        * **Primary Background:**
            * **HEX:** #ffffff (White, the default background for most content areas, ensuring a clean and minimalist feel.)
        * **Secondary Background:**
            * **HEX:** rgba(37, 109, 32, 0.6) (A semi-transparent version of the primary green, used for the main content and hero section overlays, adding a subtle brand accent.)
    * **Navigation Link Color:**
        * **HEX:** #084913 (Darker shade of green, ensuring readability and consistency with text color.)
    * **Border/Divider Color:**
        * **HEX:** rgba(0, 0, 0, 0.3) (A semi-transparent black, used for the navbar toggler border, providing subtle visual separation.)
* **Typography:**
    * **Primary Heading Font:**
        * **Font Family Name:** 'CelebriSans'
        * **Font Style(s):** Bold
        * **Rationale:** Used for the company name ("Flux") in the navigation and likely for other prominent headings. It provides a distinct and strong visual identity.
        * **Fallback:** sans-serif
    * **Secondary Heading Font:**
        * **Font Family Name:** 'Roboto'
        * **Font Style(s):** Bold
        * **Rationale:** Used for main headings within content areas and the footer. It offers good readability and a modern aesthetic.
        * **Fallback:** sans-serif
    * **Body Text Font:**
        * **Font Family Name:** 'Flow Circular', sans-serif
        * **Font Style(s):** Regular
        * **Rationale:** Used for the main body text. It is a unique and potentially decorative font, though the 'sans-serif' fallback ensures readability.
        * **Fallback:** sans-serif
    * **Navigation Links Font:**
        * **Font Family Name:** 'CelebriSans'
        * **Font Style(s):** Bold
        * **Rationale:** Consistent use of 'CelebriSans' in the navigation reinforces brand identity and provides a clear, bold style for links.
        * **Fallback:** sans-serif
    * **Footer Font:**
        * **Font Family Name:** 'Roboto', sans-serif
        * **Font Style(s):** Normal
        * **Rationale:** Used for the footer text. It is a clean and readable font choice for important information.
        * **Fallback:** sans-serif
    * **Font Sizes:**
        * A clear visual hierarchy is established using various font sizes, with larger sizes for main headings, medium sizes for subheadings, and smaller sizes for body and footer text.
* **Imagery:** High-quality images and videos will be used throughout the website to create a modern and visually appealing design.
* **Wireframes:** \[*Link to wireframes or brief description of layout structure for each page will be provided here*]

## Features

### All Pages

* Clear and intuitive navigation menu, consistently placed at the top or side of the page.
* Responsive design to ensure optimal viewing on all devices (desktops, tablets, and smartphones).

### Home Page

* Hero section with a high-quality background video and a concise, attention-grabbing headline.
* Brief, compelling descriptions of core construction plumbing services.
* Links to the online portfolio.
* Business name, phone number, email address, and working hours.
* Footer with a prominent, high-quality image matching the hero section.

### Underfloor Heating Page

* Brief explanation of the benefits of underfloor heating.
* Breakdown of underfloor heating services.
* Link to the online portfolio containing underfloor heating project examples.

### Areas Covered and Contact Page

* Interactive map displaying service areas with clear visual indicators.
* User-friendly contact form with fields for name, email, phone number, and message.

## Accessibility

This website is being developed with accessibility in mind to ensure it is usable by as many people as possible, including those with disabilities. Here are some of the accessibility considerations implemented or planned:

* **Semantic HTML:** The HTML structure uses semantic elements (e.g., `<nav>`, `<header>`, `<main>`, `<footer>`, `<article>`, `<aside>`) to clearly define the purpose of different content sections. This helps assistive technologies like screen readers understand the page structure.
* **Descriptive Meta Information:** Meta tags for `description` and `keywords` are included, which can be helpful for search engines and, indirectly, for users finding relevant content.
* **Clear Page Title:** The `<title>` element "FLUX | Bespoke Plumbing Services" provides a descriptive title for the page, aiding navigation and understanding, especially for screen reader users.
* **Alternative Text for Images:** While not explicitly visible in this code snippet, it is crucial that all images used on the website include descriptive `alt` attributes. This provides textual alternatives for screen readers and when images cannot be loaded.
* **Color Contrast:** The color palette has been chosen with consideration for contrast between text and background. The darker greens and black text on a white or light green background should generally provide sufficient contrast for readability.
* **Responsive Design:** The use of the viewport meta tag (`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`) and the integration of Bootstrap suggest a responsive design. This ensures the website adapts to different screen sizes, which is beneficial for users with low vision who may need to zoom in.
* **Language Attribute:** The `<html lang="en">` attribute correctly specifies the language of the document, which is important for screen readers and other assistive technologies.

**Further Steps for Accessibility:**

* **Regular Accessibility Testing:** Conduct regular testing using screen readers (e.g., NVDA, VoiceOver), keyboard navigation, and online accessibility evaluation tools.
* **WCAG Compliance:** Aim to meet the Web Content Accessibility Guidelines (WCAG) standards.
* **User Feedback:** Encourage and incorporate feedback from users with disabilities.

## Feedback

\[*Information on how users can provide feedback (e.g., contact form, email address) will be added here*]

## Credits

\[*Credits for any third-party libraries, frameworks, or assets used in the project will be added here*]

## Media

* \[*Specific details about the video and image sources, licenses, or credits will be added here*]

## Code and Resources Used

* \[*List of specific coding languages, libraries, frameworks, and other resources used in the development of the website will be added here.*]

## Technology and Tools Used

* \[*List of tools used for development, design, and deployment  will be added here*]

## Deployment

\[*Information about the deployment process and hosting platform will be added here*]
