const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
// credential: admin.credential.cert(serviceAccount),
// credential: admin.credential.cert({
//   project_id: process.env.FIREBASE_ADMIN_PROJECT_ID,
//   private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, "\n"),
//   client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
//   auth_uri: process.env.FIREBASE_ADMIN_AUTH_URI,
//   token_uri: process.env.FIREBASE_ADMIN_TOKEN_URI,
//   auth_provider_x509_cert_url: process.env.FIREBASE_ADMIN_AUTH_CERT_URL,
//   client_x509_cert_url: process.env.FIREBASE_ADMIN_CLIENT_CERT_URL,
// }),
// });

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, "\n"), // Remove breaking line-breaks
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  }),
});

export default admin;
