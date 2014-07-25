var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'neurosky', adaptor: 'neurosky', port: '/dev/tty.MindWave' },
  device: { name: 'headset', driver: 'neurosky' },

  work: function(bhikkhu) {
    bhikkhu.headset.on('attention', function(data) {
      console.log("attention: " + data);
    });
    
    bhikkhu.headset.on('meditation', function(data) {
      console.log("meditation: " + data);
    });

    // bhikkhu.headset.on('packet', function(data) {
    //   console.log("packet: " + data);
    // });

    bhikkhu.headset.on('eeg', function(data, e) {
      console.log("eeg: " + data.object, e);
    });

    bhikkhu.headset.on('blink', function(data) {
      console.log("blink: " + data);
    });

    bhikkhu.headset.on('signal', function(data) {
      console.log("signal: " + data);
    });

    bhikkhu.headset.on('wave', function(data) {
      console.log("wave: " + data);
    });

    bhikkhu.headset.on('start', function(data) {
      console.log("start: " + data);
    });
  }
});

//During meditation there is a modest increase in slow alpha or theta wave EEG activity


// BT_SYNC = 0xAA;
// CODE_EX = 0x55;              // Extended code
// CODE_SIGNAL_QUALITY = 0x02;  // POOR_SIGNAL quality 0-255
// CODE_ATTENTION = 0x04;       // ATTENTION eSense 0-100
// CODE_MEDITATION = 0x05;      // MEDITATION eSense 0-100
// CODE_BLINK = 0x16;           // BLINK strength 0-255
// CODE_WAVE = 0x80;            // RAW wave value: 2-byte big-endian 2s-complement
// CODE_ASIC_EEG = 0x83;        // ASIC EEG POWER 8 3-byte big-endian integers

Cylon.start();