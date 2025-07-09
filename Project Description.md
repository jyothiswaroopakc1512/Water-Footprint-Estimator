# Water Footprint Estimator (WFE)

**“Know What You Use. Conserve What You Can.”**

---

## Overview

The **Water Footprint Estimator (WFE)** is an interactive web platform designed to help users estimate the **amount of water consumed** in the production of common items such as fruits, food plates, or clothing. Users can either **upload an image** or **capture a photo using a camera**, and the system maps the item to a pre-defined dataset to calculate its **water footprint** in liters.

This project aims to raise awareness about water consumption through a visual and accessible interface.

---

## Key Features

* Image Upload and Live Camera Support for item detection
* Real-time Water Footprint Calculation based on uploaded item
* Visually dynamic background video and responsive design
* Informational Tips Page promoting water conservation
* Lightweight front-end with minimal loading time
* Simple and intuitive interface for all user types

---

## Problem Solved

* General unawareness of water used to produce daily-use items
* No accessible tools that combine image recognition with sustainability data
*  WFE empowers users to make informed, eco-friendly decisions through visual interaction

> *Example: Uploading a picture of an apple displays that it takes \~125 liters of water to grow.*

---

## Tech Stack

| Component    | Technology                                             |
| ------------ | ------------------------------------------------------ |
| Frontend     | HTML, CSS, JavaScript                                  |
| Styling      | Custom CSS (`mycss.css`, `mycss2.css`)                 |
| Scripts      | JavaScript (`myjs.js`, `myjs1.js`)                     |
| Media        | Images and background video in `/static/`              |
| Data Mapping | Predefined JS logic or JSON for water footprint values |
| Deployment   | Local browser or hosted as a static site               |

---

## Software Design Principles Used

* **SRP (Single Responsibility Principle)** – Each file/module has a dedicated responsibility
* **DRY (Don’t Repeat Yourself)** – Common logic and styling re-used effectively
* **User-Centric Design** – Designed for clarity, speed, and minimal user friction

---

##  Folder Structure

```
Water-Footprint-Estimator/
├── html/
│   ├── index.html        # Homepage with upload & camera
│   ├── calc.html         # Water calculation page
│   └── tips.html         # Tips for saving water
│
├── css/
│   ├── mycss.css         # General UI styling
│   └── mycss2.css        # Background video layout
│
├── js/
│   ├── myjs.js           # Water footprint mapping & calculation logic
│   └── myjs1.js          # Supporting JS interactions
│
├── static/
│   ├── images/
│   │   ├── blue.png
│   │   ├── grey.png
│   │   ├── total.png
│   │   ├── green.png
│   │   └── save.png
│   └── videos/
│       └── background.mp4
│
├── package.json           # (If Node.js used for future scaling)
├── package-lock.json      # Lock file for dependencies
└── Project Description.md # This file
```

---

##  How It Works

1. **User accesses the site** through browser
2. **User uploads or captures** an image of an item (e.g., apple, jeans, food plate)
3. **System maps the item** to its average water footprint using JavaScript logic
4. **Water usage is displayed** in liters with suggestions on conservation
5. **Optional tips page** offers educational content on water-saving habits

---

## Diagrams

📌 Suggested additions (you can include these manually):

* Home page with camera/upload UI
* Output screen with water calculation
* Tip screen with suggestions
