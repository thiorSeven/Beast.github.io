
let chapters = {
    debut: {
        titre: 'Arret de voiture',
        description: 'Ta voiture arrête de fonctionner sur la route. ',
        image: 'https://cdn.mos.cms.futurecdn.net/hEXuxd6vtwHNpWFfc7gVoH.jpg',
        boutons: [ ]
    },
  
    chemin: {
        titre: 'Le monstre',
        description: 'Il y a une silhouette étrange dans les bois à coté de toi.',
        image: '',
        boutons: [ 
            {titre: 'Tu barres tes portes', destination: 'voiture'}, 
            {titre: 'Tu fermes tes fenêtres', destination: 'mort'} 
        ]
    },
  
    voiture: {
        titre: 'Dans la voiture',
        description: 'Le son a alerter la grosse silhouette.Elle se dirige vers toi.',
        image: 'URL',
        boutons: [ 
          {titre: 'Sortir de la voiture', destination: 'voiture'}, 
          {titre: 'Rester dans la voiture', destination: 'mort'} 
        ]
    },
  
    Exterieur: {
        titre: 'La course',
        description: 'Tu sort de la voiture et cours dans la direction opposé au monstre mais ton téléphone tombe',
        image: 'URL',
        boutons: [
          {titre: 'Tu continue à courir', destination: 'cachette'}, 
          {titre: 'Tu le ramasse', destination: 'cachette'} 
         ]
    },
  
    Cachette: {
      titre: 'Le téléphone',
      description: 'Tu dois appeler à l aide pour qu on te retrouve',
      image: 'URL',
      boutons: [
        {titre: 'J ai mon téléphone', destination: 'Fin'}, 
        {titre: 'Je n ai pas de téléphone', destination: 'mort'} 
       ]
  },
  
    mort: {
        titre: 'Vous êtes mort',
        description: 'La description',
        image: 'URL',
        boutons: [ 
          {titre: 'Recommencer', destination: 'debut'}, 
        ]
    },
  
    fin: {
        titre: 'La fin',
        description: 'Tu appeles les secours et ils finissent par te trouver dans les bois,ils t excortent chez ted grands parents sain et sauf et ta voiture est remorqué et est envoyer chez le mécanicien',
        image: 'URL',
        boutons: [ 
          {titre: 'Recommencer', destination: 'debut'},
        ]
    }
  };
  
  
  let twist = false;
  
  function goToChapter(chapterKey) {
    if (chapters.hasOwnProperty(chapterKey)) {
      let chapter = chapters[chapterKey];
      console.log('Titre du chapitre:', chapter.titre);
      console.log('Description du chapitre:', chapter.description);
  
      let destinations = [];
      chapter.boutons.forEach(button => {
        destinations.push(button.destination);
      });
      console.log('Destinations:', destinations);
  
      if (chapterKey === 'Exterieur') {
        twist = true; 
      }
    } else {
      console.error('Pas de chapitre');
    }
  }
  
  
  
  
  
  
  goToChapter('debut');