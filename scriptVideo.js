fetch('video.json')
    .then(response => response.json())
    .then(data => {
        const videoData = data.videos[0]; 
        let videoElement;

        if (videoData.url) {
            videoElement = `
                <div class="video-wrapper">
                    <video id="myVideo" width="1024" height="576">
                        <source src="${videoData.url}" type="video/mp4">
                        Tu navegador no soporta videos HTML5.
                    </video>
                    <button id="playButton" class="play-button">▶</button>
                </div>
            `;
        }

        document.getElementById('video-container').innerHTML = videoElement;

        const video = document.getElementById('myVideo');
        const playButton = document.getElementById('playButton');

        playButton.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playButton.style.display = 'none';
                video.controls = true; 
            } else {
                video.pause();
                playButton.style.display = 'block';
            }
        });

        video.addEventListener('play', function() {
            playButton.style.display = 'none';
            video.controls = true; 
        });

        video.addEventListener('pause', function() {
            playButton.style.display = 'block';
            // Opcional: Ocultar controles en pausa si lo prefieres
            // video.controls = false;
        });
    })
    .catch(error => console.error('Error al cargar el video:', error));
