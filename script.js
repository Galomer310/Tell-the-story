
const storyTemplates = [
    "Once upon a time, there was a {adjective} {noun} who loved to {verb} at the {place} with {person}.",
    "{person} went to the {place} with a {adjective} {noun} and started to {verb}.",
    "In the {place}, a {adjective} {noun} and {person} decided to {verb} all day long.",
    "{person} was feeling very {adjective} when they decided to take their {noun} to the {place} and {verb} all afternoon.",
    "In a {place} far, far away, a {adjective} {noun} was learning how to {verb} with the help of {person}.",
    "The {noun} at the {place} was so {adjective} that {person} couldn't help but {verb} with excitement.",
    "{person} found a {adjective} {noun} near the {place} and decided to {verb} with it until sunset.",
    "Every time {person} visited the {place}, they would bring a {adjective} {noun} and {verb} for hours."
  ];

  function generateStory(values) {
    const template = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
    
    return template
      .replace("{noun}", values.noun)
      .replace("{adjective}", values.adjective)
      .replace("{person}", values.person)
      .replace("{verb}", values.verb)
      .replace("{place}", values.place);
  }
  
  document.getElementById("libform").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();
  
    if (!noun || !adjective || !person || !verb || !place) {
      alert("Please fill in all the fields to create your story.");
      return;
    }
  
    const story = generateStory({ noun, adjective, person, verb, place });
    document.getElementById("story").textContent = story;
  });
  
  document.getElementById("shuffle-button").addEventListener("click", function () {
    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();
  
    if (!noun || !adjective || !person || !verb || !place) {
      alert("Please fill in all the fields to create your story.");
      return;
    }
  
    const shuffledStory = generateStory({ noun, adjective, person, verb, place });
    document.getElementById("story").textContent = shuffledStory;
  });
  