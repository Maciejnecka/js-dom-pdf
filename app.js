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
