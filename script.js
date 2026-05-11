// IoT Reviewer Quiz - 60 Questions (20 per PDF material)
// Material 1: Design & Implementation of Next-Gen Remote Lab for IoT & Industry 4.0
// Material 2: The Internet of Things: Education and Technology
// Material 3: Smart Traffic Management Using IoT

const quizData = [
    // ============================================
    // MATERIAL 1: Remote Lab for IoT & Industry 4.0 (Questions 1-20)
    // ============================================
    {
        topic: 1,
        question: "What is the primary purpose of the VREL NextGen remote laboratory infrastructure?",
        correct: "To provide hands-on IoT learning without requiring physical access to hardware",
        wrong: [
            "To replace traditional classroom lectures entirely",
            "To provide free internet access to students",
            "To serve as a social media platform for engineers",
            "To store large datasets for machine learning"
        ]
    },
    {
        topic: 1,
        question: "Which European Commission-funded projects supported the development of VREL NextGen?",
        correct: "IOT-OPEN.EU (2016-2019) and IOT-OPEN.EU Reloaded (2022-2025)",
        wrong: [
            "Horizon 2020 and Digital Europe Programme",
            "ERASMUS+ and Marie Curie Actions",
            "IOT-OPEN.EU (2016-2019) only",
            "SmartCAMPUS and IoT4Industry"
        ]
    },
    {
        topic: 1,
        question: "What are the three main components of the VREL NextGen software architecture?",
        correct: "Frontend, Backend, and Compiler Services",
        wrong: [
            "Database, Web Server, and API Gateway",
            "Client, Server, and Cloud Storage",
            "IoT Hub, Message Broker, and Dashboard",
            "Sensor Layer, Network Layer, and Application Layer"
        ]
    },
    {
        topic: 1,
        question: "How does the VREL NextGen system deliver video streams to users?",
        correct: "As embedded IFRAME in the browser via MJPEG over HTTPS from webcam servers",
        wrong: [
            "Through WebRTC peer-to-peer connections",
            "Via downloadable video files",
            "Using UDP multicast streams",
            "Through email attachments"
        ]
    },
    {
        topic: 1,
        question: "What role does the Raspberry Pi play in the VREL NextGen laboratory node architecture?",
        correct: "It acts as a fog-class proxy device that communicates with the end-node IoT device via SSH",
        wrong: [
            "It serves as the main web server for the frontend",
            "It stores all user data in a PostgreSQL database",
            "It runs the Compiler Service directly",
            "It functions as the primary MQTT broker"
        ]
    },
    {
        topic: 1,
        question: "What communication protocol and port does the global MQTT broker in VREL NextGen use?",
        correct: "MQTT over SSL/TLS on port 8883",
        wrong: [
            "HTTP on port 80",
            "CoAP on port 5683",
            "WebSocket on port 443",
            "AMQP on port 5672"
        ]
    },
    {
        topic: 1,
        question: "What is the primary function of NodeRED in the VREL NextGen integration services?",
        correct: "To bind local IoT networks with local Internet, including CoAP to MQTT protocol translation",
        wrong: [
            "To compile user source code",
            "To manage user authentication",
            "To store video recordings",
            "To generate certificates for SSL"
        ]
    },
    {
        topic: 1,
        question: "How are laboratory nodes organized in VREL NextGen for user access management?",
        correct: "Devices are organized into 'laboratories' (groups), and user groups are assigned to laboratories",
        wrong: [
            "Each user gets exclusive access to one device permanently",
            "Devices are assigned randomly on a first-come basis",
            "All devices are shared publicly without restrictions",
            "Laboratories are organized by geographic location only"
        ]
    },
    {
        topic: 1,
        question: "What is the typical booking time limit for a publicly available device in VREL NextGen?",
        correct: "Two hours",
        wrong: [
            "30 minutes",
            "45 minutes",
            "One hour",
            "Unlimited"
        ]
    },
    {
        topic: 1,
        question: "What platform does the default configuration of VREL NextGen utilise for programming?",
        correct: "PlatformIO and the Arduino framework",
        wrong: [
            "Eclipse IDE with GCC",
            "Visual Studio with .NET",
            "Jupyter Notebooks with Python",
            "Keil µVision with ARM compiler"
        ]
    },
    {
        topic: 1,
        question: "What database system is used for persistent storage in the VREL NextGen Backend?",
        correct: "PostgreSQL",
        wrong: [
            "MySQL",
            "MongoDB",
            "SQLite",
            "Redis"
        ]
    },
    {
        topic: 1,
        question: "What security measure hides the VREL NextGen software components from public access?",
        correct: "An NGINX reverse proxy combined with a firewall and hidden internal network",
        wrong: [
            "VPN-only access for all users",
            "SSL certificates on every device",
            "Physical security locks on hardware",
            "Biometric authentication"
        ]
    },
    {
        topic: 1,
        question: "In the VREL NextGen use-case scenario, what is the correct order of steps after registration?",
        correct: "Book a device → Author code → Compile → Upload → Observe results",
        wrong: [
            "Author code → Book a device → Compile → Upload → Observe results",
            "Login → Compile → Book a device → Upload → Observe results",
            "Book a device → Upload → Author code → Compile → Observe results",
            "Register → Compile → Author code → Upload → Observe results"
        ]
    },
    {
        topic: 1,
        question: "Why does the VREL NextGen compiler service use Docker-based containerisation?",
        correct: "To enable scalability by offloading components to different hardware and enable parallel compilation",
        wrong: [
            "To reduce the size of compiled programs",
            "To make the system work offline",
            "To improve the security of student data",
            "To provide a graphical user interface"
        ]
    },
    {
        topic: 1,
        question: "What type of network is used internally between VREL NextGen software components?",
        correct: "A separate internal (non-routed) IOT network",
        wrong: [
            "The public Internet directly",
            "A Bluetooth mesh network",
            "A dedicated satellite link",
            "A 5G cellular network"
        ]
    },
    {
        topic: 1,
        question: "How does the system ensure scalability for handling varying numbers of concurrent users?",
        correct: "Docker-based containerisation for horizontal scaling and parallelised stateless compiler services",
        wrong: [
            "By limiting users to 20 at a time",
            "By using a single powerful server",
            "By queuing all compilation requests sequentially",
            "By requiring students to schedule time slots"
        ]
    },
    {
        topic: 1,
        question: "What is the purpose of the MQTT bridge in the VREL global network infrastructure?",
        correct: "To interconnect local MQTT brokers across different countries and enable cross-border laboratory integration",
        wrong: [
            "To provide a backup power supply",
            "To translate programming languages",
            "To store video stream recordings",
            "To register new student accounts"
        ]
    },
    {
        topic: 1,
        question: "How does the compiler service communicate with the fog-class laboratory node?",
        correct: "Remotely via SSH exposed by the Raspberry Pi proxy",
        wrong: [
            "Through Bluetooth pairing",
            "Via USB cable directly",
            "Using infrared signals",
            "Through a serial COM port"
        ]
    },
    {
        topic: 1,
        question: "What happens to the compilation results after the code is successfully compiled?",
        correct: "The compiled code can be uploaded to the device to flash memory, reconfigure it, or perform other necessary actions",
        wrong: [
            "Results are emailed to the student",
            "The code is deleted automatically",
            "Results are printed by a connected printer",
            "The device restarts without any code upload"
        ]
    },
    {
        topic: 1,
        question: "What does each laboratory node contain in terms of IoT device architecture?",
        correct: "An edge (end-node) IoT device connected via USB to a Raspberry Pi proxy",
        wrong: [
            "Multiple Raspberry Pi units with no edge device",
            "Only a standalone Arduino without any proxy",
            "A smartphone connected via Bluetooth",
            "A laptop running local simulation software"
        ]
    },

    // ============================================
    // MATERIAL 2: IoT in Education & Technology (Questions 21-40)
    // ============================================
    {
        topic: 2,
        question: "Who is widely credited with coining the term 'Internet of Things'?",
        correct: "Kevin Ashton at the end of the twentieth century",
        wrong: [
            "Bill Gates in 1995",
            "Steve Jobs in 2000",
            "Tim Berners-Lee in 1991",
            "Vint Cerf in 1988"
        ]
    },
    {
        topic: 2,
        question: "According to the three-layer IoT model, which layer consists of RFID tags, sensors, and actuators?",
        correct: "The physical layer",
        wrong: [
            "The network layer",
            "The application layer",
            "The middleware layer",
            "The cloud layer"
        ]
    },
    {
        topic: 2,
        question: "What is the key function of middleware in IoT systems?",
        correct: "To enable communication and management of data between different devices and protocols",
        wrong: [
            "To physically connect devices with cables",
            "To power IoT devices wirelessly",
            "To store all IoT data permanently",
            "To replace the need for sensors"
        ]
    },
    {
        topic: 2,
        question: "According to the Curtin University study, what percentage of students identified as having a disability in 2014?",
        correct: "5.8%",
        wrong: [
            "10.2%",
            "15%",
            "22.8%",
            "43.0%"
        ]
    },
    {
        topic: 2,
        question: "What was the most commonly reported disability type among Curtin University survey respondents?",
        correct: "Mental illness (43.0%)",
        wrong: [
            "Vision impairment (13.2%)",
            "Hearing impairment (6.1%)",
            "Mobility impairment (22.8%)",
            "Learning disability (26.3%)"
        ]
    },
    {
        topic: 2,
        question: "According to the IoT literature review, what are the four essential characteristics of an IoT 'thing'?",
        correct: "Data collection/transmission, action-based responses, ability to receive information, and communication support",
        wrong: [
            "Being wireless, having AI, being mobile, and having a screen",
            "Having Bluetooth, WiFi, NFC, and RFID",
            "Being portable, rechargeable, waterproof, and smart",
            "Having a battery, a sensor, a camera, and GPS"
        ]
    },
    {
        topic: 2,
        question: "What was one of the key recommendations from the Curtin University study regarding IoT in education?",
        correct: "Any IoT equipment associated with learning should provide output via a learning management system or app",
        wrong: [
            "IoT should be banned from university campuses",
            "All students must purchase IoT devices",
            "IoT should only be used in engineering courses",
            "Lecturers should control all IoT devices remotely"
        ]
    },
    {
        topic: 2,
        question: "According to the study, what was students with disabilities' preferred smartphone platform?",
        correct: "Android devices",
        wrong: [
            "iPhones",
            "Windows phones",
            "Basic feature phones",
            "Tablets only"
        ]
    },
    {
        topic: 2,
        question: "The IoT report identifies RFID tags as a concern for privacy because they can do what?",
        correct: "Broadcast data without the knowledge of the individual possessing the tagged object",
        wrong: [
            "Only work within line-of-sight",
            "Require frequent battery replacement",
            "Are too expensive for widespread use",
            "Only function in cold temperatures"
        ]
    },
    {
        topic: 2,
        question: "According to Atzori et al., why is the IoT vulnerable to attacks?",
        correct: "Because components are often unattended, communications are wireless (eavesdropping is easy), and components have low energy/computing resources",
        wrong: [
            "Because all IoT devices run on outdated operating systems",
            "Because IoT devices are physically indestructible",
            "Because IoT uses only wired connections",
            "Because IoT has too many security layers"
        ]
    },
    {
        topic: 2,
        question: "What was LG's Digital DIOS Refrigerator (2000) an early example of?",
        correct: "An early IoT device that connected an ordinary household item to the internet",
        wrong: [
            "A successful commercial IoT product",
            "A smart campus management tool",
            "The first smartphone with IoT capabilities",
            "A cloud computing platform for IoT"
        ]
    },
    {
        topic: 2,
        question: "According to Mitew (2014), what does IoT stand for in terms of connecting objects?",
        correct: "The connection of usually trivial material objects to the internet — ranging from toothbrushes to shoes or umbrellas",
        wrong: [
            "The interconnection of only industrial machines",
            "A network exclusively for mobile phones",
            "A protocol for satellite communication",
            "A framework for quantum computing"
        ]
    },
    {
        topic: 2,
        question: "What is the difference between active and passive RFID tags?",
        correct: "Passive tags have no internal power supply and are powered by the reader's radio waves; active tags have an onboard battery",
        wrong: [
            "Active tags are smaller and cheaper than passive tags",
            "Passive tags use WiFi while active tags use Bluetooth",
            "There is no difference — both terms mean the same thing",
            "Passive tags have batteries; active tags do not"
        ]
    },
    {
        topic: 2,
        question: "What does the IoT application layer primarily deal with?",
        correct: "Apps and digital communication technology that users interact with (e.g., Alexa, Google Home, Fitbit)",
        wrong: [
            "Physical sensors and actuators",
            "WiFi and Bluetooth protocols",
            "RFID tag manufacturing",
            "Hardware power management"
        ]
    },
    {
        topic: 2,
        question: "The report recommends that Curtin University should do what regarding IoT deployment?",
        correct: "Not immediately deploy IoT technologies, but undertake careful consideration, planning, and further research first",
        wrong: [
            "Immediately deploy IoT in all classrooms",
            "Only use IoT in the engineering faculty",
            "Ban all IoT devices from campus",
            "Replace all lecturers with IoT automation"
        ]
    },
    {
        topic: 2,
        question: "Why are RFID tags considered more concerning for privacy than barcodes?",
        correct: "Because RFID can be scanned without line-of-sight, even through walls and doors, without the owner's knowledge",
        wrong: [
            "Because RFID tags are more expensive than barcodes",
            "Because RFID tags are larger and more visible",
            "Because RFID only works in direct sunlight",
            "Because RFID cannot store any data"
        ]
    },
    {
        topic: 2,
        question: "What did students with disabilities in the study identify as a widespread concern about lecturers?",
        correct: "Lecturers are often unaware of access needs and believe that 'if it is digital it is accessible'",
        wrong: [
            "Lecturers overuse IoT devices in class",
            "Lecturers refuse to use any technology",
            "Lecturers charge extra for accessible materials",
            "Lecturers always prefer Apple products"
        ]
    },
    {
        topic: 2,
        question: "According to the students interviewed in the study, how did they feel about the IoT's stage of development?",
        correct: "They felt the IoT is in a very early stage and its possible uses and practicalities are unclear",
        wrong: [
            "They believed IoT was fully mature and widely deployed",
            "They thought IoT was only useful for entertainment",
            "They considered IoT irrelevant to education",
            "They preferred traditional pen-and-paper methods"
        ]
    },
    {
        topic: 2,
        question: "What is the concept of a 'smart campus' as described in the IoTEducation paper?",
        correct: "An IoT-enabled campus that gathers data on student movement and attendance to provide analytics and a responsive digital learning environment",
        wrong: [
            "A campus with only online courses",
            "A campus powered entirely by solar energy",
            "A campus where students live in smart homes",
            "A campus with no physical buildings"
        ]
    },
    {
        topic: 2,
        question: "What did the study recommend regarding future IoT implementations and personal smartphones?",
        correct: "Any future implementation should focus around personal smartphones as the primary IoT interface device for students with disabilities",
        wrong: [
            "Universities should provide all IoT hardware to students",
            "Smartphones should be banned in classrooms",
            "IoT should only work with desktop computers",
            "Students should use tablets instead of smartphones"
        ]
    },

    // ============================================
    // MATERIAL 3: Smart Traffic Management Using IoT (Questions 41-60)
    // ============================================
    {
        topic: 3,
        question: "What is the primary objective of smart traffic management systems using IoT?",
        correct: "To dynamically optimize traffic flow and reduce congestion using real-time vehicle density data",
        wrong: [
            "To increase the number of traffic lights in a city",
            "To monitor pedestrian movements only",
            "To reduce fuel prices",
            "To enforce speed limits automatically"
        ]
    },
    {
        topic: 3,
        question: "Which deep learning model is used in the YOLOv3 vehicle detection system for traffic monitoring?",
        correct: "YOLOv3 (You Only Look Once version 3)",
        wrong: [
            "ResNet-50",
            "VGG-16",
            "LSTM",
            "Random Forest"
        ]
    },
    {
        topic: 3,
        question: "What hardware components are used in the smart traffic management system's implementation?",
        correct: "Arduino, NodeMCU, Raspberry Pi, IR sensors, RFID reader, camera module, and LCD display",
        wrong: [
            "Only Raspberry Pi and cameras",
            "Only smartphones and Bluetooth modules",
            "Only laptops and WiFi routers",
            "Only Arduino and LED lights"
        ]
    },
    {
        topic: 3,
        question: "How does the IR sensor-based system measure traffic density?",
        correct: "By monitoring interruptions in the infrared beam — higher frequency of interruptions indicates higher traffic density",
        wrong: [
            "By measuring the speed of vehicles",
            "By counting license plates",
            "By using GPS tracking",
            "By measuring exhaust emissions"
        ]
    },
    {
        topic: 3,
        question: "What technology is used for emergency vehicle priority in the smart traffic system?",
        correct: "NFC (Near Field Communication) — emergency vehicles carry NFC tags detected by readers at traffic signals",
        wrong: [
            "Bluetooth Low Energy (BLE)",
            "WiFi Direct",
            "Infrared remote control",
            "Satellite GPS"
        ]
    },
    {
        topic: 3,
        question: "Which of the following is NOT one of the four parts of the system methodology?",
        correct: "Cloud-only data storage without local processing",
        wrong: [
            "YOLOv3 Vehicle Detection System",
            "IR Sensor-Based Traffic Density Measurement",
            "NFC-Based Emergency Vehicle Priority"
        ]
    },
    {
        topic: 3,
        question: "What was the reported success rate of AI-based traffic congestion management in the referenced studies?",
        correct: "97%",
        wrong: [
            "85%",
            "90%",
            "75%",
            "100%"
        ]
    },
    {
        topic: 3,
        question: "The ARTEMIS system stands for what?",
        correct: "Autonomous and Real-Time signal control based on Estimation of traffic demand for Minimization of Signal waiting time",
        wrong: [
            "Automated Road Traffic and Environmental Monitoring Intelligence System",
            "AI-based Real-time Traffic Emergency Management and Information System",
            "Automatic Route Evaluation and Monitoring for Intelligent Signals",
            "Autonomous Road Traffic Electronic Monitoring and Information System"
        ]
    },
    {
        topic: 3,
        question: "What was a key result of the congestion-level-based dynamic traffic management study?",
        correct: "A 35% reduction in traffic congestion with a dynamic and responsive approach",
        wrong: [
            "A 90% reduction in traffic accidents",
            "Complete elimination of traffic congestion",
            "A 50% increase in traffic speed",
            "A 20% increase in fuel consumption"
        ]
    },
    {
        topic: 3,
        question: "In the drone and AI-based traffic management system, what is the purpose of the frame selection algorithm?",
        correct: "To optimize data transmission efficiency by reducing bandwidth and power consumption",
        wrong: [
            "To detect license plates of vehicles",
            "To control traffic lights directly",
            "To charge the drone's battery",
            "To broadcast traffic updates to phones"
        ]
    },
    {
        topic: 3,
        question: "Which of the following technologies was used by Javaid et al. in their Smart Traffic Management System?",
        correct: "A hybrid approach combining centralized and decentralized systems with traffic density data from cameras and sensors",
        wrong: [
            "Only ultrasonic sensors with no camera input",
            "Satellite-based GPS tracking exclusively",
            "Manual traffic police direction",
            "Magnetic loop detectors embedded in roads"
        ]
    },
    {
        topic: 3,
        question: "In the study by Md. Imran Uddin et al., what hardware was used for AI and machine learning tasks?",
        correct: "NVIDIA Jetson Nano",
        wrong: [
            "Google Coral TPU",
            "Intel Neural Compute Stick",
            "Arduino Mega 2560",
            "Raspberry Pi 3 Model B"
        ]
    },
    {
        topic: 3,
        question: "What object detection method was used in the NVIDIA Jetson Nano traffic system?",
        correct: "SSD (Single Shot Multibox Detector)",
        wrong: [
            "Haar Cascades",
            "HOG + SVM",
            "Template matching",
            "Background subtraction"
        ]
    },
    {
        topic: 3,
        question: "According to the study by Mansoor Akhtar et al., what software was used for data processing and communication?",
        correct: "Node-Red software",
        wrong: [
            "Apache Kafka",
            "TensorFlow Lite",
            "Microsoft Azure IoT Hub",
            "Node.js without Node-Red"
        ]
    },
    {
        topic: 3,
        question: "What communication protocol did the NodeMCU Wi-Fi transmitter use to send data to the Raspberry Pi?",
        correct: "Wi-Fi (wireless data transmission)",
        wrong: [
            "Bluetooth 5.0",
            "Zigbee",
            "LoRaWAN",
            "Infrared"
        ]
    },
    {
        topic: 3,
        question: "What was the main advantage of the PV (solar-powered) IoT traffic management system proposed by Amer and Maher?",
        correct: "Reductions in fuel consumption and enhanced traffic flow efficiency through solar-powered sustainable design",
        wrong: [
            "Higher vehicle speed limits",
            "Complete elimination of traffic signals",
            "Reduced cost of vehicles",
            "Increased parking space availability"
        ]
    },
    {
        topic: 3,
        question: "According to Shamitha et al.'s study, what machine learning algorithm was used for anomaly detection in traffic?",
        correct: "DBSCAN (Density-Based Spatial Clustering of Applications with Noise)",
        wrong: [
            "K-Means Clustering",
            "Linear Regression",
            "Decision Trees",
            "Neural Networks"
        ]
    },
    {
        topic: 3,
        question: "How does the drone-based traffic system deal with bandwidth and power limitations?",
        correct: "By using a frame selection algorithm that reduces data transmission while maintaining image quality",
        wrong: [
            "By storing all video locally on the drone",
            "By increasing the drone's battery capacity",
            "By using wired connections from the drone",
            "By transmitting at lower resolution only"
        ]
    },
    {
        topic: 3,
        question: "What software was used for simulation and testing in the PV/IoT traffic management system?",
        correct: "MATLAB Simulink and AnyLogic software",
        wrong: [
            "AutoCAD and SolidWorks",
            "Python and Jupyter Notebooks",
            "Unity and Unreal Engine",
            "SUMO only"
        ]
    },
    {
        topic: 3,
        question: "According to the Abdul Kadar Muhammad Masum et al. study, how is data transmitted to the cloud server?",
        correct: "Via Wi-Fi transmission",
        wrong: [
            "Via Bluetooth Low Energy",
            "Via satellite communication",
            "Via NFC tags",
            "Via Ethernet cables"
        ]
    },
    {
        topic: 3,
        question: "What additional feature does the intelligent traffic system include besides traffic signal optimization?",
        correct: "Detection and response to traffic signal hacking for enhanced security",
        wrong: [
            "Automatic parking ticket generation",
            "Weather prediction integration",
            "Social media monitoring",
            "Air quality measurement"
        ]
    },
    {
        topic: 3,
        question: "According to the literature survey, what was a major limitation of existing traffic systems that smart IoT systems aim to address?",
        correct: "Their inability to effectively handle emergency vehicle prioritization and vulnerability to hacking",
        wrong: [
            "Their excessive use of solar power",
            "Their reliance on satellite navigation",
            "Their inability to detect bicycles",
            "Their high cost of LED traffic lights"
        ]
    },
    {
        topic: 3,
        question: "In the Point Tracker Algorithm-based system, what is used for vehicle detection?",
        correct: "Gaussian smoothing for image pre-processing combined with the Kanade-Lucas-Tomasi (KLT) feature tracker",
        wrong: [
            "Sobel edge detection with Canny filters",
            "Color histogram analysis",
            "GPS triangulation",
            "Radio frequency identification"
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
        case 1: return 'Remote Lab & Industry 4.0';
        case 2: return 'IoT in Education';
        case 3: return 'Smart Traffic Management';
        default: return 'General';
    }
}

function getTopicClass(topicNum) {
    switch(topicNum) {
        case 1: return 'topic-1';
        case 2: return 'topic-2';
        case 3: return 'topic-3';
        default: return 'topic-1';
    }
}

// Initialize quiz
function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    allResults = [];
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
        scoreMessage.textContent = "Keep studying! Review all three materials carefully and try again.";
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