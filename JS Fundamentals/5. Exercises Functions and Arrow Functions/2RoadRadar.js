function speedLimit(input) {
    [speed, zone] = input;

    function getLimit(zone) {
        switch (zone) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case  'residential':
                return 20;
        }
    }
    let limit = getLimit(zone);

    function getInfraction(speed, limit) {
        let overspeed = speed - limit;
        if (overspeed <= 0){
            return false;
        }
        else{
            if (overspeed > 0 && overspeed <= 20) {
                return "speeding";
            }
            else if (overspeed > 20 && overspeed <= 40) {
                return "excessive speeding";
            }
            else if (overspeed > 40) {
                return "reckless driving";
            }

        }
    }

    let infraction = getInfraction(speed, limit);
    if (infraction){
        console.log(infraction);
    }
}

speedLimit([21, 'residential']);