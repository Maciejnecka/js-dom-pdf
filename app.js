// // Wyszukaj pierwszego div-a
// const divElement = document.querySelector('div');
// if (divElement !== null) {
//   //wykonaj tylko wtedy
//   // gdy element zostal wyszukany
//   divElement.textContent = 'new text';
// }

// // wyszukaj button o klasie .btn
// // który jest pierwszym dzieckiem
// const firstChildWithClass = document.querySelector('button.btn:first-child');
// if (firstChildWithClass !== null) {
//   firstChildWithClass.className = 'newClass';
// }

// const element = document.querySelector('.notExists');
// element.textContent = 'new text';
// const sectionElement = document.querySelector('section');

// // const headerElementInSection = sectionElement.querySelector('header');

// const headerElementInSection = sectionElement.querySelector('section > header');
// console.log(headerElementInSection);
//slower
// const sectionElementId = document.querySelector('#comments');

// //faster
// const sectionElementClass = document.querySelector('.comments');
// console.log(sectionElementClass, sectionElementId);

// console.log(pList);
// // for (let i = 0; i < pList.length; i++) {
//    //   pList[i].textContent = i + '. Kolejny wiersz';
//    // }

//    pList.forEach(function (element, index) {
//       element.textContent = index + '. Kolejny wiersz';
//    });

//    const divList = document.querySelectorAll('section > div');

//    const commentsContentList = document.querySelectorAll('.comments__content');

//umyślnie dodaje przyrostek List aby bylo wiadomo, ze jest to wiele elementow. Dodanie liczby mnogiej (s/es) nie wystarcza powniewaz jest to malo czytelne rozwiazanie

// const pList = document.querySelectorAll('p');
// const arr1 = Array.from(pList);
// // zmieniam NodeList na tablice
// const onlyEven = arr1.filter(function (el, index) {
//   return index % 2;
//   //przypisuje do [onlyEven] elementy, których indeks jest parzysty
// });
// const arr2 = [...pList];
// // uzywam rozproszenia do utworzenia tablicy
// console.log(arr2);
// const firstEmpty = arr2.find(function (el) {
//   return el.innerText === '' ? true : false;
//   // uzywam operatora warunkowego jesli funkcja zwroci [true] to element o tym indeksie zostanie przypisny do zmiennej [first empty]
// });

// console.log(firstEmpty);
// wyszukaj element <div/>
// const fooElement = document.getElementById('foo');
// if (fooElement !== null) {
//   // wykonaj tylko wtedy, gdy element zostal wyszukany
//   fooElement.textContent = 'new text';
// }

// // wyszukaj element <p/>
// const barElement = document.getElementById('bar');
// if (barElement !== null) {
//   barElement.className = 'newClass';
// }

// wyszukuje element o klasie [.box]
// const boxList = document.getElementsByClassName('box');
// for (let i = 0; i < boxList.length; i++) {
//   boxList[i].textContent = 'index ->' + i;
//   // dodaje do zawartosci tekst o wartosci rownej indeksowi, do ktorej jest przypisany wyszukiwany element
// }

// // zmieniam obiekt typu [HTMLCollection] na tablice, dzieki czemu bede mogl skorzystac  metod tablicowych np. [.forEach()]

// const arr = Array.from(boxList);
// arr.forEach(function (element) {
//   // dodaje obramowanei do kazdego wyszukiwanego elementu
//   element.style.border = '1px solid green';
// });
// wyszukuje wszystkie elementy <div/>
// const divList = document.getElementsByTagName('div');
// for (let i = 0; i < divList.length; i++) {
//   divList[i].textContent = 'index ->' + i;
//   // dodaje do zawartosci tekst o wartosci rownej indeksowi do ktorej jest przypisany wyszukany element
// }
// console.log(divList);
// wyszukuje element o id [#foo]
// const fooEl = document.querySelector('#foo');
// if (fooEl) {
//   // jesli element istnieje, to przeszukuje go wzgledem elementów o klasie [.box]
//   const boxList = fooEl.getElementsByClassName('box');
//   for (let i = 0; i < boxList.length; i++) {
//     // w kazdym wyszukanym wczesniej elemencie poszukuje znacznikow <p/>
//     const pList = boxList[i].querySelectorAll('p');
//     pList.forEach(function (p) {
//       // gdy zostana wyszkane, dodaje im obramowanie
//       p.style.border = '2px solid green';
//     });
//   }
// }
// const imageElement = document.querySelector('img');
// if (imageElement && !imageElement.hasAttribute('src')) {
//   // najpierw sprawdzam czy imageElement jest prawdziwy pamietajac, ze null jest wartosci falszywa a obiekt (nawet pusty) prawdziwa
//   imageElement.setAttribute('src', 'default.png');
//   // ustaw jego wartosc na default.png czyli na domyslny obrazek
// }
// console.log(imageElement);
// const imageList = document.querySelectorAll('img');
// imageList.forEach(function (item) {
//   item.removeAttribute('class');
//   // nie musze sprawdzac, czy atrybut istnieje, jesli nie bedzie istniaj to JS nie bedzie mial czego usunac i nic sie nie stanie
//   console.log(item.getAttribute('alt'));
//   // dodatkowo w konsoli wyswietl zawartosc atrybutu alt
// });
// console.log(imageList);
// const liElement = document.querySelector('li');
// if (liElement) {
//   console.log(liElement.dataset.age, liElement.dataset.city);
//   console.log(liElement.dataset.zipCode);
// }
// const liElement = document.querySelector('li');
// if (liElement) {
//   liElement.setAttribute('data-color', 'red');
//   liElement.dataset.bgColor = 'green';
// }
// const section = document.querySelector('.comments');
// if (section) {
//   section.id = 'newId';
// przypisujemy do zmiennej idValue, zawartosc atrybutu id tj. commentsList
// }

// const section = document.querySelector('.comments');
// if (section) {
//   section.setAttribute('id', 'newId');
// }
// const sectionElement = document.querySelector('#commentsList');

// if (sectionElement) {
//   // jesli sectionelement zostalo wyszukane
//   const className = sectionElement.className;
//   // pobierz nazwe klasy
//   if (className.includes('comments')) {
//     // jesli klasa zawiera ciag znakow [comments]
//     sectionElement.className = '';
//     //zmien jej wartosc na pusty ciag znakow
//   }
// }

// const sectionElement = document.querySelector('.comments');

// if (sectionElement) {
//   const classToRemove = 'comments--active';
//   const className = sectionElement.className;

//   sectionElement.className = className.replace(classToRemove, '');
// }

// const sectionElement = document.querySelector('.comments');

// if (sectionElement) {
//   sectionElement.classList.toggle('comments--active');
// }
// const pElement = document.querySelector('p');
// pElement.innerHTML = 'Tekst z <strong>ważną</strong> informacja';

// const inputEl = document.querySelector('input');
// const commentsEl = document.querySelector('ul');
// if (inputEl && commentsEl) {
//   const newLi = document.createElement('li');
//   newLi.innerHTML = inputEl.value;
//   // pobieram zawartosc pola formularza, jesli uzytknownik wprowadzil kod html, ktory zawiera zlosliwy kod, to zostanie on dodany na nasza strone
//   commentsEl.appendChild(newLi);
// }

// const divElement = document.querySelector('div');

// if (divElement) {
//   //jesli element zostal wyszukany

//   if (divElement.style.backgroundColor === 'red');
//   // jesli styl o nazwie color ma wartosc rowna red to...
//   divElement.innerText = 'Div is red!';
//   // zmien jego zawartosc
//   // ustawiamy kolor tla dla elementu, zawsze stosujemy zapis camelCase, jesli styl sklada sie z kilu czlonow
//   divElement.style.fontSize = '14px';
//   // i nie zapominamy o jednostkach
// }
// const divEl = document.querySelector('div');
// if (divEl) {
//   const styles = getComputedStyle(divEl);

//   const oldColor = styles.getPropertyValue('--color');
//   console.log(oldColor);

//   const docElement = document.documentElement;
//   docElement.style.setProperty('--color', 'orange');

//   const newColor = styles.getPropertyValue('--color');
//   console.log(newColor);
// }
// tworze nowy element section

// const newSection = document.createElement('section');

// // dodaje do niego klase

// newSection.classList.add('comments');

// // dodaje do niego tekst
// newSection.innerText = 'Lorem ipsum...';

// // dodaje atrybut data-label
// newSection.dataset.label = 'Some text...';

// // dodaje identyfikator
// newSection.id = 'commentsList';

// niestety ten element nie jest jeszcze widoczny w drzewie DOM
// const articleElement = document.querySelector('article');
// if (articleElement) {
//   const newSection = document.createElement('section');

//   newSection.classList.add('comments');
//   newSection.innerText = 'Lorem ipsum...';
//   newSection.dataset.label = 'Some text...';
//   newSection.id = 'commentsList';

//   articleElement.appendChild(newSection);

// dodaje do elementu article, nowa sekcje jako ostatnie dziecko
// }

// const articleElement = document.querySelector('article');
// const pElement = articleElement.querySelector('p:first-child');

// if (articleElement && pElement) {
//   const newEl = document.createElement('header');
//   newEl.innerText = 'Some text...';

//   articleElement.insertBefore(newEl, pElement);
//   // dodaje do elementu <article/> nagłówek który ma być osadzony przed elementem <p/>
// }
// const articleElement = document.querySelector('article');
// const pElement = articleElement.querySelector('p:first-child');

// if (articleElement && pElement) {
//   const newEl = document.createElement('header');
//   newEl.innerText = 'Some text...';

//   articleElement.replaceChild(newEl, pElement);
//   // nadpisuje element <p/> utworzonym elementem <header/>
// }

// const pEl = document.querySelector('p');
// const sectionEl = document.querySelector('section');
// if (sectionEl && pEl) {
//   sectionEl.appendChild(pEl);
//   // element <p/> zostanie przeniesiony do elementu <section/>, co spowoduje, że w elemencie <article/> nie bedzie juz tego elementu
// }

// const pEl = document.querySelector('p');
// const sectionEl = document.querySelector('section');
// if (sectionEl && pEl) {
//   const clonePEl = pEl.cloneNode(true);
//   // kopiujemy element z cala jego zawartoscia

//   sectionEl.appendChild(clonePEl);
//   // dodajemy kopie elementu <p/> do elementu <section/> od teraz element <p/> znajduje się w obu miejcach
// }
// const articleElement = document.querySelector('article');
// const pElement = articleElement.querySelector('p:first-child');

// if (articleElement && pElement) {
//   articleElement.removeChild(pElement);
//   // w tym momencie element <p/> nie istnieje w drewie DOM, co oznacza, ze jest niewidoczny dla uzytkownika
// }

// const pElement = document.querySelector('p');
// if (pElement) {
//   pElement.remove();
//   // element zostal usuniety z drzewa DOM niestety to nie zadziala w IE
// }

// const btnEl = document.querySelector('button');
// if (btnEl) {
//   const sectionEl = btnEl.parentElement;
//   sectionEl.style.display = 'none';
//   // nie sprawdzam, czy parent istnieje, poniewaz wezel zawsze posiada rodzica, jesli nie jest korzeniem i zostal dodany do DOM

//   const mainEl = sectionEl.nextElementSibling;
//   if (mainEl) {
//     mainEl.style.display = 'block';
//   }
// }

// const ulElement = document.querySelector('ul');
// if (ulElement && ulElement.hasChildNodes()) {
//   // jesli element zostal wyszukany i posiada dzieci

//   const children = ulElement.children;

//   if (children.length > 1) {
//     // jesli liczba dzieci jest wieksza niz 1, to
//     children[1].innerText = 'second child';
//   }
// }

// const ulElement = document.querySelector('ul');

// if (ulElement && ulElement.hasChildNodes()) {
//   // jesli element zostal wyszukany i posiada dzieci

//   const first = ulElement.firstElementChild;
//   // zapisuje odniesienie do pierwszego elementu jesli nie sitnieje, to bedzie null

//   const last = ulElement.lastElementChild;
//   //zapisuje odniesienie do ostatniego elementuu jesli nie istnieje to bedzie null
//   console.log(first, last);
// }

const ulElement = document.querySelector('ul');
if (ulElement && ulElement.hasChildNodes()) {
  // jesli element zostal wyszukany i posiada dzieci
  const children = ulElement.children;
  // zapisz wszystkie dzeici do zmiennej

  console.log('Pierwsze dziecko ma potomstwo: ');
  if (children[0].hasChildNodes()) {
    console.log(true);
  }
  console.log('Drugie dziecko ma potomstwo: ');
  if (children[1].hasChildNodes()) {
    console.log(true);
  }
  console.log('Trzecie dziecko ma potomstwo: ');
  {
    console.log(true);
  }
}
