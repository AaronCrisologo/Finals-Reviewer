// IoT Quiz - 60 Questions (General Knowledge)
// Covers: IoT fundamentals, architecture, protocols, security, applications, AI/ML, and education
// Source materials: pdf1 (Remote Lab), pdf2 (IoT Education & Technology), pdf3 (Smart Traffic)

const quizData = [
    // ============================================
    // SECTION 1: IoT FUNDAMENTALS (Questions 1-10)
    // ============================================
    {
        topic: 1,
        question: "Who is widely credited with coining the term 'Internet of Things'?",
        correct: "Kevin Ashton",
        wrong: [
            "Bill Gates",
            "Steve Jobs",
            "Tim Berners-Lee",
            "Vint Cerf"
        ]
    },
    {
        topic: 1,
        question: "According to the three-layer IoT model, which layer consists of RFID tags, sensors, and actuators?",
        correct: "Physical layer",
        wrong: [
            "Network layer",
            "Application layer",
            "Middleware layer",
            "Cloud layer"
        ]
    },
    {
        topic: 1,
        question: "Which of the following is NOT one of the four essential characteristics of an IoT 'thing'?",
        correct: "Has AI capabilities",
        wrong: [
            "Collects and transmits data",
            "Operates with action-based responses",
            "Receives information from the network",
            "Supports communication with other devices"
        ]
    },
    {
        topic: 1,
        question: "What does the IoT application layer primarily deal with?",
        correct: "User-facing apps and interfaces",
        wrong: [
            "Physical sensors and actuators",
            "WiFi and Bluetooth protocols",
            "RFID tag manufacturing",
            "Hardware power management"
        ]
    },
    {
        topic: 1,
        question: "What was LG's Digital DIOS Refrigerator (2000) an early example of?",
        correct: "An ordinary household item connected to the internet",
        wrong: [
            "A successful commercial IoT product",
            "A smart campus management tool",
            "The first smartphone with IoT capabilities",
            "A cloud computing platform for IoT"
        ]
    },
    {
        topic: 1,
        question: "According to Mitew (2014), what does IoT refer to in terms of connecting objects?",
        correct: "Connecting trivial material objects to the internet",
        wrong: [
            "Interconnecting only industrial machines",
            "A network exclusively for mobile phones",
            "A protocol for satellite communication",
            "A framework for quantum computing"
        ]
    },
    {
        topic: 1,
        question: "What is the key function of middleware in IoT systems?",
        correct: "Enable communication between devices and protocols",
        wrong: [
            "Physically connect devices with cables",
            "Power IoT devices wirelessly",
            "Store all IoT data permanently",
            "Replace the need for sensors"
        ]
    },
    {
        topic: 1,
        question: "The IoT is sometimes described as involving a paradigm shift from the 'internet of computers' to what?",
        correct: "Ambient connectivity in everyday objects",
        wrong: [
            "An internet limited to smartphones only",
            "A closed network for industrial machines",
            "A satellite-based global network",
            "A wired-only infrastructure for businesses"
        ]
    },
    {
        topic: 1,
        question: "Which technology was a defining perception node element in early IoT systems due to its low cost, ubiquity, simplicity, and long life?",
        correct: "RFID",
        wrong: [
            "Bluetooth",
            "WiFi",
            "NFC",
            "Zigbee"
        ]
    },
    {
        topic: 1,
        question: "What does the network layer of the IoT primarily consist of?",
        correct: "Small cellular networks, LAN, and cloud networks",
        wrong: [
            "Physical sensors and actuators only",
            "User-facing applications and dashboards",
            "RFID tags and NFC chips",
            "Power supply units and batteries"
        ]
    },

    // ============================================
    // SECTION 2: COMMUNICATION PROTOCOLS (Questions 11-20)
    // ============================================
    {
        topic: 2,
        question: "MQTT is a lightweight messaging protocol commonly used in IoT. What communication model does it use?",
        correct: "Publish/subscribe model",
        wrong: [
            "Request/response model",
            "Peer-to-peer model",
            "Broadcast-only model",
            "Circuit-switched model"
        ]
    },
    {
        topic: 2,
        question: "Which of the following is a short-range, low-power wireless technology commonly used for IoT device pairing and data exchange?",
        correct: "Bluetooth Low Energy (BLE)",
        wrong: [
            "Wi-Fi Direct",
            "5G cellular",
            "Ethernet",
            "Satellite communication"
        ]
    },
    {
        topic: 2,
        question: "What is the primary difference between passive and active RFID tags?",
        correct: "Passive tags have no internal power; active tags have a battery",
        wrong: [
            "Active tags are smaller and cheaper",
            "Passive tags use WiFi while active tags use Bluetooth",
            "There is no difference",
            "Passive tags have batteries; active tags do not"
        ]
    },
    {
        topic: 2,
        question: "Why are RFID tags considered more concerning for privacy than traditional barcodes?",
        correct: "They can be scanned without line-of-sight, even through walls",
        wrong: [
            "They are more expensive than barcodes",
            "They are larger and more visible",
            "They only work in direct sunlight",
            "They cannot store any data"
        ]
    },
    {
        topic: 2,
        question: "CoAP (Constrained Application Protocol) is designed for which type of devices?",
        correct: "Resource-constrained IoT devices",
        wrong: [
            "High-performance servers",
            "Desktop computers",
            "Mobile phones with full OS",
            "Cloud-based virtual machines"
        ]
    },
    {
        topic: 2,
        question: "Zigbee is a wireless protocol commonly used in IoT. What is one of its key characteristics?",
        correct: "Low power consumption and mesh networking",
        wrong: [
            "High bandwidth video streaming",
            "Long-range satellite connectivity",
            "Requires a constant wired internet connection",
            "Only works with Apple devices"
        ]
    },
    {
        topic: 2,
        question: "In MQTT-based IoT systems, what role does a broker play?",
        correct: "It acts as an intermediary that receives messages from publishers and forwards them to subscribers",
        wrong: [
            "It stores all sensor data permanently",
            "It compiles source code for microcontrollers",
            "It provides a graphical user interface",
            "It physically connects sensors to actuators"
        ]
    },
    {
        topic: 2,
        question: "What is NFC (Near Field Communication) primarily used for in IoT applications?",
        correct: "Short-range communication, typically within a few centimeters, for tasks like contactless payments and access control",
        wrong: [
            "Long-range satellite communication",
            "High-speed internet browsing",
            "Powering large industrial machines",
            "Storing large databases"
        ]
    },
    {
        topic: 2,
        question: "Wi-Fi, Bluetooth, Zigbee, and LoRaWAN are all examples of what?",
        correct: "Wireless communication protocols used in IoT",
        wrong: [
            "Programming languages for IoT",
            "Types of sensors",
            "Database management systems",
            "Operating systems for embedded devices"
        ]
    },
    {
        topic: 2,
        question: "What is a key advantage of using MQTT over HTTP in IoT applications?",
        correct: "MQTT has a much smaller message overhead and is designed for low-bandwidth, unreliable networks",
        wrong: [
            "MQTT provides better encryption than HTTP",
            "MQTT is easier to debug than HTTP",
            "MQTT can only be used with cloud servers",
            "MQTT requires more bandwidth than HTTP"
        ]
    },

    // ============================================
    // SECTION 3: IoT ARCHITECTURE & HARDWARE (Questions 21-30)
    // ============================================
    {
        topic: 3,
        question: "What is the role of edge computing in IoT systems?",
        correct: "Processing data closer to where it is generated",
        wrong: [
            "Storing all data in a centralized cloud database",
            "Replacing all sensors with software simulations",
            "Transmitting all raw data directly to end users",
            "Eliminating the need for any network connectivity"
        ]
    },
    {
        topic: 3,
        question: "What is fog computing in the context of IoT?",
        correct: "Extends cloud computing to the edge of the network",
        wrong: [
            "A method for completely disconnecting IoT devices from the internet",
            "A type of hardware that replaces all sensors",
            "A protocol for encrypting WiFi connections",
            "A technique for reducing the number of actuators in a system"
        ]
    },
    {
        topic: 3,
        question: "What is the primary purpose of a microcontroller in an IoT device?",
        correct: "Process sensor data and control device operations",
        wrong: [
            "Provide a user-facing web interface",
            "Act as a long-range satellite transmitter",
            "Store large multimedia files",
            "Replace all network protocols"
        ]
    },
    {
        topic: 3,
        question: "Which of the following is commonly used as a single-board computer in IoT prototyping and education?",
        correct: "Raspberry Pi",
        wrong: [
            "Arduino Mega",
            "Intel Xeon processor",
            "NVIDIA GeForce GPU",
            "Samsung Galaxy smartphone"
        ]
    },
    {
        topic: 3,
        question: "What is the primary function of a sensor in an IoT system?",
        correct: "Detect and measure physical properties",
        wrong: [
            "Store large amounts of data",
            "Provide internet connectivity",
            "Display information to users",
            "Power the entire device"
        ]
    },
    {
        topic: 3,
        question: "An actuator in an IoT system is responsible for:",
        correct: "Performing a physical action based on commands or sensor data",
        wrong: [
            "Collecting data from the environment",
            "Encrypting network communications",
            "Storing historical data in the cloud",
            "Providing a user interface"
        ]
    },
    {
        topic: 3,
        question: "What is the role of a gateway in an IoT architecture?",
        correct: "Bridge communication between IoT devices and the cloud",
        wrong: [
            "Physically power all connected devices",
            "Act as the only sensor in the system",
            "Store all data locally without any cloud connection",
            "Replace the need for microcontrollers"
        ]
    },
    {
        topic: 3,
        question: "What is a typical advantage of using Docker containers in IoT software deployment?",
        correct: "Enable scalability, portability, and isolation of software components",
        wrong: [
            "Allow direct hardware access without any abstraction",
            "Reduce the need for any network connectivity",
            "Eliminate the need for programming",
            "Only work on Windows operating systems"
        ]
    },
    {
        topic: 3,
        question: "What is the purpose of a reverse proxy (such as NGINX) in an IoT web application?",
        correct: "Hide internal server components from public access",
        wrong: [
            "Directly control physical IoT devices",
            "Replace all sensors in the system",
            "Store sensor data locally",
            "Provide real-time video streaming only"
        ]
    },
    {
        topic: 3,
        question: "In remote IoT laboratory systems, what role does SSH (Secure Shell) typically play?",
        correct: "Provide a secure remote command-line connection to control devices",
        wrong: [
            "Stream high-definition video only",
            "Replace the need for any web interface",
            "It is a type of sensor protocol",
            "Provide a graphical desktop environment"
        ]
    },

    // ============================================
    // SECTION 4: SECURITY & PRIVACY (Questions 31-40)
    // ============================================
    {
        topic: 4,
        question: "According to Atzori et al., why is the IoT particularly vulnerable to attacks?",
        correct: "Components are unattended, communications are wireless, and components have limited resources",
        wrong: [
            "All IoT devices run on outdated operating systems",
            "IoT devices are physically indestructible",
            "IoT uses only wired connections",
            "IoT has too many security layers"
        ]
    },
    {
        topic: 4,
        question: "What is a DDoS (Distributed Denial of Service) attack in the context of IoT?",
        correct: "Many compromised IoT devices overwhelm a target with traffic",
        wrong: [
            "A method for encrypting IoT communications",
            "A protocol for connecting sensors to the cloud",
            "A type of sensor that detects intrusions",
            "A power-saving mode for IoT devices"
        ]
    },
    {
        topic: 4,
        question: "What is a major privacy concern associated with widespread IoT deployment?",
        correct: "Continuous and often invisible collection of personal data",
        wrong: [
            "IoT devices consume too much electricity",
            "IoT devices are too expensive for most consumers",
            "IoT devices require frequent physical maintenance",
            "IoT devices cannot connect to the internet"
        ]
    },
    {
        topic: 4,
        question: "The Patriot Act in the US raised concerns related to:",
        correct: "Government surveillance and potential intrusion into personal privacy",
        wrong: [
            "Regulating IoT device manufacturing",
            "Banning all wireless communications",
            "Mandating open-source software for all devices",
            "Taxing internet service providers"
        ]
    },
    {
        topic: 4,
        question: "Why was Edward Snowden's 2013 leak significant for IoT privacy discussions?",
        correct: "It revealed mass surveillance programs by the NSA",
        wrong: [
            "It proved that IoT devices could not be hacked",
            "It demonstrated that RFID tags were completely secure",
            "It showed that all internet traffic was already encrypted",
            "It led to the immediate ban of all IoT devices"
        ]
    },
    {
        topic: 4,
        question: "In IoT security, what is the role of encryption?",
        correct: "Protect data confidentiality and integrity during transmission",
        wrong: [
            "Increase the physical size of devices",
            "Speed up data processing on sensors",
            "Replace the need for authentication",
            "Reduce the power consumption of devices"
        ]
    },
    {
        topic: 4,
        question: "What concept describes the tension between IoT data collection and user privacy?",
        correct: "IoT requires personal information to function, creating tension between utility and privacy",
        wrong: [
            "IoT devices do not collect any personal data",
            "Privacy is not a concern for IoT because all data is anonymized",
            "All IoT data is stored exclusively on the user's device",
            "Governments have completely banned IoT data collection"
        ]
    },
    {
        topic: 4,
        question: "Which security principle is essential for IoT middleware?",
        correct: "Provide authentication, confidentiality, and access control across all network layers",
        wrong: [
            "Only protect the application layer",
            "Prioritize speed over security",
            "Avoid encryption to reduce latency",
            "Only protect data at rest, not in transit"
        ]
    },
    {
        topic: 4,
        question: "What is meant by 'invisible surveillance' in the context of IoT?",
        correct: "IoT devices collect and transmit user data without explicit knowledge or consent",
        wrong: [
            "Users can always see when their data is being collected",
            "IoT devices cannot collect personal data",
            "All IoT devices display a visible light when collecting data",
            "Invisible surveillance refers to physical security guards monitoring IoT installations"
        ]
    },
    {
        topic: 4,
        question: "What is a practical security measure to protect IoT systems from unauthorized access?",
        correct: "Combination of firewalls, reverse proxies, hidden internal networks, and encrypted communications",
        wrong: [
            "Making all devices publicly accessible for convenience",
            "Disabling all authentication mechanisms",
            "Using only one security layer",
            "Storing all credentials in plain text"
        ]
    },

    // ============================================
    // SECTION 5: AI, ML & DATA ANALYTICS (Questions 41-50)
    // ============================================
    {
        topic: 5,
        question: "YOLOv3 stands for 'You Only Look Once version 3'. What type of algorithm is it?",
        correct: "Deep learning object detection model",
        wrong: [
            "Data compression algorithm",
            "Network routing protocol",
            "Encryption standard",
            "Power management technique"
        ]
    },
    {
        topic: 5,
        question: "What is SSD (Single Shot Multibox Detector) used for in IoT and AI systems?",
        correct: "Real-time object detection in images and video feeds",
        wrong: [
            "Encrypting network communications",
            "Compressing sensor data",
            "Managing database queries",
            "Generating WiFi signals"
        ]
    },
    {
        topic: 5,
        question: "What is the NVIDIA Jetson Nano primarily used for in IoT applications?",
        correct: "AI inference and machine learning at the edge",
        wrong: [
            "Long-distance satellite communication",
            "High-voltage power generation",
            "Traditional web hosting",
            "Analog signal processing"
        ]
    },
    {
        topic: 5,
        question: "DBSCAN is a machine learning algorithm used for:",
        correct: "Density-based spatial clustering and anomaly detection",
        wrong: [
            "Encrypting data transmissions",
            "Compressing image files",
            "Managing database connections",
            "Generating random numbers"
        ]
    },
    {
        topic: 5,
        question: "AI-based traffic congestion management systems have reported success rates of up to:",
        correct: "97% in traffic congestion management",
        wrong: [
            "50%",
            "75%",
            "85%",
            "100%"
        ]
    },
    {
        topic: 5,
        question: "In IoT applications, what is the purpose of a frame selection algorithm?",
        correct: "Optimize data transmission by reducing bandwidth and power consumption",
        wrong: [
            "Detect license plates on vehicles",
            "Control traffic lights directly",
            "Charge drone batteries",
            "Broadcast traffic updates to mobile phones"
        ]
    },
    {
        topic: 5,
        question: "MATLAB Simulink is commonly used in IoT for:",
        correct: "System simulation, modeling, and testing before physical deployment",
        wrong: [
            "Manufacturing physical hardware components",
            "Providing cloud storage for sensor data",
            "Managing social media accounts",
            "Designing user interface layouts"
        ]
    },
    {
        topic: 5,
        question: "What is the role of machine learning in smart traffic management?",
        correct: "Analyze traffic patterns and predict congestion for dynamic signal optimization",
        wrong: [
            "Physically control traffic lights with a human operator",
            "Replace all cameras with radar sensors",
            "Store historical traffic data indefinitely",
            "Broadcast radio signals to vehicles"
        ]
    },
    {
        topic: 5,
        question: "A congestion-level-based dynamic traffic management study demonstrated a ___ reduction in traffic congestion.",
        correct: "35%",
        wrong: [
            "90%",
            "50%",
            "20%",
            "5%"
        ]
    },
    {
        topic: 5,
        question: "What is a key benefit of integrating AI with drone-based traffic monitoring?",
        correct: "Enabling real-time vehicle detection and traffic flow analysis from aerial perspectives",
        wrong: [
            "Eliminating the need for traffic lights entirely",
            "Reducing the speed limit on all roads",
            "Replacing all ground-based sensors",
            "Broadcasting music to drivers"
        ]
    },

    // ============================================
    // SECTION 6: HARDWARE & IMPLEMENTATION (Questions 51-60)
    // ============================================
    {
        topic: 6,
        question: "What hardware components are commonly used in smart traffic management IoT systems?",
        correct: "Arduino, NodeMCU, Raspberry Pi, IR sensors, RFID readers, cameras, and displays",
        wrong: [
            "Only smartphones and Bluetooth modules",
            "Only laptops and WiFi routers",
            "Only desktop computers and printers",
            "Only gaming consoles and VR headsets"
        ]
    },
    {
        topic: 6,
        question: "How do IR sensors measure traffic density?",
        correct: "By detecting interruptions in an infrared beam",
        wrong: [
            "By measuring the speed of individual vehicles",
            "By counting license plates optically",
            "By using GPS tracking of each vehicle",
            "By measuring exhaust emissions"
        ]
    },
    {
        topic: 6,
        question: "NFC technology enables emergency vehicle priority by:",
        correct: "Using NFC tags on emergency vehicles detected by readers at traffic signals",
        wrong: [
            "Sending email alerts to traffic controllers",
            "Broadcasting loud sirens to all nearby vehicles",
            "Physically changing traffic light hardware",
            "Disabling all other traffic signals permanently"
        ]
    },
    {
        topic: 6,
        question: "Which of the following is a real-time operating advantage of using Raspberry Pi in IoT systems?",
        correct: "Ability to run lightweight Linux-based OS with support for multiple programming languages",
        wrong: [
            "Ability to function without any power supply",
            "Ability to directly connect to satellites",
            "Ability to replace all network infrastructure",
            "Ability to operate only with proprietary software"
        ]
    },
    {
        topic: 6,
        question: "What is the ARTEMIS system in traffic management?",
        correct: "Autonomous and Real-Time signal control based on Estimation of traffic demand for Minimization of Signal waiting time",
        wrong: [
            "A weather forecasting system",
            "An autonomous vehicle navigation system",
            "An emergency response drone platform",
            "A social media traffic alert application"
        ]
    },
    {
        topic: 6,
        question: "What was the main advantage of the PV (solar-powered) IoT traffic management system?",
        correct: "Reductions in fuel consumption and enhanced traffic flow efficiency through sustainable solar-powered design",
        wrong: [
            "Higher vehicle speed limits on all roads",
            "Complete elimination of all traffic signals",
            "Reduced cost of purchasing vehicles",
            "Increased parking space availability"
        ]
    },
    {
        topic: 6,
        question: "How does the drone-based traffic system address bandwidth and power limitations?",
        correct: "Using a frame selection algorithm that reduces data transmission while maintaining image quality",
        wrong: [
            "Storing all video locally on the drone indefinitely",
            "Using high-capacity external batteries only",
            "Relying solely on wired connections",
            "Transmitting only at low resolution with no optimization"
        ]
    },
    {
        topic: 6,
        question: "The KLT (Kanade-Lucas-Tomasi) feature tracker is used for:",
        correct: "Vehicle detection and tracking through image feature matching in video feeds",
        wrong: [
            "Encrypting network traffic",
            "Generating WiFi signals",
            "Compressing sensor data",
            "Managing cloud databases"
        ]
    },
    {
        topic: 6,
        question: "A hybrid approach combining centralized and decentralized systems with traffic density data from cameras and sensors was used by:",
        correct: "Javaid et al. in their Smart Traffic Management System",
        wrong: [
            "NASA for space traffic control",
            "Amazon for warehouse management",
            "Google for internet routing",
            "Tesla for autonomous driving"
        ]
    },
    {
        topic: 6,
        question: "What is a key limitation of existing traffic systems that smart IoT systems aim to address?",
        correct: "Their inability to effectively handle emergency vehicle prioritization and vulnerability to hacking",
        wrong: [
            "Their excessive use of solar power",
            "Their reliance on satellite navigation for all functions",
            "Their inability to detect bicycles",
            "Their high cost of standard LED traffic lights"
        ]
    }
];

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let currentAnswers = [];
let selectedAnswer = null;
let allResults = [];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const progressFill = document.getElementById('progress');
const finalScore = document.getElementById('final-score');
const scoreMessage = document.getElementById('score-message');
const resultIcon = document.getElementById('result-icon');
const topicIndicator = document.getElementById('topic-indicator');
const reviewContainer = document.getElementById('review-container');
const totalQuestionsEl = document.getElementById('total-questions');

totalQuestionsEl.textContent = quizData.length;

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function getTopicName(topicNum) {
    switch(topicNum) {
        case 1: return 'IoT Fundamentals';
        case 2: return 'Communication Protocols';
        case 3: return 'Architecture & Hardware';
        case 4: return 'Security & Privacy';
        case 5: return 'AI, ML & Analytics';
        case 6: return 'Implementation & Applications';
        default: return 'General';
    }
}

function getTopicClass(topicNum) {
    switch(topicNum) {
        case 1: return 'topic-1';
        case 2: return 'topic-2';
        case 3: return 'topic-3';
        case 4: return 'topic-4';
        case 5: return 'topic-5';
        case 6: return 'topic-6';
        default: return 'topic-1';
    }
}

// Initialize quiz
function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    allResults = [];
    currentAnswers = [];
    scoreDisplay.textContent = 'Score: 0';

    // Shuffle questions
    shuffledQuestions = shuffleArray(quizData);

    // For each question, shuffle the answer options
    shuffledQuestions.forEach(q => {
        const allAnswers = [q.correct, ...q.wrong];
        const shuffledAnswers = shuffleArray(allAnswers);
        currentAnswers.push({
            question: q.question,
            answers: shuffledAnswers,
            correct: q.correct,
            topic: q.topic
        });
    });

    document.getElementById('total-questions').textContent = quizData.length;
}

// Display current question
function displayQuestion() {
    const currentQ = currentAnswers[currentQuestionIndex];
    questionText.textContent = currentQ.question;

    // Update topic indicator
    topicIndicator.textContent = getTopicName(currentQ.topic);
    topicIndicator.className = 'topic-indicator ' + getTopicClass(currentQ.topic);

    // Clear previous answers
    answersContainer.innerHTML = '';

    // Create answer buttons
    currentQ.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.dataset.answer = answer;
        button.addEventListener('click', () => selectAnswer(button, answer));
        answersContainer.appendChild(button);
    });

    // Update progress
    questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${currentAnswers.length}`;
    const progressPercent = ((currentQuestionIndex) / currentAnswers.length) * 100;
    progressFill.style.width = `${progressPercent}%`;

    // Reset selected answer
    selectedAnswer = null;
    nextBtn.disabled = true;
}

// Handle answer selection
function selectAnswer(button, answer) {
    // Remove previous selection
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Mark selected
    button.classList.add('selected');
    selectedAnswer = answer;
    nextBtn.disabled = false;
}

// Show correct/incorrect feedback
function showFeedback(isCorrect, selectedBtn, correctBtn) {
    if (isCorrect) {
        selectedBtn.classList.add('correct');
    } else {
        selectedBtn.classList.add('incorrect');
        correctBtn.classList.add('reveal-correct');
    }
}

// Move to next question or show results
function nextQuestion() {
    const currentQ = currentAnswers[currentQuestionIndex];
    const selectedBtn = document.querySelector('.answer-btn.selected');
    const correctBtn = Array.from(document.querySelectorAll('.answer-btn'))
        .find(btn => btn.dataset.answer === currentQ.correct);

    // Check if answer is correct
    const isCorrect = selectedAnswer === currentQ.correct;
    if (isCorrect) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }

    // Save result for review
    allResults.push({
        question: currentQ.question,
        selected: selectedAnswer,
        correct: currentQ.correct,
        isCorrect: isCorrect,
        topic: currentQ.topic
    });

    // Show feedback
    showFeedback(isCorrect, selectedBtn, correctBtn);

    // Disable all buttons
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
    });

    // Wait before moving to next question
    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < currentAnswers.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }, 1200);
}

// Display final results
function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    const percentage = Math.round((score / currentAnswers.length) * 100);
    finalScore.textContent = `${score} / ${currentAnswers.length}`;

    if (percentage === 100) {
        resultIcon.textContent = '🏆';
        scoreMessage.textContent = "Perfect! You're an IoT master! Excellent knowledge across all topics!";
    } else if (percentage >= 80) {
        resultIcon.textContent = '🌟';
        scoreMessage.textContent = "Excellent! You have strong IoT knowledge. Keep up the great work!";
    } else if (percentage >= 60) {
        resultIcon.textContent = '👍';
        scoreMessage.textContent = "Good job! You have a solid understanding of IoT concepts. Review the areas you missed.";
    } else if (percentage >= 40) {
        resultIcon.textContent = '📖';
        scoreMessage.textContent = "Not bad, but there's room for improvement. Review the materials and try again!";
    } else {
        resultIcon.textContent = '💪';
        scoreMessage.textContent = "Keep studying! Review all the materials carefully and try again.";
    }

    // Build review section
    buildReview();
}

function buildReview() {
    reviewContainer.innerHTML = '';
    allResults.forEach((result, index) => {
        const item = document.createElement('div');
        item.className = 'review-item';

        const qNum = index + 1;
        const topicLabel = getTopicName(result.topic);

        if (result.isCorrect) {
            item.innerHTML = `
                <div class="review-q">✅ Q${qNum} [${topicLabel}] ${result.question}</div>
                <div class="review-a">Your answer: ${result.selected}</div>
            `;
        } else {
            item.innerHTML = `
                <div class="review-q">❌ Q${qNum} [${topicLabel}] ${result.question}</div>
                <div class="review-wrong">Your answer: ${result.selected}</div>
                <div class="review-a">Correct answer: ${result.correct}</div>
            `;
        }
        reviewContainer.appendChild(item);
    });
}

function showAllAnswers() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    buildReview();
    reviewContainer.scrollTop = 0;
}

// Event Listeners
startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    initQuiz();
    displayQuestion();
});

nextBtn.addEventListener('click', nextQuestion);

restartBtn.addEventListener('click', () => {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
    currentAnswers = [];
    shuffledQuestions = [];
});

reviewBtn.addEventListener('click', showAllAnswers);