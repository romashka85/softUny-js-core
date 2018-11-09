function produceCars(input) {
    (function () {
        let cars = [];
        let commandInterpreter = {
            create,
            set,
            print
        };

        input
            .forEach(cmd => {
                processCommand(cmd);
            });

        function processCommand(cmd) {
            let tokens = cmd
                .split(" ");
            let command = tokens[0];
            tokens.shift();

            commandInterpreter[command].apply(this, tokens);
        }

        function create(name, isInherit, parentName) {
            if (!isInherit) {
                let obj =  {
                    name: name
                };
                cars.push(obj);
            } else {
                let parent = cars
                    .filter(c => c.name === parentName);
                let obj = Object.create(parent[0]);
                obj.name = name;

                cars.push(obj);
            }
        }

        function set(name, key, value) {
            let wantedObj = cars
                .filter(c => c.name === name)[0];
            wantedObj[key] = value;
        }

        function print(name) {
            let wantedObj = cars
                .filter(c => c.name === name)[0];

            let kvp = [];

            for (let key of Object.keys(wantedObj)) {
                if (key !== "name") {
                    kvp.push(`${key}:${wantedObj[key]}`);
                }
            }

            let parent = Object.getPrototypeOf(wantedObj);

            while (parent) {
                for (let key of Object.keys(parent)) {
                    if (key !== "name") {
                        kvp.push(`${key}:${parent[key]}`);
                    }
                }

                parent = Object.getPrototypeOf(parent);
            }

            console.log(kvp.join(", "));
        }
    })();
}

produceCars(['create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat']
);