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
      return {
        id: "12312323",
        value: "herp derp"
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

