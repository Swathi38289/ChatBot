document.addEventListener('DOMContentLoaded', function() {
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const chatOutput = document.getElementById('chatOutput');

    const knowledgeBase = {
        address: "SEA College of Engineering and Technology, #16, 11th Cross, 1st Phase, J.P. Nagar, Bangalore – 560078",
        courses: "B.E. in CSE, ECE, ME, CE. M.Tech in Structural Engineering, Computer Science, Machine Design",
        fees: "Approximate fees: ₹60,000 – ₹1,50,000 per year (varies by quota)",
        website: "https://seacet.edu.in/",
        contact: "Phone: +91 80 26581234 | Email: info@seacet.edu.in",
        scholarship: "We offer scholarships based on academic performance:\n- 90% or above: 10% fee reduction\n- 85% or above: 5% fee reduction",
        events: "Upcoming events:\n- 3rd International Conference (June 4-6, 2025)\n- Hackfest 2025 (May 19)\n- Generative AI Workshop (May 7-11)",
        admission: "Admissions through CET, COMED-K, PGCET, GATE, KMAT, and management quota.",
        placement: "100% placement record. 27% salary hike compared to previous year.",
        hostel: "Furnished hostel rooms. Bring your own bedding and essentials.",
        faculty: "Highly qualified faculty with PhDs, international publications, and conference participation.",
        infrastructure: "45-acre campus, library, labs, Wi-Fi, sports facilities, auditorium, canteen, and hospital.",
        transport: "35 buses & 5 mini vehicles cover most Bangalore routes. Each bus has emergency contact.",
        canteen: "Serves hygienic South and North Indian food, snacks, and ice creams.",
        cultural: "AC auditorium with 250 seating for cultural & educational events.",
        sports: "Indoor gym, yoga, weight training, cardio, and box cricket area."
    };

    sendBtn.addEventListener('click', handleQuery);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleQuery();
    });

    function handleQuery() {
        const question = userInput.value.trim();
        if (!question) return;

        addToChat(question, 'user');
        userInput.value = '';

        const typingIndicator = addToChat("Assistant is typing...", 'bot');

        setTimeout(() => {
            const response = generateResponse(question);
            chatOutput.removeChild(typingIndicator);
            addToChat(response, 'bot');
        }, 800);
    }

    function addToChat(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.textContent = message;
        chatOutput.appendChild(messageDiv);
        chatOutput.scrollTop = chatOutput.scrollHeight;
        return messageDiv;
    }

    function generateResponse(question) {
        const lowerQ = question.toLowerCase();

        if (lowerQ.includes('website') || lowerQ.includes('online')) {
            return `Visit our official website: ${knowledgeBase.website}`;
        }
        if (lowerQ.includes('address') || lowerQ.includes('location')) {
            return `College Address:\n${knowledgeBase.address}\n\nContact:\n${knowledgeBase.contact}`;
        }
        if (lowerQ.includes('course') || lowerQ.includes('program') || lowerQ.includes('branch')) {
            return `Courses Offered:\n${knowledgeBase.courses}`;
        }
        if (lowerQ.includes('fee') || lowerQ.includes('payment') || lowerQ.includes('cost')) {
            return `Fee Structure:\n${knowledgeBase.fees}\n\nScholarships:\n${knowledgeBase.scholarship}`;
        }
        if (lowerQ.includes('contact') || lowerQ.includes('email') || lowerQ.includes('phone')) {
            return `Contact:\n${knowledgeBase.contact}`;
        }
        if (lowerQ.includes('event') || lowerQ.includes('conference') || lowerQ.includes('workshop')) {
            return `Upcoming Events:\n${knowledgeBase.events}`;
        }
        if (lowerQ.includes('admission') || lowerQ.includes('entrance')) {
            return `Admission Info:\n${knowledgeBase.admission}`;
        }
        if (lowerQ.includes('placement') || lowerQ.includes('job')) {
            return `Placement Info:\n${knowledgeBase.placement}`;
        }
        if (lowerQ.includes('hostel') || lowerQ.includes('accommodation')) {
            return `Hostel Info:\n${knowledgeBase.hostel}`;
        }
        if (lowerQ.includes('faculty') || lowerQ.includes('professor')) {
            return `Faculty Info:\n${knowledgeBase.faculty}`;
        }
        if (lowerQ.includes('infrastructure') || lowerQ.includes('facilities')) {
            return `Campus Facilities:\n${knowledgeBase.infrastructure}`;
        }
        if (lowerQ.includes('transport') || lowerQ.includes('bus')) {
            return `Transport Info:\n${knowledgeBase.transport}`;
        }
        if (lowerQ.includes('canteen') || lowerQ.includes('food')) {
            return `Canteen Info:\n${knowledgeBase.canteen}`;
        }
        if (lowerQ.includes('cultural') || lowerQ.includes('fest')) {
            return `Cultural Activities:\n${knowledgeBase.cultural}`;
        }
        if (lowerQ.includes('sports') || lowerQ.includes('gym')) {
            return `Sports Facilities:\n${knowledgeBase.sports}`;
        }
        if (lowerQ.includes('hello') || lowerQ.includes('hi') || lowerQ.includes('hey')) {
            return "Hello! I'm your SEA College Assistant. Ask me anything about our campus!";
        }

        return "I can help with:\n- Address\n- Courses\n- Fees\n- Admissions\n- Contact Info\n- Events\n- Hostels\n- Faculty\n- Infrastructure\n- Transport\n- Canteen\n- Cultural\n- Sports\nPlease ask about any of these topics!";
    }
});
