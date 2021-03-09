let wHeight = $(window).height();
let wWidth = $(window).width();
let player = {};

let canves = document.querySelector('#the-canvas');
let context = canves.getContext('2d');
canves.width = wWidth;
canves.height = wHeight;

$(window).load(() => {
    $('#loginModal').modal('show');
})

$('.name-form').submit((event) => {
    event.preventDefault();
    player.name = document.querySelector('#name-input').value
    console.log('new submited')
    $('#loginModal').modal('hide');
    $('#spawnModal').modal('show');
    document.querySelector('.player-name').innerHTML = player.name;
})

$('.start-game').click((event) => {

    $('.model').modal('hide');
    $('.hiddenOnStart').removeAttr('hiddene');
    init();
})
