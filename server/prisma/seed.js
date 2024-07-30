const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.courselist.createMany({
        data: [
            {  
                courseid: 1,
                coursename: "Getting Started with Enterprise-Grade AI",
                badgeicon: "sb_gettingStartedEnterpriseGradeAI.png"
            },
            {  
                courseid: 2,
                coursename: "Getting Started with Enterprise Data Science",
                badgeicon: "sb_gettingStartedEnterpriseGradeDataScience.png"
            },
            {  
                courseid: 3,
                coursename: "Getting Started with Threat Intelligence and Hunting",
                badgeicon: "sb_gettingStartedThreatIntelligence.png"
            },
            {  
                courseid: 4,
                coursename: "Journey to Cloud: Envisioning your solution",
                badgeicon: "sb_journeyToCloud.png"
            }
        ]
    });

    await prisma.highscores.createMany({
        data: [
            { 
                playername: "Mr Pink",
                boardname: "basic",
                numberturns: 23,
                dateplayed: new Date()
            },
            { 
                playername: "Mr Red",
                boardname: "basic",
                numberturns: 18,
                dateplayed: new Date()
            },
            { 
                playername: "Ms Green",
                boardname: "basic",
                numberturns: 15,
                dateplayed: new Date()
            },
            { 
                playername: "Ms Blue",
                boardname: "basic",
                numberturns: 28,
                dateplayed: new Date()
            },
        ]
    });

    await prisma.questions.createMany({
        data: [
            {
                courseid: 2,
                quiznumber: 1,
                questiontype: 1,
                questiontext: "When thinking about the 5 main Vs of data, what does Veracity refer to?",
                options: ['Volume', 'Velocity', 'Variety', 'Veracity'],
                matchoptions: [],
                optionstoselect: 1,
                answeridx: [2], 
                hintind: 1,
                hinttxt: "The 5 v's of data are: ",
                hinttxt1: '',
                hinttxt2: '',
                hintcards: 0,
                hintcardtitles: ["Volume", "Variety", "Velocity", "Veracity", "Value"],
                hintcardtext: ["Refers to the vast amount of data generated every second",
                    "Refers to the different types of data we can use",
                    "Refers to the speed at which new data is generated and the speed at which data moves around",
                    "Refers to the messiness of trustworthiness of the data",
                    "Refers to having access to big data is no good unless we can turn it into value"]
            },
            {
                courseid: 2,
                quiznumber: 1,
                questiontype: 1,
                questiontext: "The field of data science is the process of _____________. Select all that apply.",
                options: ['preparing data for analysis and processing',
                    'working exclusively with spreadsheets and table',
                    'performing advanced data analysis',
                    'visualizing the results to reveal patterns'
                    ],
                matchoptions: [],
                optionstoselect: -1,
                answeridx: [0, 2, 3],
                hintind: 0,
                hinttxt: "",
                hinttxt1: '',
                hinttxt2: '',
                hintcards: 0,
                hintcardtitles: [],
                hintcardtext: []
            },
            {
                courseid: 4,
                quiznumber: 1,
                questiontype: 2,
                questiontext: "The IBM Garage Lifecycle is made up of three phases of development.  Match the description with its corresponding phase.",
                options: ["This phase is where brainstorming activities are conducted to understand the end-user",
                            "Build and test multiple iterations of an MVP to test our hypothesis",
                            "MVPs are fully developed and tested for performance and security risks"
                ],
                matchoptions: ["Think",
                    "Transform",
                    "Thrive"
                    ],
                optionstoselect: 0,
                answeridx: [],
                hintind: 0,
                hinttxt: "",
                hinttxt1: '',
                hinttxt2: '',
                hintcards: 0,
                hintcardtitles: [],
                hintcardtext: []
            },
            {
                courseid: 3,
                quiznumber: 1,
                questiontype: 1,
                questiontext: "Threat hunting requires a great deal of skill, concentration, collaboration, and more than a little creativity. These are the areas where the human mind excels. But threat hunting also requires the right technology to sift intelligence from a vast seat of data, spot anomalies in system logs and automate the process using a global network of threat intelligence.",
                options: ["Because the traditional defense strategy is not to layer on another point-product tool or technology to an already fragmented and disjointed IT environment.",
                            "Costly and complex fragmented security capabilities provide the visibility and coordination needed to stop today’s sophisticated attacks.",
                            "Until recently, organizations have responded to security concerns by deploying a new tool to address each new risk. We’ve observed one company was using 85 tools from 45 different software vendors! Now they have to install, configure, manage, patch, upgrade, and pay for dozens of non-integrated solutions with limited views of the landscape.",
                            "The security portfolio structured around domains presents a less organized fashion to make sense of threats using logs, data, threats, flows, packets, etc.",
                            "Because it involves the partner ecosystem that allows collaboration across companies and competitors, to understand global threats and data, and adapt to new threats."
                            ],
                matchoptions: [],
                optionstoselect: 2,
                answeridx: [0, 2], 
                hintind: 1,
                hinttxt: "Hint goes here",
                hinttxt1: 'With more text here',
                hinttxt2: 'And maybe some more here',
                hintcards: 0,
                hintcardtitles: [],
                hintcardtext: []
            }
        ]
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });