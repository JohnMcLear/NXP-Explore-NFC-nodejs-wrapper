var child_process = require('child_process');
var binary;
var writeCommand = "-w 'NXP Semiconductors' -t Text -l en";

module.exports = {
  init: function(path){
    binary = path;
  },

  read: function(cb){
    // exec: spawns a shell.
    child_process.exec(binary, function(error, stdout, stderr){
      // TODO, parse the output from the board
      // If it looks like this could be what we want
      var result = processLines(stdout);
      cb(result);
    });
  },

  write: function(v, cb){
    v = "-w '" + v + "' -t Text -l en";
    var command = binary + " " + v;
    // console.log("executing", command);
    child_process.exec(command, function(error, stdout, stderr){
      if(error){
        cb(false);
      }else{
        cb(processLines(stdout));
      }
    });
  }
}

processLines = function(stdout){
  var lines = stdout.toString().split('\n');
  var written;
  var value, id;
  lines.forEach(function(line) {
    if(line.indexOf("Record was written successfully") === 0){
      written = true;
    }
    if(line.indexOf("ISO14443A UID:") === 0){
      line = line.replace("ISO14443A UID:", "");
      id = line.trim();
    }
    if(line.indexOf("URI") === 0 || line.indexOf("Title") === 0){
      line = line.replace(": \t", "");
      value = line.replace("URI", "").trim();
      value = line.replace("Title", "").trim();
    }

  });
  if(written){
    return true;
  }

  if(value && id){
    return {
      id: id,
      value: value
    }
  }

}
