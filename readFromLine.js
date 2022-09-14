const read= require("readline").createInterface({

    input: process.stdin,
    output: process.stdout,
});

read.question(`Please enter your name:`, name => {
    console.log(`Hello ${name}`);
    read.close();
  });