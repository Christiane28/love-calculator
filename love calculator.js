prompt("What is your name?");
prompt("What is your crush's name?");

var loveScore = Math.floor(Math.random() * 100) + 1;

if (loveScore > 75) {
  alert("Your love score is" + " " + loveScore + "%. You love each other like Kanye loves Kanye.");
} else if (loveScore > 25 && loveScore < 75) {
  alert("Your love score is" + " " + loveScore + "%. Hubba Hubba!");
} else {
  alert("Your love score is" + " " + loveScore + "%. You love each other like a toothache!");
}
