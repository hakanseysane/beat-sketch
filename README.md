# BeatSketch

## Overview
BeatSketch is a lightweight script designed to streamline the pre-production phase of music projects. It allows composers, producers, and musicians to quickly sketch out the structure of a track, including time signatures, tempo changes, and sections such as intro, verse, chorus, etc. This tool aims to simplify the workflow in Digital Audio Workstations (DAWs) by providing a clear roadmap for recording and production.

In this screenshot, the sample file produced by the project has been imported into the GarageBand application. At the point where the cursor is located, we see that the song has a tempo of 120 BPM and is in 6/8 time.
![Alt text](/files/ss-garage-band-01.png?raw=true "Imported Midi in Garage Band")

In this screenshot, we see that the song is in 4/4 time with a tempo of 90 BPM at the point where the cursor is located.
![Alt text](/files/ss-garage-band-02.png?raw=true "Imported Midi in Garage Band")


When we import the midi file into Reaper, we can choose to import the tempo and time signature settings as well as the markers of the sections we named.
![Alt text](/files/ss-reaper-02.png?raw=true "Imported Midi in Garage Band")

Appearance in Reaper
![Alt text](/files/ss-reaper-01.png?raw=true "Imported Midi in Garage Band")

## Features
- Define and organize music sections (Intro, Verse, Chorus, etc.)
- Set tempos and time signatures for each section
- Generate a MIDI file to import into any DAW
- Easy-to-use interface for quick music sketching

## Usage
1. Define your song structure in a simple JSON format.
2. Run the script to generate a MIDI file.
3. Import the MIDI file into your DAW to guide your recording and production process.

## Installation
Clone this repository and run `npm install` to install dependencies.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue to suggest improvements or add new features.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
