function distanceBetweenPoints(x1, y1, x2, y2) {
   let pointA = {x:x1, y:y1};
   let pointB = {x:x2, y:y2};

   let distansX = Math.pow(pointA.x - pointB.x, 2);
   let distansY = Math.pow(pointA.y - pointB.y, 2);
   let distans = Math.sqrt(distansX + distansY);
   return distans
}

console.log(distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985));







