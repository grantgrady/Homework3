// Favorite Food Project - Sushi
// This project demonstrates images, motion, and custom typography

let sushiImg, nigiriImg, rollImg, generativeImg;
let titleFont;
let sushiX = 100;
let nigiriX;
let animationStart;
let scrollingY = 0;

function preload() {
  // Load images
  sushiImg = loadImage('images/food1.png');
  nigiriImg = loadImage('images/food2.png');
  rollImg = loadImage('images/food3.png');
  
  // Load the generative AI image
  generativeImg = loadImage('images/ai-sushi.png');
  
  // Load custom font from assets folder
  titleFont = loadFont('assets/titleFont.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  animationStart = millis();
  nigiriX = windowWidth - 150;
  
  // Initialize scrolling position
  scrollingY = height / 2;
}

function draw() {
  background(255, 245, 247); // Light pink background
  
  // Display title with custom font
  textSize(48);
  fill(200, 50, 80); // Deep red/pink color
  textFont(titleFont);
  text('My Favorite Food: Sushi', 40, 60);
  
  // Display your name with custom font
  textSize(28);
  fill(100);
  textFont(titleFont);
  text('By Richard', 40, 100);
  
  // --- ANIMATED SUSHI (moves left to right) ---
  let elapsed = millis() - animationStart;
  sushiX = 100 + sin(elapsed * 0.001) * 150; // Oscillating movement
  
  image(sushiImg, sushiX, 150, 150, 150);
  fill(0);
  textSize(16);
  textFont('Arial');
  text('Sushi Roll', sushiX + 20, 320);
  
  // --- NIGIRI IMAGE (moving vertically) ---
  // This image moves up and down smoothly
  let verticalMovement = sin(elapsed * 0.0008) * 100;
  image(nigiriImg, windowWidth - 250, 200 + verticalMovement, 140, 140);
  fill(0);
  textSize(16);
  textFont('Arial');
  text('Nigiri', windowWidth - 230, 360);
  
  // --- MAKI ROLL IMAGE (bouncing) ---
  // Bouncing animation
  let bounce = bounceAnimation(elapsed);
  image(rollImg, 400, bounce, 130, 130);
  fill(0);
  textSize(16);
  textFont('Arial');
  text('Maki Roll', 430, 400);
  
  // --- GENERATIVE AI IMAGE (scrolling) ---
  image(generativeImg, windowWidth / 2 - 120, scrollingY, 220, 150);
  fill(0);
  textSize(16);
  textFont('Arial');
  text('AI-Generated Sushi', windowWidth / 2 - 90, scrollingY + 170);
  
  // Update scrolling position
  scrollingY += 2;
  if (scrollingY > height + 100) {
    scrollingY = -150;
  }
  
  // Display movement info
  fill(100, 150, 200);
  textSize(12);
  textFont('Arial');
  text('Sushi roll oscillates left-right | Nigiri moves up-down | Maki bounces | AI image scrolls', 40, height - 30);
}

// Bouncing animation using setInterval logic
function bounceAnimation(elapsed) {
  const bounceSpeed = elapsed * 0.002;
  const bounceHeight = 150;
  const baseBounce = 250;
  
  // Simple bouncing using modulo and sine
  const normalized = (bounceSpeed % 2); // Cycle every ~1 second
  if (normalized < 1) {
    return baseBounce - sin(normalized * PI) * bounceHeight;
  } else {
    return baseBounce;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
