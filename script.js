// Sample Data was given by Gemini for testing
const SAMPLEDATA = [
    { "name": "Alex Chen", "title": "Computer Science", "price": 30, "description": "I can help with building projects using Python, HTML/CSS and JavaScript" },
    { "name": "Sarah Jenkins", "title": "Mathematics", "price": 25, "description": "I can help with mastering Algebra, Calculus, and Geometry concepts for your exams." },
    { "name": "Marcus Thorne", "title": "Graphic Design", "price": 40, "description": "I can help with creating logos, UI/UX mockups, and branding using Photoshop and Figma." },
    { "name": "Elena Rodriguez", "title": "Spanish Language", "price": 20, "description": "I can help with conversational practice, grammar rules, and vocabulary building. I am adding this text to see what a very long description would do to the website and the cards themselves. Hope this works!!!" }
]

const SKILLSGRID = document.getElementById("skillsGrid")

function loadFeaturedSkills() {
    SKILLSGRID.innerHTML = SAMPLEDATA.map((skillData, i) => `
        <div class="skillCard">
            <h1 class="course">${skillData.title}:</h1>
            <h3 class="author">${skillData.name}</h3>
            <hr class="authorToPrice"/>
            <h3 class="price">$${skillData.price}/hour</h3>
            <p class="description">${skillData.description}</p>
            <button class="bookNow" onclick="showBookingPage(${i})"><h2>Book Now</h2></button>
        </div>
    `).join('')
}

function showBookingPage(index) {
    const skillData = SAMPLEDATA[index]
    alert(`You are now booking ${skillData.title} for $${skillData.price}/hour. The functional page will be added at a later date`)
} 

document.addEventListener("DOMContentLoaded", () => {
    loadFeaturedSkills()
})