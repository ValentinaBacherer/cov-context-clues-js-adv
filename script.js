var friends = ['Jhon', 'Vero', 'Laura', 'Milena', 'Clara']
var locations = ['kitchen', 'room', 'house', 'bar', 'bathroom', 'toilette', 'office', 'kitchen', 'basement', 'roof']
var weapons = ['knife', 'stone', 'scissors', 'fork', 'spoon', 'table', 'gun', 'shoe', 'hat', 'glasses', 'guitar', 'trumpet', 'piano']


$(document).ready(function () {
    for (var i = 0; i < 100; i++) {
        $('body').append(`<h3 id="${i}">Accusation ${i}</h3>`)

    }
    $('h3').click(function () {
        var friend = friends[Math.floor(Math.random() * friends.length)]
        var weapon = weapons[Math.floor(Math.random() * weapons.length)]
        var location = locations[Math.floor(Math.random() * locations.length)]
        alert(`Accusation ${this.id}: I accuse ${friend}, with the ${weapon} in the ${location}!`)

    })
})