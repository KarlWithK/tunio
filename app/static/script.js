const container = document.getElementById('container')
//canvas is a special html element that creates a field for us to draw interactive animated shapes + images with
const canvas = document.getElementById('canvas1')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let audioSource;
let analyser;

container.addEventListener('click', function(){
    let audio1 = document.getElementById('audio1');
    audio1.src = '../spell.wav';

    const audioContext = new AudioContext();

    audio1.play();
    //creating audio source from actual html audio, taking audio variable 1 and creating an audio node of it to serve as our source
    //setting audio1 variable as our source
    audioSource = audioContext.createMediaElementSource(audio1);
    //create a special analyser node used to expose audio time and freqency data -> need for our visualizers
    analyser = audioContext.createAnalyser();
    audioSource.connect(analyser);
    //connect to default audio output device (computer speakers)
    analyser.connect(audioContext.destination)

    //special property that represents number of audio samples we want in our analyzer data file
    analyser.fftSize = 64;

    const bufferLength = analyser.frequencyBinCount; //this number is always half of fft
    const dataArray = new Uint8Array(bufferLength);

    const barWidth = canvas.width/bufferLength;
    let barHeight;
    let x;

    function animate(){
        x = 0;
        //clear entire canvas, start at coordinates (0,0) and go all the way to width and height
        ctx.clearRect(0,0, canvas.width, canvas.height);
        //method takes dataArray, copies the current frequency data into that array 
        //each item in the array now represents decibel value for a specific frequency
        //frequency data is composed of integers between 0 and 255, determines height of bar in our audio visualizer
        analyser.getByteFrequencyData(dataArray);

        //cycle through entire data array
        for (let i = 0; i < bufferLength; i++){
            barHeight = dataArray[i];
            ctx.fillStyle = 'white';
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
            x += barWidth;
        }

        //takes a function name and calls it, creates an animation loop
        requestAnimationFrame(animate);
    }
    animate();
})
