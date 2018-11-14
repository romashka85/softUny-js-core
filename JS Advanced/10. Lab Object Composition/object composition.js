let rect = {
    width: 10,
    height: 4,
    grow: function(w, h) {
        this.width += w; this.height += h;
    },
    print: function() {
        console.log(`[${this.width} x ${this.height}]`);
    }
};


rect.print();
rect.grow(2, 3);
rect.print();

