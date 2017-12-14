// Modified from https://github.com/ReactTraining/react-workshop/blob/master/subjects/Animation/utils/createOscillator.js

function Oscillator(audioContext) {
  const oscillatorNode = audioContext.createOscillator();
  oscillatorNode.start();

  const gainNode = audioContext.createGain();
  this.pitchBase = 50;
  this.pitchBend = 0;
  this.pitchRange = 2000;
  this.volume = 0.5;
  this.maxVolume = 1;
  this.frequency = this.pitchBase;

  let hasConnected = false;

  this.play = function () {
    oscillatorNode.connect(gainNode);
    hasConnected = true;
  };

  this.stop = function () {
    oscillatorNode.disconnect(gainNode);
    hasConnected = false;
  };

  this.setPitchBend = function (v) {
    this.pitchBend = v;
    this.frequency = this.pitchBase + (this.pitchBend * this.pitchRange);
    oscillatorNode.frequency.value = this.frequency;
  };

  this.setVolume = function (v) {
    this.volume = this.maxVolume * v;
    gainNode.gain.value = this.volume;
  };

  this.connect = function (output) {
    gainNode.connect(output);
  }

  return this;
}

function createOscillator () {
  const audioContext = new AudioContext();
  const theremin = new Oscillator(audioContext);

  theremin.connect(audioContext.destination);

  return theremin;
}

export default createOscillator;
