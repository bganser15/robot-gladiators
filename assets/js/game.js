var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

//enemy names
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

/* for loop example
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }
*/

//alert players they are starting the round
window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {
    //repeat and execute as long as enemy robot is alive
    while(enemyHealth > 0) {
        //asks player if they want to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
            //if player choses to fight, fight
            if (promptFight === "fight" || promptFight === "FIGHT") { 
                //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
                enemyHealth = enemyHealth - playerAttack;
                // Log a resulting message to the console so we know that it worked.
                console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
                    // check enemy's health
                    if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                } else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }
                // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `splayerHealth` variable.
                playerHealth = playerHealth - enemyAttack;
                // Log a resulting message to the console so we know that it worked.
                console.log(
                    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );
                if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                }
                else {
                    window.alert(playerName + " still has " +playerHealth + " health left.");
                }
            
                //if user chooses skip
            } else if (promptFight === "skip" || promptFight === "SKIP") {
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                    // if yes (true), leave fight
                if (confirmSkip) {
                    window.alert(playerName + " has decided to skip this fight. Goodbye!");
                    // subtract money from playerMoney for skipping
                    playerMoney = playerMoney - 2;
                }
                // if no (false), ask question again by running fight() again
                else {
                    fight();
                }
                //if user doesn't input valid answer
            } else {
                window.alert("You need to choose a valid option. Try again!");  
            }
        }
    }


for(var i = 0; i <enemyNames.length; i++) {
    fight(enemyNames[i]);

}

//run fight to start the game over
//fight();