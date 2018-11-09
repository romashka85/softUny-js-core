function getSorted() {
    return {
        list:[],
        size:0,
        add: function (element) {
            this.list.push(element);
            this.size++;
            this.sort();
        },
        remove: function (index) {
            if (index >= 0 && index < this.list.length){
                this.list.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if (index >= 0 && index<this.list.length){
                return this.list[index];
            }
        },
        sort: function () {
            this.list.sort(((a,b) => a-b));
        }

    }
}

let sorted = getSorted();
sorted.add(15);
sorted.add(13);
sorted.add(-115);
sorted.add(0);
console.log(sorted.list);
console.log('Current size:' + sorted.size);
sorted.remove(2);
console.log(sorted.list);
console.log('Current size:' + sorted.size);
console.log('Current index:'+ ' ' + sorted.get(1));


