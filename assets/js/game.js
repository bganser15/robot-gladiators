
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


var fight = function(enemyName) {
    //repeat and execute as long as enemy robot and player is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        
        //asks player if they want to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."); {

            //if player picks skip then confirm and stop loop
            if (promptFight === "skip" || promptFight === "SKIP") {
                //confirms if they want to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");

                // if yes (true), leave fight
                if (confirmSkip) {
                    window.alert(playerName + " has decided to skip this fight. Goodbye!");

                    // subtract money from playerMoney for skipping
                    playerMoney = playerMoney - 10;
                    console.log("playerMoney", playerMoney);
                    break;
                }
            }
        }
        //subtracts from enemyHealth
        enemyHealth = enemyHealth - playerAttack;
       
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        
            // award player money for winning
            playerMoney = playerMoney + 20;
            //leave while loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `splayerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )
        
        //checks to see if player is still alive
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            }
            else {
            window.alert(playerName + " still has " +playerHealth + " health left.");
            }
    }
};

//cycles through the enemyNames array
for(var i = 0; i < enemyNames.length; i++) {
    //reruns fight function is player is still alive
    if (playerHealth > 0) {
        //announces new round through i iteration
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
        //assigns enemy from array to new variable
        var pickedEnemyName = enemyNames[i];
        //resets new enemy health
        enemyHealth = 50;
        debugger;
        fight(pickedEnemyName);
        } 
        
        else { 
        //if player health hits 0, end game
        window.alert("You have lost your robot in battle! Game over!");
        break;
    }
}



//run fight to start the game over
//fight();