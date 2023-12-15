
let chapters = {
  debut: {
    titre: 'Arret de voiture',
    description: 'Ta voiture arrête de fonctionner sur la route. ',
    image: 'https://cdn.mos.cms.futurecdn.net/hEXuxd6vtwHNpWFfc7gVoH.jpg',
    boutons: []
  },

  chemin: {
    titre: 'Le monstre',
    description: 'Il y a une silhouette étrange dans les bois à coté de toi.',
    image: '',
    video: 'homme_cours.mp4',
    boutons: [
      { titre: 'Tu barres tes portes', destination: 'voiture' },
      { titre: 'Tu fermes tes fenêtres', destination: 'mort' }
    ]
  },

  voiture: {
    titre: 'Dans la voiture',
    description: 'Le son a alerter la grosse silhouette.Elle se dirige vers toi.',
    image: 'URL',
    boutons: [
      { titre: 'Sortir de la voiture', destination: 'voiture' },
      { titre: 'Rester dans la voiture', destination: 'mort' }
    ]
  },

  Exterieur: {
    titre: 'La course',
    description: 'Tu sort de la voiture et cours dans la direction opposé au monstre mais ton téléphone tombe',
    image: 'URL',
    video: 'monstre.mp4',
    boutons: [
      { titre: 'Tu continue à courir', destination: 'cachette' },
      { titre: 'Tu le ramasse', destination: 'cachette' }
    ]
  },

  Cachette: {
    titre: 'Le téléphone',
    description: 'Tu dois appeler à l aide pour qu on te retrouve',
    image: 'URL',
    boutons: [
      { titre: 'J ai mon téléphone', destination: 'Fin' },
      { titre: 'Je n ai pas de téléphone', destination: 'mort' }
    ]
  },

  mort: {
    titre: 'Vous êtes mort',
    description: 'La description',
    image: 'URL',
    boutons: [
      { titre: 'Recommencer', destination: 'debut' },
    ]
  },

  fin: {
    titre: 'La fin',
    description: 'Tu appeles les secours et ils finissent par te trouver dans les bois,ils t excortent chez ted grands parents sain et sauf et ta voiture est remorqué et est envoyer chez le mécanicien',
    image: 'URL',
    boutons: [
      { titre: 'Recommencer', destination: 'debut' },
    ]
  }
};


document.addEventListener('DOMContentLoaded', function () {
  var recommencer = document.getElementById('recommencer');
  recommencer.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var reinitialiser = document.getElementById('resetButton');
  reinitialiser.addEventListener('click', function () {
    localStorage.clear();
    window.location.href = 'index.html';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var mort = document.getElementById('mort');
  mort.addEventListener('click', function () {
    window.location.href = 'page_06.html';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var commencer = document.getElementById('commencer');
  commencer.addEventListener('click', function () {
    window.location.href = 'page_01.html';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var chemin = document.getElementById('chemin');
  chemin.addEventListener('click', function () {
    window.location.href = 'page_02.html';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var voiture = document.getElementById('voiture');
  voiture.addEventListener('click', function () {
    window.location.href = 'page_03.html';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var exterieur = document.getElementById('exterieur');
  exterieur.addEventListener('click', function () {
    window.location.href = 'page_04.html';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var twist = document.getElementById('cachette_oui');
  twist.addEventListener('click', function () {
    sessionStorage.setItem('twist', 'true');
    window.location.href = 'page_05.html';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var fin = document.getElementById('fin');

  fin.addEventListener('click', function () {
    if (sessionStorage.getItem('twist') === 'true') {
      window.location.href = 'page_07.html';
    } else {
      alert("Vous n'avez pas ramasser votre téléphone");
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var cachette_non = document.getElementById('cachette_non');
  cachette_non.addEventListener('click', function () {
    window.location.href = 'page_05.html';
  });
});


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

    document.addEventListener('DOMContentLoaded', function () {
      var videoElement = document.createElement('video');
      videoElement.src = 'asset/monstre.mp4';
      videoElement.muted = true;
      videoElement.autoplay = true;
      videoElement.loop = true;

      var videoContainer1 = document.getElementById('video-container1');
      videoContainer1.appendChild(videoElement);
    });

    document.addEventListener('DOMContentLoaded', function () {
      var videoElement2 = document.createElement('video');
      videoElement2.src = 'asset/homme_cours.mp4';
      videoElement2.muted = true;
      videoElement2.autoplay = true;
      videoElement2.loop = true;

      var videoContainer2 = document.getElementById('video-container2');
      videoContainer2.appendChild(videoElement2);
    });

    document.addEventListener('DOMContentLoaded', function () {
      var sonChangement = new Audio('asset/son_changement.mp3');
      var boutons = document.getElementsByTagName('button');

      boutons.forEach(function (bouton) {
        bouton.addEventListener('click', function () {
          sonChangement.currentTime = 0;
          sonChangement.play();
        });
      })
    });


  }
}

let muteCheckbox = document.getElementById('muteCheckbox');
muteCheckbox.addEventListener('change', function () {
    localStorage.setItem('muteStatus', muteCheckbox.checked);
});
function checkMuteStatus() {
    let muteStatus = localStorage.getItem('muteStatus');
    if (muteStatus !== null) {
        muteCheckbox.checked = JSON.parse(muteStatus);
    }
    applyMuteStatus();
}
function applyMuteStatus() {
    let audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.muted = muteCheckbox.checked;
    });
}

document.addEventListener('DOMContentLoaded', function () {
  let sauvegarde = localStorage.getItem('ChapitrePresent');
  if (sa) {
    goToChapter(Sauvegarde);
  }
});
goToChapter('debut');
checkMuteStatus();
document.body.appendChild(resetButton);



