const {cwd} = require('node:process')
module.exports = function() {
  //Output a prompt
  process.stdout.write('prompt > ');

  // The stdin 'data' event fires after a user types in a line
  process.stdin.on('data', (data) => {
   const cmd = data.toString().trim(); //remove the newline
    process.stdout.write(cwd());
    // process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  });

 // console.log('hello');
}


