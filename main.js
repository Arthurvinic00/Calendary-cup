function createGame(player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon-football-team/${player1}.svg" alt="Bandeira Do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-football-team/${player2}.svg" alt="Bandeira Da ${player2}">
    </li>
  `
}
let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s"> 
        <h2>${date} <span>${day}</span></h2>
        <ul> 
        ${games} 
        </ul>
    </div>
 `
}

document.querySelector('#cards').innerHTML = 
    createCard('24/11', 'quinta', createGame('switzerland', '07:00', 'cameroon') + 
    createGame('portugal', '12:00', 'ghana') +
    createGame('brazil', '16:00', 'serbia')) + 
    createCard('28/11', 'segunda', createGame('cameroon', '07:00', 'serbia') +
    createGame('brazil', '12:00', 'switzerland') +
    createGame('portugal', '16:00', 'uruguay')) +
    createCard('02/12', 'sexta', createGame('ghana', '12:00', 'cameroon') +
    createGame('brazil', '16:00', 'cameroon') +
    createGame('serbia', '16:00', 'switzerland'))
  
  
