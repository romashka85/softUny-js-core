function distance(input) {
    let v1 = input[0];
    let v2 = input[1];
    let t = input[2];
    let dist1 = v1 * (t/3.6);
    let dist2 = v2 * (t/3.6);

    let delta = Math.abs(dist1 - dist2);
    console.log(delta);
}

distance([5, -5, 40]);

