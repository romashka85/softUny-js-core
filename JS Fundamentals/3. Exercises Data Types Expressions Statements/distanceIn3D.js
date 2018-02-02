function distanceIn3D(input) {
    let x1 = input[0];
    let y1 = input[1];
    let z1 = input[2];
    let x2 = input[3];
    let y2 = input[4];
    let z2 = input[5];

    let pointA = {x:x1, y:y1, z:z1};
    let pointB = {x:x2, y:y2, z:z2};

    let distanceX = Math.pow(pointA.x - pointB.x, 2);
    let distanceY = Math.pow(pointA.y - pointB.y, 2);
    let distanceZ = Math.pow(pointA.z - pointB.z, 2);

    console.log(Math.sqrt(distanceX + distanceY + distanceZ));
}

distanceIn3D([1, 1, 0, 5, 4, 0]);


