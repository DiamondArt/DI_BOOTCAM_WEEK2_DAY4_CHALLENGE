/****************************************************************
 * @author Melissa Kouadio <angemelisk@gmail.com>  
 * @description: display in console words in a rectangular frame box 
 * @function boxFrame  
 * @typeof {string}                            
 * @param {string} sentence
 * @returns {string}                             
 *****************************************************************/ 

let word = prompt('Enter words separate by commas');
console.log(boxFrame(word));

function boxFrame(sentence){
    let lines = sentence.split(",")
    let max_length = Math.max(...lines.map(x => x.length)) // to find longest word
    let larger = '*'.repeat(max_length + 4) // generate stars for top and bottom border
    let longer = larger + '\n'
    longer += lines.reduce((y,x) => y+= `* ${x.padEnd(max_length)} *\n`,"")  // star for left and right border
    longer += larger
    return longer
}
