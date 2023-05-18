const chromatic = [
  { note: "C4", color: "white", keystroke: "a"},
  { note: "C#4", color: "black",  keystroke: "w" },
  { note: "D4", color: "white",  keystroke: "s"},
  { note: "D#4", color: "black",  keystroke: "e" },
  { note: "E4", color: "white",  keystroke: "d"},
  { note: "F4", color: "white",  keystroke: "f"}, 
  { note: "F#4", color: "black",  keystroke: "t"},
  { note: "G4", color: "white",  keystroke: "g" },
  { note: "G#4", color: "black",  keystroke: "y"},
  { note: "A4", color: "white",  keystroke: "h"},
  { note: "A#4", color: "black",  keystroke: "u"},
  { note: "B4", color: "white", keystroke: "j" },
  { note: "C5", color: "white",  keystroke: "k"},
];
const major = [
  { note: "C4", color: "gray", keystroke: "a"},
  { note: "D4", color: "white", keystroke: "s" },
  { note: "E4", color: "white", keystroke: "d" },
  { note: "F4", color: "white", keystroke: "f" },
  { note: "G4", color: "white", keystroke: "g" },
  { note: "A4", color: "white", keystroke: "h" },
  { note: "B4", color: "white", keystroke: "j" },
  { note: "C5", color: "gray", keystroke: "k" },
];
const mixolodian = [
  { note: "C4", color: "gray", keystroke: "a" },
  { note: "D4", color: "white", keystroke: "s" },
  { note: "E4", color: "white", keystroke: "d" },
  { note: "F4", color: "white", keystroke: "f" },
  { note: "G4", color: "white", keystroke: "g" },
  { note: "A4", color: "white", keystroke: "h" },
  { note: "Bb4", color: "white", keystroke: "j" },
  { note: "C5", color: "gray", keystroke: "k" },
];
const majorPentatonic = [
  { note: "C4", color: "gray", keystroke: "a" },
  { note: "D4", color: "white", keystroke: "s" },
  { note: "E4", color: "white", keystroke: "d" },
  { note: "G4", color: "white", keystroke: "f" },
  { note: "A4", color: "white", keystroke: "g" },
  { note: "C5", color: "gray", keystroke: "h" },
];
const majorBlues = [
  { note: "C4", color: "gray", keystroke: "a" },
  { note: "D4", color: "white", keystroke: "s" },
  { note: "Eb4", color: "white", keystroke: "d" },
  { note: "E4", color: "white", keystroke: "f" },
  { note: "G4", color: "white", keystroke: "g" },
  { note: "A4", color: "white", keystroke: "h" },
  { note: "C5", color: "gray", keystroke: "j" },
];
const minor = [
  { note: "C4", color: "gray", keystroke: "a" },
  { note: "D4", color: "white", keystroke: "s" },
  { note: "Eb4", color: "white", keystroke: "d" },
  { note: "F4", color: "white", keystroke: "f" },
  { note: "G4", color: "white", keystroke: "g" },
  { note: "Ab4", color: "white", keystroke: "h" },
  { note: "Bb4", color: "white", keystroke: "j" },
  { note: "C5", color: "gray", keystroke: "k" },
];
const klezmer = [
  { note: "C4", color: "gray", keystroke: "a" },
  { note: "Db4", color: "white", keystroke: "s" },
  { note: "E4", color: "white", keystroke: "d" },
  { note: "F4", color: "white", keystroke: "f" },
  { note: "G4", color: "white", keystroke: "g" },
  { note: "Ab4", color: "white", keystroke: "h" },
  { note: "Bb4", color: "white", keystroke: "j" },
  { note: "C5", color: "gray", keystroke: "k" },
];
const harmonicMinor = [
  { note: "C4", color: "gray", keystroke: "a" },
  { note: "D4", color: "white", keystroke: "s" },
  { note: "Eb4", color: "white", keystroke: "d" },
  { note: "F4", color: "white", keystroke: "f" },
  { note: "G4", color: "white", keystroke: "g" },
  { note: "Ab4", color: "white", keystroke: "h" },
  { note: "B4", color: "white", keystroke: "j" },
  { note: "C5", color: "gray", keystroke: "k" },
];
const dorian = [
  { note: "C4", color: "gray", keystroke: "a" },
  { note: "D4", color: "white", keystroke: "s" },
  { note: "Eb4", color: "white", keystroke: "d" },
  { note: "F4", color: "white", keystroke: "f" },
  { note: "G4", color: "white", keystroke: "g" },
  { note: "A4", color: "white", keystroke: "h" },
  { note: "Bb4", color: "white", keystroke: "j" },
  { note: "C5", color: "gray", keystroke: "k" },
];
const minorPentatonic = [
  { note: "C4", color: "gray", keystroke: "a" },
  { note: "Eb4", color: "white", keystroke: "s" },
  { note: "F4", color: "white", keystroke: "d" },
  { note: "G4", color: "white", keystroke: "f" },
  { note: "Bb4", color: "white", keystroke: "g" },
  { note: "C5", color: "gray", keystroke: "h" },
];
const japanese = [
  { note: "C4", color: "gray", keystroke: "a" },
  { note: "Db4", color: "white", keystroke: "s" },
  { note: "F4", color: "white", keystroke: "d" },
  { note: "G4", color: "white", keystroke: "f" },
  { note: "Ab4", color: "white", keystroke: "g" },
  { note: "C5", color: "gray", keystroke: "h" },
];
const southEastAsian = [
  { note: "C4", color: "gray", keystroke: "a" },
  { note: "Db4", color: "white", keystroke: "s" },
  { note: "Eb4", color: "white", keystroke: "d" },
  { note: "G4", color: "white", keystroke: "f" },
  { note: "Ab4", color: "white", keystroke: "g" },
  { note: "C5", color: "gray", keystroke: "h" },
];
const minorBlues = [
  { note: "C4", color: "gray", keystroke: "a" },
  { note: "Eb4", color: "white", keystroke: "s" },
  { note: "F4", color: "white", keystroke: "d" },
  { note: "F#4", color: "white", keystroke: "f"},
  { note: "G4", color: "white", keystroke: "g" },
  { note: "Bb4", color: "white", keystroke: "h" },
  { note: "C5", color: "gray", keystroke: "j" },
];
export { chromatic, major, minor, minorPentatonic, minorBlues, majorPentatonic, mixolodian, harmonicMinor, dorian, majorBlues, klezmer, japanese, southEastAsian };