# What is this?

A super simple NodeJS Library to read and write NFC NDEF records on a Raspberry Pi with an NXP Explore NFC shield

# Usage

## Prerequesities
1. Install NFC Explore software on your device as per http://www.nxp.com/documents/application_note/AN11480.pdf
2. Install this module ``npm install explorenfc``

## Read contents
```
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
```

## Write contents
```
var nfc = require("explorenfc");
nfc.init("/usr/bin/explorenfc-basic");
nfc.write("herp derp", function(writeOrNot){
  if(writeOrNot) console.log("NFC tag was written");
});
```

## Limitations
Functionality is kept intentionally limited to keep this module very simple to use.  Because of this we don't support much functionality.

## Roughly how it works
On ``read`` we execute ``explorenfc-basic``

On ``write`` we execute ``explorenfc-basic –w '<your message>' –t <type>``
