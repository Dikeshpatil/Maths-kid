<script>
// Javascript program to check if two given line segments intersect

class Point
{
	constructor(x, y)
	{
		this.x = x;
			this.y = y;
	}
}


function onSegment(p, q, r)
{
	if (q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) &&
		q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y))
	return true;
	
	return false;
}


function orientation(p, q, r)
{

	let val = (q.y - p.y) * (r.x - q.x) -
			(q.x - p.x) * (r.y - q.y);
	
	if (val == 0) return 0; 
	
	return (val > 0)? 1: 2; 
}


function doIntersect(p1, q1, p2, q2)
{

	// Find the four orientations needed for general and
	// special cases
	let o1 = orientation(p1, q1, p2);
	let o2 = orientation(p1, q1, q2);
	let o3 = orientation(p2, q2, p1);
	let o4 = orientation(p2, q2, q1);
	
	// General case
	if (o1 != o2 && o3 != o4)
		return true;
	
	// Special Cases
	// p1, q1 and p2 are collinear and p2 lies on segment p1q1
	if (o1 == 0 && onSegment(p1, p2, q1)) return true;
	
	// p1, q1 and q2 are collinear and q2 lies on segment p1q1
	if (o2 == 0 && onSegment(p1, q2, q1)) return true;
	
	// p2, q2 and p1 are collinear and p1 lies on segment p2q2
	if (o3 == 0 && onSegment(p2, p1, q2)) return true;
	
	// p2, q2 and q1 are collinear and q1 lies on segment p2q2
	if (o4 == 0 && onSegment(p2, q1, q2)) return true;
	
	return false; // Doesn't fall in any of the above cases
}

// Driver code
let p1 = new Point(1, 1);
let q1 = new Point(10, 1);
let p2 = new Point(1, 2);
let q2 = new Point(10, 2);

if(doIntersect(p1, q1, p2, q2))
	document.write("Yes<br>");
else
	document.write("No<br>");

p1 = new Point(10, 1); q1 = new Point(0, 10);
p2 = new Point(0, 0); q2 = new Point(10, 10);
if(doIntersect(p1, q1, p2, q2))
	document.write("Yes<br>");
else
	document.write("No<br>");

p1 = new Point(-5, -5); q1 = new Point(0, 0);
p2 = new Point(1, 1); q2 = new Point(10, 10);;
if(doIntersect(p1, q1, p2, q2))
	document.write("Yes<br>");
else
	document.write("No<br>");

// This code is contributed by avanitrachhadiya2155
</script>
