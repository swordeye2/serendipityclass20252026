// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  setPersistence, 
  browserLocalPersistence 
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZImroIO2jbhTI5wCP9VbWjyL1yyCTm9c",
  authDomain: "serendipity-data-2cba2.firebaseapp.com",
  projectId: "serendipity-data-2cba2",
  storageBucket: "serendipity-data-2cba2.firebasestorage.app",
  messagingSenderId: "535711633393",
  appId: "1:535711633393:web:6e55e5e3776b09dfbd7e50",
  measurementId: "G-PDK312WXHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Set persistence to LOCAL so login survives page reloads
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("✅ Auth persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Persistence error:", error);
  });

// Example login handler
async function login(email, password) {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in:", userCred.user.uid);

    // Fetch grades (optional)
    const docRef = doc(db, "grades", userCred.user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Grades:", docSnap.data());
    } else {
      console.log("No grades found.");
    }

    // Redirect to dashboard.html
    window.location.href = "dashboard.html";

  } catch (err) {
    console.error("Login failed:", err.message);
  }
}

// Make function available globally (so index.html can call it)
window.login = login;
