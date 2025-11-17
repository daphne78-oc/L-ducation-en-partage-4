// script.js
// Comportement: filtres, ouverture modal, stockage local des messages

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");
  const contentGrid = document.getElementById("content-grid");

  // Contenus complets (longs) des 4 articles (texte long en français) :
  const fullContents = {
    "art-diff": {
      title: "Différenciation pédagogique",
      html: `<h2>Différenciation pédagogique</h2>
<p>
La différenciation pédagogique est une démarche professionnelle qui vise à adapter
les modalités d'enseignement aux besoins, aux rythmes, aux intérêts et aux niveaux
des élèves. Dans une même classe, les élèves ne progressent pas à la même vitesse,
ne partent pas du même niveau de connaissances et n'apprennent pas de la même manière.
La différenciation permet donc de répondre à cette diversité tout en maintenant
des objectifs communs.
</p>
<p>
Concrètement, différencier peut intervenir à trois niveaux : les contenus (ce qu'on enseigne),
les processus (les activités proposées) et les productions (la manière dont les élèves
restituent leurs apprentissages). Par exemple, pour un enseignement de la rédaction,
le professeur peut proposer des textes de lecture de complexité variable, offrir
des supports divers (schéma, carte mentale, transcript) et accepter plusieurs formats
de production (écrit, oral, dessin) pour évaluer la même compétence.
</p>
<p>
Les raisons pédagogiques de différencier sont nombreuses : éviter l'ennui des élèves avancés,
prévenir le décrochage des élèves en difficulté, favoriser l'engagement par des tâches
appropriées et développer l'autonomie. La différenciation favorise aussi l'inclusion :
en adaptant les apprentissages, on réduit les obstacles pour les élèves en situation de handicap
ou ayant des besoins éducatifs particuliers.
</p>
<p>
Plusieurs stratégies aident à mettre en place la différenciation : l'évaluation diagnostique
en début d'un module pour connaître les acquis, la mise en place d'ateliers ou d'îlots
coopératifs qui permettent de travailler par groupes de niveau ou d'intérêt, l'utilisation
d'outils différenciés (fiches à plusieurs niveaux, parcours progressifs) et l'accompagnement
personnalisé (tutorat entre pairs, séances de remédiation ciblées). La différenciation demande
également une organisation de classe souple : gestion du temps, variation des consignes,
et parfois co-enseignement ou aide d'un assistant.
</p>
<p>
Enfin, différencier ne signifie pas renoncer à l'exigence. Il s'agit au contraire de proposer
une trajectoire d'apprentissage réaliste pour chaque élève, en conservant des objectifs
clairs et des critères d'évaluation transparents. Le recours à la différenciation
implique aussi une réflexion collective entre enseignants : mutualiser les ressources,
partager des progressions et analyser les effets des dispositifs mis en place.
</p>
<p>
En résumé, la différenciation pédagogique est un levier puissant pour respecter la diversité
des élèves et améliorer les apprentissages. Elle repose sur l'observation, l'évaluation
et l'adaptation permanente des pratiques enseignantes, tout en maintenant des repères
communs pour tous.
</p>`
    },
    "art-alt": {
      title: "Pédagogies alternatives : Montessori, Freinet, Steiner-Waldorf",
      html: `<h2>Pédagogies alternatives : Montessori, Freinet, Steiner-Waldorf</h2>
<p>
Les pédagogies dites « alternatives » regroupent plusieurs approches éducatives
qui cherchent à remettre l'enfant et son développement au centre de la pratique
pédagogique, souvent par un effort d'autonomie, de coopération et d'adaptation
aux rythmes individuels. Trois modèles majeurs sont fréquemment étudiés : Montessori,
Freinet et Steiner-Waldorf. Chacun a ses fondements théoriques et ses pratiques
propres, mais tous partagent une volonté de transformation du rapport traditionnel
enseignant / élève.
</p>
<p>
La pédagogie Montessori, élaborée par Maria Montessori au début du XXᵉ siècle,
s'appuie sur l'observation scientifique de l'enfant. Elle promeut un environnement
préparé, composé de matériel auto-correctif favorisant les apprentissages sensoriels,
la manipulation et la découverte autonome. L'enseignant a le rôle d'observateur et de
guide, intervenant pour proposer du matériel adapté et libérer l'initiative de l'enfant.
Les locaux sont organisés par zones (vie pratique, langage, mathématiques, etc.)
et la liberté de mouvement est valorisée. L'accent est mis sur l'autodiscipline,
l'estime de soi et le respect du rythme.
</p>
<p>
La pédagogie Freinet, développée par Célestin Freinet, met l'accent sur l'expression
libre de l'enfant, le travail coopératif et la production concrète. Freinet a inventé
des outils comme l'imprimerie scolaire, le journal de classe, la correspondance entre
classes et les techniques de tâtonnement expérimental. La classe devient un lieu
d'échanges, d'enquête et de projets concrets, où l'erreur est envisagée comme une étape
de l'apprentissage. L'idée principale est que l'enfant apprend mieux lorsqu'il est acteur
de sa production.
</p>
<p>
La pédagogie Steiner-Waldorf, fondée par Rudolf Steiner, adopte une vision holistique
du développement humain, articulant dimensions cognitives, artistiques et pratiques.
Le curriculum suit des « blocs » d'enseignement intensifs et alterne le travail intellectuel
avec des activités artistiques et manuelles (peinture, musique, artisanat). L'approche
met l'accent sur le rythme, la répétition créative et le respect des étapes de développement
de l'enfant. Les enseignants accompagnent les élèves sur plusieurs années, favorisant
une relation durable.
</p>
<p>
Ces approches présentent des points communs : valorisation de l'autonomie, importance
du concret et de l'activité, confiance dans les capacités de l'enfant, et adaptation
des contenus aux besoins individuels. Elles offrent des alternatives à l'enseignement
traditionnel centré sur la transmission magistrale.
</p>
<p>
Cependant, elles soulèvent aussi des questions : comment garantir l'équité entre élèves ?
Comment évaluer les acquis de façon transparente ? Quelle formation pour les enseignants ?
L'intégration des pédagogies alternatives dans les systèmes scolaires massifs nécessite
des adaptations, de la formation et parfois des aménagements structurels.
</p>
<p>
En pratique, de nombreux enseignants mixtent aujourd'hui des éléments de ces pédagogies
avec des approches plus classiques : ateliers Montessori pour certains domaines, projets
Freinet en sciences ou français, et une attention à l'expressivité et au rythme inspirée
de Steiner. L'enjeu est d'utiliser le meilleur de chaque courant pour enrichir la pratique
enseignante et répondre aux besoins variés des élèves.
</p>`
    },
    "art-dida": {
      title: "Didactique de l'enseignant",
      html: `<h2>Didactique de l'enseignant</h2>
<p>
La didactique est une discipline qui se concentre sur la manière d'enseigner les savoirs.
Elle distingue l'objet d'enseignement (ce que l'on veut transmettre) et la manière de le
rendre accessible aux apprenants. La didactique s'appuie sur la recherche en sciences de
l'éducation, en psychologie cognitive et en sociologie pour élaborer des outils, séquences
et démarches d'enseignement efficaces.
</p>
<p>
Pour l'enseignant, la didactique implique d'articuler plusieurs éléments : l'analyse du
contenu disciplinaire (quels obstacles conceptuels pour les élèves ?), la planification
pédagogique (progressions, séquences), les démarches d'évaluation (diagnostic, formative,
sommatif) et la médiation didactique (consignes, supports, remédiation). Une bonne didactique
exige de connaître les représentations préalables des élèves et les idées reçues qui constituent
des obstacles à l'apprentissage (par exemple, en sciences, de fausses conceptions sur la
gravité ou l'électricité).
</p>
<p>
La didactique propose aussi des stratégies concrètes : progression en spirale, décontextualisation
puis recontextualisation des notions, tâches complexes, résolutions de problèmes, travail par
projets, et activités d'auto-évaluation. L'enseignant doit concevoir des situations qui provoquent
la réflexion et la confrontation d'idées, puisqu'un apprentissage durable suppose une restructuration
des connaissances.
</p>
<p>
La place de l'erreur est centrale : plutôt que de la punir, la didactique la considère comme une
information précieuse sur les obstacles et les étapes d'apprentissage. Ainsi, la correction
devient un moment d'enseignement à part entière.
</p>
<p>
La didactique mobilise également les technologies éducatives : outils numériques, simulations,
entrelacement de ressources multimédias pour diversifier les accès au savoir. Mais l'outil n'est
efficace que s'il est intégré à une séquence réfléchie et si l'enseignant en maîtrise l'usage
pédagogique.
</p>
<p>
Enfin, la réflexivité professionnelle est essentielle : l'enseignant didacticien observe,
analyse ses séances, recueille des données (résultats, productions, interactions) et ajuste
ses dispositifs. La formation initiale et continue doit donc développer cette posture
d'analyse afin que les pratiques s'enrichissent et que l'enseignement devienne plus efficient.
</p>`
    },
    "art-pourquoi": {
      title: "Pourquoi être professeur ? Compétences, but et sens du métier",
      html: `<h2>Pourquoi être professeur ? Compétences, but et sens du métier</h2>
<p>
Devenir professeur est une décision professionnelle et éthique. Au-delà des tâches
administratives et organisationnelles, le métier renvoie à une responsabilité sociale :
accompagner des individus dans leur développement intellectuel, social et personnel.
Les motivations pour enseigner sont diverses : transmettre un savoir, contribuer à la
formation de citoyens, soutenir des jeunes en difficulté, ou encore chercher un métier
où le contact humain est central.
</p>
<p>
Les compétences requises sont multiples. On attend d'un professeur une maîtrise disciplinaire
suffisante pour expliciter les concepts, choisir des ressources pertinentes et concevoir
des séquences pédagogiques. Mais la dimension relationnelle est également cruciale : gestion
de classe, posture d'écoute, communication avec les familles, et travail en équipe. Les
capacités d'observation, d'évaluation et d'adaptation sont indispensables pour répondre
aux différences entre élèves.
</p>
<p>
Le rôle pédagogique inclut la conception d'environnements d'apprentissage favorables :
structuration claire des séances, choix d'activités motivantes, rétroaction formative
pour guider les progrès. L'enseignant est aussi un médiateur culturel : il aide les élèves
à comprendre les normes scolaires, à développer des compétences transversales (critique,
autonomie, coopération) et à se préparer à des parcours de vie.
</p>
<p>
Sur le plan moral, être enseignant suppose une éthique professionnelle : respect de la
personne, impartialité, souci de justice et protection de la dignité des élèves. La relation
éducative repose sur la confiance, la reconnaissance et la valorisation des efforts.
</p>
<p>
Le métier offre aussi des perspectives : diversité des missions (enseignement, accompagnement,
coordination), possibilités de formation continue, mobilité géographique ou disciplinaire.
Certains choisissent d'évoluer vers des fonctions de formateur, d'inspection ou de direction.
</p>
<p>
Enfin, le sens profond du métier se mesure dans les petites réussites quotidiennes : l'élève
qui comprend pour la première fois, celui qui retrouve la confiance, ou le groupe qui réussit
à coopérer. Ces réussites donnent une grande satisfaction professionnelle et constituent
une motivation durable.
</p>
<p>
En résumé, être professeur demande des compétences techniques et humaines, une capacité à
s'adapter et un engagement éthique. C'est une profession qui participe directement à la
construction du collectif et de l'avenir ; son exigence est compensée par l'impact visible
sur les parcours des élèves.
</p>`
    }
  };

  // Assign click behavior to card titles to open modal with full content
  contentGrid.addEventListener("click", (e) => {
    const titleElem = e.target.closest(".card-title");
    if (!titleElem) return;

    const card = titleElem.closest(".card.item");
    if (!card) return;

    const id = card.getAttribute("data-id");
    if (id && fullContents[id]) {
      modalBody.innerHTML = fullContents[id].html;
      modal.setAttribute("aria-hidden","false");
    } else {
      // For citations/images/lien/procedures: display their innerHTML as detail
      modalBody.innerHTML = card.querySelector(".card-body").innerHTML || "<p>Détails indisponibles.</p>";
      modal.setAttribute("aria-hidden","false");
    }
  });

  modalClose.addEventListener("click", () => {
    modal.setAttribute("aria-hidden","true");
    modalBody.innerHTML = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.setAttribute("aria-hidden","true");
      modalBody.innerHTML = "";
    }
  });

  // Filtering by category from dropdown
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener("click", (ev) => {
      ev.preventDefault();
      const f = btn.getAttribute("data-filter");
      filterItems(f);
    });
  });

  function filterItems(filter){
    document.querySelectorAll('.grid .item').forEach(it => {
      if (filter === 'all') { it.style.display = ""; return; }
      if (it.classList.contains(filter)) it.style.display = "";
      else it.style.display = "none";
    });
  }

  // === Message board functionality (localStorage) ===
  const form = document.getElementById("message-form");
  const messagesDiv = document.getElementById("messages");
  const clearBtn = document.getElementById("clear-board");

  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const pseudo = document.getElementById("pseudo").value.trim() || "Anonyme";
    const text = document.getElementById("message").value.trim();
    if(!text) return;
    const msg = {pseudo, text, date: new Date().toISOString()};
    const msgs = JSON.parse(localStorage.getItem("sharedMessages") || "[]");
    msgs.unshift(msg); // newest first
    localStorage.setItem("sharedMessages", JSON.stringify(msgs));
    form.reset();
    renderMessages();
  });

  clearBtn.addEventListener("click", ()=>{
    if(confirm("Effacer localement tous les messages (sur ce navigateur) ?")) {
      localStorage.removeItem("sharedMessages");
      renderMessages();
    }
  });

  function renderMessages(){
    const msgs = JSON.parse(localStorage.getItem("sharedMessages") || "[]");
    messagesDiv.innerHTML = "";
    if(msgs.length === 0){ messagesDiv.innerHTML = "<p>Aucun message pour l'instant. Soyez le premier !</p>"; return; }
    msgs.forEach(m=>{
      const el = document.createElement("div");
      el.className = "message";
      el.innerHTML = `<strong>${escapeHtml(m.pseudo)}</strong> <small>${new Date(m.date).toLocaleString()}</small><p>${escapeHtml(m.text)}</p>`;
      messagesDiv.appendChild(el);
    });
  }

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, function(m){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m];});
  }

  // Initial render
  renderMessages();

  // Accessibility: close modal with Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      modal.setAttribute("aria-hidden","true");
      modalBody.innerHTML = "";
    }
  });

});
