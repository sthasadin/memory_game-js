document.addEventListener('DOMContentLoaded', () => {

  //card options
    const cardArray =[
      {
        name: 'car',
        img: 'images/car'
      },
      {
        name: 'car',
        img: 'images/car.png'
      },

      {
        name: 'dog',
        img: 'images/dog.png'
      },
      {
        name: 'dog',
        img: 'images/dog.png'
      },

      {
        name: 'pokemon',
        img: 'images/pokemon.png'
      },
      {
        name: 'pokemon',
        img: 'images/pokemon.png'
      },

      {
        name: 'jeep',
        img: 'images/jeep.png'
      },
      {
        name: 'jeep',
        img: 'images/jeep.png'
      },

      {
        name: 'm24',
        img: 'images/m24.png'
      },
      {
        name: 'm24',
        img: 'images/m24.png'
      },

      {
        name: 'pan',
        img: 'images/pan.png'
      },
      {
        name: 'pan',
        img: 'images/pan.png'
      },
    ];
    
    const grid = document.querySelector('.grid');
    
    //creating board
    function createBoard(){
      for (let i =0; i < cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src',"./images/blank.png");
        card.setAttribute('date-id',i);
        //card.addEventListener('click', flipCcard);
        grid.appendChild(card);
      }
    }

    createBoard();

    //check for matches
    function flipCard


    // flip you cards

})