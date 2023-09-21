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
