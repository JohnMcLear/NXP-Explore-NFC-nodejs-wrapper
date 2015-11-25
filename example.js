var nfc = require("explorenfc");

nfc.init("/usr/bin/explorenfc-basic");

nfc.read(function(nfcEvent){
  if(nfcEvent){
    console.log("id", nfcEvent.id);
    console.log("value", nfcEvent.value);
  }else{
    console.log("no NFC Event");
  }
});

nfc.write("herp derp", function(writeOrNot){
  if(writeOrNot) console.log("NFC tag was written");
});

