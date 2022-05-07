 
let wordsArray = [
['Will Smith', 'Chuck Norris', 'Bruce Willis', 'Jason Statham', 'Peter Parker', 'Jada P.'],
['can', 'will', 'should', 'might', 'is able to', 'can not', 'will not', 'is eager to'],
['slap the shit out of you', 'fuck you up good', 'kick ya in the face', 'wrestle you to the ground',
            'choke you out', 'jerk you off', 'play with your balls'],
['for telling a joke.', 'for cleaning the pool.', 'for cheating.', 'for climbing the dominance hierachy.',
            'for playing a prank on them.', 'for being stoopid.', 'to heal your emotional damage.'],
];

let randoNumber = 0
let finalArray = [];

const randomWordPicker = (array) => {
    for (let i = 0; i < array.length; i++) {
    randoNumber = Math.floor(Math.random() * array[i].length);
    finalArray.push(array[i][randoNumber]);
    };
    return console.log(finalArray.join(' '));
};

randomWordPicker(wordsArray);