function quadraticEquation(a, b, c) {
    let d = Math.pow(b, 2) - (4*a*c);

    if (d > 0) {
        let root1 = (-b + Math.sqrt(d)) / (2 * a);
        let root2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log(Math.min(root1, root2));
        console.log(Math.max(root1, root2));
    } else if (d == 0) {
        console.log(-b / (2 * a))
    } else {
        console.log('No')
    }
}
