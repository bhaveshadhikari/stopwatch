let elapsed = 0;
let angle = 0;
let lastUpdateTime = 0;
const rotationSpeed = 6; // in degrees per second
let second = 0;
let minute = 0;
let hour = 0;
let isPaused = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(50);
  noStroke();

  push();  // start of the transformation block
  translate(width / 2, height / 2);

  // Calculate the time elapsed since the last update
  fill(255, 200, 23);
  textSize(30);
  text((hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second)+':'+(int(elapsed/10) <10 ? '0' + int(elapsed/10) : int(elapsed/10)), -80, -150);
  textAlign(CENTER);
  textSize(20);
  text("<tap anywhere to pause/resume>",0,150)
  if (!isPaused) {
    const now = millis();
    elapsed = now - lastUpdateTime
    // Only update the angle variable once per second
    if (elapsed >= 1000) 
    {
      angle += 6
      // angle < 360 ? (angle + 60 ) : 0  ; // update the angle by 6 degrees per second
      lastUpdateTime = now;
      second = (int)(angle / 6);
      second %= 60;
      if (second % 60 == 0) {
        minute++;
      }

      if (minute != 0 && minute % 60 == 0) {
        hour++;
      }
      minute = minute % 60
    }
  }
  rotate(angle);// apply rotation to the whole drawing

for (let a = 0; a < 360; a += 15) {
  push();
  rotate(a);
  fill(255)
  translate(0, 100);
  square(-5, 0, 10);
  pop();
}

  fill(255, 174, 66);
  circle(0, 0, 202);
  stroke(23, 23, 33);
  strokeWeight(5);
  circle(0, 0, 190);
  circle(0, 0, 120);
  circle(0, 0, 65);
  stroke(255, 10, 5);
  strokeWeight(5);
  line(0, 0, 0, -50)
  fill(0)
  circle(0, 0, 10);
  noStroke();
  pop();

  translate(width / 2, height / 2);
  text
  for (let a = 30; a <= 360; a += 30) {
    push();
    rotate(a);
    fill(255)
    translate(0, -78);
    textSize(20)
    rotate(-a)
    textAlign(CENTER, TOP)
    stroke(5)
    fill(200, 0, 0)
    text((a / 30), 0, -7)
    pop();
  }
  stroke(10);
  noFill();
  circle(0, 0, 10);
}

function mousePressed() {
  isPaused = !isPaused;
  if (!isPaused) {
    lastUpdateTime = millis();
  }
}
