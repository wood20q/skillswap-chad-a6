const { filterSkillsByCategory } = require('../skillswap-functions')

const skills = [
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Resume Review', category: 'Career', price: 0 },
  { title: 'Web Development', category: 'Programming', price: 25 }
];

describe('filterSkillsByCategory', () => {
    test('filter by category', () => {
        const result = filterSkillsByCategory(skills, 'Programming');
        expect(result).toEqual([
            { title: 'Python Tutoring', category: 'Programming', price: 20 },
            { title: 'Web Development', category: 'Programming', price: 25 }
        ]);
    });

    test('filter by "ALL"', () => {
        const result = filterSkillsByCategory(skills, 'All');
        expect(result).toEqual([
            { title: 'Python Tutoring', category: 'Programming', price: 20 },
            { title: 'Guitar Lessons', category: 'Music', price: 15 },
            { title: 'Resume Review', category: 'Career', price: 0 },
            { title: 'Web Development', category: 'Programming', price: 25 }
        ]);
    });

    test(`No matching skills`, () => {
        const result = filterSkillsByCategory(skills, 'Cooking');
        expect(result).toEqual([]);
    });
})

describe('calculateTotalCost', () => {
    test('Standard calculation', () => {
        expect(calculateTotalCost(20, 2)).toEqual(40)
    })

    test('Free session', () => {
        expect(calculateTotalCost(0, 3)).toEqual(0)
    })

    test('Decimal hours', () => {
        expect(calculateTotalCost(25, 1.5)).toEqual(37.5)
    })

    test('Zero hours', () => {
        expect(calculateTotalCost(20, 0)).toEqual(0)
    })
})
