# IoT Quiz - 60 Questions (General Knowledge)

A comprehensive IoT quiz application covering fundamental concepts, communication protocols, architecture, security, AI/ML applications, and real-world implementations.

## Overview

This quiz contains 60 multiple-choice questions across 6 topics:

1. **IoT Fundamentals** (Questions 1-10)
2. **Communication Protocols** (Questions 11-20)
3. **Architecture & Hardware** (Questions 21-30)
4. **Security & Privacy** (Questions 31-40)
5. **AI, ML & Data Analytics** (Questions 41-50)
6. **Implementation & Applications** (Questions 51-60)

Each question is shuffled and answer options are randomized to prevent guessing by pattern recognition.

## Features

- **60 Multiple Choice Questions**: Comprehensive coverage of IoT concepts
- **6 Topic Categories**: Organized by subject matter for focused learning
- **Randomized Questions**: Questions are shuffled each time you take the quiz
- **Randomized Answers**: Answer options are shuffled to prevent memorization
- **Score Tracking**: Real-time score display and final results
- **Performance Feedback**: Based on your score (100%, 80%, 60%, 40%, <40%)
- **Review Mode**: See which questions you got right/wrong with correct answers
- **Topic Indicators**: Color-coded topic indicators for each question
- **Progress Bar**: Visual indicator of quiz progress

## Technical Implementation

### Stack
- HTML5, CSS3, JavaScript (ES6+)
- No external dependencies - runs entirely in the browser
- Responsive design for desktop and mobile

### Key Components

**`script.js`** - Core quiz logic:
- `quizData`: Array of 60 question objects with topic, question, correct answer, and wrong answers
- Question shuffling using Fisher-Yates algorithm
- Answer option shuffling for each question
- Quiz state management (current question, score, results)
- Feedback system with color coding (correct/incorrect)
- Results display with performance message
- Review functionality to see all answers

**Question Structure:**
```javascript
{
  topic: 1, // 1-6 representing the topic
  question: "The actual question text",
  correct: "The correct answer",
  wrong: ["Wrong answer 1", "Wrong answer 2", ...]
}
```

### Quiz Flow
1. Start screen with "Start Quiz" button
2. Quiz interface with:
   - Question text
   - Topic indicator (color-coded)
   - Multiple choice buttons
   - Progress bar
   - Current score
3. Immediate feedback after each answer (1.2s delay before next question)
4. Results screen with:
   - Final score
   - Performance message with emoji
   - Review section showing all questions and answers
5. Restart and review buttons

## Usage

Simply open the HTML file in any modern browser. No installation required.

### How to Take the Quiz
1. Click "Start Quiz" on the landing screen
2. Answer each multiple-choice question by clicking the button
3. See immediate feedback (correct answers turn green, incorrect turn red)
4. Review your answers at the end
5. Click "Restart" to take the quiz again

### Topics Covered

1. **IoT Fundamentals**: History, terminology, layers, characteristics
2. **Communication Protocols**: MQTT, BLE, RFID, CoAP, Zigbee, NFC, WiFi
3. **Architecture & Hardware**: Edge computing, fog computing, microcontrollers, sensors, actuators, gateways, Docker, reverse proxies
4. **Security & Privacy**: Vulnerabilities, DDoS, encryption, surveillance, middleware security
5. **AI, ML & Data Analytics**: YOLO, SSD, Jetson Nano, DBSCAN, traffic management, frame selection, Simulink
6. **Implementation & Applications**: Hardware components, IR sensors, NFC, Raspberry Pi, ARTEMIS, solar-powered systems, drones, KLT tracking

## Recent Updates

### Simplified Answers (May 2026)
All correct answers have been simplified and shortened to make them less guessable by length. This ensures players must know the material rather than choosing the longest answer.

### Question Count
60 questions total, providing a thorough assessment of IoT knowledge.

## Sources
The quiz questions are based on the following source materials:
- pdf1: Remote Lab materials
- pdf2: IoT Education & Technology
- pdf3: Smart Traffic management systems

## License
This project is for educational purposes. Questions are derived from the source materials listed above.

## Contributing
Feel free to submit PRs for additional questions or improvements. Please maintain the randomized answer pattern to keep the quiz challenging.

## Acknowledgments
- Original question sources: Remote Lab, IoT Education & Technology, Smart Traffic
- Claude Code for assistance with implementation