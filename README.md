# What is this?

A super simple NodeJS Library to read and write NFC NDEF records on a Raspberry Pi with an NXP Explore NFC shield

# Usage

## Prerequesities
1. Install NFC Explore software on your device.

## Read contents
```
var nfc = require("explorenfc");
nfc.init("/bin/explorenfc-basic");

nfc.read(function(nfcEvent){
  console.log(nfcEvent.id);
  console.log(nfcEvent.value);
});
```

## Write contents
```
var nfc = require("explorenfc-basic");
nfc.init("/bin/explorenfc-basic");
nfc.write("herp derp");
```

## Limitations
Functionality is kept intentionally limited to keep this module very simple to use.  Because of this we don't support much functionality.

## Roughly how it works
On ``read`` we execute ``explorenfc-basic``
On ``write`` we execute ``explorenfc-basic –w '<your message>' –t <type>``
