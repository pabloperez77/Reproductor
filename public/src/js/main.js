 function soundcloud () {
        SC.initialize({
            client_id: 'unnFdubicpq7RVFFsQucZzduDPQTaCYy'
        });

        SC.get('/tracks', {
            q: 'u2'
        }).then(function (tracks){
            console.log(tracks)

            SC.stream('/tracks/'+0).then(function (player){
                player.play().then(function(){
                    console.log('Playback started!');
                }).catch(function(e){
                    console.error('Playback rejected. Try calling play() from a user interaction.', e);
                });
            })
        })
    }




function miOnDragStart(event) {
    event.dataTransfer.setData('id', event.target.id);
    console.log('Drag Start', event.target.id, ' = ', event.dataTransfer.getData('id'));
}

function miOnDrop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('id');
    console.log(data);
    event.target.appendChild(document.getElementById(data));
    return data;
}

function miOnDragOver(event) {
    event.preventDefault();
    console.log('Drag Over');
}