function audioClick(audio_id) {
    let audios = document.getElementsByTagName("audio");
    let my_audio = document.getElementById(audio_id);
    let icon = my_audio.nextElementSibling.firstElementChild;
    let title = my_audio.nextElementSibling.lastElementChild.firstElementChild
    my_audio.volume = 0.2;

    for (let index = 0; index < audios.length; index++) {
        if (audios[index].id == audio_id) {
            // Play or Pause function
            if (my_audio.paused) {
                my_audio.play()
                icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M640-200q-33 0-56.5-23.5T560-280v-400q0-33 23.5-56.5T640-760q33 0 56.5 23.5T720-680v400q0 33-23.5 56.5T640-200Zm-320 0q-33 0-56.5-23.5T240-280v-400q0-33 23.5-56.5T320-760q33 0 56.5 23.5T400-680v400q0 33-23.5 56.5T320-200Z"/></svg>`
                icon.setAttribute("data-playing", "true")
                document.querySelector("aside").setAttribute("data-playing", "true");
            } else {
                my_audio.pause()
                icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-273v-414q0-17 12-28.5t28-11.5q5 0 10.5 1.5T381-721l326 207q9 6 13.5 15t4.5 19q0 10-4.5 19T707-446L381-239q-5 3-10.5 4.5T360-233q-16 0-28-11.5T320-273Z"/></svg>`
                icon.removeAttribute("data-playing")
                document.querySelector("aside").removeAttribute("data-playing");
            }
        } else {
            audios[index].pause();
            audios[index].nextElementSibling.firstElementChild.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-273v-414q0-17 12-28.5t28-11.5q5 0 10.5 1.5T381-721l326 207q9 6 13.5 15t4.5 19q0 10-4.5 19T707-446L381-239q-5 3-10.5 4.5T360-233q-16 0-28-11.5T320-273Z"/></svg>`
            audios[index].nextElementSibling.firstElementChild.removeAttribute("data-playing")
        }
    }
    document.querySelector("#nowPlayingTitle").innerHTML = title.innerHTML;
    localStorage.setItem("currentAudio", audio_id);
}

function replay() {
    let my_audio = document.querySelector(`#${localStorage.getItem("currentAudio")}`);
    my_audio.currentTime -= 10;
}

function forward() {
    let my_audio = document.querySelector(`#${localStorage.getItem("currentAudio")}`);
    my_audio.currentTime += 10;
}

function volumeDown() {
    let my_audio = document.querySelector(`#${localStorage.getItem("currentAudio")}`);
    let min = my_audio.volume - .1;
    if (min > 0) {
        my_audio.volume -= .1;
    }
    console.log(my_audio.volume)
}

function volumeUp() {
    let my_audio = document.querySelector(`#${localStorage.getItem("currentAudio")}`);
    let max = my_audio.volume + .1;
    if (max < 1) {
        my_audio.volume += .1;
    }
    console.log(my_audio.volume)
}

function changeVolume() {
    let my_audio = document.querySelector(`#${localStorage.getItem("currentAudio")}`);
    let max = my_audio.volume + .1;
    let min = my_audio.volume - .1;
    if (max < 1 || min > 0) {
        my_audio.volume = document.querySelector("#volume").value / 10;
    }

    // Change icon
    if (my_audio.volume == 0) {
        document.querySelector("#volumeIcon").innerHTML = `<path d="m720-424-76 76q-11 11-28 11t-28-11q-11-11-11-28t11-28l76-76-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l76 76 76-76q11-11 28-11t28 11q11 11 11 28t-11 28l-76 76 76 76q11 11 11 28t-11 28q-11 11-28 11t-28-11l-76-76Zm-440 64H160q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h120l132-132q19-19 43.5-8.5T480-703v446q0 27-24.5 37.5T412-228L280-360Zm120-246-86 86H200v80h114l86 86v-252ZM300-480Z"/>`
    }
    else if (my_audio.volume < .5) {
        document.querySelector("#volumeIcon").innerHTML = `<path d="M360-360H240q-17 0-28.5-11.5T200-400v-160q0-17 11.5-28.5T240-600h120l132-132q19-19 43.5-8.5T560-703v446q0 27-24.5 37.5T492-228L360-360Zm380-120q0 42-19 79.5T671-339q-10 6-20.5.5T640-356v-250q0-12 10.5-17.5t20.5.5q31 25 50 63t19 80ZM480-606l-86 86H280v80h114l86 86v-252ZM380-480Z"/>`
    }
    else {
        document.querySelector("#volumeIcon").innerHTML = `<path d="M760-481q0-83-44-151.5T598-735q-15-7-22-21.5t-2-29.5q6-16 21.5-23t31.5 0q97 43 155 131.5T840-481q0 108-58 196.5T627-153q-16 7-31.5 0T574-176q-5-15 2-29.5t22-21.5q74-34 118-102.5T760-481ZM280-360H160q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h120l132-132q19-19 43.5-8.5T480-703v446q0 27-24.5 37.5T412-228L280-360Zm380-120q0 42-19 79.5T591-339q-10 6-20.5.5T560-356v-250q0-12 10.5-17.5t20.5.5q31 25 50 63t19 80ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"/>`
    }
}