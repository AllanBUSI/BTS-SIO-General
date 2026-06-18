/**
 * ============================================================================
 *  controllers/post.controllers.forgot-password.js — Mot de passe oublié (POST /forgot-password)
 * ============================================================================
 *
 *  ⚠️ Ébauche (à compléter en TP).
 *
 *  Principe attendu :
 *    1. Récupérer l'email envoyé par l'utilisateur.
 *    2. Générer un jeton de réinitialisation (à durée de vie courte).
 *    3. Envoyer par e-mail (nodemailer) un lien contenant ce jeton.
 *
 *  Astuce sécurité : on renvoie le même message que l'email existe ou non,
 *  pour ne pas révéler quels comptes sont enregistrés.
 *
 *  Documentation officielle :
 *   - Nodemailer : https://nodemailer.com/about/
 *   - JWT        : https://github.com/auth0/node-jsonwebtoken
 * ============================================================================
 */

module.exports = (req, res) => {
  // TODO : générer un jeton de réinitialisation et envoyer l'e-mail.

  // Réponse temporaire.
  res.send('/forgot-password')
}
