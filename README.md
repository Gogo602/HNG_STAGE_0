# 🚀 HNG Internship Stage 0 Frontend Task: Testable Profile Card

## Project Overview

This repository contains the solution for the HNG Internship Stage 0 Frontend Task. The goal was to build a single, accessible, responsive, and testable Profile Card component using only fundamental web technologies (HTML, CSS, Vanilla JS), strictly adhering to all specified `data-testid` requirements for automated grading.

---

## 💻 Tech Stack

* **HTML5:** Used for semantic structure and content organization.
* **CSS3:** Used for styling and responsive layout (Flexbox/Media Queries).
* **Vanilla JavaScript (ES6):** Used for dynamic content injection (Current Time in milliseconds).

---

## ✨ Core Requirements & `data-testid` Implementation

All required elements are implemented using **semantic HTML** and include the **exact** `data-testid` attribute values as mandated for automated testing.

| Content Element | HTML Tag Used | Required `data-testid` | Compliance Note |
| :--- | :--- | :--- | :--- |
| **Profile Card Root** | `<article>` | `test-profile-card` | Wraps the entire component. |
| **Name** | `<h2>` | `test-user-name` | Displays the user's name. |
| **Short Biography** | `<p>` | `test-user-bio` | Contains the user's short bio. |
| **Current Time (ms)** | `<p>` (or `<span>`) | `test-user-time` | Dynamically updated by JavaScript using `Date.now()`. |
| **Avatar Image** | `<img>` (in `<figure>`) | `test-user-avatar` | Includes required `alt` attribute. |
| **Social Links List** | `<nav>` | `test-user-social-links` | Container for external links. |
| **Hobbies (List)** | `<ul>` (in `<section>`) | `test-user-hobbies` | Uses `display: flex` for list layout. |
| **Dislikes (List)** | `<ul>` (in `<section>`) | `test-user-dislikes` | Uses `display: flex` for list layout. |

### Semantic Markup & Accessibility
* The profile picture is contained within a **`<figure>`** element.
* The social links are contained within a **`<nav>`** element.
* All interactive links include **`target="_blank"`** and **`rel="noopener noreferrer"`** for security and best practice.

---

## ⚙️ Implementation Guidance

### Dynamic Time (JavaScript)

The `main.js` file handles the current time display:

```javascript

// Function to update the current time in milliseconds
function updateUTCTime() {
    //  Get current time in milliseconds 
    const currentTimeMs = Date.now();

    //  Select the target html element 
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    //  Update the element's content
    if (timeElement) {
        timeElement.textContent = "Time in Miliseconds: " + currentTimeMs;
    }
}

// function call
updateUTCTime();

// update every 100 milliseconds)
setInterval(updateUTCTime, 100);
```
---
## 📱 Responsiveness

The component is designed to be **fully responsive** and adapts to different screen sizes using CSS Media Queries and Flexbox:

* **Mobile View (Small Screens):** The content elements, including the avatar and text, are stacked vertically for optimal readability and scrolling.


---

## ⬇️ How to Run Locally

To view and test this project on your local machine:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Gogo602/HNG_STAGE_0.git
    ```
2.  **Navigate to the Project Folder:**
    ```bash
    cd stage-0
    ```
3.  **Open the File:**
    Open the **`index.html`** file directly in your web browser or open with live server.

---

## 🌐 Live URL & Submission

| Item | Status | Link |
| :--- | :--- | :--- |
| **Live Project URL** | **DEPLOYED** | **https://profilecard-omega-six.vercel.app/** |
| **GitHub Repository** | **CURRENT REPO** | **https://github.com/Gogo602/HNG_STAGE_0.git** |

---
*Submitted on: October 17th, 2025.*
