📊 Online Report Card System

A web-based student report card system that allows students to securely log in, view their grades, and acknowledge receipt with a digital signature.

✨ Features

🔑 Secure Login using Firebase Authentication (students log in with unique credentials).

📚 Dynamic Report Cards with subject-wise grades retrieved from database.

🖊️ Acknowledgement Signature Pad where students sign to confirm they’ve viewed their grades.

🗄️ Database Backend powered by MySQL for grade storage, acknowledgements, and reporting.

🎨 Clean Frontend built with HTML, CSS (Roboto font, De La Salle green + Rhino gray theme).

🏗️ Tech Stack

Frontend: HTML, CSS, JavaScript

Authentication: Firebase Auth

Backend Logic: PHP (bridges frontend and database)

Database: MySQL (Hostinger)

Hosting: Hostinger Web Hosting (with optional GitHub Pages for static preview)

📂 Project Structure
/project-root
│── index.html          # Student login page
│── dashboard.html      # Student dashboard with grades + signature pad
│── style.css           # Global styles (Roboto, theme colors, table styles)
│── script.js           # Firebase login + frontend logic
│── /php
│    ├── getGrades.php        # Fetch grades by UID
│    ├── saveAcknowledgement.php # Save student signature + timestamp
│── /db
│    └── schema.sql      # MySQL database schema (students, grades, acknowledgements)
│── README.md

🚀 Setup Instructions
1. Clone or Download the Project
git clone https://github.com/yourusername/online-report-card.git

2. Configure Firebase

Go to Firebase Console
.

Create a project and enable Email/Password Authentication.

Copy your Firebase config keys into script.js.

3. Set Up MySQL on Hostinger

Create a new MySQL database and user in Hostinger’s control panel.

Import the db/schema.sql file.

Update your PHP files with the correct database credentials.

4. Upload Files to Hostinger

Place HTML, CSS, and JS in public_html/.

Place PHP files also inside public_html/ (they run server-side).

5. Run Locally (Optional)

You can test index.html locally in your browser.

For PHP/MySQL features, use a local server like XAMPP or Hostinger’s live preview.

📝 Future Enhancements

📊 Teacher/Admin dashboard for bulk grade uploads.

📩 Email notifications for new grades.

📱 Mobile-responsive layout.
