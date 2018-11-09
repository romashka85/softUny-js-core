function captureNum(input) {

    let text = input.join(' ');
    let regex = /\d+/g;
    let numbers = text.match(regex);
    console.log(numbers.join(' '));
}

captureNum(['The300',
    'What is that?',
    'I think it’s the 3rd mo4vie.',
    'Lets watch it at 22:45']
);