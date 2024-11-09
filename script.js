//Bring/import HTML elements to JS
const textInput = document.getElementById("text-input"); // Input field where user types the word
const button = document.getElementById("button"); // Button to trigger the search for definition
const ItemsContainer = document.getElementById("item-container"); // Container to display definitions

// Define the dictionary object with words, parts of speech, and definition(s)
const dictionaryWords = {
    "yes": {
        pos:"noun",
        definition:["1. Used to give an affirmative response.",
        "2. Used as a response to someone addressing one or otherwise trying to attract one's attention."]
    },
    "saw": {
        pos:"verb",
        definition:["1. Cut (something) using a saw.",
        "2. Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."]
    },
    "panacea":{
        pos:"noun",
        definition:["1. An answer or solution for all problems or difficulties."]
    },
    "concatenation":{
        pos:"noun",
        definition:["1. A series of interconnected or interdependent things or events."]
    },
    "found":{
        pos:"adjective",
        definition:["1. Having been discovered by chance or unexpectedly.",
        "2. (of a ship) Equipped; Supplied."]
    },
    "crane":{
        pos:"verb",
        definition:["1. Stretch out one's body or neck in order to see something.",
        "2. Move (a heavy object) with a crane."]
    },
    "minute":{
        pos:"noun",
        definition:["1. Stretch out one's body or neck in order to see something.",
        "2. Move (a heavy object) with a crane."]
    },
    "grotesque":{
        pos:"adjective",
        definition:["1. Comically or repulsively ugly or distorted."]
    },
    "label":{
        pos:"noun",
        definition: ["1. A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."]
    },
    "debacle":{
        pos:"noun",
        definition:["1. A sudden and ignominious failure; a fiasco."]
    },
    "element":{
        pos:"noun",
        definition:["1. A building block within a structured language."]
    },
    "index":{
        pos:"noun/verb",
        definition:["1. A number that corresponds to an element’s position."]
    },
    "array":{
        pos:"noun/verb",
        definition:["1. variables that can hold more than one value of data."]
    },
    "string":{
        pos:"noun",
        definition:["1. String of letters and/or characters",
        "2. Considered to be a word or a sentence, sentence can have spaces in it."]
    },
    "statement":{
        pos:"noun",
        definition:["1. Instructions that express actions and usually end in semicolons."]
    },
    "integer":{
        pos:"noun",
        definition:["1. Considered to be any whole number, can be negative or positive."]
    },
    "double":{
        pos:"adjective/verb/noun",
        definition:["1. to be any number with a decimal, can be negative or positive."]
    },
    "character":{
        pos:"noun",
        definition:["1. Single letter or a symbol, examples: &, %, /, #, *, etc."]
    },
    "boolean":{
        pos:"adjective",
        definition:["1. Variables for decision making, possible values are always either True or False."]
    },
    "variable":{
        pos:"",
        definition:["1. Factor to store and manipuate data.",
    "2. Able to be changed or adapted."]
    },
    "data":{
        pos:"prural noun",
        definition:["1. facts and statistics collected together for reference or analysis."]
    },
    "branching Statement":{
        pos:"noun",
        definition:["1. Blocks of code that executes depending on specific conditions.",
        "2. Code that executes only when something is true."]
    },
    "function":{
        pos:"verb",
        definition:["1. Made to separate and organize code into specific area blocks."]
    },
    "modulo":{
        pos:"",
        definition:["1. Mathematical operation that returns the remainder of a division of two numbers.",
        "2. The remainder when dividing."]
    },
    "scope":{
        pos:"noun",
        definition:["1. Area where a variable is located."]
    },
    "parameter":{
        pos:"noun",
        definition:["1. Variables specifically used in functions",
        "2. To give data an objective so it does something then returns it."]
    },
    "event":{
        pos:"noun",
        definition:["1. Specific scenarios that can be handled by it.",
        "2. Parameter that is automatically in a function when event listener is triggered."]
    },
    "loop":{
        pos:"noun/verb",
        definition:["1. sequence of instruction s that is continually repeated until a certain condition is reached."]
    },
    "property":{
        pos:"noun",
        definition:["1. a thing or things belonging to someone; possessions collectively.",
        "2. A characteristic or trait of an object."]
    },
    "value":{
        pos:"noun/verb",
        definition:["1. The regard that something is held to deserve; the importance, worth, or usefulness of something.",
        "2. specifies the style to be changed."]
    },
    "declaration":{
        pos:"noun/verb",
        definition:["a formal or explicit statement or announcement.",
        "2. the key-value pair of a property and its value."]
    },

}


//Add a new Item to the dictionary display 
function addItemToDictionary(){
    //Get the info that the user writes in the input and convert it to lowercase no matter how they write it 
    let userText = textInput.value.toLowerCase();
    
    // Check if the word exists in the dictionary
    if(dictionaryWords.hasOwnProperty(userText)){
        // Create and set up an element for the part of speech
        let pPartOfSpeech = document.createElement('p');
        pPartOfSpeech.innerText= dictionaryWords[userText].pos; // Set part of speech text
        pPartOfSpeech.className= "result-container"; // Add styling class
        ItemsContainer.append(pPartOfSpeech) // Append part of speech to the container

        // Loop through each definition and display it
        for(let i = 0; i < dictionaryWords[userText].definition.length; i++){
            let dDefinition = document.createElement('p'); // Create an element for each definition
            dDefinition.innerText = dictionaryWords[userText].definition[i]; // Set definition text
            dDefinition.className= "result-container"; // Add styling class
            ItemsContainer.append(dDefinition)
        }
       
    }
        else {
            // If word is not in dictionary, create a message element
            let notFoundMessage = document.createElement('p');
            notFoundMessage.innerText = userText + " is not in the dictionary"; // Set message text using concatenation
            notFoundMessage.className = "result-container"; // Add styling class
            ItemsContainer.append(notFoundMessage); // Append message to the container
        }

        return; // Exit function after displaying the definitions
;    

}

//Search Button event listener when being clicked
button.addEventListener("click", function() {
    // Get the user's input text
    let userText = textInput.value;

    // Check if the input field is not empty and if it is, dont add anything 
    if (userText.trim() !== "") {
        addItemToDictionary();
    }
});