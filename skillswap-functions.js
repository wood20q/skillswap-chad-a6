function filterSkillsByCategory (skillList, category) {
    if (category === "All") return skillList
    else return skillList.filter(skill => skill.category === category)
}

module.exports = { filterSkillsByCategory };