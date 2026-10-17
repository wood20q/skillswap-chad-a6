function filterSkillsByCategory (skillList, category) {
    if (category === "All") return skillList
    else return skillList.filter(skill => skill.category === category)
}

function calculateTotalCost(cost, time) {
    return (cost * time)
}

module.exports = { filterSkillsByCategory, calculateTotalCost };