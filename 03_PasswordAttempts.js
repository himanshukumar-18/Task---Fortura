import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const password = "secret";
let attempts = 3;

function askPassword() {
    if (attempts === 0) {
        console.log("Access Locked!!");
        rl.close();
        return;
    }

    rl.question("Enter password: ", (input) => {
        if (input === password) {
            console.log("Access granted");
            rl.close();
        } else {
            attempts--;
            if (attempts === 0) {
                console.log("Access Locked!!");
                rl.close();
            } else {
                console.log(`Incorrect password. You have ${attempts} attempts left.`);
                askPassword(); // repeat
            }
        }
    });
}

askPassword();