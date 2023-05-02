const canvas1 = document.getElementById('image1');
const ctx1 = canvas1.getContext('2d');

const canvas2 = document.getElementById('image2');
const ctx2 = canvas2.getContext('2d');

const canvas3 = document.getElementById('image3');
const ctx3 = canvas3.getContext('2d');

// edit here ****************************************************

// image source
const src = './img/Attack1-EVil Wizard 2 By LuizMelo - itch.io.png';

// download image name
const name = 'Attack1';

// source image total frames
const TotalFrames = 8;

// edit here ****************************************************

let imageSrc1 = src;
let imageSrc2 = src;
let imageSrc3 = src;

let image1 = new Image();
image1.src = imageSrc1

let image2 = new Image();
image2.src = imageSrc2;

let image3 = new Image();
image3.src = imageSrc3;

canvas1.width = image1.width;
canvas1.height = image1.height;

canvas2.width = image2.width;
canvas2.height = image2.height;

canvas3.width = image3.width;
canvas3.height = image3.height;

let HEIGHT = canvas1.height;
let WIDTH = canvas1.width;

let framesTotal = TotalFrames;
let framesCurrent = 0;
let scale = 1;

let position1 = 0;
let position2 = 0;
let position3 = 0;

image1.onload = function() 
{
    ctx1.fillStyle = 'red'
    ctx1.fillRect(0, 0, canvas1.width, canvas1.height);

    canvas1.width = image1.width;
    canvas1.height = image1.height;

    HEIGHT = canvas1.height;
    WIDTH = canvas1.width;
    ctx1.fillStyle = 'red';
    ctx1.fillRect(0, 0, canvas1.width, canvas1.height);

    for(let i = 0; i < framesTotal; i++)
    {
        framesCurrent = i;

        ctx1.fillStyle = 'white';
        ctx1.fillRect(framesCurrent * (image1.width/framesTotal), 0, 1, canvas1.height)


        ctx1.drawImage(
            image1, 
            framesCurrent * (image1.width/framesTotal), //crop start position1 x
            0, //crop start position1 y
            image1.width/framesTotal, //crop width
            image1.height, //crop height
            position1, // image1 display position1 x
            0, // image1 display position1 y
            (image1.width/framesTotal) * scale, // scale x
            image1.height * scale // scale y
            );
            

        position1 += image2.width/framesTotal;        
    }
};

image2.onload = function() {
    canvas2.width = image2.width;
    canvas2.height = image2.height;

    HEIGHT = canvas2.height;
    WIDTH = canvas2.width;

    ctx2.fillStyle = 'red';
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

    position2 = 0;

    for(let i = 0; i < framesTotal; i++) {

        framesCurrent = i;

        ctx2.fillStyle = 'white';
        ctx2.fillRect(framesCurrent * (image2.width/framesTotal), 0, 1, canvas2.height)


        // invert every frame
        ctx2.scale(-1, 1);

        ctx2.drawImage(
            image2, 
            framesCurrent * (image2.width/framesTotal), //crop start position1 x
            0, //crop start position1 y
            image2.width/framesTotal, //crop width
            image2.height, //crop height
            -position2 - (image2.width/framesTotal) * scale, // image1 display position1 x
            0, // image1 display position1 y
            (image2.width/framesTotal) * scale, // scale x
            image2.height * scale // scale y
        );
        
        position2 += image2.width/framesTotal;

        // restore the context scale to default for the next frame
        ctx2.setTransform(1, 0, 0, 1, 0, 0);
    }
};

image3.onload = function() {
    canvas3.width = image3.width;
    canvas3.height = image3.height;

    HEIGHT = canvas3.height;
    WIDTH = canvas3.width;


    for(let i = 0; i < framesTotal; i++) {

        framesCurrent = i;


        // invert every frame
        ctx3.scale(-1, 1);

        ctx3.drawImage(
            image3, 
            framesCurrent * (image3.width/framesTotal), //crop start position1 x
            0, //crop start position1 y
            image3.width/framesTotal, //crop width
            image3.height, //crop height
            -position3 - (image3.width/framesTotal) * scale, // image1 display position1 x
            0, // image1 display position1 y
            (image3.width/framesTotal) * scale, // scale x
            image3.height * scale // scale y
        );
        
        position3 += image3.width/framesTotal;

        // restore the context scale to default for the next frame
        ctx3.setTransform(1, 0, 0, 1, 0, 0);
    }
};

// Select the button element
const downloadBtn = document.getElementById('download-btn');

// Attach a click event listener to the button
downloadBtn.addEventListener('click', function() {
    // Call your function to draw and download the inverted image
    const link = document.createElement('a');
    link.href = canvas3.toDataURL(); // Download the first frame image1
    link.download = name + '.png';
    document.body.appendChild(link);
    link.click();
});


