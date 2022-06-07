
//--------------Declear the variables-------------

let text = document.querySelector('textarea');
let word = document.querySelector('#word');
let char = document.querySelector('#character');

//--------------Declear the input event to perform the function--------------

text.addEventListener('input',function () {

 //--------------Track the given text-------------

    text = this.value;

 //--------------Give output to count the characters-------------

    char.innerHTML = text.length;

 //--------------To Clean Space Start Or End Words-------------

    text = text.trim();

 //--------------To Break the text in given space Or retrun New Arrey-------------

    let word_count = text.split(" ");

 //--------------To Clean Space Between Two Words-------------- 

    let clean_word = word_count.filter(function (e) {
        return e != "";
    })   

 //--------------Give the output to count the words--------------   

    word.innerHTML = clean_word.length;
})