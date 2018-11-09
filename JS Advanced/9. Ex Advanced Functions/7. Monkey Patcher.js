function solve(operation) {
    let operator = {
        upvote,
        downvote,
        score
    };

    let funcToInvoke = operator[operation].bind(this);

    return funcToInvoke();

    function upvote() {
        this.upvotes += 1;
    }

    function downvote() {
        this.downvotes +=1;
    }

    function score() {
        let upvotesToPrint = this.upvotes;
        let downVotesToPrint = this.downvotes;

        if (upvotesToPrint + downVotesToPrint > 50) {
            upvotesToPrint += Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            downVotesToPrint += Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
        }

        let balance = this.upvotes - this.downvotes;
        let rating = "";

        if (this.upvotes > 0.66 * (this.upvotes + this.downvotes)) {
            rating = "hot";
        } else if (balance >= 0 && this.upvotes + this.downvotes > 100) {
            rating = "controversial";
        } else if (balance < 0) {
            rating = "unpopular";
        }

        if (this.upvotes + this.downvotes < 10 || rating === "") {
            rating = "new";
        }

        let result = [upvotesToPrint, downVotesToPrint, balance, rating];

        return result;
    }
}

let forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

let result = solve.call(forumPost, 'score');
console.log(result);          //[4, 5, -1, 'new']

solve.call(forumPost, 'downvote');
result = solve.call(forumPost, 'score');
console.log(result);           //[4, 6, -2, 'unpopular']

solve.call(forumPost, 'upvote');
solve.call(forumPost, 'upvote');
result = solve.call(forumPost, 'score');
console.log(result);          //[6, 6, 0, 'new']

// 38 Upvotes
for (let i = 0; i < 38; i++) {
    solve.call(forumPost, 'upvote');
}
result = solve.call(forumPost, 'score');
console.log(result);            //[44, 6, 38, 'hot']

solve.call(forumPost, 'downvote');
result = solve.call(forumPost, 'score');
console.log(result);           //[55, 18, 37, 'hot']

//-------------------here fun begins
forumPost.upvotes = 132;
forumPost.downvotes = 68;
result = solve.call(forumPost, 'score');
console.log(result);           //[165, 101, 64, 'controversial'];

// Past hot threshold
forumPost.upvotes = 133;
result = solve.call(forumPost, 'score');
console.log(result);          //[167, 102, 65, 'hot'];