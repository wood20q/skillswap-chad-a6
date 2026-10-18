const SKILLS = [
  { id: 1, title: 'Python Tutoring', category: 'Programming', price: 20, name: 'Alice Smith', description: 'One-on-one sessions covering Python fundamentals, data structures, and practical coding exercises tailored to your skill level.' },
  { id: 2, title: 'Guitar Lessons', category: 'Music', price: 15, name: 'Miguel Diaz', description: 'Personalized instruction for beginners and intermediate players focusing on chords, strumming patterns, and basic music theory.' },
  { id: 3, title: 'Resume Review', category: 'Career', price: 0, name: 'Sarah Chen', description: 'Comprehensive feedback and formatting advice to highlight your strengths, optimize for ATS, and help you land more interviews.' },
  { id: 4, title: 'Web Development', category: 'Programming', price: 25, name: 'David Kim', description: 'Custom website creation and front-end development services utilizing modern frameworks and responsive design principles.' }
]

// Testing Functions
function filterSkillsByCategory (skillList, category) {
    if (category === "All") return skillList
    else return skillList.filter(skill => skill.category === category)
}

function calculateTotalCost(cost, time) {
    return (cost * time)
}

// Script.js
const SKILLSGRID = document.getElementById("skillsGrid")

function loadFeaturedSkills(skillList) {
    SKILLSGRID.innerHTML = skillList.map((skillData, i) => `
        <div class="skillCard">
            <h1 class="course">${skillData.title}:</h1>
            <h3 class="author">${skillData.name}</h3>
            <hr class="authorToPrice"/>
            <h3 class="price">$${skillData.price}/hour</h3>
            <p class="category">Category: ${skillData.category}</p>
            <p class="description">${skillData.description}</p>
            <button class="bookNow" onclick="showBookingPage(${skillData.id})"><h2>Book Now</h2></button>
        </div>
    `).join('')
}

function showBookingPage(id) {
    skill = SKILLS.find(skill => skill.id === id)
    if (!skill) return

    alert(`You are now booking ${skill.title} for $${skill.price}/hour. The functional page will be added at a later date`)
}

function handleFilter(type) {
    const filterBTNAll = document.getElementById("filterBTNAll")
    const filterBTNProgramming = document.getElementById("filterBTNProgramming")
    const filterBTNMusic = document.getElementById("filterBTNMusic")
    const filterBTNCareer = document.getElementById("filterBTNCareer")

    const filterList = [filterBTNAll, filterBTNProgramming, filterBTNMusic, filterBTNCareer]
    for (let i = 0; i < filterList.length; i++) {
        filterList[i].classList.remove("selected")
        if (filterList[i].textContent == type) filterList[i].classList.add("selected")
    }

    const newSkillList = filterSkillsByCategory(SKILLS, type)
    loadFeaturedSkills(newSkillList)
}

document.addEventListener("DOMContentLoaded", () => {
    loadFeaturedSkills(filterSkillsByCategory(SKILLS, "All"))
    
    document.getElementById('costCalculatorWrapper').addEventListener('submit', (event) => {
        event.preventDefault()
    
        const hourlyCost = document.getElementById('hourlyCost').value
        const hours = document.getElementById('hours').value
        const costLabel = document.getElementById('costLabel')

        costLabel.classList.remove('disabled')
        costLabel.textContent = `Cost: $${calculateTotalCost(hourlyCost, hours)}`
    })
})