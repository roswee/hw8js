import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.on("timeupdate", throttle(svTime, 1000))

function svTime(e) {
    localStorage.setItem("videoplayer-current-time", e.seconds)
};

if (localStorage.getItem("videoplayer-current-time" !== null)) {
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))};