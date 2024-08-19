![](main.png)

# Overview

In my first term at the University of Waterloo, myself and my peers were tasked with creating a functioning robotic mechanism for a final design project. My team decided to take that a step further, and create a full chess playing robot. Using an EV3 Robot and a Tetrix robotic set, we scrapped the instruction manual and designed the robot to fit our needs. This robot is capable of picking up chess pieces, executing moves, controlling game states, acting as a chess clock, and so much more.

# Media

<video src='demo.mp4'></video>

![](team.png)

# Sidenote

This webpage will cover the surface aspects of this robot, as well as its capability. For detailed analysis for design decisions, software review, and core functionality, the design report can be found [here](/assets/projects/chess-bot/report.pdf). Additionally, this project was created as a team, alongside my peers Eidan Erlich, Shabd Gupta, and Richard Wang.

# Hardware

This robot was built completely from scratch, and includes a two-axis system to complete movements. It has a rack and pinion gear to lower the claw, and a modified Tetrix Claw for picking up pieces.

# Base

The base was constructed with Tetrix pieces, arranged in a square to encompass the chess board. It acts as the structure holding the rails and all other components. It is 0.65 by 0.58 meters, designed for a tournament style chess board.

![Base Image](overhead.png)

# 2-Axis Movement

The axial movement for the robot, allowing the claw to reach all positions on the board, is controlled with two 'Large' EV3 motors. The x-axis (moving the EV3 and carriage system) is operated on rails, with wheels to propel the system. The y-axis is controlled using a pulley system, with fishing line. This allows the system to be driven by a motor that is offboard, decreasing weight on the carriage. A video of this in action can be seen below., along with an image of the pulley system

![2-Axis Movement Image](pulley.png)

<video src='rails.mov'></video>

# Axis Positioning

The axis additionally use an intelligent system to control its positioning. The x-axis uses a color sensor to locate its position relative to the board, with red paper as an indicator, shown below. The y-axis uses a motor encoder value to determine its distance from the initial, 'A' cell.

![Axis Positioning Image](color.png)

# Claw System

The claw system used a Tetrix claw, modified with rubber lego wheels and scotch tape, for added grip. It is actuated up and down using a 'Medium' motor connected to a rack and pinion. This was a significantly tough to integrate, as the Tetrix claw needed an onboard battery and control board, adding plenty of cable and weight to the carriage, however we managed to get it working consistently after some troubleshooting.

![Claw System Image](claw.png)

# Software Design

The software for this robot was also custom, written in RobotC (almost identical to C++). It was made quite efficient and modular, which made integration much easier. That wasn't to say it wasn't without it's hiccups, but nothing we couldn't work through. We collaborated on the code both in-person, using agile development techniques, as well as online through github. The github page is linked [here](https://github.com/owenmoogk/carl-bot/). This was actually one of the most organized projects that I've worked on, partly because of the requirements set out by the course.

# Troubleshooting

Yes, unfortunately it was frequent enough that it deserves a section. We spent a lot of time in integration hell, due to many errors. The most common and painful one was misalignment of the axis/board. We first set the board on the table, and had to align the robot perfectly to the board. Then, we could tune the color sensor and motor encoders to hit the cells. However, we encountered drift errors when the robot was moving to the opposite side of the board, due to misalignments in the axis. These errors *sometimes* cancelled eachother out, and other times compounded to make it completely inconsistent. With a deadline approaching we optimized it the best we could in software, and it went relatively unnoticed.

This is a great learning point for the future, as this could have been avoided completely with better foresight and planning. We didn't really consider drift along the axis, or other technical problems that should have been obvious had we stopped to think about it for a few minutes. Additionally, we were quite excited as really wanted to start building, with the approach of 'we can solve that later'. This came back to bite us, as it always seems to do.

# Room for Improvement

I am personally very proud of this robot. We took a step up in our design, and were not sure if we could make it work within the deadline, but we got all the functionality that we wanted. That being said, given the opportunity to build it again, there are many different choices that I would make. There are 2 pages of potential improvements listed in the design report, but in summary we would have loved to add functionality for a Chess Engine, Computer Vision, and FileIO. Computer vision would also improve robot accuracy, as the location of the claw could be tracked to create a feedback loop.

On the hardware side, we realized that the axial movement could be much simplified, with only one carriage that could just drive across the board. It would be easier to troubleshoot, as well as build. We also would have loved to create a custom claw, offloading the battery pack and control circuit.

# Conclusion

Although the last two sections have been a bit negative, this robot is awesome. I am so proud of it, and am amazed at the feat that we accomplished. I think I almost cried when we first started running it, just seeing it in action was incredible. I hope to continue working on projects like these in the future, creating cool things that make the mundane quite interesting.

