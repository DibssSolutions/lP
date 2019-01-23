var NUM_POINTS = 250;

var path = document.getElementById('path-bottom');
var len = path.getTotalLength();
var points = [];
var strPoints = '';

for (var i = 0; i <= NUM_POINTS - 1; i++) {
  var pt = path.getPointAtLength((i * len) / (NUM_POINTS - 1));
  points.push([`${pt.x.toFixed(2)}px`, `${pt.y.toFixed(2)}px`]);
  strPoints += `${(pt.x).toFixed(2)}px ${(pt.y).toFixed(2)}px, `;
}

console.log('points = ', points, strPoints);
