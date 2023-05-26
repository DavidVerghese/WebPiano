const chromatic = [
  { note: "C4", color: "white", keystrokes: ["a","A"]},
  { note: "C#4", color: "black", keystrokes: ["w","W"] },
  { note: "D4", color: "white",  keystrokes: ["s","S"]},
  { note: "D#4", color: "black",  keystrokes: ["e","E"] },
  { note: "E4", color: "white",  keystrokes: ["d","D"]},
  { note: "F4", color: "white",  keystrokes: ["f","F"]}, 
  { note: "F#4", color: "black",  keystrokes: ["t","T"]},
  { note: "G4", color: "white",  keystrokes: ["g","G"] },
  { note: "G#4", color: "black",  keystrokes: ["y","Y"]},
  { note: "A4", color: "white",  keystrokes: ["h","H"]},
  { note: "A#4", color: "black",  keystrokes: ["u","U"]},
  { note: "B4", color: "white", keystrokes: ["j","J"] },
  { note: "C5", color: "white",  keystrokes: ["k","K"]},
];
const major = [
  { note: "C4", color: "gray", keystrokes: "a"},
  { note: "D4", color: "white", keystrokes: ["s","S"] },
  { note: "E4", color: "white", keystrokes: ["d","D"] },
  { note: "F4", color: "white", keystrokes: ["f","F"] },
  { note: "G4", color: "white", keystrokes: ["g","G"] },
  { note: "A4", color: "white", keystrokes: ["h","H"] },
  { note: "B4", color: "white", keystrokes: ["j","J"] },
  { note: "C5", color: "gray", keystrokes: ["k","K"] },
];
const mixolodian = [
  { note: "C4", color: "gray", keystrokes: ["a","A"] },
  { note: "D4", color: "white", keystrokes: ["s","S"] },
  { note: "E4", color: "white", keystrokes: ["d","D"] },
  { note: "F4", color: "white", keystrokes: ["f","F"] },
  { note: "G4", color: "white", keystrokes: ["g","G"] },
  { note: "A4", color: "white", keystrokes: ["h","H"] },
  { note: "Bb4", color: "white", keystrokes: ["j","J"] },
  { note: "C5", color: "gray", keystrokes: ["k","K"] },
];
const majorPentatonic = [
  { note: "C4", color: "gray", keystrokes: ["a","A"] },
  { note: "D4", color: "white", keystrokes: ["s","S"] },
  { note: "E4", color: "white", keystrokes: ["d","D"] },
  { note: "G4", color: "white", keystrokes: ["f","F"] },
  { note: "A4", color: "white", keystrokes: ["g","G"] },
  { note: "C5", color: "gray", keystrokes: ["h","H"] },
];
const majorBlues = [
  { note: "C4", color: "gray", keystrokes: ["a","A"] },
  { note: "D4", color: "white", keystrokes: ["s","S"] },
  { note: "Eb4", color: "white", keystrokes: ["d","D"] },
  { note: "E4", color: "white", keystrokes: ["f","F"] },
  { note: "G4", color: "white", keystrokes: ["g","G"] },
  { note: "A4", color: "white", keystrokes: ["h","H"] },
  { note: "C5", color: "gray", keystrokes: ["j","J"] },
];
const minor = [
  { note: "C4", color: "gray", keystrokes: ["a","A"] },
  { note: "D4", color: "white", keystrokes: ["s","S"] },
  { note: "Eb4", color: "white", keystrokes: ["d","D"] },
  { note: "F4", color: "white", keystrokes: ["f","F"] },
  { note: "G4", color: "white", keystrokes: ["g","G"] },
  { note: "Ab4", color: "white", keystrokes: ["h","H"] },
  { note: "Bb4", color: "white", keystrokes: ["j","J"] },
  { note: "C5", color: "gray", keystrokes: ["k","K"] },
];
const klezmer = [
  { note: "C4", color: "gray", keystrokes: ["a","A"] },
  { note: "Db4", color: "white", keystrokes: ["s","S"] },
  { note: "E4", color: "white", keystrokes: ["d","D"] },
  { note: "F4", color: "white", keystrokes: ["f","F"] },
  { note: "G4", color: "white", keystrokes: ["g","G"] },
  { note: "Ab4", color: "white", keystrokes: ["h","H"] },
  { note: "Bb4", color: "white", keystrokes: ["j","J"] },
  { note: "C5", color: "gray", keystrokes: ["k","K"] },
];
const harmonicMinor = [
  { note: "C4", color: "gray", keystrokes: ["a","A"] },
  { note: "D4", color: "white", keystrokes: ["s","S"] },
  { note: "Eb4", color: "white", keystrokes: ["d","D"] },
  { note: "F4", color: "white", keystrokes: ["f","F"] },
  { note: "G4", color: "white", keystrokes: ["g","G"] },
  { note: "Ab4", color: "white", keystrokes: ["h","H"] },
  { note: "B4", color: "white", keystrokes: ["j","J"] },
  { note: "C5", color: "gray", keystrokes: ["k","K"] },
];
const dorian = [
  { note: "C4", color: "gray", keystrokes: ["a","A"] },
  { note: "D4", color: "white", keystrokes: ["s","S"] },
  { note: "Eb4", color: "white", keystrokes: ["d","D"] },
  { note: "F4", color: "white", keystrokes: ["f","F"] },
  { note: "G4", color: "white", keystrokes: ["g","G"] },
  { note: "A4", color: "white", keystrokes: ["h","H"] },
  { note: "Bb4", color: "white", keystrokes: ["j","J"] },
  { note: "C5", color: "gray", keystrokes: ["k","K"] },
];
const minorPentatonic = [
  { note: "C4", color: "gray", keystrokes: ["a","A"] },
  { note: "Eb4", color: "white", keystrokes: ["s","S"] },
  { note: "F4", color: "white", keystrokes: ["d","D"] },
  { note: "G4", color: "white", keystrokes: ["f","F"] },
  { note: "Bb4", color: "white", keystrokes: ["g","G"] },
  { note: "C5", color: "gray", keystrokes: ["h","H"] },
];
const japanese = [
  { note: "C4", color: "gray", keystrokes: ["a","A"] },
  { note: "Db4", color: "white", keystrokes: ["s","S"] },
  { note: "F4", color: "white", keystrokes: ["d","D"] },
  { note: "G4", color: "white", keystrokes: ["f","F"] },
  { note: "Ab4", color: "white", keystrokes: ["g","G"] },
  { note: "C5", color: "gray", keystrokes: ["h","H"] },
];
const southEastAsian = [
  { note: "C4", color: "gray", keystrokes: ["a","A"] },
  { note: "Db4", color: "white", keystrokes: ["s","S"] },
  { note: "Eb4", color: "white", keystrokes: ["d","D"] },
  { note: "G4", color: "white", keystrokes: ["f","F"] },
  { note: "Ab4", color: "white", keystrokes: ["g","G"] },
  { note: "C5", color: "gray", keystrokes: ["h","H"] },
];
const minorBlues = [
  { note: "C4", color: "gray", keystrokes: ["a","A"] },
  { note: "Eb4", color: "white", keystrokes: ["s","S"] },
  { note: "F4", color: "white", keystrokes: ["d","D"] },
  { note: "F#4", color: "white", keystrokes: ["f","F"]},
  { note: "G4", color: "white", keystrokes: ["g","G"] },
  { note: "Bb4", color: "white", keystrokes: ["h","H"] },
  { note: "C5", color: "gray", keystrokes: ["j","J"] },
];
export { chromatic, major, minor, minorPentatonic, minorBlues, majorPentatonic, mixolodian, harmonicMinor, dorian, majorBlues, klezmer, japanese, southEastAsian };