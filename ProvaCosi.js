function setup() 
    {
    createCanvas(600, 400);
    background("#5CB5CD");
    noLoop ()
    }

function bolle (x,y,r) {
    strokeWeight (0);
    fill(101, 127, 236, 128);
    circle (x, y, r);
    }

function disegnaPesce (x, y, r) {
    //corpo pesce
    fill ("#FF9800");
    strokeWeight (1);
    circle(x, y, 2*r);
    fill ("#FF6700");
    triangle(x+r, y, x+r+r*(3*1/2)/2, y-r/2, x+r+r(3**1/2)/2, y+r/2);
    strokeWeight (4);
    fill (255);
    point (x-r*1/3, y-r*1/3);
}

function draw (){ 
    frameRate (1)
    let numeroBolle= 50;
    for (let i=0; i<numeroBolle; i=i+1)
    {
      let xBolla=random(0,600);
      let yBolla=random (0,400);
      bolle(xBolla,yBolla, 20)
    }
    let numeroPesci=50; 
    let raggioPesce=15;
    let xPasso= 50;
    let y1=130; 
    let y2=260;
    for (let i=0; i<numeroPesci; i=i+1) //ciclo per disegnare i pesci
    {
      if(i%2==0) //se numeroPesci è pari
        {
          disegnaPesce (xPasso*i,y1,raggioPesce);
        }
      else
      {
        disegnaPesce (xPasso*i, y2, raggioPesce);
      }
    }
}
  
