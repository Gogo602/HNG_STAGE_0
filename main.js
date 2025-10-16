
const skills = [
    {
        id: 1,
        skill: "HTML5"
    },
    {
        id: 2,
        skill: "CSS3"
    },
    {
        id: 3,
        skill: "Responsive Design"
    },
    {
        id: 4,
        skill: "Javascript (ES6+)"
    },
    {
        id: 5,
        skill: "Tailwindcss"
    },
    {
        id: 6,
        skill: "Git/Github"
    },
    {
        id: 7,
        skill: "React"
    },
    {
        id: 8,
        skill: "Typescript"
    },
    {
        id: 9,
        skill: "Axios"
    },
    {
        id: 10,
        skill: "ChartJs & Recharts"
    },
    {
        id: 11,
        skill: "Acernity UI"
    },
    {
        id: 12,
        skill: "Shadcn UI"
    },
    {
        id: 13,
        skill: "MUI"
    },
    {
        id: 14,
        skill: "React-Hook-form"
    },
    {
        id: 15,
        skill: "Zod"
    },
    {
        id: 16,
        skill: "Tanstack Query"
    },
    {
        id: 17,
        skill: "React-Error-Boundary"
    },
    {
        id: 18,
        skill: "Redux/Context/Zustand"
    },
    {
        id: 19,
        skill: "Next Js"
    }
]

const skillList = document.querySelector('[data-testid="list-skills"]')
if (skillList) {
    const skill = skills.map((item) => {
        return `<li data-testid="skill-item-${item.id}">${item.skill}</li>`
    })

    const skillItem = skill.join("")
    skillList.innerHTML = skillItem

    console.log(skillItem)
}
