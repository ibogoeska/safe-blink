This is a **Single Page Application (SPA)** built with HTML, Bootstrap and vanilla JavaScript, developed as a practical performance of the "Safe Web" UI challenge. It aims to educate users on safe online behavior, providing interactive, dynamic, and mobile friendly content through a hash based routing system.

## 📌 Project Features

- Fully responsive UI, implemented per Figma design
- Hash-based SPA routing (onhashchange) handled in router.js file
- Dynamic rendering of video and discussion content
- Filterable video list on the "Се што треба да знаеш" page
- Simulated login system using a local Flask REST Application
- User session handling and data persistance via localeStorage
- Conditional access (e.g., only logged-in users can post or edit)
- Form validation and UI modals
- Custom experiences/comments added dinamically with author and timestamp

## 🛠 Technologies used

- HTML5
- Bootstrap 5
- Vanilla JavaScript (ES6)
- Flask REST API (for login simulation)

## 📂 Project Structure

```
 ├───assets
│   ├───icons
│   ├───images
│   ├───screenshots
│   └───video
├───js
│   └───pages
├───styles
└───templates
```

## 🚀 Getting Started

1. Clone the Repository

```
git clone https://git.brainster.co/Ivona.Bogoeska-FE22/project2-safe_web-ivonabogoeska-fe22.git
```

2. Run the local REST API (Authentication)
   Ensure Python 3.12.3 is installed. Then

```
# Install required dependencies
pip install flask
pip install flask_cors

# Run the Flask API
python "./REST API/authenticator.py"
```

You should see a message indicating the server is running on http://localhost:5000

## 🔒 Login Credentials

You can log in using one of the following credentials:

- User123 / Pass123
- User456 / Pass456
- User789 / Pass789

Only authenticated users can:

- Post new experiences in the discussions panel
- Filter and persist video preferences
- Access and update their profile (email/year of birth)

## 📒 Notes

- Videos are played inline using the native <video> tag.
- If you see images instead of videos, ensure media files are correctly linked or available locally, the videos play on click on the play button in the center of the image.
- No backend database is required - all persistant data is managed through localeStorage.

## 🛠 Development process

This project was developed in several structured phases to ensure clarity, responsivness and feature completeness:

1. 🎨 **Design review & Asset Preparation**

- The first step involved carefully analyzing the Figma design shared in the project specification.
- I noted down key color codes, typography, and spacing guidelines to maintain design fidelity.
- I downloaded all necessary icons, images and vectors directly from Figma or used visually consistent alternatives when needed.
- Pages were reviewed in both desktop and mobile views to ensure responsive behavior from start.

2. 📆 **Planning and strategy**
   Before writing any code, I outlined a basic development plan:

- Decide on a Single Page Application (SPA) architecture using hashchange routing.
- Split the app into template-based content sections that would be dinamically shown/hidden.
- Plan the folder structure with pages/components/js,/assets, etc.
- Prioritize mobile-first responsivness using Bootstrap's grid and utility classes.
- Tested responsivness on different browsers and devices using browser dev tools.

3. 🚦**SPA Routing with hashchange**

- Created a custom router.js to listen for window.onhashchange events.
- On hashchange, a central async function renders the correc page content dinamically.
- Hashes like #info, #discussions, #signIn etc., are mapped to route funcions (e.g. initInfoPage()).

4. 🔑 **Login & Authentication with Flask API**

- Implemented the login page to send POST requests to a locally running Flask REST API.
- On succesful login, the username is stored in localeStorage and purple overlay is coming over the sign in page

5. 🧠 **JavaScrip Logic & User Flow**

- Dynamic content such as info cards, videos and discussions is rendered with JavaScript based on user actions.
- Added category-based filtering for video cards with active filter persistence across sessions.
- Users can add new experiences in the Discussions page, which are stored in localeStorage and stay upon refresh.
- Profile page allows users to change their email and birth year, which are also stored and retrieved on future sessions.

## Screenshots DEMO

You can open the links that lead to the screenshots from the pages of the project.

[Homepage](https://i.imghippo.com/files/jZCN1554b.png) -- [Info Page](https://i.imghippo.com/files/mmMy9031.png) -- [Discussions Page](https://i.imghippo.com/files/suAI6850Zxw.png) -- [Contact Page](https://i.imghippo.com/files/fUyG2131VvE.png) -- [Sign in Page](https://i.imghippo.com/files/YfLe9077wA.png) -- [Profile Page](https://i.imghippo.com/files/PZX7527coI.png)

## Credits

--> Credits go to the instructor **Marjan Ralevski** who explained the project on preety understandable manner and gave us tipps on how we can start, where to further, helping us where wé needed a push forward.
--> To **Brainster** for letting us experience how it feels working on a real life project.

## Contact

Feel free to contact me on my email address i.bogoeskaa@gmail.com
or visit me on [my LinkedIn profile](www.linkedin.com/in/ivona-bogoeska-1358b145).
