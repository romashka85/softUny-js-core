const obj = {
    name: 'Pesho',
    movies: ['Game of Thrones', 'Walking Dead', 'Venom'],
    printMovies: function () {
    // const that = this;
    
    this.movies.forEach((movie) => {
        console.log(`${this.name} has watched ${movie}`)  //to use this in hiordered function use arrow function or some
    })                                                    //variable to (for Ex that.name)
    }
};
obj.printMovies();
