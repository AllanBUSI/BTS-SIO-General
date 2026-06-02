

module.exports = (req, res) => {
  res.json({
    message: 'Bienvenue sur l\'API de gestion des avis de films !',
    endpoints: {
      get: [
        {endpoint: '/avis', description: 'Récupérer tous les avis de films'},
        {endpoint: '/avis/:id', description: 'Récupérer un avis de film par son ID'}
      ],  
      post: [
        {endpoint: '/add/avis', description: 'Ajouter un nouvel avis de film'},
        {endpoint: '/register', description: 'Créer un compte utilisateur'}, 
      ]}
  })
}