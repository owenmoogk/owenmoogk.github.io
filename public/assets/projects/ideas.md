# A Map
Coolness: 10/10 • Difficulty: 4/10

Jordan Studdard's [map for my inner child](https://www.youtube.com/watch?v=cKEkBgPU-1Mhttps:/) really impressed and inspired me to build something similar for myself.

My goal is to build a map with markers of all of the places in the world I've been to. I've also found [this video](https://www.youtube.com/watch?v=UhYu0k2woRM&list=PLDlu7PVlJUFtCAMwffs1lwe7iIy3aZIIQ&index=54&t=362s&pp=gAQBiAQBhttps:/) about addressable LEDs, but I think the [Adafruit NeoPixels](https://www.adafruit.com/category/168https:/) also are addressable, so I still need to think about architecture. And need to buy a map...

# A RetroPie Gaming Console
Coolness: 10/10 • Difficulty: 9/10

I have a few Raspberry Pi's lying around, so I'd love to build a gaming system out of it. I've already loaded one with with [Retropie](https://retropie.org.uk/), and even connected an Xbox controller to play some old games (I'm crushing the original Super Mario World!). [Retrostic](https://www.retrostic.com/) has a ton of free ROMs which is helpful.

However, I'm not checking this off of my list because I'd love to build a full arcade-style machine for Pac-man, Space Invaders, and the like.

The reason I haven't made any decent progress on this is because it would require a lot of hardware, even if it's tabletop. I'd have to invest in a display, and probably a 3D printed enclosure. And also design a PCB or wiring harness for the input buttons and joysticks, so I think it's a long term project.

# Ball Balancing Robot
Coolness: 7/10 • Difficulty: 10/10

I want to learn more about building a PID loop for control of software systems, which is why I want to build a robot that can balance a ball on a plane, like a ping pong paddle. I think it's hard because the feedback loop may take a long time to tune, and could also require some AI or computer vision as an input. I think it's a bit out of my wheelhouse, but is on this list because it's something I want to learn.

[Aaed Musa did this well](https://www.youtube.com/watch?v=NwRuQ7r6xLQ), and I probably want to follow in these footsteps. However, I'd maybe want to start with a 1D representation, instead of a plane, just have a ball on a v-shaped cutout that can only roll along it. It would simplify the output to one dimension, which would hopefully simplify some of the math and PID learning.

# Maker Space
Coolness: 10/10 • Difficulty: 1/10

This will be a design only project until I have a lot of money, but I'd love to design and build a custom workshop, and really put the effort into making it productive with a bunch of hidden functionality. It looks something like a cross between the typical 40-some year old workshop with a ratchet set, hammer, and some wood tools -- and the more modern, with 3D printers, CNC, laser cutters, and electronics tools.

I want to take some inspiration from [Scott Yu-Jan](https://www.youtube.com/c/ScottYuJan), who has a great number of workshop improvements that take a lot of design work, but fit seamlessly into a project development workflow (especially his [drawer organizer](https://www.youtube.com/watch?v=-s74phtezf4)).

Ideally, in my head, this looks like (aka my wish list):
- A printer
- 2 or 3 3D Printers
- A laser-cutter
- A small CNC
- Tons of whiteboard space
- A wall of tools, not only organized but quickly mounted (maybe with magnets?)
- A nice computer setup with a few monitors
- Sound system, that connects to Spotify so I can play from my phone or computer
- A server, for locally hosted git / SVN, as well as custom smart-home modifications
- A soldering station
- Power supply, maybe oscilloscope?

# Sand Marble Machine
Coolness: 10/10 • Difficulty: 8/10

RCLifeOn made [this video](https://www.youtube.com/watch?v=rXCHn9B5dH0) about a plotting machine that moves a marble around to make patterns in sand. I really love it, and want to replicate it for myself. I think this will be pretty hard for a few reasons:
1. I'm bad at large-scale mechanical projects (building a table isn't my jam)
2. I think getting firmware sorted might be hard. There's some open-source stuff out there, but plotting with g-code without breaking the machine will probably require some work. Also I'd need to make/source a slicer.
3. The sand and marble rolling might be hard. It would need a strong magnet, and need to be tuned so the marble rolls smoothly. I think this is difficult.

But it's super cool, so when I have the money, and time, this is one of my favorites.

# Modular, General Purpose, 3D printed gearbox
Coolness: 5/10 • Difficulty: 6/10

Motors are super cheap on AliExpress, you can buy 10 for like 10 bucks. However, the output shaft is usually circular and small, meaning it's really hard to fix anything to the shaft.

Also, most cheap DC motors don't really have an output that's suitable for regular applications, they usually need a gearbox that will increase torque and decrease speed. So making something modular and universal would be fantastic.

Resources
- [3d Printed Gearbox for Small Dc Motors](https://www.instructables.com/3d-Printed-Gearbox-for-Small-Dc-Motors/)
- [3D Printed Stackable BRUSHLESS Motor Gearbox](https://youtu.be/G0DcM60lWSw)

# Spotify Playlist Automated Album Art
Coolness: 6/10 • Difficulty: 5/10

I really hate updating Spotify playlist art, most of my albums don't really have a picture that fits, or don't have one at all. I've gotten AI to make a few for me and I've actually been decently impressed. I usually have to specify some prompt, like "make a beach with a palm tree" for a playlist called "Summer", but I wonder if, knowing both the songs in the playlist, and the playlist title, it's possible to fully automate this. 

My ideal workflow: once an album is a week old (so has enough songs on it to determine a "vibe"), a endpoint is called / recognizes this, and generates and image. Then it automatically updates the image through the Spotify API.

It's possible via [this endpoint](https://developer.spotify.com/documentation/web-api/reference/upload-custom-playlist-cover).

# Rubix Cube Solver
Coolness: 8/10 (not 10 only because this isn't original at all) • Difficulty: 8/10

I was inspired by Aaed Musa's [I Built a Rubik's Cube Solver](https://www.youtube.com/watch?v=V8gHTKWw--Y&list=PLDlu7PVlJUFtCAMwffs1lwe7iIy3aZIIQ&index=47) YouTube video, and I want to try something similar. Now, since I'm not rich yet, I probably won't use drone motors. But with cheap motors, it's probably possible to get it to solve a cube. Also, most solvers that I've seen allow the user to input a scramble algorithm on a computer, and then it solves it. However, I haven't seen one where the person can actually take the cube, scramble it, and give it back to the machine. This is probably much harder since the machine can't actually fasten to the cube, but if it's possible that would be cool!

# Macropad Version 2.0
Coolness: 8/10 • Difficulty: 7/10

I built a macropad a while ago, and did it with an Arduino Nano. To get it to communicate to my computer, I made it send serial commands over USB, and had a python script running in the background to receive the data and execute commands. It was great, until my computer went through a power cycle. I think the python script went to sleep, and then never woke up. Either way, the serial commands weren't being read.

I can't really be upset, because it's a really bad architecture. The Nano doesn't support USB communication, so I had to stick with UART. But, I now have a KB2040, which has a RP2040 chip inside of it: capable of USB communication. This means it can actually tell the computer that it's a keyboard, and act as one. This will make this much more reliable.

I also want to maybe add a few potentiometers and LEDs to jazz this up a bit, like this video: [DIY Macro Pad Keyboard Build from Scratch with Custom PCB and Mechanical Switches](https://www.youtube.com/watch?v=P_oSLBZABGA&list=PLDlu7PVlJUFtCAMwffs1lwe7iIy3aZIIQ&index=49&t=343s&pp=gAQBiAQB).

