'use strict';

  const bookTitles = [
    'sapiens',
    'principles',
    'quiet',
    'the_war_of_art',
    'the_little_prince',
    'mafalda',
    'outliers',
    'the_hobit',
    'the_lord_of_the_flies',
    'babar'
  ];

  const booksInfo = {
    sapiens: {
      title:'Sapiens',
      language: 'English',
      author: 'Yuval Noah Harari,',
    },
    principles: {
      title:'Principles',
      language: 'English',
      author: 'Ray Dalio',
    },
    quiet: {
      title:'Quiet',
      language: 'English',
      author: 'Susan Cain',
    },
    the_war_of_art: {
      title:'The War of Art',
      language: 'English',
      author: 'Steven Pressfield',
    },
    the_little_prince: {
      title:'The Little Prince',
      language: 'English',
      author: 'Antoine de Saint-Exupéry',
    },
    mafalda: {
      title:'Mafalda',
      language: 'Spanish',
      author: 'Quino',
    },
    outliers: {
      title:'Outliers',
      language: 'English',
      author: 'Malcolm Gladwell',
    },
    the_hobit: {
      title:'The Hobit',
      language: 'English',
      author: 'J. R. R. Tolkien',
    },
    the_lord_of_the_flies: {
      title:'The Lord of the Flies',
      language: 'English',
      author: 'William Golding',
    },
    babar: {
      title:'Babar',
      language: 'French',
      author: 'Jean de Brunhoff',
    },
  }

  function makeList() {

    
    let listContainer = document.createElement('div');

    
    document.getElementsByTagName('body')[0].appendChild(listContainer);

    
    let listElement = document.createElement('ul');

   
    listContainer.appendChild(listElement);

    
    let numberOfListItems = bookTitles.length;

    for (let i = 0; i < numberOfListItems; ++i) {
        
        let itemBook = document.createElement('li');
        itemBook.innerHTML = bookTitles[i];
        
        let bookName = document.createElement('h1');
        itemBook.appendChild(bookName);
        
        let bookLanguage = document.createElement('p');
        itemBook.appendChild(bookLanguage);

        let bookAuthor = document.createElement('p')
        itemBook.appendChild(bookAuthor);
               
        
        listElement.appendChild(itemBook);
        listElement.appendChild(bookName);
        listElement.appendChild(bookLanguage);
        listElement.appendChild(bookAuthor);
    } //I wasnt able to change this function so it takes properties from the booksInfo object
}

makeList();


