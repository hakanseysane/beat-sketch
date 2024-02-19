import midiWriter from "midi-writer-js";
import { writeFile } from "fs/promises";

const { Track, NoteEvent, Writer } = midiWriter;

const phases = {
  Intro: "Intro",
  Verse: "Verse",
  PreChorus: "PreChorus",
  Chorus: "Chorus",
  PostChorus: "PostChorus",
  Bridge: "Bridge",
  Solo: "Solo",
  Outro: "Outro",
};

const createTrack = () => {
  const track = new Track();
  track.addTrackName("Track 1");
  return track;
};


const addPhase = (track, { tempo, timeSignature, bar, marker }) => {
  track.setTempo(tempo);
  track.setTimeSignature(timeSignature[0], timeSignature[1]);
  track.addMarker(marker);

  for (let b = 1; b <= bar; b++) {
    for (let n = 1; n <= timeSignature[0]; n++) {
      track.addEvent(new NoteEvent({
        pitch: ["C4"],
        duration: `T${timeSignature[1]}`
      }));
    }
  }
};

const writeMidiFile = async (track, fileName) => {
  const writer = new Writer(track);
  const base64Data = writer.dataUri().replace(/^data:audio\/midi;base64,/, "");
  try {
    await writeFile(fileName, base64Data, "base64");
    console.log(`${fileName} has been saved.`);
  } catch (err) {
    console.error(err);
  }
};


// Example using
const track = createTrack();
const input = [
  {
    tempo: 140,
    timeSignature: [4, 4],
    bar: 8,
    marker: phases.Intro
  },
  {
    tempo: 120,
    timeSignature: [6, 8],
    bar: 10,
    marker: phases.Verse
  },
  {
    tempo: 90,
    timeSignature: [6, 8],
    bar: 4,
    marker: phases.Bridge
  },
  {
    tempo: 120,
    timeSignature: [4, 4],
    bar: 4,
    marker: phases.Verse
  },
  {
    tempo: 120,
    timeSignature: [4, 4],
    bar: 2,
    marker: phases.PreChorus
  },
  {
    tempo: 120,
    timeSignature: [4, 4],
    bar: 4,
    marker: phases.Solo
  },
  {
    tempo: 120,
    timeSignature: [4, 4],
    bar: 2,
    marker: phases.Chorus
  },
  {
    tempo: 90,
    timeSignature: [4, 4],
    bar: 2,
    marker: phases.Outro
  },
];

input.forEach(data => addPhase(track, data));
writeMidiFile(track, "out/example.midi");