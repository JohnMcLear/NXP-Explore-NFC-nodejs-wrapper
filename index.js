var child_process = require('child_process');
var binary;
var writeCommand = "-w 'NXP Semiconductors' -t Text -l en";

module.exports = {
  init: function(path){
    binary = path;
  },
  read: function(){
    // exec: spawns a shell.
    child_process.exec(binary, function(error, stdout, stderr){
      // TODO, parse the output from the board
      // If it looks like this could be what we want
      if(stdout.indexOf("SO14443A UID") === 0){
        var id = stdout.replace("SO14443A UID","");
      }
      if(stdout.indexOf("URI") === 0 || stdout.indexOf("Title") === 0){
        stdout = stdout.replace("URI", "");
        stdout = stdout.replace("Title", "");
        return {
          id: id,
          value: stdout
        }
      }
    });

  },
  write: function(v){
    v = "-w '" + v + "' -t Text -l en";
    var command = binary + " " + v;
    console.log("executing", command);
    child_process.exec(command, function(error, stdout, stderr){
      if(error){
        console.error("ERROR", error)
      }else{
        console.log(stdout);
      }
    });
  }
}

