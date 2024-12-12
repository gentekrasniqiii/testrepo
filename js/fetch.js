// Fetch text from a file
async function getTextfromFile(file) {
  let myFile = await fetch(file);
  let myText = await myFile.text();

  let lines = myText.split("\n");

  let heading = lines[0];
  let desc = lines[1];

  document.getElementById("heading").innerHTML = heading;
  document.getElementById("desc").innerHTML = desc;
}
// call the method 
getTextfromFile("fetch.txt");


  


