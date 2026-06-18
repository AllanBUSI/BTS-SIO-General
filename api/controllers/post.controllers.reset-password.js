/**
 * ============================================================================
 *  controllers/post.controllers.reset-password.js — Réinitialiser le mot de passe (POST /reset-password)
 * ============================================================================
 *
 *  ⚠️ Ébauche (à compléter en TP).
 *
 *  Principe attendu :
 *    1. Récupérer le jeton de réinitialisation + le nouveau mot de passe.
 *    2. Vérifier le jeton (jwt.verifyJwt) pour retrouver l'utilisateur concerné.
 *    3. Hacher le nouveau mot de passe (argon2) et le mettre à jour en base.
 *
 *  Documentation officielle :
 *   - JWT verify    : https://github.com/auth0/node-jsonwebtoken
 *   - argon2        : https://github.com/ranisalt/node-argon2
 *   - Prisma update : https://www.prisma.io/docs/orm/reference/prisma-client-reference#update
 * ============================================================================
 */

module.exports = (req, res) => {
  // TODO : vérifier le jeton, hacher le nouveau mot de passe, mettre à jour l'utilisateur.

  // Réponse temporaire.
  res.send('/reset-password')
}
