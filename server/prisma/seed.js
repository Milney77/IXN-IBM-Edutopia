const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.courselist.createMany({
        data: [
            {  
                courseid: 1,
                coursename: "Getting Started with Enterprise-Grade AI",
                badgeicon: "sb_gettingStartedEnterpriseGradeAI.png",
                includeind: 1
            },
            {  
                courseid: 2,
                coursename: "Getting Started with Enterprise Data Science",
                badgeicon: "sb_gettingStartedEnterpriseGradeDataScience.png",
                includeind: 1
            },
            {  
                courseid: 3,
                coursename: "Getting Started with Threat Intelligence and Hunting",
                badgeicon: "sb_gettingStartedThreatIntelligence.png",
                includeind: 0
            },
            {  
                courseid: 4,
                coursename: "Journey to Cloud: Envisioning your solution",
                badgeicon: "sb_journeyToCloud.png",
                includeind: 1
            }
        ]
    });

    
    await prisma.questions.createMany({
        data: [
            {
                courseid: 1
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "The key difference between narrow intelligence and broad intelligence is best described by which of the following phrases?"
                , options: ["Narrow and Broad intelligence is distinguished by the complexity of algorithms","Broad intelligence requires huge amounts of data, whereas narrow intelligence relies on minimum data","Narrow AI can only do a certain task—and it can do it quite well, but narrow AI can’t transfer its knowledge to different sorts of problems as with Broad AI","Broad intelligence can extract meaning from images, whereas Narrow Intelligence is best suited for language processing",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 1
                , hinttxt: "We can split the term AI into three categories: general, broad and narrow"
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 3
                , hintcardtitles: ["General","Broad","Narrow",]
                , hintcardtext: ["General AI encompasses all the human-like capabilities","Broad AI will be characterized by the ability to learn and reason more broadly across tasks","Narrow AI is often used to solve specific, well-defined tasks",]
                },
                {
                courseid: 1
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Which of the following best depict or exemplify Broad AI?"
                , options: ["A self-driving car, which happens to be a collection of narrow AI technologies","A system that supports engineers who work on complex maintenance tasks on a platform in the middle of the Atlantic Ocean","A system within a bank that analyzes the balance sheet of corporate customers to recommend the best currency hedging strategy","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 1
                , hinttxt: "Broad AI will be characterized by the ability to learn and reason more broadly across tasks."
                , hinttxt1: "It can integrate information from multiple modalities and domains, all while being more explainable, secure, fair, auditable, and scalable."
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Which of the following best depicts General AI?"
                , options: ["A chatbot that is also connected to Tone Analyzer","Watson Machine Learning service","The ability to use previous experiences to come up with new creative ideas","A system that is self-aware",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 1
                , hinttxt: "General AI refers to machines that can perform any intellectual task a human can."
                , hinttxt1: "Currently, AI does not have the ability to think abstractly, strategize and use previous experiences to come up with new creative ideas as humans do."
                , hinttxt2: "But over the next few decades, such advancements are likely."
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "How does IBM view the impact of artificial intelligence?"
                , options: ["It is here to augment human intelligence","It is how systems predict the future","It is about automating mundane tasks that humans do","It is about the quest for artificial general intelligence (AGI)",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 1
                , hinttxt: "The relationnship between humans and AI is a symbiotic one."
                , hinttxt1: "A human must first augment the machine so the machine can augment the human. Done properly, this cycle will perpetuate itself."
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Which of the following is a key contributor to the evolution of modern AI system?"
                , options: ["Explosive growth of available data from social media, sensors, and smart devices","Development of advanced computational algorithms","Modern computers have far greater power than they did in the 1950s","All of the Above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 1
                , hinttxt: "Factors that have contributed to the evolution of modern AI systems are:"
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 3
                , hintcardtitles: ["Evolution of data","Evolution of Algorithms","Evolution of Computing",]
                , hintcardtext: ["The exponential growth of available data, with the introduction of the Internet, social media, the proliferation of sensors and smart devices and low cost data storage.","Algorithms have been around since we could write but the recent development of more advanced algorithms have helped AI become more powerful and efficient.","Back when AI was just beginning to be developed, the computing power was minimal. Computers nowadays can take much more data and heavier algorithms than in the 1950s.",]
                },
                {
                courseid: 1
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "AI enables a partnership between humans and technology. Which of the following is best performed by technology and machines rather than humans?"
                , options: ["Pattern identification","Imagination","Abstraction","Dilemmas",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 1
                , hinttxt: "We are now at the brink of the fourth Industrial Revolution."
                , hinttxt1: "AI is one of the biggest facets of this revolution, and it will affect almost all sectors, as did previous Industrial Revolutions. "
                , hinttxt2: "AI’s abilities have increased significantly since its inception in 1955; it can now detect patterns more accurately, continuously, and based on more data. Currently, AI has surpassed human intelligence in some specific domains. "
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Humans have superior data gathering and learning techniques compared to machines. In which context could humans use some augmented help?"
                , options: ["When there is endless relevant newly published data, such that is impossible to know all of it at all times","When humans try to make in-depth if-then statements in minimum and optimized time","When there are many variables at play","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "While relevant, AI use-cases span various areas across virtually every industry. Three main macro domains continue to drive the adoption as well as the most economic savings across businesses. Which of the following best depicts those three main domains?"
                , options: ["Engagement, insight, and automation","Narrow, broad, and general","Supervised, unsupervised, and reinforcement","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "In a 2016 article, The Washington Post stated that: “Half of the American workforce is at risk of being replaced by robots in the next decade.” Which of the following tasks is key to successful AI technology adoption?"
                , options: ["The increasing use of natural language processing","Incorporating machines that adapt, and learn to make recommendations","Training humans to work with machines","Optimizing business processes for automation",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "From retail to education, AI technology plays an important role in reinventing industries and transforming our world. Which of the following are examples of key AI technologies?"
                , options: ["Virtual agents and computer vision","Education and healthcare","Privacy and bias","Personalization and automation",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 1
                , hinttxt: "Think about what options are actually technologies."
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "In what way will AI augment education in the future?"
                , options: ["Personalized Education","Learning Content Indexing-to-Skill & Search","Custom Teaching Methods","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Which of the following best describes the difference between AI, Machine Learning, and Deep Learning?"
                , options: ["Each level is differentiated by specific algorithms that power the system","They are synonyms for the same approach for the field of artificial intelligence","Deep Learning is a subset of Machine Learning, which in turn is a subset of artificial intelligence","Machine Learning is a subset of Deep Learning, which in turn is a subset of artificial intelligence",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 1
                , hinttxt: "AI, Machine Learning and Deep Learning"
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 3
                , hintcardtitles: ["AI","Machine Learning","Deep Learning",]
                , hintcardtext: ["A Program that can sense, reason, act and adapt","Algorithms whose performance improves as they are exposed to more data over time","Multi-layered neural networks learn from vast amounts of data",]
                },
                {
                courseid: 1
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Machine Learning tasks are typically classified into which of the following broad categories? (Select all that apply.)"
                , options: ["Hybrid learning","Supervised learning","Unsupervised learning","Reinforcement learning",]
                , matchoptions: []
                , optionstoselect: 3
                , answeridx: [1,2,3]
                , hintind: 1
                , hinttxt: "There are 3 classifications of machine learning"
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 3
                , hintcardtitles: ["Group 1","Group 2","Group 3",]
                , hintcardtext: ["Uses labelled datasets to train algorithms to classify data or predict outcomes accurately (e.g. regression)","Uses a trial and error approach to learn rather than sample data","Uses unlabelled data to find hidden patterns in data (e.g. clustering)",]
                },
                {
                courseid: 1
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "AI learning process entails human and machine activities; which of the following best depicts machine-related activities?"
                , options: ["Identify the data-analytics problem","Define hyperparameters","Analyze the data provided by the model ","Learns by adjusting weights and biases",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Which of the following learning models is predominantly used with game-playing robots or self-driving cars?"
                , options: ["Reinforcement learning","Supervised learning","Unsupervised learning","Transfer learning",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 1
                , hinttxt: "In these examples, is there any sample data to train a model?"
                , hinttxt1: "Consider which machine learning class doesn't require sample data"
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Cognitive (AI) systems are best characterized by the following four attributes: Understand, reason, learn and ______________. "
                , options: ["Interact","Predict","Optimize","Converge",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "For a natural language processing (NLP) system, which of the following poses the greatest challenge?"
                , options: ["The Syntax of a sentence","The semantics of what the sentence means","Innuendos and nuances used in human speech","Grammatical constructs",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 1
                , hinttxt: "Languages are nuanced and complicated, presenting difficulties to computers used to fixed rules."
                , hinttxt1: "Often they rely on listeners experience and judgement to interpret the correct meaning."
                , hinttxt2: "Consider the statement 'I chased after a dog in my dresssing gown' - who was wearing the dressing gown?"
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Which of the following is a true statement regarding natural language processing (NLP)?"
                , options: ["NLP is a classification problem","NLP is a regression problem","NLP has not yet conquered the challenge of depicting human tone","NLP is used when the system needs to produce a new composition made up of numerous separate article passages",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 1
                , hinttxt: "NLP systems must be able to interact in a way that feels natural for the human user.  Therefore, it is necessary to train the machine to sort language into groups of words."
                , hinttxt1: "Natural language classification is a component in many AI-powered solutions such as chatbots, virtual agents, and agent assistants."
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Some of the best practices used in building conversational systems include which of the following:"
                , options: ["Introduce Your Chatbot to First-Time Users","Add Variations to Your Responses","Handle the “I Do Not Understand” Case","All of the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Although artificial intelligence has come a long way since its inception, there are a number of things that machines are not capable of doing today – if ever. Which of the following human traits are AI systems currently NOT capable of?"
                , options: ["Pattern Identification","Solving complex equations ","Imagination ","Locating Knowledge",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Which of the following is true about Deep Learning? "
                , options: ["Employs artificial neural networks that mimic the workings of the human brain","Is capable of sorting unstructured data (unlabeled text, video, and images) with minimal input from a human expert ","Is capable of creative thought, such as writing a novel or “painting” a piece of art. ","Personalization and automation","Options A & B Only","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [4]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "When building a chatbot, the dialog uses the _________, that are identified in the user's input, plus context from the application, to interact with the user and ultimately provide a useful response."
                , options: ["Intents","Entities","Content Catalog","Dialog",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 1
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 4
                , hintcardtitles: ["Intents","Entities","Content Catalog","Dialog",]
                , hintcardtext: ["The purpose of a user's input (a verb)","What the intent is about (if intents are verbs, Entities are nouns)","Detailed list of all created content","The conversation flow",]
                },
                {
                courseid: 1
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "As a chatbot interacts with a human user it extracts keywords, known as __________, from the conversation to determine the next course of action or offer a recommendation. "
                , options: ["Intents","Entities","Content Catalog","Dialog",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 1
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 4
                , hintcardtitles: ["Intents","Entities","Content Catalog","Dialog",]
                , hintcardtext: ["The purpose of a user's input (a verb)","What the intent is about (if intents are verbs, Entities are nouns)","Detailed list of all created content","The conversation flow",]
                },
                {
                courseid: 1
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "When hosting a Mural collaborative session to Plan a chatbot dialog. It is recommended to streamline your process and work exclusively with your AI developers and AI ethic advocates, not including in the process management, staff, or other company employees."
                , options: ["FALSE","TRUE",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "What is a dialog skill?"
                , options: ["A collection of user statements that have the same meaning","A container for the artifacts that define the flow of a conversation","A connected knowledge of repositories in order to provide more personal and accurate responses",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "Which Dialog Nodes are not automatically provisioned in Watson Assistant?"
                , options: ["Welcome","About_restaurant","General_Greetings","Anything_else","General_Ending",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "Is it true that chatbot responses are only limited to text?"
                , options: ["Yes - chatbot are limited to text but the user can use text-to-speech to listen to the messages as audio","No - chatbot responses can also include Images",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "By setting up several values within an Entity, we can answer more specific questions from users such as information from different menus in a restaurant"
                , options: ["TRUE","FALSE",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 1
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "A chatbot can be more than just a question and answer tool, within the Watson Assistant environment you can preview your chatbot, interact with it, and even filter menu options and see detailed pictures of your selections"
                , options: ["TRUE","FALSE",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 2
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Which of the following is one of the most fundamental characteristics of a data scientist?"
                , options: ["Being proficient in R or Python","Having a sense of curiosity about all things","Using open-source software libraries and packages","Having a strong background in high power computing (HPC)",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 1
                , hinttxt: "Data science is a multidisciplinary field whose goal is to extract value from data in all its forms."
                , hinttxt1: "One of the key attributes of a Data Scientist is an eternal curiosity factor."
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 2
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "The field of data science is the process of _____________. Select all that apply. "
                , options: ["preparing data for analysis and processing","working exclusively with spreadsheets and tables","performing advanced data analysis  ","visualizing the results to reveal patterns ",]
                , matchoptions: []
                , optionstoselect: 3
                , answeridx: [0,2,3]
                , hintind: 1
                , hinttxt: "Before a data scientist can start building models, the data for the model needs to be prepared."
                , hinttxt1: "This can include significant amounts of data analysis to ensure that data going into the model is robust and fit for purpose."
                , hinttxt2: "There are many ways to analyse data, from statistical tests to visualisations."
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 2
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "When thinking about the 5 main Vs of data, what does Veracity refer to?"
                , options: ["Refers to the vast amounts of data generated every second","Refers to the different types of data we can now use.","Refers to the speed at which new data is generated and the speed at which data moves around","Refers to the trustworthiness of the data",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 1
                , hinttxt: "The 5 v's of data are: "
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 5
                , hintcardtitles: ["Volume","Variety","Velocity","Veracity","Value",]
                , hintcardtext: ["Refers to the vast amount of data generated every second,","Refers to the different types of data we can use,","Refers to the speed at which new data is generated and the speed at which data moves around,","Refers to the messiness of trustworthiness of the data,","Refers to having access to big data is no good unless we can turn it into value]",]
                },
                {
                courseid: 2
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Data in all of its forms, both structured and unstructured, would be the focus of which of the following 5 V’s of data? "
                , options: ["Volume","Velocity","Variety","Veracity",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 1
                , hinttxt: "The 5 v's of data are: "
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 5
                , hintcardtitles: ["Volume","Variety","Velocity","Veracity","Value",]
                , hintcardtext: ["Refers to the vast amount of data generated every second,","Refers to the different types of data we can use,","Refers to the speed at which new data is generated and the speed at which data moves around,","Refers to the messiness of trustworthiness of the data,","Refers to having access to big data is no good unless we can turn it into value]",]
                },
                {
                courseid: 2
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Which of the following are examples of unstructured data? Select all that apply."
                , options: ["CSV files","Facebook images","Records in IBM DB2 database","Twitter feeds",]
                , matchoptions: []
                , optionstoselect: 2
                , answeridx: [1,3]
                , hintind: 1
                , hinttxt: "Structured data — typically categorized as quantitative data — is highly organized and easily decipherable by machine learning algorithms."
                , hinttxt1: "Unstructured data — typically categorized as qualitative data — cannot be processed and analyzed via conventional data tools and methods."
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 2
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "A data analyst is reviewing an Excel spreadsheet from an insurance company. The customer data that she is analyzing is sorted by name, home address, policy number, etc. What type of data is she most likely working with? "
                , options: ["Structured data","Unstructured data ","Bilaterally structured data ","Unilaterally structured data",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 2
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Which of the following tasks is a typical role of a Data Engineer?"
                , options: ["Collect and clean data","Statistical computing","Visualizing the data","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 1
                , hinttxt: "A data science project needs Data Engineers, Data Analysts and Data Scientists"
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 3
                , hintcardtitles: ["Data Engineer","Data Scientist","Data Analyst",]
                , hintcardtext: ["Architects how data is organized and ensures operability, builds data infrastructure and ETL pipelines.","Follows project end to end, refines the data model using statistical techniques or visualisations, builds the models.","Captures domain knowledge for successful business alignment, cleanse and curate the raw data.",]
                },
                {
                courseid: 2
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Which of the following tasks is a typical role of a Data Analyst?"
                , options: ["Collect and clean data","Statistical computing","Visualizing the data","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 1
                , hinttxt: "A data science project needs Data Engineers, Data Analysts and Data Scientists"
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 3
                , hintcardtitles: ["Data Engineer","Data Scientist","Data Analyst",]
                , hintcardtext: ["Architects how data is organized and ensures operability, builds data infrastructure and ETL pipelines.","Follows project end to end, refines the data model using statistical techniques or visualisations, builds the models.","Captures domain knowledge for successful business alignment, cleanse and curate the raw data.",]
                },
                {
                courseid: 2
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Which of the following tasks is a typical role of a Data Scientist?"
                , options: ["Collect and clean data","Statistical computing","Visualizing the data","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 1
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 3
                , hintcardtitles: ["Data Engineer","Data Scientist","Data Analyst",]
                , hintcardtext: ["Architects how data is organized and ensures operability, builds data infrastructure and ETL pipelines.","Follows project end to end, refines the data model using statistical techniques or visualisations, builds the models.","Captures domain knowledge for successful business alignment, cleanse and curate the raw data.",]
                },
                {
                courseid: 2
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Data cleansing often consumes 80% of a data engineers’ or data scientists’ time. Which of the following tasks is specific to data cleansing? Select all that apply."
                , options: ["Merging multiple datasets","Imputing for missing values","Visualizing the data set","Feature engineering",]
                , matchoptions: []
                , optionstoselect: 2
                , answeridx: [0,1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 2
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Data Exploration can be best summarized as the process of ___________."
                , options: ["Cleaning and organizing data into a usable format","Examining and visualizing data to find undiscovered patterns and relationships","Importing data into a machine learning model ","All the above ",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 1
                , hinttxt: "After data has been cleansed and prepared, it can be explored."
                , hinttxt1: "This exploration attempts to find hidden patterns in the data,"
                , hinttxt2: "including relationships between different data fields."
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 2
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Data Modeling can best be summarized as the process of ______________."
                , options: ["Creating a visualization to communicate connections between data points and structures.","Cleaning and munging data into a usable format","Examining data for hidden patterns","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 2
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Which of the following is a Data Model?"
                , options: ["Entity-Relationship model","Relational data model","Object-oriented data model","Hierarchical data model","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [4]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 2
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "_____________ is the stage whereby a data model is analyzed for its quality and efficiency in solving a problem."
                , options: ["Data Cleansing","Data Modeling","Model Implementation","Model Deployment",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 1
                , hinttxt: "4 elements in a data science project"
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 4
                , hintcardtitles: ["Data Cleansing","Data Modeling","Model Implementation","Model Deployment",]
                , hintcardtext: ["Merging multiple datasets, imputing for missing values","Creating a visualization to communicate connections between data points and structures.","Evaluate and understand the quality and effectiveness of the model","Deploy the model into the production environment if it has passed all requirements",]
                },
                {
                courseid: 2
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "_____________ is the stage whereby a data model is tested for its quality and put into production."
                , options: ["Data Cleansing","Data Modeling","Model Implementation","Model Deployment",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 1
                , hinttxt: "4 elements in a data science project"
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 4
                , hintcardtitles: ["Data Cleansing","Data Modeling","Model Implementation","Model Deployment",]
                , hintcardtext: ["Merging multiple datasets, imputing for missing values","Creating a visualization to communicate connections between data points and structures.","Evaluate and understand the quality and effectiveness of the model","Deploy the model into the production environment if it has passed all requirements",]
                },
                {
                courseid: 2
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "According to the Tools page, Watson Studio will be used primarily for ____________________ and _________________. Select all that apply. "
                , options: ["Data Security","Data Transfer","Data Visualization","Data Refinery",]
                , matchoptions: []
                , optionstoselect: 2
                , answeridx: [2,3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 2
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "In the Business Challenge, Auto Insurance Company inc. has decided to use Data Science technologies to help fix which problem?"
                , options: ["Employee Attrition","Cybersecurity breaches","Data Corruption","Insurance Fraud",]
                , matchoptions: []
                , optionstoselect: 2
                , answeridx: [2,3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 2
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "Data Exploration & Preparation is a continuous loop that starts with Data Requirements and ends with Data Understanding. This loop will continue, until the Data Scientist has decided the Data set has no critical ___________. "
                , options: ["Data Cleansing","Data Representation","Data Collection","Data Gaps",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "What is true about misconfiguration as one of the most challenging types of cyber threats?"
                , options: ["Erroneous permission-level attribution on cloud services and networked backups exposed sensitive data through weak or non-existent authentication.","Employees and insiders falling for phishing emails that resulted in account takeover or access to sensitive data.","Incidents where attackers gain access to vulnerable systems left exposed by inexperienced administrators or users (e.g., default factory settings)","Options ‘A’ and ‘C’ Only","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Based on the IBM X-Force report “The shifting panorama of global cybercrime”, what is the biggest motivation for cybercriminals to attack companies around the world?"
                , options: ["Terrorism","Espionage","Financial gain","Hacktivism",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "What is the chief weapon of a cyber attacker?"
                , options: ["Brute Force","Malware","Physical Access","Phishing","SQLi",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "The use of a cyber-attack for research purposes, such as probing potential vulnerabilities within a company’s network or conducting penetration testing, is known as:"
                , options: ["Hacktivism","Code Red Hacking","Benign Hacking","White Hat Hacking",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Why are cyber-attacks significant for established companies?"
                , options: ["The cost to businesses from cyber-attacks and their consequences, such as data breaches, are always affordable but exposes the company to internal inefficiencies which causes delays.","Enhances the brand reputation and increases customer loyalty.","Invites regulatory penalties.","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "[Select Two] Why is it important to create an integrated security domain system?"
                , options: ["Because the traditional defense strategy is not to layer on another point-product tool or technology to an already fragmented and disjointed IT environment.","Costly and complex fragmented security capabilities provide the visibility and coordination needed to stop today’s sophisticated attacks.","Until recently, organizations have responded to security concerns by deploying a new tool to address each new risk. We’ve observed one company was using 85 tools from 45 different software vendors! Now they have to install, configure, manage, patch, upgrade, and pay for dozens of non-integrated solutions with limited views of the landscape. ","The security portfolio structured around domains presents a less organized fashion to make sense of threats using logs, data, threats, flows, packets, etc.","Because it involves the partner ecosystem that allows collaboration across companies and competitors, to understand global threats and data, and adapt to new threats.",]
                , matchoptions: []
                , optionstoselect: 2
                , answeridx: [0,2]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Which of the following examples best illustrates a cyber threat?"
                , options: ["A friend uses your Netflix login information without your knowledge","You receive an email from an unknown account asking you to click on a link to claim a prize. ","Hackers infiltrate a banking website and obtain customer account information","Options B and C Only","All of the Above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Which of the following motivators explain why cyber criminals carry out cyber-attacks?"
                , options: ["Financial Gain","Espionage","Hacktivism","Options A and C Only","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [4]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 1
                , questiontype: 2
                , questiontext: "Match the attack type with its description. "
                , options: ["Attack that deliberately overloads a network in order to shut down its online capability ","Malicious Software programmed to attack a target","Inserts commands code into a client application allowing that hacker to read or modify sen","Tricking a user into providing protected information or downloading malicious software.","Malicious Software programmed to attack a target",]
                , matchoptions: ["Denial of Service (DDoS)", "Malware", "SQL Injection", "Phishing", "Malware"]
                , optionstoselect: 0
                , answeridx: []
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "The X-Force IRIS Cyber Attack Framework is composed of a Preparation Framework and an Execution Framework. "
                , options: ["FALSE","TRUE",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "To solve the main problem of transnational criminals creating cyber threats, we need a human-vs-human approach with intelligence-led cyber threat investigation and hunting. "
                , options: ["FALSE","TRUE",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Which are the five phases for the Cyber Resilience Lifecycle based in NIST CSF?"
                , options: ["Investigate, Remediate, Protect, Recover, Take legal action","Identify, Protect, Detect, Respond, Recover","None of the above","Identify, Investigate, Remediate, Respond, Rework",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "The attack begins when the cyber bad actor launches and executes the attack."
                , options: ["TRUE","FALSE",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "In cyber resilience the business priority is to support “continuous availability”, the expectation is of always-on systems with zero downtime, and at the same time, our systems are more heterogeneous than ever. Which technologies will be critical to solving this expectation and complexity?"
                , options: ["Orchestration as part of a software-defined resiliency story","Predictive systems","Artificial Intelligence","All of the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Threat hunting requires a great deal of skill, concentration, collaboration, and more than a little creativity. These are the areas where the human mind excels. But threat hunting also requires the right technology to sift intelligence from a vast seat of data, spot anomalies in system logs and automate the process using a global network of threat intelligence."
                , options: ["FALSE","TRUE",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "[Select all that apply] Which of the following stressors are known to overwhelm cyber security personnel? "
                , options: ["Overloaded by data","Dealing with unaddressed threats","Underpaid versus developers","Shortage of skills to fill the needed positions",]
                , matchoptions: []
                , optionstoselect: 3
                , answeridx: [0,1,3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Cyber Threat Hunting is the act of proactively and aggressively intercepting, tracking and eliminating cyber adversaries as early as possible in the Cyber Kill Chain. "
                , options: ["FALSE","TRUE",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "How do you monitor any changes in a  report? "
                , options: ["Reports can't be monitored","Click the 'Follow' button.","Click the next arrow to go to the report","None of the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "With X-Force Exchange, we can monitor the online environment, in real-time, and actively follow known security issues. "
                , options: ["FALSE","True ",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "What is true about the Threat Activity Map? "
                , options: ["It gives a visual of different countries that have been attacked.","It shows a list of IP addresses that have been affected by spam attacks","It finds the location of what PC the attacks are coming from.","None of the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "In what folder can we find the many reports that contain active ransomware? "
                , options: ["X-Force Exchange Folder","WannaCry Collections Folder","Botnet Reports Folder","Ransomware Folder",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 3
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "The purpose of following reports is to ____________________. "
                , options: ["be notified when something new changes in reports without having to check in manually","make sure you've checked in to watch what is happening in the reports"," Both A and B",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "The ability for businesses to rent computing services and software from a cloud service provider on a per unit or per month basis is best encapsulated by which of the following cloud business enablers?"
                , options: ["Business Scalability","Cost Flexibility","Masked Complexity","Market Adaptability",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Collaboration software such as Zoom, Mural, and Slack are all cloud services that facilitate team communication and information sharing in real-time. This benefit of cloud is best encapsulated by which of the following cloud business enablers?"
                , options: ["Market Adaptability","Masked Complexity","Context-driven Variability","Ecosystem Connectivity",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Company X owns and manages all its hardware and software, which are housed in an onsite Data Center. Which of the following describes the IT infrastructure that Company X employs?"
                , options: ["Traditional Infrastructure  ","Public Cloud Infrastructure","Private Cloud Infrastructure","Hybrid Cloud Infrastructure",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "An organization using Traditional IT infrastructure may choose not to adopt a cloud deployment model for all of the following reasons EXCEPT:"
                , options: ["The system works just fine as is","Cloud Service Providers often lock organizations into lengthy and expensive contracts","Cloud migration is seen as being too costly and time-consuming","The data owned by the organization is too sensitive to be trusted to a third-party provider",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Which of the following is true of a public cloud? (Select all that apply)"
                , options: ["Although it can be free or inexpensive to access, it may be offered on a pay-per-usage model.","The cloud service provider is responsible for setting up the hardware, software, applications, and networking resources.","Multi-tenant environment where users share a pool of virtual resources that are automatically provisioned for and allocated to individual tenants.","It is often the best model for organizations concerned with securing highly sensitive data or adhering to compliance regulation",]
                , matchoptions: []
                , optionstoselect: 3
                , answeridx: [0,1,2]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Infrastructure as a service (IaaS) provides companies _________________."
                , options: ["With computing resources including servers, networking, storage, and data center space on a pay-per-use basis.","Distant computers “in the cloud“ that are owned and operated by others and that connect to a users‘ computer via the Internet and usually a web browser","A cloud-based environment with everything required to support the complete lifecycle of building and delivering web-based (cloud) applications","All of the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Which of the following cloud delivery models provides sophisticated security and governance designed for a company’s specific requirements?"
                , options: ["Public Cloud","Hybrid Cloud","Private Cloud","Edge Cloud",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Acme Hospital is looking to migrate some of its workloads to the cloud. After consulting with a cloud development team, they decide on a model where general information apps will be hosted on a public cloud but sensitive data such as patient records will be stored on a private cloud. Which cloud deployment model has Acme Hospital chosen?"
                , options: ["Public Cloud","Hybrid Cloud","Private Cloud","Edge Cloud",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "Which of the following cloud service types addresses the user who does not pay for the software itself? It works like a rental. They have the authorization to use it for a period of time and pay for the software that they are using."
                , options: ["SaaS","PaaS","IaaS","BPaaS",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 1
                , questiontype: 1
                , questiontext: "_______ as a service is primarily designed for developers looking to build an application but offloads infrastructure management, patches, updates, and other administrative tasks to the cloud service provider."
                , options: ["SaaS","PaaS","IaaS","BPaaS",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "This development philosophy embraces experimentation with new ideas, implementing only what is necessary, and gathering customer input to ensure that it aligns with what the customer wants."
                , options: ["DevOps","Fail Fast","Backwards Design","Business Framing",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Which of the following are key characteristics of Agile development practices? (Select all that apply)"
                , options: ["Create a comprehensive end-to-end blueprint of the entire project, and the necessary requirements before production begin.","Develop frequently, in short intervals, that incorporate feedback and reflective practices.","Satisfy the customer through early and continuous delivery.","Foster communication across the team through daily standup meetings.",]
                , matchoptions: []
                , optionstoselect: 3
                , answeridx: [1,2,3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Which of the following are key characteristics of digital transformation according to the IBM Garage Method? (Select all that apply)"
                , options: ["Work backward, starting with the ideal customer experience.","Take a holistic approach by examining all parts of the organization that may need to be modernized.","Work Sequentially. Each development phase must be completed before the next phase can begin.","Develop a minimal viable product as a pilot to garner customer feedback.","After participating in initial discussions in the Think phase the customer takes a backseat in the development process. The customer only sees the final product after it has been extensively tested internally.",]
                , matchoptions: []
                , optionstoselect: 3
                , answeridx: [0,1,3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 2
                , questiontype: 2
                , questiontext: "The IBM Garage Lifecycle is made up of three phases of development.  Match the description with its corresponding phase."
                , options: ["This phase is where brainstorming activities are conducted to understand the end-user","Build and test multiple iterations of an MVP to test our hypothesis","MVPs are fully developed and tested for performance and security risks",]
                , matchoptions: ["Think", "Transform", "Thrive"]
                , optionstoselect: 0
                , answeridx: []
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Which of the following statement about Empathy Mapping exercises is TRUE:"
                , options: ["Used to brainstorm ideas about what the development team may need in order to execute the proposed project.","Considered to be a secondary design feature. Meaning that it is a nice exercise only if time allows.","Conducted to better understand the customers’/ end-users’ wants and needs before development begins.","Part of the playback process where the development team reflects on what went wrong during development.",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "Using your knowledge of the IBM Garage Methodology, evaluate whether the following statement is true or false: “To be effective, Digital Transformation requires a complete and total restructuring of an organization.”"
                , options: ["TRUE","FALSE - Digital Transformation only requires changing the way the development team works but does not seek to change company culture or design practices.","FALSE – Digital Transformation should be implemented after assessing the needs and capabilities of the organization and determining the best solutions.","FALSE – Digital Transformation is intended only for new businesses and not necessary for older, more established organizations.",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 2
                , questiontype: 1
                , questiontext: "A business framing exercise is another component of the Garage Method. The goal of this activity is to ____________."
                , options: ["Set goals and prioritize ideas","Establish desirable outcomes","Determine what is feasible within a given budget and timeframe","Identify pain points and potential hurdles","All the above",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [4]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 2
                , questiontype: 2
                , questiontext: "Enterprise Design Thinking is comprised of three core components: Hills, Playbacks, and Sponsor Users. Match each core component with its description."
                , options: ["Post-workshop sessions that align to the objectives and sets an action plan.","People who are involved throughout the entire design and development process.","An aspirational end state for users that is motivated by market understanding.",]
                , matchoptions: ["Playbacks", "Sponsor Users", "Hills"]
                , optionstoselect: 0
                , answeridx: []
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "Which of the following statements concerning the creation of a minimal viable product (MVP) are true? (Select all that apply)"
                , options: ["An MVP is a complete model of the final product, with all features and capabilities included.","An MVP is created to garner user feedback and make changes before fully developing the product","There are often multiple cycles of MVP development based on performance and stakeholder feedback.","The purpose of creating an MVP is to reduce risk, save time, and reduce costs.",]
                , matchoptions: []
                , optionstoselect: 3
                , answeridx: [1,2,3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "What is the primary purpose(s) of coming up with a hypothesis before writing your MVP statement?"
                , options: ["To define the tools, resources, and roles that will need to be deployed during development.","To identify your organization’s short-term and long-term goals.","To align what is known about your end-user to focus on developing only the minimum requirements to meet those needs.","All the above.",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "Acme Airlines is developing a prototype mobile app to streamline the customer travel experience. During the design thinking workshop, the end-user frequently travels internationally to attend business meetings. Based on this information about our user, what features should the Minimal Viable Product (MVP) include?"
                , options: ["Flight Status Updates","Cheapest airfare suggestions","Tourist recommendations such as museums and points of interest","Pre-Order a Taxi/ Ride Share","Restaurants that are family-friendly","Seating near power outlets",]
                , matchoptions: []
                , optionstoselect: 3
                , answeridx: [0,3,5]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "After creating your hypothesis and defining you Minimal Viable Product, the next step would be:"
                , options: ["Develop the solution architecture for the MVP and move forward to an inception.","Create a complete pipeline for develop of the end-to-end final product.","Conduct more Enterprise Design Thinking activities to include the needs of other end-users’.","Call a stakeholder meeting to ensure that your MVP complies with government and industry regulations.",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "The advantage of IBM Cloud Code Engine using Kubernetes infrastructure to run applications that serve HTTP requests is_________:"
                , options: ["That the Kubernetes infrastructure is invisible to developers and they can just focus on their code.","That they can take advantage of open-source technologies","That they can manage and work within the Kubernetes infrastructure to optimize their work.","That they can use Knative to rout and traffic management of applications.",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "Into the architecture, which are the main tasks of the Code Engine, select all that apply:"
                , options: ["Clones the Github repo","Builds the container images","Generate traffic to the Bee Travels","None of the above",]
                , matchoptions: []
                , optionstoselect: 2
                , answeridx: [0,1]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 3
                , questiontype: 2
                , questiontext: "To build and deploy a microservices app to IBM Code Engine you will need to perform five main steps. Put the following steps in the correct sequence as you performed them in the lab."
                , options: ["Clone the Repo","Login to IBM Cloud using CLI","Install Plugins","Run, Build, and Deploy.SH","Generate Traffic using IBM Load Generator",]
                , matchoptions: ["1","2","3","4","5"]
                , optionstoselect: 0
                , answeridx: []
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "When you Build and Deploy to Code Engine you are requested to use Line 9 which is responsible for creating a project named Bee travels. That project is essential since it will allow you to isolate networks, share of resources, and grouping together applications and jobs that are related."
                , options: ["TRUE","FALSE",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [0]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "A developer generating traffic to his application is watching the instance count of his UI application. The number of instances should auto-scale up to ____ when the traffic is being generated and back down to ____ once it stops."
                , options: ["100  -  0","10 - 0","10 - 1","100 - 1",]
                , matchoptions: []
                , optionstoselect: 1
                , answeridx: [2]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                {
                courseid: 4
                , quiznumber: 3
                , questiontype: 1
                , questiontext: "What tasks were you able to achieve using only the IBM Cloud Command Line Interface? Select all that apply."
                , options: ["Download Plugins","Generate traffic to an application","Clone a github repository locally","Log in and access your IBM Cloud account",]
                , matchoptions: []
                , optionstoselect: 3
                , answeridx: [0,2,3]
                , hintind: 0
                , hinttxt: ""
                , hinttxt1: ""
                , hinttxt2: ""
                , hintcards: 0
                , hintcardtitles: []
                , hintcardtext: []
                },
                
        ]
    });

    await prisma.questionresponses.createMany({
        data: [
            {year: 2024, month: 7, day: 1, questionid: 1, timesasked: 1529,timescorrect: 396, timescorrectwithhint: 559, timesincorrect: 367, timesincorrectwithhint: 207},
{year: 2024, month: 7, day: 1, questionid: 2, timesasked: 1824,timescorrect: 548, timescorrectwithhint: 712, timesincorrect: 363, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 1, questionid: 3, timesasked: 1267,timescorrect: 273, timescorrectwithhint: 430, timesincorrect: 359, timesincorrectwithhint: 205},
{year: 2024, month: 7, day: 1, questionid: 4, timesasked: 1259,timescorrect: 380, timescorrectwithhint: 492, timesincorrect: 248, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 1, questionid: 5, timesasked: 1322,timescorrect: 324, timescorrectwithhint: 472, timesincorrect: 336, timesincorrectwithhint: 190},
{year: 2024, month: 7, day: 1, questionid: 6, timesasked: 1693,timescorrect: 531, timescorrectwithhint: 674, timesincorrect: 315, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 1, questionid: 7, timesasked: 1036,timescorrect: 254, timescorrectwithhint: 370, timesincorrect: 263, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 1, questionid: 8, timesasked: 1754,timescorrect: 553, timescorrectwithhint: 700, timesincorrect: 323, timesincorrectwithhint: 178},
{year: 2024, month: 7, day: 1, questionid: 9, timesasked: 1041,timescorrect: 378, timescorrectwithhint: 445, timesincorrect: 142, timesincorrectwithhint: 76},
{year: 2024, month: 7, day: 1, questionid: 10, timesasked: 1864,timescorrect: 421, timescorrectwithhint: 644, timesincorrect: 510, timesincorrectwithhint: 289},
{year: 2024, month: 7, day: 1, questionid: 11, timesasked: 1984,timescorrect: 570, timescorrectwithhint: 758, timesincorrect: 421, timesincorrectwithhint: 235},
{year: 2024, month: 7, day: 1, questionid: 12, timesasked: 1671,timescorrect: 268, timescorrectwithhint: 511, timesincorrect: 567, timesincorrectwithhint: 325},
{year: 2024, month: 7, day: 1, questionid: 13, timesasked: 1364,timescorrect: 381, timescorrectwithhint: 515, timesincorrect: 300, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 1, questionid: 14, timesasked: 1385,timescorrect: 412, timescorrectwithhint: 538, timesincorrect: 279, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 1, questionid: 15, timesasked: 1692,timescorrect: 626, timescorrectwithhint: 731, timesincorrect: 219, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 1, questionid: 16, timesasked: 1951,timescorrect: 499, timescorrectwithhint: 709, timesincorrect: 476, timesincorrectwithhint: 267},
{year: 2024, month: 7, day: 1, questionid: 17, timesasked: 1079,timescorrect: 208, timescorrectwithhint: 351, timesincorrect: 330, timesincorrectwithhint: 190},
{year: 2024, month: 7, day: 1, questionid: 18, timesasked: 1017,timescorrect: 248, timescorrectwithhint: 362, timesincorrect: 260, timesincorrectwithhint: 147},
{year: 2024, month: 7, day: 1, questionid: 19, timesasked: 1567,timescorrect: 552, timescorrectwithhint: 660, timesincorrect: 231, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 1, questionid: 20, timesasked: 1463,timescorrect: 404, timescorrectwithhint: 549, timesincorrect: 327, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 1, questionid: 21, timesasked: 1899,timescorrect: 390, timescorrectwithhint: 632, timesincorrect: 559, timesincorrectwithhint: 318},
{year: 2024, month: 7, day: 1, questionid: 22, timesasked: 1458,timescorrect: 306, timescorrectwithhint: 490, timesincorrect: 422, timesincorrectwithhint: 240},
{year: 2024, month: 7, day: 1, questionid: 23, timesasked: 1174,timescorrect: 464, timescorrectwithhint: 525, timesincorrect: 122, timesincorrectwithhint: 63},
{year: 2024, month: 7, day: 1, questionid: 24, timesasked: 1263,timescorrect: 372, timescorrectwithhint: 488, timesincorrect: 259, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 1, questionid: 25, timesasked: 1182,timescorrect: 213, timescorrectwithhint: 376, timesincorrect: 377, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 1, questionid: 26, timesasked: 1245,timescorrect: 491, timescorrectwithhint: 556, timesincorrect: 130, timesincorrectwithhint: 68},
{year: 2024, month: 7, day: 1, questionid: 27, timesasked: 1493,timescorrect: 351, timescorrectwithhint: 524, timesincorrect: 395, timesincorrectwithhint: 223},
{year: 2024, month: 7, day: 1, questionid: 28, timesasked: 1098,timescorrect: 269, timescorrectwithhint: 392, timesincorrect: 279, timesincorrectwithhint: 158},
{year: 2024, month: 7, day: 1, questionid: 29, timesasked: 1083,timescorrect: 306, timescorrectwithhint: 411, timesincorrect: 234, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 1, questionid: 30, timesasked: 1219,timescorrect: 467, timescorrectwithhint: 536, timesincorrect: 141, timesincorrectwithhint: 75},
{year: 2024, month: 7, day: 1, questionid: 31, timesasked: 1336,timescorrect: 228, timescorrectwithhint: 417, timesincorrect: 439, timesincorrectwithhint: 252},
{year: 2024, month: 7, day: 1, questionid: 32, timesasked: 1237,timescorrect: 385, timescorrectwithhint: 490, timesincorrect: 233, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 1, questionid: 33, timesasked: 1411,timescorrect: 378, timescorrectwithhint: 523, timesincorrect: 327, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 1, questionid: 34, timesasked: 1241,timescorrect: 243, timescorrectwithhint: 406, timesincorrect: 376, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 1, questionid: 35, timesasked: 1002,timescorrect: 342, timescorrectwithhint: 416, timesincorrect: 158, timesincorrectwithhint: 86},
{year: 2024, month: 7, day: 1, questionid: 36, timesasked: 1812,timescorrect: 531, timescorrectwithhint: 699, timesincorrect: 374, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 1, questionid: 37, timesasked: 1282,timescorrect: 260, timescorrectwithhint: 425, timesincorrect: 380, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 1, questionid: 38, timesasked: 1509,timescorrect: 345, timescorrectwithhint: 524, timesincorrect: 409, timesincorrectwithhint: 231},
{year: 2024, month: 7, day: 1, questionid: 39, timesasked: 1893,timescorrect: 414, timescorrectwithhint: 646, timesincorrect: 532, timesincorrectwithhint: 301},
{year: 2024, month: 7, day: 1, questionid: 40, timesasked: 1275,timescorrect: 415, timescorrectwithhint: 517, timesincorrect: 221, timesincorrectwithhint: 122},
{year: 2024, month: 7, day: 1, questionid: 41, timesasked: 1472,timescorrect: 572, timescorrectwithhint: 652, timesincorrect: 163, timesincorrectwithhint: 85},
{year: 2024, month: 7, day: 1, questionid: 42, timesasked: 1041,timescorrect: 239, timescorrectwithhint: 362, timesincorrect: 281, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 1, questionid: 43, timesasked: 1263,timescorrect: 285, timescorrectwithhint: 436, timesincorrect: 345, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 1, questionid: 44, timesasked: 1450,timescorrect: 292, timescorrectwithhint: 479, timesincorrect: 432, timesincorrectwithhint: 247},
{year: 2024, month: 7, day: 1, questionid: 45, timesasked: 1786,timescorrect: 421, timescorrectwithhint: 627, timesincorrect: 471, timesincorrectwithhint: 267},
{year: 2024, month: 7, day: 1, questionid: 46, timesasked: 1645,timescorrect: 500, timescorrectwithhint: 646, timesincorrect: 321, timesincorrectwithhint: 178},
{year: 2024, month: 7, day: 1, questionid: 47, timesasked: 1959,timescorrect: 391, timescorrectwithhint: 646, timesincorrect: 587, timesincorrectwithhint: 335},
{year: 2024, month: 7, day: 1, questionid: 48, timesasked: 1708,timescorrect: 624, timescorrectwithhint: 733, timesincorrect: 229, timesincorrectwithhint: 122},
{year: 2024, month: 7, day: 1, questionid: 49, timesasked: 1784,timescorrect: 412, timescorrectwithhint: 622, timesincorrect: 479, timesincorrectwithhint: 271},
{year: 2024, month: 7, day: 1, questionid: 50, timesasked: 1335,timescorrect: 466, timescorrectwithhint: 560, timesincorrect: 200, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 1, questionid: 51, timesasked: 1865,timescorrect: 605, timescorrectwithhint: 754, timesincorrect: 327, timesincorrectwithhint: 179},
{year: 2024, month: 7, day: 1, questionid: 52, timesasked: 1780,timescorrect: 575, timescorrectwithhint: 718, timesincorrect: 314, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 1, questionid: 53, timesasked: 1016,timescorrect: 240, timescorrectwithhint: 357, timesincorrect: 267, timesincorrectwithhint: 152},
{year: 2024, month: 7, day: 1, questionid: 54, timesasked: 1778,timescorrect: 634, timescorrectwithhint: 753, timesincorrect: 254, timesincorrectwithhint: 137},
{year: 2024, month: 7, day: 1, questionid: 55, timesasked: 1802,timescorrect: 611, timescorrectwithhint: 745, timesincorrect: 289, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 1, questionid: 56, timesasked: 1277,timescorrect: 225, timescorrectwithhint: 403, timesincorrect: 413, timesincorrectwithhint: 236},
{year: 2024, month: 7, day: 1, questionid: 57, timesasked: 1364,timescorrect: 377, timescorrectwithhint: 513, timesincorrect: 304, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 1, questionid: 58, timesasked: 1686,timescorrect: 571, timescorrectwithhint: 696, timesincorrect: 271, timesincorrectwithhint: 148},
{year: 2024, month: 7, day: 1, questionid: 59, timesasked: 1414,timescorrect: 409, timescorrectwithhint: 542, timesincorrect: 297, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 1, questionid: 60, timesasked: 1075,timescorrect: 415, timescorrectwithhint: 475, timesincorrect: 121, timesincorrectwithhint: 64},
{year: 2024, month: 7, day: 1, questionid: 61, timesasked: 1908,timescorrect: 713, timescorrectwithhint: 828, timesincorrect: 240, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 1, questionid: 62, timesasked: 1030,timescorrect: 358, timescorrectwithhint: 431, timesincorrect: 156, timesincorrectwithhint: 85},
{year: 2024, month: 7, day: 1, questionid: 63, timesasked: 1781,timescorrect: 364, timescorrectwithhint: 592, timesincorrect: 525, timesincorrectwithhint: 300},
{year: 2024, month: 7, day: 1, questionid: 64, timesasked: 1689,timescorrect: 304, timescorrectwithhint: 537, timesincorrect: 539, timesincorrectwithhint: 309},
{year: 2024, month: 7, day: 1, questionid: 65, timesasked: 1478,timescorrect: 559, timescorrectwithhint: 645, timesincorrect: 179, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 1, questionid: 66, timesasked: 1817,timescorrect: 335, timescorrectwithhint: 582, timesincorrect: 573, timesincorrectwithhint: 327},
{year: 2024, month: 7, day: 1, questionid: 67, timesasked: 1071,timescorrect: 288, timescorrectwithhint: 397, timesincorrect: 247, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 1, questionid: 68, timesasked: 1301,timescorrect: 462, timescorrectwithhint: 550, timesincorrect: 187, timesincorrectwithhint: 102},
{year: 2024, month: 7, day: 1, questionid: 69, timesasked: 1360,timescorrect: 264, timescorrectwithhint: 444, timesincorrect: 415, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 1, questionid: 70, timesasked: 1141,timescorrect: 361, timescorrectwithhint: 456, timesincorrect: 209, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 1, questionid: 71, timesasked: 1101,timescorrect: 363, timescorrectwithhint: 449, timesincorrect: 186, timesincorrectwithhint: 103},
{year: 2024, month: 7, day: 1, questionid: 72, timesasked: 1511,timescorrect: 497, timescorrectwithhint: 615, timesincorrect: 258, timesincorrectwithhint: 141},
{year: 2024, month: 7, day: 1, questionid: 73, timesasked: 1780,timescorrect: 385, timescorrectwithhint: 605, timesincorrect: 504, timesincorrectwithhint: 286},
{year: 2024, month: 7, day: 1, questionid: 74, timesasked: 1767,timescorrect: 281, timescorrectwithhint: 540, timesincorrect: 601, timesincorrectwithhint: 345},
{year: 2024, month: 7, day: 1, questionid: 75, timesasked: 1695,timescorrect: 629, timescorrectwithhint: 733, timesincorrect: 217, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 1, questionid: 76, timesasked: 1904,timescorrect: 523, timescorrectwithhint: 714, timesincorrect: 428, timesincorrectwithhint: 239},
{year: 2024, month: 7, day: 1, questionid: 77, timesasked: 1557,timescorrect: 609, timescorrectwithhint: 692, timesincorrect: 169, timesincorrectwithhint: 87},
{year: 2024, month: 7, day: 1, questionid: 78, timesasked: 1213,timescorrect: 198, timescorrectwithhint: 374, timesincorrect: 407, timesincorrectwithhint: 234},
{year: 2024, month: 7, day: 1, questionid: 79, timesasked: 1849,timescorrect: 402, timescorrectwithhint: 630, timesincorrect: 521, timesincorrectwithhint: 296},
{year: 2024, month: 7, day: 1, questionid: 80, timesasked: 1399,timescorrect: 319, timescorrectwithhint: 485, timesincorrect: 379, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 1, questionid: 81, timesasked: 1487,timescorrect: 352, timescorrectwithhint: 523, timesincorrect: 390, timesincorrectwithhint: 222},
{year: 2024, month: 7, day: 1, questionid: 82, timesasked: 1694,timescorrect: 368, timescorrectwithhint: 577, timesincorrect: 478, timesincorrectwithhint: 271},
{year: 2024, month: 7, day: 1, questionid: 83, timesasked: 1348,timescorrect: 436, timescorrectwithhint: 544, timesincorrect: 237, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 1, questionid: 84, timesasked: 1920,timescorrect: 505, timescorrectwithhint: 706, timesincorrect: 454, timesincorrectwithhint: 255},
{year: 2024, month: 7, day: 1, questionid: 85, timesasked: 1422,timescorrect: 538, timescorrectwithhint: 621, timesincorrect: 172, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 1, questionid: 86, timesasked: 1836,timescorrect: 297, timescorrectwithhint: 564, timesincorrect: 620, timesincorrectwithhint: 355},
{year: 2024, month: 7, day: 1, questionid: 87, timesasked: 1064,timescorrect: 304, timescorrectwithhint: 406, timesincorrect: 227, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 1, questionid: 88, timesasked: 1930,timescorrect: 743, timescorrectwithhint: 851, timesincorrect: 221, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 1, questionid: 89, timesasked: 1125,timescorrect: 256, timescorrectwithhint: 390, timesincorrect: 306, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 1, questionid: 90, timesasked: 1274,timescorrect: 447, timescorrectwithhint: 535, timesincorrect: 189, timesincorrectwithhint: 103},
{year: 2024, month: 7, day: 1, questionid: 91, timesasked: 1274,timescorrect: 491, timescorrectwithhint: 562, timesincorrect: 145, timesincorrectwithhint: 76},
{year: 2024, month: 7, day: 1, questionid: 92, timesasked: 1846,timescorrect: 497, timescorrectwithhint: 686, timesincorrect: 425, timesincorrectwithhint: 238},
{year: 2024, month: 7, day: 1, questionid: 93, timesasked: 1961,timescorrect: 389, timescorrectwithhint: 645, timesincorrect: 590, timesincorrectwithhint: 337},
{year: 2024, month: 7, day: 1, questionid: 94, timesasked: 1044,timescorrect: 267, timescorrectwithhint: 379, timesincorrect: 254, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 1, questionid: 95, timesasked: 1089,timescorrect: 310, timescorrectwithhint: 415, timesincorrect: 233, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 1, questionid: 96, timesasked: 1099,timescorrect: 399, timescorrectwithhint: 470, timesincorrect: 149, timesincorrectwithhint: 81},
{year: 2024, month: 7, day: 1, questionid: 97, timesasked: 1186,timescorrect: 469, timescorrectwithhint: 530, timesincorrect: 123, timesincorrectwithhint: 64},
{year: 2024, month: 7, day: 2, questionid: 1, timesasked: 1416,timescorrect: 531, timescorrectwithhint: 616, timesincorrect: 176, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 2, questionid: 2, timesasked: 1486,timescorrect: 539, timescorrectwithhint: 635, timesincorrect: 203, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 2, questionid: 3, timesasked: 1504,timescorrect: 350, timescorrectwithhint: 526, timesincorrect: 401, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 2, questionid: 4, timesasked: 1984,timescorrect: 785, timescorrectwithhint: 888, timesincorrect: 206, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 2, questionid: 5, timesasked: 1216,timescorrect: 315, timescorrectwithhint: 444, timesincorrect: 292, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 2, questionid: 6, timesasked: 1912,timescorrect: 320, timescorrectwithhint: 593, timesincorrect: 635, timesincorrectwithhint: 364},
{year: 2024, month: 7, day: 2, questionid: 7, timesasked: 1480,timescorrect: 398, timescorrectwithhint: 549, timesincorrect: 341, timesincorrectwithhint: 192},
{year: 2024, month: 7, day: 2, questionid: 8, timesasked: 1565,timescorrect: 599, timescorrectwithhint: 688, timesincorrect: 183, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 2, questionid: 9, timesasked: 1143,timescorrect: 362, timescorrectwithhint: 457, timesincorrect: 208, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 2, questionid: 10, timesasked: 1559,timescorrect: 252, timescorrectwithhint: 479, timesincorrect: 526, timesincorrectwithhint: 302},
{year: 2024, month: 7, day: 2, questionid: 11, timesasked: 1650,timescorrect: 340, timescorrectwithhint: 550, timesincorrect: 484, timesincorrectwithhint: 276},
{year: 2024, month: 7, day: 2, questionid: 12, timesasked: 1736,timescorrect: 319, timescorrectwithhint: 556, timesincorrect: 548, timesincorrectwithhint: 313},
{year: 2024, month: 7, day: 2, questionid: 13, timesasked: 1180,timescorrect: 301, timescorrectwithhint: 428, timesincorrect: 288, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 2, questionid: 14, timesasked: 1063,timescorrect: 172, timescorrectwithhint: 326, timesincorrect: 358, timesincorrectwithhint: 207},
{year: 2024, month: 7, day: 2, questionid: 15, timesasked: 1853,timescorrect: 610, timescorrectwithhint: 755, timesincorrect: 316, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 2, questionid: 16, timesasked: 1761,timescorrect: 479, timescorrectwithhint: 657, timesincorrect: 401, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 2, questionid: 17, timesasked: 1984,timescorrect: 409, timescorrectwithhint: 662, timesincorrect: 582, timesincorrectwithhint: 331},
{year: 2024, month: 7, day: 2, questionid: 18, timesasked: 1574,timescorrect: 428, timescorrectwithhint: 587, timesincorrect: 358, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 2, questionid: 19, timesasked: 1378,timescorrect: 364, timescorrectwithhint: 508, timesincorrect: 324, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 2, questionid: 20, timesasked: 1603,timescorrect: 253, timescorrectwithhint: 488, timesincorrect: 547, timesincorrectwithhint: 315},
{year: 2024, month: 7, day: 2, questionid: 21, timesasked: 1841,timescorrect: 374, timescorrectwithhint: 611, timesincorrect: 545, timesincorrectwithhint: 311},
{year: 2024, month: 7, day: 2, questionid: 22, timesasked: 1136,timescorrect: 299, timescorrectwithhint: 418, timesincorrect: 268, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 2, questionid: 23, timesasked: 1908,timescorrect: 313, timescorrectwithhint: 588, timesincorrect: 640, timesincorrectwithhint: 367},
{year: 2024, month: 7, day: 2, questionid: 24, timesasked: 1521,timescorrect: 545, timescorrectwithhint: 646, timesincorrect: 215, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 2, questionid: 25, timesasked: 1783,timescorrect: 683, timescorrectwithhint: 784, timesincorrect: 208, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 2, questionid: 26, timesasked: 1747,timescorrect: 508, timescorrectwithhint: 671, timesincorrect: 365, timesincorrectwithhint: 203},
{year: 2024, month: 7, day: 2, questionid: 27, timesasked: 1403,timescorrect: 285, timescorrectwithhint: 466, timesincorrect: 415, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 2, questionid: 28, timesasked: 1083,timescorrect: 344, timescorrectwithhint: 434, timesincorrect: 197, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 2, questionid: 29, timesasked: 1868,timescorrect: 695, timescorrectwithhint: 809, timesincorrect: 238, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 2, questionid: 30, timesasked: 1427,timescorrect: 300, timescorrectwithhint: 479, timesincorrect: 413, timesincorrectwithhint: 235},
{year: 2024, month: 7, day: 2, questionid: 31, timesasked: 1683,timescorrect: 606, timescorrectwithhint: 717, timesincorrect: 234, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 2, questionid: 32, timesasked: 1417,timescorrect: 434, timescorrectwithhint: 558, timesincorrect: 273, timesincorrectwithhint: 152},
{year: 2024, month: 7, day: 2, questionid: 33, timesasked: 1985,timescorrect: 534, timescorrectwithhint: 737, timesincorrect: 457, timesincorrectwithhint: 257},
{year: 2024, month: 7, day: 2, questionid: 34, timesasked: 1329,timescorrect: 323, timescorrectwithhint: 473, timesincorrect: 340, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 2, questionid: 35, timesasked: 1963,timescorrect: 501, timescorrectwithhint: 713, timesincorrect: 479, timesincorrectwithhint: 270},
{year: 2024, month: 7, day: 2, questionid: 36, timesasked: 1022,timescorrect: 340, timescorrectwithhint: 419, timesincorrect: 170, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 2, questionid: 37, timesasked: 1955,timescorrect: 548, timescorrectwithhint: 739, timesincorrect: 429, timesincorrectwithhint: 239},
{year: 2024, month: 7, day: 2, questionid: 38, timesasked: 1343,timescorrect: 490, timescorrectwithhint: 576, timesincorrect: 181, timesincorrectwithhint: 96},
{year: 2024, month: 7, day: 2, questionid: 39, timesasked: 1179,timescorrect: 251, timescorrectwithhint: 398, timesincorrect: 337, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 2, questionid: 40, timesasked: 1265,timescorrect: 407, timescorrectwithhint: 510, timesincorrect: 224, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 2, questionid: 41, timesasked: 1358,timescorrect: 213, timescorrectwithhint: 413, timesincorrect: 465, timesincorrectwithhint: 267},
{year: 2024, month: 7, day: 2, questionid: 42, timesasked: 1122,timescorrect: 352, timescorrectwithhint: 447, timesincorrect: 208, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 2, questionid: 43, timesasked: 1951,timescorrect: 702, timescorrectwithhint: 831, timesincorrect: 272, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 2, questionid: 44, timesasked: 1978,timescorrect: 515, timescorrectwithhint: 724, timesincorrect: 473, timesincorrectwithhint: 266},
{year: 2024, month: 7, day: 2, questionid: 45, timesasked: 1269,timescorrect: 425, timescorrectwithhint: 521, timesincorrect: 208, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 2, questionid: 46, timesasked: 1833,timescorrect: 477, timescorrectwithhint: 671, timesincorrect: 439, timesincorrectwithhint: 246},
{year: 2024, month: 7, day: 2, questionid: 47, timesasked: 1507,timescorrect: 374, timescorrectwithhint: 541, timesincorrect: 378, timesincorrectwithhint: 214},
{year: 2024, month: 7, day: 2, questionid: 48, timesasked: 1389,timescorrect: 331, timescorrectwithhint: 490, timesincorrect: 363, timesincorrectwithhint: 205},
{year: 2024, month: 7, day: 2, questionid: 49, timesasked: 1299,timescorrect: 452, timescorrectwithhint: 544, timesincorrect: 196, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 2, questionid: 50, timesasked: 1400,timescorrect: 307, timescorrectwithhint: 478, timesincorrect: 392, timesincorrectwithhint: 223},
{year: 2024, month: 7, day: 2, questionid: 51, timesasked: 1651,timescorrect: 506, timescorrectwithhint: 650, timesincorrect: 319, timesincorrectwithhint: 176},
{year: 2024, month: 7, day: 2, questionid: 52, timesasked: 1309,timescorrect: 440, timescorrectwithhint: 539, timesincorrect: 214, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 2, questionid: 53, timesasked: 1721,timescorrect: 517, timescorrectwithhint: 672, timesincorrect: 342, timesincorrectwithhint: 190},
{year: 2024, month: 7, day: 2, questionid: 54, timesasked: 1533,timescorrect: 361, timescorrectwithhint: 538, timesincorrect: 405, timesincorrectwithhint: 229},
{year: 2024, month: 7, day: 2, questionid: 55, timesasked: 1140,timescorrect: 401, timescorrectwithhint: 480, timesincorrect: 168, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 2, questionid: 56, timesasked: 1178,timescorrect: 300, timescorrectwithhint: 427, timesincorrect: 288, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 2, questionid: 57, timesasked: 1402,timescorrect: 346, timescorrectwithhint: 502, timesincorrect: 354, timesincorrectwithhint: 200},
{year: 2024, month: 7, day: 2, questionid: 58, timesasked: 1315,timescorrect: 302, timescorrectwithhint: 457, timesincorrect: 354, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 2, questionid: 59, timesasked: 1677,timescorrect: 285, timescorrectwithhint: 523, timesincorrect: 552, timesincorrectwithhint: 317},
{year: 2024, month: 7, day: 2, questionid: 60, timesasked: 1735,timescorrect: 651, timescorrectwithhint: 755, timesincorrect: 215, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 2, questionid: 61, timesasked: 1952,timescorrect: 487, timescorrectwithhint: 702, timesincorrect: 488, timesincorrectwithhint: 275},
{year: 2024, month: 7, day: 2, questionid: 62, timesasked: 1413,timescorrect: 427, timescorrectwithhint: 553, timesincorrect: 278, timesincorrectwithhint: 155},
{year: 2024, month: 7, day: 2, questionid: 63, timesasked: 1204,timescorrect: 328, timescorrectwithhint: 449, timesincorrect: 273, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 2, questionid: 64, timesasked: 1858,timescorrect: 699, timescorrectwithhint: 809, timesincorrect: 229, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 2, questionid: 65, timesasked: 1274,timescorrect: 191, timescorrectwithhint: 382, timesincorrect: 445, timesincorrectwithhint: 256},
{year: 2024, month: 7, day: 2, questionid: 66, timesasked: 1751,timescorrect: 292, timescorrectwithhint: 543, timesincorrect: 582, timesincorrectwithhint: 334},
{year: 2024, month: 7, day: 2, questionid: 67, timesasked: 1898,timescorrect: 706, timescorrectwithhint: 822, timesincorrect: 242, timesincorrectwithhint: 128},
{year: 2024, month: 7, day: 2, questionid: 68, timesasked: 1269,timescorrect: 310, timescorrectwithhint: 452, timesincorrect: 323, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 2, questionid: 69, timesasked: 1859,timescorrect: 618, timescorrectwithhint: 761, timesincorrect: 310, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 2, questionid: 70, timesasked: 1736,timescorrect: 344, timescorrectwithhint: 571, timesincorrect: 523, timesincorrectwithhint: 298},
{year: 2024, month: 7, day: 2, questionid: 71, timesasked: 1987,timescorrect: 375, timescorrectwithhint: 642, timesincorrect: 618, timesincorrectwithhint: 352},
{year: 2024, month: 7, day: 2, questionid: 72, timesasked: 1509,timescorrect: 552, timescorrectwithhint: 648, timesincorrect: 201, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 2, questionid: 73, timesasked: 1154,timescorrect: 253, timescorrectwithhint: 394, timesincorrect: 323, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 2, questionid: 74, timesasked: 1921,timescorrect: 575, timescorrectwithhint: 748, timesincorrect: 385, timesincorrectwithhint: 213},
{year: 2024, month: 7, day: 2, questionid: 75, timesasked: 1250,timescorrect: 446, timescorrectwithhint: 530, timesincorrect: 178, timesincorrectwithhint: 96},
{year: 2024, month: 7, day: 2, questionid: 76, timesasked: 1712,timescorrect: 622, timescorrectwithhint: 732, timesincorrect: 233, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 2, questionid: 77, timesasked: 1369,timescorrect: 372, timescorrectwithhint: 511, timesincorrect: 311, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 2, questionid: 78, timesasked: 1149,timescorrect: 427, timescorrectwithhint: 498, timesincorrect: 146, timesincorrectwithhint: 78},
{year: 2024, month: 7, day: 2, questionid: 79, timesasked: 1684,timescorrect: 607, timescorrectwithhint: 718, timesincorrect: 234, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 2, questionid: 80, timesasked: 1797,timescorrect: 523, timescorrectwithhint: 691, timesincorrect: 375, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 2, questionid: 81, timesasked: 1044,timescorrect: 213, timescorrectwithhint: 347, timesincorrect: 308, timesincorrectwithhint: 176},
{year: 2024, month: 7, day: 2, questionid: 82, timesasked: 1331,timescorrect: 475, timescorrectwithhint: 564, timesincorrect: 190, timesincorrectwithhint: 102},
{year: 2024, month: 7, day: 2, questionid: 83, timesasked: 1420,timescorrect: 444, timescorrectwithhint: 564, timesincorrect: 265, timesincorrectwithhint: 147},
{year: 2024, month: 7, day: 2, questionid: 84, timesasked: 1457,timescorrect: 455, timescorrectwithhint: 579, timesincorrect: 273, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 2, questionid: 85, timesasked: 1832,timescorrect: 321, timescorrectwithhint: 577, timesincorrect: 594, timesincorrectwithhint: 340},
{year: 2024, month: 7, day: 2, questionid: 86, timesasked: 1142,timescorrect: 211, timescorrectwithhint: 366, timesincorrect: 359, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 2, questionid: 87, timesasked: 1430,timescorrect: 526, timescorrectwithhint: 616, timesincorrect: 188, timesincorrectwithhint: 100},
{year: 2024, month: 7, day: 2, questionid: 88, timesasked: 1108,timescorrect: 182, timescorrectwithhint: 342, timesincorrect: 371, timesincorrectwithhint: 213},
{year: 2024, month: 7, day: 2, questionid: 89, timesasked: 1736,timescorrect: 387, timescorrectwithhint: 596, timesincorrect: 480, timesincorrectwithhint: 273},
{year: 2024, month: 7, day: 2, questionid: 90, timesasked: 1312,timescorrect: 511, timescorrectwithhint: 582, timesincorrect: 144, timesincorrectwithhint: 75},
{year: 2024, month: 7, day: 2, questionid: 91, timesasked: 1668,timescorrect: 503, timescorrectwithhint: 652, timesincorrect: 330, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 2, questionid: 92, timesasked: 1633,timescorrect: 376, timescorrectwithhint: 568, timesincorrect: 440, timesincorrectwithhint: 249},
{year: 2024, month: 7, day: 2, questionid: 93, timesasked: 1659,timescorrect: 567, timescorrectwithhint: 689, timesincorrect: 261, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 2, questionid: 94, timesasked: 1528,timescorrect: 367, timescorrectwithhint: 541, timesincorrect: 396, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 2, questionid: 95, timesasked: 1854,timescorrect: 443, timescorrectwithhint: 655, timesincorrect: 483, timesincorrectwithhint: 273},
{year: 2024, month: 7, day: 2, questionid: 96, timesasked: 1371,timescorrect: 512, timescorrectwithhint: 595, timesincorrect: 172, timesincorrectwithhint: 92},
{year: 2024, month: 7, day: 2, questionid: 97, timesasked: 1555,timescorrect: 511, timescorrectwithhint: 633, timesincorrect: 265, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 3, questionid: 1, timesasked: 1524,timescorrect: 352, timescorrectwithhint: 531, timesincorrect: 409, timesincorrectwithhint: 232},
{year: 2024, month: 7, day: 3, questionid: 2, timesasked: 1626,timescorrect: 291, timescorrectwithhint: 516, timesincorrect: 521, timesincorrectwithhint: 298},
{year: 2024, month: 7, day: 3, questionid: 3, timesasked: 1963,timescorrect: 608, timescorrectwithhint: 777, timesincorrect: 372, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 3, questionid: 4, timesasked: 1377,timescorrect: 222, timescorrectwithhint: 422, timesincorrect: 465, timesincorrectwithhint: 268},
{year: 2024, month: 7, day: 3, questionid: 5, timesasked: 1685,timescorrect: 294, timescorrectwithhint: 530, timesincorrect: 548, timesincorrectwithhint: 313},
{year: 2024, month: 7, day: 3, questionid: 6, timesasked: 1485,timescorrect: 567, timescorrectwithhint: 652, timesincorrect: 175, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 3, questionid: 7, timesasked: 1462,timescorrect: 393, timescorrectwithhint: 542, timesincorrect: 337, timesincorrectwithhint: 190},
{year: 2024, month: 7, day: 3, questionid: 8, timesasked: 1248,timescorrect: 232, timescorrectwithhint: 401, timesincorrect: 391, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 3, questionid: 9, timesasked: 1134,timescorrect: 313, timescorrectwithhint: 426, timesincorrect: 253, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 3, questionid: 10, timesasked: 1620,timescorrect: 629, timescorrectwithhint: 717, timesincorrect: 180, timesincorrectwithhint: 94},
{year: 2024, month: 7, day: 3, questionid: 11, timesasked: 1777,timescorrect: 678, timescorrectwithhint: 780, timesincorrect: 210, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 3, questionid: 12, timesasked: 1107,timescorrect: 201, timescorrectwithhint: 353, timesincorrect: 351, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 3, questionid: 13, timesasked: 1334,timescorrect: 298, timescorrectwithhint: 459, timesincorrect: 368, timesincorrectwithhint: 209},
{year: 2024, month: 7, day: 3, questionid: 14, timesasked: 1924,timescorrect: 388, timescorrectwithhint: 636, timesincorrect: 573, timesincorrectwithhint: 327},
{year: 2024, month: 7, day: 3, questionid: 15, timesasked: 1555,timescorrect: 383, timescorrectwithhint: 556, timesincorrect: 393, timesincorrectwithhint: 223},
{year: 2024, month: 7, day: 3, questionid: 16, timesasked: 1541,timescorrect: 582, timescorrectwithhint: 672, timesincorrect: 188, timesincorrectwithhint: 99},
{year: 2024, month: 7, day: 3, questionid: 17, timesasked: 1501,timescorrect: 445, timescorrectwithhint: 582, timesincorrect: 305, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 3, questionid: 18, timesasked: 1476,timescorrect: 438, timescorrectwithhint: 573, timesincorrect: 299, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 3, questionid: 19, timesasked: 1995,timescorrect: 513, timescorrectwithhint: 726, timesincorrect: 484, timesincorrectwithhint: 272},
{year: 2024, month: 7, day: 3, questionid: 20, timesasked: 1037,timescorrect: 274, timescorrectwithhint: 382, timesincorrect: 243, timesincorrectwithhint: 138},
{year: 2024, month: 7, day: 3, questionid: 21, timesasked: 1147,timescorrect: 296, timescorrectwithhint: 418, timesincorrect: 277, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 3, questionid: 22, timesasked: 1613,timescorrect: 631, timescorrectwithhint: 717, timesincorrect: 174, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 3, questionid: 23, timesasked: 1227,timescorrect: 339, timescorrectwithhint: 461, timesincorrect: 274, timesincorrectwithhint: 153},
{year: 2024, month: 7, day: 3, questionid: 24, timesasked: 1442,timescorrect: 318, timescorrectwithhint: 493, timesincorrect: 402, timesincorrectwithhint: 229},
{year: 2024, month: 7, day: 3, questionid: 25, timesasked: 1070,timescorrect: 182, timescorrectwithhint: 333, timesincorrect: 352, timesincorrectwithhint: 203},
{year: 2024, month: 7, day: 3, questionid: 26, timesasked: 1451,timescorrect: 404, timescorrectwithhint: 547, timesincorrect: 320, timesincorrectwithhint: 180},
{year: 2024, month: 7, day: 3, questionid: 27, timesasked: 1942,timescorrect: 446, timescorrectwithhint: 675, timesincorrect: 524, timesincorrectwithhint: 297},
{year: 2024, month: 7, day: 3, questionid: 28, timesasked: 1486,timescorrect: 537, timescorrectwithhint: 634, timesincorrect: 205, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 3, questionid: 29, timesasked: 1224,timescorrect: 302, timescorrectwithhint: 438, timesincorrect: 309, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 3, questionid: 30, timesasked: 1038,timescorrect: 265, timescorrectwithhint: 377, timesincorrect: 253, timesincorrectwithhint: 143},
{year: 2024, month: 7, day: 3, questionid: 31, timesasked: 1452,timescorrect: 570, timescorrectwithhint: 647, timesincorrect: 155, timesincorrectwithhint: 80},
{year: 2024, month: 7, day: 3, questionid: 32, timesasked: 1399,timescorrect: 447, timescorrectwithhint: 562, timesincorrect: 251, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 3, questionid: 33, timesasked: 1139,timescorrect: 275, timescorrectwithhint: 404, timesincorrect: 294, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 3, questionid: 34, timesasked: 1857,timescorrect: 721, timescorrectwithhint: 822, timesincorrect: 206, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 3, questionid: 35, timesasked: 1630,timescorrect: 349, timescorrectwithhint: 551, timesincorrect: 465, timesincorrectwithhint: 265},
{year: 2024, month: 7, day: 3, questionid: 36, timesasked: 1701,timescorrect: 614, timescorrectwithhint: 725, timesincorrect: 236, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 3, questionid: 37, timesasked: 1515,timescorrect: 275, timescorrectwithhint: 483, timesincorrect: 481, timesincorrectwithhint: 276},
{year: 2024, month: 7, day: 3, questionid: 38, timesasked: 1011,timescorrect: 246, timescorrectwithhint: 360, timesincorrect: 258, timesincorrectwithhint: 147},
{year: 2024, month: 7, day: 3, questionid: 39, timesasked: 1621,timescorrect: 255, timescorrectwithhint: 493, timesincorrect: 554, timesincorrectwithhint: 319},
{year: 2024, month: 7, day: 3, questionid: 40, timesasked: 1723,timescorrect: 411, timescorrectwithhint: 608, timesincorrect: 450, timesincorrectwithhint: 254},
{year: 2024, month: 7, day: 3, questionid: 41, timesasked: 1131,timescorrect: 314, timescorrectwithhint: 425, timesincorrect: 251, timesincorrectwithhint: 141},
{year: 2024, month: 7, day: 3, questionid: 42, timesasked: 1644,timescorrect: 514, timescorrectwithhint: 653, timesincorrect: 307, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 3, questionid: 43, timesasked: 1541,timescorrect: 246, timescorrectwithhint: 471, timesincorrect: 524, timesincorrectwithhint: 300},
{year: 2024, month: 7, day: 3, questionid: 44, timesasked: 1275,timescorrect: 215, timescorrectwithhint: 397, timesincorrect: 421, timesincorrectwithhint: 242},
{year: 2024, month: 7, day: 3, questionid: 45, timesasked: 1785,timescorrect: 605, timescorrectwithhint: 737, timesincorrect: 287, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 3, questionid: 46, timesasked: 1824,timescorrect: 438, timescorrectwithhint: 646, timesincorrect: 473, timesincorrectwithhint: 267},
{year: 2024, month: 7, day: 3, questionid: 47, timesasked: 1127,timescorrect: 363, timescorrectwithhint: 454, timesincorrect: 200, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 3, questionid: 48, timesasked: 1882,timescorrect: 472, timescorrectwithhint: 678, timesincorrect: 468, timesincorrectwithhint: 264},
{year: 2024, month: 7, day: 3, questionid: 49, timesasked: 1021,timescorrect: 190, timescorrectwithhint: 328, timesincorrect: 320, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 3, questionid: 50, timesasked: 1558,timescorrect: 287, timescorrectwithhint: 499, timesincorrect: 491, timesincorrectwithhint: 281},
{year: 2024, month: 7, day: 3, questionid: 51, timesasked: 1488,timescorrect: 327, timescorrectwithhint: 509, timesincorrect: 416, timesincorrectwithhint: 236},
{year: 2024, month: 7, day: 3, questionid: 52, timesasked: 1153,timescorrect: 176, timescorrectwithhint: 347, timesincorrect: 400, timesincorrectwithhint: 230},
{year: 2024, month: 7, day: 3, questionid: 53, timesasked: 1807,timescorrect: 697, timescorrectwithhint: 798, timesincorrect: 205, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 3, questionid: 54, timesasked: 1286,timescorrect: 364, timescorrectwithhint: 488, timesincorrect: 278, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 3, questionid: 55, timesasked: 1974,timescorrect: 483, timescorrectwithhint: 704, timesincorrect: 503, timesincorrectwithhint: 284},
{year: 2024, month: 7, day: 3, questionid: 56, timesasked: 1926,timescorrect: 332, timescorrectwithhint: 603, timesincorrect: 630, timesincorrectwithhint: 361},
{year: 2024, month: 7, day: 3, questionid: 57, timesasked: 1176,timescorrect: 210, timescorrectwithhint: 373, timesincorrect: 377, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 3, questionid: 58, timesasked: 1187,timescorrect: 189, timescorrectwithhint: 363, timesincorrect: 403, timesincorrectwithhint: 232},
{year: 2024, month: 7, day: 3, questionid: 59, timesasked: 1703,timescorrect: 385, timescorrectwithhint: 589, timesincorrect: 465, timesincorrectwithhint: 264},
{year: 2024, month: 7, day: 3, questionid: 60, timesasked: 1827,timescorrect: 580, timescorrectwithhint: 731, timesincorrect: 333, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 3, questionid: 61, timesasked: 1231,timescorrect: 395, timescorrectwithhint: 495, timesincorrect: 220, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 3, questionid: 62, timesasked: 1806,timescorrect: 529, timescorrectwithhint: 697, timesincorrect: 373, timesincorrectwithhint: 207},
{year: 2024, month: 7, day: 3, questionid: 63, timesasked: 1197,timescorrect: 221, timescorrectwithhint: 384, timesincorrect: 376, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 3, questionid: 64, timesasked: 1447,timescorrect: 413, timescorrectwithhint: 551, timesincorrect: 310, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 3, questionid: 65, timesasked: 1255,timescorrect: 228, timescorrectwithhint: 400, timesincorrect: 399, timesincorrectwithhint: 228},
{year: 2024, month: 7, day: 3, questionid: 66, timesasked: 1717,timescorrect: 434, timescorrectwithhint: 621, timesincorrect: 424, timesincorrectwithhint: 238},
{year: 2024, month: 7, day: 3, questionid: 67, timesasked: 1021,timescorrect: 394, timescorrectwithhint: 451, timesincorrect: 115, timesincorrectwithhint: 61},
{year: 2024, month: 7, day: 3, questionid: 68, timesasked: 1206,timescorrect: 373, timescorrectwithhint: 477, timesincorrect: 229, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 3, questionid: 69, timesasked: 1884,timescorrect: 732, timescorrectwithhint: 834, timesincorrect: 209, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 3, questionid: 70, timesasked: 1841,timescorrect: 682, timescorrectwithhint: 796, timesincorrect: 237, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 3, questionid: 71, timesasked: 1788,timescorrect: 682, timescorrectwithhint: 784, timesincorrect: 211, timesincorrectwithhint: 111},
{year: 2024, month: 7, day: 3, questionid: 72, timesasked: 1980,timescorrect: 537, timescorrectwithhint: 738, timesincorrect: 452, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 3, questionid: 73, timesasked: 1793,timescorrect: 604, timescorrectwithhint: 739, timesincorrect: 292, timesincorrectwithhint: 158},
{year: 2024, month: 7, day: 3, questionid: 74, timesasked: 1022,timescorrect: 349, timescorrectwithhint: 424, timesincorrect: 161, timesincorrectwithhint: 88},
{year: 2024, month: 7, day: 3, questionid: 75, timesasked: 1248,timescorrect: 385, timescorrectwithhint: 493, timesincorrect: 238, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 3, questionid: 76, timesasked: 1712,timescorrect: 460, timescorrectwithhint: 636, timesincorrect: 395, timesincorrectwithhint: 221},
{year: 2024, month: 7, day: 3, questionid: 77, timesasked: 1841,timescorrect: 551, timescorrectwithhint: 717, timesincorrect: 369, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 3, questionid: 78, timesasked: 1988,timescorrect: 584, timescorrectwithhint: 768, timesincorrect: 409, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 3, questionid: 79, timesasked: 1734,timescorrect: 307, timescorrectwithhint: 548, timesincorrect: 559, timesincorrectwithhint: 320},
{year: 2024, month: 7, day: 3, questionid: 80, timesasked: 1728,timescorrect: 640, timescorrectwithhint: 747, timesincorrect: 223, timesincorrectwithhint: 118},
{year: 2024, month: 7, day: 3, questionid: 81, timesasked: 1417,timescorrect: 493, timescorrectwithhint: 593, timesincorrect: 215, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 3, questionid: 82, timesasked: 1597,timescorrect: 523, timescorrectwithhint: 649, timesincorrect: 275, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 3, questionid: 83, timesasked: 1283,timescorrect: 235, timescorrectwithhint: 410, timesincorrect: 405, timesincorrectwithhint: 233},
{year: 2024, month: 7, day: 3, questionid: 84, timesasked: 1319,timescorrect: 525, timescorrectwithhint: 592, timesincorrect: 134, timesincorrectwithhint: 68},
{year: 2024, month: 7, day: 3, questionid: 85, timesasked: 1165,timescorrect: 234, timescorrectwithhint: 385, timesincorrect: 347, timesincorrectwithhint: 199},
{year: 2024, month: 7, day: 3, questionid: 86, timesasked: 1783,timescorrect: 301, timescorrectwithhint: 555, timesincorrect: 589, timesincorrectwithhint: 338},
{year: 2024, month: 7, day: 3, questionid: 87, timesasked: 1463,timescorrect: 457, timescorrectwithhint: 581, timesincorrect: 274, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 3, questionid: 88, timesasked: 1375,timescorrect: 265, timescorrectwithhint: 447, timesincorrect: 422, timesincorrectwithhint: 241},
{year: 2024, month: 7, day: 3, questionid: 89, timesasked: 1429,timescorrect: 534, timescorrectwithhint: 621, timesincorrect: 179, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 3, questionid: 90, timesasked: 1088,timescorrect: 328, timescorrectwithhint: 425, timesincorrect: 215, timesincorrectwithhint: 120},
{year: 2024, month: 7, day: 3, questionid: 91, timesasked: 1835,timescorrect: 283, timescorrectwithhint: 555, timesincorrect: 633, timesincorrectwithhint: 364},
{year: 2024, month: 7, day: 3, questionid: 92, timesasked: 1675,timescorrect: 487, timescorrectwithhint: 643, timesincorrect: 350, timesincorrectwithhint: 195},
{year: 2024, month: 7, day: 3, questionid: 93, timesasked: 1064,timescorrect: 175, timescorrectwithhint: 328, timesincorrect: 356, timesincorrectwithhint: 205},
{year: 2024, month: 7, day: 3, questionid: 94, timesasked: 1333,timescorrect: 385, timescorrectwithhint: 511, timesincorrect: 281, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 3, questionid: 95, timesasked: 1389,timescorrect: 427, timescorrectwithhint: 547, timesincorrect: 267, timesincorrectwithhint: 148},
{year: 2024, month: 7, day: 3, questionid: 96, timesasked: 1766,timescorrect: 517, timescorrectwithhint: 681, timesincorrect: 365, timesincorrectwithhint: 203},
{year: 2024, month: 7, day: 3, questionid: 97, timesasked: 1730,timescorrect: 394, timescorrectwithhint: 600, timesincorrect: 470, timesincorrectwithhint: 266},
{year: 2024, month: 7, day: 4, questionid: 1, timesasked: 1936,timescorrect: 720, timescorrectwithhint: 838, timesincorrect: 247, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 4, questionid: 2, timesasked: 1749,timescorrect: 431, timescorrectwithhint: 626, timesincorrect: 442, timesincorrectwithhint: 250},
{year: 2024, month: 7, day: 4, questionid: 3, timesasked: 1228,timescorrect: 190, timescorrectwithhint: 372, timesincorrect: 423, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 4, questionid: 4, timesasked: 1316,timescorrect: 242, timescorrectwithhint: 421, timesincorrect: 415, timesincorrectwithhint: 238},
{year: 2024, month: 7, day: 4, questionid: 5, timesasked: 1876,timescorrect: 732, timescorrectwithhint: 833, timesincorrect: 205, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 4, questionid: 6, timesasked: 1564,timescorrect: 281, timescorrectwithhint: 497, timesincorrect: 500, timesincorrectwithhint: 286},
{year: 2024, month: 7, day: 4, questionid: 7, timesasked: 1657,timescorrect: 538, timescorrectwithhint: 671, timesincorrect: 289, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 4, questionid: 8, timesasked: 1482,timescorrect: 406, timescorrectwithhint: 555, timesincorrect: 334, timesincorrectwithhint: 187},
{year: 2024, month: 7, day: 4, questionid: 9, timesasked: 1935,timescorrect: 580, timescorrectwithhint: 754, timesincorrect: 386, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 4, questionid: 10, timesasked: 1320,timescorrect: 239, timescorrectwithhint: 421, timesincorrect: 420, timesincorrectwithhint: 240},
{year: 2024, month: 7, day: 4, questionid: 11, timesasked: 1479,timescorrect: 332, timescorrectwithhint: 510, timesincorrect: 407, timesincorrectwithhint: 230},
{year: 2024, month: 7, day: 4, questionid: 12, timesasked: 1450,timescorrect: 261, timescorrectwithhint: 461, timesincorrect: 463, timesincorrectwithhint: 265},
{year: 2024, month: 7, day: 4, questionid: 13, timesasked: 1039,timescorrect: 351, timescorrectwithhint: 429, timesincorrect: 167, timesincorrectwithhint: 92},
{year: 2024, month: 7, day: 4, questionid: 14, timesasked: 1053,timescorrect: 290, timescorrectwithhint: 395, timesincorrect: 236, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 4, questionid: 15, timesasked: 1446,timescorrect: 322, timescorrectwithhint: 497, timesincorrect: 400, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 4, questionid: 16, timesasked: 1570,timescorrect: 523, timescorrectwithhint: 644, timesincorrect: 261, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 4, questionid: 17, timesasked: 1308,timescorrect: 435, timescorrectwithhint: 536, timesincorrect: 218, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 4, questionid: 18, timesasked: 1472,timescorrect: 260, timescorrectwithhint: 465, timesincorrect: 475, timesincorrectwithhint: 272},
{year: 2024, month: 7, day: 4, questionid: 19, timesasked: 1877,timescorrect: 424, timescorrectwithhint: 648, timesincorrect: 514, timesincorrectwithhint: 291},
{year: 2024, month: 7, day: 4, questionid: 20, timesasked: 1229,timescorrect: 331, timescorrectwithhint: 457, timesincorrect: 282, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 4, questionid: 21, timesasked: 1537,timescorrect: 367, timescorrectwithhint: 543, timesincorrect: 401, timesincorrectwithhint: 226},
{year: 2024, month: 7, day: 4, questionid: 22, timesasked: 1474,timescorrect: 532, timescorrectwithhint: 628, timesincorrect: 204, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 4, questionid: 23, timesasked: 1561,timescorrect: 275, timescorrectwithhint: 492, timesincorrect: 505, timesincorrectwithhint: 289},
{year: 2024, month: 7, day: 4, questionid: 24, timesasked: 1892,timescorrect: 327, timescorrectwithhint: 594, timesincorrect: 618, timesincorrectwithhint: 353},
{year: 2024, month: 7, day: 4, questionid: 25, timesasked: 1872,timescorrect: 723, timescorrectwithhint: 827, timesincorrect: 212, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 4, questionid: 26, timesasked: 1282,timescorrect: 305, timescorrectwithhint: 452, timesincorrect: 335, timesincorrectwithhint: 190},
{year: 2024, month: 7, day: 4, questionid: 27, timesasked: 1890,timescorrect: 460, timescorrectwithhint: 673, timesincorrect: 484, timesincorrectwithhint: 273},
{year: 2024, month: 7, day: 4, questionid: 28, timesasked: 1900,timescorrect: 512, timescorrectwithhint: 706, timesincorrect: 437, timesincorrectwithhint: 245},
{year: 2024, month: 7, day: 4, questionid: 29, timesasked: 1819,timescorrect: 716, timescorrectwithhint: 812, timesincorrect: 192, timesincorrectwithhint: 99},
{year: 2024, month: 7, day: 4, questionid: 30, timesasked: 1284,timescorrect: 471, timescorrectwithhint: 552, timesincorrect: 170, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 4, questionid: 31, timesasked: 1008,timescorrect: 316, timescorrectwithhint: 401, timesincorrect: 187, timesincorrectwithhint: 104},
{year: 2024, month: 7, day: 4, questionid: 32, timesasked: 1457,timescorrect: 297, timescorrectwithhint: 484, timesincorrect: 430, timesincorrectwithhint: 246},
{year: 2024, month: 7, day: 4, questionid: 33, timesasked: 1575,timescorrect: 565, timescorrectwithhint: 670, timesincorrect: 221, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 4, questionid: 34, timesasked: 1687,timescorrect: 318, timescorrectwithhint: 545, timesincorrect: 524, timesincorrectwithhint: 300},
{year: 2024, month: 7, day: 4, questionid: 35, timesasked: 1138,timescorrect: 195, timescorrectwithhint: 356, timesincorrect: 373, timesincorrectwithhint: 214},
{year: 2024, month: 7, day: 4, questionid: 36, timesasked: 1135,timescorrect: 281, timescorrectwithhint: 407, timesincorrect: 285, timesincorrectwithhint: 162},
{year: 2024, month: 7, day: 4, questionid: 37, timesasked: 1288,timescorrect: 351, timescorrectwithhint: 481, timesincorrect: 292, timesincorrectwithhint: 164},
{year: 2024, month: 7, day: 4, questionid: 38, timesasked: 1224,timescorrect: 486, timescorrectwithhint: 549, timesincorrect: 125, timesincorrectwithhint: 64},
{year: 2024, month: 7, day: 4, questionid: 39, timesasked: 1800,timescorrect: 451, timescorrectwithhint: 648, timesincorrect: 448, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 4, questionid: 40, timesasked: 1402,timescorrect: 392, timescorrectwithhint: 529, timesincorrect: 308, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 4, questionid: 41, timesasked: 1414,timescorrect: 554, timescorrectwithhint: 629, timesincorrect: 152, timesincorrectwithhint: 79},
{year: 2024, month: 7, day: 4, questionid: 42, timesasked: 1969,timescorrect: 366, timescorrectwithhint: 633, timesincorrect: 617, timesincorrectwithhint: 353},
{year: 2024, month: 7, day: 4, questionid: 43, timesasked: 1530,timescorrect: 367, timescorrectwithhint: 541, timesincorrect: 397, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 4, questionid: 44, timesasked: 1639,timescorrect: 333, timescorrectwithhint: 544, timesincorrect: 485, timesincorrectwithhint: 277},
{year: 2024, month: 7, day: 4, questionid: 45, timesasked: 1708,timescorrect: 326, timescorrectwithhint: 554, timesincorrect: 527, timesincorrectwithhint: 301},
{year: 2024, month: 7, day: 4, questionid: 46, timesasked: 1113,timescorrect: 266, timescorrectwithhint: 393, timesincorrect: 289, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 4, questionid: 47, timesasked: 1641,timescorrect: 427, timescorrectwithhint: 601, timesincorrect: 392, timesincorrectwithhint: 221},
{year: 2024, month: 7, day: 4, questionid: 48, timesasked: 1390,timescorrect: 405, timescorrectwithhint: 535, timesincorrect: 289, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 4, questionid: 49, timesasked: 1626,timescorrect: 546, timescorrectwithhint: 669, timesincorrect: 266, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 4, questionid: 50, timesasked: 1825,timescorrect: 327, timescorrectwithhint: 579, timesincorrect: 585, timesincorrectwithhint: 334},
{year: 2024, month: 7, day: 4, questionid: 51, timesasked: 1141,timescorrect: 177, timescorrectwithhint: 346, timesincorrect: 393, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 4, questionid: 52, timesasked: 1787,timescorrect: 647, timescorrectwithhint: 763, timesincorrect: 245, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 4, questionid: 53, timesasked: 1150,timescorrect: 288, timescorrectwithhint: 414, timesincorrect: 286, timesincorrectwithhint: 162},
{year: 2024, month: 7, day: 4, questionid: 54, timesasked: 1652,timescorrect: 352, timescorrectwithhint: 558, timesincorrect: 473, timesincorrectwithhint: 269},
{year: 2024, month: 7, day: 4, questionid: 55, timesasked: 1241,timescorrect: 199, timescorrectwithhint: 380, timesincorrect: 420, timesincorrectwithhint: 242},
{year: 2024, month: 7, day: 4, questionid: 56, timesasked: 1311,timescorrect: 481, timescorrectwithhint: 563, timesincorrect: 174, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 4, questionid: 57, timesasked: 1734,timescorrect: 447, timescorrectwithhint: 632, timesincorrect: 419, timesincorrectwithhint: 236},
{year: 2024, month: 7, day: 4, questionid: 58, timesasked: 1997,timescorrect: 307, timescorrectwithhint: 603, timesincorrect: 691, timesincorrectwithhint: 396},
{year: 2024, month: 7, day: 4, questionid: 59, timesasked: 1455,timescorrect: 495, timescorrectwithhint: 602, timesincorrect: 231, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 4, questionid: 60, timesasked: 1129,timescorrect: 381, timescorrectwithhint: 466, timesincorrect: 182, timesincorrectwithhint: 100},
{year: 2024, month: 7, day: 4, questionid: 61, timesasked: 1522,timescorrect: 269, timescorrectwithhint: 481, timesincorrect: 491, timesincorrectwithhint: 281},
{year: 2024, month: 7, day: 4, questionid: 62, timesasked: 1815,timescorrect: 472, timescorrectwithhint: 664, timesincorrect: 435, timesincorrectwithhint: 244},
{year: 2024, month: 7, day: 4, questionid: 63, timesasked: 1170,timescorrect: 328, timescorrectwithhint: 442, timesincorrect: 256, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 4, questionid: 64, timesasked: 1653,timescorrect: 318, timescorrectwithhint: 538, timesincorrect: 507, timesincorrectwithhint: 290},
{year: 2024, month: 7, day: 4, questionid: 65, timesasked: 1041,timescorrect: 200, timescorrectwithhint: 339, timesincorrect: 319, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 4, questionid: 66, timesasked: 1021,timescorrect: 188, timescorrectwithhint: 327, timesincorrect: 321, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 4, questionid: 67, timesasked: 1872,timescorrect: 715, timescorrectwithhint: 822, timesincorrect: 220, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 4, questionid: 68, timesasked: 1191,timescorrect: 232, timescorrectwithhint: 389, timesincorrect: 363, timesincorrectwithhint: 207},
{year: 2024, month: 7, day: 4, questionid: 69, timesasked: 1903,timescorrect: 377, timescorrectwithhint: 626, timesincorrect: 574, timesincorrectwithhint: 326},
{year: 2024, month: 7, day: 4, questionid: 70, timesasked: 1133,timescorrect: 367, timescorrectwithhint: 458, timesincorrect: 199, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 4, questionid: 71, timesasked: 1320,timescorrect: 398, timescorrectwithhint: 516, timesincorrect: 261, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 4, questionid: 72, timesasked: 1482,timescorrect: 447, timescorrectwithhint: 579, timesincorrect: 293, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 4, questionid: 73, timesasked: 1002,timescorrect: 166, timescorrectwithhint: 310, timesincorrect: 334, timesincorrectwithhint: 192},
{year: 2024, month: 7, day: 4, questionid: 74, timesasked: 1345,timescorrect: 234, timescorrectwithhint: 423, timesincorrect: 437, timesincorrectwithhint: 251},
{year: 2024, month: 7, day: 4, questionid: 75, timesasked: 1078,timescorrect: 207, timescorrectwithhint: 351, timesincorrect: 331, timesincorrectwithhint: 189},
{year: 2024, month: 7, day: 4, questionid: 76, timesasked: 1687,timescorrect: 417, timescorrectwithhint: 604, timesincorrect: 425, timesincorrectwithhint: 241},
{year: 2024, month: 7, day: 4, questionid: 77, timesasked: 1249,timescorrect: 465, timescorrectwithhint: 541, timesincorrect: 158, timesincorrectwithhint: 85},
{year: 2024, month: 7, day: 4, questionid: 78, timesasked: 1601,timescorrect: 499, timescorrectwithhint: 635, timesincorrect: 301, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 4, questionid: 79, timesasked: 1718,timescorrect: 606, timescorrectwithhint: 724, timesincorrect: 252, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 4, questionid: 80, timesasked: 1783,timescorrect: 645, timescorrectwithhint: 761, timesincorrect: 245, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 4, questionid: 81, timesasked: 1497,timescorrect: 576, timescorrectwithhint: 660, timesincorrect: 172, timesincorrectwithhint: 89},
{year: 2024, month: 7, day: 4, questionid: 82, timesasked: 1952,timescorrect: 331, timescorrectwithhint: 608, timesincorrect: 644, timesincorrectwithhint: 369},
{year: 2024, month: 7, day: 4, questionid: 83, timesasked: 1352,timescorrect: 264, timescorrectwithhint: 442, timesincorrect: 411, timesincorrectwithhint: 235},
{year: 2024, month: 7, day: 4, questionid: 84, timesasked: 1086,timescorrect: 330, timescorrectwithhint: 426, timesincorrect: 212, timesincorrectwithhint: 118},
{year: 2024, month: 7, day: 4, questionid: 85, timesasked: 1319,timescorrect: 365, timescorrectwithhint: 496, timesincorrect: 293, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 4, questionid: 86, timesasked: 1137,timescorrect: 277, timescorrectwithhint: 405, timesincorrect: 290, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 4, questionid: 87, timesasked: 1976,timescorrect: 625, timescorrectwithhint: 790, timesincorrect: 362, timesincorrectwithhint: 199},
{year: 2024, month: 7, day: 4, questionid: 88, timesasked: 1380,timescorrect: 214, timescorrectwithhint: 418, timesincorrect: 475, timesincorrectwithhint: 273},
{year: 2024, month: 7, day: 4, questionid: 89, timesasked: 1078,timescorrect: 365, timescorrectwithhint: 445, timesincorrect: 173, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 4, questionid: 90, timesasked: 1332,timescorrect: 416, timescorrectwithhint: 529, timesincorrect: 249, timesincorrectwithhint: 138},
{year: 2024, month: 7, day: 4, questionid: 91, timesasked: 1008,timescorrect: 153, timescorrectwithhint: 303, timesincorrect: 350, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 4, questionid: 92, timesasked: 1867,timescorrect: 738, timescorrectwithhint: 835, timesincorrect: 194, timesincorrectwithhint: 100},
{year: 2024, month: 7, day: 4, questionid: 93, timesasked: 1113,timescorrect: 382, timescorrectwithhint: 462, timesincorrect: 174, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 4, questionid: 94, timesasked: 1445,timescorrect: 499, timescorrectwithhint: 603, timesincorrect: 222, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 4, questionid: 95, timesasked: 1188,timescorrect: 472, timescorrectwithhint: 533, timesincorrect: 121, timesincorrectwithhint: 62},
{year: 2024, month: 7, day: 4, questionid: 96, timesasked: 1259,timescorrect: 503, timescorrectwithhint: 566, timesincorrect: 126, timesincorrectwithhint: 64},
{year: 2024, month: 7, day: 4, questionid: 97, timesasked: 1195,timescorrect: 226, timescorrectwithhint: 386, timesincorrect: 370, timesincorrectwithhint: 213},
{year: 2024, month: 7, day: 5, questionid: 1, timesasked: 1511,timescorrect: 581, timescorrectwithhint: 666, timesincorrect: 173, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 5, questionid: 2, timesasked: 1405,timescorrect: 306, timescorrectwithhint: 479, timesincorrect: 395, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 5, questionid: 3, timesasked: 1734,timescorrect: 532, timescorrectwithhint: 683, timesincorrect: 334, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 5, questionid: 4, timesasked: 1556,timescorrect: 411, timescorrectwithhint: 573, timesincorrect: 366, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 5, questionid: 5, timesasked: 1164,timescorrect: 280, timescorrectwithhint: 412, timesincorrect: 301, timesincorrectwithhint: 171},
{year: 2024, month: 7, day: 5, questionid: 6, timesasked: 1198,timescorrect: 355, timescorrectwithhint: 464, timesincorrect: 243, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 5, questionid: 7, timesasked: 1723,timescorrect: 343, timescorrectwithhint: 567, timesincorrect: 518, timesincorrectwithhint: 295},
{year: 2024, month: 7, day: 5, questionid: 8, timesasked: 1153,timescorrect: 174, timescorrectwithhint: 346, timesincorrect: 401, timesincorrectwithhint: 232},
{year: 2024, month: 7, day: 5, questionid: 9, timesasked: 1577,timescorrect: 524, timescorrectwithhint: 646, timesincorrect: 263, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 5, questionid: 10, timesasked: 1524,timescorrect: 577, timescorrectwithhint: 666, timesincorrect: 184, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 5, questionid: 11, timesasked: 1316,timescorrect: 204, timescorrectwithhint: 399, timesincorrect: 453, timesincorrectwithhint: 260},
{year: 2024, month: 7, day: 5, questionid: 12, timesasked: 1698,timescorrect: 633, timescorrectwithhint: 736, timesincorrect: 215, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 5, questionid: 13, timesasked: 1969,timescorrect: 385, timescorrectwithhint: 644, timesincorrect: 599, timesincorrectwithhint: 341},
{year: 2024, month: 7, day: 5, questionid: 14, timesasked: 1478,timescorrect: 474, timescorrectwithhint: 595, timesincorrect: 264, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 5, questionid: 15, timesasked: 1258,timescorrect: 328, timescorrectwithhint: 461, timesincorrect: 300, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 5, questionid: 16, timesasked: 1900,timescorrect: 450, timescorrectwithhint: 669, timesincorrect: 499, timesincorrectwithhint: 282},
{year: 2024, month: 7, day: 5, questionid: 17, timesasked: 1806,timescorrect: 318, timescorrectwithhint: 570, timesincorrect: 584, timesincorrectwithhint: 334},
{year: 2024, month: 7, day: 5, questionid: 18, timesasked: 1682,timescorrect: 281, timescorrectwithhint: 521, timesincorrect: 559, timesincorrectwithhint: 321},
{year: 2024, month: 7, day: 5, questionid: 19, timesasked: 1453,timescorrect: 337, timescorrectwithhint: 507, timesincorrect: 389, timesincorrectwithhint: 220},
{year: 2024, month: 7, day: 5, questionid: 20, timesasked: 1599,timescorrect: 249, timescorrectwithhint: 485, timesincorrect: 550, timesincorrectwithhint: 315},
{year: 2024, month: 7, day: 5, questionid: 21, timesasked: 1956,timescorrect: 501, timescorrectwithhint: 711, timesincorrect: 476, timesincorrectwithhint: 268},
{year: 2024, month: 7, day: 5, questionid: 22, timesasked: 1121,timescorrect: 447, timescorrectwithhint: 503, timesincorrect: 113, timesincorrectwithhint: 58},
{year: 2024, month: 7, day: 5, questionid: 23, timesasked: 1160,timescorrect: 265, timescorrectwithhint: 402, timesincorrect: 314, timesincorrectwithhint: 179},
{year: 2024, month: 7, day: 5, questionid: 24, timesasked: 1855,timescorrect: 397, timescorrectwithhint: 628, timesincorrect: 529, timesincorrectwithhint: 301},
{year: 2024, month: 7, day: 5, questionid: 25, timesasked: 1368,timescorrect: 451, timescorrectwithhint: 558, timesincorrect: 232, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 5, questionid: 26, timesasked: 1145,timescorrect: 272, timescorrectwithhint: 404, timesincorrect: 299, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 5, questionid: 27, timesasked: 1514,timescorrect: 600, timescorrectwithhint: 678, timesincorrect: 156, timesincorrectwithhint: 80},
{year: 2024, month: 7, day: 5, questionid: 28, timesasked: 1419,timescorrect: 447, timescorrectwithhint: 566, timesincorrect: 262, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 5, questionid: 29, timesasked: 1586,timescorrect: 362, timescorrectwithhint: 550, timesincorrect: 430, timesincorrectwithhint: 244},
{year: 2024, month: 7, day: 5, questionid: 30, timesasked: 1539,timescorrect: 355, timescorrectwithhint: 536, timesincorrect: 414, timesincorrectwithhint: 234},
{year: 2024, month: 7, day: 5, questionid: 31, timesasked: 1280,timescorrect: 488, timescorrectwithhint: 561, timesincorrect: 151, timesincorrectwithhint: 80},
{year: 2024, month: 7, day: 5, questionid: 32, timesasked: 1556,timescorrect: 466, timescorrectwithhint: 606, timesincorrect: 311, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 5, questionid: 33, timesasked: 1096,timescorrect: 350, timescorrectwithhint: 440, timesincorrect: 197, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 5, questionid: 34, timesasked: 1645,timescorrect: 255, timescorrectwithhint: 498, timesincorrect: 567, timesincorrectwithhint: 325},
{year: 2024, month: 7, day: 5, questionid: 35, timesasked: 1092,timescorrect: 233, timescorrectwithhint: 369, timesincorrect: 312, timesincorrectwithhint: 178},
{year: 2024, month: 7, day: 5, questionid: 36, timesasked: 1782,timescorrect: 296, timescorrectwithhint: 552, timesincorrect: 594, timesincorrectwithhint: 340},
{year: 2024, month: 7, day: 5, questionid: 37, timesasked: 1590,timescorrect: 635, timescorrectwithhint: 715, timesincorrect: 159, timesincorrectwithhint: 81},
{year: 2024, month: 7, day: 5, questionid: 38, timesasked: 1391,timescorrect: 435, timescorrectwithhint: 553, timesincorrect: 259, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 5, questionid: 39, timesasked: 1768,timescorrect: 656, timescorrectwithhint: 764, timesincorrect: 227, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 5, questionid: 40, timesasked: 1606,timescorrect: 444, timescorrectwithhint: 603, timesincorrect: 358, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 5, questionid: 41, timesasked: 1035,timescorrect: 282, timescorrectwithhint: 386, timesincorrect: 235, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 5, questionid: 42, timesasked: 1381,timescorrect: 241, timescorrectwithhint: 434, timesincorrect: 448, timesincorrectwithhint: 258},
{year: 2024, month: 7, day: 5, questionid: 43, timesasked: 1643,timescorrect: 524, timescorrectwithhint: 659, timesincorrect: 296, timesincorrectwithhint: 164},
{year: 2024, month: 7, day: 5, questionid: 44, timesasked: 1697,timescorrect: 632, timescorrectwithhint: 735, timesincorrect: 216, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 5, questionid: 45, timesasked: 1819,timescorrect: 340, timescorrectwithhint: 586, timesincorrect: 569, timesincorrectwithhint: 324},
{year: 2024, month: 7, day: 5, questionid: 46, timesasked: 1348,timescorrect: 353, timescorrectwithhint: 495, timesincorrect: 320, timesincorrectwithhint: 180},
{year: 2024, month: 7, day: 5, questionid: 47, timesasked: 1957,timescorrect: 602, timescorrectwithhint: 772, timesincorrect: 376, timesincorrectwithhint: 207},
{year: 2024, month: 7, day: 5, questionid: 48, timesasked: 1861,timescorrect: 611, timescorrectwithhint: 757, timesincorrect: 318, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 5, questionid: 49, timesasked: 1588,timescorrect: 328, timescorrectwithhint: 530, timesincorrect: 465, timesincorrectwithhint: 265},
{year: 2024, month: 7, day: 5, questionid: 50, timesasked: 1348,timescorrect: 420, timescorrectwithhint: 535, timesincorrect: 253, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 5, questionid: 51, timesasked: 1660,timescorrect: 432, timescorrectwithhint: 607, timesincorrect: 397, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 5, questionid: 52, timesasked: 1314,timescorrect: 485, timescorrectwithhint: 567, timesincorrect: 171, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 5, questionid: 53, timesasked: 1768,timescorrect: 677, timescorrectwithhint: 777, timesincorrect: 206, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 5, questionid: 54, timesasked: 1902,timescorrect: 429, timescorrectwithhint: 657, timesincorrect: 521, timesincorrectwithhint: 295},
{year: 2024, month: 7, day: 5, questionid: 55, timesasked: 1267,timescorrect: 356, timescorrectwithhint: 479, timesincorrect: 277, timesincorrectwithhint: 155},
{year: 2024, month: 7, day: 5, questionid: 56, timesasked: 1964,timescorrect: 618, timescorrectwithhint: 783, timesincorrect: 363, timesincorrectwithhint: 200},
{year: 2024, month: 7, day: 5, questionid: 57, timesasked: 1567,timescorrect: 289, timescorrectwithhint: 502, timesincorrect: 494, timesincorrectwithhint: 282},
{year: 2024, month: 7, day: 5, questionid: 58, timesasked: 1902,timescorrect: 738, timescorrectwithhint: 842, timesincorrect: 212, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 5, questionid: 59, timesasked: 1709,timescorrect: 360, timescorrectwithhint: 575, timesincorrect: 493, timesincorrectwithhint: 281},
{year: 2024, month: 7, day: 5, questionid: 60, timesasked: 1282,timescorrect: 263, timescorrectwithhint: 427, timesincorrect: 377, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 5, questionid: 61, timesasked: 1708,timescorrect: 556, timescorrectwithhint: 692, timesincorrect: 297, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 5, questionid: 62, timesasked: 1005,timescorrect: 355, timescorrectwithhint: 424, timesincorrect: 147, timesincorrectwithhint: 79},
{year: 2024, month: 7, day: 5, questionid: 63, timesasked: 1281,timescorrect: 397, timescorrectwithhint: 507, timesincorrect: 242, timesincorrectwithhint: 135},
{year: 2024, month: 7, day: 5, questionid: 64, timesasked: 1887,timescorrect: 538, timescorrectwithhint: 719, timesincorrect: 405, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 5, questionid: 65, timesasked: 1434,timescorrect: 518, timescorrectwithhint: 612, timesincorrect: 198, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 5, questionid: 66, timesasked: 1985,timescorrect: 723, timescorrectwithhint: 851, timesincorrect: 268, timesincorrectwithhint: 143},
{year: 2024, month: 7, day: 5, questionid: 67, timesasked: 1537,timescorrect: 358, timescorrectwithhint: 537, timesincorrect: 410, timesincorrectwithhint: 232},
{year: 2024, month: 7, day: 5, questionid: 68, timesasked: 1770,timescorrect: 290, timescorrectwithhint: 546, timesincorrect: 594, timesincorrectwithhint: 340},
{year: 2024, month: 7, day: 5, questionid: 69, timesasked: 1801,timescorrect: 323, timescorrectwithhint: 572, timesincorrect: 576, timesincorrectwithhint: 330},
{year: 2024, month: 7, day: 5, questionid: 70, timesasked: 1647,timescorrect: 531, timescorrectwithhint: 664, timesincorrect: 292, timesincorrectwithhint: 160},
{year: 2024, month: 7, day: 5, questionid: 71, timesasked: 1709,timescorrect: 649, timescorrectwithhint: 748, timesincorrect: 205, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 5, questionid: 72, timesasked: 1763,timescorrect: 320, timescorrectwithhint: 562, timesincorrect: 560, timesincorrectwithhint: 321},
{year: 2024, month: 7, day: 5, questionid: 73, timesasked: 1002,timescorrect: 352, timescorrectwithhint: 421, timesincorrect: 148, timesincorrectwithhint: 81},
{year: 2024, month: 7, day: 5, questionid: 74, timesasked: 1193,timescorrect: 371, timescorrectwithhint: 473, timesincorrect: 225, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 5, questionid: 75, timesasked: 1649,timescorrect: 608, timescorrectwithhint: 711, timesincorrect: 215, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 5, questionid: 76, timesasked: 1380,timescorrect: 225, timescorrectwithhint: 425, timesincorrect: 464, timesincorrectwithhint: 266},
{year: 2024, month: 7, day: 5, questionid: 77, timesasked: 1876,timescorrect: 605, timescorrectwithhint: 757, timesincorrect: 332, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 5, questionid: 78, timesasked: 1551,timescorrect: 604, timescorrectwithhint: 688, timesincorrect: 170, timesincorrectwithhint: 89},
{year: 2024, month: 7, day: 5, questionid: 79, timesasked: 1255,timescorrect: 360, timescorrectwithhint: 480, timesincorrect: 266, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 5, questionid: 80, timesasked: 1498,timescorrect: 298, timescorrectwithhint: 493, timesincorrect: 450, timesincorrectwithhint: 257},
{year: 2024, month: 7, day: 5, questionid: 81, timesasked: 1540,timescorrect: 390, timescorrectwithhint: 557, timesincorrect: 379, timesincorrectwithhint: 214},
{year: 2024, month: 7, day: 5, questionid: 82, timesasked: 1922,timescorrect: 684, timescorrectwithhint: 814, timesincorrect: 276, timesincorrectwithhint: 148},
{year: 2024, month: 7, day: 5, questionid: 83, timesasked: 1038,timescorrect: 364, timescorrectwithhint: 436, timesincorrect: 154, timesincorrectwithhint: 84},
{year: 2024, month: 7, day: 5, questionid: 84, timesasked: 1083,timescorrect: 285, timescorrectwithhint: 398, timesincorrect: 256, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 5, questionid: 85, timesasked: 1401,timescorrect: 485, timescorrectwithhint: 585, timesincorrect: 214, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 5, questionid: 86, timesasked: 1060,timescorrect: 192, timescorrectwithhint: 338, timesincorrect: 337, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 5, questionid: 87, timesasked: 1228,timescorrect: 467, timescorrectwithhint: 538, timesincorrect: 146, timesincorrectwithhint: 77},
{year: 2024, month: 7, day: 5, questionid: 88, timesasked: 1226,timescorrect: 468, timescorrectwithhint: 538, timesincorrect: 144, timesincorrectwithhint: 76},
{year: 2024, month: 7, day: 5, questionid: 89, timesasked: 1054,timescorrect: 336, timescorrectwithhint: 423, timesincorrect: 190, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 5, questionid: 90, timesasked: 1504,timescorrect: 425, timescorrectwithhint: 571, timesincorrect: 326, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 5, questionid: 91, timesasked: 1274,timescorrect: 390, timescorrectwithhint: 501, timesincorrect: 246, timesincorrectwithhint: 137},
{year: 2024, month: 7, day: 5, questionid: 92, timesasked: 1783,timescorrect: 349, timescorrectwithhint: 583, timesincorrect: 542, timesincorrectwithhint: 309},
{year: 2024, month: 7, day: 5, questionid: 93, timesasked: 1552,timescorrect: 463, timescorrectwithhint: 603, timesincorrect: 312, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 5, questionid: 94, timesasked: 1586,timescorrect: 258, timescorrectwithhint: 488, timesincorrect: 534, timesincorrectwithhint: 306},
{year: 2024, month: 7, day: 5, questionid: 95, timesasked: 1342,timescorrect: 292, timescorrectwithhint: 457, timesincorrect: 378, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 5, questionid: 96, timesasked: 1193,timescorrect: 347, timescorrectwithhint: 458, timesincorrect: 249, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 5, questionid: 97, timesasked: 1995,timescorrect: 763, timescorrectwithhint: 876, timesincorrect: 234, timesincorrectwithhint: 122},
{year: 2024, month: 7, day: 6, questionid: 1, timesasked: 1405,timescorrect: 431, timescorrectwithhint: 553, timesincorrect: 271, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 6, questionid: 2, timesasked: 1775,timescorrect: 609, timescorrectwithhint: 738, timesincorrect: 277, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 6, questionid: 3, timesasked: 1335,timescorrect: 221, timescorrectwithhint: 413, timesincorrect: 445, timesincorrectwithhint: 256},
{year: 2024, month: 7, day: 6, questionid: 4, timesasked: 1669,timescorrect: 326, timescorrectwithhint: 546, timesincorrect: 508, timesincorrectwithhint: 289},
{year: 2024, month: 7, day: 6, questionid: 5, timesasked: 1305,timescorrect: 217, timescorrectwithhint: 404, timesincorrect: 435, timesincorrectwithhint: 249},
{year: 2024, month: 7, day: 6, questionid: 6, timesasked: 1525,timescorrect: 521, timescorrectwithhint: 633, timesincorrect: 240, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 6, questionid: 7, timesasked: 1334,timescorrect: 373, timescorrectwithhint: 504, timesincorrect: 293, timesincorrectwithhint: 164},
{year: 2024, month: 7, day: 6, questionid: 8, timesasked: 1088,timescorrect: 431, timescorrectwithhint: 487, timesincorrect: 112, timesincorrectwithhint: 58},
{year: 2024, month: 7, day: 6, questionid: 9, timesasked: 1224,timescorrect: 350, timescorrectwithhint: 467, timesincorrect: 261, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 6, questionid: 10, timesasked: 1574,timescorrect: 561, timescorrectwithhint: 667, timesincorrect: 225, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 6, questionid: 11, timesasked: 1784,timescorrect: 373, timescorrectwithhint: 598, timesincorrect: 518, timesincorrectwithhint: 295},
{year: 2024, month: 7, day: 6, questionid: 12, timesasked: 1735,timescorrect: 303, timescorrectwithhint: 546, timesincorrect: 564, timesincorrectwithhint: 322},
{year: 2024, month: 7, day: 6, questionid: 13, timesasked: 1147,timescorrect: 190, timescorrectwithhint: 354, timesincorrect: 383, timesincorrectwithhint: 220},
{year: 2024, month: 7, day: 6, questionid: 14, timesasked: 1739,timescorrect: 413, timescorrectwithhint: 613, timesincorrect: 455, timesincorrectwithhint: 258},
{year: 2024, month: 7, day: 6, questionid: 15, timesasked: 1515,timescorrect: 524, timescorrectwithhint: 632, timesincorrect: 233, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 6, questionid: 16, timesasked: 1507,timescorrect: 452, timescorrectwithhint: 587, timesincorrect: 301, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 6, questionid: 17, timesasked: 1131,timescorrect: 296, timescorrectwithhint: 415, timesincorrect: 269, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 6, questionid: 18, timesasked: 1719,timescorrect: 499, timescorrectwithhint: 660, timesincorrect: 359, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 6, questionid: 19, timesasked: 1269,timescorrect: 386, timescorrectwithhint: 498, timesincorrect: 247, timesincorrectwithhint: 138},
{year: 2024, month: 7, day: 6, questionid: 20, timesasked: 1704,timescorrect: 439, timescorrectwithhint: 621, timesincorrect: 412, timesincorrectwithhint: 232},
{year: 2024, month: 7, day: 6, questionid: 21, timesasked: 1519,timescorrect: 494, timescorrectwithhint: 615, timesincorrect: 264, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 6, questionid: 22, timesasked: 1217,timescorrect: 386, timescorrectwithhint: 487, timesincorrect: 221, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 6, questionid: 23, timesasked: 1738,timescorrect: 465, timescorrectwithhint: 644, timesincorrect: 403, timesincorrectwithhint: 226},
{year: 2024, month: 7, day: 6, questionid: 24, timesasked: 1751,timescorrect: 299, timescorrectwithhint: 547, timesincorrect: 576, timesincorrectwithhint: 329},
{year: 2024, month: 7, day: 6, questionid: 25, timesasked: 1579,timescorrect: 325, timescorrectwithhint: 526, timesincorrect: 463, timesincorrectwithhint: 265},
{year: 2024, month: 7, day: 6, questionid: 26, timesasked: 1581,timescorrect: 337, timescorrectwithhint: 534, timesincorrect: 452, timesincorrectwithhint: 258},
{year: 2024, month: 7, day: 6, questionid: 27, timesasked: 1690,timescorrect: 351, timescorrectwithhint: 565, timesincorrect: 493, timesincorrectwithhint: 281},
{year: 2024, month: 7, day: 6, questionid: 28, timesasked: 1219,timescorrect: 349, timescorrectwithhint: 465, timesincorrect: 260, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 6, questionid: 29, timesasked: 1404,timescorrect: 356, timescorrectwithhint: 508, timesincorrect: 345, timesincorrectwithhint: 195},
{year: 2024, month: 7, day: 6, questionid: 30, timesasked: 1293,timescorrect: 233, timescorrectwithhint: 411, timesincorrect: 412, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 6, questionid: 31, timesasked: 1277,timescorrect: 299, timescorrectwithhint: 447, timesincorrect: 339, timesincorrectwithhint: 192},
{year: 2024, month: 7, day: 6, questionid: 32, timesasked: 1488,timescorrect: 392, timescorrectwithhint: 547, timesincorrect: 351, timesincorrectwithhint: 198},
{year: 2024, month: 7, day: 6, questionid: 33, timesasked: 1228,timescorrect: 457, timescorrectwithhint: 532, timesincorrect: 156, timesincorrectwithhint: 83},
{year: 2024, month: 7, day: 6, questionid: 34, timesasked: 1774,timescorrect: 659, timescorrectwithhint: 768, timesincorrect: 227, timesincorrectwithhint: 120},
{year: 2024, month: 7, day: 6, questionid: 35, timesasked: 1129,timescorrect: 432, timescorrectwithhint: 496, timesincorrect: 132, timesincorrectwithhint: 69},
{year: 2024, month: 7, day: 6, questionid: 36, timesasked: 1886,timescorrect: 294, timescorrectwithhint: 572, timesincorrect: 648, timesincorrectwithhint: 372},
{year: 2024, month: 7, day: 6, questionid: 37, timesasked: 1302,timescorrect: 277, timescorrectwithhint: 440, timesincorrect: 373, timesincorrectwithhint: 212},
{year: 2024, month: 7, day: 6, questionid: 38, timesasked: 1895,timescorrect: 463, timescorrectwithhint: 676, timesincorrect: 484, timesincorrectwithhint: 272},
{year: 2024, month: 7, day: 6, questionid: 39, timesasked: 1565,timescorrect: 538, timescorrectwithhint: 651, timesincorrect: 243, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 6, questionid: 40, timesasked: 1278,timescorrect: 233, timescorrectwithhint: 408, timesincorrect: 405, timesincorrectwithhint: 232},
{year: 2024, month: 7, day: 6, questionid: 41, timesasked: 1895,timescorrect: 452, timescorrectwithhint: 669, timesincorrect: 494, timesincorrectwithhint: 280},
{year: 2024, month: 7, day: 6, questionid: 42, timesasked: 1025,timescorrect: 284, timescorrectwithhint: 386, timesincorrect: 227, timesincorrectwithhint: 128},
{year: 2024, month: 7, day: 6, questionid: 43, timesasked: 1164,timescorrect: 225, timescorrectwithhint: 379, timesincorrect: 356, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 6, questionid: 44, timesasked: 1341,timescorrect: 303, timescorrectwithhint: 464, timesincorrect: 366, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 6, questionid: 45, timesasked: 1968,timescorrect: 329, timescorrectwithhint: 610, timesincorrect: 654, timesincorrectwithhint: 375},
{year: 2024, month: 7, day: 6, questionid: 46, timesasked: 1142,timescorrect: 219, timescorrectwithhint: 371, timesincorrect: 351, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 6, questionid: 47, timesasked: 1675,timescorrect: 579, timescorrectwithhint: 699, timesincorrect: 257, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 6, questionid: 48, timesasked: 1635,timescorrect: 329, timescorrectwithhint: 541, timesincorrect: 487, timesincorrectwithhint: 278},
{year: 2024, month: 7, day: 6, questionid: 49, timesasked: 1503,timescorrect: 452, timescorrectwithhint: 587, timesincorrect: 298, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 6, questionid: 50, timesasked: 1827,timescorrect: 602, timescorrectwithhint: 745, timesincorrect: 311, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 6, questionid: 51, timesasked: 1600,timescorrect: 519, timescorrectwithhint: 647, timesincorrect: 280, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 6, questionid: 52, timesasked: 1218,timescorrect: 391, timescorrectwithhint: 490, timesincorrect: 217, timesincorrectwithhint: 120},
{year: 2024, month: 7, day: 6, questionid: 53, timesasked: 1617,timescorrect: 512, timescorrectwithhint: 646, timesincorrect: 296, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 6, questionid: 54, timesasked: 1032,timescorrect: 313, timescorrectwithhint: 404, timesincorrect: 202, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 6, questionid: 55, timesasked: 1601,timescorrect: 606, timescorrectwithhint: 700, timesincorrect: 194, timesincorrectwithhint: 101},
{year: 2024, month: 7, day: 6, questionid: 56, timesasked: 1686,timescorrect: 630, timescorrectwithhint: 732, timesincorrect: 212, timesincorrectwithhint: 112},
{year: 2024, month: 7, day: 6, questionid: 57, timesasked: 1816,timescorrect: 715, timescorrectwithhint: 810, timesincorrect: 192, timesincorrectwithhint: 99},
{year: 2024, month: 7, day: 6, questionid: 58, timesasked: 1133,timescorrect: 244, timescorrectwithhint: 384, timesincorrect: 321, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 6, questionid: 59, timesasked: 1785,timescorrect: 630, timescorrectwithhint: 753, timesincorrect: 261, timesincorrectwithhint: 141},
{year: 2024, month: 7, day: 6, questionid: 60, timesasked: 1846,timescorrect: 693, timescorrectwithhint: 803, timesincorrect: 229, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 6, questionid: 61, timesasked: 1643,timescorrect: 611, timescorrectwithhint: 711, timesincorrect: 210, timesincorrectwithhint: 111},
{year: 2024, month: 7, day: 6, questionid: 62, timesasked: 1953,timescorrect: 771, timescorrectwithhint: 872, timesincorrect: 205, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 6, questionid: 63, timesasked: 1674,timescorrect: 324, timescorrectwithhint: 545, timesincorrect: 512, timesincorrectwithhint: 293},
{year: 2024, month: 7, day: 6, questionid: 64, timesasked: 1585,timescorrect: 238, timescorrectwithhint: 476, timesincorrect: 553, timesincorrectwithhint: 318},
{year: 2024, month: 7, day: 6, questionid: 65, timesasked: 1774,timescorrect: 496, timescorrectwithhint: 670, timesincorrect: 390, timesincorrectwithhint: 218},
{year: 2024, month: 7, day: 6, questionid: 66, timesasked: 1664,timescorrect: 344, timescorrectwithhint: 555, timesincorrect: 487, timesincorrectwithhint: 278},
{year: 2024, month: 7, day: 6, questionid: 67, timesasked: 1835,timescorrect: 548, timescorrectwithhint: 714, timesincorrect: 369, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 6, questionid: 68, timesasked: 1648,timescorrect: 587, timescorrectwithhint: 698, timesincorrect: 236, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 6, questionid: 69, timesasked: 1961,timescorrect: 513, timescorrectwithhint: 719, timesincorrect: 467, timesincorrectwithhint: 262},
{year: 2024, month: 7, day: 6, questionid: 70, timesasked: 1619,timescorrect: 441, timescorrectwithhint: 604, timesincorrect: 368, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 6, questionid: 71, timesasked: 1166,timescorrect: 359, timescorrectwithhint: 460, timesincorrect: 223, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 6, questionid: 72, timesasked: 1952,timescorrect: 572, timescorrectwithhint: 753, timesincorrect: 403, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 6, questionid: 73, timesasked: 1866,timescorrect: 700, timescorrectwithhint: 811, timesincorrect: 232, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 6, questionid: 74, timesasked: 1962,timescorrect: 394, timescorrectwithhint: 648, timesincorrect: 586, timesincorrectwithhint: 334},
{year: 2024, month: 7, day: 6, questionid: 75, timesasked: 1376,timescorrect: 233, timescorrectwithhint: 429, timesincorrect: 454, timesincorrectwithhint: 260},
{year: 2024, month: 7, day: 6, questionid: 76, timesasked: 1775,timescorrect: 570, timescorrectwithhint: 715, timesincorrect: 316, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 6, questionid: 77, timesasked: 1012,timescorrect: 307, timescorrectwithhint: 396, timesincorrect: 198, timesincorrectwithhint: 111},
{year: 2024, month: 7, day: 6, questionid: 78, timesasked: 1881,timescorrect: 296, timescorrectwithhint: 573, timesincorrect: 643, timesincorrectwithhint: 369},
{year: 2024, month: 7, day: 6, questionid: 79, timesasked: 1295,timescorrect: 301, timescorrectwithhint: 453, timesincorrect: 345, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 6, questionid: 80, timesasked: 1143,timescorrect: 235, timescorrectwithhint: 381, timesincorrect: 335, timesincorrectwithhint: 192},
{year: 2024, month: 7, day: 6, questionid: 81, timesasked: 1225,timescorrect: 472, timescorrectwithhint: 540, timesincorrect: 140, timesincorrectwithhint: 73},
{year: 2024, month: 7, day: 6, questionid: 82, timesasked: 1348,timescorrect: 490, timescorrectwithhint: 577, timesincorrect: 183, timesincorrectwithhint: 98},
{year: 2024, month: 7, day: 6, questionid: 83, timesasked: 1747,timescorrect: 383, timescorrectwithhint: 596, timesincorrect: 490, timesincorrectwithhint: 278},
{year: 2024, month: 7, day: 6, questionid: 84, timesasked: 1447,timescorrect: 267, timescorrectwithhint: 464, timesincorrect: 456, timesincorrectwithhint: 260},
{year: 2024, month: 7, day: 6, questionid: 85, timesasked: 1341,timescorrect: 424, timescorrectwithhint: 536, timesincorrect: 246, timesincorrectwithhint: 135},
{year: 2024, month: 7, day: 6, questionid: 86, timesasked: 1507,timescorrect: 535, timescorrectwithhint: 637, timesincorrect: 218, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 6, questionid: 87, timesasked: 1264,timescorrect: 478, timescorrectwithhint: 552, timesincorrect: 153, timesincorrectwithhint: 81},
{year: 2024, month: 7, day: 6, questionid: 88, timesasked: 1113,timescorrect: 197, timescorrectwithhint: 352, timesincorrect: 359, timesincorrectwithhint: 205},
{year: 2024, month: 7, day: 6, questionid: 89, timesasked: 1422,timescorrect: 456, timescorrectwithhint: 572, timesincorrect: 254, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 6, questionid: 90, timesasked: 1627,timescorrect: 303, timescorrectwithhint: 523, timesincorrect: 510, timesincorrectwithhint: 291},
{year: 2024, month: 7, day: 6, questionid: 91, timesasked: 1882,timescorrect: 388, timescorrectwithhint: 628, timesincorrect: 552, timesincorrectwithhint: 314},
{year: 2024, month: 7, day: 6, questionid: 92, timesasked: 1278,timescorrect: 202, timescorrectwithhint: 389, timesincorrect: 436, timesincorrectwithhint: 251},
{year: 2024, month: 7, day: 6, questionid: 93, timesasked: 1720,timescorrect: 632, timescorrectwithhint: 740, timesincorrect: 227, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 6, questionid: 94, timesasked: 1814,timescorrect: 513, timescorrectwithhint: 689, timesincorrect: 393, timesincorrectwithhint: 219},
{year: 2024, month: 7, day: 6, questionid: 95, timesasked: 1436,timescorrect: 454, timescorrectwithhint: 574, timesincorrect: 263, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 6, questionid: 96, timesasked: 1906,timescorrect: 429, timescorrectwithhint: 658, timesincorrect: 523, timesincorrectwithhint: 296},
{year: 2024, month: 7, day: 6, questionid: 97, timesasked: 1276,timescorrect: 319, timescorrectwithhint: 459, timesincorrect: 318, timesincorrectwithhint: 180},
{year: 2024, month: 7, day: 7, questionid: 1, timesasked: 1780,timescorrect: 663, timescorrectwithhint: 771, timesincorrect: 226, timesincorrectwithhint: 120},
{year: 2024, month: 7, day: 7, questionid: 2, timesasked: 1021,timescorrect: 322, timescorrectwithhint: 407, timesincorrect: 188, timesincorrectwithhint: 104},
{year: 2024, month: 7, day: 7, questionid: 3, timesasked: 1651,timescorrect: 612, timescorrectwithhint: 714, timesincorrect: 213, timesincorrectwithhint: 112},
{year: 2024, month: 7, day: 7, questionid: 4, timesasked: 1123,timescorrect: 398, timescorrectwithhint: 474, timesincorrect: 163, timesincorrectwithhint: 88},
{year: 2024, month: 7, day: 7, questionid: 5, timesasked: 1972,timescorrect: 633, timescorrectwithhint: 794, timesincorrect: 352, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 7, questionid: 6, timesasked: 1073,timescorrect: 336, timescorrectwithhint: 427, timesincorrect: 200, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 7, questionid: 7, timesasked: 1760,timescorrect: 332, timescorrectwithhint: 569, timesincorrect: 547, timesincorrectwithhint: 312},
{year: 2024, month: 7, day: 7, questionid: 8, timesasked: 1956,timescorrect: 633, timescorrectwithhint: 791, timesincorrect: 344, timesincorrectwithhint: 188},
{year: 2024, month: 7, day: 7, questionid: 9, timesasked: 1408,timescorrect: 433, timescorrectwithhint: 555, timesincorrect: 270, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 7, questionid: 10, timesasked: 1732,timescorrect: 418, timescorrectwithhint: 614, timesincorrect: 447, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 7, questionid: 11, timesasked: 1745,timescorrect: 484, timescorrectwithhint: 657, timesincorrect: 387, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 7, questionid: 12, timesasked: 1674,timescorrect: 455, timescorrectwithhint: 624, timesincorrect: 381, timesincorrectwithhint: 214},
{year: 2024, month: 7, day: 7, questionid: 13, timesasked: 1447,timescorrect: 404, timescorrectwithhint: 546, timesincorrect: 318, timesincorrectwithhint: 179},
{year: 2024, month: 7, day: 7, questionid: 14, timesasked: 1843,timescorrect: 399, timescorrectwithhint: 626, timesincorrect: 521, timesincorrectwithhint: 297},
{year: 2024, month: 7, day: 7, questionid: 15, timesasked: 1238,timescorrect: 436, timescorrectwithhint: 522, timesincorrect: 182, timesincorrectwithhint: 98},
{year: 2024, month: 7, day: 7, questionid: 16, timesasked: 1830,timescorrect: 562, timescorrectwithhint: 721, timesincorrect: 352, timesincorrectwithhint: 195},
{year: 2024, month: 7, day: 7, questionid: 17, timesasked: 1569,timescorrect: 614, timescorrectwithhint: 698, timesincorrect: 170, timesincorrectwithhint: 87},
{year: 2024, month: 7, day: 7, questionid: 18, timesasked: 1039,timescorrect: 217, timescorrectwithhint: 348, timesincorrect: 302, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 7, questionid: 19, timesasked: 1274,timescorrect: 303, timescorrectwithhint: 449, timesincorrect: 333, timesincorrectwithhint: 189},
{year: 2024, month: 7, day: 7, questionid: 20, timesasked: 1961,timescorrect: 387, timescorrectwithhint: 644, timesincorrect: 593, timesincorrectwithhint: 337},
{year: 2024, month: 7, day: 7, questionid: 21, timesasked: 1257,timescorrect: 302, timescorrectwithhint: 445, timesincorrect: 325, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 7, questionid: 22, timesasked: 1672,timescorrect: 304, timescorrectwithhint: 533, timesincorrect: 531, timesincorrectwithhint: 304},
{year: 2024, month: 7, day: 7, questionid: 23, timesasked: 1950,timescorrect: 672, timescorrectwithhint: 812, timesincorrect: 302, timesincorrectwithhint: 164},
{year: 2024, month: 7, day: 7, questionid: 24, timesasked: 1571,timescorrect: 576, timescorrectwithhint: 675, timesincorrect: 208, timesincorrectwithhint: 112},
{year: 2024, month: 7, day: 7, questionid: 25, timesasked: 1870,timescorrect: 709, timescorrectwithhint: 818, timesincorrect: 225, timesincorrectwithhint: 118},
{year: 2024, month: 7, day: 7, questionid: 26, timesasked: 1375,timescorrect: 403, timescorrectwithhint: 530, timesincorrect: 284, timesincorrectwithhint: 158},
{year: 2024, month: 7, day: 7, questionid: 27, timesasked: 1855,timescorrect: 524, timescorrectwithhint: 704, timesincorrect: 403, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 7, questionid: 28, timesasked: 1837,timescorrect: 616, timescorrectwithhint: 755, timesincorrect: 302, timesincorrectwithhint: 164},
{year: 2024, month: 7, day: 7, questionid: 29, timesasked: 1075,timescorrect: 387, timescorrectwithhint: 458, timesincorrect: 149, timesincorrectwithhint: 81},
{year: 2024, month: 7, day: 7, questionid: 30, timesasked: 1346,timescorrect: 517, timescorrectwithhint: 593, timesincorrect: 155, timesincorrectwithhint: 81},
{year: 2024, month: 7, day: 7, questionid: 31, timesasked: 1386,timescorrect: 224, timescorrectwithhint: 425, timesincorrect: 468, timesincorrectwithhint: 269},
{year: 2024, month: 7, day: 7, questionid: 32, timesasked: 1846,timescorrect: 668, timescorrectwithhint: 788, timesincorrect: 254, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 7, questionid: 33, timesasked: 1637,timescorrect: 325, timescorrectwithhint: 539, timesincorrect: 493, timesincorrectwithhint: 280},
{year: 2024, month: 7, day: 7, questionid: 34, timesasked: 1754,timescorrect: 563, timescorrectwithhint: 706, timesincorrect: 313, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 7, questionid: 35, timesasked: 1151,timescorrect: 389, timescorrectwithhint: 475, timesincorrect: 185, timesincorrectwithhint: 102},
{year: 2024, month: 7, day: 7, questionid: 36, timesasked: 1792,timescorrect: 418, timescorrectwithhint: 627, timesincorrect: 477, timesincorrectwithhint: 270},
{year: 2024, month: 7, day: 7, questionid: 37, timesasked: 1638,timescorrect: 332, timescorrectwithhint: 543, timesincorrect: 486, timesincorrectwithhint: 277},
{year: 2024, month: 7, day: 7, questionid: 38, timesasked: 1478,timescorrect: 530, timescorrectwithhint: 628, timesincorrect: 208, timesincorrectwithhint: 112},
{year: 2024, month: 7, day: 7, questionid: 39, timesasked: 1309,timescorrect: 197, timescorrectwithhint: 393, timesincorrect: 456, timesincorrectwithhint: 263},
{year: 2024, month: 7, day: 7, questionid: 40, timesasked: 1914,timescorrect: 336, timescorrectwithhint: 603, timesincorrect: 620, timesincorrectwithhint: 355},
{year: 2024, month: 7, day: 7, questionid: 41, timesasked: 1947,timescorrect: 375, timescorrectwithhint: 634, timesincorrect: 597, timesincorrectwithhint: 341},
{year: 2024, month: 7, day: 7, questionid: 42, timesasked: 1097,timescorrect: 431, timescorrectwithhint: 489, timesincorrect: 116, timesincorrectwithhint: 61},
{year: 2024, month: 7, day: 7, questionid: 43, timesasked: 1864,timescorrect: 303, timescorrectwithhint: 573, timesincorrect: 628, timesincorrectwithhint: 360},
{year: 2024, month: 7, day: 7, questionid: 44, timesasked: 1682,timescorrect: 390, timescorrectwithhint: 587, timesincorrect: 450, timesincorrectwithhint: 255},
{year: 2024, month: 7, day: 7, questionid: 45, timesasked: 1378,timescorrect: 361, timescorrectwithhint: 506, timesincorrect: 327, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 7, questionid: 46, timesasked: 1399,timescorrect: 282, timescorrectwithhint: 463, timesincorrect: 416, timesincorrectwithhint: 238},
{year: 2024, month: 7, day: 7, questionid: 47, timesasked: 1473,timescorrect: 281, timescorrectwithhint: 478, timesincorrect: 455, timesincorrectwithhint: 259},
{year: 2024, month: 7, day: 7, questionid: 48, timesasked: 1177,timescorrect: 319, timescorrectwithhint: 438, timesincorrect: 269, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 7, questionid: 49, timesasked: 1509,timescorrect: 582, timescorrectwithhint: 666, timesincorrect: 172, timesincorrectwithhint: 89},
{year: 2024, month: 7, day: 7, questionid: 50, timesasked: 1727,timescorrect: 511, timescorrectwithhint: 669, timesincorrect: 352, timesincorrectwithhint: 195},
{year: 2024, month: 7, day: 7, questionid: 51, timesasked: 1342,timescorrect: 307, timescorrectwithhint: 466, timesincorrect: 363, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 7, questionid: 52, timesasked: 1385,timescorrect: 477, timescorrectwithhint: 577, timesincorrect: 214, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 7, questionid: 53, timesasked: 1847,timescorrect: 566, timescorrectwithhint: 727, timesincorrect: 357, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 7, questionid: 54, timesasked: 1447,timescorrect: 395, timescorrectwithhint: 540, timesincorrect: 328, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 7, questionid: 55, timesasked: 1489,timescorrect: 470, timescorrectwithhint: 594, timesincorrect: 274, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 7, questionid: 56, timesasked: 1082,timescorrect: 198, timescorrectwithhint: 346, timesincorrect: 342, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 7, questionid: 57, timesasked: 1749,timescorrect: 471, timescorrectwithhint: 649, timesincorrect: 403, timesincorrectwithhint: 226},
{year: 2024, month: 7, day: 7, questionid: 58, timesasked: 1976,timescorrect: 313, timescorrectwithhint: 602, timesincorrect: 674, timesincorrectwithhint: 387},
{year: 2024, month: 7, day: 7, questionid: 59, timesasked: 1197,timescorrect: 217, timescorrectwithhint: 381, timesincorrect: 380, timesincorrectwithhint: 219},
{year: 2024, month: 7, day: 7, questionid: 60, timesasked: 1136,timescorrect: 352, timescorrectwithhint: 449, timesincorrect: 215, timesincorrectwithhint: 120},
{year: 2024, month: 7, day: 7, questionid: 61, timesasked: 1095,timescorrect: 204, timescorrectwithhint: 352, timesincorrect: 342, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 7, questionid: 62, timesasked: 1925,timescorrect: 687, timescorrectwithhint: 816, timesincorrect: 275, timesincorrectwithhint: 147},
{year: 2024, month: 7, day: 7, questionid: 63, timesasked: 1037,timescorrect: 166, timescorrectwithhint: 317, timesincorrect: 352, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 7, questionid: 64, timesasked: 1438,timescorrect: 492, timescorrectwithhint: 597, timesincorrect: 226, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 7, questionid: 65, timesasked: 1701,timescorrect: 522, timescorrectwithhint: 670, timesincorrect: 328, timesincorrectwithhint: 181},
{year: 2024, month: 7, day: 7, questionid: 66, timesasked: 1093,timescorrect: 362, timescorrectwithhint: 446, timesincorrect: 184, timesincorrectwithhint: 101},
{year: 2024, month: 7, day: 7, questionid: 67, timesasked: 1439,timescorrect: 536, timescorrectwithhint: 623, timesincorrect: 183, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 7, questionid: 68, timesasked: 1228,timescorrect: 465, timescorrectwithhint: 537, timesincorrect: 148, timesincorrectwithhint: 78},
{year: 2024, month: 7, day: 7, questionid: 69, timesasked: 1616,timescorrect: 505, timescorrectwithhint: 642, timesincorrect: 302, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 7, questionid: 70, timesasked: 1275,timescorrect: 252, timescorrectwithhint: 419, timesincorrect: 384, timesincorrectwithhint: 220},
{year: 2024, month: 7, day: 7, questionid: 71, timesasked: 1120,timescorrect: 358, timescorrectwithhint: 450, timesincorrect: 201, timesincorrectwithhint: 111},
{year: 2024, month: 7, day: 7, questionid: 72, timesasked: 1455,timescorrect: 515, timescorrectwithhint: 615, timesincorrect: 211, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 7, questionid: 73, timesasked: 1044,timescorrect: 244, timescorrectwithhint: 365, timesincorrect: 277, timesincorrectwithhint: 158},
{year: 2024, month: 7, day: 7, questionid: 74, timesasked: 1573,timescorrect: 379, timescorrectwithhint: 558, timesincorrect: 406, timesincorrectwithhint: 230},
{year: 2024, month: 7, day: 7, questionid: 75, timesasked: 1470,timescorrect: 444, timescorrectwithhint: 575, timesincorrect: 290, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 7, questionid: 76, timesasked: 1525,timescorrect: 253, timescorrectwithhint: 472, timesincorrect: 508, timesincorrectwithhint: 292},
{year: 2024, month: 7, day: 7, questionid: 77, timesasked: 1285,timescorrect: 217, timescorrectwithhint: 400, timesincorrect: 425, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 7, questionid: 78, timesasked: 1220,timescorrect: 470, timescorrectwithhint: 538, timesincorrect: 139, timesincorrectwithhint: 73},
{year: 2024, month: 7, day: 7, questionid: 79, timesasked: 1464,timescorrect: 263, timescorrectwithhint: 465, timesincorrect: 468, timesincorrectwithhint: 268},
{year: 2024, month: 7, day: 7, questionid: 80, timesasked: 1423,timescorrect: 331, timescorrectwithhint: 497, timesincorrect: 379, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 7, questionid: 81, timesasked: 1369,timescorrect: 308, timescorrectwithhint: 472, timesincorrect: 375, timesincorrectwithhint: 214},
{year: 2024, month: 7, day: 7, questionid: 82, timesasked: 1795,timescorrect: 500, timescorrectwithhint: 677, timesincorrect: 397, timesincorrectwithhint: 221},
{year: 2024, month: 7, day: 7, questionid: 83, timesasked: 1752,timescorrect: 652, timescorrectwithhint: 759, timesincorrect: 223, timesincorrectwithhint: 118},
{year: 2024, month: 7, day: 7, questionid: 84, timesasked: 1929,timescorrect: 696, timescorrectwithhint: 823, timesincorrect: 267, timesincorrectwithhint: 143},
{year: 2024, month: 7, day: 7, questionid: 85, timesasked: 1983,timescorrect: 445, timescorrectwithhint: 683, timesincorrect: 545, timesincorrectwithhint: 310},
{year: 2024, month: 7, day: 7, questionid: 86, timesasked: 1786,timescorrect: 400, timescorrectwithhint: 615, timesincorrect: 492, timesincorrectwithhint: 279},
{year: 2024, month: 7, day: 7, questionid: 87, timesasked: 1095,timescorrect: 330, timescorrectwithhint: 428, timesincorrect: 216, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 7, questionid: 88, timesasked: 1678,timescorrect: 365, timescorrectwithhint: 571, timesincorrect: 473, timesincorrectwithhint: 269},
{year: 2024, month: 7, day: 7, questionid: 89, timesasked: 1161,timescorrect: 361, timescorrectwithhint: 460, timesincorrect: 219, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 7, questionid: 90, timesasked: 1236,timescorrect: 489, timescorrectwithhint: 553, timesincorrect: 128, timesincorrectwithhint: 66},
{year: 2024, month: 7, day: 7, questionid: 91, timesasked: 1775,timescorrect: 419, timescorrectwithhint: 624, timesincorrect: 468, timesincorrectwithhint: 264},
{year: 2024, month: 7, day: 7, questionid: 92, timesasked: 1555,timescorrect: 598, timescorrectwithhint: 685, timesincorrect: 178, timesincorrectwithhint: 94},
{year: 2024, month: 7, day: 7, questionid: 93, timesasked: 1558,timescorrect: 475, timescorrectwithhint: 612, timesincorrect: 303, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 7, questionid: 94, timesasked: 1688,timescorrect: 641, timescorrectwithhint: 739, timesincorrect: 202, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 7, questionid: 95, timesasked: 1659,timescorrect: 289, timescorrectwithhint: 522, timesincorrect: 539, timesincorrectwithhint: 309},
{year: 2024, month: 7, day: 7, questionid: 96, timesasked: 1777,timescorrect: 375, timescorrectwithhint: 598, timesincorrect: 513, timesincorrectwithhint: 291},
{year: 2024, month: 7, day: 7, questionid: 97, timesasked: 1956,timescorrect: 532, timescorrectwithhint: 730, timesincorrect: 445, timesincorrectwithhint: 249},
{year: 2024, month: 7, day: 8, questionid: 1, timesasked: 1514,timescorrect: 298, timescorrectwithhint: 496, timesincorrect: 458, timesincorrectwithhint: 262},
{year: 2024, month: 7, day: 8, questionid: 2, timesasked: 1940,timescorrect: 367, timescorrectwithhint: 627, timesincorrect: 602, timesincorrectwithhint: 344},
{year: 2024, month: 7, day: 8, questionid: 3, timesasked: 1606,timescorrect: 545, timescorrectwithhint: 664, timesincorrect: 257, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 8, questionid: 4, timesasked: 1412,timescorrect: 296, timescorrectwithhint: 474, timesincorrect: 409, timesincorrectwithhint: 233},
{year: 2024, month: 7, day: 8, questionid: 5, timesasked: 1803,timescorrect: 611, timescorrectwithhint: 745, timesincorrect: 289, timesincorrectwithhint: 158},
{year: 2024, month: 7, day: 8, questionid: 6, timesasked: 1771,timescorrect: 697, timescorrectwithhint: 790, timesincorrect: 188, timesincorrectwithhint: 96},
{year: 2024, month: 7, day: 8, questionid: 7, timesasked: 1183,timescorrect: 229, timescorrectwithhint: 385, timesincorrect: 362, timesincorrectwithhint: 207},
{year: 2024, month: 7, day: 8, questionid: 8, timesasked: 1729,timescorrect: 372, timescorrectwithhint: 586, timesincorrect: 492, timesincorrectwithhint: 279},
{year: 2024, month: 7, day: 8, questionid: 9, timesasked: 1066,timescorrect: 189, timescorrectwithhint: 337, timesincorrect: 343, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 8, questionid: 10, timesasked: 1657,timescorrect: 391, timescorrectwithhint: 583, timesincorrect: 436, timesincorrectwithhint: 247},
{year: 2024, month: 7, day: 8, questionid: 11, timesasked: 1321,timescorrect: 243, timescorrectwithhint: 423, timesincorrect: 416, timesincorrectwithhint: 239},
{year: 2024, month: 7, day: 8, questionid: 12, timesasked: 1999,timescorrect: 653, timescorrectwithhint: 812, timesincorrect: 345, timesincorrectwithhint: 189},
{year: 2024, month: 7, day: 8, questionid: 13, timesasked: 1594,timescorrect: 399, timescorrectwithhint: 574, timesincorrect: 397, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 8, questionid: 14, timesasked: 1185,timescorrect: 207, timescorrectwithhint: 373, timesincorrect: 384, timesincorrectwithhint: 221},
{year: 2024, month: 7, day: 8, questionid: 15, timesasked: 1982,timescorrect: 712, timescorrectwithhint: 843, timesincorrect: 278, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 8, questionid: 16, timesasked: 1738,timescorrect: 442, timescorrectwithhint: 630, timesincorrect: 426, timesincorrectwithhint: 240},
{year: 2024, month: 7, day: 8, questionid: 17, timesasked: 1197,timescorrect: 185, timescorrectwithhint: 362, timesincorrect: 413, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 8, questionid: 18, timesasked: 1754,timescorrect: 508, timescorrectwithhint: 673, timesincorrect: 368, timesincorrectwithhint: 205},
{year: 2024, month: 7, day: 8, questionid: 19, timesasked: 1553,timescorrect: 516, timescorrectwithhint: 636, timesincorrect: 259, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 8, questionid: 20, timesasked: 1907,timescorrect: 577, timescorrectwithhint: 746, timesincorrect: 375, timesincorrectwithhint: 209},
{year: 2024, month: 7, day: 8, questionid: 21, timesasked: 1537,timescorrect: 270, timescorrectwithhint: 485, timesincorrect: 497, timesincorrectwithhint: 285},
{year: 2024, month: 7, day: 8, questionid: 22, timesasked: 1012,timescorrect: 307, timescorrectwithhint: 397, timesincorrect: 198, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 8, questionid: 23, timesasked: 1287,timescorrect: 353, timescorrectwithhint: 482, timesincorrect: 289, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 8, questionid: 24, timesasked: 1017,timescorrect: 171, timescorrectwithhint: 316, timesincorrect: 337, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 8, questionid: 25, timesasked: 1193,timescorrect: 239, timescorrectwithhint: 394, timesincorrect: 356, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 8, questionid: 26, timesasked: 1995,timescorrect: 704, timescorrectwithhint: 841, timesincorrect: 293, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 8, questionid: 27, timesasked: 1833,timescorrect: 597, timescorrectwithhint: 743, timesincorrect: 318, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 8, questionid: 28, timesasked: 1210,timescorrect: 250, timescorrectwithhint: 404, timesincorrect: 354, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 8, questionid: 29, timesasked: 1535,timescorrect: 589, timescorrectwithhint: 676, timesincorrect: 177, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 8, questionid: 30, timesasked: 1640,timescorrect: 357, timescorrectwithhint: 559, timesincorrect: 462, timesincorrectwithhint: 262},
{year: 2024, month: 7, day: 8, questionid: 31, timesasked: 1567,timescorrect: 488, timescorrectwithhint: 621, timesincorrect: 295, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 8, questionid: 32, timesasked: 1101,timescorrect: 255, timescorrectwithhint: 384, timesincorrect: 295, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 8, questionid: 33, timesasked: 1359,timescorrect: 346, timescorrectwithhint: 493, timesincorrect: 333, timesincorrectwithhint: 187},
{year: 2024, month: 7, day: 8, questionid: 34, timesasked: 1435,timescorrect: 551, timescorrectwithhint: 632, timesincorrect: 166, timesincorrectwithhint: 86},
{year: 2024, month: 7, day: 8, questionid: 35, timesasked: 1351,timescorrect: 298, timescorrectwithhint: 462, timesincorrect: 376, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 8, questionid: 36, timesasked: 1972,timescorrect: 326, timescorrectwithhint: 609, timesincorrect: 659, timesincorrectwithhint: 378},
{year: 2024, month: 7, day: 8, questionid: 37, timesasked: 1104,timescorrect: 196, timescorrectwithhint: 349, timesincorrect: 355, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 8, questionid: 38, timesasked: 1590,timescorrect: 433, timescorrectwithhint: 594, timesincorrect: 361, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 8, questionid: 39, timesasked: 1907,timescorrect: 593, timescorrectwithhint: 756, timesincorrect: 360, timesincorrectwithhint: 198},
{year: 2024, month: 7, day: 8, questionid: 40, timesasked: 1994,timescorrect: 727, timescorrectwithhint: 854, timesincorrect: 269, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 8, questionid: 41, timesasked: 1081,timescorrect: 218, timescorrectwithhint: 358, timesincorrect: 321, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 8, questionid: 42, timesasked: 1074,timescorrect: 221, timescorrectwithhint: 358, timesincorrect: 315, timesincorrectwithhint: 180},
{year: 2024, month: 7, day: 8, questionid: 43, timesasked: 1174,timescorrect: 347, timescorrectwithhint: 455, timesincorrect: 239, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 8, questionid: 44, timesasked: 1822,timescorrect: 622, timescorrectwithhint: 756, timesincorrect: 288, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 8, questionid: 45, timesasked: 1578,timescorrect: 326, timescorrectwithhint: 527, timesincorrect: 462, timesincorrectwithhint: 263},
{year: 2024, month: 7, day: 8, questionid: 46, timesasked: 1204,timescorrect: 330, timescorrectwithhint: 451, timesincorrect: 271, timesincorrectwithhint: 152},
{year: 2024, month: 7, day: 8, questionid: 47, timesasked: 1984,timescorrect: 435, timescorrectwithhint: 678, timesincorrect: 556, timesincorrectwithhint: 315},
{year: 2024, month: 7, day: 8, questionid: 48, timesasked: 1996,timescorrect: 429, timescorrectwithhint: 676, timesincorrect: 568, timesincorrectwithhint: 323},
{year: 2024, month: 7, day: 8, questionid: 49, timesasked: 1933,timescorrect: 685, timescorrectwithhint: 817, timesincorrect: 281, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 8, questionid: 50, timesasked: 1774,timescorrect: 335, timescorrectwithhint: 573, timesincorrect: 551, timesincorrectwithhint: 315},
{year: 2024, month: 7, day: 8, questionid: 51, timesasked: 1095,timescorrect: 320, timescorrectwithhint: 422, timesincorrect: 227, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 8, questionid: 52, timesasked: 1370,timescorrect: 315, timescorrectwithhint: 477, timesincorrect: 369, timesincorrectwithhint: 209},
{year: 2024, month: 7, day: 8, questionid: 53, timesasked: 1720,timescorrect: 513, timescorrectwithhint: 669, timesincorrect: 346, timesincorrectwithhint: 192},
{year: 2024, month: 7, day: 8, questionid: 54, timesasked: 1646,timescorrect: 316, timescorrectwithhint: 535, timesincorrect: 506, timesincorrectwithhint: 289},
{year: 2024, month: 7, day: 8, questionid: 55, timesasked: 1838,timescorrect: 593, timescorrectwithhint: 742, timesincorrect: 325, timesincorrectwithhint: 178},
{year: 2024, month: 7, day: 8, questionid: 56, timesasked: 1098,timescorrect: 325, timescorrectwithhint: 425, timesincorrect: 223, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 8, questionid: 57, timesasked: 1290,timescorrect: 251, timescorrectwithhint: 421, timesincorrect: 393, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 8, questionid: 58, timesasked: 1563,timescorrect: 569, timescorrectwithhint: 670, timesincorrect: 211, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 8, questionid: 59, timesasked: 1051,timescorrect: 226, timescorrectwithhint: 356, timesincorrect: 299, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 8, questionid: 60, timesasked: 1803,timescorrect: 400, timescorrectwithhint: 618, timesincorrect: 501, timesincorrectwithhint: 284},
{year: 2024, month: 7, day: 8, questionid: 61, timesasked: 1959,timescorrect: 539, timescorrectwithhint: 734, timesincorrect: 440, timesincorrectwithhint: 246},
{year: 2024, month: 7, day: 8, questionid: 62, timesasked: 1458,timescorrect: 394, timescorrectwithhint: 542, timesincorrect: 334, timesincorrectwithhint: 188},
{year: 2024, month: 7, day: 8, questionid: 63, timesasked: 1894,timescorrect: 350, timescorrectwithhint: 607, timesincorrect: 596, timesincorrectwithhint: 341},
{year: 2024, month: 7, day: 8, questionid: 64, timesasked: 1725,timescorrect: 332, timescorrectwithhint: 561, timesincorrect: 530, timesincorrectwithhint: 302},
{year: 2024, month: 7, day: 8, questionid: 65, timesasked: 1723,timescorrect: 434, timescorrectwithhint: 622, timesincorrect: 427, timesincorrectwithhint: 240},
{year: 2024, month: 7, day: 8, questionid: 66, timesasked: 1888,timescorrect: 413, timescorrectwithhint: 644, timesincorrect: 530, timesincorrectwithhint: 301},
{year: 2024, month: 7, day: 8, questionid: 67, timesasked: 1400,timescorrect: 489, timescorrectwithhint: 587, timesincorrect: 210, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 8, questionid: 68, timesasked: 1892,timescorrect: 558, timescorrectwithhint: 732, timesincorrect: 387, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 8, questionid: 69, timesasked: 1229,timescorrect: 354, timescorrectwithhint: 470, timesincorrect: 260, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 8, questionid: 70, timesasked: 1480,timescorrect: 427, timescorrectwithhint: 567, timesincorrect: 312, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 8, questionid: 71, timesasked: 1828,timescorrect: 371, timescorrectwithhint: 607, timesincorrect: 542, timesincorrectwithhint: 308},
{year: 2024, month: 7, day: 8, questionid: 72, timesasked: 1461,timescorrect: 438, timescorrectwithhint: 569, timesincorrect: 292, timesincorrectwithhint: 162},
{year: 2024, month: 7, day: 8, questionid: 73, timesasked: 1089,timescorrect: 419, timescorrectwithhint: 480, timesincorrect: 124, timesincorrectwithhint: 66},
{year: 2024, month: 7, day: 8, questionid: 74, timesasked: 1718,timescorrect: 354, timescorrectwithhint: 573, timesincorrect: 504, timesincorrectwithhint: 287},
{year: 2024, month: 7, day: 8, questionid: 75, timesasked: 1127,timescorrect: 389, timescorrectwithhint: 470, timesincorrect: 174, timesincorrectwithhint: 94},
{year: 2024, month: 7, day: 8, questionid: 76, timesasked: 1187,timescorrect: 245, timescorrectwithhint: 396, timesincorrect: 347, timesincorrectwithhint: 199},
{year: 2024, month: 7, day: 8, questionid: 77, timesasked: 1831,timescorrect: 492, timescorrectwithhint: 680, timesincorrect: 422, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 8, questionid: 78, timesasked: 1038,timescorrect: 357, timescorrectwithhint: 432, timesincorrect: 161, timesincorrectwithhint: 88},
{year: 2024, month: 7, day: 8, questionid: 79, timesasked: 1264,timescorrect: 258, timescorrectwithhint: 420, timesincorrect: 373, timesincorrectwithhint: 213},
{year: 2024, month: 7, day: 8, questionid: 80, timesasked: 1258,timescorrect: 288, timescorrectwithhint: 437, timesincorrect: 340, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 8, questionid: 81, timesasked: 1498,timescorrect: 306, timescorrectwithhint: 498, timesincorrect: 442, timesincorrectwithhint: 252},
{year: 2024, month: 7, day: 8, questionid: 82, timesasked: 1666,timescorrect: 403, timescorrectwithhint: 591, timesincorrect: 429, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 8, questionid: 83, timesasked: 1619,timescorrect: 269, timescorrectwithhint: 501, timesincorrect: 539, timesincorrectwithhint: 310},
{year: 2024, month: 7, day: 8, questionid: 84, timesasked: 1051,timescorrect: 173, timescorrectwithhint: 324, timesincorrect: 351, timesincorrectwithhint: 203},
{year: 2024, month: 7, day: 8, questionid: 85, timesasked: 1611,timescorrect: 258, timescorrectwithhint: 493, timesincorrect: 546, timesincorrectwithhint: 314},
{year: 2024, month: 7, day: 8, questionid: 86, timesasked: 1002,timescorrect: 347, timescorrectwithhint: 418, timesincorrect: 153, timesincorrectwithhint: 84},
{year: 2024, month: 7, day: 8, questionid: 87, timesasked: 1225,timescorrect: 472, timescorrectwithhint: 540, timesincorrect: 139, timesincorrectwithhint: 74},
{year: 2024, month: 7, day: 8, questionid: 88, timesasked: 1118,timescorrect: 356, timescorrectwithhint: 448, timesincorrect: 202, timesincorrectwithhint: 112},
{year: 2024, month: 7, day: 8, questionid: 89, timesasked: 1189,timescorrect: 418, timescorrectwithhint: 500, timesincorrect: 175, timesincorrectwithhint: 96},
{year: 2024, month: 7, day: 8, questionid: 90, timesasked: 1221,timescorrect: 387, timescorrectwithhint: 488, timesincorrect: 223, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 8, questionid: 91, timesasked: 1456,timescorrect: 240, timescorrectwithhint: 450, timesincorrect: 487, timesincorrectwithhint: 279},
{year: 2024, month: 7, day: 8, questionid: 92, timesasked: 1820,timescorrect: 724, timescorrectwithhint: 816, timesincorrect: 185, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 8, questionid: 93, timesasked: 1504,timescorrect: 471, timescorrectwithhint: 598, timesincorrect: 280, timesincorrectwithhint: 155},
{year: 2024, month: 7, day: 8, questionid: 94, timesasked: 1700,timescorrect: 275, timescorrectwithhint: 522, timesincorrect: 574, timesincorrectwithhint: 329},
{year: 2024, month: 7, day: 8, questionid: 95, timesasked: 1619,timescorrect: 522, timescorrectwithhint: 653, timesincorrect: 287, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 8, questionid: 96, timesasked: 1729,timescorrect: 539, timescorrectwithhint: 686, timesincorrect: 324, timesincorrectwithhint: 180},
{year: 2024, month: 7, day: 8, questionid: 97, timesasked: 1475,timescorrect: 500, timescorrectwithhint: 610, timesincorrect: 236, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 9, questionid: 1, timesasked: 1153,timescorrect: 329, timescorrectwithhint: 439, timesincorrect: 246, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 9, questionid: 2, timesasked: 1532,timescorrect: 300, timescorrectwithhint: 502, timesincorrect: 465, timesincorrectwithhint: 265},
{year: 2024, month: 7, day: 9, questionid: 3, timesasked: 1281,timescorrect: 286, timescorrectwithhint: 440, timesincorrect: 354, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 9, questionid: 4, timesasked: 1303,timescorrect: 412, timescorrectwithhint: 521, timesincorrect: 238, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 9, questionid: 5, timesasked: 1070,timescorrect: 231, timescorrectwithhint: 363, timesincorrect: 303, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 9, questionid: 6, timesasked: 1947,timescorrect: 359, timescorrectwithhint: 624, timesincorrect: 614, timesincorrectwithhint: 350},
{year: 2024, month: 7, day: 9, questionid: 7, timesasked: 1072,timescorrect: 249, timescorrectwithhint: 374, timesincorrect: 286, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 9, questionid: 8, timesasked: 1205,timescorrect: 417, timescorrectwithhint: 503, timesincorrect: 184, timesincorrectwithhint: 101},
{year: 2024, month: 7, day: 9, questionid: 9, timesasked: 1618,timescorrect: 550, timescorrectwithhint: 669, timesincorrect: 258, timesincorrectwithhint: 141},
{year: 2024, month: 7, day: 9, questionid: 10, timesasked: 1012,timescorrect: 155, timescorrectwithhint: 305, timesincorrect: 350, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 9, questionid: 11, timesasked: 1358,timescorrect: 260, timescorrectwithhint: 441, timesincorrect: 418, timesincorrectwithhint: 239},
{year: 2024, month: 7, day: 9, questionid: 12, timesasked: 1185,timescorrect: 257, timescorrectwithhint: 403, timesincorrect: 334, timesincorrectwithhint: 191},
{year: 2024, month: 7, day: 9, questionid: 13, timesasked: 1499,timescorrect: 493, timescorrectwithhint: 611, timesincorrect: 255, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 9, questionid: 14, timesasked: 1758,timescorrect: 696, timescorrectwithhint: 787, timesincorrect: 182, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 9, questionid: 15, timesasked: 1938,timescorrect: 749, timescorrectwithhint: 856, timesincorrect: 219, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 9, questionid: 16, timesasked: 1817,timescorrect: 598, timescorrectwithhint: 740, timesincorrect: 310, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 9, questionid: 17, timesasked: 1941,timescorrect: 396, timescorrectwithhint: 645, timesincorrect: 574, timesincorrectwithhint: 326},
{year: 2024, month: 7, day: 9, questionid: 18, timesasked: 1940,timescorrect: 758, timescorrectwithhint: 862, timesincorrect: 211, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 9, questionid: 19, timesasked: 1339,timescorrect: 440, timescorrectwithhint: 545, timesincorrect: 228, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 9, questionid: 20, timesasked: 1103,timescorrect: 196, timescorrectwithhint: 349, timesincorrect: 355, timesincorrectwithhint: 203},
{year: 2024, month: 7, day: 9, questionid: 21, timesasked: 1153,timescorrect: 239, timescorrectwithhint: 385, timesincorrect: 336, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 9, questionid: 22, timesasked: 1171,timescorrect: 215, timescorrectwithhint: 375, timesincorrect: 369, timesincorrectwithhint: 212},
{year: 2024, month: 7, day: 9, questionid: 23, timesasked: 1465,timescorrect: 502, timescorrectwithhint: 609, timesincorrect: 229, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 9, questionid: 24, timesasked: 1603,timescorrect: 518, timescorrectwithhint: 647, timesincorrect: 282, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 9, questionid: 25, timesasked: 1743,timescorrect: 608, timescorrectwithhint: 731, timesincorrect: 263, timesincorrectwithhint: 141},
{year: 2024, month: 7, day: 9, questionid: 26, timesasked: 1213,timescorrect: 461, timescorrectwithhint: 531, timesincorrect: 145, timesincorrectwithhint: 76},
{year: 2024, month: 7, day: 9, questionid: 27, timesasked: 1557,timescorrect: 409, timescorrectwithhint: 572, timesincorrect: 369, timesincorrectwithhint: 207},
{year: 2024, month: 7, day: 9, questionid: 28, timesasked: 1037,timescorrect: 290, timescorrectwithhint: 391, timesincorrect: 228, timesincorrectwithhint: 128},
{year: 2024, month: 7, day: 9, questionid: 29, timesasked: 1382,timescorrect: 395, timescorrectwithhint: 527, timesincorrect: 295, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 9, questionid: 30, timesasked: 1208,timescorrect: 244, timescorrectwithhint: 400, timesincorrect: 359, timesincorrectwithhint: 205},
{year: 2024, month: 7, day: 9, questionid: 31, timesasked: 1646,timescorrect: 422, timescorrectwithhint: 599, timesincorrect: 400, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 9, questionid: 32, timesasked: 1578,timescorrect: 249, timescorrectwithhint: 481, timesincorrect: 539, timesincorrectwithhint: 309},
{year: 2024, month: 7, day: 9, questionid: 33, timesasked: 1179,timescorrect: 240, timescorrectwithhint: 391, timesincorrect: 349, timesincorrectwithhint: 199},
{year: 2024, month: 7, day: 9, questionid: 34, timesasked: 1416,timescorrect: 345, timescorrectwithhint: 504, timesincorrect: 362, timesincorrectwithhint: 205},
{year: 2024, month: 7, day: 9, questionid: 35, timesasked: 1213,timescorrect: 473, timescorrectwithhint: 538, timesincorrect: 132, timesincorrectwithhint: 70},
{year: 2024, month: 7, day: 9, questionid: 36, timesasked: 1181,timescorrect: 331, timescorrectwithhint: 446, timesincorrect: 259, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 9, questionid: 37, timesasked: 1633,timescorrect: 637, timescorrectwithhint: 725, timesincorrect: 179, timesincorrectwithhint: 92},
{year: 2024, month: 7, day: 9, questionid: 38, timesasked: 1614,timescorrect: 545, timescorrectwithhint: 666, timesincorrect: 261, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 9, questionid: 39, timesasked: 1661,timescorrect: 566, timescorrectwithhint: 688, timesincorrect: 263, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 9, questionid: 40, timesasked: 1449,timescorrect: 541, timescorrectwithhint: 629, timesincorrect: 183, timesincorrectwithhint: 96},
{year: 2024, month: 7, day: 9, questionid: 41, timesasked: 1301,timescorrect: 401, timescorrectwithhint: 514, timesincorrect: 248, timesincorrectwithhint: 138},
{year: 2024, month: 7, day: 9, questionid: 42, timesasked: 1217,timescorrect: 354, timescorrectwithhint: 468, timesincorrect: 253, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 9, questionid: 43, timesasked: 1777,timescorrect: 420, timescorrectwithhint: 625, timesincorrect: 467, timesincorrectwithhint: 265},
{year: 2024, month: 7, day: 9, questionid: 44, timesasked: 1979,timescorrect: 503, timescorrectwithhint: 717, timesincorrect: 485, timesincorrectwithhint: 274},
{year: 2024, month: 7, day: 9, questionid: 45, timesasked: 1521,timescorrect: 409, timescorrectwithhint: 565, timesincorrect: 350, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 9, questionid: 46, timesasked: 1754,timescorrect: 609, timescorrectwithhint: 733, timesincorrect: 267, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 9, questionid: 47, timesasked: 1444,timescorrect: 311, timescorrectwithhint: 490, timesincorrect: 410, timesincorrectwithhint: 233},
{year: 2024, month: 7, day: 9, questionid: 48, timesasked: 1354,timescorrect: 489, timescorrectwithhint: 577, timesincorrect: 187, timesincorrectwithhint: 101},
{year: 2024, month: 7, day: 9, questionid: 49, timesasked: 1229,timescorrect: 236, timescorrectwithhint: 399, timesincorrect: 378, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 9, questionid: 50, timesasked: 1994,timescorrect: 334, timescorrectwithhint: 619, timesincorrect: 662, timesincorrectwithhint: 379},
{year: 2024, month: 7, day: 9, questionid: 51, timesasked: 1303,timescorrect: 281, timescorrectwithhint: 442, timesincorrect: 370, timesincorrectwithhint: 210},
{year: 2024, month: 7, day: 9, questionid: 52, timesasked: 1955,timescorrect: 400, timescorrectwithhint: 651, timesincorrect: 576, timesincorrectwithhint: 328},
{year: 2024, month: 7, day: 9, questionid: 53, timesasked: 1015,timescorrect: 228, timescorrectwithhint: 350, timesincorrect: 279, timesincorrectwithhint: 158},
{year: 2024, month: 7, day: 9, questionid: 54, timesasked: 1614,timescorrect: 543, timescorrectwithhint: 664, timesincorrect: 263, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 9, questionid: 55, timesasked: 1567,timescorrect: 524, timescorrectwithhint: 643, timesincorrect: 259, timesincorrectwithhint: 141},
{year: 2024, month: 7, day: 9, questionid: 56, timesasked: 1469,timescorrect: 349, timescorrectwithhint: 518, timesincorrect: 384, timesincorrectwithhint: 218},
{year: 2024, month: 7, day: 9, questionid: 57, timesasked: 1632,timescorrect: 614, timescorrectwithhint: 711, timesincorrect: 201, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 9, questionid: 58, timesasked: 1345,timescorrect: 242, timescorrectwithhint: 428, timesincorrect: 429, timesincorrectwithhint: 246},
{year: 2024, month: 7, day: 9, questionid: 59, timesasked: 1368,timescorrect: 392, timescorrectwithhint: 523, timesincorrect: 291, timesincorrectwithhint: 162},
{year: 2024, month: 7, day: 9, questionid: 60, timesasked: 1444,timescorrect: 576, timescorrectwithhint: 648, timesincorrect: 145, timesincorrectwithhint: 75},
{year: 2024, month: 7, day: 9, questionid: 61, timesasked: 1772,timescorrect: 420, timescorrectwithhint: 624, timesincorrect: 465, timesincorrectwithhint: 263},
{year: 2024, month: 7, day: 9, questionid: 62, timesasked: 1885,timescorrect: 629, timescorrectwithhint: 773, timesincorrect: 312, timesincorrectwithhint: 171},
{year: 2024, month: 7, day: 9, questionid: 63, timesasked: 1481,timescorrect: 486, timescorrectwithhint: 602, timesincorrect: 254, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 9, questionid: 64, timesasked: 1345,timescorrect: 448, timescorrectwithhint: 551, timesincorrect: 223, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 9, questionid: 65, timesasked: 1013,timescorrect: 276, timescorrectwithhint: 378, timesincorrect: 230, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 9, questionid: 66, timesasked: 1804,timescorrect: 429, timescorrectwithhint: 636, timesincorrect: 472, timesincorrectwithhint: 267},
{year: 2024, month: 7, day: 9, questionid: 67, timesasked: 1524,timescorrect: 576, timescorrectwithhint: 665, timesincorrect: 185, timesincorrectwithhint: 98},
{year: 2024, month: 7, day: 9, questionid: 68, timesasked: 1180,timescorrect: 458, timescorrectwithhint: 522, timesincorrect: 131, timesincorrectwithhint: 69},
{year: 2024, month: 7, day: 9, questionid: 69, timesasked: 1114,timescorrect: 277, timescorrectwithhint: 400, timesincorrect: 279, timesincorrectwithhint: 158},
{year: 2024, month: 7, day: 9, questionid: 70, timesasked: 1508,timescorrect: 337, timescorrectwithhint: 518, timesincorrect: 416, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 9, questionid: 71, timesasked: 1707,timescorrect: 552, timescorrectwithhint: 689, timesincorrect: 300, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 9, questionid: 72, timesasked: 1433,timescorrect: 306, timescorrectwithhint: 484, timesincorrect: 410, timesincorrectwithhint: 233},
{year: 2024, month: 7, day: 9, questionid: 73, timesasked: 1428,timescorrect: 512, timescorrectwithhint: 607, timesincorrect: 201, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 9, questionid: 74, timesasked: 1604,timescorrect: 296, timescorrectwithhint: 514, timesincorrect: 505, timesincorrectwithhint: 289},
{year: 2024, month: 7, day: 9, questionid: 75, timesasked: 1282,timescorrect: 361, timescorrectwithhint: 485, timesincorrect: 279, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 9, questionid: 76, timesasked: 1274,timescorrect: 395, timescorrectwithhint: 505, timesincorrect: 241, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 9, questionid: 77, timesasked: 1271,timescorrect: 382, timescorrectwithhint: 496, timesincorrect: 253, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 9, questionid: 78, timesasked: 1117,timescorrect: 415, timescorrectwithhint: 483, timesincorrect: 143, timesincorrectwithhint: 76},
{year: 2024, month: 7, day: 9, questionid: 79, timesasked: 1883,timescorrect: 625, timescorrectwithhint: 770, timesincorrect: 316, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 9, questionid: 80, timesasked: 1491,timescorrect: 317, timescorrectwithhint: 503, timesincorrect: 427, timesincorrectwithhint: 244},
{year: 2024, month: 7, day: 9, questionid: 81, timesasked: 1669,timescorrect: 638, timescorrectwithhint: 733, timesincorrect: 195, timesincorrectwithhint: 103},
{year: 2024, month: 7, day: 9, questionid: 82, timesasked: 1835,timescorrect: 327, timescorrectwithhint: 582, timesincorrect: 589, timesincorrectwithhint: 337},
{year: 2024, month: 7, day: 9, questionid: 83, timesasked: 1853,timescorrect: 321, timescorrectwithhint: 581, timesincorrect: 605, timesincorrectwithhint: 346},
{year: 2024, month: 7, day: 9, questionid: 84, timesasked: 1561,timescorrect: 563, timescorrectwithhint: 665, timesincorrect: 217, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 9, questionid: 85, timesasked: 1142,timescorrect: 334, timescorrectwithhint: 440, timesincorrect: 236, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 9, questionid: 86, timesasked: 1879,timescorrect: 677, timescorrectwithhint: 800, timesincorrect: 262, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 9, questionid: 87, timesasked: 1289,timescorrect: 303, timescorrectwithhint: 452, timesincorrect: 341, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 9, questionid: 88, timesasked: 1873,timescorrect: 620, timescorrectwithhint: 765, timesincorrect: 316, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 9, questionid: 89, timesasked: 1692,timescorrect: 301, timescorrectwithhint: 536, timesincorrect: 544, timesincorrectwithhint: 311},
{year: 2024, month: 7, day: 9, questionid: 90, timesasked: 1203,timescorrect: 450, timescorrectwithhint: 523, timesincorrect: 150, timesincorrectwithhint: 80},
{year: 2024, month: 7, day: 9, questionid: 91, timesasked: 1266,timescorrect: 380, timescorrectwithhint: 494, timesincorrect: 252, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 9, questionid: 92, timesasked: 1133,timescorrect: 209, timescorrectwithhint: 363, timesincorrect: 357, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 9, questionid: 93, timesasked: 1489,timescorrect: 576, timescorrectwithhint: 658, timesincorrect: 167, timesincorrectwithhint: 88},
{year: 2024, month: 7, day: 9, questionid: 94, timesasked: 1364,timescorrect: 352, timescorrectwithhint: 497, timesincorrect: 329, timesincorrectwithhint: 186},
{year: 2024, month: 7, day: 9, questionid: 95, timesasked: 1170,timescorrect: 423, timescorrectwithhint: 499, timesincorrect: 161, timesincorrectwithhint: 87},
{year: 2024, month: 7, day: 9, questionid: 96, timesasked: 1895,timescorrect: 701, timescorrectwithhint: 819, timesincorrect: 245, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 9, questionid: 97, timesasked: 1846,timescorrect: 473, timescorrectwithhint: 672, timesincorrect: 449, timesincorrectwithhint: 252},
{year: 2024, month: 7, day: 10, questionid: 1, timesasked: 1697,timescorrect: 633, timescorrectwithhint: 736, timesincorrect: 214, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 10, questionid: 2, timesasked: 1888,timescorrect: 563, timescorrectwithhint: 734, timesincorrect: 380, timesincorrectwithhint: 211},
{year: 2024, month: 7, day: 10, questionid: 3, timesasked: 1820,timescorrect: 509, timescorrectwithhint: 687, timesincorrect: 400, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 10, questionid: 4, timesasked: 1271,timescorrect: 252, timescorrectwithhint: 418, timesincorrect: 383, timesincorrectwithhint: 218},
{year: 2024, month: 7, day: 10, questionid: 5, timesasked: 1560,timescorrect: 312, timescorrectwithhint: 515, timesincorrect: 467, timesincorrectwithhint: 266},
{year: 2024, month: 7, day: 10, questionid: 6, timesasked: 1630,timescorrect: 461, timescorrectwithhint: 619, timesincorrect: 353, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 10, questionid: 7, timesasked: 1342,timescorrect: 434, timescorrectwithhint: 542, timesincorrect: 236, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 10, questionid: 8, timesasked: 1265,timescorrect: 199, timescorrectwithhint: 385, timesincorrect: 432, timesincorrectwithhint: 249},
{year: 2024, month: 7, day: 10, questionid: 9, timesasked: 1867,timescorrect: 411, timescorrectwithhint: 638, timesincorrect: 522, timesincorrectwithhint: 296},
{year: 2024, month: 7, day: 10, questionid: 10, timesasked: 1318,timescorrect: 300, timescorrectwithhint: 457, timesincorrect: 358, timesincorrectwithhint: 203},
{year: 2024, month: 7, day: 10, questionid: 11, timesasked: 1515,timescorrect: 374, timescorrectwithhint: 542, timesincorrect: 383, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 10, questionid: 12, timesasked: 1389,timescorrect: 492, timescorrectwithhint: 586, timesincorrect: 202, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 10, questionid: 13, timesasked: 1862,timescorrect: 461, timescorrectwithhint: 668, timesincorrect: 469, timesincorrectwithhint: 264},
{year: 2024, month: 7, day: 10, questionid: 14, timesasked: 1008,timescorrect: 219, timescorrectwithhint: 343, timesincorrect: 284, timesincorrectwithhint: 162},
{year: 2024, month: 7, day: 10, questionid: 15, timesasked: 1648,timescorrect: 551, timescorrectwithhint: 677, timesincorrect: 272, timesincorrectwithhint: 148},
{year: 2024, month: 7, day: 10, questionid: 16, timesasked: 1259,timescorrect: 302, timescorrectwithhint: 445, timesincorrect: 327, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 10, questionid: 17, timesasked: 1757,timescorrect: 608, timescorrectwithhint: 734, timesincorrect: 270, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 10, questionid: 18, timesasked: 1945,timescorrect: 569, timescorrectwithhint: 750, timesincorrect: 402, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 10, questionid: 19, timesasked: 1726,timescorrect: 356, timescorrectwithhint: 576, timesincorrect: 506, timesincorrectwithhint: 288},
{year: 2024, month: 7, day: 10, questionid: 20, timesasked: 1248,timescorrect: 439, timescorrectwithhint: 526, timesincorrect: 184, timesincorrectwithhint: 99},
{year: 2024, month: 7, day: 10, questionid: 21, timesasked: 1317,timescorrect: 394, timescorrectwithhint: 513, timesincorrect: 264, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 10, questionid: 22, timesasked: 1731,timescorrect: 589, timescorrectwithhint: 717, timesincorrect: 276, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 10, questionid: 23, timesasked: 1155,timescorrect: 184, timescorrectwithhint: 353, timesincorrect: 393, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 10, questionid: 24, timesasked: 1181,timescorrect: 279, timescorrectwithhint: 415, timesincorrect: 310, timesincorrectwithhint: 177},
{year: 2024, month: 7, day: 10, questionid: 25, timesasked: 1462,timescorrect: 571, timescorrectwithhint: 649, timesincorrect: 159, timesincorrectwithhint: 83},
{year: 2024, month: 7, day: 10, questionid: 26, timesasked: 1715,timescorrect: 443, timescorrectwithhint: 626, timesincorrect: 414, timesincorrectwithhint: 232},
{year: 2024, month: 7, day: 10, questionid: 27, timesasked: 1823,timescorrect: 530, timescorrectwithhint: 700, timesincorrect: 381, timesincorrectwithhint: 212},
{year: 2024, month: 7, day: 10, questionid: 28, timesasked: 1524,timescorrect: 375, timescorrectwithhint: 545, timesincorrect: 386, timesincorrectwithhint: 218},
{year: 2024, month: 7, day: 10, questionid: 29, timesasked: 1670,timescorrect: 511, timescorrectwithhint: 657, timesincorrect: 323, timesincorrectwithhint: 179},
{year: 2024, month: 7, day: 10, questionid: 30, timesasked: 1314,timescorrect: 254, timescorrectwithhint: 428, timesincorrect: 402, timesincorrectwithhint: 230},
{year: 2024, month: 7, day: 10, questionid: 31, timesasked: 1012,timescorrect: 392, timescorrectwithhint: 448, timesincorrect: 113, timesincorrectwithhint: 59},
{year: 2024, month: 7, day: 10, questionid: 32, timesasked: 1825,timescorrect: 529, timescorrectwithhint: 701, timesincorrect: 382, timesincorrectwithhint: 213},
{year: 2024, month: 7, day: 10, questionid: 33, timesasked: 1505,timescorrect: 415, timescorrectwithhint: 565, timesincorrect: 336, timesincorrectwithhint: 189},
{year: 2024, month: 7, day: 10, questionid: 34, timesasked: 1674,timescorrect: 330, timescorrectwithhint: 549, timesincorrect: 506, timesincorrectwithhint: 289},
{year: 2024, month: 7, day: 10, questionid: 35, timesasked: 1321,timescorrect: 205, timescorrectwithhint: 400, timesincorrect: 454, timesincorrectwithhint: 262},
{year: 2024, month: 7, day: 10, questionid: 36, timesasked: 1640,timescorrect: 443, timescorrectwithhint: 610, timesincorrect: 376, timesincorrectwithhint: 211},
{year: 2024, month: 7, day: 10, questionid: 37, timesasked: 1984,timescorrect: 488, timescorrectwithhint: 709, timesincorrect: 503, timesincorrectwithhint: 284},
{year: 2024, month: 7, day: 10, questionid: 38, timesasked: 1175,timescorrect: 375, timescorrectwithhint: 471, timesincorrect: 212, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 10, questionid: 39, timesasked: 1336,timescorrect: 513, timescorrectwithhint: 588, timesincorrect: 154, timesincorrectwithhint: 81},
{year: 2024, month: 7, day: 10, questionid: 40, timesasked: 1605,timescorrect: 395, timescorrectwithhint: 574, timesincorrect: 407, timesincorrectwithhint: 229},
{year: 2024, month: 7, day: 10, questionid: 41, timesasked: 1196,timescorrect: 363, timescorrectwithhint: 469, timesincorrect: 234, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 10, questionid: 42, timesasked: 1519,timescorrect: 323, timescorrectwithhint: 513, timesincorrect: 435, timesincorrectwithhint: 248},
{year: 2024, month: 7, day: 10, questionid: 43, timesasked: 1075,timescorrect: 276, timescorrectwithhint: 391, timesincorrect: 261, timesincorrectwithhint: 147},
{year: 2024, month: 7, day: 10, questionid: 44, timesasked: 1167,timescorrect: 279, timescorrectwithhint: 413, timesincorrect: 303, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 10, questionid: 45, timesasked: 1358,timescorrect: 424, timescorrectwithhint: 540, timesincorrect: 254, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 10, questionid: 46, timesasked: 1023,timescorrect: 386, timescorrectwithhint: 446, timesincorrect: 125, timesincorrectwithhint: 66},
{year: 2024, month: 7, day: 10, questionid: 47, timesasked: 1609,timescorrect: 458, timescorrectwithhint: 613, timesincorrect: 345, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 10, questionid: 48, timesasked: 1913,timescorrect: 659, timescorrectwithhint: 797, timesincorrect: 296, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 10, questionid: 49, timesasked: 1450,timescorrect: 261, timescorrectwithhint: 461, timesincorrect: 463, timesincorrectwithhint: 265},
{year: 2024, month: 7, day: 10, questionid: 50, timesasked: 1609,timescorrect: 432, timescorrectwithhint: 597, timesincorrect: 371, timesincorrectwithhint: 209},
{year: 2024, month: 7, day: 10, questionid: 51, timesasked: 1070,timescorrect: 418, timescorrectwithhint: 475, timesincorrect: 116, timesincorrectwithhint: 61},
{year: 2024, month: 7, day: 10, questionid: 52, timesasked: 1155,timescorrect: 375, timescorrectwithhint: 467, timesincorrect: 201, timesincorrectwithhint: 112},
{year: 2024, month: 7, day: 10, questionid: 53, timesasked: 1463,timescorrect: 498, timescorrectwithhint: 606, timesincorrect: 232, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 10, questionid: 54, timesasked: 1626,timescorrect: 372, timescorrectwithhint: 564, timesincorrect: 440, timesincorrectwithhint: 250},
{year: 2024, month: 7, day: 10, questionid: 55, timesasked: 1897,timescorrect: 513, timescorrectwithhint: 706, timesincorrect: 435, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 10, questionid: 56, timesasked: 1286,timescorrect: 380, timescorrectwithhint: 498, timesincorrect: 262, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 10, questionid: 57, timesasked: 1353,timescorrect: 405, timescorrectwithhint: 527, timesincorrect: 270, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 10, questionid: 58, timesasked: 1837,timescorrect: 418, timescorrectwithhint: 636, timesincorrect: 500, timesincorrectwithhint: 283},
{year: 2024, month: 7, day: 10, questionid: 59, timesasked: 1652,timescorrect: 622, timescorrectwithhint: 720, timesincorrect: 203, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 10, questionid: 60, timesasked: 1817,timescorrect: 522, timescorrectwithhint: 695, timesincorrect: 385, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 10, questionid: 61, timesasked: 1758,timescorrect: 283, timescorrectwithhint: 539, timesincorrect: 595, timesincorrectwithhint: 341},
{year: 2024, month: 7, day: 10, questionid: 62, timesasked: 1044,timescorrect: 289, timescorrectwithhint: 393, timesincorrect: 232, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 10, questionid: 63, timesasked: 1786,timescorrect: 339, timescorrectwithhint: 578, timesincorrect: 553, timesincorrectwithhint: 316},
{year: 2024, month: 7, day: 10, questionid: 64, timesasked: 1045,timescorrect: 415, timescorrectwithhint: 469, timesincorrect: 106, timesincorrectwithhint: 55},
{year: 2024, month: 7, day: 10, questionid: 65, timesasked: 1926,timescorrect: 465, timescorrectwithhint: 683, timesincorrect: 497, timesincorrectwithhint: 281},
{year: 2024, month: 7, day: 10, questionid: 66, timesasked: 1764,timescorrect: 402, timescorrectwithhint: 611, timesincorrect: 479, timesincorrectwithhint: 272},
{year: 2024, month: 7, day: 10, questionid: 67, timesasked: 1132,timescorrect: 313, timescorrectwithhint: 425, timesincorrect: 252, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 10, questionid: 68, timesasked: 1575,timescorrect: 591, timescorrectwithhint: 685, timesincorrect: 195, timesincorrectwithhint: 104},
{year: 2024, month: 7, day: 10, questionid: 69, timesasked: 1697,timescorrect: 394, timescorrectwithhint: 593, timesincorrect: 454, timesincorrectwithhint: 256},
{year: 2024, month: 7, day: 10, questionid: 70, timesasked: 1730,timescorrect: 340, timescorrectwithhint: 567, timesincorrect: 524, timesincorrectwithhint: 299},
{year: 2024, month: 7, day: 10, questionid: 71, timesasked: 1375,timescorrect: 486, timescorrectwithhint: 580, timesincorrect: 201, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 10, questionid: 72, timesasked: 1072,timescorrect: 332, timescorrectwithhint: 424, timesincorrect: 203, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 10, questionid: 73, timesasked: 1213,timescorrect: 386, timescorrectwithhint: 486, timesincorrect: 220, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 10, questionid: 74, timesasked: 1578,timescorrect: 332, timescorrectwithhint: 530, timesincorrect: 456, timesincorrectwithhint: 260},
{year: 2024, month: 7, day: 10, questionid: 75, timesasked: 1624,timescorrect: 515, timescorrectwithhint: 650, timesincorrect: 296, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 10, questionid: 76, timesasked: 1238,timescorrect: 464, timescorrectwithhint: 538, timesincorrect: 154, timesincorrectwithhint: 82},
{year: 2024, month: 7, day: 10, questionid: 77, timesasked: 1705,timescorrect: 550, timescorrectwithhint: 688, timesincorrect: 302, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 10, questionid: 78, timesasked: 1969,timescorrect: 389, timescorrectwithhint: 647, timesincorrect: 594, timesincorrectwithhint: 339},
{year: 2024, month: 7, day: 10, questionid: 79, timesasked: 1760,timescorrect: 456, timescorrectwithhint: 643, timesincorrect: 423, timesincorrectwithhint: 238},
{year: 2024, month: 7, day: 10, questionid: 80, timesasked: 1416,timescorrect: 264, timescorrectwithhint: 455, timesincorrect: 443, timesincorrectwithhint: 254},
{year: 2024, month: 7, day: 10, questionid: 81, timesasked: 1070,timescorrect: 187, timescorrectwithhint: 336, timesincorrect: 347, timesincorrectwithhint: 200},
{year: 2024, month: 7, day: 10, questionid: 82, timesasked: 1022,timescorrect: 301, timescorrectwithhint: 395, timesincorrect: 209, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 10, questionid: 83, timesasked: 1092,timescorrect: 167, timescorrectwithhint: 329, timesincorrect: 378, timesincorrectwithhint: 218},
{year: 2024, month: 7, day: 10, questionid: 84, timesasked: 1393,timescorrect: 283, timescorrectwithhint: 462, timesincorrect: 413, timesincorrectwithhint: 235},
{year: 2024, month: 7, day: 10, questionid: 85, timesasked: 1668,timescorrect: 271, timescorrectwithhint: 513, timesincorrect: 562, timesincorrectwithhint: 322},
{year: 2024, month: 7, day: 10, questionid: 86, timesasked: 1998,timescorrect: 756, timescorrectwithhint: 873, timesincorrect: 242, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 10, questionid: 87, timesasked: 1059,timescorrect: 293, timescorrectwithhint: 398, timesincorrect: 235, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 10, questionid: 88, timesasked: 1949,timescorrect: 493, timescorrectwithhint: 705, timesincorrect: 481, timesincorrectwithhint: 270},
{year: 2024, month: 7, day: 10, questionid: 89, timesasked: 1738,timescorrect: 640, timescorrectwithhint: 748, timesincorrect: 228, timesincorrectwithhint: 122},
{year: 2024, month: 7, day: 10, questionid: 90, timesasked: 1390,timescorrect: 430, timescorrectwithhint: 550, timesincorrect: 264, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 10, questionid: 91, timesasked: 1363,timescorrect: 503, timescorrectwithhint: 588, timesincorrect: 177, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 10, questionid: 92, timesasked: 1048,timescorrect: 294, timescorrectwithhint: 397, timesincorrect: 229, timesincorrectwithhint: 128},
{year: 2024, month: 7, day: 10, questionid: 93, timesasked: 1880,timescorrect: 507, timescorrectwithhint: 699, timesincorrect: 432, timesincorrectwithhint: 242},
{year: 2024, month: 7, day: 10, questionid: 94, timesasked: 1892,timescorrect: 755, timescorrectwithhint: 850, timesincorrect: 190, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 10, questionid: 95, timesasked: 1787,timescorrect: 316, timescorrectwithhint: 565, timesincorrect: 576, timesincorrectwithhint: 330},
{year: 2024, month: 7, day: 10, questionid: 96, timesasked: 1716,timescorrect: 614, timescorrectwithhint: 728, timesincorrect: 243, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 10, questionid: 97, timesasked: 1933,timescorrect: 470, timescorrectwithhint: 688, timesincorrect: 496, timesincorrectwithhint: 279},
{year: 2024, month: 7, day: 11, questionid: 1, timesasked: 1207,timescorrect: 321, timescorrectwithhint: 446, timesincorrect: 281, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 11, questionid: 2, timesasked: 1450,timescorrect: 499, timescorrectwithhint: 604, timesincorrect: 225, timesincorrectwithhint: 122},
{year: 2024, month: 7, day: 11, questionid: 3, timesasked: 1464,timescorrect: 429, timescorrectwithhint: 565, timesincorrect: 302, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 11, questionid: 4, timesasked: 1197,timescorrect: 297, timescorrectwithhint: 429, timesincorrect: 301, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 11, questionid: 5, timesasked: 1269,timescorrect: 342, timescorrectwithhint: 472, timesincorrect: 291, timesincorrectwithhint: 164},
{year: 2024, month: 7, day: 11, questionid: 6, timesasked: 1984,timescorrect: 330, timescorrectwithhint: 614, timesincorrect: 661, timesincorrectwithhint: 379},
{year: 2024, month: 7, day: 11, questionid: 7, timesasked: 1627,timescorrect: 404, timescorrectwithhint: 584, timesincorrect: 408, timesincorrectwithhint: 231},
{year: 2024, month: 7, day: 11, questionid: 8, timesasked: 1521,timescorrect: 568, timescorrectwithhint: 660, timesincorrect: 191, timesincorrectwithhint: 102},
{year: 2024, month: 7, day: 11, questionid: 9, timesasked: 1280,timescorrect: 485, timescorrectwithhint: 559, timesincorrect: 154, timesincorrectwithhint: 82},
{year: 2024, month: 7, day: 11, questionid: 10, timesasked: 1168,timescorrect: 390, timescorrectwithhint: 479, timesincorrect: 193, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 11, questionid: 11, timesasked: 1782,timescorrect: 671, timescorrectwithhint: 777, timesincorrect: 219, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 11, questionid: 12, timesasked: 1467,timescorrect: 230, timescorrectwithhint: 446, timesincorrect: 502, timesincorrectwithhint: 289},
{year: 2024, month: 7, day: 11, questionid: 13, timesasked: 1884,timescorrect: 490, timescorrectwithhint: 690, timesincorrect: 451, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 11, questionid: 14, timesasked: 1541,timescorrect: 556, timescorrectwithhint: 657, timesincorrect: 214, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 11, questionid: 15, timesasked: 1274,timescorrect: 366, timescorrectwithhint: 487, timesincorrect: 270, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 11, questionid: 16, timesasked: 1314,timescorrect: 332, timescorrectwithhint: 475, timesincorrect: 324, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 11, questionid: 17, timesasked: 1095,timescorrect: 338, timescorrectwithhint: 432, timesincorrect: 209, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 11, questionid: 18, timesasked: 1109,timescorrect: 288, timescorrectwithhint: 406, timesincorrect: 265, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 11, questionid: 19, timesasked: 1860,timescorrect: 348, timescorrectwithhint: 599, timesincorrect: 581, timesincorrectwithhint: 332},
{year: 2024, month: 7, day: 11, questionid: 20, timesasked: 1590,timescorrect: 255, timescorrectwithhint: 487, timesincorrect: 539, timesincorrectwithhint: 309},
{year: 2024, month: 7, day: 11, questionid: 21, timesasked: 1914,timescorrect: 293, timescorrectwithhint: 578, timesincorrect: 663, timesincorrectwithhint: 380},
{year: 2024, month: 7, day: 11, questionid: 22, timesasked: 1289,timescorrect: 204, timescorrectwithhint: 393, timesincorrect: 440, timesincorrectwithhint: 252},
{year: 2024, month: 7, day: 11, questionid: 23, timesasked: 1468,timescorrect: 324, timescorrectwithhint: 502, timesincorrect: 409, timesincorrectwithhint: 233},
{year: 2024, month: 7, day: 11, questionid: 24, timesasked: 1085,timescorrect: 203, timescorrectwithhint: 349, timesincorrect: 339, timesincorrectwithhint: 194},
{year: 2024, month: 7, day: 11, questionid: 25, timesasked: 1952,timescorrect: 580, timescorrectwithhint: 758, timesincorrect: 395, timesincorrectwithhint: 219},
{year: 2024, month: 7, day: 11, questionid: 26, timesasked: 1594,timescorrect: 377, timescorrectwithhint: 561, timesincorrect: 419, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 11, questionid: 27, timesasked: 1177,timescorrect: 187, timescorrectwithhint: 359, timesincorrect: 400, timesincorrectwithhint: 231},
{year: 2024, month: 7, day: 11, questionid: 28, timesasked: 1260,timescorrect: 421, timescorrectwithhint: 517, timesincorrect: 208, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 11, questionid: 29, timesasked: 1769,timescorrect: 506, timescorrectwithhint: 675, timesincorrect: 377, timesincorrectwithhint: 211},
{year: 2024, month: 7, day: 11, questionid: 30, timesasked: 1437,timescorrect: 413, timescorrectwithhint: 549, timesincorrect: 305, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 11, questionid: 31, timesasked: 1291,timescorrect: 409, timescorrectwithhint: 517, timesincorrect: 235, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 11, questionid: 32, timesasked: 1302,timescorrect: 343, timescorrectwithhint: 479, timesincorrect: 307, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 11, questionid: 33, timesasked: 1275,timescorrect: 445, timescorrectwithhint: 535, timesincorrect: 191, timesincorrectwithhint: 104},
{year: 2024, month: 7, day: 11, questionid: 34, timesasked: 1504,timescorrect: 364, timescorrectwithhint: 534, timesincorrect: 387, timesincorrectwithhint: 219},
{year: 2024, month: 7, day: 11, questionid: 35, timesasked: 1014,timescorrect: 382, timescorrectwithhint: 442, timesincorrect: 124, timesincorrectwithhint: 66},
{year: 2024, month: 7, day: 11, questionid: 36, timesasked: 1495,timescorrect: 550, timescorrectwithhint: 644, timesincorrect: 197, timesincorrectwithhint: 104},
{year: 2024, month: 7, day: 11, questionid: 37, timesasked: 1976,timescorrect: 654, timescorrectwithhint: 807, timesincorrect: 333, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 11, questionid: 38, timesasked: 1220,timescorrect: 461, timescorrectwithhint: 533, timesincorrect: 148, timesincorrectwithhint: 78},
{year: 2024, month: 7, day: 11, questionid: 39, timesasked: 1334,timescorrect: 297, timescorrectwithhint: 458, timesincorrect: 369, timesincorrectwithhint: 210},
{year: 2024, month: 7, day: 11, questionid: 40, timesasked: 1346,timescorrect: 216, timescorrectwithhint: 412, timesincorrect: 456, timesincorrectwithhint: 262},
{year: 2024, month: 7, day: 11, questionid: 41, timesasked: 1150,timescorrect: 214, timescorrectwithhint: 370, timesincorrect: 360, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 11, questionid: 42, timesasked: 1513,timescorrect: 300, timescorrectwithhint: 497, timesincorrect: 456, timesincorrectwithhint: 260},
{year: 2024, month: 7, day: 11, questionid: 43, timesasked: 1964,timescorrect: 366, timescorrectwithhint: 632, timesincorrect: 615, timesincorrectwithhint: 351},
{year: 2024, month: 7, day: 11, questionid: 44, timesasked: 1754,timescorrect: 338, timescorrectwithhint: 571, timesincorrect: 538, timesincorrectwithhint: 307},
{year: 2024, month: 7, day: 11, questionid: 45, timesasked: 1035,timescorrect: 285, timescorrectwithhint: 388, timesincorrect: 231, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 11, questionid: 46, timesasked: 1968,timescorrect: 525, timescorrectwithhint: 728, timesincorrect: 458, timesincorrectwithhint: 257},
{year: 2024, month: 7, day: 11, questionid: 47, timesasked: 1860,timescorrect: 349, timescorrectwithhint: 600, timesincorrect: 580, timesincorrectwithhint: 331},
{year: 2024, month: 7, day: 11, questionid: 48, timesasked: 1746,timescorrect: 432, timescorrectwithhint: 626, timesincorrect: 440, timesincorrectwithhint: 248},
{year: 2024, month: 7, day: 11, questionid: 49, timesasked: 1944,timescorrect: 761, timescorrectwithhint: 864, timesincorrect: 210, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 11, questionid: 50, timesasked: 1338,timescorrect: 359, timescorrectwithhint: 496, timesincorrect: 309, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 11, questionid: 51, timesasked: 1721,timescorrect: 522, timescorrectwithhint: 675, timesincorrect: 337, timesincorrectwithhint: 187},
{year: 2024, month: 7, day: 11, questionid: 52, timesasked: 1970,timescorrect: 704, timescorrectwithhint: 836, timesincorrect: 280, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 11, questionid: 53, timesasked: 1501,timescorrect: 315, timescorrectwithhint: 504, timesincorrect: 435, timesincorrectwithhint: 247},
{year: 2024, month: 7, day: 11, questionid: 54, timesasked: 1230,timescorrect: 349, timescorrectwithhint: 467, timesincorrect: 265, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 11, questionid: 55, timesasked: 1466,timescorrect: 311, timescorrectwithhint: 494, timesincorrect: 421, timesincorrectwithhint: 240},
{year: 2024, month: 7, day: 11, questionid: 56, timesasked: 1200,timescorrect: 377, timescorrectwithhint: 478, timesincorrect: 222, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 11, questionid: 57, timesasked: 1055,timescorrect: 232, timescorrectwithhint: 361, timesincorrect: 294, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 11, questionid: 58, timesasked: 1408,timescorrect: 353, timescorrectwithhint: 507, timesincorrect: 350, timesincorrectwithhint: 198},
{year: 2024, month: 7, day: 11, questionid: 59, timesasked: 1920,timescorrect: 668, timescorrectwithhint: 804, timesincorrect: 291, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 11, questionid: 60, timesasked: 1453,timescorrect: 220, timescorrectwithhint: 437, timesincorrect: 506, timesincorrectwithhint: 290},
{year: 2024, month: 7, day: 11, questionid: 61, timesasked: 1025,timescorrect: 406, timescorrectwithhint: 459, timesincorrect: 105, timesincorrectwithhint: 55},
{year: 2024, month: 7, day: 11, questionid: 62, timesasked: 1020,timescorrect: 301, timescorrectwithhint: 394, timesincorrect: 208, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 11, questionid: 63, timesasked: 1215,timescorrect: 445, timescorrectwithhint: 522, timesincorrect: 162, timesincorrectwithhint: 86},
{year: 2024, month: 7, day: 11, questionid: 64, timesasked: 1779,timescorrect: 455, timescorrectwithhint: 646, timesincorrect: 433, timesincorrectwithhint: 245},
{year: 2024, month: 7, day: 11, questionid: 65, timesasked: 1146,timescorrect: 375, timescorrectwithhint: 466, timesincorrect: 197, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 11, questionid: 66, timesasked: 1590,timescorrect: 289, timescorrectwithhint: 507, timesincorrect: 505, timesincorrectwithhint: 289},
{year: 2024, month: 7, day: 11, questionid: 67, timesasked: 1546,timescorrect: 309, timescorrectwithhint: 510, timesincorrect: 463, timesincorrectwithhint: 264},
{year: 2024, month: 7, day: 11, questionid: 68, timesasked: 1418,timescorrect: 525, timescorrectwithhint: 613, timesincorrect: 183, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 11, questionid: 69, timesasked: 1600,timescorrect: 595, timescorrectwithhint: 693, timesincorrect: 204, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 11, questionid: 70, timesasked: 1509,timescorrect: 450, timescorrectwithhint: 587, timesincorrect: 303, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 11, questionid: 71, timesasked: 1798,timescorrect: 683, timescorrectwithhint: 787, timesincorrect: 215, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 11, questionid: 72, timesasked: 1008,timescorrect: 384, timescorrectwithhint: 442, timesincorrect: 119, timesincorrectwithhint: 63},
{year: 2024, month: 7, day: 11, questionid: 73, timesasked: 1363,timescorrect: 238, timescorrectwithhint: 429, timesincorrect: 443, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 11, questionid: 74, timesasked: 1814,timescorrect: 640, timescorrectwithhint: 765, timesincorrect: 266, timesincorrectwithhint: 143},
{year: 2024, month: 7, day: 11, questionid: 75, timesasked: 1358,timescorrect: 305, timescorrectwithhint: 468, timesincorrect: 373, timesincorrectwithhint: 212},
{year: 2024, month: 7, day: 11, questionid: 76, timesasked: 1472,timescorrect: 356, timescorrectwithhint: 522, timesincorrect: 379, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 11, questionid: 77, timesasked: 1724,timescorrect: 475, timescorrectwithhint: 647, timesincorrect: 386, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 11, questionid: 78, timesasked: 1398,timescorrect: 214, timescorrectwithhint: 422, timesincorrect: 484, timesincorrectwithhint: 278},
{year: 2024, month: 7, day: 11, questionid: 79, timesasked: 1998,timescorrect: 510, timescorrectwithhint: 725, timesincorrect: 488, timesincorrectwithhint: 275},
{year: 2024, month: 7, day: 11, questionid: 80, timesasked: 1457,timescorrect: 490, timescorrectwithhint: 600, timesincorrect: 237, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 11, questionid: 81, timesasked: 1905,timescorrect: 560, timescorrectwithhint: 736, timesincorrect: 391, timesincorrectwithhint: 218},
{year: 2024, month: 7, day: 11, questionid: 82, timesasked: 1711,timescorrect: 486, timescorrectwithhint: 651, timesincorrect: 369, timesincorrectwithhint: 205},
{year: 2024, month: 7, day: 11, questionid: 83, timesasked: 1256,timescorrect: 334, timescorrectwithhint: 464, timesincorrect: 293, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 11, questionid: 84, timesasked: 1221,timescorrect: 326, timescorrectwithhint: 452, timesincorrect: 284, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 11, questionid: 85, timesasked: 1525,timescorrect: 496, timescorrectwithhint: 617, timesincorrect: 266, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 11, questionid: 86, timesasked: 1818,timescorrect: 582, timescorrectwithhint: 731, timesincorrect: 326, timesincorrectwithhint: 179},
{year: 2024, month: 7, day: 11, questionid: 87, timesasked: 1512,timescorrect: 497, timescorrectwithhint: 616, timesincorrect: 258, timesincorrectwithhint: 141},
{year: 2024, month: 7, day: 11, questionid: 88, timesasked: 1326,timescorrect: 326, timescorrectwithhint: 474, timesincorrect: 336, timesincorrectwithhint: 190},
{year: 2024, month: 7, day: 11, questionid: 89, timesasked: 1447,timescorrect: 279, timescorrectwithhint: 471, timesincorrect: 444, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 11, questionid: 90, timesasked: 1489,timescorrect: 537, timescorrectwithhint: 635, timesincorrect: 207, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 11, questionid: 91, timesasked: 1031,timescorrect: 405, timescorrectwithhint: 460, timesincorrect: 109, timesincorrectwithhint: 57},
{year: 2024, month: 7, day: 11, questionid: 92, timesasked: 1908,timescorrect: 602, timescorrectwithhint: 762, timesincorrect: 351, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 11, questionid: 93, timesasked: 1957,timescorrect: 642, timescorrectwithhint: 796, timesincorrect: 335, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 11, questionid: 94, timesasked: 1390,timescorrect: 555, timescorrectwithhint: 625, timesincorrect: 139, timesincorrectwithhint: 71},
{year: 2024, month: 7, day: 11, questionid: 95, timesasked: 1465,timescorrect: 501, timescorrectwithhint: 608, timesincorrect: 231, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 11, questionid: 96, timesasked: 1127,timescorrect: 380, timescorrectwithhint: 464, timesincorrect: 183, timesincorrectwithhint: 100},
{year: 2024, month: 7, day: 11, questionid: 97, timesasked: 1700,timescorrect: 614, timescorrectwithhint: 725, timesincorrect: 235, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 12, questionid: 1, timesasked: 1283,timescorrect: 306, timescorrectwithhint: 453, timesincorrect: 334, timesincorrectwithhint: 190},
{year: 2024, month: 7, day: 12, questionid: 2, timesasked: 1118,timescorrect: 253, timescorrectwithhint: 386, timesincorrect: 305, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 12, questionid: 3, timesasked: 1787,timescorrect: 643, timescorrectwithhint: 761, timesincorrect: 250, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 12, questionid: 4, timesasked: 1000,timescorrect: 339, timescorrectwithhint: 413, timesincorrect: 160, timesincorrectwithhint: 88},
{year: 2024, month: 7, day: 12, questionid: 5, timesasked: 1479,timescorrect: 543, timescorrectwithhint: 636, timesincorrect: 196, timesincorrectwithhint: 104},
{year: 2024, month: 7, day: 12, questionid: 6, timesasked: 1639,timescorrect: 475, timescorrectwithhint: 629, timesincorrect: 343, timesincorrectwithhint: 192},
{year: 2024, month: 7, day: 12, questionid: 7, timesasked: 1156,timescorrect: 256, timescorrectwithhint: 396, timesincorrect: 321, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 12, questionid: 8, timesasked: 1507,timescorrect: 510, timescorrectwithhint: 622, timesincorrect: 243, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 12, questionid: 9, timesasked: 1685,timescorrect: 599, timescorrectwithhint: 713, timesincorrect: 243, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 12, questionid: 10, timesasked: 1192,timescorrect: 216, timescorrectwithhint: 380, timesincorrect: 379, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 12, questionid: 11, timesasked: 1094,timescorrect: 192, timescorrectwithhint: 345, timesincorrect: 354, timesincorrectwithhint: 203},
{year: 2024, month: 7, day: 12, questionid: 12, timesasked: 1441,timescorrect: 389, timescorrectwithhint: 536, timesincorrect: 331, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 12, questionid: 13, timesasked: 1170,timescorrect: 204, timescorrectwithhint: 368, timesincorrect: 380, timesincorrectwithhint: 218},
{year: 2024, month: 7, day: 12, questionid: 14, timesasked: 1512,timescorrect: 535, timescorrectwithhint: 638, timesincorrect: 220, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 12, questionid: 15, timesasked: 1177,timescorrect: 348, timescorrectwithhint: 456, timesincorrect: 240, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 12, questionid: 16, timesasked: 1351,timescorrect: 210, timescorrectwithhint: 410, timesincorrect: 464, timesincorrectwithhint: 267},
{year: 2024, month: 7, day: 12, questionid: 17, timesasked: 1238,timescorrect: 264, timescorrectwithhint: 418, timesincorrect: 354, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 12, questionid: 18, timesasked: 1591,timescorrect: 244, timescorrectwithhint: 480, timesincorrect: 551, timesincorrectwithhint: 316},
{year: 2024, month: 7, day: 12, questionid: 19, timesasked: 1089,timescorrect: 384, timescorrectwithhint: 459, timesincorrect: 159, timesincorrectwithhint: 87},
{year: 2024, month: 7, day: 12, questionid: 20, timesasked: 1593,timescorrect: 324, timescorrectwithhint: 529, timesincorrect: 472, timesincorrectwithhint: 268},
{year: 2024, month: 7, day: 12, questionid: 21, timesasked: 1430,timescorrect: 551, timescorrectwithhint: 631, timesincorrect: 163, timesincorrectwithhint: 85},
{year: 2024, month: 7, day: 12, questionid: 22, timesasked: 1648,timescorrect: 277, timescorrectwithhint: 512, timesincorrect: 546, timesincorrectwithhint: 313},
{year: 2024, month: 7, day: 12, questionid: 23, timesasked: 1562,timescorrect: 533, timescorrectwithhint: 648, timesincorrect: 247, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 12, questionid: 24, timesasked: 1799,timescorrect: 366, timescorrectwithhint: 597, timesincorrect: 533, timesincorrectwithhint: 303},
{year: 2024, month: 7, day: 12, questionid: 25, timesasked: 1836,timescorrect: 321, timescorrectwithhint: 578, timesincorrect: 596, timesincorrectwithhint: 341},
{year: 2024, month: 7, day: 12, questionid: 26, timesasked: 1923,timescorrect: 572, timescorrectwithhint: 747, timesincorrect: 388, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 12, questionid: 27, timesasked: 1247,timescorrect: 196, timescorrectwithhint: 379, timesincorrect: 426, timesincorrectwithhint: 246},
{year: 2024, month: 7, day: 12, questionid: 28, timesasked: 1836,timescorrect: 661, timescorrectwithhint: 782, timesincorrect: 256, timesincorrectwithhint: 137},
{year: 2024, month: 7, day: 12, questionid: 29, timesasked: 1420,timescorrect: 466, timescorrectwithhint: 578, timesincorrect: 243, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 12, questionid: 30, timesasked: 1310,timescorrect: 520, timescorrectwithhint: 587, timesincorrect: 134, timesincorrectwithhint: 69},
{year: 2024, month: 7, day: 12, questionid: 31, timesasked: 1496,timescorrect: 469, timescorrectwithhint: 595, timesincorrect: 278, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 12, questionid: 32, timesasked: 1472,timescorrect: 464, timescorrectwithhint: 588, timesincorrect: 271, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 12, questionid: 33, timesasked: 1355,timescorrect: 237, timescorrectwithhint: 427, timesincorrect: 439, timesincorrectwithhint: 252},
{year: 2024, month: 7, day: 12, questionid: 34, timesasked: 1312,timescorrect: 198, timescorrectwithhint: 394, timesincorrect: 457, timesincorrectwithhint: 263},
{year: 2024, month: 7, day: 12, questionid: 35, timesasked: 1608,timescorrect: 267, timescorrectwithhint: 498, timesincorrect: 536, timesincorrectwithhint: 307},
{year: 2024, month: 7, day: 12, questionid: 36, timesasked: 1739,timescorrect: 392, timescorrectwithhint: 600, timesincorrect: 477, timesincorrectwithhint: 270},
{year: 2024, month: 7, day: 12, questionid: 37, timesasked: 1534,timescorrect: 586, timescorrectwithhint: 673, timesincorrect: 180, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 12, questionid: 38, timesasked: 1431,timescorrect: 563, timescorrectwithhint: 638, timesincorrect: 152, timesincorrectwithhint: 78},
{year: 2024, month: 7, day: 12, questionid: 39, timesasked: 1199,timescorrect: 301, timescorrectwithhint: 432, timesincorrect: 298, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 12, questionid: 40, timesasked: 1794,timescorrect: 275, timescorrectwithhint: 542, timesincorrect: 621, timesincorrectwithhint: 356},
{year: 2024, month: 7, day: 12, questionid: 41, timesasked: 1350,timescorrect: 392, timescorrectwithhint: 519, timesincorrect: 282, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 12, questionid: 42, timesasked: 1783,timescorrect: 351, timescorrectwithhint: 585, timesincorrect: 539, timesincorrectwithhint: 308},
{year: 2024, month: 7, day: 12, questionid: 43, timesasked: 1683,timescorrect: 318, timescorrectwithhint: 544, timesincorrect: 523, timesincorrectwithhint: 298},
{year: 2024, month: 7, day: 12, questionid: 44, timesasked: 1968,timescorrect: 675, timescorrectwithhint: 818, timesincorrect: 308, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 12, questionid: 45, timesasked: 1988,timescorrect: 310, timescorrectwithhint: 603, timesincorrect: 683, timesincorrectwithhint: 392},
{year: 2024, month: 7, day: 12, questionid: 46, timesasked: 1352,timescorrect: 328, timescorrectwithhint: 480, timesincorrect: 347, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 12, questionid: 47, timesasked: 1653,timescorrect: 637, timescorrectwithhint: 729, timesincorrect: 189, timesincorrectwithhint: 98},
{year: 2024, month: 7, day: 12, questionid: 48, timesasked: 1866,timescorrect: 665, timescorrectwithhint: 791, timesincorrect: 267, timesincorrectwithhint: 143},
{year: 2024, month: 7, day: 12, questionid: 49, timesasked: 1305,timescorrect: 444, timescorrectwithhint: 540, timesincorrect: 208, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 12, questionid: 50, timesasked: 1104,timescorrect: 218, timescorrectwithhint: 363, timesincorrect: 333, timesincorrectwithhint: 190},
{year: 2024, month: 7, day: 12, questionid: 51, timesasked: 1674,timescorrect: 352, timescorrectwithhint: 562, timesincorrect: 484, timesincorrectwithhint: 276},
{year: 2024, month: 7, day: 12, questionid: 52, timesasked: 1670,timescorrect: 611, timescorrectwithhint: 717, timesincorrect: 223, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 12, questionid: 53, timesasked: 1232,timescorrect: 381, timescorrectwithhint: 487, timesincorrect: 234, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 12, questionid: 54, timesasked: 1909,timescorrect: 558, timescorrectwithhint: 735, timesincorrect: 396, timesincorrectwithhint: 220},
{year: 2024, month: 7, day: 12, questionid: 55, timesasked: 1219,timescorrect: 461, timescorrectwithhint: 532, timesincorrect: 148, timesincorrectwithhint: 78},
{year: 2024, month: 7, day: 12, questionid: 56, timesasked: 1050,timescorrect: 328, timescorrectwithhint: 417, timesincorrect: 196, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 12, questionid: 57, timesasked: 1098,timescorrect: 418, timescorrectwithhint: 481, timesincorrect: 130, timesincorrectwithhint: 69},
{year: 2024, month: 7, day: 12, questionid: 58, timesasked: 1208,timescorrect: 417, timescorrectwithhint: 504, timesincorrect: 186, timesincorrectwithhint: 101},
{year: 2024, month: 7, day: 12, questionid: 59, timesasked: 1019,timescorrect: 350, timescorrectwithhint: 424, timesincorrect: 158, timesincorrectwithhint: 87},
{year: 2024, month: 7, day: 12, questionid: 60, timesasked: 1223,timescorrect: 399, timescorrectwithhint: 496, timesincorrect: 212, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 12, questionid: 61, timesasked: 1638,timescorrect: 599, timescorrectwithhint: 703, timesincorrect: 219, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 12, questionid: 62, timesasked: 1032,timescorrect: 405, timescorrectwithhint: 459, timesincorrect: 110, timesincorrectwithhint: 58},
{year: 2024, month: 7, day: 12, questionid: 63, timesasked: 1437,timescorrect: 414, timescorrectwithhint: 550, timesincorrect: 304, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 12, questionid: 64, timesasked: 1160,timescorrect: 356, timescorrectwithhint: 457, timesincorrect: 223, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 12, questionid: 65, timesasked: 1301,timescorrect: 309, timescorrectwithhint: 458, timesincorrect: 341, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 12, questionid: 66, timesasked: 1842,timescorrect: 297, timescorrectwithhint: 565, timesincorrect: 623, timesincorrectwithhint: 357},
{year: 2024, month: 7, day: 12, questionid: 67, timesasked: 1877,timescorrect: 385, timescorrectwithhint: 625, timesincorrect: 552, timesincorrectwithhint: 315},
{year: 2024, month: 7, day: 12, questionid: 68, timesasked: 1915,timescorrect: 599, timescorrectwithhint: 761, timesincorrect: 358, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 12, questionid: 69, timesasked: 1668,timescorrect: 500, timescorrectwithhint: 650, timesincorrect: 333, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 12, questionid: 70, timesasked: 1613,timescorrect: 523, timescorrectwithhint: 653, timesincorrect: 282, timesincorrectwithhint: 155},
{year: 2024, month: 7, day: 12, questionid: 71, timesasked: 1351,timescorrect: 309, timescorrectwithhint: 469, timesincorrect: 365, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 12, questionid: 72, timesasked: 1965,timescorrect: 441, timescorrectwithhint: 677, timesincorrect: 541, timesincorrectwithhint: 306},
{year: 2024, month: 7, day: 12, questionid: 73, timesasked: 1682,timescorrect: 436, timescorrectwithhint: 615, timesincorrect: 404, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 12, questionid: 74, timesasked: 1294,timescorrect: 276, timescorrectwithhint: 437, timesincorrect: 370, timesincorrectwithhint: 211},
{year: 2024, month: 7, day: 12, questionid: 75, timesasked: 1336,timescorrect: 502, timescorrectwithhint: 581, timesincorrect: 165, timesincorrectwithhint: 88},
{year: 2024, month: 7, day: 12, questionid: 76, timesasked: 1600,timescorrect: 542, timescorrectwithhint: 661, timesincorrect: 257, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 12, questionid: 77, timesasked: 1745,timescorrect: 412, timescorrectwithhint: 613, timesincorrect: 460, timesincorrectwithhint: 260},
{year: 2024, month: 7, day: 12, questionid: 78, timesasked: 1317,timescorrect: 279, timescorrectwithhint: 444, timesincorrect: 379, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 12, questionid: 79, timesasked: 1814,timescorrect: 703, timescorrectwithhint: 803, timesincorrect: 203, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 12, questionid: 80, timesasked: 1210,timescorrect: 355, timescorrectwithhint: 467, timesincorrect: 249, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 12, questionid: 81, timesasked: 1625,timescorrect: 269, timescorrectwithhint: 503, timesincorrect: 542, timesincorrectwithhint: 311},
{year: 2024, month: 7, day: 12, questionid: 82, timesasked: 1182,timescorrect: 438, timescorrectwithhint: 511, timesincorrect: 152, timesincorrectwithhint: 81},
{year: 2024, month: 7, day: 12, questionid: 83, timesasked: 1039,timescorrect: 271, timescorrectwithhint: 380, timesincorrect: 248, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 12, questionid: 84, timesasked: 1633,timescorrect: 409, timescorrectwithhint: 588, timesincorrect: 406, timesincorrectwithhint: 230},
{year: 2024, month: 7, day: 12, questionid: 85, timesasked: 1236,timescorrect: 402, timescorrectwithhint: 500, timesincorrect: 215, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 12, questionid: 86, timesasked: 1328,timescorrect: 310, timescorrectwithhint: 464, timesincorrect: 353, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 12, questionid: 87, timesasked: 1164,timescorrect: 450, timescorrectwithhint: 514, timesincorrect: 131, timesincorrectwithhint: 69},
{year: 2024, month: 7, day: 12, questionid: 88, timesasked: 1963,timescorrect: 539, timescorrectwithhint: 735, timesincorrect: 442, timesincorrectwithhint: 247},
{year: 2024, month: 7, day: 12, questionid: 89, timesasked: 1324,timescorrect: 268, timescorrectwithhint: 439, timesincorrect: 393, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 12, questionid: 90, timesasked: 1960,timescorrect: 575, timescorrectwithhint: 756, timesincorrect: 404, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 12, questionid: 91, timesasked: 1682,timescorrect: 380, timescorrectwithhint: 581, timesincorrect: 460, timesincorrectwithhint: 261},
{year: 2024, month: 7, day: 12, questionid: 92, timesasked: 1356,timescorrect: 515, timescorrectwithhint: 594, timesincorrect: 162, timesincorrectwithhint: 85},
{year: 2024, month: 7, day: 12, questionid: 93, timesasked: 1402,timescorrect: 299, timescorrectwithhint: 473, timesincorrect: 401, timesincorrectwithhint: 229},
{year: 2024, month: 7, day: 12, questionid: 94, timesasked: 1578,timescorrect: 320, timescorrectwithhint: 523, timesincorrect: 468, timesincorrectwithhint: 267},
{year: 2024, month: 7, day: 12, questionid: 95, timesasked: 1911,timescorrect: 342, timescorrectwithhint: 606, timesincorrect: 613, timesincorrectwithhint: 350},
{year: 2024, month: 7, day: 12, questionid: 96, timesasked: 1106,timescorrect: 230, timescorrectwithhint: 370, timesincorrect: 322, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 12, questionid: 97, timesasked: 1121,timescorrect: 369, timescorrectwithhint: 457, timesincorrect: 190, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 13, questionid: 1, timesasked: 1179,timescorrect: 218, timescorrectwithhint: 378, timesincorrect: 371, timesincorrectwithhint: 212},
{year: 2024, month: 7, day: 13, questionid: 2, timesasked: 1818,timescorrect: 512, timescorrectwithhint: 689, timesincorrect: 396, timesincorrectwithhint: 221},
{year: 2024, month: 7, day: 13, questionid: 3, timesasked: 1630,timescorrect: 486, timescorrectwithhint: 633, timesincorrect: 328, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 13, questionid: 4, timesasked: 1729,timescorrect: 261, timescorrectwithhint: 519, timesincorrect: 603, timesincorrectwithhint: 346},
{year: 2024, month: 7, day: 13, questionid: 5, timesasked: 1048,timescorrect: 356, timescorrectwithhint: 434, timesincorrect: 167, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 13, questionid: 6, timesasked: 1509,timescorrect: 574, timescorrectwithhint: 661, timesincorrect: 180, timesincorrectwithhint: 94},
{year: 2024, month: 7, day: 13, questionid: 7, timesasked: 1000,timescorrect: 372, timescorrectwithhint: 433, timesincorrect: 127, timesincorrectwithhint: 68},
{year: 2024, month: 7, day: 13, questionid: 8, timesasked: 1727,timescorrect: 386, timescorrectwithhint: 594, timesincorrect: 477, timesincorrectwithhint: 270},
{year: 2024, month: 7, day: 13, questionid: 9, timesasked: 1265,timescorrect: 465, timescorrectwithhint: 544, timesincorrect: 167, timesincorrectwithhint: 89},
{year: 2024, month: 7, day: 13, questionid: 10, timesasked: 1147,timescorrect: 289, timescorrectwithhint: 414, timesincorrect: 284, timesincorrectwithhint: 160},
{year: 2024, month: 7, day: 13, questionid: 11, timesasked: 1971,timescorrect: 732, timescorrectwithhint: 853, timesincorrect: 253, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 13, questionid: 12, timesasked: 1656,timescorrect: 558, timescorrectwithhint: 682, timesincorrect: 269, timesincorrectwithhint: 147},
{year: 2024, month: 7, day: 13, questionid: 13, timesasked: 1827,timescorrect: 493, timescorrectwithhint: 679, timesincorrect: 420, timesincorrectwithhint: 235},
{year: 2024, month: 7, day: 13, questionid: 14, timesasked: 1416,timescorrect: 334, timescorrectwithhint: 497, timesincorrect: 373, timesincorrectwithhint: 212},
{year: 2024, month: 7, day: 13, questionid: 15, timesasked: 1141,timescorrect: 312, timescorrectwithhint: 426, timesincorrect: 258, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 13, questionid: 16, timesasked: 1766,timescorrect: 677, timescorrectwithhint: 777, timesincorrect: 205, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 13, questionid: 17, timesasked: 1557,timescorrect: 295, timescorrectwithhint: 504, timesincorrect: 482, timesincorrectwithhint: 276},
{year: 2024, month: 7, day: 13, questionid: 18, timesasked: 1242,timescorrect: 334, timescorrectwithhint: 461, timesincorrect: 286, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 13, questionid: 19, timesasked: 1041,timescorrect: 251, timescorrectwithhint: 369, timesincorrect: 269, timesincorrectwithhint: 152},
{year: 2024, month: 7, day: 13, questionid: 20, timesasked: 1724,timescorrect: 286, timescorrectwithhint: 533, timesincorrect: 575, timesincorrectwithhint: 330},
{year: 2024, month: 7, day: 13, questionid: 21, timesasked: 1865,timescorrect: 732, timescorrectwithhint: 831, timesincorrect: 200, timesincorrectwithhint: 102},
{year: 2024, month: 7, day: 13, questionid: 22, timesasked: 1610,timescorrect: 428, timescorrectwithhint: 595, timesincorrect: 376, timesincorrectwithhint: 211},
{year: 2024, month: 7, day: 13, questionid: 23, timesasked: 1340,timescorrect: 370, timescorrectwithhint: 503, timesincorrect: 299, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 13, questionid: 24, timesasked: 1199,timescorrect: 200, timescorrectwithhint: 372, timesincorrect: 399, timesincorrectwithhint: 228},
{year: 2024, month: 7, day: 13, questionid: 25, timesasked: 1632,timescorrect: 343, timescorrectwithhint: 548, timesincorrect: 472, timesincorrectwithhint: 269},
{year: 2024, month: 7, day: 13, questionid: 26, timesasked: 1813,timescorrect: 375, timescorrectwithhint: 605, timesincorrect: 531, timesincorrectwithhint: 302},
{year: 2024, month: 7, day: 13, questionid: 27, timesasked: 1272,timescorrect: 304, timescorrectwithhint: 450, timesincorrect: 331, timesincorrectwithhint: 187},
{year: 2024, month: 7, day: 13, questionid: 28, timesasked: 1022,timescorrect: 169, timescorrectwithhint: 316, timesincorrect: 341, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 13, questionid: 29, timesasked: 1419,timescorrect: 233, timescorrectwithhint: 438, timesincorrect: 476, timesincorrectwithhint: 272},
{year: 2024, month: 7, day: 13, questionid: 30, timesasked: 1698,timescorrect: 532, timescorrectwithhint: 676, timesincorrect: 316, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 13, questionid: 31, timesasked: 1178,timescorrect: 356, timescorrectwithhint: 461, timesincorrect: 232, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 13, questionid: 32, timesasked: 1823,timescorrect: 524, timescorrectwithhint: 697, timesincorrect: 387, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 13, questionid: 33, timesasked: 1603,timescorrect: 496, timescorrectwithhint: 634, timesincorrect: 305, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 13, questionid: 34, timesasked: 1261,timescorrect: 299, timescorrectwithhint: 444, timesincorrect: 330, timesincorrectwithhint: 188},
{year: 2024, month: 7, day: 13, questionid: 35, timesasked: 1832,timescorrect: 675, timescorrectwithhint: 789, timesincorrect: 240, timesincorrectwithhint: 128},
{year: 2024, month: 7, day: 13, questionid: 36, timesasked: 1262,timescorrect: 489, timescorrectwithhint: 558, timesincorrect: 141, timesincorrectwithhint: 74},
{year: 2024, month: 7, day: 13, questionid: 37, timesasked: 1391,timescorrect: 398, timescorrectwithhint: 531, timesincorrect: 296, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 13, questionid: 38, timesasked: 1027,timescorrect: 336, timescorrectwithhint: 417, timesincorrect: 176, timesincorrectwithhint: 98},
{year: 2024, month: 7, day: 13, questionid: 39, timesasked: 1810,timescorrect: 542, timescorrectwithhint: 705, timesincorrect: 362, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 13, questionid: 40, timesasked: 1806,timescorrect: 291, timescorrectwithhint: 554, timesincorrect: 611, timesincorrectwithhint: 350},
{year: 2024, month: 7, day: 13, questionid: 41, timesasked: 1424,timescorrect: 316, timescorrectwithhint: 489, timesincorrect: 395, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 13, questionid: 42, timesasked: 1124,timescorrect: 229, timescorrectwithhint: 373, timesincorrect: 332, timesincorrectwithhint: 190},
{year: 2024, month: 7, day: 13, questionid: 43, timesasked: 1186,timescorrect: 208, timescorrectwithhint: 374, timesincorrect: 384, timesincorrectwithhint: 220},
{year: 2024, month: 7, day: 13, questionid: 44, timesasked: 1805,timescorrect: 407, timescorrectwithhint: 623, timesincorrect: 495, timesincorrectwithhint: 280},
{year: 2024, month: 7, day: 13, questionid: 45, timesasked: 1696,timescorrect: 329, timescorrectwithhint: 554, timesincorrect: 518, timesincorrectwithhint: 295},
{year: 2024, month: 7, day: 13, questionid: 46, timesasked: 1433,timescorrect: 503, timescorrectwithhint: 603, timesincorrect: 213, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 13, questionid: 47, timesasked: 1526,timescorrect: 234, timescorrectwithhint: 460, timesincorrect: 528, timesincorrectwithhint: 304},
{year: 2024, month: 7, day: 13, questionid: 48, timesasked: 1011,timescorrect: 275, timescorrectwithhint: 377, timesincorrect: 230, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 13, questionid: 49, timesasked: 1140,timescorrect: 196, timescorrectwithhint: 357, timesincorrect: 373, timesincorrectwithhint: 214},
{year: 2024, month: 7, day: 13, questionid: 50, timesasked: 1583,timescorrect: 254, timescorrectwithhint: 485, timesincorrect: 536, timesincorrectwithhint: 308},
{year: 2024, month: 7, day: 13, questionid: 51, timesasked: 1032,timescorrect: 361, timescorrectwithhint: 433, timesincorrect: 154, timesincorrectwithhint: 84},
{year: 2024, month: 7, day: 13, questionid: 52, timesasked: 1678,timescorrect: 348, timescorrectwithhint: 561, timesincorrect: 490, timesincorrectwithhint: 279},
{year: 2024, month: 7, day: 13, questionid: 53, timesasked: 1853,timescorrect: 291, timescorrectwithhint: 564, timesincorrect: 634, timesincorrectwithhint: 364},
{year: 2024, month: 7, day: 13, questionid: 54, timesasked: 1362,timescorrect: 205, timescorrectwithhint: 409, timesincorrect: 475, timesincorrectwithhint: 273},
{year: 2024, month: 7, day: 13, questionid: 55, timesasked: 1395,timescorrect: 542, timescorrectwithhint: 618, timesincorrect: 154, timesincorrectwithhint: 81},
{year: 2024, month: 7, day: 13, questionid: 56, timesasked: 1116,timescorrect: 361, timescorrectwithhint: 450, timesincorrect: 196, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 13, questionid: 57, timesasked: 1262,timescorrect: 355, timescorrectwithhint: 478, timesincorrect: 275, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 13, questionid: 58, timesasked: 1100,timescorrect: 305, timescorrectwithhint: 414, timesincorrect: 244, timesincorrectwithhint: 137},
{year: 2024, month: 7, day: 13, questionid: 59, timesasked: 1770,timescorrect: 497, timescorrectwithhint: 670, timesincorrect: 387, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 13, questionid: 60, timesasked: 1785,timescorrect: 528, timescorrectwithhint: 691, timesincorrect: 364, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 13, questionid: 61, timesasked: 1616,timescorrect: 551, timescorrectwithhint: 670, timesincorrect: 256, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 13, questionid: 62, timesasked: 1120,timescorrect: 321, timescorrectwithhint: 427, timesincorrect: 238, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 13, questionid: 63, timesasked: 1243,timescorrect: 216, timescorrectwithhint: 390, timesincorrect: 405, timesincorrectwithhint: 232},
{year: 2024, month: 7, day: 13, questionid: 64, timesasked: 1983,timescorrect: 720, timescorrectwithhint: 848, timesincorrect: 270, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 13, questionid: 65, timesasked: 1146,timescorrect: 236, timescorrectwithhint: 382, timesincorrect: 336, timesincorrectwithhint: 192},
{year: 2024, month: 7, day: 13, questionid: 66, timesasked: 1048,timescorrect: 164, timescorrectwithhint: 319, timesincorrect: 359, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 13, questionid: 67, timesasked: 1178,timescorrect: 252, timescorrectwithhint: 398, timesincorrect: 336, timesincorrectwithhint: 192},
{year: 2024, month: 7, day: 13, questionid: 68, timesasked: 1726,timescorrect: 543, timescorrectwithhint: 688, timesincorrect: 319, timesincorrectwithhint: 176},
{year: 2024, month: 7, day: 13, questionid: 69, timesasked: 1785,timescorrect: 293, timescorrectwithhint: 550, timesincorrect: 599, timesincorrectwithhint: 343},
{year: 2024, month: 7, day: 13, questionid: 70, timesasked: 1059,timescorrect: 181, timescorrectwithhint: 331, timesincorrect: 348, timesincorrectwithhint: 199},
{year: 2024, month: 7, day: 13, questionid: 71, timesasked: 1029,timescorrect: 392, timescorrectwithhint: 451, timesincorrect: 122, timesincorrectwithhint: 64},
{year: 2024, month: 7, day: 13, questionid: 72, timesasked: 1316,timescorrect: 513, timescorrectwithhint: 584, timesincorrect: 144, timesincorrectwithhint: 75},
{year: 2024, month: 7, day: 13, questionid: 73, timesasked: 1634,timescorrect: 503, timescorrectwithhint: 645, timesincorrect: 313, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 13, questionid: 74, timesasked: 1813,timescorrect: 379, timescorrectwithhint: 608, timesincorrect: 527, timesincorrectwithhint: 299},
{year: 2024, month: 7, day: 13, questionid: 75, timesasked: 1946,timescorrect: 734, timescorrectwithhint: 849, timesincorrect: 238, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 13, questionid: 76, timesasked: 1710,timescorrect: 314, timescorrectwithhint: 547, timesincorrect: 540, timesincorrectwithhint: 309},
{year: 2024, month: 7, day: 13, questionid: 77, timesasked: 1715,timescorrect: 667, timescorrectwithhint: 760, timesincorrect: 190, timesincorrectwithhint: 98},
{year: 2024, month: 7, day: 13, questionid: 78, timesasked: 1992,timescorrect: 475, timescorrectwithhint: 703, timesincorrect: 520, timesincorrectwithhint: 294},
{year: 2024, month: 7, day: 13, questionid: 79, timesasked: 1365,timescorrect: 505, timescorrectwithhint: 590, timesincorrect: 176, timesincorrectwithhint: 94},
{year: 2024, month: 7, day: 13, questionid: 80, timesasked: 1722,timescorrect: 360, timescorrectwithhint: 578, timesincorrect: 500, timesincorrectwithhint: 284},
{year: 2024, month: 7, day: 13, questionid: 81, timesasked: 1279,timescorrect: 504, timescorrectwithhint: 571, timesincorrect: 134, timesincorrectwithhint: 70},
{year: 2024, month: 7, day: 13, questionid: 82, timesasked: 1270,timescorrect: 213, timescorrectwithhint: 394, timesincorrect: 421, timesincorrectwithhint: 242},
{year: 2024, month: 7, day: 13, questionid: 83, timesasked: 1403,timescorrect: 401, timescorrectwithhint: 535, timesincorrect: 300, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 13, questionid: 84, timesasked: 1251,timescorrect: 374, timescorrectwithhint: 487, timesincorrect: 250, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 13, questionid: 85, timesasked: 1562,timescorrect: 361, timescorrectwithhint: 545, timesincorrect: 419, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 13, questionid: 86, timesasked: 1501,timescorrect: 548, timescorrectwithhint: 644, timesincorrect: 201, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 13, questionid: 87, timesasked: 1354,timescorrect: 224, timescorrectwithhint: 418, timesincorrect: 452, timesincorrectwithhint: 260},
{year: 2024, month: 7, day: 13, questionid: 88, timesasked: 1861,timescorrect: 665, timescorrectwithhint: 790, timesincorrect: 264, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 13, questionid: 89, timesasked: 1944,timescorrect: 715, timescorrectwithhint: 837, timesincorrect: 256, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 13, questionid: 90, timesasked: 1916,timescorrect: 436, timescorrectwithhint: 664, timesincorrect: 521, timesincorrectwithhint: 295},
{year: 2024, month: 7, day: 13, questionid: 91, timesasked: 1040,timescorrect: 396, timescorrectwithhint: 456, timesincorrect: 123, timesincorrectwithhint: 65},
{year: 2024, month: 7, day: 13, questionid: 92, timesasked: 1573,timescorrect: 539, timescorrectwithhint: 654, timesincorrect: 246, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 13, questionid: 93, timesasked: 1377,timescorrect: 516, timescorrectwithhint: 599, timesincorrect: 171, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 13, questionid: 94, timesasked: 1245,timescorrect: 402, timescorrectwithhint: 502, timesincorrect: 220, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 13, questionid: 95, timesasked: 1569,timescorrect: 510, timescorrectwithhint: 635, timesincorrect: 273, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 13, questionid: 96, timesasked: 1830,timescorrect: 420, timescorrectwithhint: 636, timesincorrect: 494, timesincorrectwithhint: 280},
{year: 2024, month: 7, day: 13, questionid: 97, timesasked: 1403,timescorrect: 380, timescorrectwithhint: 523, timesincorrect: 320, timesincorrectwithhint: 180},
{year: 2024, month: 7, day: 14, questionid: 1, timesasked: 1076,timescorrect: 277, timescorrectwithhint: 392, timesincorrect: 260, timesincorrectwithhint: 147},
{year: 2024, month: 7, day: 14, questionid: 2, timesasked: 1759,timescorrect: 339, timescorrectwithhint: 572, timesincorrect: 540, timesincorrectwithhint: 308},
{year: 2024, month: 7, day: 14, questionid: 3, timesasked: 1902,timescorrect: 494, timescorrectwithhint: 696, timesincorrect: 456, timesincorrectwithhint: 256},
{year: 2024, month: 7, day: 14, questionid: 4, timesasked: 1405,timescorrect: 306, timescorrectwithhint: 479, timesincorrect: 395, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 14, questionid: 5, timesasked: 1949,timescorrect: 683, timescorrectwithhint: 819, timesincorrect: 290, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 14, questionid: 6, timesasked: 1092,timescorrect: 251, timescorrectwithhint: 380, timesincorrect: 294, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 14, questionid: 7, timesasked: 1040,timescorrect: 238, timescorrectwithhint: 361, timesincorrect: 281, timesincorrectwithhint: 160},
{year: 2024, month: 7, day: 14, questionid: 8, timesasked: 1717,timescorrect: 411, timescorrectwithhint: 607, timesincorrect: 447, timesincorrectwithhint: 252},
{year: 2024, month: 7, day: 14, questionid: 9, timesasked: 1743,timescorrect: 347, timescorrectwithhint: 574, timesincorrect: 523, timesincorrectwithhint: 299},
{year: 2024, month: 7, day: 14, questionid: 10, timesasked: 1179,timescorrect: 422, timescorrectwithhint: 501, timesincorrect: 166, timesincorrectwithhint: 90},
{year: 2024, month: 7, day: 14, questionid: 11, timesasked: 1116,timescorrect: 250, timescorrectwithhint: 384, timesincorrect: 307, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 14, questionid: 12, timesasked: 1123,timescorrect: 242, timescorrectwithhint: 381, timesincorrect: 318, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 14, questionid: 13, timesasked: 1972,timescorrect: 331, timescorrectwithhint: 613, timesincorrect: 654, timesincorrectwithhint: 374},
{year: 2024, month: 7, day: 14, questionid: 14, timesasked: 1901,timescorrect: 644, timescorrectwithhint: 785, timesincorrect: 306, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 14, questionid: 15, timesasked: 1335,timescorrect: 238, timescorrectwithhint: 423, timesincorrect: 428, timesincorrectwithhint: 246},
{year: 2024, month: 7, day: 14, questionid: 16, timesasked: 1848,timescorrect: 398, timescorrectwithhint: 627, timesincorrect: 525, timesincorrectwithhint: 298},
{year: 2024, month: 7, day: 14, questionid: 17, timesasked: 1235,timescorrect: 474, timescorrectwithhint: 544, timesincorrect: 142, timesincorrectwithhint: 75},
{year: 2024, month: 7, day: 14, questionid: 18, timesasked: 1322,timescorrect: 225, timescorrectwithhint: 413, timesincorrect: 435, timesincorrectwithhint: 249},
{year: 2024, month: 7, day: 14, questionid: 19, timesasked: 1401,timescorrect: 523, timescorrectwithhint: 608, timesincorrect: 177, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 14, questionid: 20, timesasked: 1189,timescorrect: 443, timescorrectwithhint: 516, timesincorrect: 150, timesincorrectwithhint: 80},
{year: 2024, month: 7, day: 14, questionid: 21, timesasked: 1789,timescorrect: 706, timescorrectwithhint: 799, timesincorrect: 187, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 14, questionid: 22, timesasked: 1374,timescorrect: 239, timescorrectwithhint: 431, timesincorrect: 447, timesincorrectwithhint: 257},
{year: 2024, month: 7, day: 14, questionid: 23, timesasked: 1471,timescorrect: 307, timescorrectwithhint: 493, timesincorrect: 427, timesincorrectwithhint: 244},
{year: 2024, month: 7, day: 14, questionid: 24, timesasked: 1175,timescorrect: 241, timescorrectwithhint: 391, timesincorrect: 345, timesincorrectwithhint: 198},
{year: 2024, month: 7, day: 14, questionid: 25, timesasked: 1408,timescorrect: 556, timescorrectwithhint: 629, timesincorrect: 147, timesincorrectwithhint: 76},
{year: 2024, month: 7, day: 14, questionid: 26, timesasked: 1112,timescorrect: 419, timescorrectwithhint: 485, timesincorrect: 136, timesincorrectwithhint: 72},
{year: 2024, month: 7, day: 14, questionid: 27, timesasked: 1227,timescorrect: 203, timescorrectwithhint: 379, timesincorrect: 409, timesincorrectwithhint: 236},
{year: 2024, month: 7, day: 14, questionid: 28, timesasked: 1794,timescorrect: 659, timescorrectwithhint: 772, timesincorrect: 237, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 14, questionid: 29, timesasked: 1634,timescorrect: 530, timescorrectwithhint: 661, timesincorrect: 286, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 14, questionid: 30, timesasked: 1559,timescorrect: 285, timescorrectwithhint: 498, timesincorrect: 494, timesincorrectwithhint: 282},
{year: 2024, month: 7, day: 14, questionid: 31, timesasked: 1607,timescorrect: 441, timescorrectwithhint: 602, timesincorrect: 361, timesincorrectwithhint: 203},
{year: 2024, month: 7, day: 14, questionid: 32, timesasked: 1480,timescorrect: 574, timescorrectwithhint: 655, timesincorrect: 165, timesincorrectwithhint: 86},
{year: 2024, month: 7, day: 14, questionid: 33, timesasked: 1344,timescorrect: 292, timescorrectwithhint: 457, timesincorrect: 379, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 14, questionid: 34, timesasked: 1198,timescorrect: 419, timescorrectwithhint: 503, timesincorrect: 179, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 14, questionid: 35, timesasked: 1418,timescorrect: 506, timescorrectwithhint: 601, timesincorrect: 202, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 14, questionid: 36, timesasked: 1821,timescorrect: 321, timescorrectwithhint: 575, timesincorrect: 588, timesincorrectwithhint: 337},
{year: 2024, month: 7, day: 14, questionid: 37, timesasked: 1233,timescorrect: 388, timescorrectwithhint: 491, timesincorrect: 228, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 14, questionid: 38, timesasked: 1841,timescorrect: 297, timescorrectwithhint: 564, timesincorrect: 623, timesincorrectwithhint: 357},
{year: 2024, month: 7, day: 14, questionid: 39, timesasked: 1769,timescorrect: 579, timescorrectwithhint: 719, timesincorrect: 304, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 14, questionid: 40, timesasked: 1071,timescorrect: 291, timescorrectwithhint: 400, timesincorrect: 243, timesincorrectwithhint: 137},
{year: 2024, month: 7, day: 14, questionid: 41, timesasked: 1226,timescorrect: 434, timescorrectwithhint: 518, timesincorrect: 178, timesincorrectwithhint: 96},
{year: 2024, month: 7, day: 14, questionid: 42, timesasked: 1683,timescorrect: 621, timescorrectwithhint: 726, timesincorrect: 220, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 14, questionid: 43, timesasked: 1415,timescorrect: 352, timescorrectwithhint: 508, timesincorrect: 354, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 14, questionid: 44, timesasked: 1287,timescorrect: 339, timescorrectwithhint: 474, timesincorrect: 303, timesincorrectwithhint: 171},
{year: 2024, month: 7, day: 14, questionid: 45, timesasked: 1785,timescorrect: 568, timescorrectwithhint: 716, timesincorrect: 323, timesincorrectwithhint: 178},
{year: 2024, month: 7, day: 14, questionid: 46, timesasked: 1917,timescorrect: 307, timescorrectwithhint: 587, timesincorrect: 650, timesincorrectwithhint: 373},
{year: 2024, month: 7, day: 14, questionid: 47, timesasked: 1039,timescorrect: 160, timescorrectwithhint: 314, timesincorrect: 359, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 14, questionid: 48, timesasked: 1204,timescorrect: 197, timescorrectwithhint: 371, timesincorrect: 404, timesincorrectwithhint: 232},
{year: 2024, month: 7, day: 14, questionid: 49, timesasked: 1673,timescorrect: 363, timescorrectwithhint: 569, timesincorrect: 472, timesincorrectwithhint: 269},
{year: 2024, month: 7, day: 14, questionid: 50, timesasked: 1774,timescorrect: 553, timescorrectwithhint: 704, timesincorrect: 333, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 14, questionid: 51, timesasked: 1332,timescorrect: 494, timescorrectwithhint: 576, timesincorrect: 171, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 14, questionid: 52, timesasked: 1303,timescorrect: 363, timescorrectwithhint: 491, timesincorrect: 288, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 14, questionid: 53, timesasked: 1886,timescorrect: 631, timescorrectwithhint: 775, timesincorrect: 311, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 14, questionid: 54, timesasked: 1440,timescorrect: 498, timescorrectwithhint: 601, timesincorrect: 221, timesincorrectwithhint: 120},
{year: 2024, month: 7, day: 14, questionid: 55, timesasked: 1435,timescorrect: 389, timescorrectwithhint: 535, timesincorrect: 327, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 14, questionid: 56, timesasked: 1118,timescorrect: 428, timescorrectwithhint: 491, timesincorrect: 130, timesincorrectwithhint: 69},
{year: 2024, month: 7, day: 14, questionid: 57, timesasked: 1869,timescorrect: 672, timescorrectwithhint: 796, timesincorrect: 261, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 14, questionid: 58, timesasked: 1600,timescorrect: 371, timescorrectwithhint: 558, timesincorrect: 428, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 14, questionid: 59, timesasked: 1704,timescorrect: 402, timescorrectwithhint: 599, timesincorrect: 449, timesincorrectwithhint: 254},
{year: 2024, month: 7, day: 14, questionid: 60, timesasked: 1899,timescorrect: 698, timescorrectwithhint: 817, timesincorrect: 250, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 14, questionid: 61, timesasked: 1452,timescorrect: 554, timescorrectwithhint: 637, timesincorrect: 171, timesincorrectwithhint: 90},
{year: 2024, month: 7, day: 14, questionid: 62, timesasked: 1502,timescorrect: 549, timescorrectwithhint: 645, timesincorrect: 201, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 14, questionid: 63, timesasked: 1287,timescorrect: 334, timescorrectwithhint: 470, timesincorrect: 309, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 14, questionid: 64, timesasked: 1140,timescorrect: 418, timescorrectwithhint: 490, timesincorrect: 151, timesincorrectwithhint: 81},
{year: 2024, month: 7, day: 14, questionid: 65, timesasked: 1316,timescorrect: 314, timescorrectwithhint: 464, timesincorrect: 343, timesincorrectwithhint: 195},
{year: 2024, month: 7, day: 14, questionid: 66, timesasked: 1773,timescorrect: 640, timescorrectwithhint: 756, timesincorrect: 245, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 14, questionid: 67, timesasked: 1533,timescorrect: 408, timescorrectwithhint: 566, timesincorrect: 358, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 14, questionid: 68, timesasked: 1483,timescorrect: 486, timescorrectwithhint: 603, timesincorrect: 255, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 14, questionid: 69, timesasked: 1634,timescorrect: 563, timescorrectwithhint: 681, timesincorrect: 253, timesincorrectwithhint: 137},
{year: 2024, month: 7, day: 14, questionid: 70, timesasked: 1679,timescorrect: 558, timescorrectwithhint: 687, timesincorrect: 281, timesincorrectwithhint: 153},
{year: 2024, month: 7, day: 14, questionid: 71, timesasked: 1666,timescorrect: 438, timescorrectwithhint: 612, timesincorrect: 394, timesincorrectwithhint: 222},
{year: 2024, month: 7, day: 14, questionid: 72, timesasked: 1526,timescorrect: 589, timescorrectwithhint: 674, timesincorrect: 173, timesincorrectwithhint: 90},
{year: 2024, month: 7, day: 14, questionid: 73, timesasked: 1211,timescorrect: 209, timescorrectwithhint: 379, timesincorrect: 396, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 14, questionid: 74, timesasked: 1994,timescorrect: 306, timescorrectwithhint: 602, timesincorrect: 690, timesincorrectwithhint: 396},
{year: 2024, month: 7, day: 14, questionid: 75, timesasked: 1233,timescorrect: 307, timescorrectwithhint: 443, timesincorrect: 309, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 14, questionid: 76, timesasked: 1836,timescorrect: 395, timescorrectwithhint: 622, timesincorrect: 522, timesincorrectwithhint: 297},
{year: 2024, month: 7, day: 14, questionid: 77, timesasked: 1809,timescorrect: 474, timescorrectwithhint: 664, timesincorrect: 429, timesincorrectwithhint: 242},
{year: 2024, month: 7, day: 14, questionid: 78, timesasked: 1851,timescorrect: 411, timescorrectwithhint: 635, timesincorrect: 514, timesincorrectwithhint: 291},
{year: 2024, month: 7, day: 14, questionid: 79, timesasked: 1282,timescorrect: 460, timescorrectwithhint: 545, timesincorrect: 180, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 14, questionid: 80, timesasked: 1013,timescorrect: 303, timescorrectwithhint: 394, timesincorrect: 203, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 14, questionid: 81, timesasked: 1230,timescorrect: 210, timescorrectwithhint: 384, timesincorrect: 404, timesincorrectwithhint: 232},
{year: 2024, month: 7, day: 14, questionid: 82, timesasked: 1064,timescorrect: 265, timescorrectwithhint: 382, timesincorrect: 266, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 14, questionid: 83, timesasked: 1788,timescorrect: 509, timescorrectwithhint: 681, timesincorrect: 384, timesincorrectwithhint: 214},
{year: 2024, month: 7, day: 14, questionid: 84, timesasked: 1151,timescorrect: 394, timescorrectwithhint: 478, timesincorrect: 180, timesincorrectwithhint: 99},
{year: 2024, month: 7, day: 14, questionid: 85, timesasked: 1352,timescorrect: 360, timescorrectwithhint: 500, timesincorrect: 315, timesincorrectwithhint: 177},
{year: 2024, month: 7, day: 14, questionid: 86, timesasked: 1278,timescorrect: 482, timescorrectwithhint: 558, timesincorrect: 156, timesincorrectwithhint: 82},
{year: 2024, month: 7, day: 14, questionid: 87, timesasked: 1996,timescorrect: 762, timescorrectwithhint: 876, timesincorrect: 235, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 14, questionid: 88, timesasked: 1897,timescorrect: 578, timescorrectwithhint: 745, timesincorrect: 370, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 14, questionid: 89, timesasked: 1901,timescorrect: 546, timescorrectwithhint: 727, timesincorrect: 403, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 14, questionid: 90, timesasked: 1246,timescorrect: 346, timescorrectwithhint: 469, timesincorrect: 276, timesincorrectwithhint: 155},
{year: 2024, month: 7, day: 14, questionid: 91, timesasked: 1064,timescorrect: 290, timescorrectwithhint: 397, timesincorrect: 241, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 14, questionid: 92, timesasked: 1569,timescorrect: 276, timescorrectwithhint: 495, timesincorrect: 508, timesincorrectwithhint: 290},
{year: 2024, month: 7, day: 14, questionid: 93, timesasked: 1909,timescorrect: 443, timescorrectwithhint: 667, timesincorrect: 510, timesincorrectwithhint: 289},
{year: 2024, month: 7, day: 14, questionid: 94, timesasked: 1605,timescorrect: 486, timescorrectwithhint: 628, timesincorrect: 315, timesincorrectwithhint: 176},
{year: 2024, month: 7, day: 14, questionid: 95, timesasked: 1286,timescorrect: 348, timescorrectwithhint: 479, timesincorrect: 294, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 14, questionid: 96, timesasked: 1725,timescorrect: 546, timescorrectwithhint: 689, timesincorrect: 316, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 14, questionid: 97, timesasked: 1846,timescorrect: 343, timescorrectwithhint: 593, timesincorrect: 579, timesincorrectwithhint: 331},
{year: 2024, month: 7, day: 15, questionid: 1, timesasked: 1846,timescorrect: 375, timescorrectwithhint: 612, timesincorrect: 547, timesincorrectwithhint: 312},
{year: 2024, month: 7, day: 15, questionid: 2, timesasked: 1646,timescorrect: 449, timescorrectwithhint: 615, timesincorrect: 373, timesincorrectwithhint: 209},
{year: 2024, month: 7, day: 15, questionid: 3, timesasked: 1803,timescorrect: 546, timescorrectwithhint: 706, timesincorrect: 355, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 15, questionid: 4, timesasked: 1400,timescorrect: 438, timescorrectwithhint: 556, timesincorrect: 261, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 15, questionid: 5, timesasked: 1427,timescorrect: 311, timescorrectwithhint: 486, timesincorrect: 401, timesincorrectwithhint: 229},
{year: 2024, month: 7, day: 15, questionid: 6, timesasked: 1355,timescorrect: 365, timescorrectwithhint: 503, timesincorrect: 312, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 15, questionid: 7, timesasked: 1136,timescorrect: 178, timescorrectwithhint: 345, timesincorrect: 389, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 15, questionid: 8, timesasked: 1219,timescorrect: 451, timescorrectwithhint: 526, timesincorrect: 158, timesincorrectwithhint: 84},
{year: 2024, month: 7, day: 15, questionid: 9, timesasked: 1836,timescorrect: 646, timescorrectwithhint: 773, timesincorrect: 271, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 15, questionid: 10, timesasked: 1300,timescorrect: 499, timescorrectwithhint: 572, timesincorrect: 150, timesincorrectwithhint: 79},
{year: 2024, month: 7, day: 15, questionid: 11, timesasked: 1925,timescorrect: 589, timescorrectwithhint: 757, timesincorrect: 373, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 15, questionid: 12, timesasked: 1316,timescorrect: 225, timescorrectwithhint: 411, timesincorrect: 432, timesincorrectwithhint: 248},
{year: 2024, month: 7, day: 15, questionid: 13, timesasked: 1899,timescorrect: 385, timescorrectwithhint: 630, timesincorrect: 563, timesincorrectwithhint: 321},
{year: 2024, month: 7, day: 15, questionid: 14, timesasked: 1402,timescorrect: 319, timescorrectwithhint: 485, timesincorrect: 381, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 15, questionid: 15, timesasked: 1091,timescorrect: 193, timescorrectwithhint: 345, timesincorrect: 351, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 15, questionid: 16, timesasked: 1720,timescorrect: 565, timescorrectwithhint: 700, timesincorrect: 294, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 15, questionid: 17, timesasked: 1710,timescorrect: 677, timescorrectwithhint: 765, timesincorrect: 177, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 15, questionid: 18, timesasked: 1543,timescorrect: 401, timescorrectwithhint: 564, timesincorrect: 370, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 15, questionid: 19, timesasked: 1016,timescorrect: 190, timescorrectwithhint: 327, timesincorrect: 317, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 15, questionid: 20, timesasked: 1969,timescorrect: 723, timescorrectwithhint: 847, timesincorrect: 260, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 15, questionid: 21, timesasked: 1630,timescorrect: 476, timescorrectwithhint: 628, timesincorrect: 338, timesincorrectwithhint: 188},
{year: 2024, month: 7, day: 15, questionid: 22, timesasked: 1641,timescorrect: 449, timescorrectwithhint: 614, timesincorrect: 370, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 15, questionid: 23, timesasked: 1808,timescorrect: 620, timescorrectwithhint: 751, timesincorrect: 283, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 15, questionid: 24, timesasked: 1425,timescorrect: 258, timescorrectwithhint: 454, timesincorrect: 454, timesincorrectwithhint: 259},
{year: 2024, month: 7, day: 15, questionid: 25, timesasked: 1434,timescorrect: 486, timescorrectwithhint: 593, timesincorrect: 230, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 15, questionid: 26, timesasked: 1978,timescorrect: 452, timescorrectwithhint: 686, timesincorrect: 536, timesincorrectwithhint: 304},
{year: 2024, month: 7, day: 15, questionid: 27, timesasked: 1711,timescorrect: 498, timescorrectwithhint: 658, timesincorrect: 357, timesincorrectwithhint: 198},
{year: 2024, month: 7, day: 15, questionid: 28, timesasked: 1818,timescorrect: 362, timescorrectwithhint: 599, timesincorrect: 546, timesincorrectwithhint: 311},
{year: 2024, month: 7, day: 15, questionid: 29, timesasked: 1604,timescorrect: 540, timescorrectwithhint: 661, timesincorrect: 261, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 15, questionid: 30, timesasked: 1776,timescorrect: 605, timescorrectwithhint: 736, timesincorrect: 282, timesincorrectwithhint: 153},
{year: 2024, month: 7, day: 15, questionid: 31, timesasked: 1941,timescorrect: 644, timescorrectwithhint: 794, timesincorrect: 326, timesincorrectwithhint: 177},
{year: 2024, month: 7, day: 15, questionid: 32, timesasked: 1768,timescorrect: 572, timescorrectwithhint: 714, timesincorrect: 311, timesincorrectwithhint: 171},
{year: 2024, month: 7, day: 15, questionid: 33, timesasked: 1395,timescorrect: 230, timescorrectwithhint: 431, timesincorrect: 467, timesincorrectwithhint: 267},
{year: 2024, month: 7, day: 15, questionid: 34, timesasked: 1577,timescorrect: 572, timescorrectwithhint: 674, timesincorrect: 215, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 15, questionid: 35, timesasked: 1543,timescorrect: 465, timescorrectwithhint: 603, timesincorrect: 305, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 15, questionid: 36, timesasked: 1692,timescorrect: 269, timescorrectwithhint: 517, timesincorrect: 576, timesincorrectwithhint: 330},
{year: 2024, month: 7, day: 15, questionid: 37, timesasked: 1037,timescorrect: 276, timescorrectwithhint: 383, timesincorrect: 242, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 15, questionid: 38, timesasked: 1118,timescorrect: 446, timescorrectwithhint: 502, timesincorrect: 112, timesincorrectwithhint: 58},
{year: 2024, month: 7, day: 15, questionid: 39, timesasked: 1822,timescorrect: 277, timescorrectwithhint: 549, timesincorrect: 633, timesincorrectwithhint: 363},
{year: 2024, month: 7, day: 15, questionid: 40, timesasked: 1016,timescorrect: 242, timescorrectwithhint: 358, timesincorrect: 265, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 15, questionid: 41, timesasked: 1957,timescorrect: 779, timescorrectwithhint: 878, timesincorrect: 198, timesincorrectwithhint: 102},
{year: 2024, month: 7, day: 15, questionid: 42, timesasked: 1474,timescorrect: 271, timescorrectwithhint: 472, timesincorrect: 465, timesincorrectwithhint: 266},
{year: 2024, month: 7, day: 15, questionid: 43, timesasked: 1369,timescorrect: 239, timescorrectwithhint: 431, timesincorrect: 445, timesincorrectwithhint: 254},
{year: 2024, month: 7, day: 15, questionid: 44, timesasked: 1690,timescorrect: 658, timescorrectwithhint: 750, timesincorrect: 186, timesincorrectwithhint: 96},
{year: 2024, month: 7, day: 15, questionid: 45, timesasked: 1413,timescorrect: 223, timescorrectwithhint: 431, timesincorrect: 482, timesincorrectwithhint: 277},
{year: 2024, month: 7, day: 15, questionid: 46, timesasked: 1416,timescorrect: 308, timescorrectwithhint: 482, timesincorrect: 399, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 15, questionid: 47, timesasked: 1799,timescorrect: 408, timescorrectwithhint: 622, timesincorrect: 491, timesincorrectwithhint: 278},
{year: 2024, month: 7, day: 15, questionid: 48, timesasked: 1871,timescorrect: 325, timescorrectwithhint: 588, timesincorrect: 609, timesincorrectwithhint: 349},
{year: 2024, month: 7, day: 15, questionid: 49, timesasked: 1579,timescorrect: 542, timescorrectwithhint: 656, timesincorrect: 247, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 15, questionid: 50, timesasked: 1824,timescorrect: 675, timescorrectwithhint: 788, timesincorrect: 236, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 15, questionid: 51, timesasked: 1449,timescorrect: 275, timescorrectwithhint: 469, timesincorrect: 449, timesincorrectwithhint: 256},
{year: 2024, month: 7, day: 15, questionid: 52, timesasked: 1955,timescorrect: 539, timescorrectwithhint: 733, timesincorrect: 438, timesincorrectwithhint: 245},
{year: 2024, month: 7, day: 15, questionid: 53, timesasked: 1038,timescorrect: 169, timescorrectwithhint: 319, timesincorrect: 349, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 15, questionid: 54, timesasked: 1798,timescorrect: 483, timescorrectwithhint: 667, timesincorrect: 415, timesincorrectwithhint: 233},
{year: 2024, month: 7, day: 15, questionid: 55, timesasked: 1919,timescorrect: 302, timescorrectwithhint: 584, timesincorrect: 657, timesincorrectwithhint: 376},
{year: 2024, month: 7, day: 15, questionid: 56, timesasked: 1343,timescorrect: 327, timescorrectwithhint: 478, timesincorrect: 343, timesincorrectwithhint: 195},
{year: 2024, month: 7, day: 15, questionid: 57, timesasked: 1760,timescorrect: 663, timescorrectwithhint: 767, timesincorrect: 216, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 15, questionid: 58, timesasked: 1674,timescorrect: 371, timescorrectwithhint: 574, timesincorrect: 465, timesincorrectwithhint: 264},
{year: 2024, month: 7, day: 15, questionid: 59, timesasked: 1379,timescorrect: 215, timescorrectwithhint: 419, timesincorrect: 473, timesincorrectwithhint: 272},
{year: 2024, month: 7, day: 15, questionid: 60, timesasked: 1317,timescorrect: 310, timescorrectwithhint: 463, timesincorrect: 347, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 15, questionid: 61, timesasked: 1654,timescorrect: 313, timescorrectwithhint: 535, timesincorrect: 513, timesincorrectwithhint: 293},
{year: 2024, month: 7, day: 15, questionid: 62, timesasked: 1345,timescorrect: 496, timescorrectwithhint: 580, timesincorrect: 176, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 15, questionid: 63, timesasked: 1848,timescorrect: 345, timescorrectwithhint: 595, timesincorrect: 578, timesincorrectwithhint: 330},
{year: 2024, month: 7, day: 15, questionid: 64, timesasked: 1624,timescorrect: 543, timescorrectwithhint: 667, timesincorrect: 268, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 15, questionid: 65, timesasked: 1881,timescorrect: 742, timescorrectwithhint: 840, timesincorrect: 198, timesincorrectwithhint: 101},
{year: 2024, month: 7, day: 15, questionid: 66, timesasked: 1978,timescorrect: 438, timescorrectwithhint: 678, timesincorrect: 550, timesincorrectwithhint: 312},
{year: 2024, month: 7, day: 15, questionid: 67, timesasked: 1934,timescorrect: 654, timescorrectwithhint: 798, timesincorrect: 312, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 15, questionid: 68, timesasked: 1861,timescorrect: 290, timescorrectwithhint: 565, timesincorrect: 639, timesincorrectwithhint: 367},
{year: 2024, month: 7, day: 15, questionid: 69, timesasked: 1139,timescorrect: 405, timescorrectwithhint: 482, timesincorrect: 163, timesincorrectwithhint: 89},
{year: 2024, month: 7, day: 15, questionid: 70, timesasked: 1920,timescorrect: 372, timescorrectwithhint: 626, timesincorrect: 587, timesincorrectwithhint: 335},
{year: 2024, month: 7, day: 15, questionid: 71, timesasked: 1795,timescorrect: 622, timescorrectwithhint: 750, timesincorrect: 275, timesincorrectwithhint: 148},
{year: 2024, month: 7, day: 15, questionid: 72, timesasked: 1004,timescorrect: 151, timescorrectwithhint: 301, timesincorrect: 350, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 15, questionid: 73, timesasked: 1927,timescorrect: 685, timescorrectwithhint: 815, timesincorrect: 278, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 15, questionid: 74, timesasked: 1372,timescorrect: 469, timescorrectwithhint: 569, timesincorrect: 216, timesincorrectwithhint: 118},
{year: 2024, month: 7, day: 15, questionid: 75, timesasked: 1461,timescorrect: 550, timescorrectwithhint: 636, timesincorrect: 180, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 15, questionid: 76, timesasked: 1559,timescorrect: 589, timescorrectwithhint: 680, timesincorrect: 190, timesincorrectwithhint: 100},
{year: 2024, month: 7, day: 15, questionid: 77, timesasked: 1145,timescorrect: 177, timescorrectwithhint: 347, timesincorrect: 394, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 15, questionid: 78, timesasked: 1539,timescorrect: 363, timescorrectwithhint: 541, timesincorrect: 406, timesincorrectwithhint: 229},
{year: 2024, month: 7, day: 15, questionid: 79, timesasked: 1454,timescorrect: 324, timescorrectwithhint: 499, timesincorrect: 402, timesincorrectwithhint: 229},
{year: 2024, month: 7, day: 15, questionid: 80, timesasked: 1008,timescorrect: 382, timescorrectwithhint: 441, timesincorrect: 121, timesincorrectwithhint: 64},
{year: 2024, month: 7, day: 15, questionid: 81, timesasked: 1543,timescorrect: 557, timescorrectwithhint: 658, timesincorrect: 213, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 15, questionid: 82, timesasked: 1577,timescorrect: 501, timescorrectwithhint: 631, timesincorrect: 287, timesincorrectwithhint: 158},
{year: 2024, month: 7, day: 15, questionid: 83, timesasked: 1068,timescorrect: 166, timescorrectwithhint: 324, timesincorrect: 367, timesincorrectwithhint: 211},
{year: 2024, month: 7, day: 15, questionid: 84, timesasked: 1010,timescorrect: 380, timescorrectwithhint: 440, timesincorrect: 124, timesincorrectwithhint: 66},
{year: 2024, month: 7, day: 15, questionid: 85, timesasked: 1296,timescorrect: 447, timescorrectwithhint: 540, timesincorrect: 200, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 15, questionid: 86, timesasked: 1014,timescorrect: 223, timescorrectwithhint: 347, timesincorrect: 283, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 15, questionid: 87, timesasked: 1507,timescorrect: 598, timescorrectwithhint: 675, timesincorrect: 155, timesincorrectwithhint: 79},
{year: 2024, month: 7, day: 15, questionid: 88, timesasked: 1589,timescorrect: 551, timescorrectwithhint: 664, timesincorrect: 242, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 15, questionid: 89, timesasked: 1898,timescorrect: 564, timescorrectwithhint: 737, timesincorrect: 384, timesincorrectwithhint: 213},
{year: 2024, month: 7, day: 15, questionid: 90, timesasked: 1060,timescorrect: 380, timescorrectwithhint: 450, timesincorrect: 149, timesincorrectwithhint: 81},
{year: 2024, month: 7, day: 15, questionid: 91, timesasked: 1792,timescorrect: 354, timescorrectwithhint: 589, timesincorrect: 541, timesincorrectwithhint: 308},
{year: 2024, month: 7, day: 15, questionid: 92, timesasked: 1877,timescorrect: 630, timescorrectwithhint: 772, timesincorrect: 307, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 15, questionid: 93, timesasked: 1024,timescorrect: 228, timescorrectwithhint: 352, timesincorrect: 283, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 15, questionid: 94, timesasked: 1954,timescorrect: 315, timescorrectwithhint: 599, timesincorrect: 661, timesincorrectwithhint: 379},
{year: 2024, month: 7, day: 15, questionid: 95, timesasked: 1646,timescorrect: 442, timescorrectwithhint: 610, timesincorrect: 380, timesincorrectwithhint: 214},
{year: 2024, month: 7, day: 15, questionid: 96, timesasked: 1098,timescorrect: 180, timescorrectwithhint: 338, timesincorrect: 368, timesincorrectwithhint: 212},
{year: 2024, month: 7, day: 15, questionid: 97, timesasked: 1079,timescorrect: 187, timescorrectwithhint: 339, timesincorrect: 352, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 16, questionid: 1, timesasked: 1561,timescorrect: 585, timescorrectwithhint: 679, timesincorrect: 195, timesincorrectwithhint: 102},
{year: 2024, month: 7, day: 16, questionid: 2, timesasked: 1538,timescorrect: 609, timescorrectwithhint: 688, timesincorrect: 159, timesincorrectwithhint: 82},
{year: 2024, month: 7, day: 16, questionid: 3, timesasked: 1807,timescorrect: 624, timescorrectwithhint: 754, timesincorrect: 278, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 16, questionid: 4, timesasked: 1277,timescorrect: 381, timescorrectwithhint: 496, timesincorrect: 257, timesincorrectwithhint: 143},
{year: 2024, month: 7, day: 16, questionid: 5, timesasked: 1368,timescorrect: 271, timescorrectwithhint: 450, timesincorrect: 412, timesincorrectwithhint: 235},
{year: 2024, month: 7, day: 16, questionid: 6, timesasked: 1046,timescorrect: 207, timescorrectwithhint: 344, timesincorrect: 315, timesincorrectwithhint: 180},
{year: 2024, month: 7, day: 16, questionid: 7, timesasked: 1396,timescorrect: 502, timescorrectwithhint: 594, timesincorrect: 195, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 16, questionid: 8, timesasked: 1887,timescorrect: 648, timescorrectwithhint: 785, timesincorrect: 295, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 16, questionid: 9, timesasked: 1829,timescorrect: 677, timescorrectwithhint: 790, timesincorrect: 236, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 16, questionid: 10, timesasked: 1129,timescorrect: 330, timescorrectwithhint: 435, timesincorrect: 233, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 16, questionid: 11, timesasked: 1049,timescorrect: 189, timescorrectwithhint: 333, timesincorrect: 335, timesincorrectwithhint: 192},
{year: 2024, month: 7, day: 16, questionid: 12, timesasked: 1034,timescorrect: 247, timescorrectwithhint: 365, timesincorrect: 269, timesincorrectwithhint: 153},
{year: 2024, month: 7, day: 16, questionid: 13, timesasked: 1358,timescorrect: 365, timescorrectwithhint: 504, timesincorrect: 313, timesincorrectwithhint: 176},
{year: 2024, month: 7, day: 16, questionid: 14, timesasked: 1746,timescorrect: 386, timescorrectwithhint: 598, timesincorrect: 486, timesincorrectwithhint: 276},
{year: 2024, month: 7, day: 16, questionid: 15, timesasked: 1008,timescorrect: 383, timescorrectwithhint: 442, timesincorrect: 120, timesincorrectwithhint: 63},
{year: 2024, month: 7, day: 16, questionid: 16, timesasked: 1717,timescorrect: 619, timescorrectwithhint: 732, timesincorrect: 239, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 16, questionid: 17, timesasked: 1590,timescorrect: 489, timescorrectwithhint: 627, timesincorrect: 305, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 16, questionid: 18, timesasked: 1775,timescorrect: 524, timescorrectwithhint: 687, timesincorrect: 362, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 16, questionid: 19, timesasked: 1831,timescorrect: 302, timescorrectwithhint: 566, timesincorrect: 612, timesincorrectwithhint: 351},
{year: 2024, month: 7, day: 16, questionid: 20, timesasked: 1736,timescorrect: 618, timescorrectwithhint: 735, timesincorrect: 249, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 16, questionid: 21, timesasked: 1048,timescorrect: 275, timescorrectwithhint: 385, timesincorrect: 248, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 16, questionid: 22, timesasked: 1817,timescorrect: 450, timescorrectwithhint: 651, timesincorrect: 457, timesincorrectwithhint: 259},
{year: 2024, month: 7, day: 16, questionid: 23, timesasked: 1482,timescorrect: 417, timescorrectwithhint: 561, timesincorrect: 323, timesincorrectwithhint: 181},
{year: 2024, month: 7, day: 16, questionid: 24, timesasked: 1041,timescorrect: 400, timescorrectwithhint: 458, timesincorrect: 120, timesincorrectwithhint: 63},
{year: 2024, month: 7, day: 16, questionid: 25, timesasked: 1252,timescorrect: 416, timescorrectwithhint: 513, timesincorrect: 209, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 16, questionid: 26, timesasked: 1289,timescorrect: 244, timescorrectwithhint: 417, timesincorrect: 400, timesincorrectwithhint: 228},
{year: 2024, month: 7, day: 16, questionid: 27, timesasked: 1321,timescorrect: 357, timescorrectwithhint: 492, timesincorrect: 302, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 16, questionid: 28, timesasked: 1931,timescorrect: 750, timescorrectwithhint: 855, timesincorrect: 215, timesincorrectwithhint: 111},
{year: 2024, month: 7, day: 16, questionid: 29, timesasked: 1226,timescorrect: 292, timescorrectwithhint: 432, timesincorrect: 320, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 16, questionid: 30, timesasked: 1266,timescorrect: 399, timescorrectwithhint: 505, timesincorrect: 233, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 16, questionid: 31, timesasked: 1055,timescorrect: 179, timescorrectwithhint: 328, timesincorrect: 348, timesincorrectwithhint: 200},
{year: 2024, month: 7, day: 16, questionid: 32, timesasked: 1172,timescorrect: 466, timescorrectwithhint: 525, timesincorrect: 119, timesincorrectwithhint: 62},
{year: 2024, month: 7, day: 16, questionid: 33, timesasked: 1013,timescorrect: 286, timescorrectwithhint: 384, timesincorrect: 220, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 16, questionid: 34, timesasked: 1784,timescorrect: 471, timescorrectwithhint: 657, timesincorrect: 420, timesincorrectwithhint: 236},
{year: 2024, month: 7, day: 16, questionid: 35, timesasked: 1966,timescorrect: 748, timescorrectwithhint: 861, timesincorrect: 234, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 16, questionid: 36, timesasked: 1067,timescorrect: 269, timescorrectwithhint: 385, timesincorrect: 263, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 16, questionid: 37, timesasked: 1437,timescorrect: 509, timescorrectwithhint: 607, timesincorrect: 208, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 16, questionid: 38, timesasked: 1367,timescorrect: 336, timescorrectwithhint: 488, timesincorrect: 347, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 16, questionid: 39, timesasked: 1582,timescorrect: 322, timescorrectwithhint: 525, timesincorrect: 468, timesincorrectwithhint: 267},
{year: 2024, month: 7, day: 16, questionid: 40, timesasked: 1754,timescorrect: 518, timescorrectwithhint: 679, timesincorrect: 358, timesincorrectwithhint: 199},
{year: 2024, month: 7, day: 16, questionid: 41, timesasked: 1854,timescorrect: 544, timescorrectwithhint: 715, timesincorrect: 382, timesincorrectwithhint: 213},
{year: 2024, month: 7, day: 16, questionid: 42, timesasked: 1678,timescorrect: 668, timescorrectwithhint: 753, timesincorrect: 170, timesincorrectwithhint: 87},
{year: 2024, month: 7, day: 16, questionid: 43, timesasked: 1598,timescorrect: 638, timescorrectwithhint: 718, timesincorrect: 160, timesincorrectwithhint: 82},
{year: 2024, month: 7, day: 16, questionid: 44, timesasked: 1782,timescorrect: 557, timescorrectwithhint: 708, timesincorrect: 333, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 16, questionid: 45, timesasked: 1846,timescorrect: 314, timescorrectwithhint: 576, timesincorrect: 608, timesincorrectwithhint: 348},
{year: 2024, month: 7, day: 16, questionid: 46, timesasked: 1858,timescorrect: 617, timescorrectwithhint: 760, timesincorrect: 311, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 16, questionid: 47, timesasked: 1315,timescorrect: 332, timescorrectwithhint: 475, timesincorrect: 324, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 16, questionid: 48, timesasked: 1182,timescorrect: 205, timescorrectwithhint: 371, timesincorrect: 385, timesincorrectwithhint: 221},
{year: 2024, month: 7, day: 16, questionid: 49, timesasked: 1243,timescorrect: 187, timescorrectwithhint: 373, timesincorrect: 433, timesincorrectwithhint: 250},
{year: 2024, month: 7, day: 16, questionid: 50, timesasked: 1459,timescorrect: 399, timescorrectwithhint: 546, timesincorrect: 329, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 16, questionid: 51, timesasked: 1059,timescorrect: 326, timescorrectwithhint: 418, timesincorrect: 203, timesincorrectwithhint: 112},
{year: 2024, month: 7, day: 16, questionid: 52, timesasked: 1785,timescorrect: 491, timescorrectwithhint: 669, timesincorrect: 400, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 16, questionid: 53, timesasked: 1133,timescorrect: 210, timescorrectwithhint: 363, timesincorrect: 356, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 16, questionid: 54, timesasked: 1646,timescorrect: 248, timescorrectwithhint: 494, timesincorrect: 574, timesincorrectwithhint: 330},
{year: 2024, month: 7, day: 16, questionid: 55, timesasked: 1111,timescorrect: 323, timescorrectwithhint: 427, timesincorrect: 231, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 16, questionid: 56, timesasked: 1990,timescorrect: 733, timescorrectwithhint: 858, timesincorrect: 261, timesincorrectwithhint: 138},
{year: 2024, month: 7, day: 16, questionid: 57, timesasked: 1973,timescorrect: 698, timescorrectwithhint: 833, timesincorrect: 288, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 16, questionid: 58, timesasked: 1463,timescorrect: 427, timescorrectwithhint: 564, timesincorrect: 303, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 16, questionid: 59, timesasked: 1285,timescorrect: 293, timescorrectwithhint: 445, timesincorrect: 349, timesincorrectwithhint: 198},
{year: 2024, month: 7, day: 16, questionid: 60, timesasked: 1787,timescorrect: 283, timescorrectwithhint: 545, timesincorrect: 610, timesincorrectwithhint: 349},
{year: 2024, month: 7, day: 16, questionid: 61, timesasked: 1444,timescorrect: 470, timescorrectwithhint: 585, timesincorrect: 251, timesincorrectwithhint: 138},
{year: 2024, month: 7, day: 16, questionid: 62, timesasked: 1129,timescorrect: 225, timescorrectwithhint: 372, timesincorrect: 339, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 16, questionid: 63, timesasked: 1240,timescorrect: 328, timescorrectwithhint: 457, timesincorrect: 291, timesincorrectwithhint: 164},
{year: 2024, month: 7, day: 16, questionid: 64, timesasked: 1415,timescorrect: 265, timescorrectwithhint: 456, timesincorrect: 441, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 16, questionid: 65, timesasked: 1259,timescorrect: 311, timescorrectwithhint: 451, timesincorrect: 317, timesincorrectwithhint: 180},
{year: 2024, month: 7, day: 16, questionid: 66, timesasked: 1544,timescorrect: 481, timescorrectwithhint: 613, timesincorrect: 290, timesincorrectwithhint: 160},
{year: 2024, month: 7, day: 16, questionid: 67, timesasked: 1970,timescorrect: 319, timescorrectwithhint: 605, timesincorrect: 665, timesincorrectwithhint: 381},
{year: 2024, month: 7, day: 16, questionid: 68, timesasked: 1128,timescorrect: 201, timescorrectwithhint: 357, timesincorrect: 362, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 16, questionid: 69, timesasked: 1356,timescorrect: 270, timescorrectwithhint: 446, timesincorrect: 407, timesincorrectwithhint: 233},
{year: 2024, month: 7, day: 16, questionid: 70, timesasked: 1122,timescorrect: 378, timescorrectwithhint: 462, timesincorrect: 182, timesincorrectwithhint: 100},
{year: 2024, month: 7, day: 16, questionid: 71, timesasked: 1942,timescorrect: 519, timescorrectwithhint: 719, timesincorrect: 451, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 16, questionid: 72, timesasked: 1080,timescorrect: 290, timescorrectwithhint: 401, timesincorrect: 249, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 16, questionid: 73, timesasked: 1448,timescorrect: 454, timescorrectwithhint: 576, timesincorrect: 269, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 16, questionid: 74, timesasked: 1946,timescorrect: 684, timescorrectwithhint: 819, timesincorrect: 288, timesincorrectwithhint: 155},
{year: 2024, month: 7, day: 16, questionid: 75, timesasked: 1699,timescorrect: 560, timescorrectwithhint: 692, timesincorrect: 289, timesincorrectwithhint: 158},
{year: 2024, month: 7, day: 16, questionid: 76, timesasked: 1770,timescorrect: 454, timescorrectwithhint: 644, timesincorrect: 430, timesincorrectwithhint: 242},
{year: 2024, month: 7, day: 16, questionid: 77, timesasked: 1670,timescorrect: 259, timescorrectwithhint: 506, timesincorrect: 575, timesincorrectwithhint: 330},
{year: 2024, month: 7, day: 16, questionid: 78, timesasked: 1530,timescorrect: 300, timescorrectwithhint: 501, timesincorrect: 464, timesincorrectwithhint: 265},
{year: 2024, month: 7, day: 16, questionid: 79, timesasked: 1179,timescorrect: 350, timescorrectwithhint: 458, timesincorrect: 238, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 16, questionid: 80, timesasked: 1529,timescorrect: 413, timescorrectwithhint: 569, timesincorrect: 350, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 16, questionid: 81, timesasked: 1862,timescorrect: 560, timescorrectwithhint: 727, timesincorrect: 370, timesincorrectwithhint: 205},
{year: 2024, month: 7, day: 16, questionid: 82, timesasked: 1071,timescorrect: 176, timescorrectwithhint: 330, timesincorrect: 359, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 16, questionid: 83, timesasked: 1285,timescorrect: 338, timescorrectwithhint: 473, timesincorrect: 303, timesincorrectwithhint: 171},
{year: 2024, month: 7, day: 16, questionid: 84, timesasked: 1984,timescorrect: 628, timescorrectwithhint: 793, timesincorrect: 363, timesincorrectwithhint: 200},
{year: 2024, month: 7, day: 16, questionid: 85, timesasked: 1244,timescorrect: 392, timescorrectwithhint: 496, timesincorrect: 229, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 16, questionid: 86, timesasked: 1281,timescorrect: 373, timescorrectwithhint: 492, timesincorrect: 267, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 16, questionid: 87, timesasked: 1406,timescorrect: 441, timescorrectwithhint: 560, timesincorrect: 261, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 16, questionid: 88, timesasked: 1994,timescorrect: 305, timescorrectwithhint: 602, timesincorrect: 691, timesincorrectwithhint: 396},
{year: 2024, month: 7, day: 16, questionid: 89, timesasked: 1537,timescorrect: 371, timescorrectwithhint: 545, timesincorrect: 396, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 16, questionid: 90, timesasked: 1266,timescorrect: 339, timescorrectwithhint: 469, timesincorrect: 293, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 16, questionid: 91, timesasked: 1187,timescorrect: 193, timescorrectwithhint: 365, timesincorrect: 400, timesincorrectwithhint: 229},
{year: 2024, month: 7, day: 16, questionid: 92, timesasked: 1787,timescorrect: 620, timescorrectwithhint: 747, timesincorrect: 272, timesincorrectwithhint: 148},
{year: 2024, month: 7, day: 16, questionid: 93, timesasked: 1869,timescorrect: 598, timescorrectwithhint: 751, timesincorrect: 335, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 16, questionid: 94, timesasked: 1748,timescorrect: 338, timescorrectwithhint: 570, timesincorrect: 535, timesincorrectwithhint: 305},
{year: 2024, month: 7, day: 16, questionid: 95, timesasked: 1391,timescorrect: 253, timescorrectwithhint: 443, timesincorrect: 442, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 16, questionid: 96, timesasked: 1063,timescorrect: 236, timescorrectwithhint: 365, timesincorrect: 295, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 16, questionid: 97, timesasked: 1721,timescorrect: 361, timescorrectwithhint: 578, timesincorrect: 499, timesincorrectwithhint: 283},
{year: 2024, month: 7, day: 17, questionid: 1, timesasked: 1061,timescorrect: 197, timescorrectwithhint: 341, timesincorrect: 332, timesincorrectwithhint: 191},
{year: 2024, month: 7, day: 17, questionid: 2, timesasked: 1809,timescorrect: 365, timescorrectwithhint: 599, timesincorrect: 538, timesincorrectwithhint: 307},
{year: 2024, month: 7, day: 17, questionid: 3, timesasked: 1726,timescorrect: 281, timescorrectwithhint: 531, timesincorrect: 581, timesincorrectwithhint: 333},
{year: 2024, month: 7, day: 17, questionid: 4, timesasked: 1159,timescorrect: 209, timescorrectwithhint: 369, timesincorrect: 369, timesincorrectwithhint: 212},
{year: 2024, month: 7, day: 17, questionid: 5, timesasked: 1297,timescorrect: 367, timescorrectwithhint: 493, timesincorrect: 280, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 17, questionid: 6, timesasked: 1567,timescorrect: 454, timescorrectwithhint: 601, timesincorrect: 329, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 17, questionid: 7, timesasked: 1560,timescorrect: 533, timescorrectwithhint: 647, timesincorrect: 246, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 17, questionid: 8, timesasked: 1345,timescorrect: 494, timescorrectwithhint: 579, timesincorrect: 178, timesincorrectwithhint: 94},
{year: 2024, month: 7, day: 17, questionid: 9, timesasked: 1619,timescorrect: 597, timescorrectwithhint: 698, timesincorrect: 212, timesincorrectwithhint: 112},
{year: 2024, month: 7, day: 17, questionid: 10, timesasked: 1017,timescorrect: 339, timescorrectwithhint: 417, timesincorrect: 169, timesincorrectwithhint: 92},
{year: 2024, month: 7, day: 17, questionid: 11, timesasked: 1698,timescorrect: 679, timescorrectwithhint: 764, timesincorrect: 169, timesincorrectwithhint: 86},
{year: 2024, month: 7, day: 17, questionid: 12, timesasked: 1969,timescorrect: 705, timescorrectwithhint: 836, timesincorrect: 278, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 17, questionid: 13, timesasked: 1438,timescorrect: 264, timescorrectwithhint: 460, timesincorrect: 454, timesincorrectwithhint: 260},
{year: 2024, month: 7, day: 17, questionid: 14, timesasked: 1501,timescorrect: 477, timescorrectwithhint: 601, timesincorrect: 272, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 17, questionid: 15, timesasked: 1709,timescorrect: 429, timescorrectwithhint: 616, timesincorrect: 425, timesincorrectwithhint: 239},
{year: 2024, month: 7, day: 17, questionid: 16, timesasked: 1731,timescorrect: 668, timescorrectwithhint: 764, timesincorrect: 196, timesincorrectwithhint: 103},
{year: 2024, month: 7, day: 17, questionid: 17, timesasked: 1783,timescorrect: 376, timescorrectwithhint: 600, timesincorrect: 515, timesincorrectwithhint: 292},
{year: 2024, month: 7, day: 17, questionid: 18, timesasked: 1298,timescorrect: 316, timescorrectwithhint: 462, timesincorrect: 332, timesincorrectwithhint: 188},
{year: 2024, month: 7, day: 17, questionid: 19, timesasked: 1429,timescorrect: 224, timescorrectwithhint: 434, timesincorrect: 489, timesincorrectwithhint: 282},
{year: 2024, month: 7, day: 17, questionid: 20, timesasked: 1966,timescorrect: 760, timescorrectwithhint: 869, timesincorrect: 222, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 17, questionid: 21, timesasked: 1008,timescorrect: 204, timescorrectwithhint: 334, timesincorrect: 299, timesincorrectwithhint: 171},
{year: 2024, month: 7, day: 17, questionid: 22, timesasked: 1251,timescorrect: 446, timescorrectwithhint: 530, timesincorrect: 179, timesincorrectwithhint: 96},
{year: 2024, month: 7, day: 17, questionid: 23, timesasked: 1095,timescorrect: 210, timescorrectwithhint: 356, timesincorrect: 337, timesincorrectwithhint: 192},
{year: 2024, month: 7, day: 17, questionid: 24, timesasked: 1389,timescorrect: 422, timescorrectwithhint: 545, timesincorrect: 272, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 17, questionid: 25, timesasked: 1712,timescorrect: 274, timescorrectwithhint: 524, timesincorrect: 581, timesincorrectwithhint: 333},
{year: 2024, month: 7, day: 17, questionid: 26, timesasked: 1084,timescorrect: 285, timescorrectwithhint: 399, timesincorrect: 256, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 17, questionid: 27, timesasked: 1215,timescorrect: 352, timescorrectwithhint: 466, timesincorrect: 254, timesincorrectwithhint: 143},
{year: 2024, month: 7, day: 17, questionid: 28, timesasked: 1460,timescorrect: 493, timescorrectwithhint: 602, timesincorrect: 236, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 17, questionid: 29, timesasked: 1595,timescorrect: 505, timescorrectwithhint: 638, timesincorrect: 292, timesincorrectwithhint: 160},
{year: 2024, month: 7, day: 17, questionid: 30, timesasked: 1804,timescorrect: 577, timescorrectwithhint: 725, timesincorrect: 324, timesincorrectwithhint: 178},
{year: 2024, month: 7, day: 17, questionid: 31, timesasked: 1174,timescorrect: 230, timescorrectwithhint: 384, timesincorrect: 356, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 17, questionid: 32, timesasked: 1153,timescorrect: 189, timescorrectwithhint: 355, timesincorrect: 386, timesincorrectwithhint: 223},
{year: 2024, month: 7, day: 17, questionid: 33, timesasked: 1611,timescorrect: 287, timescorrectwithhint: 510, timesincorrect: 518, timesincorrectwithhint: 296},
{year: 2024, month: 7, day: 17, questionid: 34, timesasked: 1092,timescorrect: 169, timescorrectwithhint: 331, timesincorrect: 376, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 17, questionid: 35, timesasked: 1193,timescorrect: 185, timescorrectwithhint: 361, timesincorrect: 410, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 17, questionid: 36, timesasked: 1540,timescorrect: 456, timescorrectwithhint: 597, timesincorrect: 313, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 17, questionid: 37, timesasked: 1421,timescorrect: 385, timescorrectwithhint: 529, timesincorrect: 325, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 17, questionid: 38, timesasked: 1174,timescorrect: 345, timescorrectwithhint: 453, timesincorrect: 241, timesincorrectwithhint: 135},
{year: 2024, month: 7, day: 17, questionid: 39, timesasked: 1904,timescorrect: 732, timescorrectwithhint: 839, timesincorrect: 219, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 17, questionid: 40, timesasked: 1353,timescorrect: 349, timescorrectwithhint: 493, timesincorrect: 327, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 17, questionid: 41, timesasked: 1151,timescorrect: 291, timescorrectwithhint: 416, timesincorrect: 283, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 17, questionid: 42, timesasked: 1284,timescorrect: 461, timescorrectwithhint: 546, timesincorrect: 180, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 17, questionid: 43, timesasked: 1040,timescorrect: 252, timescorrectwithhint: 369, timesincorrect: 267, timesincorrectwithhint: 152},
{year: 2024, month: 7, day: 17, questionid: 44, timesasked: 1786,timescorrect: 613, timescorrectwithhint: 743, timesincorrect: 279, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 17, questionid: 45, timesasked: 1578,timescorrect: 359, timescorrectwithhint: 547, timesincorrect: 429, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 17, questionid: 46, timesasked: 1546,timescorrect: 473, timescorrectwithhint: 608, timesincorrect: 299, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 17, questionid: 47, timesasked: 1044,timescorrect: 163, timescorrectwithhint: 317, timesincorrect: 358, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 17, questionid: 48, timesasked: 1275,timescorrect: 430, timescorrectwithhint: 525, timesincorrect: 207, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 17, questionid: 49, timesasked: 1015,timescorrect: 361, timescorrectwithhint: 430, timesincorrect: 145, timesincorrectwithhint: 79},
{year: 2024, month: 7, day: 17, questionid: 50, timesasked: 1512,timescorrect: 278, timescorrectwithhint: 484, timesincorrect: 477, timesincorrectwithhint: 273},
{year: 2024, month: 7, day: 17, questionid: 51, timesasked: 1609,timescorrect: 257, timescorrectwithhint: 492, timesincorrect: 546, timesincorrectwithhint: 314},
{year: 2024, month: 7, day: 17, questionid: 52, timesasked: 1989,timescorrect: 509, timescorrectwithhint: 723, timesincorrect: 485, timesincorrectwithhint: 272},
{year: 2024, month: 7, day: 17, questionid: 53, timesasked: 1618,timescorrect: 588, timescorrectwithhint: 692, timesincorrect: 220, timesincorrectwithhint: 118},
{year: 2024, month: 7, day: 17, questionid: 54, timesasked: 1352,timescorrect: 414, timescorrectwithhint: 532, timesincorrect: 261, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 17, questionid: 55, timesasked: 1091,timescorrect: 327, timescorrectwithhint: 425, timesincorrect: 218, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 17, questionid: 56, timesasked: 1820,timescorrect: 510, timescorrectwithhint: 688, timesincorrect: 399, timesincorrectwithhint: 223},
{year: 2024, month: 7, day: 17, questionid: 57, timesasked: 1345,timescorrect: 237, timescorrectwithhint: 424, timesincorrect: 435, timesincorrectwithhint: 249},
{year: 2024, month: 7, day: 17, questionid: 58, timesasked: 1777,timescorrect: 301, timescorrectwithhint: 554, timesincorrect: 587, timesincorrectwithhint: 335},
{year: 2024, month: 7, day: 17, questionid: 59, timesasked: 1287,timescorrect: 303, timescorrectwithhint: 452, timesincorrect: 339, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 17, questionid: 60, timesasked: 1545,timescorrect: 517, timescorrectwithhint: 635, timesincorrect: 254, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 17, questionid: 61, timesasked: 1601,timescorrect: 489, timescorrectwithhint: 629, timesincorrect: 311, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 17, questionid: 62, timesasked: 1069,timescorrect: 317, timescorrectwithhint: 414, timesincorrect: 217, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 17, questionid: 63, timesasked: 1088,timescorrect: 166, timescorrectwithhint: 328, timesincorrect: 377, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 17, questionid: 64, timesasked: 1814,timescorrect: 316, timescorrectwithhint: 570, timesincorrect: 590, timesincorrectwithhint: 338},
{year: 2024, month: 7, day: 17, questionid: 65, timesasked: 1575,timescorrect: 435, timescorrectwithhint: 592, timesincorrect: 351, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 17, questionid: 66, timesasked: 1027,timescorrect: 301, timescorrectwithhint: 396, timesincorrect: 211, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 17, questionid: 67, timesasked: 1268,timescorrect: 490, timescorrectwithhint: 560, timesincorrect: 143, timesincorrectwithhint: 75},
{year: 2024, month: 7, day: 17, questionid: 68, timesasked: 1502,timescorrect: 517, timescorrectwithhint: 625, timesincorrect: 233, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 17, questionid: 69, timesasked: 1190,timescorrect: 378, timescorrectwithhint: 477, timesincorrect: 216, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 17, questionid: 70, timesasked: 1565,timescorrect: 470, timescorrectwithhint: 610, timesincorrect: 312, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 17, questionid: 71, timesasked: 1304,timescorrect: 391, timescorrectwithhint: 508, timesincorrect: 260, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 17, questionid: 72, timesasked: 1031,timescorrect: 309, timescorrectwithhint: 402, timesincorrect: 206, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 17, questionid: 73, timesasked: 1836,timescorrect: 425, timescorrectwithhint: 640, timesincorrect: 492, timesincorrectwithhint: 279},
{year: 2024, month: 7, day: 17, questionid: 74, timesasked: 1915,timescorrect: 726, timescorrectwithhint: 837, timesincorrect: 231, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 17, questionid: 75, timesasked: 1402,timescorrect: 410, timescorrectwithhint: 540, timesincorrect: 290, timesincorrectwithhint: 162},
{year: 2024, month: 7, day: 17, questionid: 76, timesasked: 1983,timescorrect: 704, timescorrectwithhint: 839, timesincorrect: 286, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 17, questionid: 77, timesasked: 1113,timescorrect: 355, timescorrectwithhint: 446, timesincorrect: 201, timesincorrectwithhint: 111},
{year: 2024, month: 7, day: 17, questionid: 78, timesasked: 1787,timescorrect: 505, timescorrectwithhint: 678, timesincorrect: 387, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 17, questionid: 79, timesasked: 1198,timescorrect: 405, timescorrectwithhint: 494, timesincorrect: 193, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 17, questionid: 80, timesasked: 1663,timescorrect: 514, timescorrectwithhint: 657, timesincorrect: 317, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 17, questionid: 81, timesasked: 1362,timescorrect: 405, timescorrectwithhint: 529, timesincorrect: 275, timesincorrectwithhint: 153},
{year: 2024, month: 7, day: 17, questionid: 82, timesasked: 1020,timescorrect: 158, timescorrectwithhint: 309, timesincorrect: 351, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 17, questionid: 83, timesasked: 1445,timescorrect: 326, timescorrectwithhint: 499, timesincorrect: 395, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 17, questionid: 84, timesasked: 1854,timescorrect: 736, timescorrectwithhint: 831, timesincorrect: 190, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 17, questionid: 85, timesasked: 1358,timescorrect: 274, timescorrectwithhint: 449, timesincorrect: 404, timesincorrectwithhint: 231},
{year: 2024, month: 7, day: 17, questionid: 86, timesasked: 1408,timescorrect: 549, timescorrectwithhint: 625, timesincorrect: 154, timesincorrectwithhint: 80},
{year: 2024, month: 7, day: 17, questionid: 87, timesasked: 1377,timescorrect: 492, timescorrectwithhint: 584, timesincorrect: 195, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 17, questionid: 88, timesasked: 1228,timescorrect: 282, timescorrectwithhint: 427, timesincorrect: 331, timesincorrectwithhint: 188},
{year: 2024, month: 7, day: 17, questionid: 89, timesasked: 1075,timescorrect: 318, timescorrectwithhint: 417, timesincorrect: 218, timesincorrectwithhint: 122},
{year: 2024, month: 7, day: 17, questionid: 90, timesasked: 1158,timescorrect: 256, timescorrectwithhint: 397, timesincorrect: 322, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 17, questionid: 91, timesasked: 1968,timescorrect: 383, timescorrectwithhint: 643, timesincorrect: 600, timesincorrectwithhint: 342},
{year: 2024, month: 7, day: 17, questionid: 92, timesasked: 1951,timescorrect: 552, timescorrectwithhint: 740, timesincorrect: 423, timesincorrectwithhint: 236},
{year: 2024, month: 7, day: 17, questionid: 93, timesasked: 1519,timescorrect: 602, timescorrectwithhint: 680, timesincorrect: 157, timesincorrectwithhint: 80},
{year: 2024, month: 7, day: 17, questionid: 94, timesasked: 1307,timescorrect: 419, timescorrectwithhint: 525, timesincorrect: 234, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 17, questionid: 95, timesasked: 1259,timescorrect: 456, timescorrectwithhint: 538, timesincorrect: 172, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 17, questionid: 96, timesasked: 1267,timescorrect: 266, timescorrectwithhint: 425, timesincorrect: 367, timesincorrectwithhint: 209},
{year: 2024, month: 7, day: 17, questionid: 97, timesasked: 1492,timescorrect: 524, timescorrectwithhint: 627, timesincorrect: 221, timesincorrectwithhint: 120},
{year: 2024, month: 7, day: 18, questionid: 1, timesasked: 1501,timescorrect: 378, timescorrectwithhint: 542, timesincorrect: 372, timesincorrectwithhint: 209},
{year: 2024, month: 7, day: 18, questionid: 2, timesasked: 1159,timescorrect: 344, timescorrectwithhint: 450, timesincorrect: 234, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 18, questionid: 3, timesasked: 1377,timescorrect: 337, timescorrectwithhint: 491, timesincorrect: 350, timesincorrectwithhint: 199},
{year: 2024, month: 7, day: 18, questionid: 4, timesasked: 1148,timescorrect: 409, timescorrectwithhint: 486, timesincorrect: 164, timesincorrectwithhint: 89},
{year: 2024, month: 7, day: 18, questionid: 5, timesasked: 1197,timescorrect: 450, timescorrectwithhint: 521, timesincorrect: 147, timesincorrectwithhint: 79},
{year: 2024, month: 7, day: 18, questionid: 6, timesasked: 1700,timescorrect: 547, timescorrectwithhint: 685, timesincorrect: 302, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 18, questionid: 7, timesasked: 1624,timescorrect: 283, timescorrectwithhint: 510, timesincorrect: 528, timesincorrectwithhint: 303},
{year: 2024, month: 7, day: 18, questionid: 8, timesasked: 1326,timescorrect: 422, timescorrectwithhint: 531, timesincorrect: 240, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 18, questionid: 9, timesasked: 1077,timescorrect: 220, timescorrectwithhint: 358, timesincorrect: 317, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 18, questionid: 10, timesasked: 1573,timescorrect: 278, timescorrectwithhint: 497, timesincorrect: 508, timesincorrectwithhint: 290},
{year: 2024, month: 7, day: 18, questionid: 11, timesasked: 1787,timescorrect: 386, timescorrectwithhint: 607, timesincorrect: 506, timesincorrectwithhint: 288},
{year: 2024, month: 7, day: 18, questionid: 12, timesasked: 1849,timescorrect: 617, timescorrectwithhint: 758, timesincorrect: 307, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 18, questionid: 13, timesasked: 1551,timescorrect: 579, timescorrectwithhint: 673, timesincorrect: 195, timesincorrectwithhint: 104},
{year: 2024, month: 7, day: 18, questionid: 14, timesasked: 1458,timescorrect: 340, timescorrectwithhint: 510, timesincorrect: 388, timesincorrectwithhint: 220},
{year: 2024, month: 7, day: 18, questionid: 15, timesasked: 1471,timescorrect: 437, timescorrectwithhint: 571, timesincorrect: 298, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 18, questionid: 16, timesasked: 1226,timescorrect: 198, timescorrectwithhint: 376, timesincorrect: 414, timesincorrectwithhint: 238},
{year: 2024, month: 7, day: 18, questionid: 17, timesasked: 1657,timescorrect: 388, timescorrectwithhint: 580, timesincorrect: 440, timesincorrectwithhint: 249},
{year: 2024, month: 7, day: 18, questionid: 18, timesasked: 1585,timescorrect: 439, timescorrectwithhint: 596, timesincorrect: 352, timesincorrectwithhint: 198},
{year: 2024, month: 7, day: 18, questionid: 19, timesasked: 1467,timescorrect: 302, timescorrectwithhint: 489, timesincorrect: 430, timesincorrectwithhint: 246},
{year: 2024, month: 7, day: 18, questionid: 20, timesasked: 1980,timescorrect: 713, timescorrectwithhint: 843, timesincorrect: 276, timesincorrectwithhint: 148},
{year: 2024, month: 7, day: 18, questionid: 21, timesasked: 1766,timescorrect: 588, timescorrectwithhint: 723, timesincorrect: 294, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 18, questionid: 22, timesasked: 1219,timescorrect: 202, timescorrectwithhint: 377, timesincorrect: 406, timesincorrectwithhint: 234},
{year: 2024, month: 7, day: 18, questionid: 23, timesasked: 1473,timescorrect: 222, timescorrectwithhint: 442, timesincorrect: 513, timesincorrectwithhint: 296},
{year: 2024, month: 7, day: 18, questionid: 24, timesasked: 1109,timescorrect: 219, timescorrectwithhint: 364, timesincorrect: 335, timesincorrectwithhint: 191},
{year: 2024, month: 7, day: 18, questionid: 25, timesasked: 1543,timescorrect: 614, timescorrectwithhint: 692, timesincorrect: 156, timesincorrectwithhint: 81},
{year: 2024, month: 7, day: 18, questionid: 26, timesasked: 1015,timescorrect: 375, timescorrectwithhint: 438, timesincorrect: 131, timesincorrectwithhint: 71},
{year: 2024, month: 7, day: 18, questionid: 27, timesasked: 1053,timescorrect: 379, timescorrectwithhint: 448, timesincorrect: 146, timesincorrectwithhint: 80},
{year: 2024, month: 7, day: 18, questionid: 28, timesasked: 1215,timescorrect: 278, timescorrectwithhint: 422, timesincorrect: 328, timesincorrectwithhint: 187},
{year: 2024, month: 7, day: 18, questionid: 29, timesasked: 1867,timescorrect: 297, timescorrectwithhint: 570, timesincorrect: 635, timesincorrectwithhint: 365},
{year: 2024, month: 7, day: 18, questionid: 30, timesasked: 1682,timescorrect: 416, timescorrectwithhint: 603, timesincorrect: 424, timesincorrectwithhint: 239},
{year: 2024, month: 7, day: 18, questionid: 31, timesasked: 1120,timescorrect: 327, timescorrectwithhint: 431, timesincorrect: 232, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 18, questionid: 32, timesasked: 1389,timescorrect: 236, timescorrectwithhint: 433, timesincorrect: 458, timesincorrectwithhint: 262},
{year: 2024, month: 7, day: 18, questionid: 33, timesasked: 1981,timescorrect: 754, timescorrectwithhint: 868, timesincorrect: 235, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 18, questionid: 34, timesasked: 1853,timescorrect: 684, timescorrectwithhint: 799, timesincorrect: 242, timesincorrectwithhint: 128},
{year: 2024, month: 7, day: 18, questionid: 35, timesasked: 1525,timescorrect: 379, timescorrectwithhint: 547, timesincorrect: 383, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 18, questionid: 36, timesasked: 1796,timescorrect: 516, timescorrectwithhint: 686, timesincorrect: 381, timesincorrectwithhint: 213},
{year: 2024, month: 7, day: 18, questionid: 37, timesasked: 1371,timescorrect: 242, timescorrectwithhint: 433, timesincorrect: 442, timesincorrectwithhint: 254},
{year: 2024, month: 7, day: 18, questionid: 38, timesasked: 1206,timescorrect: 379, timescorrectwithhint: 481, timesincorrect: 223, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 18, questionid: 39, timesasked: 1879,timescorrect: 315, timescorrectwithhint: 584, timesincorrect: 623, timesincorrectwithhint: 357},
{year: 2024, month: 7, day: 18, questionid: 40, timesasked: 1397,timescorrect: 298, timescorrectwithhint: 472, timesincorrect: 400, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 18, questionid: 41, timesasked: 1516,timescorrect: 432, timescorrectwithhint: 577, timesincorrect: 325, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 18, questionid: 42, timesasked: 1744,timescorrect: 585, timescorrectwithhint: 717, timesincorrect: 286, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 18, questionid: 43, timesasked: 1071,timescorrect: 268, timescorrectwithhint: 385, timesincorrect: 267, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 18, questionid: 44, timesasked: 1407,timescorrect: 455, timescorrectwithhint: 568, timesincorrect: 248, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 18, questionid: 45, timesasked: 1465,timescorrect: 305, timescorrectwithhint: 490, timesincorrect: 427, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 18, questionid: 46, timesasked: 1646,timescorrect: 614, timescorrectwithhint: 714, timesincorrect: 208, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 18, questionid: 47, timesasked: 1891,timescorrect: 407, timescorrectwithhint: 641, timesincorrect: 538, timesincorrectwithhint: 305},
{year: 2024, month: 7, day: 18, questionid: 48, timesasked: 1345,timescorrect: 423, timescorrectwithhint: 536, timesincorrect: 248, timesincorrectwithhint: 138},
{year: 2024, month: 7, day: 18, questionid: 49, timesasked: 1353,timescorrect: 348, timescorrectwithhint: 493, timesincorrect: 328, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 18, questionid: 50, timesasked: 1098,timescorrect: 421, timescorrectwithhint: 483, timesincorrect: 127, timesincorrectwithhint: 67},
{year: 2024, month: 7, day: 18, questionid: 51, timesasked: 1788,timescorrect: 695, timescorrectwithhint: 793, timesincorrect: 198, timesincorrectwithhint: 102},
{year: 2024, month: 7, day: 18, questionid: 52, timesasked: 1943,timescorrect: 458, timescorrectwithhint: 683, timesincorrect: 513, timesincorrectwithhint: 289},
{year: 2024, month: 7, day: 18, questionid: 53, timesasked: 1425,timescorrect: 263, timescorrectwithhint: 457, timesincorrect: 448, timesincorrectwithhint: 257},
{year: 2024, month: 7, day: 18, questionid: 54, timesasked: 1798,timescorrect: 496, timescorrectwithhint: 675, timesincorrect: 402, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 18, questionid: 55, timesasked: 1982,timescorrect: 415, timescorrectwithhint: 665, timesincorrect: 575, timesincorrectwithhint: 327},
{year: 2024, month: 7, day: 18, questionid: 56, timesasked: 1236,timescorrect: 373, timescorrectwithhint: 483, timesincorrect: 244, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 18, questionid: 57, timesasked: 1792,timescorrect: 465, timescorrectwithhint: 655, timesincorrect: 430, timesincorrectwithhint: 242},
{year: 2024, month: 7, day: 18, questionid: 58, timesasked: 1460,timescorrect: 355, timescorrectwithhint: 520, timesincorrect: 374, timesincorrectwithhint: 211},
{year: 2024, month: 7, day: 18, questionid: 59, timesasked: 1874,timescorrect: 405, timescorrectwithhint: 636, timesincorrect: 531, timesincorrectwithhint: 302},
{year: 2024, month: 7, day: 18, questionid: 60, timesasked: 1166,timescorrect: 296, timescorrectwithhint: 422, timesincorrect: 286, timesincorrectwithhint: 162},
{year: 2024, month: 7, day: 18, questionid: 61, timesasked: 1728,timescorrect: 588, timescorrectwithhint: 715, timesincorrect: 275, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 18, questionid: 62, timesasked: 1254,timescorrect: 426, timescorrectwithhint: 519, timesincorrect: 200, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 18, questionid: 63, timesasked: 1109,timescorrect: 367, timescorrectwithhint: 453, timesincorrect: 186, timesincorrectwithhint: 103},
{year: 2024, month: 7, day: 18, questionid: 64, timesasked: 1338,timescorrect: 424, timescorrectwithhint: 535, timesincorrect: 244, timesincorrectwithhint: 135},
{year: 2024, month: 7, day: 18, questionid: 65, timesasked: 1965,timescorrect: 652, timescorrectwithhint: 804, timesincorrect: 329, timesincorrectwithhint: 180},
{year: 2024, month: 7, day: 18, questionid: 66, timesasked: 1698,timescorrect: 503, timescorrectwithhint: 658, timesincorrect: 345, timesincorrectwithhint: 192},
{year: 2024, month: 7, day: 18, questionid: 67, timesasked: 1159,timescorrect: 349, timescorrectwithhint: 453, timesincorrect: 229, timesincorrectwithhint: 128},
{year: 2024, month: 7, day: 18, questionid: 68, timesasked: 1320,timescorrect: 387, timescorrectwithhint: 509, timesincorrect: 272, timesincorrectwithhint: 152},
{year: 2024, month: 7, day: 18, questionid: 69, timesasked: 1712,timescorrect: 321, timescorrectwithhint: 552, timesincorrect: 534, timesincorrectwithhint: 305},
{year: 2024, month: 7, day: 18, questionid: 70, timesasked: 1595,timescorrect: 255, timescorrectwithhint: 488, timesincorrect: 542, timesincorrectwithhint: 310},
{year: 2024, month: 7, day: 18, questionid: 71, timesasked: 1943,timescorrect: 388, timescorrectwithhint: 641, timesincorrect: 582, timesincorrectwithhint: 332},
{year: 2024, month: 7, day: 18, questionid: 72, timesasked: 1517,timescorrect: 439, timescorrectwithhint: 582, timesincorrect: 318, timesincorrectwithhint: 178},
{year: 2024, month: 7, day: 18, questionid: 73, timesasked: 1385,timescorrect: 482, timescorrectwithhint: 580, timesincorrect: 210, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 18, questionid: 74, timesasked: 1262,timescorrect: 330, timescorrectwithhint: 463, timesincorrect: 300, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 18, questionid: 75, timesasked: 1677,timescorrect: 421, timescorrectwithhint: 604, timesincorrect: 417, timesincorrectwithhint: 235},
{year: 2024, month: 7, day: 18, questionid: 76, timesasked: 1065,timescorrect: 305, timescorrectwithhint: 407, timesincorrect: 226, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 18, questionid: 77, timesasked: 1804,timescorrect: 718, timescorrectwithhint: 809, timesincorrect: 183, timesincorrectwithhint: 94},
{year: 2024, month: 7, day: 18, questionid: 78, timesasked: 1483,timescorrect: 502, timescorrectwithhint: 612, timesincorrect: 239, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 18, questionid: 79, timesasked: 1345,timescorrect: 513, timescorrectwithhint: 590, timesincorrect: 159, timesincorrectwithhint: 83},
{year: 2024, month: 7, day: 18, questionid: 80, timesasked: 1566,timescorrect: 521, timescorrectwithhint: 641, timesincorrect: 261, timesincorrectwithhint: 143},
{year: 2024, month: 7, day: 18, questionid: 81, timesasked: 1204,timescorrect: 409, timescorrectwithhint: 498, timesincorrect: 192, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 18, questionid: 82, timesasked: 1097,timescorrect: 191, timescorrectwithhint: 345, timesincorrect: 357, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 18, questionid: 83, timesasked: 1910,timescorrect: 391, timescorrectwithhint: 635, timesincorrect: 563, timesincorrectwithhint: 321},
{year: 2024, month: 7, day: 18, questionid: 84, timesasked: 1356,timescorrect: 334, timescorrectwithhint: 485, timesincorrect: 343, timesincorrectwithhint: 194},
{year: 2024, month: 7, day: 18, questionid: 85, timesasked: 1995,timescorrect: 605, timescorrectwithhint: 782, timesincorrect: 391, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 18, questionid: 86, timesasked: 1710,timescorrect: 557, timescorrectwithhint: 693, timesincorrect: 297, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 18, questionid: 87, timesasked: 1701,timescorrect: 379, timescorrectwithhint: 584, timesincorrect: 471, timesincorrectwithhint: 267},
{year: 2024, month: 7, day: 18, questionid: 88, timesasked: 1713,timescorrect: 470, timescorrectwithhint: 641, timesincorrect: 386, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 18, questionid: 89, timesasked: 1468,timescorrect: 320, timescorrectwithhint: 500, timesincorrect: 413, timesincorrectwithhint: 235},
{year: 2024, month: 7, day: 18, questionid: 90, timesasked: 1744,timescorrect: 559, timescorrectwithhint: 702, timesincorrect: 312, timesincorrectwithhint: 171},
{year: 2024, month: 7, day: 18, questionid: 91, timesasked: 1865,timescorrect: 447, timescorrectwithhint: 660, timesincorrect: 484, timesincorrectwithhint: 274},
{year: 2024, month: 7, day: 18, questionid: 92, timesasked: 1314,timescorrect: 207, timescorrectwithhint: 400, timesincorrect: 449, timesincorrectwithhint: 258},
{year: 2024, month: 7, day: 18, questionid: 93, timesasked: 1482,timescorrect: 470, timescorrectwithhint: 593, timesincorrect: 270, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 18, questionid: 94, timesasked: 1220,timescorrect: 449, timescorrectwithhint: 525, timesincorrect: 160, timesincorrectwithhint: 86},
{year: 2024, month: 7, day: 18, questionid: 95, timesasked: 1523,timescorrect: 494, timescorrectwithhint: 616, timesincorrect: 266, timesincorrectwithhint: 147},
{year: 2024, month: 7, day: 18, questionid: 96, timesasked: 1587,timescorrect: 595, timescorrectwithhint: 690, timesincorrect: 197, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 18, questionid: 97, timesasked: 1807,timescorrect: 323, timescorrectwithhint: 573, timesincorrect: 580, timesincorrectwithhint: 331},
{year: 2024, month: 7, day: 19, questionid: 1, timesasked: 1366,timescorrect: 309, timescorrectwithhint: 472, timesincorrect: 373, timesincorrectwithhint: 212},
{year: 2024, month: 7, day: 19, questionid: 2, timesasked: 1432,timescorrect: 412, timescorrectwithhint: 548, timesincorrect: 303, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 19, questionid: 3, timesasked: 1466,timescorrect: 351, timescorrectwithhint: 518, timesincorrect: 381, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 19, questionid: 4, timesasked: 1829,timescorrect: 605, timescorrectwithhint: 747, timesincorrect: 308, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 19, questionid: 5, timesasked: 1419,timescorrect: 341, timescorrectwithhint: 502, timesincorrect: 368, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 19, questionid: 6, timesasked: 1372,timescorrect: 433, timescorrectwithhint: 548, timesincorrect: 252, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 19, questionid: 7, timesasked: 1326,timescorrect: 492, timescorrectwithhint: 574, timesincorrect: 170, timesincorrectwithhint: 90},
{year: 2024, month: 7, day: 19, questionid: 8, timesasked: 1911,timescorrect: 315, timescorrectwithhint: 590, timesincorrect: 639, timesincorrectwithhint: 367},
{year: 2024, month: 7, day: 19, questionid: 9, timesasked: 1708,timescorrect: 399, timescorrectwithhint: 598, timesincorrect: 454, timesincorrectwithhint: 257},
{year: 2024, month: 7, day: 19, questionid: 10, timesasked: 1526,timescorrect: 345, timescorrectwithhint: 527, timesincorrect: 417, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 19, questionid: 11, timesasked: 1819,timescorrect: 576, timescorrectwithhint: 727, timesincorrect: 333, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 19, questionid: 12, timesasked: 1431,timescorrect: 221, timescorrectwithhint: 433, timesincorrect: 493, timesincorrectwithhint: 284},
{year: 2024, month: 7, day: 19, questionid: 13, timesasked: 1135,timescorrect: 259, timescorrectwithhint: 394, timesincorrect: 307, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 19, questionid: 14, timesasked: 1367,timescorrect: 237, timescorrectwithhint: 429, timesincorrect: 445, timesincorrectwithhint: 256},
{year: 2024, month: 7, day: 19, questionid: 15, timesasked: 1980,timescorrect: 732, timescorrectwithhint: 855, timesincorrect: 257, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 19, questionid: 16, timesasked: 1248,timescorrect: 368, timescorrectwithhint: 483, timesincorrect: 255, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 19, questionid: 17, timesasked: 1343,timescorrect: 254, timescorrectwithhint: 434, timesincorrect: 417, timesincorrectwithhint: 238},
{year: 2024, month: 7, day: 19, questionid: 18, timesasked: 1453,timescorrect: 413, timescorrectwithhint: 553, timesincorrect: 312, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 19, questionid: 19, timesasked: 1227,timescorrect: 397, timescorrectwithhint: 496, timesincorrect: 215, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 19, questionid: 20, timesasked: 1031,timescorrect: 191, timescorrectwithhint: 331, timesincorrect: 324, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 19, questionid: 21, timesasked: 1041,timescorrect: 378, timescorrectwithhint: 445, timesincorrect: 142, timesincorrectwithhint: 76},
{year: 2024, month: 7, day: 19, questionid: 22, timesasked: 1314,timescorrect: 411, timescorrectwithhint: 522, timesincorrect: 245, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 19, questionid: 23, timesasked: 1254,timescorrect: 390, timescorrectwithhint: 497, timesincorrect: 236, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 19, questionid: 24, timesasked: 1610,timescorrect: 454, timescorrectwithhint: 610, timesincorrect: 350, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 19, questionid: 25, timesasked: 1854,timescorrect: 576, timescorrectwithhint: 735, timesincorrect: 350, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 19, questionid: 26, timesasked: 1927,timescorrect: 293, timescorrectwithhint: 580, timesincorrect: 670, timesincorrectwithhint: 384},
{year: 2024, month: 7, day: 19, questionid: 27, timesasked: 1210,timescorrect: 258, timescorrectwithhint: 409, timesincorrect: 346, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 19, questionid: 28, timesasked: 1125,timescorrect: 181, timescorrectwithhint: 345, timesincorrect: 381, timesincorrectwithhint: 218},
{year: 2024, month: 7, day: 19, questionid: 29, timesasked: 1031,timescorrect: 295, timescorrectwithhint: 393, timesincorrect: 219, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 19, questionid: 30, timesasked: 1783,timescorrect: 486, timescorrectwithhint: 666, timesincorrect: 404, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 19, questionid: 31, timesasked: 1164,timescorrect: 195, timescorrectwithhint: 362, timesincorrect: 386, timesincorrectwithhint: 221},
{year: 2024, month: 7, day: 19, questionid: 32, timesasked: 1503,timescorrect: 360, timescorrectwithhint: 531, timesincorrect: 391, timesincorrectwithhint: 221},
{year: 2024, month: 7, day: 19, questionid: 33, timesasked: 1712,timescorrect: 464, timescorrectwithhint: 638, timesincorrect: 391, timesincorrectwithhint: 219},
{year: 2024, month: 7, day: 19, questionid: 34, timesasked: 1159,timescorrect: 350, timescorrectwithhint: 453, timesincorrect: 229, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 19, questionid: 35, timesasked: 1792,timescorrect: 670, timescorrectwithhint: 778, timesincorrect: 225, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 19, questionid: 36, timesasked: 1758,timescorrect: 641, timescorrectwithhint: 753, timesincorrect: 237, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 19, questionid: 37, timesasked: 1146,timescorrect: 223, timescorrectwithhint: 374, timesincorrect: 349, timesincorrectwithhint: 200},
{year: 2024, month: 7, day: 19, questionid: 38, timesasked: 1979,timescorrect: 489, timescorrectwithhint: 709, timesincorrect: 500, timesincorrectwithhint: 281},
{year: 2024, month: 7, day: 19, questionid: 39, timesasked: 1171,timescorrect: 381, timescorrectwithhint: 475, timesincorrect: 203, timesincorrectwithhint: 112},
{year: 2024, month: 7, day: 19, questionid: 40, timesasked: 1710,timescorrect: 431, timescorrectwithhint: 618, timesincorrect: 423, timesincorrectwithhint: 238},
{year: 2024, month: 7, day: 19, questionid: 41, timesasked: 1476,timescorrect: 537, timescorrectwithhint: 632, timesincorrect: 200, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 19, questionid: 42, timesasked: 1958,timescorrect: 317, timescorrectwithhint: 601, timesincorrect: 661, timesincorrectwithhint: 379},
{year: 2024, month: 7, day: 19, questionid: 43, timesasked: 1330,timescorrect: 378, timescorrectwithhint: 506, timesincorrect: 286, timesincorrectwithhint: 160},
{year: 2024, month: 7, day: 19, questionid: 44, timesasked: 1050,timescorrect: 300, timescorrectwithhint: 400, timesincorrect: 224, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 19, questionid: 45, timesasked: 1578,timescorrect: 246, timescorrectwithhint: 479, timesincorrect: 542, timesincorrectwithhint: 311},
{year: 2024, month: 7, day: 19, questionid: 46, timesasked: 1065,timescorrect: 400, timescorrectwithhint: 463, timesincorrect: 132, timesincorrectwithhint: 70},
{year: 2024, month: 7, day: 19, questionid: 47, timesasked: 1524,timescorrect: 597, timescorrectwithhint: 678, timesincorrect: 164, timesincorrectwithhint: 85},
{year: 2024, month: 7, day: 19, questionid: 48, timesasked: 1859,timescorrect: 553, timescorrectwithhint: 722, timesincorrect: 376, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 19, questionid: 49, timesasked: 1658,timescorrect: 555, timescorrectwithhint: 681, timesincorrect: 273, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 19, questionid: 50, timesasked: 1101,timescorrect: 165, timescorrectwithhint: 330, timesincorrect: 384, timesincorrectwithhint: 222},
{year: 2024, month: 7, day: 19, questionid: 51, timesasked: 1513,timescorrect: 502, timescorrectwithhint: 619, timesincorrect: 253, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 19, questionid: 52, timesasked: 1559,timescorrect: 493, timescorrectwithhint: 623, timesincorrect: 285, timesincorrectwithhint: 158},
{year: 2024, month: 7, day: 19, questionid: 53, timesasked: 1813,timescorrect: 590, timescorrectwithhint: 735, timesincorrect: 315, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 19, questionid: 54, timesasked: 1761,timescorrect: 630, timescorrectwithhint: 748, timesincorrect: 249, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 19, questionid: 55, timesasked: 1946,timescorrect: 774, timescorrectwithhint: 873, timesincorrect: 198, timesincorrectwithhint: 101},
{year: 2024, month: 7, day: 19, questionid: 56, timesasked: 1212,timescorrect: 378, timescorrectwithhint: 481, timesincorrect: 227, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 19, questionid: 57, timesasked: 1255,timescorrect: 297, timescorrectwithhint: 442, timesincorrect: 330, timesincorrectwithhint: 186},
{year: 2024, month: 7, day: 19, questionid: 58, timesasked: 1549,timescorrect: 369, timescorrectwithhint: 546, timesincorrect: 405, timesincorrectwithhint: 229},
{year: 2024, month: 7, day: 19, questionid: 59, timesasked: 1764,timescorrect: 417, timescorrectwithhint: 621, timesincorrect: 464, timesincorrectwithhint: 262},
{year: 2024, month: 7, day: 19, questionid: 60, timesasked: 1738,timescorrect: 359, timescorrectwithhint: 580, timesincorrect: 509, timesincorrectwithhint: 290},
{year: 2024, month: 7, day: 19, questionid: 61, timesasked: 1843,timescorrect: 610, timescorrectwithhint: 753, timesincorrect: 310, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 19, questionid: 62, timesasked: 1269,timescorrect: 439, timescorrectwithhint: 530, timesincorrect: 194, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 19, questionid: 63, timesasked: 1298,timescorrect: 365, timescorrectwithhint: 491, timesincorrect: 283, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 19, questionid: 64, timesasked: 1811,timescorrect: 666, timescorrectwithhint: 780, timesincorrect: 238, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 19, questionid: 65, timesasked: 1301,timescorrect: 453, timescorrectwithhint: 545, timesincorrect: 196, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 19, questionid: 66, timesasked: 1860,timescorrect: 290, timescorrectwithhint: 565, timesincorrect: 639, timesincorrectwithhint: 366},
{year: 2024, month: 7, day: 19, questionid: 67, timesasked: 1293,timescorrect: 364, timescorrectwithhint: 490, timesincorrect: 282, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 19, questionid: 68, timesasked: 1364,timescorrect: 220, timescorrectwithhint: 418, timesincorrect: 461, timesincorrectwithhint: 265},
{year: 2024, month: 7, day: 19, questionid: 69, timesasked: 1937,timescorrect: 360, timescorrectwithhint: 623, timesincorrect: 608, timesincorrectwithhint: 346},
{year: 2024, month: 7, day: 19, questionid: 70, timesasked: 1602,timescorrect: 551, timescorrectwithhint: 667, timesincorrect: 249, timesincorrectwithhint: 135},
{year: 2024, month: 7, day: 19, questionid: 71, timesasked: 1236,timescorrect: 400, timescorrectwithhint: 499, timesincorrect: 217, timesincorrectwithhint: 120},
{year: 2024, month: 7, day: 19, questionid: 72, timesasked: 1886,timescorrect: 651, timescorrectwithhint: 787, timesincorrect: 291, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 19, questionid: 73, timesasked: 1466,timescorrect: 301, timescorrectwithhint: 488, timesincorrect: 431, timesincorrectwithhint: 246},
{year: 2024, month: 7, day: 19, questionid: 74, timesasked: 1508,timescorrect: 453, timescorrectwithhint: 588, timesincorrect: 300, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 19, questionid: 75, timesasked: 1735,timescorrect: 625, timescorrectwithhint: 739, timesincorrect: 242, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 19, questionid: 76, timesasked: 1260,timescorrect: 313, timescorrectwithhint: 452, timesincorrect: 316, timesincorrectwithhint: 179},
{year: 2024, month: 7, day: 19, questionid: 77, timesasked: 1112,timescorrect: 386, timescorrectwithhint: 465, timesincorrect: 169, timesincorrectwithhint: 92},
{year: 2024, month: 7, day: 19, questionid: 78, timesasked: 1643,timescorrect: 589, timescorrectwithhint: 698, timesincorrect: 231, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 19, questionid: 79, timesasked: 1628,timescorrect: 646, timescorrectwithhint: 729, timesincorrect: 167, timesincorrectwithhint: 86},
{year: 2024, month: 7, day: 19, questionid: 80, timesasked: 1384,timescorrect: 482, timescorrectwithhint: 580, timesincorrect: 209, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 19, questionid: 81, timesasked: 1380,timescorrect: 483, timescorrectwithhint: 580, timesincorrect: 206, timesincorrectwithhint: 111},
{year: 2024, month: 7, day: 19, questionid: 82, timesasked: 1525,timescorrect: 524, timescorrectwithhint: 635, timesincorrect: 237, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 19, questionid: 83, timesasked: 1445,timescorrect: 574, timescorrectwithhint: 648, timesincorrect: 147, timesincorrectwithhint: 76},
{year: 2024, month: 7, day: 19, questionid: 84, timesasked: 1401,timescorrect: 377, timescorrectwithhint: 520, timesincorrect: 323, timesincorrectwithhint: 181},
{year: 2024, month: 7, day: 19, questionid: 85, timesasked: 1173,timescorrect: 399, timescorrectwithhint: 485, timesincorrect: 187, timesincorrectwithhint: 102},
{year: 2024, month: 7, day: 19, questionid: 86, timesasked: 1752,timescorrect: 303, timescorrectwithhint: 549, timesincorrect: 572, timesincorrectwithhint: 328},
{year: 2024, month: 7, day: 19, questionid: 87, timesasked: 1667,timescorrect: 457, timescorrectwithhint: 624, timesincorrect: 375, timesincorrectwithhint: 211},
{year: 2024, month: 7, day: 19, questionid: 88, timesasked: 1974,timescorrect: 662, timescorrectwithhint: 812, timesincorrect: 324, timesincorrectwithhint: 176},
{year: 2024, month: 7, day: 19, questionid: 89, timesasked: 1808,timescorrect: 610, timescorrectwithhint: 745, timesincorrect: 293, timesincorrectwithhint: 160},
{year: 2024, month: 7, day: 19, questionid: 90, timesasked: 1436,timescorrect: 514, timescorrectwithhint: 610, timesincorrect: 203, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 19, questionid: 91, timesasked: 1562,timescorrect: 470, timescorrectwithhint: 610, timesincorrect: 310, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 19, questionid: 92, timesasked: 1067,timescorrect: 250, timescorrectwithhint: 374, timesincorrect: 282, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 19, questionid: 93, timesasked: 1807,timescorrect: 569, timescorrectwithhint: 721, timesincorrect: 333, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 19, questionid: 94, timesasked: 1959,timescorrect: 531, timescorrectwithhint: 730, timesincorrect: 447, timesincorrectwithhint: 251},
{year: 2024, month: 7, day: 19, questionid: 95, timesasked: 1956,timescorrect: 706, timescorrectwithhint: 834, timesincorrect: 271, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 19, questionid: 96, timesasked: 1750,timescorrect: 588, timescorrectwithhint: 720, timesincorrect: 286, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 19, questionid: 97, timesasked: 1669,timescorrect: 269, timescorrectwithhint: 511, timesincorrect: 565, timesincorrectwithhint: 324},
{year: 2024, month: 7, day: 20, questionid: 1, timesasked: 1926,timescorrect: 589, timescorrectwithhint: 758, timesincorrect: 373, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 20, questionid: 2, timesasked: 1938,timescorrect: 431, timescorrectwithhint: 665, timesincorrect: 537, timesincorrectwithhint: 305},
{year: 2024, month: 7, day: 20, questionid: 3, timesasked: 1848,timescorrect: 408, timescorrectwithhint: 633, timesincorrect: 515, timesincorrectwithhint: 292},
{year: 2024, month: 7, day: 20, questionid: 4, timesasked: 1154,timescorrect: 440, timescorrectwithhint: 506, timesincorrect: 136, timesincorrectwithhint: 72},
{year: 2024, month: 7, day: 20, questionid: 5, timesasked: 1692,timescorrect: 397, timescorrectwithhint: 594, timesincorrect: 448, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 20, questionid: 6, timesasked: 1168,timescorrect: 314, timescorrectwithhint: 433, timesincorrect: 269, timesincorrectwithhint: 152},
{year: 2024, month: 7, day: 20, questionid: 7, timesasked: 1248,timescorrect: 397, timescorrectwithhint: 500, timesincorrect: 226, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 20, questionid: 8, timesasked: 1604,timescorrect: 589, timescorrectwithhint: 690, timesincorrect: 212, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 20, questionid: 9, timesasked: 1723,timescorrect: 508, timescorrectwithhint: 666, timesincorrect: 353, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 20, questionid: 10, timesasked: 1863,timescorrect: 425, timescorrectwithhint: 646, timesincorrect: 505, timesincorrectwithhint: 287},
{year: 2024, month: 7, day: 20, questionid: 11, timesasked: 1324,timescorrect: 408, timescorrectwithhint: 522, timesincorrect: 253, timesincorrectwithhint: 141},
{year: 2024, month: 7, day: 20, questionid: 12, timesasked: 1737,timescorrect: 524, timescorrectwithhint: 679, timesincorrect: 343, timesincorrectwithhint: 191},
{year: 2024, month: 7, day: 20, questionid: 13, timesasked: 1526,timescorrect: 284, timescorrectwithhint: 491, timesincorrect: 478, timesincorrectwithhint: 273},
{year: 2024, month: 7, day: 20, questionid: 14, timesasked: 1630,timescorrect: 576, timescorrectwithhint: 687, timesincorrect: 238, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 20, questionid: 15, timesasked: 1567,timescorrect: 432, timescorrectwithhint: 588, timesincorrect: 350, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 20, questionid: 16, timesasked: 1896,timescorrect: 558, timescorrectwithhint: 733, timesincorrect: 389, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 20, questionid: 17, timesasked: 1358,timescorrect: 330, timescorrectwithhint: 483, timesincorrect: 348, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 20, questionid: 18, timesasked: 1355,timescorrect: 300, timescorrectwithhint: 464, timesincorrect: 377, timesincorrectwithhint: 214},
{year: 2024, month: 7, day: 20, questionid: 19, timesasked: 1686,timescorrect: 573, timescorrectwithhint: 698, timesincorrect: 269, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 20, questionid: 20, timesasked: 1656,timescorrect: 319, timescorrectwithhint: 539, timesincorrect: 508, timesincorrectwithhint: 290},
{year: 2024, month: 7, day: 20, questionid: 21, timesasked: 1008,timescorrect: 296, timescorrectwithhint: 389, timesincorrect: 207, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 20, questionid: 22, timesasked: 1868,timescorrect: 590, timescorrectwithhint: 746, timesincorrect: 343, timesincorrectwithhint: 189},
{year: 2024, month: 7, day: 20, questionid: 23, timesasked: 1198,timescorrect: 442, timescorrectwithhint: 517, timesincorrect: 156, timesincorrectwithhint: 83},
{year: 2024, month: 7, day: 20, questionid: 24, timesasked: 1250,timescorrect: 456, timescorrectwithhint: 536, timesincorrect: 168, timesincorrectwithhint: 90},
{year: 2024, month: 7, day: 20, questionid: 25, timesasked: 1255,timescorrect: 267, timescorrectwithhint: 424, timesincorrect: 359, timesincorrectwithhint: 205},
{year: 2024, month: 7, day: 20, questionid: 26, timesasked: 1005,timescorrect: 396, timescorrectwithhint: 448, timesincorrect: 106, timesincorrectwithhint: 55},
{year: 2024, month: 7, day: 20, questionid: 27, timesasked: 1989,timescorrect: 691, timescorrectwithhint: 832, timesincorrect: 302, timesincorrectwithhint: 164},
{year: 2024, month: 7, day: 20, questionid: 28, timesasked: 1904,timescorrect: 560, timescorrectwithhint: 736, timesincorrect: 391, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 20, questionid: 29, timesasked: 1151,timescorrect: 173, timescorrectwithhint: 345, timesincorrect: 402, timesincorrectwithhint: 231},
{year: 2024, month: 7, day: 20, questionid: 30, timesasked: 1213,timescorrect: 391, timescorrectwithhint: 489, timesincorrect: 215, timesincorrectwithhint: 118},
{year: 2024, month: 7, day: 20, questionid: 31, timesasked: 1923,timescorrect: 708, timescorrectwithhint: 829, timesincorrect: 252, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 20, questionid: 32, timesasked: 1303,timescorrect: 432, timescorrectwithhint: 532, timesincorrect: 219, timesincorrectwithhint: 120},
{year: 2024, month: 7, day: 20, questionid: 33, timesasked: 1334,timescorrect: 474, timescorrectwithhint: 564, timesincorrect: 192, timesincorrectwithhint: 104},
{year: 2024, month: 7, day: 20, questionid: 34, timesasked: 1024,timescorrect: 369, timescorrectwithhint: 436, timesincorrect: 142, timesincorrectwithhint: 77},
{year: 2024, month: 7, day: 20, questionid: 35, timesasked: 1267,timescorrect: 247, timescorrectwithhint: 414, timesincorrect: 386, timesincorrectwithhint: 220},
{year: 2024, month: 7, day: 20, questionid: 36, timesasked: 1094,timescorrect: 292, timescorrectwithhint: 404, timesincorrect: 254, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 20, questionid: 37, timesasked: 1094,timescorrect: 341, timescorrectwithhint: 434, timesincorrect: 205, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 20, questionid: 38, timesasked: 1616,timescorrect: 366, timescorrectwithhint: 559, timesincorrect: 441, timesincorrectwithhint: 250},
{year: 2024, month: 7, day: 20, questionid: 39, timesasked: 1616,timescorrect: 436, timescorrectwithhint: 601, timesincorrect: 371, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 20, questionid: 40, timesasked: 1665,timescorrect: 566, timescorrectwithhint: 689, timesincorrect: 265, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 20, questionid: 41, timesasked: 1628,timescorrect: 373, timescorrectwithhint: 566, timesincorrect: 440, timesincorrectwithhint: 249},
{year: 2024, month: 7, day: 20, questionid: 42, timesasked: 1340,timescorrect: 432, timescorrectwithhint: 541, timesincorrect: 237, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 20, questionid: 43, timesasked: 1814,timescorrect: 646, timescorrectwithhint: 768, timesincorrect: 260, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 20, questionid: 44, timesasked: 1378,timescorrect: 549, timescorrectwithhint: 619, timesincorrect: 139, timesincorrectwithhint: 71},
{year: 2024, month: 7, day: 20, questionid: 45, timesasked: 1354,timescorrect: 318, timescorrectwithhint: 475, timesincorrect: 358, timesincorrectwithhint: 203},
{year: 2024, month: 7, day: 20, questionid: 46, timesasked: 1861,timescorrect: 471, timescorrectwithhint: 673, timesincorrect: 459, timesincorrectwithhint: 258},
{year: 2024, month: 7, day: 20, questionid: 47, timesasked: 1113,timescorrect: 359, timescorrectwithhint: 449, timesincorrect: 196, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 20, questionid: 48, timesasked: 1670,timescorrect: 648, timescorrectwithhint: 739, timesincorrect: 186, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 20, questionid: 49, timesasked: 1214,timescorrect: 307, timescorrectwithhint: 439, timesincorrect: 299, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 20, questionid: 50, timesasked: 1485,timescorrect: 531, timescorrectwithhint: 630, timesincorrect: 210, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 20, questionid: 51, timesasked: 1887,timescorrect: 694, timescorrectwithhint: 812, timesincorrect: 249, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 20, questionid: 52, timesasked: 1337,timescorrect: 239, timescorrectwithhint: 424, timesincorrect: 429, timesincorrectwithhint: 245},
{year: 2024, month: 7, day: 20, questionid: 53, timesasked: 1855,timescorrect: 630, timescorrectwithhint: 767, timesincorrect: 296, timesincorrectwithhint: 162},
{year: 2024, month: 7, day: 20, questionid: 54, timesasked: 1125,timescorrect: 333, timescorrectwithhint: 436, timesincorrect: 229, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 20, questionid: 55, timesasked: 1025,timescorrect: 291, timescorrectwithhint: 390, timesincorrect: 220, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 20, questionid: 56, timesasked: 1824,timescorrect: 514, timescorrectwithhint: 691, timesincorrect: 397, timesincorrectwithhint: 222},
{year: 2024, month: 7, day: 20, questionid: 57, timesasked: 1472,timescorrect: 283, timescorrectwithhint: 479, timesincorrect: 452, timesincorrectwithhint: 258},
{year: 2024, month: 7, day: 20, questionid: 58, timesasked: 1680,timescorrect: 343, timescorrectwithhint: 558, timesincorrect: 496, timesincorrectwithhint: 283},
{year: 2024, month: 7, day: 20, questionid: 59, timesasked: 1584,timescorrect: 372, timescorrectwithhint: 556, timesincorrect: 419, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 20, questionid: 60, timesasked: 1132,timescorrect: 333, timescorrectwithhint: 438, timesincorrect: 232, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 20, questionid: 61, timesasked: 1115,timescorrect: 225, timescorrectwithhint: 369, timesincorrect: 332, timesincorrectwithhint: 189},
{year: 2024, month: 7, day: 20, questionid: 62, timesasked: 1247,timescorrect: 398, timescorrectwithhint: 501, timesincorrect: 224, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 20, questionid: 63, timesasked: 1366,timescorrect: 381, timescorrectwithhint: 515, timesincorrect: 301, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 20, questionid: 64, timesasked: 1532,timescorrect: 567, timescorrectwithhint: 662, timesincorrect: 198, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 20, questionid: 65, timesasked: 1203,timescorrect: 214, timescorrectwithhint: 381, timesincorrect: 386, timesincorrectwithhint: 222},
{year: 2024, month: 7, day: 20, questionid: 66, timesasked: 1285,timescorrect: 254, timescorrectwithhint: 422, timesincorrect: 387, timesincorrectwithhint: 222},
{year: 2024, month: 7, day: 20, questionid: 67, timesasked: 1360,timescorrect: 492, timescorrectwithhint: 581, timesincorrect: 187, timesincorrectwithhint: 100},
{year: 2024, month: 7, day: 20, questionid: 68, timesasked: 1300,timescorrect: 518, timescorrectwithhint: 584, timesincorrect: 131, timesincorrectwithhint: 67},
{year: 2024, month: 7, day: 20, questionid: 69, timesasked: 1420,timescorrect: 370, timescorrectwithhint: 520, timesincorrect: 339, timesincorrectwithhint: 191},
{year: 2024, month: 7, day: 20, questionid: 70, timesasked: 1981,timescorrect: 553, timescorrectwithhint: 748, timesincorrect: 436, timesincorrectwithhint: 244},
{year: 2024, month: 7, day: 20, questionid: 71, timesasked: 1550,timescorrect: 358, timescorrectwithhint: 540, timesincorrect: 416, timesincorrectwithhint: 236},
{year: 2024, month: 7, day: 20, questionid: 72, timesasked: 1644,timescorrect: 333, timescorrectwithhint: 545, timesincorrect: 488, timesincorrectwithhint: 278},
{year: 2024, month: 7, day: 20, questionid: 73, timesasked: 1735,timescorrect: 274, timescorrectwithhint: 529, timesincorrect: 592, timesincorrectwithhint: 340},
{year: 2024, month: 7, day: 20, questionid: 74, timesasked: 1839,timescorrect: 596, timescorrectwithhint: 743, timesincorrect: 323, timesincorrectwithhint: 177},
{year: 2024, month: 7, day: 20, questionid: 75, timesasked: 1480,timescorrect: 460, timescorrectwithhint: 587, timesincorrect: 279, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 20, questionid: 76, timesasked: 1705,timescorrect: 340, timescorrectwithhint: 562, timesincorrect: 512, timesincorrectwithhint: 291},
{year: 2024, month: 7, day: 20, questionid: 77, timesasked: 1779,timescorrect: 604, timescorrectwithhint: 736, timesincorrect: 285, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 20, questionid: 78, timesasked: 1966,timescorrect: 377, timescorrectwithhint: 639, timesincorrect: 605, timesincorrectwithhint: 345},
{year: 2024, month: 7, day: 20, questionid: 79, timesasked: 1627,timescorrect: 249, timescorrectwithhint: 491, timesincorrect: 564, timesincorrectwithhint: 323},
{year: 2024, month: 7, day: 20, questionid: 80, timesasked: 1236,timescorrect: 418, timescorrectwithhint: 510, timesincorrect: 199, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 20, questionid: 81, timesasked: 1210,timescorrect: 468, timescorrectwithhint: 534, timesincorrect: 136, timesincorrectwithhint: 72},
{year: 2024, month: 7, day: 20, questionid: 82, timesasked: 1408,timescorrect: 216, timescorrectwithhint: 425, timesincorrect: 487, timesincorrectwithhint: 280},
{year: 2024, month: 7, day: 20, questionid: 83, timesasked: 1092,timescorrect: 426, timescorrectwithhint: 485, timesincorrect: 119, timesincorrectwithhint: 62},
{year: 2024, month: 7, day: 20, questionid: 84, timesasked: 1406,timescorrect: 369, timescorrectwithhint: 516, timesincorrect: 333, timesincorrectwithhint: 188},
{year: 2024, month: 7, day: 20, questionid: 85, timesasked: 1496,timescorrect: 249, timescorrectwithhint: 463, timesincorrect: 498, timesincorrectwithhint: 286},
{year: 2024, month: 7, day: 20, questionid: 86, timesasked: 1952,timescorrect: 444, timescorrectwithhint: 676, timesincorrect: 531, timesincorrectwithhint: 301},
{year: 2024, month: 7, day: 20, questionid: 87, timesasked: 1174,timescorrect: 242, timescorrectwithhint: 391, timesincorrect: 344, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 20, questionid: 88, timesasked: 1047,timescorrect: 324, timescorrectwithhint: 414, timesincorrect: 198, timesincorrectwithhint: 111},
{year: 2024, month: 7, day: 20, questionid: 89, timesasked: 1563,timescorrect: 323, timescorrectwithhint: 522, timesincorrect: 457, timesincorrectwithhint: 261},
{year: 2024, month: 7, day: 20, questionid: 90, timesasked: 1331,timescorrect: 446, timescorrectwithhint: 547, timesincorrect: 219, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 20, questionid: 91, timesasked: 1183,timescorrect: 224, timescorrectwithhint: 383, timesincorrect: 366, timesincorrectwithhint: 210},
{year: 2024, month: 7, day: 20, questionid: 92, timesasked: 1922,timescorrect: 749, timescorrectwithhint: 853, timesincorrect: 211, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 20, questionid: 93, timesasked: 1337,timescorrect: 459, timescorrectwithhint: 556, timesincorrect: 209, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 20, questionid: 94, timesasked: 1235,timescorrect: 418, timescorrectwithhint: 510, timesincorrect: 198, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 20, questionid: 95, timesasked: 1806,timescorrect: 471, timescorrectwithhint: 661, timesincorrect: 431, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 20, questionid: 96, timesasked: 1927,timescorrect: 696, timescorrectwithhint: 822, timesincorrect: 267, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 20, questionid: 97, timesasked: 1284,timescorrect: 403, timescorrectwithhint: 511, timesincorrect: 238, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 21, questionid: 1, timesasked: 1866,timescorrect: 428, timescorrectwithhint: 648, timesincorrect: 504, timesincorrectwithhint: 286},
{year: 2024, month: 7, day: 21, questionid: 2, timesasked: 1011,timescorrect: 173, timescorrectwithhint: 316, timesincorrect: 332, timesincorrectwithhint: 190},
{year: 2024, month: 7, day: 21, questionid: 3, timesasked: 1511,timescorrect: 471, timescorrectwithhint: 600, timesincorrect: 284, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 21, questionid: 4, timesasked: 1518,timescorrect: 493, timescorrectwithhint: 614, timesincorrect: 265, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 21, questionid: 5, timesasked: 1702,timescorrect: 258, timescorrectwithhint: 512, timesincorrect: 592, timesincorrectwithhint: 340},
{year: 2024, month: 7, day: 21, questionid: 6, timesasked: 1769,timescorrect: 368, timescorrectwithhint: 592, timesincorrect: 516, timesincorrectwithhint: 293},
{year: 2024, month: 7, day: 21, questionid: 7, timesasked: 1715,timescorrect: 574, timescorrectwithhint: 704, timesincorrect: 283, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 21, questionid: 8, timesasked: 1383,timescorrect: 239, timescorrectwithhint: 434, timesincorrect: 451, timesincorrectwithhint: 259},
{year: 2024, month: 7, day: 21, questionid: 9, timesasked: 1893,timescorrect: 456, timescorrectwithhint: 671, timesincorrect: 489, timesincorrectwithhint: 277},
{year: 2024, month: 7, day: 21, questionid: 10, timesasked: 1591,timescorrect: 348, timescorrectwithhint: 543, timesincorrect: 447, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 21, questionid: 11, timesasked: 1032,timescorrect: 407, timescorrectwithhint: 461, timesincorrect: 108, timesincorrectwithhint: 56},
{year: 2024, month: 7, day: 21, questionid: 12, timesasked: 1221,timescorrect: 205, timescorrectwithhint: 379, timesincorrect: 404, timesincorrectwithhint: 233},
{year: 2024, month: 7, day: 21, questionid: 13, timesasked: 1226,timescorrect: 254, timescorrectwithhint: 410, timesincorrect: 358, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 21, questionid: 14, timesasked: 1604,timescorrect: 526, timescorrectwithhint: 652, timesincorrect: 275, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 21, questionid: 15, timesasked: 1990,timescorrect: 605, timescorrectwithhint: 781, timesincorrect: 389, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 21, questionid: 16, timesasked: 1610,timescorrect: 304, timescorrectwithhint: 520, timesincorrect: 500, timesincorrectwithhint: 286},
{year: 2024, month: 7, day: 21, questionid: 17, timesasked: 1226,timescorrect: 328, timescorrectwithhint: 454, timesincorrect: 284, timesincorrectwithhint: 160},
{year: 2024, month: 7, day: 21, questionid: 18, timesasked: 1207,timescorrect: 426, timescorrectwithhint: 509, timesincorrect: 176, timesincorrectwithhint: 96},
{year: 2024, month: 7, day: 21, questionid: 19, timesasked: 1563,timescorrect: 587, timescorrectwithhint: 680, timesincorrect: 194, timesincorrectwithhint: 102},
{year: 2024, month: 7, day: 21, questionid: 20, timesasked: 1528,timescorrect: 466, timescorrectwithhint: 600, timesincorrect: 297, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 21, questionid: 21, timesasked: 1061,timescorrect: 385, timescorrectwithhint: 454, timesincorrect: 144, timesincorrectwithhint: 78},
{year: 2024, month: 7, day: 21, questionid: 22, timesasked: 1908,timescorrect: 740, timescorrectwithhint: 845, timesincorrect: 213, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 21, questionid: 23, timesasked: 1412,timescorrect: 230, timescorrectwithhint: 434, timesincorrect: 475, timesincorrectwithhint: 273},
{year: 2024, month: 7, day: 21, questionid: 24, timesasked: 1811,timescorrect: 471, timescorrectwithhint: 663, timesincorrect: 433, timesincorrectwithhint: 244},
{year: 2024, month: 7, day: 21, questionid: 25, timesasked: 1178,timescorrect: 292, timescorrectwithhint: 422, timesincorrect: 296, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 21, questionid: 26, timesasked: 1383,timescorrect: 526, timescorrectwithhint: 606, timesincorrect: 165, timesincorrectwithhint: 86},
{year: 2024, month: 7, day: 21, questionid: 27, timesasked: 1325,timescorrect: 513, timescorrectwithhint: 586, timesincorrect: 149, timesincorrectwithhint: 77},
{year: 2024, month: 7, day: 21, questionid: 28, timesasked: 1214,timescorrect: 252, timescorrectwithhint: 406, timesincorrect: 354, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 21, questionid: 29, timesasked: 1488,timescorrect: 593, timescorrectwithhint: 668, timesincorrect: 150, timesincorrectwithhint: 77},
{year: 2024, month: 7, day: 21, questionid: 30, timesasked: 1346,timescorrect: 210, timescorrectwithhint: 409, timesincorrect: 462, timesincorrectwithhint: 265},
{year: 2024, month: 7, day: 21, questionid: 31, timesasked: 1393,timescorrect: 271, timescorrectwithhint: 455, timesincorrect: 424, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 21, questionid: 32, timesasked: 1239,timescorrect: 236, timescorrectwithhint: 402, timesincorrect: 382, timesincorrectwithhint: 219},
{year: 2024, month: 7, day: 21, questionid: 33, timesasked: 1909,timescorrect: 601, timescorrectwithhint: 761, timesincorrect: 352, timesincorrectwithhint: 195},
{year: 2024, month: 7, day: 21, questionid: 34, timesasked: 1710,timescorrect: 561, timescorrectwithhint: 696, timesincorrect: 293, timesincorrectwithhint: 160},
{year: 2024, month: 7, day: 21, questionid: 35, timesasked: 1962,timescorrect: 304, timescorrectwithhint: 594, timesincorrect: 676, timesincorrectwithhint: 388},
{year: 2024, month: 7, day: 21, questionid: 36, timesasked: 1706,timescorrect: 667, timescorrectwithhint: 759, timesincorrect: 185, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 21, questionid: 37, timesasked: 1779,timescorrect: 303, timescorrectwithhint: 555, timesincorrect: 585, timesincorrectwithhint: 336},
{year: 2024, month: 7, day: 21, questionid: 38, timesasked: 1418,timescorrect: 470, timescorrectwithhint: 580, timesincorrect: 238, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 21, questionid: 39, timesasked: 1172,timescorrect: 459, timescorrectwithhint: 521, timesincorrect: 126, timesincorrectwithhint: 66},
{year: 2024, month: 7, day: 21, questionid: 40, timesasked: 1217,timescorrect: 354, timescorrectwithhint: 468, timesincorrect: 254, timesincorrectwithhint: 141},
{year: 2024, month: 7, day: 21, questionid: 41, timesasked: 1917,timescorrect: 533, timescorrectwithhint: 722, timesincorrect: 425, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 21, questionid: 42, timesasked: 1460,timescorrect: 239, timescorrectwithhint: 450, timesincorrect: 490, timesincorrectwithhint: 281},
{year: 2024, month: 7, day: 21, questionid: 43, timesasked: 1295,timescorrect: 444, timescorrectwithhint: 538, timesincorrect: 202, timesincorrectwithhint: 111},
{year: 2024, month: 7, day: 21, questionid: 44, timesasked: 1539,timescorrect: 605, timescorrectwithhint: 686, timesincorrect: 163, timesincorrectwithhint: 85},
{year: 2024, month: 7, day: 21, questionid: 45, timesasked: 1228,timescorrect: 283, timescorrectwithhint: 427, timesincorrect: 330, timesincorrectwithhint: 188},
{year: 2024, month: 7, day: 21, questionid: 46, timesasked: 1935,timescorrect: 531, timescorrectwithhint: 725, timesincorrect: 436, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 21, questionid: 47, timesasked: 1417,timescorrect: 256, timescorrectwithhint: 451, timesincorrect: 451, timesincorrectwithhint: 259},
{year: 2024, month: 7, day: 21, questionid: 48, timesasked: 1962,timescorrect: 515, timescorrectwithhint: 721, timesincorrect: 465, timesincorrectwithhint: 261},
{year: 2024, month: 7, day: 21, questionid: 49, timesasked: 1480,timescorrect: 237, timescorrectwithhint: 453, timesincorrect: 502, timesincorrectwithhint: 288},
{year: 2024, month: 7, day: 21, questionid: 50, timesasked: 1293,timescorrect: 428, timescorrectwithhint: 528, timesincorrect: 217, timesincorrectwithhint: 120},
{year: 2024, month: 7, day: 21, questionid: 51, timesasked: 1516,timescorrect: 469, timescorrectwithhint: 600, timesincorrect: 288, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 21, questionid: 52, timesasked: 1848,timescorrect: 502, timescorrectwithhint: 689, timesincorrect: 421, timesincorrectwithhint: 236},
{year: 2024, month: 7, day: 21, questionid: 53, timesasked: 1444,timescorrect: 522, timescorrectwithhint: 616, timesincorrect: 199, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 21, questionid: 54, timesasked: 1204,timescorrect: 473, timescorrectwithhint: 536, timesincorrect: 128, timesincorrectwithhint: 67},
{year: 2024, month: 7, day: 21, questionid: 55, timesasked: 1051,timescorrect: 378, timescorrectwithhint: 447, timesincorrect: 147, timesincorrectwithhint: 79},
{year: 2024, month: 7, day: 21, questionid: 56, timesasked: 1678,timescorrect: 657, timescorrectwithhint: 746, timesincorrect: 181, timesincorrectwithhint: 94},
{year: 2024, month: 7, day: 21, questionid: 57, timesasked: 1756,timescorrect: 463, timescorrectwithhint: 646, timesincorrect: 414, timesincorrectwithhint: 233},
{year: 2024, month: 7, day: 21, questionid: 58, timesasked: 1210,timescorrect: 349, timescorrectwithhint: 463, timesincorrect: 255, timesincorrectwithhint: 143},
{year: 2024, month: 7, day: 21, questionid: 59, timesasked: 1040,timescorrect: 328, timescorrectwithhint: 415, timesincorrect: 191, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 21, questionid: 60, timesasked: 1614,timescorrect: 624, timescorrectwithhint: 713, timesincorrect: 182, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 21, questionid: 61, timesasked: 1082,timescorrect: 240, timescorrectwithhint: 371, timesincorrect: 300, timesincorrectwithhint: 171},
{year: 2024, month: 7, day: 21, questionid: 62, timesasked: 1773,timescorrect: 433, timescorrectwithhint: 632, timesincorrect: 452, timesincorrectwithhint: 256},
{year: 2024, month: 7, day: 21, questionid: 63, timesasked: 1715,timescorrect: 655, timescorrectwithhint: 753, timesincorrect: 201, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 21, questionid: 64, timesasked: 1742,timescorrect: 649, timescorrectwithhint: 755, timesincorrect: 221, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 21, questionid: 65, timesasked: 1633,timescorrect: 271, timescorrectwithhint: 506, timesincorrect: 544, timesincorrectwithhint: 312},
{year: 2024, month: 7, day: 21, questionid: 66, timesasked: 1717,timescorrect: 360, timescorrectwithhint: 576, timesincorrect: 498, timesincorrectwithhint: 283},
{year: 2024, month: 7, day: 21, questionid: 67, timesasked: 1114,timescorrect: 274, timescorrectwithhint: 398, timesincorrect: 282, timesincorrectwithhint: 160},
{year: 2024, month: 7, day: 21, questionid: 68, timesasked: 1699,timescorrect: 620, timescorrectwithhint: 728, timesincorrect: 229, timesincorrectwithhint: 122},
{year: 2024, month: 7, day: 21, questionid: 69, timesasked: 1407,timescorrect: 531, timescorrectwithhint: 614, timesincorrect: 171, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 21, questionid: 70, timesasked: 1990,timescorrect: 721, timescorrectwithhint: 850, timesincorrect: 273, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 21, questionid: 71, timesasked: 1235,timescorrect: 373, timescorrectwithhint: 483, timesincorrect: 244, timesincorrectwithhint: 135},
{year: 2024, month: 7, day: 21, questionid: 72, timesasked: 1425,timescorrect: 303, timescorrectwithhint: 481, timesincorrect: 409, timesincorrectwithhint: 232},
{year: 2024, month: 7, day: 21, questionid: 73, timesasked: 1035,timescorrect: 289, timescorrectwithhint: 391, timesincorrect: 227, timesincorrectwithhint: 128},
{year: 2024, month: 7, day: 21, questionid: 74, timesasked: 1691,timescorrect: 469, timescorrectwithhint: 636, timesincorrect: 375, timesincorrectwithhint: 211},
{year: 2024, month: 7, day: 21, questionid: 75, timesasked: 1163,timescorrect: 295, timescorrectwithhint: 421, timesincorrect: 286, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 21, questionid: 76, timesasked: 1611,timescorrect: 554, timescorrectwithhint: 670, timesincorrect: 251, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 21, questionid: 77, timesasked: 1513,timescorrect: 389, timescorrectwithhint: 551, timesincorrect: 366, timesincorrectwithhint: 207},
{year: 2024, month: 7, day: 21, questionid: 78, timesasked: 1306,timescorrect: 365, timescorrectwithhint: 493, timesincorrect: 287, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 21, questionid: 79, timesasked: 1985,timescorrect: 493, timescorrectwithhint: 712, timesincorrect: 499, timesincorrectwithhint: 281},
{year: 2024, month: 7, day: 21, questionid: 80, timesasked: 1117,timescorrect: 379, timescorrectwithhint: 462, timesincorrect: 179, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 21, questionid: 81, timesasked: 1012,timescorrect: 327, timescorrectwithhint: 408, timesincorrect: 178, timesincorrectwithhint: 99},
{year: 2024, month: 7, day: 21, questionid: 82, timesasked: 1069,timescorrect: 370, timescorrectwithhint: 447, timesincorrect: 163, timesincorrectwithhint: 89},
{year: 2024, month: 7, day: 21, questionid: 83, timesasked: 1951,timescorrect: 434, timescorrectwithhint: 670, timesincorrect: 541, timesincorrectwithhint: 306},
{year: 2024, month: 7, day: 21, questionid: 84, timesasked: 1455,timescorrect: 357, timescorrectwithhint: 520, timesincorrect: 369, timesincorrectwithhint: 209},
{year: 2024, month: 7, day: 21, questionid: 85, timesasked: 1791,timescorrect: 705, timescorrectwithhint: 799, timesincorrect: 190, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 21, questionid: 86, timesasked: 1899,timescorrect: 320, timescorrectwithhint: 590, timesincorrect: 629, timesincorrectwithhint: 360},
{year: 2024, month: 7, day: 21, questionid: 87, timesasked: 1769,timescorrect: 533, timescorrectwithhint: 691, timesincorrect: 351, timesincorrectwithhint: 194},
{year: 2024, month: 7, day: 21, questionid: 88, timesasked: 1083,timescorrect: 223, timescorrectwithhint: 361, timesincorrect: 317, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 21, questionid: 89, timesasked: 1539,timescorrect: 594, timescorrectwithhint: 680, timesincorrect: 174, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 21, questionid: 90, timesasked: 1889,timescorrect: 409, timescorrectwithhint: 642, timesincorrect: 535, timesincorrectwithhint: 303},
{year: 2024, month: 7, day: 21, questionid: 91, timesasked: 1655,timescorrect: 462, timescorrectwithhint: 624, timesincorrect: 365, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 21, questionid: 92, timesasked: 1785,timescorrect: 617, timescorrectwithhint: 745, timesincorrect: 275, timesincorrectwithhint: 148},
{year: 2024, month: 7, day: 21, questionid: 93, timesasked: 1167,timescorrect: 407, timescorrectwithhint: 489, timesincorrect: 175, timesincorrectwithhint: 96},
{year: 2024, month: 7, day: 21, questionid: 94, timesasked: 1046,timescorrect: 366, timescorrectwithhint: 439, timesincorrect: 156, timesincorrectwithhint: 85},
{year: 2024, month: 7, day: 21, questionid: 95, timesasked: 1028,timescorrect: 261, timescorrectwithhint: 372, timesincorrect: 252, timesincorrectwithhint: 143},
{year: 2024, month: 7, day: 21, questionid: 96, timesasked: 1246,timescorrect: 369, timescorrectwithhint: 483, timesincorrect: 253, timesincorrectwithhint: 141},
{year: 2024, month: 7, day: 21, questionid: 97, timesasked: 1630,timescorrect: 244, timescorrectwithhint: 489, timesincorrect: 570, timesincorrectwithhint: 327},
{year: 2024, month: 7, day: 21, questionid: 1, timesasked: 1798,timescorrect: 656, timescorrectwithhint: 771, timesincorrect: 242, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 21, questionid: 2, timesasked: 1776,timescorrect: 654, timescorrectwithhint: 765, timesincorrect: 233, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 21, questionid: 3, timesasked: 1006,timescorrect: 254, timescorrectwithhint: 364, timesincorrect: 248, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 21, questionid: 4, timesasked: 1889,timescorrect: 571, timescorrectwithhint: 739, timesincorrect: 372, timesincorrectwithhint: 207},
{year: 2024, month: 7, day: 21, questionid: 5, timesasked: 1804,timescorrect: 461, timescorrectwithhint: 655, timesincorrect: 440, timesincorrectwithhint: 248},
{year: 2024, month: 7, day: 21, questionid: 6, timesasked: 1566,timescorrect: 312, timescorrectwithhint: 516, timesincorrect: 470, timesincorrectwithhint: 268},
{year: 2024, month: 7, day: 21, questionid: 7, timesasked: 1563,timescorrect: 521, timescorrectwithhint: 641, timesincorrect: 259, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 21, questionid: 8, timesasked: 1731,timescorrect: 438, timescorrectwithhint: 626, timesincorrect: 427, timesincorrectwithhint: 240},
{year: 2024, month: 7, day: 21, questionid: 9, timesasked: 1317,timescorrect: 293, timescorrectwithhint: 452, timesincorrect: 364, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 21, questionid: 10, timesasked: 1669,timescorrect: 375, timescorrectwithhint: 575, timesincorrect: 458, timesincorrectwithhint: 261},
{year: 2024, month: 7, day: 21, questionid: 11, timesasked: 1625,timescorrect: 593, timescorrectwithhint: 697, timesincorrect: 218, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 21, questionid: 12, timesasked: 1992,timescorrect: 374, timescorrectwithhint: 642, timesincorrect: 621, timesincorrectwithhint: 355},
{year: 2024, month: 7, day: 21, questionid: 13, timesasked: 1186,timescorrect: 295, timescorrectwithhint: 426, timesincorrect: 297, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 21, questionid: 14, timesasked: 1505,timescorrect: 365, timescorrectwithhint: 535, timesincorrect: 386, timesincorrectwithhint: 219},
{year: 2024, month: 7, day: 21, questionid: 15, timesasked: 1916,timescorrect: 546, timescorrectwithhint: 730, timesincorrect: 411, timesincorrectwithhint: 229},
{year: 2024, month: 7, day: 21, questionid: 16, timesasked: 1231,timescorrect: 441, timescorrectwithhint: 523, timesincorrect: 174, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 21, questionid: 17, timesasked: 1704,timescorrect: 630, timescorrectwithhint: 736, timesincorrect: 221, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 21, questionid: 18, timesasked: 1169,timescorrect: 410, timescorrectwithhint: 491, timesincorrect: 173, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 21, questionid: 19, timesasked: 1151,timescorrect: 176, timescorrectwithhint: 347, timesincorrect: 399, timesincorrectwithhint: 229},
{year: 2024, month: 7, day: 21, questionid: 20, timesasked: 1732,timescorrect: 328, timescorrectwithhint: 560, timesincorrect: 537, timesincorrectwithhint: 307},
{year: 2024, month: 7, day: 21, questionid: 21, timesasked: 1099,timescorrect: 321, timescorrectwithhint: 423, timesincorrect: 227, timesincorrectwithhint: 128},
{year: 2024, month: 7, day: 21, questionid: 22, timesasked: 1326,timescorrect: 523, timescorrectwithhint: 592, timesincorrect: 139, timesincorrectwithhint: 72},
{year: 2024, month: 7, day: 21, questionid: 23, timesasked: 1720,timescorrect: 286, timescorrectwithhint: 533, timesincorrect: 573, timesincorrectwithhint: 328},
{year: 2024, month: 7, day: 21, questionid: 24, timesasked: 1335,timescorrect: 330, timescorrectwithhint: 478, timesincorrect: 336, timesincorrectwithhint: 191},
{year: 2024, month: 7, day: 21, questionid: 25, timesasked: 1811,timescorrect: 452, timescorrectwithhint: 651, timesincorrect: 453, timesincorrectwithhint: 255},
{year: 2024, month: 7, day: 21, questionid: 26, timesasked: 1048,timescorrect: 244, timescorrectwithhint: 366, timesincorrect: 279, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 21, questionid: 27, timesasked: 1346,timescorrect: 385, timescorrectwithhint: 513, timesincorrect: 287, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 21, questionid: 28, timesasked: 1174,timescorrect: 284, timescorrectwithhint: 416, timesincorrect: 302, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 21, questionid: 29, timesasked: 1003,timescorrect: 281, timescorrectwithhint: 379, timesincorrect: 219, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 21, questionid: 30, timesasked: 1628,timescorrect: 593, timescorrectwithhint: 697, timesincorrect: 220, timesincorrectwithhint: 118},
{year: 2024, month: 7, day: 21, questionid: 31, timesasked: 1908,timescorrect: 564, timescorrectwithhint: 739, timesincorrect: 389, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 21, questionid: 32, timesasked: 1311,timescorrect: 372, timescorrectwithhint: 498, timesincorrect: 283, timesincorrectwithhint: 158},
{year: 2024, month: 7, day: 21, questionid: 33, timesasked: 1090,timescorrect: 425, timescorrectwithhint: 484, timesincorrect: 119, timesincorrectwithhint: 62},
{year: 2024, month: 7, day: 21, questionid: 34, timesasked: 1434,timescorrect: 439, timescorrectwithhint: 565, timesincorrect: 277, timesincorrectwithhint: 153},
{year: 2024, month: 7, day: 21, questionid: 35, timesasked: 1329,timescorrect: 233, timescorrectwithhint: 419, timesincorrect: 430, timesincorrectwithhint: 247},
{year: 2024, month: 7, day: 21, questionid: 36, timesasked: 1637,timescorrect: 638, timescorrectwithhint: 726, timesincorrect: 180, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 21, questionid: 37, timesasked: 1911,timescorrect: 376, timescorrectwithhint: 627, timesincorrect: 579, timesincorrectwithhint: 329},
{year: 2024, month: 7, day: 21, questionid: 38, timesasked: 1919,timescorrect: 604, timescorrectwithhint: 765, timesincorrect: 355, timesincorrectwithhint: 195},
{year: 2024, month: 7, day: 21, questionid: 39, timesasked: 1358,timescorrect: 443, timescorrectwithhint: 551, timesincorrect: 235, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 21, questionid: 40, timesasked: 1089,timescorrect: 240, timescorrectwithhint: 372, timesincorrect: 304, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 21, questionid: 41, timesasked: 1974,timescorrect: 631, timescorrectwithhint: 793, timesincorrect: 355, timesincorrectwithhint: 195},
{year: 2024, month: 7, day: 21, questionid: 42, timesasked: 1369,timescorrect: 502, timescorrectwithhint: 589, timesincorrect: 181, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 21, questionid: 43, timesasked: 1878,timescorrect: 714, timescorrectwithhint: 823, timesincorrect: 224, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 21, questionid: 44, timesasked: 1285,timescorrect: 238, timescorrectwithhint: 413, timesincorrect: 403, timesincorrectwithhint: 231},
{year: 2024, month: 7, day: 21, questionid: 45, timesasked: 1564,timescorrect: 522, timescorrectwithhint: 641, timesincorrect: 259, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 21, questionid: 46, timesasked: 1125,timescorrect: 262, timescorrectwithhint: 393, timesincorrect: 300, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 21, questionid: 47, timesasked: 1859,timescorrect: 555, timescorrectwithhint: 723, timesincorrect: 373, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 21, questionid: 48, timesasked: 1923,timescorrect: 492, timescorrectwithhint: 699, timesincorrect: 469, timesincorrectwithhint: 263},
{year: 2024, month: 7, day: 21, questionid: 49, timesasked: 1131,timescorrect: 353, timescorrectwithhint: 449, timesincorrect: 211, timesincorrectwithhint: 118},
{year: 2024, month: 7, day: 21, questionid: 50, timesasked: 1291,timescorrect: 464, timescorrectwithhint: 549, timesincorrect: 180, timesincorrectwithhint: 98},
{year: 2024, month: 7, day: 21, questionid: 51, timesasked: 1556,timescorrect: 386, timescorrectwithhint: 558, timesincorrect: 391, timesincorrectwithhint: 221},
{year: 2024, month: 7, day: 21, questionid: 52, timesasked: 1355,timescorrect: 289, timescorrectwithhint: 458, timesincorrect: 387, timesincorrectwithhint: 221},
{year: 2024, month: 7, day: 21, questionid: 53, timesasked: 1449,timescorrect: 436, timescorrectwithhint: 566, timesincorrect: 288, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 21, questionid: 54, timesasked: 1213,timescorrect: 432, timescorrectwithhint: 514, timesincorrect: 173, timesincorrectwithhint: 94},
{year: 2024, month: 7, day: 21, questionid: 55, timesasked: 1504,timescorrect: 324, timescorrectwithhint: 510, timesincorrect: 427, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 21, questionid: 56, timesasked: 1176,timescorrect: 421, timescorrectwithhint: 499, timesincorrect: 166, timesincorrectwithhint: 90},
{year: 2024, month: 7, day: 21, questionid: 57, timesasked: 1764,timescorrect: 372, timescorrectwithhint: 594, timesincorrect: 509, timesincorrectwithhint: 289},
{year: 2024, month: 7, day: 21, questionid: 58, timesasked: 1707,timescorrect: 598, timescorrectwithhint: 717, timesincorrect: 254, timesincorrectwithhint: 138},
{year: 2024, month: 7, day: 21, questionid: 59, timesasked: 1760,timescorrect: 289, timescorrectwithhint: 543, timesincorrect: 590, timesincorrectwithhint: 338},
{year: 2024, month: 7, day: 21, questionid: 60, timesasked: 1088,timescorrect: 253, timescorrectwithhint: 380, timesincorrect: 290, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 21, questionid: 61, timesasked: 1976,timescorrect: 597, timescorrectwithhint: 773, timesincorrect: 390, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 21, questionid: 62, timesasked: 1508,timescorrect: 237, timescorrectwithhint: 459, timesincorrect: 516, timesincorrectwithhint: 296},
{year: 2024, month: 7, day: 21, questionid: 63, timesasked: 1009,timescorrect: 244, timescorrectwithhint: 358, timesincorrect: 259, timesincorrectwithhint: 148},
{year: 2024, month: 7, day: 21, questionid: 64, timesasked: 1153,timescorrect: 194, timescorrectwithhint: 358, timesincorrect: 382, timesincorrectwithhint: 219},
{year: 2024, month: 7, day: 21, questionid: 65, timesasked: 1346,timescorrect: 397, timescorrectwithhint: 521, timesincorrect: 275, timesincorrectwithhint: 153},
{year: 2024, month: 7, day: 21, questionid: 66, timesasked: 1248,timescorrect: 341, timescorrectwithhint: 466, timesincorrect: 282, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 21, questionid: 67, timesasked: 1556,timescorrect: 389, timescorrectwithhint: 560, timesincorrect: 388, timesincorrectwithhint: 219},
{year: 2024, month: 7, day: 21, questionid: 68, timesasked: 1626,timescorrect: 571, timescorrectwithhint: 684, timesincorrect: 241, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 21, questionid: 69, timesasked: 1818,timescorrect: 490, timescorrectwithhint: 676, timesincorrect: 418, timesincorrectwithhint: 234},
{year: 2024, month: 7, day: 21, questionid: 70, timesasked: 1378,timescorrect: 238, timescorrectwithhint: 432, timesincorrect: 450, timesincorrectwithhint: 258},
{year: 2024, month: 7, day: 21, questionid: 71, timesasked: 1730,timescorrect: 292, timescorrectwithhint: 538, timesincorrect: 572, timesincorrectwithhint: 328},
{year: 2024, month: 7, day: 21, questionid: 72, timesasked: 1065,timescorrect: 354, timescorrectwithhint: 436, timesincorrect: 177, timesincorrectwithhint: 98},
{year: 2024, month: 7, day: 21, questionid: 73, timesasked: 1121,timescorrect: 317, timescorrectwithhint: 425, timesincorrect: 243, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 21, questionid: 74, timesasked: 1819,timescorrect: 442, timescorrectwithhint: 647, timesincorrect: 466, timesincorrectwithhint: 264},
{year: 2024, month: 7, day: 21, questionid: 75, timesasked: 1883,timescorrect: 459, timescorrectwithhint: 671, timesincorrect: 481, timesincorrectwithhint: 272},
{year: 2024, month: 7, day: 21, questionid: 76, timesasked: 1962,timescorrect: 704, timescorrectwithhint: 834, timesincorrect: 276, timesincorrectwithhint: 148},
{year: 2024, month: 7, day: 21, questionid: 77, timesasked: 1313,timescorrect: 227, timescorrectwithhint: 412, timesincorrect: 429, timesincorrectwithhint: 245},
{year: 2024, month: 7, day: 21, questionid: 78, timesasked: 1531,timescorrect: 303, timescorrectwithhint: 503, timesincorrect: 462, timesincorrectwithhint: 263},
{year: 2024, month: 7, day: 21, questionid: 79, timesasked: 1476,timescorrect: 523, timescorrectwithhint: 624, timesincorrect: 214, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 21, questionid: 80, timesasked: 1581,timescorrect: 586, timescorrectwithhint: 683, timesincorrect: 204, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 21, questionid: 81, timesasked: 1093,timescorrect: 413, timescorrectwithhint: 477, timesincorrect: 133, timesincorrectwithhint: 70},
{year: 2024, month: 7, day: 21, questionid: 82, timesasked: 1343,timescorrect: 389, timescorrectwithhint: 516, timesincorrect: 281, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 21, questionid: 83, timesasked: 1571,timescorrect: 544, timescorrectwithhint: 656, timesincorrect: 241, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 21, questionid: 84, timesasked: 1498,timescorrect: 386, timescorrectwithhint: 546, timesincorrect: 362, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 21, questionid: 85, timesasked: 1605,timescorrect: 363, timescorrectwithhint: 555, timesincorrect: 439, timesincorrectwithhint: 248},
{year: 2024, month: 7, day: 21, questionid: 86, timesasked: 1800,timescorrect: 277, timescorrectwithhint: 544, timesincorrect: 622, timesincorrectwithhint: 357},
{year: 2024, month: 7, day: 21, questionid: 87, timesasked: 1150,timescorrect: 368, timescorrectwithhint: 462, timesincorrect: 206, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 21, questionid: 88, timesasked: 1960,timescorrect: 684, timescorrectwithhint: 822, timesincorrect: 295, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 21, questionid: 89, timesasked: 1951,timescorrect: 467, timescorrectwithhint: 690, timesincorrect: 507, timesincorrectwithhint: 287},
{year: 2024, month: 7, day: 21, questionid: 90, timesasked: 1894,timescorrect: 566, timescorrectwithhint: 737, timesincorrect: 380, timesincorrectwithhint: 211},
{year: 2024, month: 7, day: 21, questionid: 91, timesasked: 1667,timescorrect: 463, timescorrectwithhint: 628, timesincorrect: 370, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 21, questionid: 92, timesasked: 1912,timescorrect: 593, timescorrectwithhint: 757, timesincorrect: 362, timesincorrectwithhint: 200},
{year: 2024, month: 7, day: 21, questionid: 93, timesasked: 1824,timescorrect: 653, timescorrectwithhint: 775, timesincorrect: 258, timesincorrectwithhint: 138},
{year: 2024, month: 7, day: 21, questionid: 94, timesasked: 1644,timescorrect: 571, timescorrectwithhint: 688, timesincorrect: 250, timesincorrectwithhint: 135},
{year: 2024, month: 7, day: 21, questionid: 95, timesasked: 1595,timescorrect: 314, timescorrectwithhint: 523, timesincorrect: 483, timesincorrectwithhint: 275},
{year: 2024, month: 7, day: 21, questionid: 96, timesasked: 1493,timescorrect: 379, timescorrectwithhint: 541, timesincorrect: 367, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 21, questionid: 97, timesasked: 1867,timescorrect: 344, timescorrectwithhint: 598, timesincorrect: 589, timesincorrectwithhint: 336},
{year: 2024, month: 7, day: 23, questionid: 1, timesasked: 1731,timescorrect: 557, timescorrectwithhint: 698, timesincorrect: 307, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 23, questionid: 2, timesasked: 1323,timescorrect: 511, timescorrectwithhint: 585, timesincorrect: 149, timesincorrectwithhint: 78},
{year: 2024, month: 7, day: 23, questionid: 3, timesasked: 1476,timescorrect: 499, timescorrectwithhint: 609, timesincorrect: 238, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 23, questionid: 4, timesasked: 1181,timescorrect: 408, timescorrectwithhint: 493, timesincorrect: 181, timesincorrectwithhint: 99},
{year: 2024, month: 7, day: 23, questionid: 5, timesasked: 1321,timescorrect: 337, timescorrectwithhint: 480, timesincorrect: 322, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 23, questionid: 6, timesasked: 1937,timescorrect: 698, timescorrectwithhint: 826, timesincorrect: 269, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 23, questionid: 7, timesasked: 1271,timescorrect: 308, timescorrectwithhint: 452, timesincorrect: 326, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 23, questionid: 8, timesasked: 1329,timescorrect: 521, timescorrectwithhint: 591, timesincorrect: 143, timesincorrectwithhint: 74},
{year: 2024, month: 7, day: 23, questionid: 9, timesasked: 1370,timescorrect: 505, timescorrectwithhint: 590, timesincorrect: 179, timesincorrectwithhint: 96},
{year: 2024, month: 7, day: 23, questionid: 10, timesasked: 1235,timescorrect: 311, timescorrectwithhint: 446, timesincorrect: 305, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 23, questionid: 11, timesasked: 1450,timescorrect: 293, timescorrectwithhint: 480, timesincorrect: 431, timesincorrectwithhint: 246},
{year: 2024, month: 7, day: 23, questionid: 12, timesasked: 1899,timescorrect: 394, timescorrectwithhint: 635, timesincorrect: 555, timesincorrectwithhint: 315},
{year: 2024, month: 7, day: 23, questionid: 13, timesasked: 1757,timescorrect: 371, timescorrectwithhint: 592, timesincorrect: 506, timesincorrectwithhint: 288},
{year: 2024, month: 7, day: 23, questionid: 14, timesasked: 1278,timescorrect: 396, timescorrectwithhint: 506, timesincorrect: 242, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 23, questionid: 15, timesasked: 1180,timescorrect: 375, timescorrectwithhint: 473, timesincorrect: 214, timesincorrectwithhint: 118},
{year: 2024, month: 7, day: 23, questionid: 16, timesasked: 1437,timescorrect: 435, timescorrectwithhint: 562, timesincorrect: 283, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 23, questionid: 17, timesasked: 1335,timescorrect: 367, timescorrectwithhint: 500, timesincorrect: 300, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 23, questionid: 18, timesasked: 1764,timescorrect: 473, timescorrectwithhint: 654, timesincorrect: 408, timesincorrectwithhint: 229},
{year: 2024, month: 7, day: 23, questionid: 19, timesasked: 1267,timescorrect: 359, timescorrectwithhint: 481, timesincorrect: 274, timesincorrectwithhint: 153},
{year: 2024, month: 7, day: 23, questionid: 20, timesasked: 1392,timescorrect: 306, timescorrectwithhint: 476, timesincorrect: 389, timesincorrectwithhint: 221},
{year: 2024, month: 7, day: 23, questionid: 21, timesasked: 1471,timescorrect: 574, timescorrectwithhint: 653, timesincorrect: 161, timesincorrectwithhint: 83},
{year: 2024, month: 7, day: 23, questionid: 22, timesasked: 1153,timescorrect: 357, timescorrectwithhint: 456, timesincorrect: 218, timesincorrectwithhint: 122},
{year: 2024, month: 7, day: 23, questionid: 23, timesasked: 1170,timescorrect: 208, timescorrectwithhint: 370, timesincorrect: 376, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 23, questionid: 24, timesasked: 1056,timescorrect: 218, timescorrectwithhint: 352, timesincorrect: 309, timesincorrectwithhint: 177},
{year: 2024, month: 7, day: 23, questionid: 25, timesasked: 1071,timescorrect: 248, timescorrectwithhint: 373, timesincorrect: 287, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 23, questionid: 26, timesasked: 1140,timescorrect: 281, timescorrectwithhint: 408, timesincorrect: 288, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 23, questionid: 27, timesasked: 1851,timescorrect: 476, timescorrectwithhint: 674, timesincorrect: 449, timesincorrectwithhint: 252},
{year: 2024, month: 7, day: 23, questionid: 28, timesasked: 1246,timescorrect: 323, timescorrectwithhint: 455, timesincorrect: 299, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 23, questionid: 29, timesasked: 1541,timescorrect: 339, timescorrectwithhint: 527, timesincorrect: 431, timesincorrectwithhint: 244},
{year: 2024, month: 7, day: 23, questionid: 30, timesasked: 1001,timescorrect: 354, timescorrectwithhint: 423, timesincorrect: 145, timesincorrectwithhint: 79},
{year: 2024, month: 7, day: 23, questionid: 31, timesasked: 1203,timescorrect: 246, timescorrectwithhint: 400, timesincorrect: 354, timesincorrectwithhint: 203},
{year: 2024, month: 7, day: 23, questionid: 32, timesasked: 1338,timescorrect: 509, timescorrectwithhint: 586, timesincorrect: 159, timesincorrectwithhint: 84},
{year: 2024, month: 7, day: 23, questionid: 33, timesasked: 1226,timescorrect: 212, timescorrectwithhint: 384, timesincorrect: 400, timesincorrectwithhint: 230},
{year: 2024, month: 7, day: 23, questionid: 34, timesasked: 1811,timescorrect: 574, timescorrectwithhint: 725, timesincorrect: 330, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 23, questionid: 35, timesasked: 1498,timescorrect: 299, timescorrectwithhint: 494, timesincorrect: 449, timesincorrectwithhint: 256},
{year: 2024, month: 7, day: 23, questionid: 36, timesasked: 1576,timescorrect: 326, timescorrectwithhint: 526, timesincorrect: 461, timesincorrectwithhint: 263},
{year: 2024, month: 7, day: 23, questionid: 37, timesasked: 1737,timescorrect: 346, timescorrectwithhint: 572, timesincorrect: 522, timesincorrectwithhint: 297},
{year: 2024, month: 7, day: 23, questionid: 38, timesasked: 1484,timescorrect: 335, timescorrectwithhint: 513, timesincorrect: 406, timesincorrectwithhint: 230},
{year: 2024, month: 7, day: 23, questionid: 39, timesasked: 1078,timescorrect: 304, timescorrectwithhint: 409, timesincorrect: 234, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 23, questionid: 40, timesasked: 1084,timescorrect: 372, timescorrectwithhint: 451, timesincorrect: 169, timesincorrectwithhint: 92},
{year: 2024, month: 7, day: 23, questionid: 41, timesasked: 1200,timescorrect: 275, timescorrectwithhint: 417, timesincorrect: 324, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 23, questionid: 42, timesasked: 1531,timescorrect: 461, timescorrectwithhint: 598, timesincorrect: 303, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 23, questionid: 43, timesasked: 1314,timescorrect: 379, timescorrectwithhint: 503, timesincorrect: 277, timesincorrectwithhint: 155},
{year: 2024, month: 7, day: 23, questionid: 44, timesasked: 1429,timescorrect: 498, timescorrectwithhint: 599, timesincorrect: 216, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 23, questionid: 45, timesasked: 1154,timescorrect: 258, timescorrectwithhint: 397, timesincorrect: 318, timesincorrectwithhint: 181},
{year: 2024, month: 7, day: 23, questionid: 46, timesasked: 1083,timescorrect: 362, timescorrectwithhint: 444, timesincorrect: 179, timesincorrectwithhint: 98},
{year: 2024, month: 7, day: 23, questionid: 47, timesasked: 1157,timescorrect: 430, timescorrectwithhint: 501, timesincorrect: 148, timesincorrectwithhint: 78},
{year: 2024, month: 7, day: 23, questionid: 48, timesasked: 1701,timescorrect: 369, timescorrectwithhint: 578, timesincorrect: 481, timesincorrectwithhint: 273},
{year: 2024, month: 7, day: 23, questionid: 49, timesasked: 1645,timescorrect: 525, timescorrectwithhint: 660, timesincorrect: 297, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 23, questionid: 50, timesasked: 1426,timescorrect: 289, timescorrectwithhint: 473, timesincorrect: 423, timesincorrectwithhint: 241},
{year: 2024, month: 7, day: 23, questionid: 51, timesasked: 1039,timescorrect: 255, timescorrectwithhint: 371, timesincorrect: 264, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 23, questionid: 52, timesasked: 1878,timescorrect: 561, timescorrectwithhint: 731, timesincorrect: 377, timesincorrectwithhint: 209},
{year: 2024, month: 7, day: 23, questionid: 53, timesasked: 1159,timescorrect: 337, timescorrectwithhint: 445, timesincorrect: 242, timesincorrectwithhint: 135},
{year: 2024, month: 7, day: 23, questionid: 54, timesasked: 1341,timescorrect: 505, timescorrectwithhint: 585, timesincorrect: 164, timesincorrectwithhint: 87},
{year: 2024, month: 7, day: 23, questionid: 55, timesasked: 1197,timescorrect: 357, timescorrectwithhint: 465, timesincorrect: 241, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 23, questionid: 56, timesasked: 1935,timescorrect: 432, timescorrectwithhint: 665, timesincorrect: 534, timesincorrectwithhint: 304},
{year: 2024, month: 7, day: 23, questionid: 57, timesasked: 1088,timescorrect: 321, timescorrectwithhint: 421, timesincorrect: 222, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 23, questionid: 58, timesasked: 1285,timescorrect: 372, timescorrectwithhint: 493, timesincorrect: 269, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 23, questionid: 59, timesasked: 1841,timescorrect: 388, timescorrectwithhint: 619, timesincorrect: 532, timesincorrectwithhint: 302},
{year: 2024, month: 7, day: 23, questionid: 60, timesasked: 1971,timescorrect: 375, timescorrectwithhint: 639, timesincorrect: 609, timesincorrectwithhint: 348},
{year: 2024, month: 7, day: 23, questionid: 61, timesasked: 1535,timescorrect: 608, timescorrectwithhint: 687, timesincorrect: 158, timesincorrectwithhint: 82},
{year: 2024, month: 7, day: 23, questionid: 62, timesasked: 1358,timescorrect: 372, timescorrectwithhint: 508, timesincorrect: 306, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 23, questionid: 63, timesasked: 1367,timescorrect: 383, timescorrectwithhint: 517, timesincorrect: 299, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 23, questionid: 64, timesasked: 1968,timescorrect: 770, timescorrectwithhint: 875, timesincorrect: 213, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 23, questionid: 65, timesasked: 1692,timescorrect: 388, timescorrectwithhint: 588, timesincorrect: 457, timesincorrectwithhint: 259},
{year: 2024, month: 7, day: 23, questionid: 66, timesasked: 1012,timescorrect: 156, timescorrectwithhint: 306, timesincorrect: 349, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 23, questionid: 67, timesasked: 1075,timescorrect: 260, timescorrectwithhint: 382, timesincorrect: 276, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 23, questionid: 68, timesasked: 1611,timescorrect: 260, timescorrectwithhint: 494, timesincorrect: 544, timesincorrectwithhint: 313},
{year: 2024, month: 7, day: 23, questionid: 69, timesasked: 1035,timescorrect: 287, timescorrectwithhint: 389, timesincorrect: 230, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 23, questionid: 70, timesasked: 1901,timescorrect: 478, timescorrectwithhint: 686, timesincorrect: 472, timesincorrectwithhint: 265},
{year: 2024, month: 7, day: 23, questionid: 71, timesasked: 1319,timescorrect: 324, timescorrectwithhint: 471, timesincorrect: 335, timesincorrectwithhint: 189},
{year: 2024, month: 7, day: 23, questionid: 72, timesasked: 1601,timescorrect: 497, timescorrectwithhint: 634, timesincorrect: 302, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 23, questionid: 73, timesasked: 1431,timescorrect: 508, timescorrectwithhint: 605, timesincorrect: 207, timesincorrectwithhint: 111},
{year: 2024, month: 7, day: 23, questionid: 74, timesasked: 1997,timescorrect: 356, timescorrectwithhint: 633, timesincorrect: 642, timesincorrectwithhint: 366},
{year: 2024, month: 7, day: 23, questionid: 75, timesasked: 1564,timescorrect: 445, timescorrectwithhint: 595, timesincorrect: 336, timesincorrectwithhint: 188},
{year: 2024, month: 7, day: 23, questionid: 76, timesasked: 1275,timescorrect: 441, timescorrectwithhint: 532, timesincorrect: 196, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 23, questionid: 77, timesasked: 1209,timescorrect: 437, timescorrectwithhint: 516, timesincorrect: 166, timesincorrectwithhint: 90},
{year: 2024, month: 7, day: 23, questionid: 78, timesasked: 1480,timescorrect: 346, timescorrectwithhint: 518, timesincorrect: 393, timesincorrectwithhint: 223},
{year: 2024, month: 7, day: 23, questionid: 79, timesasked: 1137,timescorrect: 347, timescorrectwithhint: 447, timesincorrect: 221, timesincorrectwithhint: 122},
{year: 2024, month: 7, day: 23, questionid: 80, timesasked: 1046,timescorrect: 220, timescorrectwithhint: 351, timesincorrect: 302, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 23, questionid: 81, timesasked: 1333,timescorrect: 225, timescorrectwithhint: 414, timesincorrect: 441, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 23, questionid: 82, timesasked: 1711,timescorrect: 295, timescorrectwithhint: 536, timesincorrect: 560, timesincorrectwithhint: 320},
{year: 2024, month: 7, day: 23, questionid: 83, timesasked: 1484,timescorrect: 345, timescorrectwithhint: 518, timesincorrect: 396, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 23, questionid: 84, timesasked: 1350,timescorrect: 452, timescorrectwithhint: 555, timesincorrect: 222, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 23, questionid: 85, timesasked: 1322,timescorrect: 240, timescorrectwithhint: 422, timesincorrect: 420, timesincorrectwithhint: 240},
{year: 2024, month: 7, day: 23, questionid: 86, timesasked: 1513,timescorrect: 394, timescorrectwithhint: 554, timesincorrect: 361, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 23, questionid: 87, timesasked: 1965,timescorrect: 624, timescorrectwithhint: 787, timesincorrect: 357, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 23, questionid: 88, timesasked: 1508,timescorrect: 501, timescorrectwithhint: 617, timesincorrect: 252, timesincorrectwithhint: 138},
{year: 2024, month: 7, day: 23, questionid: 89, timesasked: 1188,timescorrect: 418, timescorrectwithhint: 500, timesincorrect: 175, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 23, questionid: 90, timesasked: 1796,timescorrect: 462, timescorrectwithhint: 654, timesincorrect: 435, timesincorrectwithhint: 245},
{year: 2024, month: 7, day: 23, questionid: 91, timesasked: 1483,timescorrect: 282, timescorrectwithhint: 481, timesincorrect: 458, timesincorrectwithhint: 262},
{year: 2024, month: 7, day: 23, questionid: 92, timesasked: 1979,timescorrect: 742, timescorrectwithhint: 860, timesincorrect: 247, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 23, questionid: 93, timesasked: 1177,timescorrect: 437, timescorrectwithhint: 509, timesincorrect: 150, timesincorrectwithhint: 81},
{year: 2024, month: 7, day: 23, questionid: 94, timesasked: 1967,timescorrect: 444, timescorrectwithhint: 679, timesincorrect: 538, timesincorrectwithhint: 306},
{year: 2024, month: 7, day: 23, questionid: 95, timesasked: 1193,timescorrect: 455, timescorrectwithhint: 524, timesincorrect: 140, timesincorrectwithhint: 74},
{year: 2024, month: 7, day: 23, questionid: 96, timesasked: 1488,timescorrect: 468, timescorrectwithhint: 593, timesincorrect: 275, timesincorrectwithhint: 152},
{year: 2024, month: 7, day: 23, questionid: 97, timesasked: 1252,timescorrect: 372, timescorrectwithhint: 486, timesincorrect: 253, timesincorrectwithhint: 141},
{year: 2024, month: 7, day: 24, questionid: 1, timesasked: 1361,timescorrect: 437, timescorrectwithhint: 548, timesincorrect: 242, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 24, questionid: 2, timesasked: 1018,timescorrect: 332, timescorrectwithhint: 413, timesincorrect: 176, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 24, questionid: 3, timesasked: 1436,timescorrect: 515, timescorrectwithhint: 611, timesincorrect: 202, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 24, questionid: 4, timesasked: 1098,timescorrect: 171, timescorrectwithhint: 333, timesincorrect: 377, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 24, questionid: 5, timesasked: 1721,timescorrect: 553, timescorrectwithhint: 693, timesincorrect: 307, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 24, questionid: 6, timesasked: 1872,timescorrect: 598, timescorrectwithhint: 752, timesincorrect: 337, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 24, questionid: 7, timesasked: 1762,timescorrect: 671, timescorrectwithhint: 772, timesincorrect: 209, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 24, questionid: 8, timesasked: 1343,timescorrect: 352, timescorrectwithhint: 493, timesincorrect: 319, timesincorrectwithhint: 179},
{year: 2024, month: 7, day: 24, questionid: 9, timesasked: 1980,timescorrect: 750, timescorrectwithhint: 865, timesincorrect: 239, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 24, questionid: 10, timesasked: 1790,timescorrect: 347, timescorrectwithhint: 584, timesincorrect: 547, timesincorrectwithhint: 312},
{year: 2024, month: 7, day: 24, questionid: 11, timesasked: 1508,timescorrect: 319, timescorrectwithhint: 508, timesincorrect: 434, timesincorrectwithhint: 247},
{year: 2024, month: 7, day: 24, questionid: 12, timesasked: 1993,timescorrect: 537, timescorrectwithhint: 741, timesincorrect: 458, timesincorrectwithhint: 257},
{year: 2024, month: 7, day: 24, questionid: 13, timesasked: 1021,timescorrect: 213, timescorrectwithhint: 342, timesincorrect: 297, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 24, questionid: 14, timesasked: 1847,timescorrect: 719, timescorrectwithhint: 819, timesincorrect: 204, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 24, questionid: 15, timesasked: 1369,timescorrect: 426, timescorrectwithhint: 543, timesincorrect: 258, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 24, questionid: 16, timesasked: 1202,timescorrect: 429, timescorrectwithhint: 510, timesincorrect: 171, timesincorrectwithhint: 92},
{year: 2024, month: 7, day: 24, questionid: 17, timesasked: 1216,timescorrect: 290, timescorrectwithhint: 429, timesincorrect: 317, timesincorrectwithhint: 180},
{year: 2024, month: 7, day: 24, questionid: 18, timesasked: 1420,timescorrect: 290, timescorrectwithhint: 472, timesincorrect: 419, timesincorrectwithhint: 239},
{year: 2024, month: 7, day: 24, questionid: 19, timesasked: 1380,timescorrect: 409, timescorrectwithhint: 535, timesincorrect: 280, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 24, questionid: 20, timesasked: 1617,timescorrect: 641, timescorrectwithhint: 724, timesincorrect: 166, timesincorrectwithhint: 86},
{year: 2024, month: 7, day: 24, questionid: 21, timesasked: 1486,timescorrect: 298, timescorrectwithhint: 491, timesincorrect: 444, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 24, questionid: 22, timesasked: 1642,timescorrect: 472, timescorrectwithhint: 628, timesincorrect: 348, timesincorrectwithhint: 194},
{year: 2024, month: 7, day: 24, questionid: 23, timesasked: 1909,timescorrect: 314, timescorrectwithhint: 589, timesincorrect: 640, timesincorrectwithhint: 366},
{year: 2024, month: 7, day: 24, questionid: 24, timesasked: 1091,timescorrect: 395, timescorrectwithhint: 466, timesincorrect: 150, timesincorrectwithhint: 80},
{year: 2024, month: 7, day: 24, questionid: 25, timesasked: 1552,timescorrect: 563, timescorrectwithhint: 664, timesincorrect: 212, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 24, questionid: 26, timesasked: 1029,timescorrect: 206, timescorrectwithhint: 339, timesincorrect: 308, timesincorrectwithhint: 176},
{year: 2024, month: 7, day: 24, questionid: 27, timesasked: 1965,timescorrect: 640, timescorrectwithhint: 796, timesincorrect: 342, timesincorrectwithhint: 187},
{year: 2024, month: 7, day: 24, questionid: 28, timesasked: 1193,timescorrect: 410, timescorrectwithhint: 497, timesincorrect: 185, timesincorrectwithhint: 101},
{year: 2024, month: 7, day: 24, questionid: 29, timesasked: 1899,timescorrect: 444, timescorrectwithhint: 665, timesincorrect: 504, timesincorrectwithhint: 286},
{year: 2024, month: 7, day: 24, questionid: 30, timesasked: 1226,timescorrect: 373, timescorrectwithhint: 481, timesincorrect: 239, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 24, questionid: 31, timesasked: 1968,timescorrect: 524, timescorrectwithhint: 728, timesincorrect: 459, timesincorrectwithhint: 257},
{year: 2024, month: 7, day: 24, questionid: 32, timesasked: 1050,timescorrect: 394, timescorrectwithhint: 457, timesincorrect: 130, timesincorrectwithhint: 69},
{year: 2024, month: 7, day: 24, questionid: 33, timesasked: 1636,timescorrect: 514, timescorrectwithhint: 652, timesincorrect: 303, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 24, questionid: 34, timesasked: 1144,timescorrect: 351, timescorrectwithhint: 451, timesincorrect: 220, timesincorrectwithhint: 122},
{year: 2024, month: 7, day: 24, questionid: 35, timesasked: 1129,timescorrect: 416, timescorrectwithhint: 486, timesincorrect: 148, timesincorrectwithhint: 79},
{year: 2024, month: 7, day: 24, questionid: 36, timesasked: 1035,timescorrect: 395, timescorrectwithhint: 454, timesincorrect: 122, timesincorrectwithhint: 64},
{year: 2024, month: 7, day: 24, questionid: 37, timesasked: 1148,timescorrect: 245, timescorrectwithhint: 388, timesincorrect: 328, timesincorrectwithhint: 187},
{year: 2024, month: 7, day: 24, questionid: 38, timesasked: 1970,timescorrect: 737, timescorrectwithhint: 855, timesincorrect: 247, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 24, questionid: 39, timesasked: 1634,timescorrect: 593, timescorrectwithhint: 699, timesincorrect: 223, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 24, questionid: 40, timesasked: 1718,timescorrect: 293, timescorrectwithhint: 537, timesincorrect: 565, timesincorrectwithhint: 323},
{year: 2024, month: 7, day: 24, questionid: 41, timesasked: 1740,timescorrect: 586, timescorrectwithhint: 717, timesincorrect: 283, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 24, questionid: 42, timesasked: 1898,timescorrect: 513, timescorrectwithhint: 706, timesincorrect: 435, timesincorrectwithhint: 244},
{year: 2024, month: 7, day: 24, questionid: 43, timesasked: 1810,timescorrect: 455, timescorrectwithhint: 653, timesincorrect: 449, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 24, questionid: 44, timesasked: 1659,timescorrect: 376, timescorrectwithhint: 574, timesincorrect: 452, timesincorrectwithhint: 257},
{year: 2024, month: 7, day: 24, questionid: 45, timesasked: 1949,timescorrect: 685, timescorrectwithhint: 820, timesincorrect: 288, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 24, questionid: 46, timesasked: 1677,timescorrect: 506, timescorrectwithhint: 656, timesincorrect: 331, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 24, questionid: 47, timesasked: 1287,timescorrect: 230, timescorrectwithhint: 408, timesincorrect: 412, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 24, questionid: 48, timesasked: 1191,timescorrect: 244, timescorrectwithhint: 396, timesincorrect: 351, timesincorrectwithhint: 200},
{year: 2024, month: 7, day: 24, questionid: 49, timesasked: 1284,timescorrect: 474, timescorrectwithhint: 554, timesincorrect: 167, timesincorrectwithhint: 89},
{year: 2024, month: 7, day: 24, questionid: 50, timesasked: 1831,timescorrect: 595, timescorrectwithhint: 742, timesincorrect: 319, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 24, questionid: 51, timesasked: 1830,timescorrect: 695, timescorrectwithhint: 801, timesincorrect: 219, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 24, questionid: 52, timesasked: 1937,timescorrect: 769, timescorrectwithhint: 868, timesincorrect: 199, timesincorrectwithhint: 101},
{year: 2024, month: 7, day: 24, questionid: 53, timesasked: 1241,timescorrect: 236, timescorrectwithhint: 402, timesincorrect: 384, timesincorrectwithhint: 219},
{year: 2024, month: 7, day: 24, questionid: 54, timesasked: 1614,timescorrect: 456, timescorrectwithhint: 612, timesincorrect: 350, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 24, questionid: 55, timesasked: 1463,timescorrect: 294, timescorrectwithhint: 483, timesincorrect: 437, timesincorrectwithhint: 249},
{year: 2024, month: 7, day: 24, questionid: 56, timesasked: 1099,timescorrect: 201, timescorrectwithhint: 351, timesincorrect: 348, timesincorrectwithhint: 199},
{year: 2024, month: 7, day: 24, questionid: 57, timesasked: 1777,timescorrect: 546, timescorrectwithhint: 701, timesincorrect: 341, timesincorrectwithhint: 189},
{year: 2024, month: 7, day: 24, questionid: 58, timesasked: 1666,timescorrect: 338, timescorrectwithhint: 552, timesincorrect: 494, timesincorrectwithhint: 282},
{year: 2024, month: 7, day: 24, questionid: 59, timesasked: 1942,timescorrect: 396, timescorrectwithhint: 645, timesincorrect: 574, timesincorrectwithhint: 327},
{year: 2024, month: 7, day: 24, questionid: 60, timesasked: 1696,timescorrect: 503, timescorrectwithhint: 658, timesincorrect: 344, timesincorrectwithhint: 191},
{year: 2024, month: 7, day: 24, questionid: 61, timesasked: 1714,timescorrect: 578, timescorrectwithhint: 707, timesincorrect: 278, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 24, questionid: 62, timesasked: 1919,timescorrect: 293, timescorrectwithhint: 579, timesincorrect: 666, timesincorrectwithhint: 381},
{year: 2024, month: 7, day: 24, questionid: 63, timesasked: 1519,timescorrect: 325, timescorrectwithhint: 514, timesincorrect: 434, timesincorrectwithhint: 246},
{year: 2024, month: 7, day: 24, questionid: 64, timesasked: 1149,timescorrect: 260, timescorrectwithhint: 397, timesincorrect: 313, timesincorrectwithhint: 179},
{year: 2024, month: 7, day: 24, questionid: 65, timesasked: 1768,timescorrect: 542, timescorrectwithhint: 696, timesincorrect: 341, timesincorrectwithhint: 189},
{year: 2024, month: 7, day: 24, questionid: 66, timesasked: 1882,timescorrect: 297, timescorrectwithhint: 573, timesincorrect: 643, timesincorrectwithhint: 369},
{year: 2024, month: 7, day: 24, questionid: 67, timesasked: 1168,timescorrect: 206, timescorrectwithhint: 369, timesincorrect: 377, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 24, questionid: 68, timesasked: 1404,timescorrect: 379, timescorrectwithhint: 522, timesincorrect: 322, timesincorrectwithhint: 181},
{year: 2024, month: 7, day: 24, questionid: 69, timesasked: 1791,timescorrect: 506, timescorrectwithhint: 679, timesincorrect: 389, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 24, questionid: 70, timesasked: 1847,timescorrect: 497, timescorrectwithhint: 686, timesincorrect: 425, timesincorrectwithhint: 239},
{year: 2024, month: 7, day: 24, questionid: 71, timesasked: 1282,timescorrect: 247, timescorrectwithhint: 417, timesincorrect: 393, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 24, questionid: 72, timesasked: 1171,timescorrect: 308, timescorrectwithhint: 431, timesincorrect: 276, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 24, questionid: 73, timesasked: 1278,timescorrect: 297, timescorrectwithhint: 446, timesincorrect: 341, timesincorrectwithhint: 194},
{year: 2024, month: 7, day: 24, questionid: 74, timesasked: 1755,timescorrect: 311, timescorrectwithhint: 555, timesincorrect: 566, timesincorrectwithhint: 323},
{year: 2024, month: 7, day: 24, questionid: 75, timesasked: 1207,timescorrect: 445, timescorrectwithhint: 520, timesincorrect: 158, timesincorrectwithhint: 84},
{year: 2024, month: 7, day: 24, questionid: 76, timesasked: 1332,timescorrect: 343, timescorrectwithhint: 486, timesincorrect: 322, timesincorrectwithhint: 181},
{year: 2024, month: 7, day: 24, questionid: 77, timesasked: 1594,timescorrect: 600, timescorrectwithhint: 695, timesincorrect: 196, timesincorrectwithhint: 103},
{year: 2024, month: 7, day: 24, questionid: 78, timesasked: 1398,timescorrect: 289, timescorrectwithhint: 467, timesincorrect: 409, timesincorrectwithhint: 233},
{year: 2024, month: 7, day: 24, questionid: 79, timesasked: 1238,timescorrect: 283, timescorrectwithhint: 430, timesincorrect: 335, timesincorrectwithhint: 190},
{year: 2024, month: 7, day: 24, questionid: 80, timesasked: 1255,timescorrect: 215, timescorrectwithhint: 392, timesincorrect: 412, timesincorrectwithhint: 236},
{year: 2024, month: 7, day: 24, questionid: 81, timesasked: 1187,timescorrect: 228, timescorrectwithhint: 386, timesincorrect: 364, timesincorrectwithhint: 209},
{year: 2024, month: 7, day: 24, questionid: 82, timesasked: 1559,timescorrect: 338, timescorrectwithhint: 530, timesincorrect: 440, timesincorrectwithhint: 251},
{year: 2024, month: 7, day: 24, questionid: 83, timesasked: 1137,timescorrect: 243, timescorrectwithhint: 384, timesincorrect: 325, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 24, questionid: 84, timesasked: 1196,timescorrect: 202, timescorrectwithhint: 372, timesincorrect: 395, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 24, questionid: 85, timesasked: 1882,timescorrect: 469, timescorrectwithhint: 677, timesincorrect: 471, timesincorrectwithhint: 265},
{year: 2024, month: 7, day: 24, questionid: 86, timesasked: 1951,timescorrect: 376, timescorrectwithhint: 635, timesincorrect: 599, timesincorrectwithhint: 341},
{year: 2024, month: 7, day: 24, questionid: 87, timesasked: 1503,timescorrect: 506, timescorrectwithhint: 619, timesincorrect: 244, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 24, questionid: 88, timesasked: 1184,timescorrect: 185, timescorrectwithhint: 359, timesincorrect: 406, timesincorrectwithhint: 234},
{year: 2024, month: 7, day: 24, questionid: 89, timesasked: 1871,timescorrect: 523, timescorrectwithhint: 707, timesincorrect: 411, timesincorrectwithhint: 230},
{year: 2024, month: 7, day: 24, questionid: 90, timesasked: 1290,timescorrect: 346, timescorrectwithhint: 478, timesincorrect: 298, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 24, questionid: 91, timesasked: 1073,timescorrect: 298, timescorrectwithhint: 404, timesincorrect: 238, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 24, questionid: 92, timesasked: 1230,timescorrect: 340, timescorrectwithhint: 462, timesincorrect: 274, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 24, questionid: 93, timesasked: 1460,timescorrect: 256, timescorrectwithhint: 460, timesincorrect: 473, timesincorrectwithhint: 271},
{year: 2024, month: 7, day: 24, questionid: 94, timesasked: 1420,timescorrect: 305, timescorrectwithhint: 481, timesincorrect: 404, timesincorrectwithhint: 230},
{year: 2024, month: 7, day: 24, questionid: 95, timesasked: 1645,timescorrect: 424, timescorrectwithhint: 600, timesincorrect: 397, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 24, questionid: 96, timesasked: 1692,timescorrect: 486, timescorrectwithhint: 646, timesincorrect: 359, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 24, questionid: 97, timesasked: 1261,timescorrect: 417, timescorrectwithhint: 515, timesincorrect: 213, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 25, questionid: 1, timesasked: 1223,timescorrect: 438, timescorrectwithhint: 519, timesincorrect: 173, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 25, questionid: 2, timesasked: 1952,timescorrect: 706, timescorrectwithhint: 833, timesincorrect: 269, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 25, questionid: 3, timesasked: 1092,timescorrect: 330, timescorrectwithhint: 427, timesincorrect: 215, timesincorrectwithhint: 120},
{year: 2024, month: 7, day: 25, questionid: 4, timesasked: 1500,timescorrect: 546, timescorrectwithhint: 643, timesincorrect: 203, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 25, questionid: 5, timesasked: 1913,timescorrect: 376, timescorrectwithhint: 627, timesincorrect: 580, timesincorrectwithhint: 330},
{year: 2024, month: 7, day: 25, questionid: 6, timesasked: 1059,timescorrect: 222, timescorrectwithhint: 356, timesincorrect: 306, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 25, questionid: 7, timesasked: 1706,timescorrect: 324, timescorrectwithhint: 553, timesincorrect: 528, timesincorrectwithhint: 301},
{year: 2024, month: 7, day: 25, questionid: 8, timesasked: 1630,timescorrect: 651, timescorrectwithhint: 733, timesincorrect: 163, timesincorrectwithhint: 83},
{year: 2024, month: 7, day: 25, questionid: 9, timesasked: 1555,timescorrect: 241, timescorrectwithhint: 471, timesincorrect: 536, timesincorrectwithhint: 307},
{year: 2024, month: 7, day: 25, questionid: 10, timesasked: 1853,timescorrect: 523, timescorrectwithhint: 702, timesincorrect: 403, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 25, questionid: 11, timesasked: 1285,timescorrect: 273, timescorrectwithhint: 433, timesincorrect: 369, timesincorrectwithhint: 210},
{year: 2024, month: 7, day: 25, questionid: 12, timesasked: 1466,timescorrect: 559, timescorrectwithhint: 643, timesincorrect: 173, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 25, questionid: 13, timesasked: 1024,timescorrect: 345, timescorrectwithhint: 422, timesincorrect: 166, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 25, questionid: 14, timesasked: 1753,timescorrect: 403, timescorrectwithhint: 610, timesincorrect: 473, timesincorrectwithhint: 267},
{year: 2024, month: 7, day: 25, questionid: 15, timesasked: 1740,timescorrect: 497, timescorrectwithhint: 663, timesincorrect: 372, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 25, questionid: 16, timesasked: 1076,timescorrect: 305, timescorrectwithhint: 409, timesincorrect: 232, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 25, questionid: 17, timesasked: 1962,timescorrect: 618, timescorrectwithhint: 783, timesincorrect: 362, timesincorrectwithhint: 199},
{year: 2024, month: 7, day: 25, questionid: 18, timesasked: 1245,timescorrect: 478, timescorrectwithhint: 548, timesincorrect: 144, timesincorrectwithhint: 75},
{year: 2024, month: 7, day: 25, questionid: 19, timesasked: 1576,timescorrect: 403, timescorrectwithhint: 572, timesincorrect: 384, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 25, questionid: 20, timesasked: 1168,timescorrect: 297, timescorrectwithhint: 423, timesincorrect: 286, timesincorrectwithhint: 162},
{year: 2024, month: 7, day: 25, questionid: 21, timesasked: 1143,timescorrect: 252, timescorrectwithhint: 391, timesincorrect: 319, timesincorrectwithhint: 181},
{year: 2024, month: 7, day: 25, questionid: 22, timesasked: 1504,timescorrect: 274, timescorrectwithhint: 480, timesincorrect: 477, timesincorrectwithhint: 273},
{year: 2024, month: 7, day: 25, questionid: 23, timesasked: 1466,timescorrect: 271, timescorrectwithhint: 471, timesincorrect: 461, timesincorrectwithhint: 263},
{year: 2024, month: 7, day: 25, questionid: 24, timesasked: 1114,timescorrect: 286, timescorrectwithhint: 405, timesincorrect: 270, timesincorrectwithhint: 153},
{year: 2024, month: 7, day: 25, questionid: 25, timesasked: 1221,timescorrect: 419, timescorrectwithhint: 507, timesincorrect: 191, timesincorrectwithhint: 104},
{year: 2024, month: 7, day: 25, questionid: 26, timesasked: 1205,timescorrect: 261, timescorrectwithhint: 409, timesincorrect: 341, timesincorrectwithhint: 194},
{year: 2024, month: 7, day: 25, questionid: 27, timesasked: 1770,timescorrect: 508, timescorrectwithhint: 676, timesincorrect: 376, timesincorrectwithhint: 210},
{year: 2024, month: 7, day: 25, questionid: 28, timesasked: 1116,timescorrect: 401, timescorrectwithhint: 475, timesincorrect: 156, timesincorrectwithhint: 84},
{year: 2024, month: 7, day: 25, questionid: 29, timesasked: 1646,timescorrect: 265, timescorrectwithhint: 505, timesincorrect: 557, timesincorrectwithhint: 319},
{year: 2024, month: 7, day: 25, questionid: 30, timesasked: 1669,timescorrect: 466, timescorrectwithhint: 630, timesincorrect: 367, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 25, questionid: 31, timesasked: 1251,timescorrect: 251, timescorrectwithhint: 413, timesincorrect: 374, timesincorrectwithhint: 213},
{year: 2024, month: 7, day: 25, questionid: 32, timesasked: 1852,timescorrect: 498, timescorrectwithhint: 687, timesincorrect: 427, timesincorrectwithhint: 240},
{year: 2024, month: 7, day: 25, questionid: 33, timesasked: 1445,timescorrect: 541, timescorrectwithhint: 628, timesincorrect: 180, timesincorrectwithhint: 96},
{year: 2024, month: 7, day: 25, questionid: 34, timesasked: 1486,timescorrect: 509, timescorrectwithhint: 617, timesincorrect: 233, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 25, questionid: 35, timesasked: 1260,timescorrect: 343, timescorrectwithhint: 470, timesincorrect: 286, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 25, questionid: 36, timesasked: 1489,timescorrect: 471, timescorrectwithhint: 595, timesincorrect: 273, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 25, questionid: 37, timesasked: 1717,timescorrect: 257, timescorrectwithhint: 515, timesincorrect: 600, timesincorrectwithhint: 345},
{year: 2024, month: 7, day: 25, questionid: 38, timesasked: 1701,timescorrect: 675, timescorrectwithhint: 762, timesincorrect: 174, timesincorrectwithhint: 90},
{year: 2024, month: 7, day: 25, questionid: 39, timesasked: 1796,timescorrect: 495, timescorrectwithhint: 674, timesincorrect: 402, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 25, questionid: 40, timesasked: 1840,timescorrect: 584, timescorrectwithhint: 737, timesincorrect: 335, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 25, questionid: 41, timesasked: 1038,timescorrect: 211, timescorrectwithhint: 344, timesincorrect: 307, timesincorrectwithhint: 176},
{year: 2024, month: 7, day: 25, questionid: 42, timesasked: 1694,timescorrect: 543, timescorrectwithhint: 681, timesincorrect: 303, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 25, questionid: 43, timesasked: 1515,timescorrect: 258, timescorrectwithhint: 473, timesincorrect: 498, timesincorrectwithhint: 286},
{year: 2024, month: 7, day: 25, questionid: 44, timesasked: 1474,timescorrect: 269, timescorrectwithhint: 471, timesincorrect: 467, timesincorrectwithhint: 267},
{year: 2024, month: 7, day: 25, questionid: 45, timesasked: 1224,timescorrect: 230, timescorrectwithhint: 395, timesincorrect: 381, timesincorrectwithhint: 218},
{year: 2024, month: 7, day: 25, questionid: 46, timesasked: 1281,timescorrect: 459, timescorrectwithhint: 544, timesincorrect: 181, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 25, questionid: 47, timesasked: 1763,timescorrect: 505, timescorrectwithhint: 673, timesincorrect: 375, timesincorrectwithhint: 210},
{year: 2024, month: 7, day: 25, questionid: 48, timesasked: 1556,timescorrect: 518, timescorrectwithhint: 637, timesincorrect: 259, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 25, questionid: 49, timesasked: 1504,timescorrect: 537, timescorrectwithhint: 638, timesincorrect: 214, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 25, questionid: 50, timesasked: 1684,timescorrect: 639, timescorrectwithhint: 737, timesincorrect: 202, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 25, questionid: 51, timesasked: 1269,timescorrect: 468, timescorrectwithhint: 547, timesincorrect: 165, timesincorrectwithhint: 89},
{year: 2024, month: 7, day: 25, questionid: 52, timesasked: 1089,timescorrect: 330, timescorrectwithhint: 427, timesincorrect: 213, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 25, questionid: 53, timesasked: 1527,timescorrect: 521, timescorrectwithhint: 633, timesincorrect: 242, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 25, questionid: 54, timesasked: 1224,timescorrect: 290, timescorrectwithhint: 431, timesincorrect: 321, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 25, questionid: 55, timesasked: 1804,timescorrect: 339, timescorrectwithhint: 582, timesincorrect: 562, timesincorrectwithhint: 321},
{year: 2024, month: 7, day: 25, questionid: 56, timesasked: 1010,timescorrect: 283, timescorrectwithhint: 382, timesincorrect: 221, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 25, questionid: 57, timesasked: 1185,timescorrect: 224, timescorrectwithhint: 383, timesincorrect: 367, timesincorrectwithhint: 211},
{year: 2024, month: 7, day: 25, questionid: 58, timesasked: 1671,timescorrect: 452, timescorrectwithhint: 622, timesincorrect: 382, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 25, questionid: 59, timesasked: 1294,timescorrect: 261, timescorrectwithhint: 428, timesincorrect: 385, timesincorrectwithhint: 220},
{year: 2024, month: 7, day: 25, questionid: 60, timesasked: 1507,timescorrect: 371, timescorrectwithhint: 539, timesincorrect: 382, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 25, questionid: 61, timesasked: 1595,timescorrect: 518, timescorrectwithhint: 646, timesincorrect: 278, timesincorrectwithhint: 153},
{year: 2024, month: 7, day: 25, questionid: 62, timesasked: 1220,timescorrect: 225, timescorrectwithhint: 391, timesincorrect: 384, timesincorrectwithhint: 220},
{year: 2024, month: 7, day: 25, questionid: 63, timesasked: 1789,timescorrect: 327, timescorrectwithhint: 572, timesincorrect: 566, timesincorrectwithhint: 324},
{year: 2024, month: 7, day: 25, questionid: 64, timesasked: 1471,timescorrect: 369, timescorrectwithhint: 530, timesincorrect: 366, timesincorrectwithhint: 206},
{year: 2024, month: 7, day: 25, questionid: 65, timesasked: 1890,timescorrect: 712, timescorrectwithhint: 824, timesincorrect: 232, timesincorrectwithhint: 122},
{year: 2024, month: 7, day: 25, questionid: 66, timesasked: 1700,timescorrect: 498, timescorrectwithhint: 655, timesincorrect: 351, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 25, questionid: 67, timesasked: 1823,timescorrect: 668, timescorrectwithhint: 784, timesincorrect: 242, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 25, questionid: 68, timesasked: 1767,timescorrect: 373, timescorrectwithhint: 595, timesincorrect: 509, timesincorrectwithhint: 290},
{year: 2024, month: 7, day: 25, questionid: 69, timesasked: 1679,timescorrect: 522, timescorrectwithhint: 666, timesincorrect: 317, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 25, questionid: 70, timesasked: 1777,timescorrect: 666, timescorrectwithhint: 773, timesincorrect: 221, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 25, questionid: 71, timesasked: 1115,timescorrect: 374, timescorrectwithhint: 459, timesincorrect: 182, timesincorrectwithhint: 100},
{year: 2024, month: 7, day: 25, questionid: 72, timesasked: 1968,timescorrect: 676, timescorrectwithhint: 819, timesincorrect: 307, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 25, questionid: 73, timesasked: 1527,timescorrect: 343, timescorrectwithhint: 526, timesincorrect: 420, timesincorrectwithhint: 238},
{year: 2024, month: 7, day: 25, questionid: 74, timesasked: 1800,timescorrect: 655, timescorrectwithhint: 771, timesincorrect: 244, timesincorrectwithhint: 130},
{year: 2024, month: 7, day: 25, questionid: 75, timesasked: 1114,timescorrect: 296, timescorrectwithhint: 412, timesincorrect: 260, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 25, questionid: 76, timesasked: 1496,timescorrect: 302, timescorrectwithhint: 495, timesincorrect: 445, timesincorrectwithhint: 254},
{year: 2024, month: 7, day: 25, questionid: 77, timesasked: 1007,timescorrect: 326, timescorrectwithhint: 407, timesincorrect: 176, timesincorrectwithhint: 98},
{year: 2024, month: 7, day: 25, questionid: 78, timesasked: 1934,timescorrect: 603, timescorrectwithhint: 768, timesincorrect: 363, timesincorrectwithhint: 200},
{year: 2024, month: 7, day: 25, questionid: 79, timesasked: 1815,timescorrect: 334, timescorrectwithhint: 581, timesincorrect: 573, timesincorrectwithhint: 327},
{year: 2024, month: 7, day: 25, questionid: 80, timesasked: 1834,timescorrect: 483, timescorrectwithhint: 675, timesincorrect: 433, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 25, questionid: 81, timesasked: 1113,timescorrect: 388, timescorrectwithhint: 466, timesincorrect: 168, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 25, questionid: 82, timesasked: 1972,timescorrect: 379, timescorrectwithhint: 642, timesincorrect: 606, timesincorrectwithhint: 345},
{year: 2024, month: 7, day: 25, questionid: 83, timesasked: 1224,timescorrect: 418, timescorrectwithhint: 508, timesincorrect: 193, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 25, questionid: 84, timesasked: 1301,timescorrect: 285, timescorrectwithhint: 444, timesincorrect: 364, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 25, questionid: 85, timesasked: 1571,timescorrect: 291, timescorrectwithhint: 505, timesincorrect: 493, timesincorrectwithhint: 282},
{year: 2024, month: 7, day: 25, questionid: 86, timesasked: 1574,timescorrect: 625, timescorrectwithhint: 705, timesincorrect: 161, timesincorrectwithhint: 83},
{year: 2024, month: 7, day: 25, questionid: 87, timesasked: 1964,timescorrect: 469, timescorrectwithhint: 694, timesincorrect: 512, timesincorrectwithhint: 289},
{year: 2024, month: 7, day: 25, questionid: 88, timesasked: 1830,timescorrect: 363, timescorrectwithhint: 602, timesincorrect: 551, timesincorrectwithhint: 314},
{year: 2024, month: 7, day: 25, questionid: 89, timesasked: 1637,timescorrect: 609, timescorrectwithhint: 709, timesincorrect: 209, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 25, questionid: 90, timesasked: 1505,timescorrect: 286, timescorrectwithhint: 487, timesincorrect: 466, timesincorrectwithhint: 266},
{year: 2024, month: 7, day: 25, questionid: 91, timesasked: 1956,timescorrect: 327, timescorrectwithhint: 607, timesincorrect: 650, timesincorrectwithhint: 372},
{year: 2024, month: 7, day: 25, questionid: 92, timesasked: 1590,timescorrect: 309, timescorrectwithhint: 519, timesincorrect: 485, timesincorrectwithhint: 277},
{year: 2024, month: 7, day: 25, questionid: 93, timesasked: 1502,timescorrect: 500, timescorrectwithhint: 615, timesincorrect: 250, timesincorrectwithhint: 137},
{year: 2024, month: 7, day: 25, questionid: 94, timesasked: 1998,timescorrect: 381, timescorrectwithhint: 648, timesincorrect: 617, timesincorrectwithhint: 352},
{year: 2024, month: 7, day: 25, questionid: 95, timesasked: 1770,timescorrect: 539, timescorrectwithhint: 695, timesincorrect: 345, timesincorrectwithhint: 191},
{year: 2024, month: 7, day: 25, questionid: 96, timesasked: 1160,timescorrect: 273, timescorrectwithhint: 407, timesincorrect: 306, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 25, questionid: 97, timesasked: 1653,timescorrect: 282, timescorrectwithhint: 516, timesincorrect: 544, timesincorrectwithhint: 311},
{year: 2024, month: 7, day: 26, questionid: 1, timesasked: 1421,timescorrect: 259, timescorrectwithhint: 454, timesincorrect: 450, timesincorrectwithhint: 258},
{year: 2024, month: 7, day: 26, questionid: 2, timesasked: 1913,timescorrect: 525, timescorrectwithhint: 717, timesincorrect: 430, timesincorrectwithhint: 241},
{year: 2024, month: 7, day: 26, questionid: 3, timesasked: 1188,timescorrect: 240, timescorrectwithhint: 393, timesincorrect: 353, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 26, questionid: 4, timesasked: 1475,timescorrect: 490, timescorrectwithhint: 604, timesincorrect: 246, timesincorrectwithhint: 135},
{year: 2024, month: 7, day: 26, questionid: 5, timesasked: 1729,timescorrect: 301, timescorrectwithhint: 544, timesincorrect: 562, timesincorrectwithhint: 322},
{year: 2024, month: 7, day: 26, questionid: 6, timesasked: 1137,timescorrect: 280, timescorrectwithhint: 406, timesincorrect: 288, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 26, questionid: 7, timesasked: 1565,timescorrect: 612, timescorrectwithhint: 696, timesincorrect: 169, timesincorrectwithhint: 88},
{year: 2024, month: 7, day: 26, questionid: 8, timesasked: 1142,timescorrect: 374, timescorrectwithhint: 464, timesincorrect: 196, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 26, questionid: 9, timesasked: 1032,timescorrect: 410, timescorrectwithhint: 463, timesincorrect: 105, timesincorrectwithhint: 54},
{year: 2024, month: 7, day: 26, questionid: 10, timesasked: 1890,timescorrect: 724, timescorrectwithhint: 831, timesincorrect: 220, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 26, questionid: 11, timesasked: 1943,timescorrect: 323, timescorrectwithhint: 602, timesincorrect: 647, timesincorrectwithhint: 371},
{year: 2024, month: 7, day: 26, questionid: 12, timesasked: 1522,timescorrect: 293, timescorrectwithhint: 495, timesincorrect: 467, timesincorrectwithhint: 267},
{year: 2024, month: 7, day: 26, questionid: 13, timesasked: 1667,timescorrect: 628, timescorrectwithhint: 727, timesincorrect: 204, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 26, questionid: 14, timesasked: 1504,timescorrect: 327, timescorrectwithhint: 512, timesincorrect: 424, timesincorrectwithhint: 241},
{year: 2024, month: 7, day: 26, questionid: 15, timesasked: 1655,timescorrect: 302, timescorrectwithhint: 528, timesincorrect: 525, timesincorrectwithhint: 300},
{year: 2024, month: 7, day: 26, questionid: 16, timesasked: 1494,timescorrect: 310, timescorrectwithhint: 500, timesincorrect: 436, timesincorrectwithhint: 248},
{year: 2024, month: 7, day: 26, questionid: 17, timesasked: 1003,timescorrect: 204, timescorrectwithhint: 333, timesincorrect: 297, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 26, questionid: 18, timesasked: 1731,timescorrect: 506, timescorrectwithhint: 667, timesincorrect: 359, timesincorrectwithhint: 199},
{year: 2024, month: 7, day: 26, questionid: 19, timesasked: 1801,timescorrect: 493, timescorrectwithhint: 674, timesincorrect: 407, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 26, questionid: 20, timesasked: 1922,timescorrect: 559, timescorrectwithhint: 739, timesincorrect: 401, timesincorrectwithhint: 223},
{year: 2024, month: 7, day: 26, questionid: 21, timesasked: 1867,timescorrect: 301, timescorrectwithhint: 573, timesincorrect: 631, timesincorrectwithhint: 362},
{year: 2024, month: 7, day: 26, questionid: 22, timesasked: 1813,timescorrect: 544, timescorrectwithhint: 707, timesincorrect: 361, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 26, questionid: 23, timesasked: 1370,timescorrect: 462, timescorrectwithhint: 565, timesincorrect: 222, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 26, questionid: 24, timesasked: 1939,timescorrect: 712, timescorrectwithhint: 834, timesincorrect: 257, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 26, questionid: 25, timesasked: 1474,timescorrect: 581, timescorrectwithhint: 658, timesincorrect: 155, timesincorrectwithhint: 80},
{year: 2024, month: 7, day: 26, questionid: 26, timesasked: 1702,timescorrect: 613, timescorrectwithhint: 725, timesincorrect: 237, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 26, questionid: 27, timesasked: 1504,timescorrect: 368, timescorrectwithhint: 536, timesincorrect: 383, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 26, questionid: 28, timesasked: 1327,timescorrect: 236, timescorrectwithhint: 420, timesincorrect: 426, timesincorrectwithhint: 245},
{year: 2024, month: 7, day: 26, questionid: 29, timesasked: 1510,timescorrect: 276, timescorrectwithhint: 482, timesincorrect: 478, timesincorrectwithhint: 274},
{year: 2024, month: 7, day: 26, questionid: 30, timesasked: 1386,timescorrect: 324, timescorrectwithhint: 485, timesincorrect: 368, timesincorrectwithhint: 209},
{year: 2024, month: 7, day: 26, questionid: 31, timesasked: 1943,timescorrect: 735, timescorrectwithhint: 849, timesincorrect: 236, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 26, questionid: 32, timesasked: 1671,timescorrect: 618, timescorrectwithhint: 722, timesincorrect: 216, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 26, questionid: 33, timesasked: 1027,timescorrect: 178, timescorrectwithhint: 322, timesincorrect: 334, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 26, questionid: 34, timesasked: 1209,timescorrect: 329, timescorrectwithhint: 451, timesincorrect: 274, timesincorrectwithhint: 155},
{year: 2024, month: 7, day: 26, questionid: 35, timesasked: 1820,timescorrect: 525, timescorrectwithhint: 697, timesincorrect: 384, timesincorrectwithhint: 214},
{year: 2024, month: 7, day: 26, questionid: 36, timesasked: 1388,timescorrect: 350, timescorrectwithhint: 501, timesincorrect: 343, timesincorrectwithhint: 194},
{year: 2024, month: 7, day: 26, questionid: 37, timesasked: 1918,timescorrect: 680, timescorrectwithhint: 811, timesincorrect: 278, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 26, questionid: 38, timesasked: 1064,timescorrect: 327, timescorrectwithhint: 419, timesincorrect: 204, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 26, questionid: 39, timesasked: 1294,timescorrect: 489, timescorrectwithhint: 565, timesincorrect: 157, timesincorrectwithhint: 83},
{year: 2024, month: 7, day: 26, questionid: 40, timesasked: 1495,timescorrect: 338, timescorrectwithhint: 517, timesincorrect: 408, timesincorrectwithhint: 232},
{year: 2024, month: 7, day: 26, questionid: 41, timesasked: 1292,timescorrect: 334, timescorrectwithhint: 471, timesincorrect: 311, timesincorrectwithhint: 176},
{year: 2024, month: 7, day: 26, questionid: 42, timesasked: 1321,timescorrect: 235, timescorrectwithhint: 418, timesincorrect: 424, timesincorrectwithhint: 244},
{year: 2024, month: 7, day: 26, questionid: 43, timesasked: 1352,timescorrect: 535, timescorrectwithhint: 604, timesincorrect: 140, timesincorrectwithhint: 73},
{year: 2024, month: 7, day: 26, questionid: 44, timesasked: 1465,timescorrect: 452, timescorrectwithhint: 579, timesincorrect: 279, timesincorrectwithhint: 155},
{year: 2024, month: 7, day: 26, questionid: 45, timesasked: 1549,timescorrect: 490, timescorrectwithhint: 619, timesincorrect: 283, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 26, questionid: 46, timesasked: 1699,timescorrect: 536, timescorrectwithhint: 678, timesincorrect: 312, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 26, questionid: 47, timesasked: 1217,timescorrect: 216, timescorrectwithhint: 385, timesincorrect: 391, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 26, questionid: 48, timesasked: 1508,timescorrect: 546, timescorrectwithhint: 644, timesincorrect: 207, timesincorrectwithhint: 111},
{year: 2024, month: 7, day: 26, questionid: 49, timesasked: 1603,timescorrect: 558, timescorrectwithhint: 671, timesincorrect: 242, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 26, questionid: 50, timesasked: 1512,timescorrect: 307, timescorrectwithhint: 502, timesincorrect: 448, timesincorrectwithhint: 255},
{year: 2024, month: 7, day: 26, questionid: 51, timesasked: 1003,timescorrect: 346, timescorrectwithhint: 418, timesincorrect: 155, timesincorrectwithhint: 84},
{year: 2024, month: 7, day: 26, questionid: 52, timesasked: 1681,timescorrect: 458, timescorrectwithhint: 628, timesincorrect: 381, timesincorrectwithhint: 214},
{year: 2024, month: 7, day: 26, questionid: 53, timesasked: 1441,timescorrect: 338, timescorrectwithhint: 505, timesincorrect: 382, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 26, questionid: 54, timesasked: 1203,timescorrect: 248, timescorrectwithhint: 401, timesincorrect: 353, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 26, questionid: 55, timesasked: 1781,timescorrect: 541, timescorrectwithhint: 699, timesincorrect: 348, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 26, questionid: 56, timesasked: 1844,timescorrect: 716, timescorrectwithhint: 817, timesincorrect: 205, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 26, questionid: 57, timesasked: 1605,timescorrect: 600, timescorrectwithhint: 697, timesincorrect: 201, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 26, questionid: 58, timesasked: 1735,timescorrect: 571, timescorrectwithhint: 707, timesincorrect: 296, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 26, questionid: 59, timesasked: 1183,timescorrect: 408, timescorrectwithhint: 493, timesincorrect: 183, timesincorrectwithhint: 99},
{year: 2024, month: 7, day: 26, questionid: 60, timesasked: 1050,timescorrect: 214, timescorrectwithhint: 348, timesincorrect: 310, timesincorrectwithhint: 178},
{year: 2024, month: 7, day: 26, questionid: 61, timesasked: 1276,timescorrect: 258, timescorrectwithhint: 422, timesincorrect: 379, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 26, questionid: 62, timesasked: 1832,timescorrect: 501, timescorrectwithhint: 685, timesincorrect: 414, timesincorrectwithhint: 232},
{year: 2024, month: 7, day: 26, questionid: 63, timesasked: 1409,timescorrect: 536, timescorrectwithhint: 617, timesincorrect: 168, timesincorrectwithhint: 88},
{year: 2024, month: 7, day: 26, questionid: 64, timesasked: 1720,timescorrect: 394, timescorrectwithhint: 598, timesincorrect: 465, timesincorrectwithhint: 263},
{year: 2024, month: 7, day: 26, questionid: 65, timesasked: 1768,timescorrect: 290, timescorrectwithhint: 545, timesincorrect: 593, timesincorrectwithhint: 340},
{year: 2024, month: 7, day: 26, questionid: 66, timesasked: 1174,timescorrect: 399, timescorrectwithhint: 486, timesincorrect: 187, timesincorrectwithhint: 102},
{year: 2024, month: 7, day: 26, questionid: 67, timesasked: 1753,timescorrect: 432, timescorrectwithhint: 627, timesincorrect: 444, timesincorrectwithhint: 250},
{year: 2024, month: 7, day: 26, questionid: 68, timesasked: 1879,timescorrect: 696, timescorrectwithhint: 812, timesincorrect: 243, timesincorrectwithhint: 128},
{year: 2024, month: 7, day: 26, questionid: 69, timesasked: 1285,timescorrect: 507, timescorrectwithhint: 574, timesincorrect: 135, timesincorrectwithhint: 69},
{year: 2024, month: 7, day: 26, questionid: 70, timesasked: 1170,timescorrect: 190, timescorrectwithhint: 359, timesincorrect: 394, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 26, questionid: 71, timesasked: 1374,timescorrect: 345, timescorrectwithhint: 495, timesincorrect: 341, timesincorrectwithhint: 193},
{year: 2024, month: 7, day: 26, questionid: 72, timesasked: 1511,timescorrect: 552, timescorrectwithhint: 648, timesincorrect: 202, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 26, questionid: 73, timesasked: 1150,timescorrect: 189, timescorrectwithhint: 355, timesincorrect: 385, timesincorrectwithhint: 221},
{year: 2024, month: 7, day: 26, questionid: 74, timesasked: 1065,timescorrect: 405, timescorrectwithhint: 466, timesincorrect: 127, timesincorrectwithhint: 67},
{year: 2024, month: 7, day: 26, questionid: 75, timesasked: 1792,timescorrect: 276, timescorrectwithhint: 542, timesincorrect: 619, timesincorrectwithhint: 355},
{year: 2024, month: 7, day: 26, questionid: 76, timesasked: 1042,timescorrect: 349, timescorrectwithhint: 428, timesincorrect: 171, timesincorrectwithhint: 94},
{year: 2024, month: 7, day: 26, questionid: 77, timesasked: 1047,timescorrect: 372, timescorrectwithhint: 443, timesincorrect: 150, timesincorrectwithhint: 82},
{year: 2024, month: 7, day: 26, questionid: 78, timesasked: 1555,timescorrect: 493, timescorrectwithhint: 622, timesincorrect: 283, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 26, questionid: 79, timesasked: 1861,timescorrect: 285, timescorrectwithhint: 561, timesincorrect: 645, timesincorrectwithhint: 370},
{year: 2024, month: 7, day: 26, questionid: 80, timesasked: 1410,timescorrect: 283, timescorrectwithhint: 465, timesincorrect: 421, timesincorrectwithhint: 241},
{year: 2024, month: 7, day: 26, questionid: 81, timesasked: 1634,timescorrect: 297, timescorrectwithhint: 521, timesincorrect: 519, timesincorrectwithhint: 297},
{year: 2024, month: 7, day: 26, questionid: 82, timesasked: 1911,timescorrect: 748, timescorrectwithhint: 850, timesincorrect: 207, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 26, questionid: 83, timesasked: 1733,timescorrect: 490, timescorrectwithhint: 658, timesincorrect: 375, timesincorrectwithhint: 210},
{year: 2024, month: 7, day: 26, questionid: 84, timesasked: 1376,timescorrect: 478, timescorrectwithhint: 576, timesincorrect: 209, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 26, questionid: 85, timesasked: 1605,timescorrect: 526, timescorrectwithhint: 652, timesincorrect: 276, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 26, questionid: 86, timesasked: 1413,timescorrect: 458, timescorrectwithhint: 571, timesincorrect: 248, timesincorrectwithhint: 136},
{year: 2024, month: 7, day: 26, questionid: 87, timesasked: 1293,timescorrect: 290, timescorrectwithhint: 446, timesincorrect: 355, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 26, questionid: 88, timesasked: 1389,timescorrect: 517, timescorrectwithhint: 602, timesincorrect: 176, timesincorrectwithhint: 94},
{year: 2024, month: 7, day: 26, questionid: 89, timesasked: 1093,timescorrect: 341, timescorrectwithhint: 434, timesincorrect: 204, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 26, questionid: 90, timesasked: 1600,timescorrect: 504, timescorrectwithhint: 638, timesincorrect: 295, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 26, questionid: 91, timesasked: 1138,timescorrect: 430, timescorrectwithhint: 497, timesincorrect: 138, timesincorrectwithhint: 73},
{year: 2024, month: 7, day: 26, questionid: 92, timesasked: 1520,timescorrect: 402, timescorrectwithhint: 560, timesincorrect: 357, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 26, questionid: 93, timesasked: 1988,timescorrect: 702, timescorrectwithhint: 839, timesincorrect: 291, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 26, questionid: 94, timesasked: 1778,timescorrect: 449, timescorrectwithhint: 643, timesincorrect: 439, timesincorrectwithhint: 247},
{year: 2024, month: 7, day: 26, questionid: 95, timesasked: 1142,timescorrect: 298, timescorrectwithhint: 419, timesincorrect: 272, timesincorrectwithhint: 153},
{year: 2024, month: 7, day: 26, questionid: 96, timesasked: 1256,timescorrect: 300, timescorrectwithhint: 444, timesincorrect: 327, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 26, questionid: 97, timesasked: 1687,timescorrect: 422, timescorrectwithhint: 607, timesincorrect: 421, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 27, questionid: 1, timesasked: 1991,timescorrect: 340, timescorrectwithhint: 622, timesincorrect: 655, timesincorrectwithhint: 374},
{year: 2024, month: 7, day: 27, questionid: 2, timesasked: 1334,timescorrect: 369, timescorrectwithhint: 501, timesincorrect: 297, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 27, questionid: 3, timesasked: 1310,timescorrect: 453, timescorrectwithhint: 547, timesincorrect: 201, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 27, questionid: 4, timesasked: 1602,timescorrect: 633, timescorrectwithhint: 716, timesincorrect: 167, timesincorrectwithhint: 86},
{year: 2024, month: 7, day: 27, questionid: 5, timesasked: 1177,timescorrect: 277, timescorrectwithhint: 413, timesincorrect: 311, timesincorrectwithhint: 176},
{year: 2024, month: 7, day: 27, questionid: 6, timesasked: 1295,timescorrect: 443, timescorrectwithhint: 538, timesincorrect: 203, timesincorrectwithhint: 111},
{year: 2024, month: 7, day: 27, questionid: 7, timesasked: 1405,timescorrect: 390, timescorrectwithhint: 529, timesincorrect: 311, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 27, questionid: 8, timesasked: 1837,timescorrect: 505, timescorrectwithhint: 688, timesincorrect: 413, timesincorrectwithhint: 231},
{year: 2024, month: 7, day: 27, questionid: 9, timesasked: 1980,timescorrect: 689, timescorrectwithhint: 829, timesincorrect: 300, timesincorrectwithhint: 162},
{year: 2024, month: 7, day: 27, questionid: 10, timesasked: 1590,timescorrect: 334, timescorrectwithhint: 534, timesincorrect: 460, timesincorrectwithhint: 262},
{year: 2024, month: 7, day: 27, questionid: 11, timesasked: 1651,timescorrect: 628, timescorrectwithhint: 723, timesincorrect: 197, timesincorrectwithhint: 103},
{year: 2024, month: 7, day: 27, questionid: 12, timesasked: 1784,timescorrect: 554, timescorrectwithhint: 707, timesincorrect: 337, timesincorrectwithhint: 186},
{year: 2024, month: 7, day: 27, questionid: 13, timesasked: 1108,timescorrect: 359, timescorrectwithhint: 448, timesincorrect: 194, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 27, questionid: 14, timesasked: 1769,timescorrect: 368, timescorrectwithhint: 592, timesincorrect: 515, timesincorrectwithhint: 294},
{year: 2024, month: 7, day: 27, questionid: 15, timesasked: 1857,timescorrect: 522, timescorrectwithhint: 703, timesincorrect: 406, timesincorrectwithhint: 226},
{year: 2024, month: 7, day: 27, questionid: 16, timesasked: 1291,timescorrect: 397, timescorrectwithhint: 509, timesincorrect: 248, timesincorrectwithhint: 137},
{year: 2024, month: 7, day: 27, questionid: 17, timesasked: 1800,timescorrect: 718, timescorrectwithhint: 809, timesincorrect: 181, timesincorrectwithhint: 92},
{year: 2024, month: 7, day: 27, questionid: 18, timesasked: 1222,timescorrect: 246, timescorrectwithhint: 404, timesincorrect: 364, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 27, questionid: 19, timesasked: 1271,timescorrect: 361, timescorrectwithhint: 483, timesincorrect: 274, timesincorrectwithhint: 153},
{year: 2024, month: 7, day: 27, questionid: 20, timesasked: 1692,timescorrect: 670, timescorrectwithhint: 757, timesincorrect: 175, timesincorrectwithhint: 90},
{year: 2024, month: 7, day: 27, questionid: 21, timesasked: 1968,timescorrect: 314, timescorrectwithhint: 602, timesincorrect: 669, timesincorrectwithhint: 383},
{year: 2024, month: 7, day: 27, questionid: 22, timesasked: 1684,timescorrect: 490, timescorrectwithhint: 647, timesincorrect: 351, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 27, questionid: 23, timesasked: 1380,timescorrect: 351, timescorrectwithhint: 500, timesincorrect: 338, timesincorrectwithhint: 191},
{year: 2024, month: 7, day: 27, questionid: 24, timesasked: 1499,timescorrect: 590, timescorrectwithhint: 668, timesincorrect: 159, timesincorrectwithhint: 82},
{year: 2024, month: 7, day: 27, questionid: 25, timesasked: 1433,timescorrect: 408, timescorrectwithhint: 545, timesincorrect: 308, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 27, questionid: 26, timesasked: 1735,timescorrect: 523, timescorrectwithhint: 678, timesincorrect: 343, timesincorrectwithhint: 191},
{year: 2024, month: 7, day: 27, questionid: 27, timesasked: 1569,timescorrect: 470, timescorrectwithhint: 611, timesincorrect: 313, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 27, questionid: 28, timesasked: 1042,timescorrect: 386, timescorrectwithhint: 450, timesincorrect: 134, timesincorrectwithhint: 72},
{year: 2024, month: 7, day: 27, questionid: 29, timesasked: 1605,timescorrect: 583, timescorrectwithhint: 686, timesincorrect: 219, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 27, questionid: 30, timesasked: 1824,timescorrect: 607, timescorrectwithhint: 747, timesincorrect: 304, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 27, questionid: 31, timesasked: 1282,timescorrect: 302, timescorrectwithhint: 451, timesincorrect: 338, timesincorrectwithhint: 191},
{year: 2024, month: 7, day: 27, questionid: 32, timesasked: 1786,timescorrect: 328, timescorrectwithhint: 572, timesincorrect: 564, timesincorrectwithhint: 322},
{year: 2024, month: 7, day: 27, questionid: 33, timesasked: 1141,timescorrect: 448, timescorrectwithhint: 508, timesincorrect: 121, timesincorrectwithhint: 64},
{year: 2024, month: 7, day: 27, questionid: 34, timesasked: 1236,timescorrect: 410, timescorrectwithhint: 505, timesincorrect: 207, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 27, questionid: 35, timesasked: 1075,timescorrect: 265, timescorrectwithhint: 384, timesincorrect: 272, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 27, questionid: 36, timesasked: 1131,timescorrect: 195, timescorrectwithhint: 354, timesincorrect: 370, timesincorrectwithhint: 212},
{year: 2024, month: 7, day: 27, questionid: 37, timesasked: 1508,timescorrect: 434, timescorrectwithhint: 577, timesincorrect: 319, timesincorrectwithhint: 178},
{year: 2024, month: 7, day: 27, questionid: 38, timesasked: 1250,timescorrect: 398, timescorrectwithhint: 501, timesincorrect: 226, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 27, questionid: 39, timesasked: 1975,timescorrect: 624, timescorrectwithhint: 789, timesincorrect: 363, timesincorrectwithhint: 199},
{year: 2024, month: 7, day: 27, questionid: 40, timesasked: 1983,timescorrect: 596, timescorrectwithhint: 774, timesincorrect: 395, timesincorrectwithhint: 218},
{year: 2024, month: 7, day: 27, questionid: 41, timesasked: 1121,timescorrect: 255, timescorrectwithhint: 388, timesincorrect: 304, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 27, questionid: 42, timesasked: 1802,timescorrect: 562, timescorrectwithhint: 716, timesincorrect: 338, timesincorrectwithhint: 186},
{year: 2024, month: 7, day: 27, questionid: 43, timesasked: 1448,timescorrect: 415, timescorrectwithhint: 553, timesincorrect: 308, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 27, questionid: 44, timesasked: 1178,timescorrect: 286, timescorrectwithhint: 419, timesincorrect: 302, timesincorrectwithhint: 171},
{year: 2024, month: 7, day: 27, questionid: 45, timesasked: 1817,timescorrect: 448, timescorrectwithhint: 650, timesincorrect: 460, timesincorrectwithhint: 259},
{year: 2024, month: 7, day: 27, questionid: 46, timesasked: 1980,timescorrect: 425, timescorrectwithhint: 671, timesincorrect: 564, timesincorrectwithhint: 320},
{year: 2024, month: 7, day: 27, questionid: 47, timesasked: 1385,timescorrect: 533, timescorrectwithhint: 611, timesincorrect: 158, timesincorrectwithhint: 83},
{year: 2024, month: 7, day: 27, questionid: 48, timesasked: 1844,timescorrect: 632, timescorrectwithhint: 766, timesincorrect: 289, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 27, questionid: 49, timesasked: 1633,timescorrect: 624, timescorrectwithhint: 717, timesincorrect: 191, timesincorrectwithhint: 101},
{year: 2024, month: 7, day: 27, questionid: 50, timesasked: 1408,timescorrect: 393, timescorrectwithhint: 531, timesincorrect: 310, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 27, questionid: 51, timesasked: 1406,timescorrect: 538, timescorrectwithhint: 618, timesincorrect: 164, timesincorrectwithhint: 86},
{year: 2024, month: 7, day: 27, questionid: 52, timesasked: 1692,timescorrect: 638, timescorrectwithhint: 738, timesincorrect: 207, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 27, questionid: 53, timesasked: 1873,timescorrect: 455, timescorrectwithhint: 666, timesincorrect: 481, timesincorrectwithhint: 271},
{year: 2024, month: 7, day: 27, questionid: 54, timesasked: 1287,timescorrect: 441, timescorrectwithhint: 535, timesincorrect: 202, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 27, questionid: 55, timesasked: 1704,timescorrect: 670, timescorrectwithhint: 760, timesincorrect: 181, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 27, questionid: 56, timesasked: 1616,timescorrect: 425, timescorrectwithhint: 594, timesincorrect: 382, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 27, questionid: 57, timesasked: 1346,timescorrect: 523, timescorrectwithhint: 596, timesincorrect: 149, timesincorrectwithhint: 78},
{year: 2024, month: 7, day: 27, questionid: 58, timesasked: 1246,timescorrect: 453, timescorrectwithhint: 533, timesincorrect: 169, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 27, questionid: 59, timesasked: 1494,timescorrect: 261, timescorrectwithhint: 470, timesincorrect: 485, timesincorrectwithhint: 278},
{year: 2024, month: 7, day: 27, questionid: 60, timesasked: 1812,timescorrect: 450, timescorrectwithhint: 651, timesincorrect: 455, timesincorrectwithhint: 256},
{year: 2024, month: 7, day: 27, questionid: 61, timesasked: 1147,timescorrect: 192, timescorrectwithhint: 356, timesincorrect: 380, timesincorrectwithhint: 219},
{year: 2024, month: 7, day: 27, questionid: 62, timesasked: 1644,timescorrect: 426, timescorrectwithhint: 601, timesincorrect: 395, timesincorrectwithhint: 222},
{year: 2024, month: 7, day: 27, questionid: 63, timesasked: 1993,timescorrect: 475, timescorrectwithhint: 703, timesincorrect: 520, timesincorrectwithhint: 295},
{year: 2024, month: 7, day: 27, questionid: 64, timesasked: 1243,timescorrect: 240, timescorrectwithhint: 405, timesincorrect: 380, timesincorrectwithhint: 218},
{year: 2024, month: 7, day: 27, questionid: 65, timesasked: 1027,timescorrect: 409, timescorrectwithhint: 461, timesincorrect: 103, timesincorrectwithhint: 54},
{year: 2024, month: 7, day: 27, questionid: 66, timesasked: 1442,timescorrect: 362, timescorrectwithhint: 520, timesincorrect: 358, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 27, questionid: 67, timesasked: 1471,timescorrect: 355, timescorrectwithhint: 522, timesincorrect: 379, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 27, questionid: 68, timesasked: 1270,timescorrect: 206, timescorrectwithhint: 390, timesincorrect: 428, timesincorrectwithhint: 246},
{year: 2024, month: 7, day: 27, questionid: 69, timesasked: 1711,timescorrect: 363, timescorrectwithhint: 577, timesincorrect: 491, timesincorrectwithhint: 280},
{year: 2024, month: 7, day: 27, questionid: 70, timesasked: 1393,timescorrect: 456, timescorrectwithhint: 566, timesincorrect: 239, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 27, questionid: 71, timesasked: 1980,timescorrect: 714, timescorrectwithhint: 844, timesincorrect: 275, timesincorrectwithhint: 147},
{year: 2024, month: 7, day: 27, questionid: 72, timesasked: 1287,timescorrect: 378, timescorrectwithhint: 497, timesincorrect: 265, timesincorrectwithhint: 147},
{year: 2024, month: 7, day: 27, questionid: 73, timesasked: 1764,timescorrect: 560, timescorrectwithhint: 706, timesincorrect: 321, timesincorrectwithhint: 177},
{year: 2024, month: 7, day: 27, questionid: 74, timesasked: 1867,timescorrect: 364, timescorrectwithhint: 610, timesincorrect: 569, timesincorrectwithhint: 324},
{year: 2024, month: 7, day: 27, questionid: 75, timesasked: 1901,timescorrect: 696, timescorrectwithhint: 817, timesincorrect: 253, timesincorrectwithhint: 135},
{year: 2024, month: 7, day: 27, questionid: 76, timesasked: 1399,timescorrect: 535, timescorrectwithhint: 615, timesincorrect: 163, timesincorrectwithhint: 86},
{year: 2024, month: 7, day: 27, questionid: 77, timesasked: 1112,timescorrect: 293, timescorrectwithhint: 409, timesincorrect: 262, timesincorrectwithhint: 148},
{year: 2024, month: 7, day: 27, questionid: 78, timesasked: 1358,timescorrect: 360, timescorrectwithhint: 501, timesincorrect: 318, timesincorrectwithhint: 179},
{year: 2024, month: 7, day: 27, questionid: 79, timesasked: 1576,timescorrect: 551, timescorrectwithhint: 661, timesincorrect: 236, timesincorrectwithhint: 128},
{year: 2024, month: 7, day: 27, questionid: 80, timesasked: 1096,timescorrect: 348, timescorrectwithhint: 439, timesincorrect: 199, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 27, questionid: 81, timesasked: 1820,timescorrect: 693, timescorrectwithhint: 798, timesincorrect: 216, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 27, questionid: 82, timesasked: 1344,timescorrect: 222, timescorrectwithhint: 415, timesincorrect: 449, timesincorrectwithhint: 258},
{year: 2024, month: 7, day: 27, questionid: 83, timesasked: 1421,timescorrect: 401, timescorrectwithhint: 539, timesincorrect: 309, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 27, questionid: 84, timesasked: 1486,timescorrect: 505, timescorrectwithhint: 615, timesincorrect: 237, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 27, questionid: 85, timesasked: 1171,timescorrect: 293, timescorrectwithhint: 421, timesincorrect: 292, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 27, questionid: 86, timesasked: 1905,timescorrect: 307, timescorrectwithhint: 584, timesincorrect: 644, timesincorrectwithhint: 370},
{year: 2024, month: 7, day: 27, questionid: 87, timesasked: 1049,timescorrect: 398, timescorrectwithhint: 459, timesincorrect: 125, timesincorrectwithhint: 67},
{year: 2024, month: 7, day: 27, questionid: 88, timesasked: 1101,timescorrect: 256, timescorrectwithhint: 384, timesincorrect: 294, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 27, questionid: 89, timesasked: 1061,timescorrect: 240, timescorrectwithhint: 367, timesincorrect: 289, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 27, questionid: 90, timesasked: 1305,timescorrect: 326, timescorrectwithhint: 470, timesincorrect: 325, timesincorrectwithhint: 184},
{year: 2024, month: 7, day: 27, questionid: 91, timesasked: 1661,timescorrect: 530, timescorrectwithhint: 666, timesincorrect: 300, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 27, questionid: 92, timesasked: 1771,timescorrect: 600, timescorrectwithhint: 732, timesincorrect: 285, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 27, questionid: 93, timesasked: 1272,timescorrect: 418, timescorrectwithhint: 518, timesincorrect: 217, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 27, questionid: 94, timesasked: 1540,timescorrect: 441, timescorrectwithhint: 588, timesincorrect: 328, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 27, questionid: 95, timesasked: 1608,timescorrect: 539, timescorrectwithhint: 661, timesincorrect: 264, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 27, questionid: 96, timesasked: 1559,timescorrect: 441, timescorrectwithhint: 592, timesincorrect: 338, timesincorrectwithhint: 188},
{year: 2024, month: 7, day: 27, questionid: 97, timesasked: 1551,timescorrect: 567, timescorrectwithhint: 666, timesincorrect: 208, timesincorrectwithhint: 110},
{year: 2024, month: 7, day: 28, questionid: 1, timesasked: 1087,timescorrect: 202, timescorrectwithhint: 349, timesincorrect: 340, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 28, questionid: 2, timesasked: 1925,timescorrect: 523, timescorrectwithhint: 718, timesincorrect: 439, timesincorrectwithhint: 245},
{year: 2024, month: 7, day: 28, questionid: 3, timesasked: 1159,timescorrect: 293, timescorrectwithhint: 419, timesincorrect: 285, timesincorrectwithhint: 162},
{year: 2024, month: 7, day: 28, questionid: 4, timesasked: 1562,timescorrect: 273, timescorrectwithhint: 492, timesincorrect: 507, timesincorrectwithhint: 290},
{year: 2024, month: 7, day: 28, questionid: 5, timesasked: 1338,timescorrect: 374, timescorrectwithhint: 505, timesincorrect: 294, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 28, questionid: 6, timesasked: 1729,timescorrect: 396, timescorrectwithhint: 600, timesincorrect: 468, timesincorrectwithhint: 265},
{year: 2024, month: 7, day: 28, questionid: 7, timesasked: 1745,timescorrect: 632, timescorrectwithhint: 745, timesincorrect: 239, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 28, questionid: 8, timesasked: 1522,timescorrect: 509, timescorrectwithhint: 625, timesincorrect: 251, timesincorrectwithhint: 137},
{year: 2024, month: 7, day: 28, questionid: 9, timesasked: 1863,timescorrect: 626, timescorrectwithhint: 767, timesincorrect: 305, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 28, questionid: 10, timesasked: 1955,timescorrect: 647, timescorrectwithhint: 799, timesincorrect: 329, timesincorrectwithhint: 180},
{year: 2024, month: 7, day: 28, questionid: 11, timesasked: 1347,timescorrect: 438, timescorrectwithhint: 545, timesincorrect: 235, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 28, questionid: 12, timesasked: 1138,timescorrect: 390, timescorrectwithhint: 473, timesincorrect: 178, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 28, questionid: 13, timesasked: 1234,timescorrect: 192, timescorrectwithhint: 374, timesincorrect: 424, timesincorrectwithhint: 244},
{year: 2024, month: 7, day: 28, questionid: 14, timesasked: 1157,timescorrect: 456, timescorrectwithhint: 516, timesincorrect: 121, timesincorrectwithhint: 64},
{year: 2024, month: 7, day: 28, questionid: 15, timesasked: 1812,timescorrect: 399, timescorrectwithhint: 620, timesincorrect: 506, timesincorrectwithhint: 287},
{year: 2024, month: 7, day: 28, questionid: 16, timesasked: 1441,timescorrect: 368, timescorrectwithhint: 523, timesincorrect: 352, timesincorrectwithhint: 198},
{year: 2024, month: 7, day: 28, questionid: 17, timesasked: 1372,timescorrect: 294, timescorrectwithhint: 464, timesincorrect: 391, timesincorrectwithhint: 223},
{year: 2024, month: 7, day: 28, questionid: 18, timesasked: 1226,timescorrect: 209, timescorrectwithhint: 383, timesincorrect: 403, timesincorrectwithhint: 231},
{year: 2024, month: 7, day: 28, questionid: 19, timesasked: 1704,timescorrect: 405, timescorrectwithhint: 600, timesincorrect: 446, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 28, questionid: 20, timesasked: 1806,timescorrect: 585, timescorrectwithhint: 730, timesincorrect: 317, timesincorrectwithhint: 174},
{year: 2024, month: 7, day: 28, questionid: 21, timesasked: 1828,timescorrect: 379, timescorrectwithhint: 611, timesincorrect: 534, timesincorrectwithhint: 304},
{year: 2024, month: 7, day: 28, questionid: 22, timesasked: 1326,timescorrect: 279, timescorrectwithhint: 445, timesincorrect: 383, timesincorrectwithhint: 219},
{year: 2024, month: 7, day: 28, questionid: 23, timesasked: 1180,timescorrect: 388, timescorrectwithhint: 480, timesincorrect: 201, timesincorrectwithhint: 111},
{year: 2024, month: 7, day: 28, questionid: 24, timesasked: 1006,timescorrect: 187, timescorrectwithhint: 323, timesincorrect: 315, timesincorrectwithhint: 181},
{year: 2024, month: 7, day: 28, questionid: 25, timesasked: 1029,timescorrect: 301, timescorrectwithhint: 397, timesincorrect: 212, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 28, questionid: 26, timesasked: 1067,timescorrect: 192, timescorrectwithhint: 339, timesincorrect: 340, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 28, questionid: 27, timesasked: 1984,timescorrect: 483, timescorrectwithhint: 706, timesincorrect: 508, timesincorrectwithhint: 287},
{year: 2024, month: 7, day: 28, questionid: 28, timesasked: 1205,timescorrect: 287, timescorrectwithhint: 425, timesincorrect: 315, timesincorrectwithhint: 178},
{year: 2024, month: 7, day: 28, questionid: 29, timesasked: 1915,timescorrect: 339, timescorrectwithhint: 605, timesincorrect: 617, timesincorrectwithhint: 354},
{year: 2024, month: 7, day: 28, questionid: 30, timesasked: 1895,timescorrect: 286, timescorrectwithhint: 570, timesincorrect: 660, timesincorrectwithhint: 379},
{year: 2024, month: 7, day: 28, questionid: 31, timesasked: 1436,timescorrect: 475, timescorrectwithhint: 586, timesincorrect: 242, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 28, questionid: 32, timesasked: 1082,timescorrect: 257, timescorrectwithhint: 381, timesincorrect: 283, timesincorrectwithhint: 161},
{year: 2024, month: 7, day: 28, questionid: 33, timesasked: 1229,timescorrect: 488, timescorrectwithhint: 551, timesincorrect: 125, timesincorrectwithhint: 65},
{year: 2024, month: 7, day: 28, questionid: 34, timesasked: 1178,timescorrect: 205, timescorrectwithhint: 370, timesincorrect: 383, timesincorrectwithhint: 220},
{year: 2024, month: 7, day: 28, questionid: 35, timesasked: 1560,timescorrect: 408, timescorrectwithhint: 572, timesincorrect: 371, timesincorrectwithhint: 209},
{year: 2024, month: 7, day: 28, questionid: 36, timesasked: 1151,timescorrect: 325, timescorrectwithhint: 436, timesincorrect: 250, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 28, questionid: 37, timesasked: 1925,timescorrect: 693, timescorrectwithhint: 820, timesincorrect: 268, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 28, questionid: 38, timesasked: 1240,timescorrect: 298, timescorrectwithhint: 439, timesincorrect: 321, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 28, questionid: 39, timesasked: 1152,timescorrect: 264, timescorrectwithhint: 400, timesincorrect: 311, timesincorrectwithhint: 177},
{year: 2024, month: 7, day: 28, questionid: 40, timesasked: 1877,timescorrect: 381, timescorrectwithhint: 623, timesincorrect: 557, timesincorrectwithhint: 316},
{year: 2024, month: 7, day: 28, questionid: 41, timesasked: 1127,timescorrect: 366, timescorrectwithhint: 456, timesincorrect: 197, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 28, questionid: 42, timesasked: 1931,timescorrect: 711, timescorrectwithhint: 832, timesincorrect: 253, timesincorrectwithhint: 135},
{year: 2024, month: 7, day: 28, questionid: 43, timesasked: 1283,timescorrect: 292, timescorrectwithhint: 445, timesincorrect: 348, timesincorrectwithhint: 198},
{year: 2024, month: 7, day: 28, questionid: 44, timesasked: 1610,timescorrect: 337, timescorrectwithhint: 540, timesincorrect: 467, timesincorrectwithhint: 266},
{year: 2024, month: 7, day: 28, questionid: 45, timesasked: 1034,timescorrect: 345, timescorrectwithhint: 424, timesincorrect: 171, timesincorrectwithhint: 94},
{year: 2024, month: 7, day: 28, questionid: 46, timesasked: 1623,timescorrect: 323, timescorrectwithhint: 535, timesincorrect: 487, timesincorrectwithhint: 278},
{year: 2024, month: 7, day: 28, questionid: 47, timesasked: 1349,timescorrect: 283, timescorrectwithhint: 453, timesincorrect: 390, timesincorrectwithhint: 223},
{year: 2024, month: 7, day: 28, questionid: 48, timesasked: 1038,timescorrect: 298, timescorrectwithhint: 397, timesincorrect: 220, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 28, questionid: 49, timesasked: 1767,timescorrect: 496, timescorrectwithhint: 668, timesincorrect: 387, timesincorrectwithhint: 216},
{year: 2024, month: 7, day: 28, questionid: 50, timesasked: 1233,timescorrect: 192, timescorrectwithhint: 374, timesincorrect: 424, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 28, questionid: 51, timesasked: 1170,timescorrect: 270, timescorrectwithhint: 407, timesincorrect: 314, timesincorrectwithhint: 179},
{year: 2024, month: 7, day: 28, questionid: 52, timesasked: 1830,timescorrect: 647, timescorrectwithhint: 772, timesincorrect: 267, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 28, questionid: 53, timesasked: 1660,timescorrect: 641, timescorrectwithhint: 733, timesincorrect: 188, timesincorrectwithhint: 98},
{year: 2024, month: 7, day: 28, questionid: 54, timesasked: 1360,timescorrect: 241, timescorrectwithhint: 430, timesincorrect: 438, timesincorrectwithhint: 251},
{year: 2024, month: 7, day: 28, questionid: 55, timesasked: 1451,timescorrect: 288, timescorrectwithhint: 477, timesincorrect: 436, timesincorrectwithhint: 250},
{year: 2024, month: 7, day: 28, questionid: 56, timesasked: 1875,timescorrect: 646, timescorrectwithhint: 781, timesincorrect: 290, timesincorrectwithhint: 158},
{year: 2024, month: 7, day: 28, questionid: 57, timesasked: 1612,timescorrect: 476, timescorrectwithhint: 624, timesincorrect: 329, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 28, questionid: 58, timesasked: 1286,timescorrect: 240, timescorrectwithhint: 414, timesincorrect: 402, timesincorrectwithhint: 230},
{year: 2024, month: 7, day: 28, questionid: 59, timesasked: 1793,timescorrect: 548, timescorrectwithhint: 705, timesincorrect: 348, timesincorrectwithhint: 192},
{year: 2024, month: 7, day: 28, questionid: 60, timesasked: 1656,timescorrect: 388, timescorrectwithhint: 580, timesincorrect: 439, timesincorrectwithhint: 249},
{year: 2024, month: 7, day: 28, questionid: 61, timesasked: 1702,timescorrect: 376, timescorrectwithhint: 583, timesincorrect: 474, timesincorrectwithhint: 269},
{year: 2024, month: 7, day: 28, questionid: 62, timesasked: 1495,timescorrect: 268, timescorrectwithhint: 474, timesincorrect: 479, timesincorrectwithhint: 274},
{year: 2024, month: 7, day: 28, questionid: 63, timesasked: 1365,timescorrect: 454, timescorrectwithhint: 559, timesincorrect: 228, timesincorrectwithhint: 124},
{year: 2024, month: 7, day: 28, questionid: 64, timesasked: 1505,timescorrect: 381, timescorrectwithhint: 544, timesincorrect: 371, timesincorrectwithhint: 209},
{year: 2024, month: 7, day: 28, questionid: 65, timesasked: 1752,timescorrect: 580, timescorrectwithhint: 715, timesincorrect: 295, timesincorrectwithhint: 162},
{year: 2024, month: 7, day: 28, questionid: 66, timesasked: 1000,timescorrect: 314, timescorrectwithhint: 398, timesincorrect: 185, timesincorrectwithhint: 103},
{year: 2024, month: 7, day: 28, questionid: 67, timesasked: 1817,timescorrect: 534, timescorrectwithhint: 702, timesincorrect: 373, timesincorrectwithhint: 208},
{year: 2024, month: 7, day: 28, questionid: 68, timesasked: 1751,timescorrect: 689, timescorrectwithhint: 781, timesincorrect: 186, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 28, questionid: 69, timesasked: 1345,timescorrect: 448, timescorrectwithhint: 551, timesincorrect: 224, timesincorrectwithhint: 122},
{year: 2024, month: 7, day: 28, questionid: 70, timesasked: 1758,timescorrect: 470, timescorrectwithhint: 651, timesincorrect: 408, timesincorrectwithhint: 229},
{year: 2024, month: 7, day: 28, questionid: 71, timesasked: 1319,timescorrect: 338, timescorrectwithhint: 480, timesincorrect: 321, timesincorrectwithhint: 180},
{year: 2024, month: 7, day: 28, questionid: 72, timesasked: 1007,timescorrect: 287, timescorrectwithhint: 384, timesincorrect: 215, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 28, questionid: 73, timesasked: 1687,timescorrect: 649, timescorrectwithhint: 743, timesincorrect: 194, timesincorrectwithhint: 101},
{year: 2024, month: 7, day: 28, questionid: 74, timesasked: 1210,timescorrect: 181, timescorrectwithhint: 363, timesincorrect: 423, timesincorrectwithhint: 243},
{year: 2024, month: 7, day: 28, questionid: 75, timesasked: 1170,timescorrect: 338, timescorrectwithhint: 448, timesincorrect: 246, timesincorrectwithhint: 138},
{year: 2024, month: 7, day: 28, questionid: 76, timesasked: 1809,timescorrect: 351, timescorrectwithhint: 590, timesincorrect: 552, timesincorrectwithhint: 316},
{year: 2024, month: 7, day: 28, questionid: 77, timesasked: 1559,timescorrect: 338, timescorrectwithhint: 530, timesincorrect: 441, timesincorrectwithhint: 250},
{year: 2024, month: 7, day: 28, questionid: 78, timesasked: 1251,timescorrect: 256, timescorrectwithhint: 416, timesincorrect: 368, timesincorrectwithhint: 211},
{year: 2024, month: 7, day: 28, questionid: 79, timesasked: 1670,timescorrect: 589, timescorrectwithhint: 704, timesincorrect: 245, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 28, questionid: 80, timesasked: 1671,timescorrect: 664, timescorrectwithhint: 749, timesincorrect: 171, timesincorrectwithhint: 87},
{year: 2024, month: 7, day: 28, questionid: 81, timesasked: 1076,timescorrect: 295, timescorrectwithhint: 402, timesincorrect: 242, timesincorrectwithhint: 137},
{year: 2024, month: 7, day: 28, questionid: 82, timesasked: 1603,timescorrect: 599, timescorrectwithhint: 696, timesincorrect: 201, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 28, questionid: 83, timesasked: 1182,timescorrect: 368, timescorrectwithhint: 469, timesincorrect: 222, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 28, questionid: 84, timesasked: 1535,timescorrect: 505, timescorrectwithhint: 625, timesincorrect: 261, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 28, questionid: 85, timesasked: 1640,timescorrect: 284, timescorrectwithhint: 515, timesincorrect: 535, timesincorrectwithhint: 306},
{year: 2024, month: 7, day: 28, questionid: 86, timesasked: 1886,timescorrect: 534, timescorrectwithhint: 716, timesincorrect: 408, timesincorrectwithhint: 228},
{year: 2024, month: 7, day: 28, questionid: 87, timesasked: 1020,timescorrect: 306, timescorrectwithhint: 397, timesincorrect: 203, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 28, questionid: 88, timesasked: 1404,timescorrect: 373, timescorrectwithhint: 518, timesincorrect: 328, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 28, questionid: 89, timesasked: 1107,timescorrect: 343, timescorrectwithhint: 438, timesincorrect: 210, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 28, questionid: 90, timesasked: 1265,timescorrect: 310, timescorrectwithhint: 451, timesincorrect: 322, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 28, questionid: 91, timesasked: 1324,timescorrect: 273, timescorrectwithhint: 442, timesincorrect: 388, timesincorrectwithhint: 221},
{year: 2024, month: 7, day: 28, questionid: 92, timesasked: 1831,timescorrect: 384, timescorrectwithhint: 615, timesincorrect: 531, timesincorrectwithhint: 301},
{year: 2024, month: 7, day: 28, questionid: 93, timesasked: 1309,timescorrect: 217, timescorrectwithhint: 405, timesincorrect: 437, timesincorrectwithhint: 250},
{year: 2024, month: 7, day: 28, questionid: 94, timesasked: 1158,timescorrect: 300, timescorrectwithhint: 423, timesincorrect: 278, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 28, questionid: 95, timesasked: 1297,timescorrect: 438, timescorrectwithhint: 535, timesincorrect: 210, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 28, questionid: 96, timesasked: 1309,timescorrect: 460, timescorrectwithhint: 550, timesincorrect: 194, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 28, questionid: 97, timesasked: 1062,timescorrect: 159, timescorrectwithhint: 318, timesincorrect: 371, timesincorrectwithhint: 214},
{year: 2024, month: 7, day: 29, questionid: 1, timesasked: 1046,timescorrect: 199, timescorrectwithhint: 339, timesincorrect: 323, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 29, questionid: 2, timesasked: 1892,timescorrect: 420, timescorrectwithhint: 649, timesincorrect: 525, timesincorrectwithhint: 298},
{year: 2024, month: 7, day: 29, questionid: 3, timesasked: 1241,timescorrect: 426, timescorrectwithhint: 516, timesincorrect: 194, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 29, questionid: 4, timesasked: 1464,timescorrect: 394, timescorrectwithhint: 544, timesincorrect: 337, timesincorrectwithhint: 189},
{year: 2024, month: 7, day: 29, questionid: 5, timesasked: 1973,timescorrect: 525, timescorrectwithhint: 729, timesincorrect: 461, timesincorrectwithhint: 258},
{year: 2024, month: 7, day: 29, questionid: 6, timesasked: 1017,timescorrect: 304, timescorrectwithhint: 396, timesincorrect: 204, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 29, questionid: 7, timesasked: 1147,timescorrect: 381, timescorrectwithhint: 469, timesincorrect: 192, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 29, questionid: 8, timesasked: 1331,timescorrect: 415, timescorrectwithhint: 528, timesincorrect: 250, timesincorrectwithhint: 138},
{year: 2024, month: 7, day: 29, questionid: 9, timesasked: 1997,timescorrect: 728, timescorrectwithhint: 856, timesincorrect: 269, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 29, questionid: 10, timesasked: 1090,timescorrect: 225, timescorrectwithhint: 364, timesincorrect: 319, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 29, questionid: 11, timesasked: 1308,timescorrect: 278, timescorrectwithhint: 441, timesincorrect: 375, timesincorrectwithhint: 214},
{year: 2024, month: 7, day: 29, questionid: 12, timesasked: 1643,timescorrect: 294, timescorrectwithhint: 521, timesincorrect: 527, timesincorrectwithhint: 301},
{year: 2024, month: 7, day: 29, questionid: 13, timesasked: 1928,timescorrect: 350, timescorrectwithhint: 614, timesincorrect: 613, timesincorrectwithhint: 351},
{year: 2024, month: 7, day: 29, questionid: 14, timesasked: 1053,timescorrect: 228, timescorrectwithhint: 358, timesincorrect: 297, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 29, questionid: 15, timesasked: 1718,timescorrect: 503, timescorrectwithhint: 662, timesincorrect: 355, timesincorrectwithhint: 198},
{year: 2024, month: 7, day: 29, questionid: 16, timesasked: 1388,timescorrect: 394, timescorrectwithhint: 527, timesincorrect: 299, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 29, questionid: 17, timesasked: 1258,timescorrect: 445, timescorrectwithhint: 531, timesincorrect: 183, timesincorrectwithhint: 99},
{year: 2024, month: 7, day: 29, questionid: 18, timesasked: 1133,timescorrect: 222, timescorrectwithhint: 371, timesincorrect: 344, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 29, questionid: 19, timesasked: 1480,timescorrect: 581, timescorrectwithhint: 659, timesincorrect: 158, timesincorrectwithhint: 82},
{year: 2024, month: 7, day: 29, questionid: 20, timesasked: 1705,timescorrect: 645, timescorrectwithhint: 745, timesincorrect: 206, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 29, questionid: 21, timesasked: 1862,timescorrect: 387, timescorrectwithhint: 623, timesincorrect: 543, timesincorrectwithhint: 309},
{year: 2024, month: 7, day: 29, questionid: 22, timesasked: 1464,timescorrect: 539, timescorrectwithhint: 631, timesincorrect: 192, timesincorrectwithhint: 102},
{year: 2024, month: 7, day: 29, questionid: 23, timesasked: 1702,timescorrect: 423, timescorrectwithhint: 611, timesincorrect: 427, timesincorrectwithhint: 241},
{year: 2024, month: 7, day: 29, questionid: 24, timesasked: 1277,timescorrect: 205, timescorrectwithhint: 391, timesincorrect: 433, timesincorrectwithhint: 248},
{year: 2024, month: 7, day: 29, questionid: 25, timesasked: 1624,timescorrect: 306, timescorrectwithhint: 525, timesincorrect: 505, timesincorrectwithhint: 288},
{year: 2024, month: 7, day: 29, questionid: 26, timesasked: 1302,timescorrect: 391, timescorrectwithhint: 508, timesincorrect: 259, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 29, questionid: 27, timesasked: 1324,timescorrect: 231, timescorrectwithhint: 417, timesincorrect: 430, timesincorrectwithhint: 246},
{year: 2024, month: 7, day: 29, questionid: 28, timesasked: 1194,timescorrect: 388, timescorrectwithhint: 483, timesincorrect: 208, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 29, questionid: 29, timesasked: 1212,timescorrect: 260, timescorrectwithhint: 410, timesincorrect: 345, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 29, questionid: 30, timesasked: 1950,timescorrect: 336, timescorrectwithhint: 611, timesincorrect: 638, timesincorrectwithhint: 365},
{year: 2024, month: 7, day: 29, questionid: 31, timesasked: 1914,timescorrect: 361, timescorrectwithhint: 619, timesincorrect: 595, timesincorrectwithhint: 339},
{year: 2024, month: 7, day: 29, questionid: 32, timesasked: 1484,timescorrect: 483, timescorrectwithhint: 601, timesincorrect: 258, timesincorrectwithhint: 142},
{year: 2024, month: 7, day: 29, questionid: 33, timesasked: 1509,timescorrect: 507, timescorrectwithhint: 621, timesincorrect: 247, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 29, questionid: 34, timesasked: 1042,timescorrect: 328, timescorrectwithhint: 416, timesincorrect: 192, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 29, questionid: 35, timesasked: 1169,timescorrect: 445, timescorrectwithhint: 512, timesincorrect: 138, timesincorrectwithhint: 74},
{year: 2024, month: 7, day: 29, questionid: 36, timesasked: 1652,timescorrect: 592, timescorrectwithhint: 702, timesincorrect: 233, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 29, questionid: 37, timesasked: 1173,timescorrect: 205, timescorrectwithhint: 369, timesincorrect: 380, timesincorrectwithhint: 219},
{year: 2024, month: 7, day: 29, questionid: 38, timesasked: 1368,timescorrect: 400, timescorrectwithhint: 527, timesincorrect: 283, timesincorrectwithhint: 158},
{year: 2024, month: 7, day: 29, questionid: 39, timesasked: 1372,timescorrect: 384, timescorrectwithhint: 518, timesincorrect: 301, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 29, questionid: 40, timesasked: 1552,timescorrect: 300, timescorrectwithhint: 506, timesincorrect: 475, timesincorrectwithhint: 271},
{year: 2024, month: 7, day: 29, questionid: 41, timesasked: 1870,timescorrect: 566, timescorrectwithhint: 732, timesincorrect: 368, timesincorrectwithhint: 204},
{year: 2024, month: 7, day: 29, questionid: 42, timesasked: 1419,timescorrect: 457, timescorrectwithhint: 572, timesincorrect: 251, timesincorrectwithhint: 139},
{year: 2024, month: 7, day: 29, questionid: 43, timesasked: 1271,timescorrect: 501, timescorrectwithhint: 568, timesincorrect: 133, timesincorrectwithhint: 69},
{year: 2024, month: 7, day: 29, questionid: 44, timesasked: 1111,timescorrect: 427, timescorrectwithhint: 489, timesincorrect: 127, timesincorrectwithhint: 68},
{year: 2024, month: 7, day: 29, questionid: 45, timesasked: 1085,timescorrect: 201, timescorrectwithhint: 348, timesincorrect: 340, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 29, questionid: 46, timesasked: 1888,timescorrect: 330, timescorrectwithhint: 594, timesincorrect: 613, timesincorrectwithhint: 351},
{year: 2024, month: 7, day: 29, questionid: 47, timesasked: 1377,timescorrect: 236, timescorrectwithhint: 431, timesincorrect: 451, timesincorrectwithhint: 259},
{year: 2024, month: 7, day: 29, questionid: 48, timesasked: 1090,timescorrect: 264, timescorrectwithhint: 387, timesincorrect: 280, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 29, questionid: 49, timesasked: 1261,timescorrect: 419, timescorrectwithhint: 516, timesincorrect: 210, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 29, questionid: 50, timesasked: 1254,timescorrect: 350, timescorrectwithhint: 473, timesincorrect: 276, timesincorrectwithhint: 155},
{year: 2024, month: 7, day: 29, questionid: 51, timesasked: 1164,timescorrect: 455, timescorrectwithhint: 517, timesincorrect: 126, timesincorrectwithhint: 66},
{year: 2024, month: 7, day: 29, questionid: 52, timesasked: 1568,timescorrect: 434, timescorrectwithhint: 589, timesincorrect: 349, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 29, questionid: 53, timesasked: 1336,timescorrect: 241, timescorrectwithhint: 425, timesincorrect: 426, timesincorrectwithhint: 244},
{year: 2024, month: 7, day: 29, questionid: 54, timesasked: 1944,timescorrect: 633, timescorrectwithhint: 788, timesincorrect: 338, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 29, questionid: 55, timesasked: 1539,timescorrect: 612, timescorrectwithhint: 690, timesincorrect: 157, timesincorrectwithhint: 80},
{year: 2024, month: 7, day: 29, questionid: 56, timesasked: 1521,timescorrect: 306, timescorrectwithhint: 503, timesincorrect: 453, timesincorrectwithhint: 259},
{year: 2024, month: 7, day: 29, questionid: 57, timesasked: 1806,timescorrect: 565, timescorrectwithhint: 718, timesincorrect: 337, timesincorrectwithhint: 186},
{year: 2024, month: 7, day: 29, questionid: 58, timesasked: 1540,timescorrect: 463, timescorrectwithhint: 601, timesincorrect: 306, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 29, questionid: 59, timesasked: 1023,timescorrect: 215, timescorrectwithhint: 344, timesincorrect: 295, timesincorrectwithhint: 169},
{year: 2024, month: 7, day: 29, questionid: 60, timesasked: 1901,timescorrect: 418, timescorrectwithhint: 650, timesincorrect: 531, timesincorrectwithhint: 302},
{year: 2024, month: 7, day: 29, questionid: 61, timesasked: 1553,timescorrect: 398, timescorrectwithhint: 565, timesincorrect: 378, timesincorrectwithhint: 212},
{year: 2024, month: 7, day: 29, questionid: 62, timesasked: 1611,timescorrect: 277, timescorrectwithhint: 504, timesincorrect: 527, timesincorrectwithhint: 303},
{year: 2024, month: 7, day: 29, questionid: 63, timesasked: 1438,timescorrect: 478, timescorrectwithhint: 589, timesincorrect: 240, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 29, questionid: 64, timesasked: 1166,timescorrect: 318, timescorrectwithhint: 435, timesincorrect: 264, timesincorrectwithhint: 149},
{year: 2024, month: 7, day: 29, questionid: 65, timesasked: 1010,timescorrect: 400, timescorrectwithhint: 452, timesincorrect: 104, timesincorrectwithhint: 54},
{year: 2024, month: 7, day: 29, questionid: 66, timesasked: 1446,timescorrect: 421, timescorrectwithhint: 556, timesincorrect: 301, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 29, questionid: 67, timesasked: 1571,timescorrect: 574, timescorrectwithhint: 674, timesincorrect: 211, timesincorrectwithhint: 112},
{year: 2024, month: 7, day: 29, questionid: 68, timesasked: 1414,timescorrect: 427, timescorrectwithhint: 553, timesincorrect: 279, timesincorrectwithhint: 155},
{year: 2024, month: 7, day: 29, questionid: 69, timesasked: 1532,timescorrect: 367, timescorrectwithhint: 542, timesincorrect: 398, timesincorrectwithhint: 225},
{year: 2024, month: 7, day: 29, questionid: 70, timesasked: 1832,timescorrect: 637, timescorrectwithhint: 767, timesincorrect: 278, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 29, questionid: 71, timesasked: 1832,timescorrect: 728, timescorrectwithhint: 821, timesincorrect: 187, timesincorrectwithhint: 96},
{year: 2024, month: 7, day: 29, questionid: 72, timesasked: 1362,timescorrect: 464, timescorrectwithhint: 564, timesincorrect: 216, timesincorrectwithhint: 118},
{year: 2024, month: 7, day: 29, questionid: 73, timesasked: 1871,timescorrect: 588, timescorrectwithhint: 745, timesincorrect: 347, timesincorrectwithhint: 191},
{year: 2024, month: 7, day: 29, questionid: 74, timesasked: 1081,timescorrect: 333, timescorrectwithhint: 426, timesincorrect: 207, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 29, questionid: 75, timesasked: 1141,timescorrect: 383, timescorrectwithhint: 469, timesincorrect: 187, timesincorrectwithhint: 102},
{year: 2024, month: 7, day: 29, questionid: 76, timesasked: 1225,timescorrect: 382, timescorrectwithhint: 486, timesincorrect: 230, timesincorrectwithhint: 127},
{year: 2024, month: 7, day: 29, questionid: 77, timesasked: 1843,timescorrect: 282, timescorrectwithhint: 556, timesincorrect: 638, timesincorrectwithhint: 367},
{year: 2024, month: 7, day: 29, questionid: 78, timesasked: 1178,timescorrect: 416, timescorrectwithhint: 497, timesincorrect: 172, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 29, questionid: 79, timesasked: 1157,timescorrect: 357, timescorrectwithhint: 457, timesincorrect: 221, timesincorrectwithhint: 122},
{year: 2024, month: 7, day: 29, questionid: 80, timesasked: 1804,timescorrect: 590, timescorrectwithhint: 733, timesincorrect: 311, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 29, questionid: 81, timesasked: 1002,timescorrect: 385, timescorrectwithhint: 441, timesincorrect: 115, timesincorrectwithhint: 61},
{year: 2024, month: 7, day: 29, questionid: 82, timesasked: 1540,timescorrect: 605, timescorrectwithhint: 686, timesincorrect: 164, timesincorrectwithhint: 85},
{year: 2024, month: 7, day: 29, questionid: 83, timesasked: 1989,timescorrect: 682, timescorrectwithhint: 827, timesincorrect: 312, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 29, questionid: 84, timesasked: 1843,timescorrect: 683, timescorrectwithhint: 797, timesincorrect: 238, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 29, questionid: 85, timesasked: 1053,timescorrect: 309, timescorrectwithhint: 407, timesincorrect: 216, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 29, questionid: 86, timesasked: 1802,timescorrect: 280, timescorrectwithhint: 546, timesincorrect: 620, timesincorrectwithhint: 356},
{year: 2024, month: 7, day: 29, questionid: 87, timesasked: 1915,timescorrect: 665, timescorrectwithhint: 801, timesincorrect: 292, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 29, questionid: 88, timesasked: 1819,timescorrect: 603, timescorrectwithhint: 744, timesincorrect: 305, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 29, questionid: 89, timesasked: 1088,timescorrect: 285, timescorrectwithhint: 399, timesincorrect: 258, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 29, questionid: 90, timesasked: 1831,timescorrect: 444, timescorrectwithhint: 650, timesincorrect: 471, timesincorrectwithhint: 266},
{year: 2024, month: 7, day: 29, questionid: 91, timesasked: 1889,timescorrect: 364, timescorrectwithhint: 615, timesincorrect: 580, timesincorrectwithhint: 330},
{year: 2024, month: 7, day: 29, questionid: 92, timesasked: 1466,timescorrect: 529, timescorrectwithhint: 625, timesincorrect: 203, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 29, questionid: 93, timesasked: 1452,timescorrect: 225, timescorrectwithhint: 440, timesincorrect: 500, timesincorrectwithhint: 287},
{year: 2024, month: 7, day: 29, questionid: 94, timesasked: 1454,timescorrect: 400, timescorrectwithhint: 545, timesincorrect: 326, timesincorrectwithhint: 183},
{year: 2024, month: 7, day: 29, questionid: 95, timesasked: 1328,timescorrect: 466, timescorrectwithhint: 558, timesincorrect: 197, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 29, questionid: 96, timesasked: 1850,timescorrect: 619, timescorrectwithhint: 760, timesincorrect: 305, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 29, questionid: 97, timesasked: 1648,timescorrect: 374, timescorrectwithhint: 570, timesincorrect: 449, timesincorrectwithhint: 255},
{year: 2024, month: 7, day: 30, questionid: 1, timesasked: 1859,timescorrect: 451, timescorrectwithhint: 661, timesincorrect: 478, timesincorrectwithhint: 269},
{year: 2024, month: 7, day: 30, questionid: 2, timesasked: 1104,timescorrect: 365, timescorrectwithhint: 450, timesincorrect: 186, timesincorrectwithhint: 103},
{year: 2024, month: 7, day: 30, questionid: 3, timesasked: 1382,timescorrect: 468, timescorrectwithhint: 571, timesincorrect: 222, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 30, questionid: 4, timesasked: 1147,timescorrect: 380, timescorrectwithhint: 468, timesincorrect: 193, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 30, questionid: 5, timesasked: 1772,timescorrect: 571, timescorrectwithhint: 714, timesincorrect: 314, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 30, questionid: 6, timesasked: 1601,timescorrect: 391, timescorrectwithhint: 570, timesincorrect: 409, timesincorrectwithhint: 231},
{year: 2024, month: 7, day: 30, questionid: 7, timesasked: 1070,timescorrect: 305, timescorrectwithhint: 407, timesincorrect: 229, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 30, questionid: 8, timesasked: 1507,timescorrect: 574, timescorrectwithhint: 661, timesincorrect: 179, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 30, questionid: 9, timesasked: 1808,timescorrect: 609, timescorrectwithhint: 745, timesincorrect: 294, timesincorrectwithhint: 160},
{year: 2024, month: 7, day: 30, questionid: 10, timesasked: 1452,timescorrect: 480, timescorrectwithhint: 593, timesincorrect: 245, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 30, questionid: 11, timesasked: 1918,timescorrect: 613, timescorrectwithhint: 770, timesincorrect: 345, timesincorrectwithhint: 190},
{year: 2024, month: 7, day: 30, questionid: 12, timesasked: 1515,timescorrect: 319, timescorrectwithhint: 509, timesincorrect: 438, timesincorrectwithhint: 249},
{year: 2024, month: 7, day: 30, questionid: 13, timesasked: 1939,timescorrect: 508, timescorrectwithhint: 712, timesincorrect: 460, timesincorrectwithhint: 259},
{year: 2024, month: 7, day: 30, questionid: 14, timesasked: 1485,timescorrect: 473, timescorrectwithhint: 596, timesincorrect: 268, timesincorrectwithhint: 148},
{year: 2024, month: 7, day: 30, questionid: 15, timesasked: 1103,timescorrect: 342, timescorrectwithhint: 437, timesincorrect: 208, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 30, questionid: 16, timesasked: 1235,timescorrect: 273, timescorrectwithhint: 423, timesincorrect: 343, timesincorrectwithhint: 196},
{year: 2024, month: 7, day: 30, questionid: 17, timesasked: 1821,timescorrect: 589, timescorrectwithhint: 736, timesincorrect: 320, timesincorrectwithhint: 176},
{year: 2024, month: 7, day: 30, questionid: 18, timesasked: 1954,timescorrect: 511, timescorrectwithhint: 717, timesincorrect: 465, timesincorrectwithhint: 261},
{year: 2024, month: 7, day: 30, questionid: 19, timesasked: 1529,timescorrect: 549, timescorrectwithhint: 650, timesincorrect: 214, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 30, questionid: 20, timesasked: 1994,timescorrect: 515, timescorrectwithhint: 728, timesincorrect: 481, timesincorrectwithhint: 270},
{year: 2024, month: 7, day: 30, questionid: 21, timesasked: 1514,timescorrect: 518, timescorrectwithhint: 629, timesincorrect: 238, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 30, questionid: 22, timesasked: 1624,timescorrect: 484, timescorrectwithhint: 631, timesincorrect: 327, timesincorrectwithhint: 182},
{year: 2024, month: 7, day: 30, questionid: 23, timesasked: 1759,timescorrect: 493, timescorrectwithhint: 665, timesincorrect: 386, timesincorrectwithhint: 215},
{year: 2024, month: 7, day: 30, questionid: 24, timesasked: 1070,timescorrect: 367, timescorrectwithhint: 445, timesincorrect: 167, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 30, questionid: 25, timesasked: 1666,timescorrect: 518, timescorrectwithhint: 661, timesincorrect: 314, timesincorrectwithhint: 173},
{year: 2024, month: 7, day: 30, questionid: 26, timesasked: 1378,timescorrect: 408, timescorrectwithhint: 534, timesincorrect: 280, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 30, questionid: 27, timesasked: 1697,timescorrect: 268, timescorrectwithhint: 517, timesincorrect: 580, timesincorrectwithhint: 332},
{year: 2024, month: 7, day: 30, questionid: 28, timesasked: 1439,timescorrect: 467, timescorrectwithhint: 582, timesincorrect: 252, timesincorrectwithhint: 138},
{year: 2024, month: 7, day: 30, questionid: 29, timesasked: 1748,timescorrect: 342, timescorrectwithhint: 572, timesincorrect: 531, timesincorrectwithhint: 303},
{year: 2024, month: 7, day: 30, questionid: 30, timesasked: 1938,timescorrect: 486, timescorrectwithhint: 698, timesincorrect: 482, timesincorrectwithhint: 272},
{year: 2024, month: 7, day: 30, questionid: 31, timesasked: 1216,timescorrect: 361, timescorrectwithhint: 472, timesincorrect: 246, timesincorrectwithhint: 137},
{year: 2024, month: 7, day: 30, questionid: 32, timesasked: 1483,timescorrect: 572, timescorrectwithhint: 654, timesincorrect: 169, timesincorrectwithhint: 88},
{year: 2024, month: 7, day: 30, questionid: 33, timesasked: 1175,timescorrect: 328, timescorrectwithhint: 444, timesincorrect: 258, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 30, questionid: 34, timesasked: 1498,timescorrect: 512, timescorrectwithhint: 622, timesincorrect: 236, timesincorrectwithhint: 128},
{year: 2024, month: 7, day: 30, questionid: 35, timesasked: 1263,timescorrect: 218, timescorrectwithhint: 396, timesincorrect: 412, timesincorrectwithhint: 237},
{year: 2024, month: 7, day: 30, questionid: 36, timesasked: 1102,timescorrect: 384, timescorrectwithhint: 461, timesincorrect: 166, timesincorrectwithhint: 91},
{year: 2024, month: 7, day: 30, questionid: 37, timesasked: 1282,timescorrect: 313, timescorrectwithhint: 457, timesincorrect: 327, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 30, questionid: 38, timesasked: 1736,timescorrect: 564, timescorrectwithhint: 703, timesincorrect: 303, timesincorrectwithhint: 166},
{year: 2024, month: 7, day: 30, questionid: 39, timesasked: 1143,timescorrect: 176, timescorrectwithhint: 345, timesincorrect: 395, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 30, questionid: 40, timesasked: 1390,timescorrect: 500, timescorrectwithhint: 592, timesincorrect: 194, timesincorrectwithhint: 104},
{year: 2024, month: 7, day: 30, questionid: 41, timesasked: 1276,timescorrect: 375, timescorrectwithhint: 493, timesincorrect: 262, timesincorrectwithhint: 146},
{year: 2024, month: 7, day: 30, questionid: 42, timesasked: 1031,timescorrect: 238, timescorrectwithhint: 359, timesincorrect: 277, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 30, questionid: 43, timesasked: 1183,timescorrect: 392, timescorrectwithhint: 484, timesincorrect: 198, timesincorrectwithhint: 109},
{year: 2024, month: 7, day: 30, questionid: 44, timesasked: 1666,timescorrect: 646, timescorrectwithhint: 737, timesincorrect: 186, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 30, questionid: 45, timesasked: 1536,timescorrect: 318, timescorrectwithhint: 513, timesincorrect: 449, timesincorrectwithhint: 256},
{year: 2024, month: 7, day: 30, questionid: 46, timesasked: 1734,timescorrect: 298, timescorrectwithhint: 543, timesincorrect: 568, timesincorrectwithhint: 325},
{year: 2024, month: 7, day: 30, questionid: 47, timesasked: 1180,timescorrect: 467, timescorrectwithhint: 528, timesincorrect: 122, timesincorrectwithhint: 63},
{year: 2024, month: 7, day: 30, questionid: 48, timesasked: 1485,timescorrect: 358, timescorrectwithhint: 526, timesincorrect: 384, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 30, questionid: 49, timesasked: 1759,timescorrect: 516, timescorrectwithhint: 679, timesincorrect: 362, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 30, questionid: 50, timesasked: 1901,timescorrect: 500, timescorrectwithhint: 699, timesincorrect: 449, timesincorrectwithhint: 253},
{year: 2024, month: 7, day: 30, questionid: 51, timesasked: 1336,timescorrect: 424, timescorrectwithhint: 535, timesincorrect: 243, timesincorrectwithhint: 134},
{year: 2024, month: 7, day: 30, questionid: 52, timesasked: 1700,timescorrect: 300, timescorrectwithhint: 537, timesincorrect: 549, timesincorrectwithhint: 314},
{year: 2024, month: 7, day: 30, questionid: 53, timesasked: 1011,timescorrect: 250, timescorrectwithhint: 362, timesincorrect: 255, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 30, questionid: 54, timesasked: 1183,timescorrect: 458, timescorrectwithhint: 523, timesincorrect: 133, timesincorrectwithhint: 69},
{year: 2024, month: 7, day: 30, questionid: 55, timesasked: 1654,timescorrect: 609, timescorrectwithhint: 713, timesincorrect: 217, timesincorrectwithhint: 115},
{year: 2024, month: 7, day: 30, questionid: 56, timesasked: 1708,timescorrect: 617, timescorrectwithhint: 729, timesincorrect: 236, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 30, questionid: 57, timesasked: 1069,timescorrect: 310, timescorrectwithhint: 410, timesincorrect: 223, timesincorrectwithhint: 126},
{year: 2024, month: 7, day: 30, questionid: 58, timesasked: 1530,timescorrect: 361, timescorrectwithhint: 538, timesincorrect: 403, timesincorrectwithhint: 228},
{year: 2024, month: 7, day: 30, questionid: 59, timesasked: 1521,timescorrect: 429, timescorrectwithhint: 576, timesincorrect: 331, timesincorrectwithhint: 185},
{year: 2024, month: 7, day: 30, questionid: 60, timesasked: 1304,timescorrect: 248, timescorrectwithhint: 423, timesincorrect: 403, timesincorrectwithhint: 230},
{year: 2024, month: 7, day: 30, questionid: 61, timesasked: 1419,timescorrect: 228, timescorrectwithhint: 434, timesincorrect: 481, timesincorrectwithhint: 276},
{year: 2024, month: 7, day: 30, questionid: 62, timesasked: 1319,timescorrect: 345, timescorrectwithhint: 484, timesincorrect: 313, timesincorrectwithhint: 177},
{year: 2024, month: 7, day: 30, questionid: 63, timesasked: 1901,timescorrect: 391, timescorrectwithhint: 634, timesincorrect: 558, timesincorrectwithhint: 318},
{year: 2024, month: 7, day: 30, questionid: 64, timesasked: 1132,timescorrect: 387, timescorrectwithhint: 470, timesincorrect: 178, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 30, questionid: 65, timesasked: 1370,timescorrect: 261, timescorrectwithhint: 444, timesincorrect: 423, timesincorrectwithhint: 242},
{year: 2024, month: 7, day: 30, questionid: 66, timesasked: 1889,timescorrect: 379, timescorrectwithhint: 624, timesincorrect: 565, timesincorrectwithhint: 321},
{year: 2024, month: 7, day: 30, questionid: 67, timesasked: 1676,timescorrect: 665, timescorrectwithhint: 751, timesincorrect: 172, timesincorrectwithhint: 88},
{year: 2024, month: 7, day: 30, questionid: 68, timesasked: 1373,timescorrect: 380, timescorrectwithhint: 516, timesincorrect: 305, timesincorrectwithhint: 172},
{year: 2024, month: 7, day: 30, questionid: 69, timesasked: 1873,timescorrect: 350, timescorrectwithhint: 603, timesincorrect: 585, timesincorrectwithhint: 335},
{year: 2024, month: 7, day: 30, questionid: 70, timesasked: 1684,timescorrect: 592, timescorrectwithhint: 708, timesincorrect: 249, timesincorrectwithhint: 135},
{year: 2024, month: 7, day: 30, questionid: 71, timesasked: 1424,timescorrect: 471, timescorrectwithhint: 582, timesincorrect: 240, timesincorrectwithhint: 131},
{year: 2024, month: 7, day: 30, questionid: 72, timesasked: 1058,timescorrect: 408, timescorrectwithhint: 467, timesincorrect: 120, timesincorrectwithhint: 63},
{year: 2024, month: 7, day: 30, questionid: 73, timesasked: 1738,timescorrect: 454, timescorrectwithhint: 637, timesincorrect: 414, timesincorrectwithhint: 233},
{year: 2024, month: 7, day: 30, questionid: 74, timesasked: 1025,timescorrect: 201, timescorrectwithhint: 336, timesincorrect: 311, timesincorrectwithhint: 177},
{year: 2024, month: 7, day: 30, questionid: 75, timesasked: 1810,timescorrect: 289, timescorrectwithhint: 553, timesincorrect: 615, timesincorrectwithhint: 353},
{year: 2024, month: 7, day: 30, questionid: 76, timesasked: 1111,timescorrect: 364, timescorrectwithhint: 452, timesincorrect: 190, timesincorrectwithhint: 105},
{year: 2024, month: 7, day: 30, questionid: 77, timesasked: 1617,timescorrect: 358, timescorrectwithhint: 554, timesincorrect: 450, timesincorrectwithhint: 255},
{year: 2024, month: 7, day: 30, questionid: 78, timesasked: 1992,timescorrect: 726, timescorrectwithhint: 854, timesincorrect: 269, timesincorrectwithhint: 143},
{year: 2024, month: 7, day: 30, questionid: 79, timesasked: 1342,timescorrect: 296, timescorrectwithhint: 459, timesincorrect: 374, timesincorrectwithhint: 213},
{year: 2024, month: 7, day: 30, questionid: 80, timesasked: 1615,timescorrect: 592, timescorrectwithhint: 694, timesincorrect: 215, timesincorrectwithhint: 114},
{year: 2024, month: 7, day: 30, questionid: 81, timesasked: 1819,timescorrect: 414, timescorrectwithhint: 630, timesincorrect: 494, timesincorrectwithhint: 281},
{year: 2024, month: 7, day: 30, questionid: 82, timesasked: 1323,timescorrect: 269, timescorrectwithhint: 439, timesincorrect: 392, timesincorrectwithhint: 223},
{year: 2024, month: 7, day: 30, questionid: 83, timesasked: 1288,timescorrect: 467, timescorrectwithhint: 551, timesincorrect: 176, timesincorrectwithhint: 94},
{year: 2024, month: 7, day: 30, questionid: 84, timesasked: 1882,timescorrect: 515, timescorrectwithhint: 704, timesincorrect: 425, timesincorrectwithhint: 238},
{year: 2024, month: 7, day: 30, questionid: 85, timesasked: 1834,timescorrect: 405, timescorrectwithhint: 628, timesincorrect: 511, timesincorrectwithhint: 290},
{year: 2024, month: 7, day: 30, questionid: 86, timesasked: 1941,timescorrect: 657, timescorrectwithhint: 801, timesincorrect: 313, timesincorrectwithhint: 170},
{year: 2024, month: 7, day: 30, questionid: 87, timesasked: 1795,timescorrect: 716, timescorrectwithhint: 807, timesincorrect: 180, timesincorrectwithhint: 92},
{year: 2024, month: 7, day: 30, questionid: 88, timesasked: 1281,timescorrect: 387, timescorrectwithhint: 501, timesincorrect: 253, timesincorrectwithhint: 140},
{year: 2024, month: 7, day: 30, questionid: 89, timesasked: 1702,timescorrect: 486, timescorrectwithhint: 649, timesincorrect: 364, timesincorrectwithhint: 203},
{year: 2024, month: 7, day: 30, questionid: 90, timesasked: 1783,timescorrect: 659, timescorrectwithhint: 770, timesincorrect: 231, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 30, questionid: 91, timesasked: 1657,timescorrect: 249, timescorrectwithhint: 497, timesincorrect: 578, timesincorrectwithhint: 333},
{year: 2024, month: 7, day: 30, questionid: 92, timesasked: 1743,timescorrect: 565, timescorrectwithhint: 705, timesincorrect: 306, timesincorrectwithhint: 167},
{year: 2024, month: 7, day: 30, questionid: 93, timesasked: 1423,timescorrect: 523, timescorrectwithhint: 612, timesincorrect: 187, timesincorrectwithhint: 101},
{year: 2024, month: 7, day: 30, questionid: 94, timesasked: 1853,timescorrect: 315, timescorrectwithhint: 578, timesincorrect: 610, timesincorrectwithhint: 350},
{year: 2024, month: 7, day: 30, questionid: 95, timesasked: 1240,timescorrect: 488, timescorrectwithhint: 553, timesincorrect: 131, timesincorrectwithhint: 68},
{year: 2024, month: 7, day: 30, questionid: 96, timesasked: 1747,timescorrect: 363, timescorrectwithhint: 584, timesincorrect: 510, timesincorrectwithhint: 290},
{year: 2024, month: 7, day: 30, questionid: 97, timesasked: 1201,timescorrect: 404, timescorrectwithhint: 494, timesincorrect: 196, timesincorrectwithhint: 107},
{year: 2024, month: 7, day: 31, questionid: 1, timesasked: 1516,timescorrect: 478, timescorrectwithhint: 605, timesincorrect: 279, timesincorrectwithhint: 154},
{year: 2024, month: 7, day: 31, questionid: 2, timesasked: 1742,timescorrect: 689, timescorrectwithhint: 779, timesincorrect: 181, timesincorrectwithhint: 93},
{year: 2024, month: 7, day: 31, questionid: 3, timesasked: 1369,timescorrect: 435, timescorrectwithhint: 548, timesincorrect: 249, timesincorrectwithhint: 137},
{year: 2024, month: 7, day: 31, questionid: 4, timesasked: 1565,timescorrect: 551, timescorrectwithhint: 659, timesincorrect: 230, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 31, questionid: 5, timesasked: 1682,timescorrect: 348, timescorrectwithhint: 562, timesincorrect: 492, timesincorrectwithhint: 280},
{year: 2024, month: 7, day: 31, questionid: 6, timesasked: 1988,timescorrect: 421, timescorrectwithhint: 670, timesincorrect: 572, timesincorrectwithhint: 325},
{year: 2024, month: 7, day: 31, questionid: 7, timesasked: 1999,timescorrect: 496, timescorrectwithhint: 717, timesincorrect: 502, timesincorrectwithhint: 284},
{year: 2024, month: 7, day: 31, questionid: 8, timesasked: 1650,timescorrect: 285, timescorrectwithhint: 517, timesincorrect: 539, timesincorrectwithhint: 309},
{year: 2024, month: 7, day: 31, questionid: 9, timesasked: 1050,timescorrect: 295, timescorrectwithhint: 397, timesincorrect: 229, timesincorrectwithhint: 129},
{year: 2024, month: 7, day: 31, questionid: 10, timesasked: 1308,timescorrect: 324, timescorrectwithhint: 469, timesincorrect: 329, timesincorrectwithhint: 186},
{year: 2024, month: 7, day: 31, questionid: 11, timesasked: 1016,timescorrect: 353, timescorrectwithhint: 425, timesincorrect: 154, timesincorrectwithhint: 84},
{year: 2024, month: 7, day: 31, questionid: 12, timesasked: 1424,timescorrect: 256, timescorrectwithhint: 453, timesincorrect: 455, timesincorrectwithhint: 260},
{year: 2024, month: 7, day: 31, questionid: 13, timesasked: 1277,timescorrect: 444, timescorrectwithhint: 534, timesincorrect: 193, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 31, questionid: 14, timesasked: 1110,timescorrect: 380, timescorrectwithhint: 461, timesincorrect: 174, timesincorrectwithhint: 95},
{year: 2024, month: 7, day: 31, questionid: 15, timesasked: 1855,timescorrect: 290, timescorrectwithhint: 563, timesincorrect: 636, timesincorrectwithhint: 366},
{year: 2024, month: 7, day: 31, questionid: 16, timesasked: 1276,timescorrect: 282, timescorrectwithhint: 437, timesincorrect: 355, timesincorrectwithhint: 202},
{year: 2024, month: 7, day: 31, questionid: 17, timesasked: 1518,timescorrect: 476, timescorrectwithhint: 604, timesincorrect: 282, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 31, questionid: 18, timesasked: 1030,timescorrect: 278, timescorrectwithhint: 383, timesincorrect: 236, timesincorrectwithhint: 133},
{year: 2024, month: 7, day: 31, questionid: 19, timesasked: 1261,timescorrect: 497, timescorrectwithhint: 563, timesincorrect: 133, timesincorrectwithhint: 68},
{year: 2024, month: 7, day: 31, questionid: 20, timesasked: 1318,timescorrect: 518, timescorrectwithhint: 587, timesincorrect: 140, timesincorrectwithhint: 73},
{year: 2024, month: 7, day: 31, questionid: 21, timesasked: 1870,timescorrect: 625, timescorrectwithhint: 768, timesincorrect: 309, timesincorrectwithhint: 168},
{year: 2024, month: 7, day: 31, questionid: 22, timesasked: 1319,timescorrect: 439, timescorrectwithhint: 540, timesincorrect: 219, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 31, questionid: 23, timesasked: 1206,timescorrect: 365, timescorrectwithhint: 472, timesincorrect: 237, timesincorrectwithhint: 132},
{year: 2024, month: 7, day: 31, questionid: 24, timesasked: 1102,timescorrect: 220, timescorrectwithhint: 363, timesincorrect: 330, timesincorrectwithhint: 189},
{year: 2024, month: 7, day: 31, questionid: 25, timesasked: 1158,timescorrect: 228, timescorrectwithhint: 380, timesincorrect: 350, timesincorrectwithhint: 200},
{year: 2024, month: 7, day: 31, questionid: 26, timesasked: 1041,timescorrect: 215, timescorrectwithhint: 347, timesincorrect: 304, timesincorrectwithhint: 175},
{year: 2024, month: 7, day: 31, questionid: 27, timesasked: 1010,timescorrect: 375, timescorrectwithhint: 437, timesincorrect: 129, timesincorrectwithhint: 69},
{year: 2024, month: 7, day: 31, questionid: 28, timesasked: 1364,timescorrect: 333, timescorrectwithhint: 486, timesincorrect: 348, timesincorrectwithhint: 197},
{year: 2024, month: 7, day: 31, questionid: 29, timesasked: 1015,timescorrect: 257, timescorrectwithhint: 367, timesincorrect: 250, timesincorrectwithhint: 141},
{year: 2024, month: 7, day: 31, questionid: 30, timesasked: 1057,timescorrect: 407, timescorrectwithhint: 466, timesincorrect: 120, timesincorrectwithhint: 64},
{year: 2024, month: 7, day: 31, questionid: 31, timesasked: 1389,timescorrect: 402, timescorrectwithhint: 532, timesincorrect: 292, timesincorrectwithhint: 163},
{year: 2024, month: 7, day: 31, questionid: 32, timesasked: 1706,timescorrect: 285, timescorrectwithhint: 529, timesincorrect: 567, timesincorrectwithhint: 325},
{year: 2024, month: 7, day: 31, questionid: 33, timesasked: 1346,timescorrect: 531, timescorrectwithhint: 601, timesincorrect: 141, timesincorrectwithhint: 73},
{year: 2024, month: 7, day: 31, questionid: 34, timesasked: 1222,timescorrect: 220, timescorrectwithhint: 388, timesincorrect: 390, timesincorrectwithhint: 224},
{year: 2024, month: 7, day: 31, questionid: 35, timesasked: 1547,timescorrect: 488, timescorrectwithhint: 618, timesincorrect: 284, timesincorrectwithhint: 157},
{year: 2024, month: 7, day: 31, questionid: 36, timesasked: 1514,timescorrect: 236, timescorrectwithhint: 459, timesincorrect: 520, timesincorrectwithhint: 299},
{year: 2024, month: 7, day: 31, questionid: 37, timesasked: 1474,timescorrect: 465, timescorrectwithhint: 588, timesincorrect: 271, timesincorrectwithhint: 150},
{year: 2024, month: 7, day: 31, questionid: 38, timesasked: 1384,timescorrect: 482, timescorrectwithhint: 580, timesincorrect: 209, timesincorrectwithhint: 113},
{year: 2024, month: 7, day: 31, questionid: 39, timesasked: 1284,timescorrect: 278, timescorrectwithhint: 436, timesincorrect: 363, timesincorrectwithhint: 207},
{year: 2024, month: 7, day: 31, questionid: 40, timesasked: 1726,timescorrect: 595, timescorrectwithhint: 719, timesincorrect: 267, timesincorrectwithhint: 145},
{year: 2024, month: 7, day: 31, questionid: 41, timesasked: 1147,timescorrect: 394, timescorrectwithhint: 477, timesincorrect: 179, timesincorrectwithhint: 97},
{year: 2024, month: 7, day: 31, questionid: 42, timesasked: 1305,timescorrect: 299, timescorrectwithhint: 453, timesincorrect: 353, timesincorrectwithhint: 200},
{year: 2024, month: 7, day: 31, questionid: 43, timesasked: 1141,timescorrect: 186, timescorrectwithhint: 351, timesincorrect: 384, timesincorrectwithhint: 220},
{year: 2024, month: 7, day: 31, questionid: 44, timesasked: 1856,timescorrect: 648, timescorrectwithhint: 778, timesincorrect: 279, timesincorrectwithhint: 151},
{year: 2024, month: 7, day: 31, questionid: 45, timesasked: 1087,timescorrect: 251, timescorrectwithhint: 379, timesincorrect: 292, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 31, questionid: 46, timesasked: 1800,timescorrect: 464, timescorrectwithhint: 656, timesincorrect: 435, timesincorrectwithhint: 245},
{year: 2024, month: 7, day: 31, questionid: 47, timesasked: 1985,timescorrect: 706, timescorrectwithhint: 840, timesincorrect: 286, timesincorrectwithhint: 153},
{year: 2024, month: 7, day: 31, questionid: 48, timesasked: 1956,timescorrect: 387, timescorrectwithhint: 643, timesincorrect: 590, timesincorrectwithhint: 336},
{year: 2024, month: 7, day: 31, questionid: 49, timesasked: 1922,timescorrect: 378, timescorrectwithhint: 630, timesincorrect: 582, timesincorrectwithhint: 332},
{year: 2024, month: 7, day: 31, questionid: 50, timesasked: 1810,timescorrect: 678, timescorrectwithhint: 787, timesincorrect: 226, timesincorrectwithhint: 119},
{year: 2024, month: 7, day: 31, questionid: 51, timesasked: 1679,timescorrect: 485, timescorrectwithhint: 643, timesincorrect: 353, timesincorrectwithhint: 198},
{year: 2024, month: 7, day: 31, questionid: 52, timesasked: 1665,timescorrect: 336, timescorrectwithhint: 551, timesincorrect: 496, timesincorrectwithhint: 282},
{year: 2024, month: 7, day: 31, questionid: 53, timesasked: 1560,timescorrect: 298, timescorrectwithhint: 506, timesincorrect: 481, timesincorrectwithhint: 275},
{year: 2024, month: 7, day: 31, questionid: 54, timesasked: 1707,timescorrect: 270, timescorrectwithhint: 520, timesincorrect: 583, timesincorrectwithhint: 334},
{year: 2024, month: 7, day: 31, questionid: 55, timesasked: 1506,timescorrect: 490, timescorrectwithhint: 610, timesincorrect: 262, timesincorrectwithhint: 144},
{year: 2024, month: 7, day: 31, questionid: 56, timesasked: 1796,timescorrect: 390, timescorrectwithhint: 611, timesincorrect: 507, timesincorrectwithhint: 288},
{year: 2024, month: 7, day: 31, questionid: 57, timesasked: 1487,timescorrect: 526, timescorrectwithhint: 628, timesincorrect: 216, timesincorrectwithhint: 117},
{year: 2024, month: 7, day: 31, questionid: 58, timesasked: 1663,timescorrect: 306, timescorrectwithhint: 533, timesincorrect: 524, timesincorrectwithhint: 300},
{year: 2024, month: 7, day: 31, questionid: 59, timesasked: 1325,timescorrect: 518, timescorrectwithhint: 589, timesincorrect: 144, timesincorrectwithhint: 74},
{year: 2024, month: 7, day: 31, questionid: 60, timesasked: 1163,timescorrect: 329, timescorrectwithhint: 441, timesincorrect: 252, timesincorrectwithhint: 141},
{year: 2024, month: 7, day: 31, questionid: 61, timesasked: 1445,timescorrect: 363, timescorrectwithhint: 521, timesincorrect: 358, timesincorrectwithhint: 203},
{year: 2024, month: 7, day: 31, questionid: 62, timesasked: 1224,timescorrect: 386, timescorrectwithhint: 488, timesincorrect: 225, timesincorrectwithhint: 125},
{year: 2024, month: 7, day: 31, questionid: 63, timesasked: 1854,timescorrect: 730, timescorrectwithhint: 827, timesincorrect: 196, timesincorrectwithhint: 101},
{year: 2024, month: 7, day: 31, questionid: 64, timesasked: 1502,timescorrect: 468, timescorrectwithhint: 596, timesincorrect: 282, timesincorrectwithhint: 156},
{year: 2024, month: 7, day: 31, questionid: 65, timesasked: 1461,timescorrect: 355, timescorrectwithhint: 519, timesincorrect: 375, timesincorrectwithhint: 212},
{year: 2024, month: 7, day: 31, questionid: 66, timesasked: 1566,timescorrect: 342, timescorrectwithhint: 534, timesincorrect: 440, timesincorrectwithhint: 250},
{year: 2024, month: 7, day: 31, questionid: 67, timesasked: 1645,timescorrect: 368, timescorrectwithhint: 566, timesincorrect: 454, timesincorrectwithhint: 257},
{year: 2024, month: 7, day: 31, questionid: 68, timesasked: 1133,timescorrect: 285, timescorrectwithhint: 409, timesincorrect: 280, timesincorrectwithhint: 159},
{year: 2024, month: 7, day: 31, questionid: 69, timesasked: 1770,timescorrect: 467, timescorrectwithhint: 652, timesincorrect: 417, timesincorrectwithhint: 234},
{year: 2024, month: 7, day: 31, questionid: 70, timesasked: 1538,timescorrect: 391, timescorrectwithhint: 558, timesincorrect: 377, timesincorrectwithhint: 212},
{year: 2024, month: 7, day: 31, questionid: 71, timesasked: 1181,timescorrect: 239, timescorrectwithhint: 391, timesincorrect: 350, timesincorrectwithhint: 201},
{year: 2024, month: 7, day: 31, questionid: 72, timesasked: 1797,timescorrect: 430, timescorrectwithhint: 635, timesincorrect: 468, timesincorrectwithhint: 264},
{year: 2024, month: 7, day: 31, questionid: 73, timesasked: 1924,timescorrect: 616, timescorrectwithhint: 773, timesincorrect: 345, timesincorrectwithhint: 190},
{year: 2024, month: 7, day: 31, questionid: 74, timesasked: 1178,timescorrect: 366, timescorrectwithhint: 467, timesincorrect: 222, timesincorrectwithhint: 123},
{year: 2024, month: 7, day: 31, questionid: 75, timesasked: 1311,timescorrect: 505, timescorrectwithhint: 578, timesincorrect: 149, timesincorrectwithhint: 79},
{year: 2024, month: 7, day: 31, questionid: 76, timesasked: 1735,timescorrect: 639, timescorrectwithhint: 748, timesincorrect: 227, timesincorrectwithhint: 121},
{year: 2024, month: 7, day: 31, questionid: 77, timesasked: 1738,timescorrect: 304, timescorrectwithhint: 547, timesincorrect: 564, timesincorrectwithhint: 323},
{year: 2024, month: 7, day: 31, questionid: 78, timesasked: 1816,timescorrect: 446, timescorrectwithhint: 649, timesincorrect: 461, timesincorrectwithhint: 260},
{year: 2024, month: 7, day: 31, questionid: 79, timesasked: 1941,timescorrect: 760, timescorrectwithhint: 864, timesincorrect: 209, timesincorrectwithhint: 108},
{year: 2024, month: 7, day: 31, questionid: 80, timesasked: 1472,timescorrect: 335, timescorrectwithhint: 510, timesincorrect: 400, timesincorrectwithhint: 227},
{year: 2024, month: 7, day: 31, questionid: 81, timesasked: 1533,timescorrect: 565, timescorrectwithhint: 661, timesincorrect: 201, timesincorrectwithhint: 106},
{year: 2024, month: 7, day: 31, questionid: 82, timesasked: 1508,timescorrect: 456, timescorrectwithhint: 590, timesincorrect: 297, timesincorrectwithhint: 165},
{year: 2024, month: 7, day: 31, questionid: 83, timesasked: 1788,timescorrect: 371, timescorrectwithhint: 598, timesincorrect: 522, timesincorrectwithhint: 297},
{year: 2024, month: 7, day: 31, questionid: 84, timesasked: 1119,timescorrect: 423, timescorrectwithhint: 489, timesincorrect: 135, timesincorrectwithhint: 72},
{year: 2024, month: 7, day: 31, questionid: 85, timesasked: 1659,timescorrect: 254, timescorrectwithhint: 501, timesincorrect: 575, timesincorrectwithhint: 329},
{year: 2024, month: 7, day: 31, questionid: 86, timesasked: 1339,timescorrect: 524, timescorrectwithhint: 596, timesincorrect: 144, timesincorrectwithhint: 75},
{year: 2024, month: 7, day: 31, questionid: 87, timesasked: 1918,timescorrect: 414, timescorrectwithhint: 651, timesincorrect: 544, timesincorrectwithhint: 309},
{year: 2024, month: 7, day: 31, questionid: 88, timesasked: 1789,timescorrect: 700, timescorrectwithhint: 795, timesincorrect: 194, timesincorrectwithhint: 100},
{year: 2024, month: 7, day: 31, questionid: 89, timesasked: 1808,timescorrect: 682, timescorrectwithhint: 789, timesincorrect: 221, timesincorrectwithhint: 116},
{year: 2024, month: 7, day: 31, questionid: 90, timesasked: 1315,timescorrect: 485, timescorrectwithhint: 567, timesincorrect: 171, timesincorrectwithhint: 92},
{year: 2024, month: 7, day: 31, questionid: 91, timesasked: 1953,timescorrect: 707, timescorrectwithhint: 834, timesincorrect: 269, timesincorrectwithhint: 143},
{year: 2024, month: 7, day: 31, questionid: 92, timesasked: 1941,timescorrect: 579, timescorrectwithhint: 755, timesincorrect: 390, timesincorrectwithhint: 217},
{year: 2024, month: 7, day: 31, questionid: 93, timesasked: 1577,timescorrect: 326, timescorrectwithhint: 527, timesincorrect: 461, timesincorrectwithhint: 263},
{year: 2024, month: 7, day: 31, questionid: 94, timesasked: 1906,timescorrect: 342, timescorrectwithhint: 605, timesincorrect: 610, timesincorrectwithhint: 349},
{year: 2024, month: 7, day: 31, questionid: 95, timesasked: 1002,timescorrect: 358, timescorrectwithhint: 425, timesincorrect: 142, timesincorrectwithhint: 77},
{year: 2024, month: 7, day: 31, questionid: 96, timesasked: 1421,timescorrect: 302, timescorrectwithhint: 479, timesincorrect: 407, timesincorrectwithhint: 233},
{year: 2024, month: 7, day: 31, questionid: 97, timesasked: 1536,timescorrect: 362, timescorrectwithhint: 539, timesincorrect: 405, timesincorrectwithhint: 230},
{year: 2024, month: 8, day: 1, questionid: 1, timesasked: 1886,timescorrect: 488, timescorrectwithhint: 689, timesincorrect: 454, timesincorrectwithhint: 255},
{year: 2024, month: 8, day: 1, questionid: 2, timesasked: 1224,timescorrect: 207, timescorrectwithhint: 381, timesincorrect: 404, timesincorrectwithhint: 232},
{year: 2024, month: 8, day: 1, questionid: 3, timesasked: 1039,timescorrect: 286, timescorrectwithhint: 390, timesincorrect: 233, timesincorrectwithhint: 130},
{year: 2024, month: 8, day: 1, questionid: 4, timesasked: 1028,timescorrect: 161, timescorrectwithhint: 312, timesincorrect: 352, timesincorrectwithhint: 203},
{year: 2024, month: 8, day: 1, questionid: 5, timesasked: 1637,timescorrect: 455, timescorrectwithhint: 616, timesincorrect: 363, timesincorrectwithhint: 203},
{year: 2024, month: 8, day: 1, questionid: 6, timesasked: 1034,timescorrect: 319, timescorrectwithhint: 408, timesincorrect: 197, timesincorrectwithhint: 110},
{year: 2024, month: 8, day: 1, questionid: 7, timesasked: 1450,timescorrect: 470, timescorrectwithhint: 587, timesincorrect: 254, timesincorrectwithhint: 139},
{year: 2024, month: 8, day: 1, questionid: 8, timesasked: 1970,timescorrect: 449, timescorrectwithhint: 683, timesincorrect: 535, timesincorrectwithhint: 303},
{year: 2024, month: 8, day: 1, questionid: 9, timesasked: 1933,timescorrect: 585, timescorrectwithhint: 757, timesincorrect: 380, timesincorrectwithhint: 211},
{year: 2024, month: 8, day: 1, questionid: 10, timesasked: 1567,timescorrect: 439, timescorrectwithhint: 592, timesincorrect: 344, timesincorrectwithhint: 192},
{year: 2024, month: 8, day: 1, questionid: 11, timesasked: 1773,timescorrect: 474, timescorrectwithhint: 656, timesincorrect: 412, timesincorrectwithhint: 231},
{year: 2024, month: 8, day: 1, questionid: 12, timesasked: 1054,timescorrect: 397, timescorrectwithhint: 459, timesincorrect: 129, timesincorrectwithhint: 69},
{year: 2024, month: 8, day: 1, questionid: 13, timesasked: 1159,timescorrect: 234, timescorrectwithhint: 384, timesincorrect: 344, timesincorrectwithhint: 197},
{year: 2024, month: 8, day: 1, questionid: 14, timesasked: 1181,timescorrect: 216, timescorrectwithhint: 378, timesincorrect: 373, timesincorrectwithhint: 214},
{year: 2024, month: 8, day: 1, questionid: 15, timesasked: 1955,timescorrect: 696, timescorrectwithhint: 828, timesincorrect: 280, timesincorrectwithhint: 151},
{year: 2024, month: 8, day: 1, questionid: 16, timesasked: 1527,timescorrect: 333, timescorrectwithhint: 520, timesincorrect: 430, timesincorrectwithhint: 244},
{year: 2024, month: 8, day: 1, questionid: 17, timesasked: 1505,timescorrect: 440, timescorrectwithhint: 580, timesincorrect: 312, timesincorrectwithhint: 173},
{year: 2024, month: 8, day: 1, questionid: 18, timesasked: 1704,timescorrect: 605, timescorrectwithhint: 720, timesincorrect: 246, timesincorrectwithhint: 133},
{year: 2024, month: 8, day: 1, questionid: 19, timesasked: 1584,timescorrect: 358, timescorrectwithhint: 547, timesincorrect: 433, timesincorrectwithhint: 246},
{year: 2024, month: 8, day: 1, questionid: 20, timesasked: 1986,timescorrect: 728, timescorrectwithhint: 854, timesincorrect: 264, timesincorrectwithhint: 140},
{year: 2024, month: 8, day: 1, questionid: 21, timesasked: 1964,timescorrect: 684, timescorrectwithhint: 823, timesincorrect: 297, timesincorrectwithhint: 160},
{year: 2024, month: 8, day: 1, questionid: 22, timesasked: 1587,timescorrect: 476, timescorrectwithhint: 619, timesincorrect: 317, timesincorrectwithhint: 175},
{year: 2024, month: 8, day: 1, questionid: 23, timesasked: 1837,timescorrect: 665, timescorrectwithhint: 785, timesincorrect: 252, timesincorrectwithhint: 135},
{year: 2024, month: 8, day: 1, questionid: 24, timesasked: 1641,timescorrect: 430, timescorrectwithhint: 602, timesincorrect: 390, timesincorrectwithhint: 219},
{year: 2024, month: 8, day: 1, questionid: 25, timesasked: 1183,timescorrect: 367, timescorrectwithhint: 468, timesincorrect: 224, timesincorrectwithhint: 124},
{year: 2024, month: 8, day: 1, questionid: 26, timesasked: 1576,timescorrect: 312, timescorrectwithhint: 518, timesincorrect: 475, timesincorrectwithhint: 271},
{year: 2024, month: 8, day: 1, questionid: 27, timesasked: 1305,timescorrect: 222, timescorrectwithhint: 407, timesincorrect: 429, timesincorrectwithhint: 247},
{year: 2024, month: 8, day: 1, questionid: 28, timesasked: 1341,timescorrect: 487, timescorrectwithhint: 574, timesincorrect: 182, timesincorrectwithhint: 98},
{year: 2024, month: 8, day: 1, questionid: 29, timesasked: 1027,timescorrect: 292, timescorrectwithhint: 391, timesincorrect: 220, timesincorrectwithhint: 124},
{year: 2024, month: 8, day: 1, questionid: 30, timesasked: 1047,timescorrect: 229, timescorrectwithhint: 357, timesincorrect: 294, timesincorrectwithhint: 167},
{year: 2024, month: 8, day: 1, questionid: 31, timesasked: 1513,timescorrect: 231, timescorrectwithhint: 456, timesincorrect: 524, timesincorrectwithhint: 302},
{year: 2024, month: 8, day: 1, questionid: 32, timesasked: 1311,timescorrect: 368, timescorrectwithhint: 496, timesincorrect: 286, timesincorrectwithhint: 161},
{year: 2024, month: 8, day: 1, questionid: 33, timesasked: 1681,timescorrect: 274, timescorrectwithhint: 517, timesincorrect: 566, timesincorrectwithhint: 324},
{year: 2024, month: 8, day: 1, questionid: 34, timesasked: 1950,timescorrect: 318, timescorrectwithhint: 600, timesincorrect: 656, timesincorrectwithhint: 376},
{year: 2024, month: 8, day: 1, questionid: 35, timesasked: 1444,timescorrect: 436, timescorrectwithhint: 564, timesincorrect: 285, timesincorrectwithhint: 159},
{year: 2024, month: 8, day: 1, questionid: 36, timesasked: 1066,timescorrect: 325, timescorrectwithhint: 419, timesincorrect: 207, timesincorrectwithhint: 115},
{year: 2024, month: 8, day: 1, questionid: 37, timesasked: 1371,timescorrect: 351, timescorrectwithhint: 498, timesincorrect: 333, timesincorrectwithhint: 189},
{year: 2024, month: 8, day: 1, questionid: 38, timesasked: 1784,timescorrect: 429, timescorrectwithhint: 632, timesincorrect: 462, timesincorrectwithhint: 261},
{year: 2024, month: 8, day: 1, questionid: 39, timesasked: 1339,timescorrect: 312, timescorrectwithhint: 468, timesincorrect: 356, timesincorrectwithhint: 203},
{year: 2024, month: 8, day: 1, questionid: 40, timesasked: 1244,timescorrect: 460, timescorrectwithhint: 537, timesincorrect: 161, timesincorrectwithhint: 86},
{year: 2024, month: 8, day: 1, questionid: 41, timesasked: 1502,timescorrect: 369, timescorrectwithhint: 536, timesincorrect: 381, timesincorrectwithhint: 216},
{year: 2024, month: 8, day: 1, questionid: 42, timesasked: 1541,timescorrect: 319, timescorrectwithhint: 515, timesincorrect: 450, timesincorrectwithhint: 257},
{year: 2024, month: 8, day: 1, questionid: 43, timesasked: 1451,timescorrect: 319, timescorrectwithhint: 496, timesincorrect: 405, timesincorrectwithhint: 231},
{year: 2024, month: 8, day: 1, questionid: 44, timesasked: 1441,timescorrect: 249, timescorrectwithhint: 452, timesincorrect: 470, timesincorrectwithhint: 270},
{year: 2024, month: 8, day: 1, questionid: 45, timesasked: 1049,timescorrect: 403, timescorrectwithhint: 462, timesincorrect: 121, timesincorrectwithhint: 63},
{year: 2024, month: 8, day: 1, questionid: 46, timesasked: 1436,timescorrect: 551, timescorrectwithhint: 632, timesincorrect: 166, timesincorrectwithhint: 87},
{year: 2024, month: 8, day: 1, questionid: 47, timesasked: 1734,timescorrect: 315, timescorrectwithhint: 553, timesincorrect: 551, timesincorrectwithhint: 315},
{year: 2024, month: 8, day: 1, questionid: 48, timesasked: 1724,timescorrect: 557, timescorrectwithhint: 696, timesincorrect: 304, timesincorrectwithhint: 167},
{year: 2024, month: 8, day: 1, questionid: 49, timesasked: 1497,timescorrect: 270, timescorrectwithhint: 476, timesincorrect: 477, timesincorrectwithhint: 274},
{year: 2024, month: 8, day: 1, questionid: 50, timesasked: 1573,timescorrect: 322, timescorrectwithhint: 523, timesincorrect: 464, timesincorrectwithhint: 264},
{year: 2024, month: 8, day: 1, questionid: 51, timesasked: 1470,timescorrect: 474, timescorrectwithhint: 593, timesincorrect: 260, timesincorrectwithhint: 143},
{year: 2024, month: 8, day: 1, questionid: 52, timesasked: 1956,timescorrect: 297, timescorrectwithhint: 589, timesincorrect: 680, timesincorrectwithhint: 390},
{year: 2024, month: 8, day: 1, questionid: 53, timesasked: 1393,timescorrect: 406, timescorrectwithhint: 536, timesincorrect: 290, timesincorrectwithhint: 161},
{year: 2024, month: 8, day: 1, questionid: 54, timesasked: 1588,timescorrect: 556, timescorrectwithhint: 667, timesincorrect: 237, timesincorrectwithhint: 128},
{year: 2024, month: 8, day: 1, questionid: 55, timesasked: 1586,timescorrect: 548, timescorrectwithhint: 662, timesincorrect: 244, timesincorrectwithhint: 132},
{year: 2024, month: 8, day: 1, questionid: 56, timesasked: 1260,timescorrect: 426, timescorrectwithhint: 520, timesincorrect: 203, timesincorrectwithhint: 111},
{year: 2024, month: 8, day: 1, questionid: 57, timesasked: 1057,timescorrect: 259, timescorrectwithhint: 377, timesincorrect: 268, timesincorrectwithhint: 153},
{year: 2024, month: 8, day: 1, questionid: 58, timesasked: 1056,timescorrect: 220, timescorrectwithhint: 353, timesincorrect: 307, timesincorrectwithhint: 176},
{year: 2024, month: 8, day: 1, questionid: 59, timesasked: 1668,timescorrect: 538, timescorrectwithhint: 673, timesincorrect: 295, timesincorrectwithhint: 162},
{year: 2024, month: 8, day: 1, questionid: 60, timesasked: 1000,timescorrect: 343, timescorrectwithhint: 415, timesincorrect: 156, timesincorrectwithhint: 86},
{year: 2024, month: 8, day: 1, questionid: 61, timesasked: 1122,timescorrect: 308, timescorrectwithhint: 420, timesincorrect: 252, timesincorrectwithhint: 142},
{year: 2024, month: 8, day: 1, questionid: 62, timesasked: 1954,timescorrect: 442, timescorrectwithhint: 675, timesincorrect: 534, timesincorrectwithhint: 303},
{year: 2024, month: 8, day: 1, questionid: 63, timesasked: 1601,timescorrect: 482, timescorrectwithhint: 625, timesincorrect: 318, timesincorrectwithhint: 176},
{year: 2024, month: 8, day: 1, questionid: 64, timesasked: 1027,timescorrect: 302, timescorrectwithhint: 397, timesincorrect: 211, timesincorrectwithhint: 117},
{year: 2024, month: 8, day: 1, questionid: 65, timesasked: 1996,timescorrect: 301, timescorrectwithhint: 600, timesincorrect: 696, timesincorrectwithhint: 399},
{year: 2024, month: 8, day: 1, questionid: 66, timesasked: 1434,timescorrect: 353, timescorrectwithhint: 513, timesincorrect: 363, timesincorrectwithhint: 205},
{year: 2024, month: 8, day: 1, questionid: 67, timesasked: 1167,timescorrect: 295, timescorrectwithhint: 422, timesincorrect: 287, timesincorrectwithhint: 163},
{year: 2024, month: 8, day: 1, questionid: 68, timesasked: 1414,timescorrect: 225, timescorrectwithhint: 432, timesincorrect: 481, timesincorrectwithhint: 276},
{year: 2024, month: 8, day: 1, questionid: 69, timesasked: 1250,timescorrect: 390, timescorrectwithhint: 496, timesincorrect: 234, timesincorrectwithhint: 130},
{year: 2024, month: 8, day: 1, questionid: 70, timesasked: 1706,timescorrect: 588, timescorrectwithhint: 711, timesincorrect: 264, timesincorrectwithhint: 143},
{year: 2024, month: 8, day: 1, questionid: 71, timesasked: 1572,timescorrect: 317, timescorrectwithhint: 520, timesincorrect: 468, timesincorrectwithhint: 267},
{year: 2024, month: 8, day: 1, questionid: 72, timesasked: 1178,timescorrect: 420, timescorrectwithhint: 499, timesincorrect: 168, timesincorrectwithhint: 91},
{year: 2024, month: 8, day: 1, questionid: 73, timesasked: 1155,timescorrect: 295, timescorrectwithhint: 419, timesincorrect: 282, timesincorrectwithhint: 159},
{year: 2024, month: 8, day: 1, questionid: 74, timesasked: 1862,timescorrect: 710, timescorrectwithhint: 817, timesincorrect: 220, timesincorrectwithhint: 115},
{year: 2024, month: 8, day: 1, questionid: 75, timesasked: 1429,timescorrect: 478, timescorrectwithhint: 587, timesincorrect: 236, timesincorrectwithhint: 128},
{year: 2024, month: 8, day: 1, questionid: 76, timesasked: 1368,timescorrect: 379, timescorrectwithhint: 514, timesincorrect: 304, timesincorrectwithhint: 171},
{year: 2024, month: 8, day: 1, questionid: 77, timesasked: 1251,timescorrect: 440, timescorrectwithhint: 527, timesincorrect: 184, timesincorrectwithhint: 100},
{year: 2024, month: 8, day: 1, questionid: 78, timesasked: 1811,timescorrect: 286, timescorrectwithhint: 551, timesincorrect: 619, timesincorrectwithhint: 355},
{year: 2024, month: 8, day: 1, questionid: 79, timesasked: 1315,timescorrect: 294, timescorrectwithhint: 452, timesincorrect: 362, timesincorrectwithhint: 207},
{year: 2024, month: 8, day: 1, questionid: 80, timesasked: 1652,timescorrect: 650, timescorrectwithhint: 737, timesincorrect: 175, timesincorrectwithhint: 90},
{year: 2024, month: 8, day: 1, questionid: 81, timesasked: 1448,timescorrect: 464, timescorrectwithhint: 582, timesincorrect: 259, timesincorrectwithhint: 143},
{year: 2024, month: 8, day: 1, questionid: 82, timesasked: 1212,timescorrect: 410, timescorrectwithhint: 500, timesincorrect: 195, timesincorrectwithhint: 107},
{year: 2024, month: 8, day: 1, questionid: 83, timesasked: 1786,timescorrect: 434, timescorrectwithhint: 635, timesincorrect: 458, timesincorrectwithhint: 259},
{year: 2024, month: 8, day: 1, questionid: 84, timesasked: 1437,timescorrect: 240, timescorrectwithhint: 446, timesincorrect: 477, timesincorrectwithhint: 274},
{year: 2024, month: 8, day: 1, questionid: 85, timesasked: 1916,timescorrect: 623, timescorrectwithhint: 776, timesincorrect: 334, timesincorrectwithhint: 183},
{year: 2024, month: 8, day: 1, questionid: 86, timesasked: 1693,timescorrect: 500, timescorrectwithhint: 655, timesincorrect: 346, timesincorrectwithhint: 192},
{year: 2024, month: 8, day: 1, questionid: 87, timesasked: 1952,timescorrect: 599, timescorrectwithhint: 769, timesincorrect: 376, timesincorrectwithhint: 208},
{year: 2024, month: 8, day: 1, questionid: 88, timesasked: 1930,timescorrect: 557, timescorrectwithhint: 740, timesincorrect: 407, timesincorrectwithhint: 226},
{year: 2024, month: 8, day: 1, questionid: 89, timesasked: 1300,timescorrect: 496, timescorrectwithhint: 571, timesincorrect: 153, timesincorrectwithhint: 80},
{year: 2024, month: 8, day: 1, questionid: 90, timesasked: 1373,timescorrect: 250, timescorrectwithhint: 438, timesincorrect: 436, timesincorrectwithhint: 249},
{year: 2024, month: 8, day: 1, questionid: 91, timesasked: 1751,timescorrect: 421, timescorrectwithhint: 620, timesincorrect: 454, timesincorrectwithhint: 256},
{year: 2024, month: 8, day: 1, questionid: 92, timesasked: 1724,timescorrect: 618, timescorrectwithhint: 733, timesincorrect: 243, timesincorrectwithhint: 130},
{year: 2024, month: 8, day: 1, questionid: 93, timesasked: 1093,timescorrect: 331, timescorrectwithhint: 428, timesincorrect: 214, timesincorrectwithhint: 120},
{year: 2024, month: 8, day: 1, questionid: 94, timesasked: 1783,timescorrect: 461, timescorrectwithhint: 651, timesincorrect: 430, timesincorrectwithhint: 241},
{year: 2024, month: 8, day: 1, questionid: 95, timesasked: 1608,timescorrect: 632, timescorrectwithhint: 717, timesincorrect: 171, timesincorrectwithhint: 88},
{year: 2024, month: 8, day: 1, questionid: 96, timesasked: 1115,timescorrect: 208, timescorrectwithhint: 359, timesincorrect: 348, timesincorrectwithhint: 200},
{year: 2024, month: 8, day: 1, questionid: 97, timesasked: 1150,timescorrect: 299, timescorrectwithhint: 421, timesincorrect: 275, timesincorrectwithhint: 155},
{year: 2024, month: 8, day: 2, questionid: 1, timesasked: 1041,timescorrect: 275, timescorrectwithhint: 383, timesincorrect: 245, timesincorrectwithhint: 138},
{year: 2024, month: 8, day: 2, questionid: 2, timesasked: 1810,timescorrect: 665, timescorrectwithhint: 779, timesincorrect: 239, timesincorrectwithhint: 127},
{year: 2024, month: 8, day: 2, questionid: 3, timesasked: 1391,timescorrect: 478, timescorrectwithhint: 579, timesincorrect: 217, timesincorrectwithhint: 117},
{year: 2024, month: 8, day: 2, questionid: 4, timesasked: 1895,timescorrect: 375, timescorrectwithhint: 623, timesincorrect: 571, timesincorrectwithhint: 326},
{year: 2024, month: 8, day: 2, questionid: 5, timesasked: 1706,timescorrect: 376, timescorrectwithhint: 584, timesincorrect: 476, timesincorrectwithhint: 270},
{year: 2024, month: 8, day: 2, questionid: 6, timesasked: 1970,timescorrect: 563, timescorrectwithhint: 751, timesincorrect: 421, timesincorrectwithhint: 235},
{year: 2024, month: 8, day: 2, questionid: 7, timesasked: 1278,timescorrect: 387, timescorrectwithhint: 500, timesincorrect: 251, timesincorrectwithhint: 140},
{year: 2024, month: 8, day: 2, questionid: 8, timesasked: 1841,timescorrect: 528, timescorrectwithhint: 703, timesincorrect: 392, timesincorrectwithhint: 218},
{year: 2024, month: 8, day: 2, questionid: 9, timesasked: 1477,timescorrect: 364, timescorrectwithhint: 528, timesincorrect: 374, timesincorrectwithhint: 211},
{year: 2024, month: 8, day: 2, questionid: 10, timesasked: 1891,timescorrect: 680, timescorrectwithhint: 805, timesincorrect: 265, timesincorrectwithhint: 141},
{year: 2024, month: 8, day: 2, questionid: 11, timesasked: 1004,timescorrect: 209, timescorrectwithhint: 336, timesincorrect: 292, timesincorrectwithhint: 167},
{year: 2024, month: 8, day: 2, questionid: 12, timesasked: 1031,timescorrect: 298, timescorrectwithhint: 395, timesincorrect: 216, timesincorrectwithhint: 122},
{year: 2024, month: 8, day: 2, questionid: 13, timesasked: 1610,timescorrect: 632, timescorrectwithhint: 717, timesincorrect: 172, timesincorrectwithhint: 89},
{year: 2024, month: 8, day: 2, questionid: 14, timesasked: 1508,timescorrect: 469, timescorrectwithhint: 598, timesincorrect: 284, timesincorrectwithhint: 157},
{year: 2024, month: 8, day: 2, questionid: 15, timesasked: 1175,timescorrect: 295, timescorrectwithhint: 423, timesincorrect: 292, timesincorrectwithhint: 165},
{year: 2024, month: 8, day: 2, questionid: 16, timesasked: 1419,timescorrect: 507, timescorrectwithhint: 602, timesincorrect: 202, timesincorrectwithhint: 108},
{year: 2024, month: 8, day: 2, questionid: 17, timesasked: 1226,timescorrect: 186, timescorrectwithhint: 369, timesincorrect: 426, timesincorrectwithhint: 245},
{year: 2024, month: 8, day: 2, questionid: 18, timesasked: 1842,timescorrect: 415, timescorrectwithhint: 636, timesincorrect: 505, timesincorrectwithhint: 286},
{year: 2024, month: 8, day: 2, questionid: 19, timesasked: 1775,timescorrect: 634, timescorrectwithhint: 753, timesincorrect: 252, timesincorrectwithhint: 136},
{year: 2024, month: 8, day: 2, questionid: 20, timesasked: 1844,timescorrect: 702, timescorrectwithhint: 808, timesincorrect: 219, timesincorrectwithhint: 115},
{year: 2024, month: 8, day: 2, questionid: 21, timesasked: 1532,timescorrect: 271, timescorrectwithhint: 484, timesincorrect: 494, timesincorrectwithhint: 283},
{year: 2024, month: 8, day: 2, questionid: 22, timesasked: 1884,timescorrect: 453, timescorrectwithhint: 667, timesincorrect: 488, timesincorrectwithhint: 276},
{year: 2024, month: 8, day: 2, questionid: 23, timesasked: 1388,timescorrect: 287, timescorrectwithhint: 464, timesincorrect: 406, timesincorrectwithhint: 231},
{year: 2024, month: 8, day: 2, questionid: 24, timesasked: 1368,timescorrect: 258, timescorrectwithhint: 442, timesincorrect: 425, timesincorrectwithhint: 243},
{year: 2024, month: 8, day: 2, questionid: 25, timesasked: 1267,timescorrect: 390, timescorrectwithhint: 500, timesincorrect: 243, timesincorrectwithhint: 134},
{year: 2024, month: 8, day: 2, questionid: 26, timesasked: 1822,timescorrect: 481, timescorrectwithhint: 671, timesincorrect: 429, timesincorrectwithhint: 241},
{year: 2024, month: 8, day: 2, questionid: 27, timesasked: 1855,timescorrect: 731, timescorrectwithhint: 828, timesincorrect: 196, timesincorrectwithhint: 100},
{year: 2024, month: 8, day: 2, questionid: 28, timesasked: 1151,timescorrect: 359, timescorrectwithhint: 457, timesincorrect: 216, timesincorrectwithhint: 119},
{year: 2024, month: 8, day: 2, questionid: 29, timesasked: 1269,timescorrect: 227, timescorrectwithhint: 402, timesincorrect: 407, timesincorrectwithhint: 233},
{year: 2024, month: 8, day: 2, questionid: 30, timesasked: 1184,timescorrect: 325, timescorrectwithhint: 444, timesincorrect: 266, timesincorrectwithhint: 149},
{year: 2024, month: 8, day: 2, questionid: 31, timesasked: 1941,timescorrect: 767, timescorrectwithhint: 868, timesincorrect: 203, timesincorrectwithhint: 103},
{year: 2024, month: 8, day: 2, questionid: 32, timesasked: 1243,timescorrect: 449, timescorrectwithhint: 530, timesincorrect: 172, timesincorrectwithhint: 92},
{year: 2024, month: 8, day: 2, questionid: 33, timesasked: 1685,timescorrect: 455, timescorrectwithhint: 627, timesincorrect: 387, timesincorrectwithhint: 216},
{year: 2024, month: 8, day: 2, questionid: 34, timesasked: 1975,timescorrect: 698, timescorrectwithhint: 834, timesincorrect: 288, timesincorrectwithhint: 155},
{year: 2024, month: 8, day: 2, questionid: 35, timesasked: 1898,timescorrect: 423, timescorrectwithhint: 652, timesincorrect: 525, timesincorrectwithhint: 298},
{year: 2024, month: 8, day: 2, questionid: 36, timesasked: 1596,timescorrect: 338, timescorrectwithhint: 538, timesincorrect: 459, timesincorrectwithhint: 261},
{year: 2024, month: 8, day: 2, questionid: 37, timesasked: 1161,timescorrect: 427, timescorrectwithhint: 500, timesincorrect: 153, timesincorrectwithhint: 81},
{year: 2024, month: 8, day: 2, questionid: 38, timesasked: 1927,timescorrect: 494, timescorrectwithhint: 701, timesincorrect: 468, timesincorrectwithhint: 264},
{year: 2024, month: 8, day: 2, questionid: 39, timesasked: 1393,timescorrect: 520, timescorrectwithhint: 604, timesincorrect: 175, timesincorrectwithhint: 94},
{year: 2024, month: 8, day: 2, questionid: 40, timesasked: 1549,timescorrect: 566, timescorrectwithhint: 664, timesincorrect: 208, timesincorrectwithhint: 111},
{year: 2024, month: 8, day: 2, questionid: 41, timesasked: 1477,timescorrect: 404, timescorrectwithhint: 552, timesincorrect: 333, timesincorrectwithhint: 188},
{year: 2024, month: 8, day: 2, questionid: 42, timesasked: 1746,timescorrect: 284, timescorrectwithhint: 537, timesincorrect: 588, timesincorrectwithhint: 337},
{year: 2024, month: 8, day: 2, questionid: 43, timesasked: 1073,timescorrect: 258, timescorrectwithhint: 380, timesincorrect: 278, timesincorrectwithhint: 157},
{year: 2024, month: 8, day: 2, questionid: 44, timesasked: 1679,timescorrect: 551, timescorrectwithhint: 683, timesincorrect: 287, timesincorrectwithhint: 158},
{year: 2024, month: 8, day: 2, questionid: 45, timesasked: 1416,timescorrect: 386, timescorrectwithhint: 529, timesincorrect: 321, timesincorrectwithhint: 180},
{year: 2024, month: 8, day: 2, questionid: 46, timesasked: 1166,timescorrect: 334, timescorrectwithhint: 445, timesincorrect: 248, timesincorrectwithhint: 139},
{year: 2024, month: 8, day: 2, questionid: 47, timesasked: 1685,timescorrect: 274, timescorrectwithhint: 518, timesincorrect: 568, timesincorrectwithhint: 325},
{year: 2024, month: 8, day: 2, questionid: 48, timesasked: 1538,timescorrect: 479, timescorrectwithhint: 610, timesincorrect: 289, timesincorrectwithhint: 160},
{year: 2024, month: 8, day: 2, questionid: 49, timesasked: 1546,timescorrect: 558, timescorrectwithhint: 659, timesincorrect: 214, timesincorrectwithhint: 115},
{year: 2024, month: 8, day: 2, questionid: 50, timesasked: 1618,timescorrect: 362, timescorrectwithhint: 557, timesincorrect: 446, timesincorrectwithhint: 253},
{year: 2024, month: 8, day: 2, questionid: 51, timesasked: 1704,timescorrect: 343, timescorrectwithhint: 564, timesincorrect: 508, timesincorrectwithhint: 289},
{year: 2024, month: 8, day: 2, questionid: 52, timesasked: 1214,timescorrect: 349, timescorrectwithhint: 464, timesincorrect: 257, timesincorrectwithhint: 144},
{year: 2024, month: 8, day: 2, questionid: 53, timesasked: 1197,timescorrect: 307, timescorrectwithhint: 435, timesincorrect: 290, timesincorrectwithhint: 165},
{year: 2024, month: 8, day: 2, questionid: 54, timesasked: 1809,timescorrect: 515, timescorrectwithhint: 689, timesincorrect: 389, timesincorrectwithhint: 216},
{year: 2024, month: 8, day: 2, questionid: 55, timesasked: 1336,timescorrect: 410, timescorrectwithhint: 526, timesincorrect: 257, timesincorrectwithhint: 143},
{year: 2024, month: 8, day: 2, questionid: 56, timesasked: 1996,timescorrect: 331, timescorrectwithhint: 618, timesincorrect: 666, timesincorrectwithhint: 381},
{year: 2024, month: 8, day: 2, questionid: 57, timesasked: 1681,timescorrect: 430, timescorrectwithhint: 611, timesincorrect: 410, timesincorrectwithhint: 230},
{year: 2024, month: 8, day: 2, questionid: 58, timesasked: 1022,timescorrect: 292, timescorrectwithhint: 390, timesincorrect: 218, timesincorrectwithhint: 122},
{year: 2024, month: 8, day: 2, questionid: 59, timesasked: 1544,timescorrect: 591, timescorrectwithhint: 679, timesincorrect: 180, timesincorrectwithhint: 94},
{year: 2024, month: 8, day: 2, questionid: 60, timesasked: 1358,timescorrect: 386, timescorrectwithhint: 516, timesincorrect: 292, timesincorrectwithhint: 164},
{year: 2024, month: 8, day: 2, questionid: 61, timesasked: 1236,timescorrect: 459, timescorrectwithhint: 535, timesincorrect: 158, timesincorrectwithhint: 84},
{year: 2024, month: 8, day: 2, questionid: 62, timesasked: 1532,timescorrect: 376, timescorrectwithhint: 547, timesincorrect: 389, timesincorrectwithhint: 220},
{year: 2024, month: 8, day: 2, questionid: 63, timesasked: 1026,timescorrect: 389, timescorrectwithhint: 449, timesincorrect: 123, timesincorrectwithhint: 65},
{year: 2024, month: 8, day: 2, questionid: 64, timesasked: 1877,timescorrect: 424, timescorrectwithhint: 648, timesincorrect: 514, timesincorrectwithhint: 291},
{year: 2024, month: 8, day: 2, questionid: 65, timesasked: 1455,timescorrect: 425, timescorrectwithhint: 560, timesincorrect: 302, timesincorrectwithhint: 168},
{year: 2024, month: 8, day: 2, questionid: 66, timesasked: 1210,timescorrect: 232, timescorrectwithhint: 393, timesincorrect: 372, timesincorrectwithhint: 213},
{year: 2024, month: 8, day: 2, questionid: 67, timesasked: 1121,timescorrect: 290, timescorrectwithhint: 409, timesincorrect: 270, timesincorrectwithhint: 152},
{year: 2024, month: 8, day: 2, questionid: 68, timesasked: 1791,timescorrect: 707, timescorrectwithhint: 800, timesincorrect: 187, timesincorrectwithhint: 97},
{year: 2024, month: 8, day: 2, questionid: 69, timesasked: 1516,timescorrect: 241, timescorrectwithhint: 463, timesincorrect: 516, timesincorrectwithhint: 296},
{year: 2024, month: 8, day: 2, questionid: 70, timesasked: 1417,timescorrect: 483, timescorrectwithhint: 587, timesincorrect: 225, timesincorrectwithhint: 122},
{year: 2024, month: 8, day: 2, questionid: 71, timesasked: 1320,timescorrect: 246, timescorrectwithhint: 424, timesincorrect: 413, timesincorrectwithhint: 237},
{year: 2024, month: 8, day: 2, questionid: 72, timesasked: 1865,timescorrect: 338, timescorrectwithhint: 594, timesincorrect: 594, timesincorrectwithhint: 339},
{year: 2024, month: 8, day: 2, questionid: 73, timesasked: 1259,timescorrect: 412, timescorrectwithhint: 511, timesincorrect: 217, timesincorrectwithhint: 119},
{year: 2024, month: 8, day: 2, questionid: 74, timesasked: 1630,timescorrect: 257, timescorrectwithhint: 496, timesincorrect: 557, timesincorrectwithhint: 320},
{year: 2024, month: 8, day: 2, questionid: 75, timesasked: 1450,timescorrect: 316, timescorrectwithhint: 494, timesincorrect: 408, timesincorrectwithhint: 232},
{year: 2024, month: 8, day: 2, questionid: 76, timesasked: 1342,timescorrect: 310, timescorrectwithhint: 467, timesincorrect: 360, timesincorrectwithhint: 205},
{year: 2024, month: 8, day: 2, questionid: 77, timesasked: 1026,timescorrect: 172, timescorrectwithhint: 319, timesincorrect: 340, timesincorrectwithhint: 195},
{year: 2024, month: 8, day: 2, questionid: 78, timesasked: 1601,timescorrect: 510, timescorrectwithhint: 642, timesincorrect: 289, timesincorrectwithhint: 160},
{year: 2024, month: 8, day: 2, questionid: 79, timesasked: 1236,timescorrect: 240, timescorrectwithhint: 404, timesincorrect: 377, timesincorrectwithhint: 215},
{year: 2024, month: 8, day: 2, questionid: 80, timesasked: 1891,timescorrect: 531, timescorrectwithhint: 716, timesincorrect: 413, timesincorrectwithhint: 231},
{year: 2024, month: 8, day: 2, questionid: 81, timesasked: 1627,timescorrect: 534, timescorrectwithhint: 662, timesincorrect: 278, timesincorrectwithhint: 153},
{year: 2024, month: 8, day: 2, questionid: 82, timesasked: 1196,timescorrect: 359, timescorrectwithhint: 467, timesincorrect: 238, timesincorrectwithhint: 132},
{year: 2024, month: 8, day: 2, questionid: 83, timesasked: 1143,timescorrect: 243, timescorrectwithhint: 385, timesincorrect: 328, timesincorrectwithhint: 187},
{year: 2024, month: 8, day: 2, questionid: 84, timesasked: 1093,timescorrect: 299, timescorrectwithhint: 409, timesincorrect: 246, timesincorrectwithhint: 139},
{year: 2024, month: 8, day: 2, questionid: 85, timesasked: 1023,timescorrect: 258, timescorrectwithhint: 370, timesincorrect: 252, timesincorrectwithhint: 143},
{year: 2024, month: 8, day: 2, questionid: 86, timesasked: 1108,timescorrect: 345, timescorrectwithhint: 439, timesincorrect: 208, timesincorrectwithhint: 116},
{year: 2024, month: 8, day: 2, questionid: 87, timesasked: 1384,timescorrect: 210, timescorrectwithhint: 416, timesincorrect: 481, timesincorrectwithhint: 277},
{year: 2024, month: 8, day: 2, questionid: 88, timesasked: 1174,timescorrect: 244, timescorrectwithhint: 393, timesincorrect: 342, timesincorrectwithhint: 195},
{year: 2024, month: 8, day: 2, questionid: 89, timesasked: 1149,timescorrect: 184, timescorrectwithhint: 352, timesincorrect: 389, timesincorrectwithhint: 224},
{year: 2024, month: 8, day: 2, questionid: 90, timesasked: 1738,timescorrect: 507, timescorrectwithhint: 669, timesincorrect: 361, timesincorrectwithhint: 201},
{year: 2024, month: 8, day: 2, questionid: 91, timesasked: 1232,timescorrect: 220, timescorrectwithhint: 391, timesincorrect: 395, timesincorrectwithhint: 226},
{year: 2024, month: 8, day: 2, questionid: 92, timesasked: 1909,timescorrect: 628, timescorrectwithhint: 777, timesincorrect: 326, timesincorrectwithhint: 178},
{year: 2024, month: 8, day: 2, questionid: 93, timesasked: 1012,timescorrect: 268, timescorrectwithhint: 373, timesincorrect: 237, timesincorrectwithhint: 134},
{year: 2024, month: 8, day: 2, questionid: 94, timesasked: 1385,timescorrect: 231, timescorrectwithhint: 429, timesincorrect: 461, timesincorrectwithhint: 264},
{year: 2024, month: 8, day: 2, questionid: 95, timesasked: 1750,timescorrect: 665, timescorrectwithhint: 766, timesincorrect: 209, timesincorrectwithhint: 110},
{year: 2024, month: 8, day: 2, questionid: 96, timesasked: 1038,timescorrect: 328, timescorrectwithhint: 414, timesincorrect: 190, timesincorrectwithhint: 106},
{year: 2024, month: 8, day: 2, questionid: 97, timesasked: 1956,timescorrect: 705, timescorrectwithhint: 833, timesincorrect: 272, timesincorrectwithhint: 146},
{year: 2024, month: 8, day: 3, questionid: 1, timesasked: 1463,timescorrect: 221, timescorrectwithhint: 440, timesincorrect: 509, timesincorrectwithhint: 293},
{year: 2024, month: 8, day: 3, questionid: 2, timesasked: 1884,timescorrect: 648, timescorrectwithhint: 784, timesincorrect: 293, timesincorrectwithhint: 159},
{year: 2024, month: 8, day: 3, questionid: 3, timesasked: 1071,timescorrect: 284, timescorrectwithhint: 395, timesincorrect: 251, timesincorrectwithhint: 141},
{year: 2024, month: 8, day: 3, questionid: 4, timesasked: 1344,timescorrect: 444, timescorrectwithhint: 548, timesincorrect: 227, timesincorrectwithhint: 125},
{year: 2024, month: 8, day: 3, questionid: 5, timesasked: 1749,timescorrect: 444, timescorrectwithhint: 633, timesincorrect: 430, timesincorrectwithhint: 242},
{year: 2024, month: 8, day: 3, questionid: 6, timesasked: 1770,timescorrect: 621, timescorrectwithhint: 744, timesincorrect: 263, timesincorrectwithhint: 142},
{year: 2024, month: 8, day: 3, questionid: 7, timesasked: 1541,timescorrect: 592, timescorrectwithhint: 679, timesincorrect: 177, timesincorrectwithhint: 93},
{year: 2024, month: 8, day: 3, questionid: 8, timesasked: 1840,timescorrect: 565, timescorrectwithhint: 725, timesincorrect: 354, timesincorrectwithhint: 196},
{year: 2024, month: 8, day: 3, questionid: 9, timesasked: 1370,timescorrect: 406, timescorrectwithhint: 531, timesincorrect: 278, timesincorrectwithhint: 155},
{year: 2024, month: 8, day: 3, questionid: 10, timesasked: 1297,timescorrect: 457, timescorrectwithhint: 546, timesincorrect: 191, timesincorrectwithhint: 103},
{year: 2024, month: 8, day: 3, questionid: 11, timesasked: 1457,timescorrect: 335, timescorrectwithhint: 507, timesincorrect: 393, timesincorrectwithhint: 222},
{year: 2024, month: 8, day: 3, questionid: 12, timesasked: 1257,timescorrect: 328, timescorrectwithhint: 460, timesincorrect: 300, timesincorrectwithhint: 169},
{year: 2024, month: 8, day: 3, questionid: 13, timesasked: 1821,timescorrect: 685, timescorrectwithhint: 793, timesincorrect: 224, timesincorrectwithhint: 119},
{year: 2024, month: 8, day: 3, questionid: 14, timesasked: 1961,timescorrect: 447, timescorrectwithhint: 680, timesincorrect: 533, timesincorrectwithhint: 301},
{year: 2024, month: 8, day: 3, questionid: 15, timesasked: 1366,timescorrect: 286, timescorrectwithhint: 458, timesincorrect: 396, timesincorrectwithhint: 226},
{year: 2024, month: 8, day: 3, questionid: 16, timesasked: 1196,timescorrect: 203, timescorrectwithhint: 372, timesincorrect: 394, timesincorrectwithhint: 227},
{year: 2024, month: 8, day: 3, questionid: 17, timesasked: 1317,timescorrect: 276, timescorrectwithhint: 442, timesincorrect: 382, timesincorrectwithhint: 217},
{year: 2024, month: 8, day: 3, questionid: 18, timesasked: 1042,timescorrect: 360, timescorrectwithhint: 434, timesincorrect: 160, timesincorrectwithhint: 88},
{year: 2024, month: 8, day: 3, questionid: 19, timesasked: 1398,timescorrect: 309, timescorrectwithhint: 479, timesincorrect: 389, timesincorrectwithhint: 221},
{year: 2024, month: 8, day: 3, questionid: 20, timesasked: 1302,timescorrect: 319, timescorrectwithhint: 465, timesincorrect: 331, timesincorrectwithhint: 187},
{year: 2024, month: 8, day: 3, questionid: 21, timesasked: 1315,timescorrect: 281, timescorrectwithhint: 445, timesincorrect: 375, timesincorrectwithhint: 214},
{year: 2024, month: 8, day: 3, questionid: 22, timesasked: 1737,timescorrect: 616, timescorrectwithhint: 734, timesincorrect: 251, timesincorrectwithhint: 136},
{year: 2024, month: 8, day: 3, questionid: 23, timesasked: 1798,timescorrect: 273, timescorrectwithhint: 541, timesincorrect: 625, timesincorrectwithhint: 359},
{year: 2024, month: 8, day: 3, questionid: 24, timesasked: 1077,timescorrect: 243, timescorrectwithhint: 372, timesincorrect: 295, timesincorrectwithhint: 167},
{year: 2024, month: 8, day: 3, questionid: 25, timesasked: 1789,timescorrect: 449, timescorrectwithhint: 645, timesincorrect: 444, timesincorrectwithhint: 251},
{year: 2024, month: 8, day: 3, questionid: 26, timesasked: 1493,timescorrect: 347, timescorrectwithhint: 522, timesincorrect: 398, timesincorrectwithhint: 226},
{year: 2024, month: 8, day: 3, questionid: 27, timesasked: 1965,timescorrect: 501, timescorrectwithhint: 713, timesincorrect: 481, timesincorrectwithhint: 270},
{year: 2024, month: 8, day: 3, questionid: 28, timesasked: 1943,timescorrect: 403, timescorrectwithhint: 650, timesincorrect: 567, timesincorrectwithhint: 323},
{year: 2024, month: 8, day: 3, questionid: 29, timesasked: 1560,timescorrect: 512, timescorrectwithhint: 634, timesincorrect: 267, timesincorrectwithhint: 147},
{year: 2024, month: 8, day: 3, questionid: 30, timesasked: 1284,timescorrect: 259, timescorrectwithhint: 425, timesincorrect: 382, timesincorrectwithhint: 218},
{year: 2024, month: 8, day: 3, questionid: 31, timesasked: 1651,timescorrect: 654, timescorrectwithhint: 739, timesincorrect: 171, timesincorrectwithhint: 87},
{year: 2024, month: 8, day: 3, questionid: 32, timesasked: 1257,timescorrect: 277, timescorrectwithhint: 430, timesincorrect: 350, timesincorrectwithhint: 200},
{year: 2024, month: 8, day: 3, questionid: 33, timesasked: 1264,timescorrect: 487, timescorrectwithhint: 558, timesincorrect: 144, timesincorrectwithhint: 75},
{year: 2024, month: 8, day: 3, questionid: 34, timesasked: 1251,timescorrect: 288, timescorrectwithhint: 435, timesincorrect: 337, timesincorrectwithhint: 191},
{year: 2024, month: 8, day: 3, questionid: 35, timesasked: 1435,timescorrect: 401, timescorrectwithhint: 542, timesincorrect: 315, timesincorrectwithhint: 177},
{year: 2024, month: 8, day: 3, questionid: 36, timesasked: 1816,timescorrect: 397, timescorrectwithhint: 619, timesincorrect: 510, timesincorrectwithhint: 290},
{year: 2024, month: 8, day: 3, questionid: 37, timesasked: 1707,timescorrect: 363, timescorrectwithhint: 576, timesincorrect: 489, timesincorrectwithhint: 279},
{year: 2024, month: 8, day: 3, questionid: 38, timesasked: 1814,timescorrect: 712, timescorrectwithhint: 808, timesincorrect: 194, timesincorrectwithhint: 100},
{year: 2024, month: 8, day: 3, questionid: 39, timesasked: 1332,timescorrect: 344, timescorrectwithhint: 486, timesincorrect: 321, timesincorrectwithhint: 181},
{year: 2024, month: 8, day: 3, questionid: 40, timesasked: 1713,timescorrect: 572, timescorrectwithhint: 703, timesincorrect: 284, timesincorrectwithhint: 154},
{year: 2024, month: 8, day: 3, questionid: 41, timesasked: 1324,timescorrect: 335, timescorrectwithhint: 479, timesincorrect: 326, timesincorrectwithhint: 184},
{year: 2024, month: 8, day: 3, questionid: 42, timesasked: 1049,timescorrect: 391, timescorrectwithhint: 455, timesincorrect: 132, timesincorrectwithhint: 71},
{year: 2024, month: 8, day: 3, questionid: 43, timesasked: 1509,timescorrect: 462, timescorrectwithhint: 594, timesincorrect: 291, timesincorrectwithhint: 162},
{year: 2024, month: 8, day: 3, questionid: 44, timesasked: 1279,timescorrect: 501, timescorrectwithhint: 569, timesincorrect: 137, timesincorrectwithhint: 72},
{year: 2024, month: 8, day: 3, questionid: 45, timesasked: 1145,timescorrect: 277, timescorrectwithhint: 406, timesincorrect: 295, timesincorrectwithhint: 167},
{year: 2024, month: 8, day: 3, questionid: 46, timesasked: 1817,timescorrect: 380, timescorrectwithhint: 610, timesincorrect: 527, timesincorrectwithhint: 300},
{year: 2024, month: 8, day: 3, questionid: 47, timesasked: 1750,timescorrect: 695, timescorrectwithhint: 784, timesincorrect: 179, timesincorrectwithhint: 92},
{year: 2024, month: 8, day: 3, questionid: 48, timesasked: 1309,timescorrect: 271, timescorrectwithhint: 437, timesincorrect: 382, timesincorrectwithhint: 219},
{year: 2024, month: 8, day: 3, questionid: 49, timesasked: 1615,timescorrect: 540, timescorrectwithhint: 663, timesincorrect: 266, timesincorrectwithhint: 146},
{year: 2024, month: 8, day: 3, questionid: 50, timesasked: 1882,timescorrect: 545, timescorrectwithhint: 722, timesincorrect: 395, timesincorrectwithhint: 220},
{year: 2024, month: 8, day: 3, questionid: 51, timesasked: 1349,timescorrect: 495, timescorrectwithhint: 580, timesincorrect: 179, timesincorrectwithhint: 95},
{year: 2024, month: 8, day: 3, questionid: 52, timesasked: 1486,timescorrect: 297, timescorrectwithhint: 490, timesincorrect: 445, timesincorrectwithhint: 254},
{year: 2024, month: 8, day: 3, questionid: 53, timesasked: 1596,timescorrect: 435, timescorrectwithhint: 596, timesincorrect: 362, timesincorrectwithhint: 203},
{year: 2024, month: 8, day: 3, questionid: 54, timesasked: 1761,timescorrect: 531, timescorrectwithhint: 688, timesincorrect: 349, timesincorrectwithhint: 193},
{year: 2024, month: 8, day: 3, questionid: 55, timesasked: 1295,timescorrect: 210, timescorrectwithhint: 398, timesincorrect: 437, timesincorrectwithhint: 250},
{year: 2024, month: 8, day: 3, questionid: 56, timesasked: 1264,timescorrect: 243, timescorrectwithhint: 411, timesincorrect: 388, timesincorrectwithhint: 222},
{year: 2024, month: 8, day: 3, questionid: 57, timesasked: 1509,timescorrect: 368, timescorrectwithhint: 537, timesincorrect: 386, timesincorrectwithhint: 218},
{year: 2024, month: 8, day: 3, questionid: 58, timesasked: 1330,timescorrect: 431, timescorrectwithhint: 538, timesincorrect: 233, timesincorrectwithhint: 128},
{year: 2024, month: 8, day: 3, questionid: 59, timesasked: 1956,timescorrect: 532, timescorrectwithhint: 729, timesincorrect: 445, timesincorrectwithhint: 250},
{year: 2024, month: 8, day: 3, questionid: 60, timesasked: 1009,timescorrect: 168, timescorrectwithhint: 312, timesincorrect: 336, timesincorrectwithhint: 193},
{year: 2024, month: 8, day: 3, questionid: 61, timesasked: 1709,timescorrect: 270, timescorrectwithhint: 521, timesincorrect: 584, timesincorrectwithhint: 334},
{year: 2024, month: 8, day: 3, questionid: 62, timesasked: 1559,timescorrect: 595, timescorrectwithhint: 684, timesincorrect: 183, timesincorrectwithhint: 97},
{year: 2024, month: 8, day: 3, questionid: 63, timesasked: 1051,timescorrect: 237, timescorrectwithhint: 363, timesincorrect: 288, timesincorrectwithhint: 163},
{year: 2024, month: 8, day: 3, questionid: 64, timesasked: 1154,timescorrect: 224, timescorrectwithhint: 377, timesincorrect: 352, timesincorrectwithhint: 201},
{year: 2024, month: 8, day: 3, questionid: 65, timesasked: 1315,timescorrect: 240, timescorrectwithhint: 420, timesincorrect: 417, timesincorrectwithhint: 238},
{year: 2024, month: 8, day: 3, questionid: 66, timesasked: 1962,timescorrect: 388, timescorrectwithhint: 645, timesincorrect: 592, timesincorrectwithhint: 337},
{year: 2024, month: 8, day: 3, questionid: 67, timesasked: 1462,timescorrect: 562, timescorrectwithhint: 644, timesincorrect: 168, timesincorrectwithhint: 88},
{year: 2024, month: 8, day: 3, questionid: 68, timesasked: 1339,timescorrect: 271, timescorrectwithhint: 443, timesincorrect: 398, timesincorrectwithhint: 227},
{year: 2024, month: 8, day: 3, questionid: 69, timesasked: 1376,timescorrect: 335, timescorrectwithhint: 490, timesincorrect: 352, timesincorrectwithhint: 199},
{year: 2024, month: 8, day: 3, questionid: 70, timesasked: 1987,timescorrect: 322, timescorrectwithhint: 610, timesincorrect: 670, timesincorrectwithhint: 385},
{year: 2024, month: 8, day: 3, questionid: 71, timesasked: 1162,timescorrect: 446, timescorrectwithhint: 511, timesincorrect: 134, timesincorrectwithhint: 71},
{year: 2024, month: 8, day: 3, questionid: 72, timesasked: 1624,timescorrect: 556, timescorrectwithhint: 675, timesincorrect: 255, timesincorrectwithhint: 138},
{year: 2024, month: 8, day: 3, questionid: 73, timesasked: 1127,timescorrect: 293, timescorrectwithhint: 412, timesincorrect: 270, timesincorrectwithhint: 152},
{year: 2024, month: 8, day: 3, questionid: 74, timesasked: 1887,timescorrect: 347, timescorrectwithhint: 604, timesincorrect: 595, timesincorrectwithhint: 341},
{year: 2024, month: 8, day: 3, questionid: 75, timesasked: 1293,timescorrect: 503, timescorrectwithhint: 573, timesincorrect: 142, timesincorrectwithhint: 75},
{year: 2024, month: 8, day: 3, questionid: 76, timesasked: 1911,timescorrect: 751, timescorrectwithhint: 852, timesincorrect: 203, timesincorrectwithhint: 105},
{year: 2024, month: 8, day: 3, questionid: 77, timesasked: 1906,timescorrect: 695, timescorrectwithhint: 817, timesincorrect: 257, timesincorrectwithhint: 137},
{year: 2024, month: 8, day: 3, questionid: 78, timesasked: 1045,timescorrect: 351, timescorrectwithhint: 430, timesincorrect: 170, timesincorrectwithhint: 94},
{year: 2024, month: 8, day: 3, questionid: 79, timesasked: 1675,timescorrect: 456, timescorrectwithhint: 625, timesincorrect: 380, timesincorrectwithhint: 214},
{year: 2024, month: 8, day: 3, questionid: 80, timesasked: 1589,timescorrect: 338, timescorrectwithhint: 536, timesincorrect: 456, timesincorrectwithhint: 259},
{year: 2024, month: 8, day: 3, questionid: 81, timesasked: 1278,timescorrect: 227, timescorrectwithhint: 404, timesincorrect: 411, timesincorrectwithhint: 236},
{year: 2024, month: 8, day: 3, questionid: 82, timesasked: 1616,timescorrect: 617, timescorrectwithhint: 709, timesincorrect: 190, timesincorrectwithhint: 100},
{year: 2024, month: 8, day: 3, questionid: 83, timesasked: 1606,timescorrect: 360, timescorrectwithhint: 553, timesincorrect: 442, timesincorrectwithhint: 251},
{year: 2024, month: 8, day: 3, questionid: 84, timesasked: 1137,timescorrect: 181, timescorrectwithhint: 347, timesincorrect: 387, timesincorrectwithhint: 222},
{year: 2024, month: 8, day: 3, questionid: 85, timesasked: 1121,timescorrect: 418, timescorrectwithhint: 486, timesincorrect: 142, timesincorrectwithhint: 75},
{year: 2024, month: 8, day: 3, questionid: 86, timesasked: 1451,timescorrect: 288, timescorrectwithhint: 478, timesincorrect: 436, timesincorrectwithhint: 249},
{year: 2024, month: 8, day: 3, questionid: 87, timesasked: 1804,timescorrect: 546, timescorrectwithhint: 706, timesincorrect: 355, timesincorrectwithhint: 197},
{year: 2024, month: 8, day: 3, questionid: 88, timesasked: 1242,timescorrect: 218, timescorrectwithhint: 392, timesincorrect: 402, timesincorrectwithhint: 230},
{year: 2024, month: 8, day: 3, questionid: 89, timesasked: 1640,timescorrect: 478, timescorrectwithhint: 631, timesincorrect: 341, timesincorrectwithhint: 190},
{year: 2024, month: 8, day: 3, questionid: 90, timesasked: 1720,timescorrect: 552, timescorrectwithhint: 692, timesincorrect: 307, timesincorrectwithhint: 169},
{year: 2024, month: 8, day: 3, questionid: 91, timesasked: 1760,timescorrect: 277, timescorrectwithhint: 536, timesincorrect: 602, timesincorrectwithhint: 345},
{year: 2024, month: 8, day: 3, questionid: 92, timesasked: 1492,timescorrect: 515, timescorrectwithhint: 622, timesincorrect: 230, timesincorrectwithhint: 125},
{year: 2024, month: 8, day: 3, questionid: 93, timesasked: 1213,timescorrect: 320, timescorrectwithhint: 446, timesincorrect: 286, timesincorrectwithhint: 161},
{year: 2024, month: 8, day: 3, questionid: 94, timesasked: 1785,timescorrect: 633, timescorrectwithhint: 755, timesincorrect: 258, timesincorrectwithhint: 139},
{year: 2024, month: 8, day: 3, questionid: 95, timesasked: 1118,timescorrect: 322, timescorrectwithhint: 428, timesincorrect: 236, timesincorrectwithhint: 132},
{year: 2024, month: 8, day: 3, questionid: 96, timesasked: 1203,timescorrect: 227, timescorrectwithhint: 389, timesincorrect: 374, timesincorrectwithhint: 213},
{year: 2024, month: 8, day: 3, questionid: 97, timesasked: 1989,timescorrect: 591, timescorrectwithhint: 772, timesincorrect: 403, timesincorrectwithhint: 223},
{year: 2024, month: 8, day: 4, questionid: 1, timesasked: 1216,timescorrect: 195, timescorrectwithhint: 372, timesincorrect: 412, timesincorrectwithhint: 237},
{year: 2024, month: 8, day: 4, questionid: 2, timesasked: 1140,timescorrect: 233, timescorrectwithhint: 379, timesincorrect: 336, timesincorrectwithhint: 192},
{year: 2024, month: 8, day: 4, questionid: 3, timesasked: 1883,timescorrect: 531, timescorrectwithhint: 714, timesincorrect: 409, timesincorrectwithhint: 229},
{year: 2024, month: 8, day: 4, questionid: 4, timesasked: 1899,timescorrect: 524, timescorrectwithhint: 713, timesincorrect: 425, timesincorrectwithhint: 237},
{year: 2024, month: 8, day: 4, questionid: 5, timesasked: 1992,timescorrect: 530, timescorrectwithhint: 736, timesincorrect: 465, timesincorrectwithhint: 261},
{year: 2024, month: 8, day: 4, questionid: 6, timesasked: 1521,timescorrect: 368, timescorrectwithhint: 540, timesincorrect: 392, timesincorrectwithhint: 221},
{year: 2024, month: 8, day: 4, questionid: 7, timesasked: 1856,timescorrect: 727, timescorrectwithhint: 826, timesincorrect: 200, timesincorrectwithhint: 103},
{year: 2024, month: 8, day: 4, questionid: 8, timesasked: 1125,timescorrect: 226, timescorrectwithhint: 372, timesincorrect: 335, timesincorrectwithhint: 192},
{year: 2024, month: 8, day: 4, questionid: 9, timesasked: 1560,timescorrect: 472, timescorrectwithhint: 610, timesincorrect: 307, timesincorrectwithhint: 171},
{year: 2024, month: 8, day: 4, questionid: 10, timesasked: 1603,timescorrect: 421, timescorrectwithhint: 589, timesincorrect: 379, timesincorrectwithhint: 214},
{year: 2024, month: 8, day: 4, questionid: 11, timesasked: 1685,timescorrect: 656, timescorrectwithhint: 747, timesincorrect: 186, timesincorrectwithhint: 96},
{year: 2024, month: 8, day: 4, questionid: 12, timesasked: 1794,timescorrect: 682, timescorrectwithhint: 786, timesincorrect: 214, timesincorrectwithhint: 112},
{year: 2024, month: 8, day: 4, questionid: 13, timesasked: 1640,timescorrect: 428, timescorrectwithhint: 601, timesincorrect: 391, timesincorrectwithhint: 220},
{year: 2024, month: 8, day: 4, questionid: 14, timesasked: 1208,timescorrect: 350, timescorrectwithhint: 464, timesincorrect: 253, timesincorrectwithhint: 141},
{year: 2024, month: 8, day: 4, questionid: 15, timesasked: 1503,timescorrect: 399, timescorrectwithhint: 555, timesincorrect: 351, timesincorrectwithhint: 198},
{year: 2024, month: 8, day: 4, questionid: 16, timesasked: 1068,timescorrect: 268, timescorrectwithhint: 385, timesincorrect: 265, timesincorrectwithhint: 150},
{year: 2024, month: 8, day: 4, questionid: 17, timesasked: 1747,timescorrect: 662, timescorrectwithhint: 764, timesincorrect: 211, timesincorrectwithhint: 110},
{year: 2024, month: 8, day: 4, questionid: 18, timesasked: 1167,timescorrect: 413, timescorrectwithhint: 493, timesincorrect: 169, timesincorrectwithhint: 92},
{year: 2024, month: 8, day: 4, questionid: 19, timesasked: 1020,timescorrect: 339, timescorrectwithhint: 417, timesincorrect: 170, timesincorrectwithhint: 94},
{year: 2024, month: 8, day: 4, questionid: 20, timesasked: 1851,timescorrect: 614, timescorrectwithhint: 757, timesincorrect: 311, timesincorrectwithhint: 169},
{year: 2024, month: 8, day: 4, questionid: 21, timesasked: 1498,timescorrect: 340, timescorrectwithhint: 518, timesincorrect: 408, timesincorrectwithhint: 232},
{year: 2024, month: 8, day: 4, questionid: 22, timesasked: 1773,timescorrect: 470, timescorrectwithhint: 654, timesincorrect: 416, timesincorrectwithhint: 233},
{year: 2024, month: 8, day: 4, questionid: 23, timesasked: 1857,timescorrect: 488, timescorrectwithhint: 682, timesincorrect: 440, timesincorrectwithhint: 247},
{year: 2024, month: 8, day: 4, questionid: 24, timesasked: 1267,timescorrect: 278, timescorrectwithhint: 433, timesincorrect: 354, timesincorrectwithhint: 202},
{year: 2024, month: 8, day: 4, questionid: 25, timesasked: 1525,timescorrect: 442, timescorrectwithhint: 585, timesincorrect: 319, timesincorrectwithhint: 179},
{year: 2024, month: 8, day: 4, questionid: 26, timesasked: 1150,timescorrect: 423, timescorrectwithhint: 495, timesincorrect: 151, timesincorrectwithhint: 81},
{year: 2024, month: 8, day: 4, questionid: 27, timesasked: 1949,timescorrect: 437, timescorrectwithhint: 671, timesincorrect: 537, timesincorrectwithhint: 304},
{year: 2024, month: 8, day: 4, questionid: 28, timesasked: 1351,timescorrect: 334, timescorrectwithhint: 484, timesincorrect: 341, timesincorrectwithhint: 192},
{year: 2024, month: 8, day: 4, questionid: 29, timesasked: 1666,timescorrect: 624, timescorrectwithhint: 724, timesincorrect: 208, timesincorrectwithhint: 110},
{year: 2024, month: 8, day: 4, questionid: 30, timesasked: 1062,timescorrect: 373, timescorrectwithhint: 447, timesincorrect: 157, timesincorrectwithhint: 85},
{year: 2024, month: 8, day: 4, questionid: 31, timesasked: 1755,timescorrect: 449, timescorrectwithhint: 638, timesincorrect: 427, timesincorrectwithhint: 241},
{year: 2024, month: 8, day: 4, questionid: 32, timesasked: 1731,timescorrect: 580, timescorrectwithhint: 711, timesincorrect: 285, timesincorrectwithhint: 155},
{year: 2024, month: 8, day: 4, questionid: 33, timesasked: 1058,timescorrect: 296, timescorrectwithhint: 400, timesincorrect: 232, timesincorrectwithhint: 130},
{year: 2024, month: 8, day: 4, questionid: 34, timesasked: 1315,timescorrect: 305, timescorrectwithhint: 459, timesincorrect: 352, timesincorrectwithhint: 199},
{year: 2024, month: 8, day: 4, questionid: 35, timesasked: 1535,timescorrect: 237, timescorrectwithhint: 464, timesincorrect: 529, timesincorrectwithhint: 305},
{year: 2024, month: 8, day: 4, questionid: 36, timesasked: 1840,timescorrect: 321, timescorrectwithhint: 579, timesincorrect: 598, timesincorrectwithhint: 342},
{year: 2024, month: 8, day: 4, questionid: 37, timesasked: 1653,timescorrect: 450, timescorrectwithhint: 617, timesincorrect: 375, timesincorrectwithhint: 211},
{year: 2024, month: 8, day: 4, questionid: 38, timesasked: 1138,timescorrect: 395, timescorrectwithhint: 476, timesincorrect: 173, timesincorrectwithhint: 94},
{year: 2024, month: 8, day: 4, questionid: 39, timesasked: 1516,timescorrect: 244, timescorrectwithhint: 465, timesincorrect: 513, timesincorrectwithhint: 294},
{year: 2024, month: 8, day: 4, questionid: 40, timesasked: 1129,timescorrect: 251, timescorrectwithhint: 387, timesincorrect: 313, timesincorrectwithhint: 178},
{year: 2024, month: 8, day: 4, questionid: 41, timesasked: 1231,timescorrect: 228, timescorrectwithhint: 395, timesincorrect: 386, timesincorrectwithhint: 222},
{year: 2024, month: 8, day: 4, questionid: 42, timesasked: 1114,timescorrect: 411, timescorrectwithhint: 480, timesincorrect: 145, timesincorrectwithhint: 78},
{year: 2024, month: 8, day: 4, questionid: 43, timesasked: 1068,timescorrect: 204, timescorrectwithhint: 346, timesincorrect: 329, timesincorrectwithhint: 189},
{year: 2024, month: 8, day: 4, questionid: 44, timesasked: 1558,timescorrect: 365, timescorrectwithhint: 546, timesincorrect: 413, timesincorrectwithhint: 234},
{year: 2024, month: 8, day: 4, questionid: 45, timesasked: 1039,timescorrect: 184, timescorrectwithhint: 328, timesincorrect: 335, timesincorrectwithhint: 192},
{year: 2024, month: 8, day: 4, questionid: 46, timesasked: 1003,timescorrect: 156, timescorrectwithhint: 304, timesincorrect: 344, timesincorrectwithhint: 199},
{year: 2024, month: 8, day: 4, questionid: 47, timesasked: 1216,timescorrect: 442, timescorrectwithhint: 520, timesincorrect: 165, timesincorrectwithhint: 89},
{year: 2024, month: 8, day: 4, questionid: 48, timesasked: 1630,timescorrect: 611, timescorrectwithhint: 709, timesincorrect: 203, timesincorrectwithhint: 107},
{year: 2024, month: 8, day: 4, questionid: 49, timesasked: 1738,timescorrect: 303, timescorrectwithhint: 546, timesincorrect: 565, timesincorrectwithhint: 324},
{year: 2024, month: 8, day: 4, questionid: 50, timesasked: 1408,timescorrect: 324, timescorrectwithhint: 490, timesincorrect: 379, timesincorrectwithhint: 215},
{year: 2024, month: 8, day: 4, questionid: 51, timesasked: 1110,timescorrect: 409, timescorrectwithhint: 478, timesincorrect: 145, timesincorrectwithhint: 78},
{year: 2024, month: 8, day: 4, questionid: 52, timesasked: 1078,timescorrect: 254, timescorrectwithhint: 378, timesincorrect: 284, timesincorrectwithhint: 162},
{year: 2024, month: 8, day: 4, questionid: 53, timesasked: 1351,timescorrect: 399, timescorrectwithhint: 523, timesincorrect: 275, timesincorrectwithhint: 154},
{year: 2024, month: 8, day: 4, questionid: 54, timesasked: 1928,timescorrect: 461, timescorrectwithhint: 681, timesincorrect: 502, timesincorrectwithhint: 284},
{year: 2024, month: 8, day: 4, questionid: 55, timesasked: 1986,timescorrect: 366, timescorrectwithhint: 636, timesincorrect: 626, timesincorrectwithhint: 358},
{year: 2024, month: 8, day: 4, questionid: 56, timesasked: 1753,timescorrect: 638, timescorrectwithhint: 750, timesincorrect: 238, timesincorrectwithhint: 127},
{year: 2024, month: 8, day: 4, questionid: 57, timesasked: 1782,timescorrect: 617, timescorrectwithhint: 744, timesincorrect: 273, timesincorrectwithhint: 148},
{year: 2024, month: 8, day: 4, questionid: 58, timesasked: 1372,timescorrect: 247, timescorrectwithhint: 436, timesincorrect: 438, timesincorrectwithhint: 251},
{year: 2024, month: 8, day: 4, questionid: 59, timesasked: 1044,timescorrect: 253, timescorrectwithhint: 371, timesincorrect: 268, timesincorrectwithhint: 152},
{year: 2024, month: 8, day: 4, questionid: 60, timesasked: 1570,timescorrect: 553, timescorrectwithhint: 661, timesincorrect: 231, timesincorrectwithhint: 125},
{year: 2024, month: 8, day: 4, questionid: 61, timesasked: 1848,timescorrect: 400, timescorrectwithhint: 628, timesincorrect: 523, timesincorrectwithhint: 297},
{year: 2024, month: 8, day: 4, questionid: 62, timesasked: 1585,timescorrect: 524, timescorrectwithhint: 647, timesincorrect: 267, timesincorrectwithhint: 147},
{year: 2024, month: 8, day: 4, questionid: 63, timesasked: 1317,timescorrect: 348, timescorrectwithhint: 485, timesincorrect: 309, timesincorrectwithhint: 175},
{year: 2024, month: 8, day: 4, questionid: 64, timesasked: 1773,timescorrect: 440, timescorrectwithhint: 636, timesincorrect: 445, timesincorrectwithhint: 252},
{year: 2024, month: 8, day: 4, questionid: 65, timesasked: 1162,timescorrect: 247, timescorrectwithhint: 392, timesincorrect: 333, timesincorrectwithhint: 190},
{year: 2024, month: 8, day: 4, questionid: 66, timesasked: 1868,timescorrect: 368, timescorrectwithhint: 613, timesincorrect: 565, timesincorrectwithhint: 322},
{year: 2024, month: 8, day: 4, questionid: 67, timesasked: 1140,timescorrect: 327, timescorrectwithhint: 436, timesincorrect: 242, timesincorrectwithhint: 135},
{year: 2024, month: 8, day: 4, questionid: 68, timesasked: 1238,timescorrect: 400, timescorrectwithhint: 500, timesincorrect: 218, timesincorrectwithhint: 120},
{year: 2024, month: 8, day: 4, questionid: 69, timesasked: 1928,timescorrect: 633, timescorrectwithhint: 784, timesincorrect: 330, timesincorrectwithhint: 181},
{year: 2024, month: 8, day: 4, questionid: 70, timesasked: 1136,timescorrect: 200, timescorrectwithhint: 358, timesincorrect: 367, timesincorrectwithhint: 211},
{year: 2024, month: 8, day: 4, questionid: 71, timesasked: 1588,timescorrect: 505, timescorrectwithhint: 636, timesincorrect: 288, timesincorrectwithhint: 159},
{year: 2024, month: 8, day: 4, questionid: 72, timesasked: 1407,timescorrect: 404, timescorrectwithhint: 538, timesincorrect: 298, timesincorrectwithhint: 167},
{year: 2024, month: 8, day: 4, questionid: 73, timesasked: 1011,timescorrect: 388, timescorrectwithhint: 445, timesincorrect: 116, timesincorrectwithhint: 62},
{year: 2024, month: 8, day: 4, questionid: 74, timesasked: 1814,timescorrect: 407, timescorrectwithhint: 625, timesincorrect: 499, timesincorrectwithhint: 283},
{year: 2024, month: 8, day: 4, questionid: 75, timesasked: 1608,timescorrect: 251, timescorrectwithhint: 488, timesincorrect: 552, timesincorrectwithhint: 317},
{year: 2024, month: 8, day: 4, questionid: 76, timesasked: 1330,timescorrect: 214, timescorrectwithhint: 408, timesincorrect: 450, timesincorrectwithhint: 258},
{year: 2024, month: 8, day: 4, questionid: 77, timesasked: 1325,timescorrect: 523, timescorrectwithhint: 592, timesincorrect: 138, timesincorrectwithhint: 72},
{year: 2024, month: 8, day: 4, questionid: 78, timesasked: 1547,timescorrect: 284, timescorrectwithhint: 495, timesincorrect: 489, timesincorrectwithhint: 279},
{year: 2024, month: 8, day: 4, questionid: 79, timesasked: 1879,timescorrect: 709, timescorrectwithhint: 820, timesincorrect: 229, timesincorrectwithhint: 121},
{year: 2024, month: 8, day: 4, questionid: 80, timesasked: 1230,timescorrect: 313, timescorrectwithhint: 446, timesincorrect: 301, timesincorrectwithhint: 170},
{year: 2024, month: 8, day: 4, questionid: 81, timesasked: 1875,timescorrect: 329, timescorrectwithhint: 591, timesincorrect: 607, timesincorrectwithhint: 348},
{year: 2024, month: 8, day: 4, questionid: 82, timesasked: 1310,timescorrect: 341, timescorrectwithhint: 480, timesincorrect: 313, timesincorrectwithhint: 176},
{year: 2024, month: 8, day: 4, questionid: 83, timesasked: 1767,timescorrect: 515, timescorrectwithhint: 680, timesincorrect: 367, timesincorrectwithhint: 205},
{year: 2024, month: 8, day: 4, questionid: 84, timesasked: 1929,timescorrect: 467, timescorrectwithhint: 685, timesincorrect: 497, timesincorrectwithhint: 280},
{year: 2024, month: 8, day: 4, questionid: 85, timesasked: 1719,timescorrect: 591, timescorrectwithhint: 716, timesincorrect: 267, timesincorrectwithhint: 145},
{year: 2024, month: 8, day: 4, questionid: 86, timesasked: 1882,timescorrect: 413, timescorrectwithhint: 643, timesincorrect: 527, timesincorrectwithhint: 299},
{year: 2024, month: 8, day: 4, questionid: 87, timesasked: 1706,timescorrect: 649, timescorrectwithhint: 747, timesincorrect: 203, timesincorrectwithhint: 107},
{year: 2024, month: 8, day: 4, questionid: 88, timesasked: 1093,timescorrect: 351, timescorrectwithhint: 440, timesincorrect: 195, timesincorrectwithhint: 107},
{year: 2024, month: 8, day: 4, questionid: 89, timesasked: 1565,timescorrect: 398, timescorrectwithhint: 567, timesincorrect: 383, timesincorrectwithhint: 217},
{year: 2024, month: 8, day: 4, questionid: 90, timesasked: 1051,timescorrect: 226, timescorrectwithhint: 356, timesincorrect: 299, timesincorrectwithhint: 170},
{year: 2024, month: 8, day: 4, questionid: 91, timesasked: 1095,timescorrect: 294, timescorrectwithhint: 406, timesincorrect: 252, timesincorrectwithhint: 143},
{year: 2024, month: 8, day: 4, questionid: 92, timesasked: 1363,timescorrect: 527, timescorrectwithhint: 602, timesincorrect: 153, timesincorrectwithhint: 81},
{year: 2024, month: 8, day: 4, questionid: 93, timesasked: 1474,timescorrect: 285, timescorrectwithhint: 480, timesincorrect: 451, timesincorrectwithhint: 258},
{year: 2024, month: 8, day: 4, questionid: 94, timesasked: 1046,timescorrect: 222, timescorrectwithhint: 353, timesincorrect: 300, timesincorrectwithhint: 171},
{year: 2024, month: 8, day: 4, questionid: 95, timesasked: 1675,timescorrect: 643, timescorrectwithhint: 737, timesincorrect: 194, timesincorrectwithhint: 101},
{year: 2024, month: 8, day: 4, questionid: 96, timesasked: 1253,timescorrect: 193, timescorrectwithhint: 378, timesincorrect: 433, timesincorrectwithhint: 249},
{year: 2024, month: 8, day: 4, questionid: 97, timesasked: 1338,timescorrect: 468, timescorrectwithhint: 561, timesincorrect: 200, timesincorrectwithhint: 109},
{year: 2024, month: 8, day: 5, questionid: 1, timesasked: 1365,timescorrect: 530, timescorrectwithhint: 604, timesincorrect: 152, timesincorrectwithhint: 79},
{year: 2024, month: 8, day: 5, questionid: 2, timesasked: 1697,timescorrect: 417, timescorrectwithhint: 607, timesincorrect: 430, timesincorrectwithhint: 243},
{year: 2024, month: 8, day: 5, questionid: 3, timesasked: 1361,timescorrect: 253, timescorrectwithhint: 437, timesincorrect: 427, timesincorrectwithhint: 244},
{year: 2024, month: 8, day: 5, questionid: 4, timesasked: 1385,timescorrect: 281, timescorrectwithhint: 459, timesincorrect: 411, timesincorrectwithhint: 234},
{year: 2024, month: 8, day: 5, questionid: 5, timesasked: 1458,timescorrect: 364, timescorrectwithhint: 525, timesincorrect: 364, timesincorrectwithhint: 205},
{year: 2024, month: 8, day: 5, questionid: 6, timesasked: 1187,timescorrect: 346, timescorrectwithhint: 457, timesincorrect: 247, timesincorrectwithhint: 137},
{year: 2024, month: 8, day: 5, questionid: 7, timesasked: 1053,timescorrect: 320, timescorrectwithhint: 413, timesincorrect: 206, timesincorrectwithhint: 114},
{year: 2024, month: 8, day: 5, questionid: 8, timesasked: 1043,timescorrect: 204, timescorrectwithhint: 341, timesincorrect: 317, timesincorrectwithhint: 181},
{year: 2024, month: 8, day: 5, questionid: 9, timesasked: 1496,timescorrect: 303, timescorrectwithhint: 496, timesincorrect: 444, timesincorrectwithhint: 253},
{year: 2024, month: 8, day: 5, questionid: 10, timesasked: 1987,timescorrect: 300, timescorrectwithhint: 597, timesincorrect: 693, timesincorrectwithhint: 397},
{year: 2024, month: 8, day: 5, questionid: 11, timesasked: 1125,timescorrect: 235, timescorrectwithhint: 377, timesincorrect: 326, timesincorrectwithhint: 187},
{year: 2024, month: 8, day: 5, questionid: 12, timesasked: 1441,timescorrect: 221, timescorrectwithhint: 435, timesincorrect: 499, timesincorrectwithhint: 286},
{year: 2024, month: 8, day: 5, questionid: 13, timesasked: 1420,timescorrect: 357, timescorrectwithhint: 512, timesincorrect: 352, timesincorrectwithhint: 199},
{year: 2024, month: 8, day: 5, questionid: 14, timesasked: 1026,timescorrect: 329, timescorrectwithhint: 413, timesincorrect: 183, timesincorrectwithhint: 101},
{year: 2024, month: 8, day: 5, questionid: 15, timesasked: 1425,timescorrect: 521, timescorrectwithhint: 612, timesincorrect: 191, timesincorrectwithhint: 101},
{year: 2024, month: 8, day: 5, questionid: 16, timesasked: 1701,timescorrect: 538, timescorrectwithhint: 680, timesincorrect: 311, timesincorrectwithhint: 172},
{year: 2024, month: 8, day: 5, questionid: 17, timesasked: 1156,timescorrect: 280, timescorrectwithhint: 411, timesincorrect: 297, timesincorrectwithhint: 168},
{year: 2024, month: 8, day: 5, questionid: 18, timesasked: 1355,timescorrect: 339, timescorrectwithhint: 488, timesincorrect: 337, timesincorrectwithhint: 191},
{year: 2024, month: 8, day: 5, questionid: 19, timesasked: 1514,timescorrect: 581, timescorrectwithhint: 666, timesincorrect: 175, timesincorrectwithhint: 92},
{year: 2024, month: 8, day: 5, questionid: 20, timesasked: 1513,timescorrect: 504, timescorrectwithhint: 620, timesincorrect: 252, timesincorrectwithhint: 137},
{year: 2024, month: 8, day: 5, questionid: 21, timesasked: 1005,timescorrect: 342, timescorrectwithhint: 416, timesincorrect: 160, timesincorrectwithhint: 87},
{year: 2024, month: 8, day: 5, questionid: 22, timesasked: 1918,timescorrect: 460, timescorrectwithhint: 678, timesincorrect: 498, timesincorrectwithhint: 282},
{year: 2024, month: 8, day: 5, questionid: 23, timesasked: 1314,timescorrect: 392, timescorrectwithhint: 511, timesincorrect: 264, timesincorrectwithhint: 147},
{year: 2024, month: 8, day: 5, questionid: 24, timesasked: 1537,timescorrect: 469, timescorrectwithhint: 604, timesincorrect: 298, timesincorrectwithhint: 166},
{year: 2024, month: 8, day: 5, questionid: 25, timesasked: 1109,timescorrect: 405, timescorrectwithhint: 475, timesincorrect: 149, timesincorrectwithhint: 80},
{year: 2024, month: 8, day: 5, questionid: 26, timesasked: 1269,timescorrect: 448, timescorrectwithhint: 535, timesincorrect: 186, timesincorrectwithhint: 100},
{year: 2024, month: 8, day: 5, questionid: 27, timesasked: 1172,timescorrect: 337, timescorrectwithhint: 448, timesincorrect: 248, timesincorrectwithhint: 139},
{year: 2024, month: 8, day: 5, questionid: 28, timesasked: 1510,timescorrect: 370, timescorrectwithhint: 539, timesincorrect: 384, timesincorrectwithhint: 217},
{year: 2024, month: 8, day: 5, questionid: 29, timesasked: 1208,timescorrect: 434, timescorrectwithhint: 514, timesincorrect: 169, timesincorrectwithhint: 91},
{year: 2024, month: 8, day: 5, questionid: 30, timesasked: 1725,timescorrect: 323, timescorrectwithhint: 556, timesincorrect: 539, timesincorrectwithhint: 307},
{year: 2024, month: 8, day: 5, questionid: 31, timesasked: 1374,timescorrect: 419, timescorrectwithhint: 540, timesincorrect: 267, timesincorrectwithhint: 148},
{year: 2024, month: 8, day: 5, questionid: 32, timesasked: 1033,timescorrect: 322, timescorrectwithhint: 410, timesincorrect: 193, timesincorrectwithhint: 108},
{year: 2024, month: 8, day: 5, questionid: 33, timesasked: 1107,timescorrect: 258, timescorrectwithhint: 387, timesincorrect: 294, timesincorrectwithhint: 168},
{year: 2024, month: 8, day: 5, questionid: 34, timesasked: 1667,timescorrect: 369, timescorrectwithhint: 572, timesincorrect: 463, timesincorrectwithhint: 263},
{year: 2024, month: 8, day: 5, questionid: 35, timesasked: 1631,timescorrect: 315, timescorrectwithhint: 531, timesincorrect: 500, timesincorrectwithhint: 285},
{year: 2024, month: 8, day: 5, questionid: 36, timesasked: 1013,timescorrect: 344, timescorrectwithhint: 419, timesincorrect: 161, timesincorrectwithhint: 89},
{year: 2024, month: 8, day: 5, questionid: 37, timesasked: 1470,timescorrect: 394, timescorrectwithhint: 545, timesincorrect: 340, timesincorrectwithhint: 191},
{year: 2024, month: 8, day: 5, questionid: 38, timesasked: 1065,timescorrect: 279, timescorrectwithhint: 391, timesincorrect: 252, timesincorrectwithhint: 143},
{year: 2024, month: 8, day: 5, questionid: 39, timesasked: 1948,timescorrect: 325, timescorrectwithhint: 604, timesincorrect: 648, timesincorrectwithhint: 371},
{year: 2024, month: 8, day: 5, questionid: 40, timesasked: 1701,timescorrect: 606, timescorrectwithhint: 721, timesincorrect: 243, timesincorrectwithhint: 131},
{year: 2024, month: 8, day: 5, questionid: 41, timesasked: 1497,timescorrect: 228, timescorrectwithhint: 451, timesincorrect: 520, timesincorrectwithhint: 298},
{year: 2024, month: 8, day: 5, questionid: 42, timesasked: 1098,timescorrect: 368, timescorrectwithhint: 451, timesincorrect: 180, timesincorrectwithhint: 99},
{year: 2024, month: 8, day: 5, questionid: 43, timesasked: 1169,timescorrect: 209, timescorrectwithhint: 371, timesincorrect: 375, timesincorrectwithhint: 214},
{year: 2024, month: 8, day: 5, questionid: 44, timesasked: 1128,timescorrect: 386, timescorrectwithhint: 468, timesincorrect: 177, timesincorrectwithhint: 97},
{year: 2024, month: 8, day: 5, questionid: 45, timesasked: 1751,timescorrect: 492, timescorrectwithhint: 662, timesincorrect: 383, timesincorrectwithhint: 214},
{year: 2024, month: 8, day: 5, questionid: 46, timesasked: 1838,timescorrect: 372, timescorrectwithhint: 609, timesincorrect: 546, timesincorrectwithhint: 311},
{year: 2024, month: 8, day: 5, questionid: 47, timesasked: 1502,timescorrect: 567, timescorrectwithhint: 655, timesincorrect: 183, timesincorrectwithhint: 97},
{year: 2024, month: 8, day: 5, questionid: 48, timesasked: 1101,timescorrect: 366, timescorrectwithhint: 450, timesincorrect: 184, timesincorrectwithhint: 101},
{year: 2024, month: 8, day: 5, questionid: 49, timesasked: 1174,timescorrect: 306, timescorrectwithhint: 430, timesincorrect: 280, timesincorrectwithhint: 158},
{year: 2024, month: 8, day: 5, questionid: 50, timesasked: 1796,timescorrect: 693, timescorrectwithhint: 793, timesincorrect: 204, timesincorrectwithhint: 106},
{year: 2024, month: 8, day: 5, questionid: 51, timesasked: 1361,timescorrect: 362, timescorrectwithhint: 503, timesincorrect: 317, timesincorrectwithhint: 179},
{year: 2024, month: 8, day: 5, questionid: 52, timesasked: 1776,timescorrect: 454, timescorrectwithhint: 645, timesincorrect: 433, timesincorrectwithhint: 244},
{year: 2024, month: 8, day: 5, questionid: 53, timesasked: 1186,timescorrect: 465, timescorrectwithhint: 528, timesincorrect: 127, timesincorrectwithhint: 66},
{year: 2024, month: 8, day: 5, questionid: 54, timesasked: 1687,timescorrect: 366, timescorrectwithhint: 574, timesincorrect: 476, timesincorrectwithhint: 271},
{year: 2024, month: 8, day: 5, questionid: 55, timesasked: 1212,timescorrect: 450, timescorrectwithhint: 524, timesincorrect: 155, timesincorrectwithhint: 83},
{year: 2024, month: 8, day: 5, questionid: 56, timesasked: 1183,timescorrect: 429, timescorrectwithhint: 505, timesincorrect: 162, timesincorrectwithhint: 87},
{year: 2024, month: 8, day: 5, questionid: 57, timesasked: 1569,timescorrect: 533, timescorrectwithhint: 649, timesincorrect: 251, timesincorrectwithhint: 136},
{year: 2024, month: 8, day: 5, questionid: 58, timesasked: 1121,timescorrect: 390, timescorrectwithhint: 469, timesincorrect: 169, timesincorrectwithhint: 93},
{year: 2024, month: 8, day: 5, questionid: 59, timesasked: 1080,timescorrect: 227, timescorrectwithhint: 363, timesincorrect: 312, timesincorrectwithhint: 178},
{year: 2024, month: 8, day: 5, questionid: 60, timesasked: 1412,timescorrect: 465, timescorrectwithhint: 575, timesincorrect: 240, timesincorrectwithhint: 132},
{year: 2024, month: 8, day: 5, questionid: 61, timesasked: 1199,timescorrect: 285, timescorrectwithhint: 423, timesincorrect: 313, timesincorrectwithhint: 178},
{year: 2024, month: 8, day: 5, questionid: 62, timesasked: 1741,timescorrect: 442, timescorrectwithhint: 631, timesincorrect: 427, timesincorrectwithhint: 241},
{year: 2024, month: 8, day: 5, questionid: 63, timesasked: 1984,timescorrect: 366, timescorrectwithhint: 636, timesincorrect: 625, timesincorrectwithhint: 357},
{year: 2024, month: 8, day: 5, questionid: 64, timesasked: 1475,timescorrect: 250, timescorrectwithhint: 460, timesincorrect: 486, timesincorrectwithhint: 279},
{year: 2024, month: 8, day: 5, questionid: 65, timesasked: 1828,timescorrect: 562, timescorrectwithhint: 721, timesincorrect: 351, timesincorrectwithhint: 194},
{year: 2024, month: 8, day: 5, questionid: 66, timesasked: 1594,timescorrect: 619, timescorrectwithhint: 706, timesincorrect: 177, timesincorrectwithhint: 92},
{year: 2024, month: 8, day: 5, questionid: 67, timesasked: 1874,timescorrect: 637, timescorrectwithhint: 776, timesincorrect: 299, timesincorrectwithhint: 162},
{year: 2024, month: 8, day: 5, questionid: 68, timesasked: 1869,timescorrect: 416, timescorrectwithhint: 642, timesincorrect: 518, timesincorrectwithhint: 293},
{year: 2024, month: 8, day: 5, questionid: 69, timesasked: 1728,timescorrect: 666, timescorrectwithhint: 762, timesincorrect: 197, timesincorrectwithhint: 103},
{year: 2024, month: 8, day: 5, questionid: 70, timesasked: 1214,timescorrect: 273, timescorrectwithhint: 419, timesincorrect: 333, timesincorrectwithhint: 189},
{year: 2024, month: 8, day: 5, questionid: 71, timesasked: 1163,timescorrect: 387, timescorrectwithhint: 476, timesincorrect: 193, timesincorrectwithhint: 107},
{year: 2024, month: 8, day: 5, questionid: 72, timesasked: 1594,timescorrect: 318, timescorrectwithhint: 526, timesincorrect: 478, timesincorrectwithhint: 272},
{year: 2024, month: 8, day: 5, questionid: 73, timesasked: 1062,timescorrect: 360, timescorrectwithhint: 439, timesincorrect: 170, timesincorrectwithhint: 93},
{year: 2024, month: 8, day: 5, questionid: 74, timesasked: 1943,timescorrect: 738, timescorrectwithhint: 850, timesincorrect: 233, timesincorrectwithhint: 122},
{year: 2024, month: 8, day: 5, questionid: 75, timesasked: 1544,timescorrect: 289, timescorrectwithhint: 498, timesincorrect: 482, timesincorrectwithhint: 275},
{year: 2024, month: 8, day: 5, questionid: 76, timesasked: 1889,timescorrect: 690, timescorrectwithhint: 810, timesincorrect: 254, timesincorrectwithhint: 135},
{year: 2024, month: 8, day: 5, questionid: 77, timesasked: 1870,timescorrect: 389, timescorrectwithhint: 626, timesincorrect: 545, timesincorrectwithhint: 310},
{year: 2024, month: 8, day: 5, questionid: 78, timesasked: 1890,timescorrect: 571, timescorrectwithhint: 739, timesincorrect: 373, timesincorrectwithhint: 207},
{year: 2024, month: 8, day: 5, questionid: 79, timesasked: 1650,timescorrect: 312, timescorrectwithhint: 533, timesincorrect: 512, timesincorrectwithhint: 293},
{year: 2024, month: 8, day: 5, questionid: 80, timesasked: 1308,timescorrect: 369, timescorrectwithhint: 496, timesincorrect: 284, timesincorrectwithhint: 159},
{year: 2024, month: 8, day: 5, questionid: 81, timesasked: 1946,timescorrect: 336, timescorrectwithhint: 610, timesincorrect: 636, timesincorrectwithhint: 364},
{year: 2024, month: 8, day: 5, questionid: 82, timesasked: 1551,timescorrect: 331, timescorrectwithhint: 524, timesincorrect: 443, timesincorrectwithhint: 253},
{year: 2024, month: 8, day: 5, questionid: 83, timesasked: 1955,timescorrect: 432, timescorrectwithhint: 670, timesincorrect: 545, timesincorrectwithhint: 308},
{year: 2024, month: 8, day: 5, questionid: 84, timesasked: 1777,timescorrect: 671, timescorrectwithhint: 776, timesincorrect: 216, timesincorrectwithhint: 114},
{year: 2024, month: 8, day: 5, questionid: 85, timesasked: 1526,timescorrect: 508, timescorrectwithhint: 625, timesincorrect: 254, timesincorrectwithhint: 139},
{year: 2024, month: 8, day: 5, questionid: 86, timesasked: 1056,timescorrect: 222, timescorrectwithhint: 355, timesincorrect: 305, timesincorrectwithhint: 174},
{year: 2024, month: 8, day: 5, questionid: 87, timesasked: 1232,timescorrect: 319, timescorrectwithhint: 450, timesincorrect: 296, timesincorrectwithhint: 167},
{year: 2024, month: 8, day: 5, questionid: 88, timesasked: 1343,timescorrect: 532, timescorrectwithhint: 601, timesincorrect: 139, timesincorrectwithhint: 71},
{year: 2024, month: 8, day: 5, questionid: 89, timesasked: 1420,timescorrect: 394, timescorrectwithhint: 535, timesincorrect: 315, timesincorrectwithhint: 176},
{year: 2024, month: 8, day: 5, questionid: 90, timesasked: 1598,timescorrect: 590, timescorrectwithhint: 689, timesincorrect: 208, timesincorrectwithhint: 111},
{year: 2024, month: 8, day: 5, questionid: 91, timesasked: 1002,timescorrect: 208, timescorrectwithhint: 335, timesincorrect: 292, timesincorrectwithhint: 167},
{year: 2024, month: 8, day: 5, questionid: 92, timesasked: 1042,timescorrect: 232, timescorrectwithhint: 358, timesincorrect: 288, timesincorrectwithhint: 164},
{year: 2024, month: 8, day: 5, questionid: 93, timesasked: 1122,timescorrect: 194, timescorrectwithhint: 352, timesincorrect: 366, timesincorrectwithhint: 210},
{year: 2024, month: 8, day: 5, questionid: 94, timesasked: 1317,timescorrect: 208, timescorrectwithhint: 401, timesincorrect: 449, timesincorrectwithhint: 259},
{year: 2024, month: 8, day: 5, questionid: 95, timesasked: 1619,timescorrect: 247, timescorrectwithhint: 488, timesincorrect: 561, timesincorrectwithhint: 323},
{year: 2024, month: 8, day: 5, questionid: 96, timesasked: 1712,timescorrect: 368, timescorrectwithhint: 580, timesincorrect: 487, timesincorrectwithhint: 277},
{year: 2024, month: 8, day: 5, questionid: 97, timesasked: 1137,timescorrect: 246, timescorrectwithhint: 386, timesincorrect: 322, timesincorrectwithhint: 183},
{year: 2024, month: 8, day: 6, questionid: 1, timesasked: 1223,timescorrect: 224, timescorrectwithhint: 391, timesincorrect: 386, timesincorrectwithhint: 222},
{year: 2024, month: 8, day: 6, questionid: 2, timesasked: 1045,timescorrect: 293, timescorrectwithhint: 395, timesincorrect: 229, timesincorrectwithhint: 128},
{year: 2024, month: 8, day: 6, questionid: 3, timesasked: 1566,timescorrect: 246, timescorrectwithhint: 477, timesincorrect: 536, timesincorrectwithhint: 307},
{year: 2024, month: 8, day: 6, questionid: 4, timesasked: 1560,timescorrect: 555, timescorrectwithhint: 660, timesincorrect: 224, timesincorrectwithhint: 121},
{year: 2024, month: 8, day: 6, questionid: 5, timesasked: 1083,timescorrect: 424, timescorrectwithhint: 481, timesincorrect: 117, timesincorrectwithhint: 61},
{year: 2024, month: 8, day: 6, questionid: 6, timesasked: 1866,timescorrect: 688, timescorrectwithhint: 804, timesincorrect: 244, timesincorrectwithhint: 130},
{year: 2024, month: 8, day: 6, questionid: 7, timesasked: 1385,timescorrect: 369, timescorrectwithhint: 512, timesincorrect: 323, timesincorrectwithhint: 181},
{year: 2024, month: 8, day: 6, questionid: 8, timesasked: 1567,timescorrect: 333, timescorrectwithhint: 529, timesincorrect: 449, timesincorrectwithhint: 256},
{year: 2024, month: 8, day: 6, questionid: 9, timesasked: 1246,timescorrect: 243, timescorrectwithhint: 407, timesincorrect: 379, timesincorrectwithhint: 217},
{year: 2024, month: 8, day: 6, questionid: 10, timesasked: 1359,timescorrect: 383, timescorrectwithhint: 515, timesincorrect: 295, timesincorrectwithhint: 166},
{year: 2024, month: 8, day: 6, questionid: 11, timesasked: 1479,timescorrect: 360, timescorrectwithhint: 526, timesincorrect: 379, timesincorrectwithhint: 214},
{year: 2024, month: 8, day: 6, questionid: 12, timesasked: 1194,timescorrect: 310, timescorrectwithhint: 437, timesincorrect: 286, timesincorrectwithhint: 161},
{year: 2024, month: 8, day: 6, questionid: 13, timesasked: 1119,timescorrect: 173, timescorrectwithhint: 338, timesincorrect: 386, timesincorrectwithhint: 222},
{year: 2024, month: 8, day: 6, questionid: 14, timesasked: 1690,timescorrect: 477, timescorrectwithhint: 641, timesincorrect: 367, timesincorrectwithhint: 205},
{year: 2024, month: 8, day: 6, questionid: 15, timesasked: 1439,timescorrect: 489, timescorrectwithhint: 595, timesincorrect: 229, timesincorrectwithhint: 126},
{year: 2024, month: 8, day: 6, questionid: 16, timesasked: 1330,timescorrect: 473, timescorrectwithhint: 563, timesincorrect: 191, timesincorrectwithhint: 103},
{year: 2024, month: 8, day: 6, questionid: 17, timesasked: 1193,timescorrect: 376, timescorrectwithhint: 476, timesincorrect: 220, timesincorrectwithhint: 121},
{year: 2024, month: 8, day: 6, questionid: 18, timesasked: 1261,timescorrect: 472, timescorrectwithhint: 548, timesincorrect: 157, timesincorrectwithhint: 84},
{year: 2024, month: 8, day: 6, questionid: 19, timesasked: 1217,timescorrect: 240, timescorrectwithhint: 399, timesincorrect: 368, timesincorrectwithhint: 210},
{year: 2024, month: 8, day: 6, questionid: 20, timesasked: 1436,timescorrect: 302, timescorrectwithhint: 483, timesincorrect: 415, timesincorrectwithhint: 236},
{year: 2024, month: 8, day: 6, questionid: 21, timesasked: 1261,timescorrect: 295, timescorrectwithhint: 442, timesincorrect: 334, timesincorrectwithhint: 190},
{year: 2024, month: 8, day: 6, questionid: 22, timesasked: 1186,timescorrect: 457, timescorrectwithhint: 523, timesincorrect: 135, timesincorrectwithhint: 71},
{year: 2024, month: 8, day: 6, questionid: 23, timesasked: 1694,timescorrect: 265, timescorrectwithhint: 515, timesincorrect: 581, timesincorrectwithhint: 333},
{year: 2024, month: 8, day: 6, questionid: 24, timesasked: 1368,timescorrect: 312, timescorrectwithhint: 474, timesincorrect: 371, timesincorrectwithhint: 211},
{year: 2024, month: 8, day: 6, questionid: 25, timesasked: 1758,timescorrect: 370, timescorrectwithhint: 591, timesincorrect: 508, timesincorrectwithhint: 289},
{year: 2024, month: 8, day: 6, questionid: 26, timesasked: 1090,timescorrect: 178, timescorrectwithhint: 335, timesincorrect: 366, timesincorrectwithhint: 211},
{year: 2024, month: 8, day: 6, questionid: 27, timesasked: 1784,timescorrect: 632, timescorrectwithhint: 754, timesincorrect: 259, timesincorrectwithhint: 139},
{year: 2024, month: 8, day: 6, questionid: 28, timesasked: 1402,timescorrect: 388, timescorrectwithhint: 527, timesincorrect: 312, timesincorrectwithhint: 175},
{year: 2024, month: 8, day: 6, questionid: 29, timesasked: 1005,timescorrect: 193, timescorrectwithhint: 327, timesincorrect: 308, timesincorrectwithhint: 177},
{year: 2024, month: 8, day: 6, questionid: 30, timesasked: 1572,timescorrect: 282, timescorrectwithhint: 499, timesincorrect: 503, timesincorrectwithhint: 288},
{year: 2024, month: 8, day: 6, questionid: 31, timesasked: 1039,timescorrect: 328, timescorrectwithhint: 415, timesincorrect: 191, timesincorrectwithhint: 105},
{year: 2024, month: 8, day: 6, questionid: 32, timesasked: 1774,timescorrect: 440, timescorrectwithhint: 636, timesincorrect: 446, timesincorrectwithhint: 252},
{year: 2024, month: 8, day: 6, questionid: 33, timesasked: 1520,timescorrect: 354, timescorrectwithhint: 532, timesincorrect: 405, timesincorrectwithhint: 229},
{year: 2024, month: 8, day: 6, questionid: 34, timesasked: 1416,timescorrect: 442, timescorrectwithhint: 563, timesincorrect: 265, timesincorrectwithhint: 146},
{year: 2024, month: 8, day: 6, questionid: 35, timesasked: 1024,timescorrect: 230, timescorrectwithhint: 353, timesincorrect: 281, timesincorrectwithhint: 160},
{year: 2024, month: 8, day: 6, questionid: 36, timesasked: 1661,timescorrect: 253, timescorrectwithhint: 501, timesincorrect: 576, timesincorrectwithhint: 331},
{year: 2024, month: 8, day: 6, questionid: 37, timesasked: 1525,timescorrect: 251, timescorrectwithhint: 471, timesincorrect: 510, timesincorrectwithhint: 293},
{year: 2024, month: 8, day: 6, questionid: 38, timesasked: 1213,timescorrect: 270, timescorrectwithhint: 417, timesincorrect: 335, timesincorrectwithhint: 191},
{year: 2024, month: 8, day: 6, questionid: 39, timesasked: 1237,timescorrect: 386, timescorrectwithhint: 491, timesincorrect: 231, timesincorrectwithhint: 129},
{year: 2024, month: 8, day: 6, questionid: 40, timesasked: 1909,timescorrect: 738, timescorrectwithhint: 844, timesincorrect: 215, timesincorrectwithhint: 112},
{year: 2024, month: 8, day: 6, questionid: 41, timesasked: 1099,timescorrect: 202, timescorrectwithhint: 352, timesincorrect: 346, timesincorrectwithhint: 199},
{year: 2024, month: 8, day: 6, questionid: 42, timesasked: 1673,timescorrect: 647, timescorrectwithhint: 740, timesincorrect: 188, timesincorrectwithhint: 98},
{year: 2024, month: 8, day: 6, questionid: 43, timesasked: 1268,timescorrect: 211, timescorrectwithhint: 392, timesincorrect: 422, timesincorrectwithhint: 243},
{year: 2024, month: 8, day: 6, questionid: 44, timesasked: 1398,timescorrect: 470, timescorrectwithhint: 575, timesincorrect: 228, timesincorrectwithhint: 125},
{year: 2024, month: 8, day: 6, questionid: 45, timesasked: 1203,timescorrect: 295, timescorrectwithhint: 429, timesincorrect: 306, timesincorrectwithhint: 173},
{year: 2024, month: 8, day: 6, questionid: 46, timesasked: 1619,timescorrect: 603, timescorrectwithhint: 701, timesincorrect: 206, timesincorrectwithhint: 109},
{year: 2024, month: 8, day: 6, questionid: 47, timesasked: 1661,timescorrect: 487, timescorrectwithhint: 641, timesincorrect: 343, timesincorrectwithhint: 190},
{year: 2024, month: 8, day: 6, questionid: 48, timesasked: 1671,timescorrect: 509, timescorrectwithhint: 656, timesincorrect: 326, timesincorrectwithhint: 180},
{year: 2024, month: 8, day: 6, questionid: 49, timesasked: 1442,timescorrect: 383, timescorrectwithhint: 532, timesincorrect: 337, timesincorrectwithhint: 190},
{year: 2024, month: 8, day: 6, questionid: 50, timesasked: 1312,timescorrect: 471, timescorrectwithhint: 558, timesincorrect: 184, timesincorrectwithhint: 99},
{year: 2024, month: 8, day: 6, questionid: 51, timesasked: 1336,timescorrect: 378, timescorrectwithhint: 507, timesincorrect: 289, timesincorrectwithhint: 162},
{year: 2024, month: 8, day: 6, questionid: 52, timesasked: 1849,timescorrect: 427, timescorrectwithhint: 644, timesincorrect: 497, timesincorrectwithhint: 281},
{year: 2024, month: 8, day: 6, questionid: 53, timesasked: 1896,timescorrect: 603, timescorrectwithhint: 760, timesincorrect: 344, timesincorrectwithhint: 189},
{year: 2024, month: 8, day: 6, questionid: 54, timesasked: 1074,timescorrect: 353, timescorrectwithhint: 437, timesincorrect: 183, timesincorrectwithhint: 101},
{year: 2024, month: 8, day: 6, questionid: 55, timesasked: 1125,timescorrect: 212, timescorrectwithhint: 363, timesincorrect: 349, timesincorrectwithhint: 201},
{year: 2024, month: 8, day: 6, questionid: 56, timesasked: 1433,timescorrect: 527, timescorrectwithhint: 617, timesincorrect: 188, timesincorrectwithhint: 101},
{year: 2024, month: 8, day: 6, questionid: 57, timesasked: 1736,timescorrect: 390, timescorrectwithhint: 598, timesincorrect: 477, timesincorrectwithhint: 271},
{year: 2024, month: 8, day: 6, questionid: 58, timesasked: 1346,timescorrect: 202, timescorrectwithhint: 404, timesincorrect: 470, timesincorrectwithhint: 270},
{year: 2024, month: 8, day: 6, questionid: 59, timesasked: 1034,timescorrect: 372, timescorrectwithhint: 440, timesincorrect: 144, timesincorrectwithhint: 78},
{year: 2024, month: 8, day: 6, questionid: 60, timesasked: 1246,timescorrect: 269, timescorrectwithhint: 423, timesincorrect: 353, timesincorrectwithhint: 201},
{year: 2024, month: 8, day: 6, questionid: 61, timesasked: 1240,timescorrect: 435, timescorrectwithhint: 521, timesincorrect: 184, timesincorrectwithhint: 100},
{year: 2024, month: 8, day: 6, questionid: 62, timesasked: 1863,timescorrect: 729, timescorrectwithhint: 829, timesincorrect: 201, timesincorrectwithhint: 104},
{year: 2024, month: 8, day: 6, questionid: 63, timesasked: 1434,timescorrect: 339, timescorrectwithhint: 504, timesincorrect: 377, timesincorrectwithhint: 214},
{year: 2024, month: 8, day: 6, questionid: 64, timesasked: 1687,timescorrect: 568, timescorrectwithhint: 695, timesincorrect: 274, timesincorrectwithhint: 150},
{year: 2024, month: 8, day: 6, questionid: 65, timesasked: 1930,timescorrect: 394, timescorrectwithhint: 641, timesincorrect: 570, timesincorrectwithhint: 325},
{year: 2024, month: 8, day: 6, questionid: 66, timesasked: 1972,timescorrect: 700, timescorrectwithhint: 834, timesincorrect: 285, timesincorrectwithhint: 153},
{year: 2024, month: 8, day: 6, questionid: 67, timesasked: 1843,timescorrect: 397, timescorrectwithhint: 625, timesincorrect: 524, timesincorrectwithhint: 297},
{year: 2024, month: 8, day: 6, questionid: 68, timesasked: 1717,timescorrect: 624, timescorrectwithhint: 735, timesincorrect: 233, timesincorrectwithhint: 125},
{year: 2024, month: 8, day: 6, questionid: 69, timesasked: 1676,timescorrect: 278, timescorrectwithhint: 519, timesincorrect: 559, timesincorrectwithhint: 320},
{year: 2024, month: 8, day: 6, questionid: 70, timesasked: 1098,timescorrect: 389, timescorrectwithhint: 464, timesincorrect: 159, timesincorrectwithhint: 86},
{year: 2024, month: 8, day: 6, questionid: 71, timesasked: 1838,timescorrect: 519, timescorrectwithhint: 697, timesincorrect: 399, timesincorrectwithhint: 223},
{year: 2024, month: 8, day: 6, questionid: 72, timesasked: 1307,timescorrect: 254, timescorrectwithhint: 427, timesincorrect: 398, timesincorrectwithhint: 228},
{year: 2024, month: 8, day: 6, questionid: 73, timesasked: 1749,timescorrect: 528, timescorrectwithhint: 684, timesincorrect: 345, timesincorrectwithhint: 192},
{year: 2024, month: 8, day: 6, questionid: 74, timesasked: 1751,timescorrect: 684, timescorrectwithhint: 778, timesincorrect: 190, timesincorrectwithhint: 99},
{year: 2024, month: 8, day: 6, questionid: 75, timesasked: 1272,timescorrect: 196, timescorrectwithhint: 385, timesincorrect: 439, timesincorrectwithhint: 252},
{year: 2024, month: 8, day: 6, questionid: 76, timesasked: 1857,timescorrect: 324, timescorrectwithhint: 584, timesincorrect: 603, timesincorrectwithhint: 346},
{year: 2024, month: 8, day: 6, questionid: 77, timesasked: 1037,timescorrect: 176, timescorrectwithhint: 323, timesincorrect: 342, timesincorrectwithhint: 196},
{year: 2024, month: 8, day: 6, questionid: 78, timesasked: 1424,timescorrect: 383, timescorrectwithhint: 529, timesincorrect: 328, timesincorrectwithhint: 184},
{year: 2024, month: 8, day: 6, questionid: 79, timesasked: 1108,timescorrect: 376, timescorrectwithhint: 458, timesincorrect: 177, timesincorrectwithhint: 97},
{year: 2024, month: 8, day: 6, questionid: 80, timesasked: 1620,timescorrect: 536, timescorrectwithhint: 661, timesincorrect: 273, timesincorrectwithhint: 150},
{year: 2024, month: 8, day: 6, questionid: 81, timesasked: 1787,timescorrect: 606, timescorrectwithhint: 739, timesincorrect: 287, timesincorrectwithhint: 155},
{year: 2024, month: 8, day: 6, questionid: 82, timesasked: 1782,timescorrect: 639, timescorrectwithhint: 757, timesincorrect: 251, timesincorrectwithhint: 135},
{year: 2024, month: 8, day: 6, questionid: 83, timesasked: 1691,timescorrect: 343, timescorrectwithhint: 560, timesincorrect: 502, timesincorrectwithhint: 286},
{year: 2024, month: 8, day: 6, questionid: 84, timesasked: 1239,timescorrect: 491, timescorrectwithhint: 555, timesincorrect: 128, timesincorrectwithhint: 65},
{year: 2024, month: 8, day: 6, questionid: 85, timesasked: 1270,timescorrect: 313, timescorrectwithhint: 454, timesincorrect: 321, timesincorrectwithhint: 182},
{year: 2024, month: 8, day: 6, questionid: 86, timesasked: 1218,timescorrect: 427, timescorrectwithhint: 512, timesincorrect: 181, timesincorrectwithhint: 98},
{year: 2024, month: 8, day: 6, questionid: 87, timesasked: 1060,timescorrect: 373, timescorrectwithhint: 446, timesincorrect: 156, timesincorrectwithhint: 85},
{year: 2024, month: 8, day: 6, questionid: 88, timesasked: 1440,timescorrect: 410, timescorrectwithhint: 548, timesincorrect: 309, timesincorrectwithhint: 173},
{year: 2024, month: 8, day: 6, questionid: 89, timesasked: 1691,timescorrect: 602, timescorrectwithhint: 716, timesincorrect: 242, timesincorrectwithhint: 131},
{year: 2024, month: 8, day: 6, questionid: 90, timesasked: 1558,timescorrect: 286, timescorrectwithhint: 499, timesincorrect: 492, timesincorrectwithhint: 281},
{year: 2024, month: 8, day: 6, questionid: 91, timesasked: 1685,timescorrect: 652, timescorrectwithhint: 745, timesincorrect: 189, timesincorrectwithhint: 99},
{year: 2024, month: 8, day: 6, questionid: 92, timesasked: 1142,timescorrect: 351, timescorrectwithhint: 450, timesincorrect: 219, timesincorrectwithhint: 122},
{year: 2024, month: 8, day: 6, questionid: 93, timesasked: 1008,timescorrect: 237, timescorrectwithhint: 354, timesincorrect: 266, timesincorrectwithhint: 151},
{year: 2024, month: 8, day: 6, questionid: 94, timesasked: 1941,timescorrect: 672, timescorrectwithhint: 810, timesincorrect: 298, timesincorrectwithhint: 161},
{year: 2024, month: 8, day: 6, questionid: 95, timesasked: 1530,timescorrect: 537, timescorrectwithhint: 643, timesincorrect: 227, timesincorrectwithhint: 123},
{year: 2024, month: 8, day: 6, questionid: 96, timesasked: 1824,timescorrect: 536, timescorrectwithhint: 705, timesincorrect: 375, timesincorrectwithhint: 208},
{year: 2024, month: 8, day: 6, questionid: 97, timesasked: 1099,timescorrect: 304, timescorrectwithhint: 413, timesincorrect: 245, timesincorrectwithhint: 137},
{year: 2024, month: 8, day: 7, questionid: 1, timesasked: 1406,timescorrect: 378, timescorrectwithhint: 522, timesincorrect: 324, timesincorrectwithhint: 182},
{year: 2024, month: 8, day: 7, questionid: 2, timesasked: 1888,timescorrect: 517, timescorrectwithhint: 706, timesincorrect: 426, timesincorrectwithhint: 239},
{year: 2024, month: 8, day: 7, questionid: 3, timesasked: 1779,timescorrect: 489, timescorrectwithhint: 667, timesincorrect: 400, timesincorrectwithhint: 223},
{year: 2024, month: 8, day: 7, questionid: 4, timesasked: 1198,timescorrect: 193, timescorrectwithhint: 367, timesincorrect: 405, timesincorrectwithhint: 233},
{year: 2024, month: 8, day: 7, questionid: 5, timesasked: 1864,timescorrect: 411, timescorrectwithhint: 638, timesincorrect: 520, timesincorrectwithhint: 295},
{year: 2024, month: 8, day: 7, questionid: 6, timesasked: 1505,timescorrect: 291, timescorrectwithhint: 491, timesincorrect: 460, timesincorrectwithhint: 263},
{year: 2024, month: 8, day: 7, questionid: 7, timesasked: 1800,timescorrect: 563, timescorrectwithhint: 716, timesincorrect: 336, timesincorrectwithhint: 185},
{year: 2024, month: 8, day: 7, questionid: 8, timesasked: 1934,timescorrect: 443, timescorrectwithhint: 672, timesincorrect: 523, timesincorrectwithhint: 296},
{year: 2024, month: 8, day: 7, questionid: 9, timesasked: 1334,timescorrect: 371, timescorrectwithhint: 503, timesincorrect: 295, timesincorrectwithhint: 165},
{year: 2024, month: 8, day: 7, questionid: 10, timesasked: 1872,timescorrect: 291, timescorrectwithhint: 567, timesincorrect: 644, timesincorrectwithhint: 370},
{year: 2024, month: 8, day: 7, questionid: 11, timesasked: 1497,timescorrect: 277, timescorrectwithhint: 481, timesincorrect: 470, timesincorrectwithhint: 269},
{year: 2024, month: 8, day: 7, questionid: 12, timesasked: 1117,timescorrect: 313, timescorrectwithhint: 422, timesincorrect: 244, timesincorrectwithhint: 138},
{year: 2024, month: 8, day: 7, questionid: 13, timesasked: 1900,timescorrect: 320, timescorrectwithhint: 591, timesincorrect: 629, timesincorrectwithhint: 360},
{year: 2024, month: 8, day: 7, questionid: 14, timesasked: 1240,timescorrect: 262, timescorrectwithhint: 417, timesincorrect: 357, timesincorrectwithhint: 204},
{year: 2024, month: 8, day: 7, questionid: 15, timesasked: 1880,timescorrect: 331, timescorrectwithhint: 593, timesincorrect: 608, timesincorrectwithhint: 348},
{year: 2024, month: 8, day: 7, questionid: 16, timesasked: 1538,timescorrect: 404, timescorrectwithhint: 565, timesincorrect: 364, timesincorrectwithhint: 205},
{year: 2024, month: 8, day: 7, questionid: 17, timesasked: 1365,timescorrect: 380, timescorrectwithhint: 515, timesincorrect: 301, timesincorrectwithhint: 169},
{year: 2024, month: 8, day: 7, questionid: 18, timesasked: 1889,timescorrect: 682, timescorrectwithhint: 806, timesincorrect: 262, timesincorrectwithhint: 139},
{year: 2024, month: 8, day: 7, questionid: 19, timesasked: 1654,timescorrect: 511, timescorrectwithhint: 654, timesincorrect: 315, timesincorrectwithhint: 174},
{year: 2024, month: 8, day: 7, questionid: 20, timesasked: 1516,timescorrect: 337, timescorrectwithhint: 521, timesincorrect: 420, timesincorrectwithhint: 238},
{year: 2024, month: 8, day: 7, questionid: 21, timesasked: 1461,timescorrect: 234, timescorrectwithhint: 447, timesincorrect: 496, timesincorrectwithhint: 284},
{year: 2024, month: 8, day: 7, questionid: 22, timesasked: 1444,timescorrect: 428, timescorrectwithhint: 560, timesincorrect: 293, timesincorrectwithhint: 163},
{year: 2024, month: 8, day: 7, questionid: 23, timesasked: 1382,timescorrect: 458, timescorrectwithhint: 565, timesincorrect: 232, timesincorrectwithhint: 127},
{year: 2024, month: 8, day: 7, questionid: 24, timesasked: 1744,timescorrect: 392, timescorrectwithhint: 601, timesincorrect: 479, timesincorrectwithhint: 272},
{year: 2024, month: 8, day: 7, questionid: 25, timesasked: 1785,timescorrect: 268, timescorrectwithhint: 536, timesincorrect: 623, timesincorrectwithhint: 358},
{year: 2024, month: 8, day: 7, questionid: 26, timesasked: 1304,timescorrect: 468, timescorrectwithhint: 555, timesincorrect: 183, timesincorrectwithhint: 98},
{year: 2024, month: 8, day: 7, questionid: 27, timesasked: 1561,timescorrect: 588, timescorrectwithhint: 681, timesincorrect: 191, timesincorrectwithhint: 101},
{year: 2024, month: 8, day: 7, questionid: 28, timesasked: 1076,timescorrect: 222, timescorrectwithhint: 359, timesincorrect: 315, timesincorrectwithhint: 180},
{year: 2024, month: 8, day: 7, questionid: 29, timesasked: 1376,timescorrect: 417, timescorrectwithhint: 539, timesincorrect: 270, timesincorrectwithhint: 150},
{year: 2024, month: 8, day: 7, questionid: 30, timesasked: 1500,timescorrect: 539, timescorrectwithhint: 638, timesincorrect: 210, timesincorrectwithhint: 113},
{year: 2024, month: 8, day: 7, questionid: 31, timesasked: 1990,timescorrect: 452, timescorrectwithhint: 689, timesincorrect: 542, timesincorrectwithhint: 307},
{year: 2024, month: 8, day: 7, questionid: 32, timesasked: 1547,timescorrect: 276, timescorrectwithhint: 490, timesincorrect: 496, timesincorrectwithhint: 285},
{year: 2024, month: 8, day: 7, questionid: 33, timesasked: 1304,timescorrect: 288, timescorrectwithhint: 446, timesincorrect: 363, timesincorrectwithhint: 207},
{year: 2024, month: 8, day: 7, questionid: 34, timesasked: 1343,timescorrect: 435, timescorrectwithhint: 543, timesincorrect: 236, timesincorrectwithhint: 129},
{year: 2024, month: 8, day: 7, questionid: 35, timesasked: 1946,timescorrect: 727, timescorrectwithhint: 845, timesincorrect: 245, timesincorrectwithhint: 129},
{year: 2024, month: 8, day: 7, questionid: 36, timesasked: 1707,timescorrect: 521, timescorrectwithhint: 671, timesincorrect: 331, timesincorrectwithhint: 184},
{year: 2024, month: 8, day: 7, questionid: 37, timesasked: 1829,timescorrect: 652, timescorrectwithhint: 775, timesincorrect: 262, timesincorrectwithhint: 140},
{year: 2024, month: 8, day: 7, questionid: 38, timesasked: 1461,timescorrect: 560, timescorrectwithhint: 643, timesincorrect: 169, timesincorrectwithhint: 89},
{year: 2024, month: 8, day: 7, questionid: 39, timesasked: 1779,timescorrect: 569, timescorrectwithhint: 715, timesincorrect: 319, timesincorrectwithhint: 176},
{year: 2024, month: 8, day: 7, questionid: 40, timesasked: 1707,timescorrect: 511, timescorrectwithhint: 665, timesincorrect: 342, timesincorrectwithhint: 189},
{year: 2024, month: 8, day: 7, questionid: 41, timesasked: 1294,timescorrect: 418, timescorrectwithhint: 522, timesincorrect: 228, timesincorrectwithhint: 126},
{year: 2024, month: 8, day: 7, questionid: 42, timesasked: 1035,timescorrect: 391, timescorrectwithhint: 451, timesincorrect: 126, timesincorrectwithhint: 67},
{year: 2024, month: 8, day: 7, questionid: 43, timesasked: 1011,timescorrect: 312, timescorrectwithhint: 399, timesincorrect: 193, timesincorrectwithhint: 107},
{year: 2024, month: 8, day: 7, questionid: 44, timesasked: 1189,timescorrect: 298, timescorrectwithhint: 429, timesincorrect: 295, timesincorrectwithhint: 167},
{year: 2024, month: 8, day: 7, questionid: 45, timesasked: 1462,timescorrect: 434, timescorrectwithhint: 567, timesincorrect: 296, timesincorrectwithhint: 165},
{year: 2024, month: 8, day: 7, questionid: 46, timesasked: 1353,timescorrect: 521, timescorrectwithhint: 596, timesincorrect: 155, timesincorrectwithhint: 81},
{year: 2024, month: 8, day: 7, questionid: 47, timesasked: 1491,timescorrect: 264, timescorrectwithhint: 472, timesincorrect: 480, timesincorrectwithhint: 275},
{year: 2024, month: 8, day: 7, questionid: 48, timesasked: 1604,timescorrect: 356, timescorrectwithhint: 550, timesincorrect: 445, timesincorrectwithhint: 253},
{year: 2024, month: 8, day: 7, questionid: 49, timesasked: 1628,timescorrect: 480, timescorrectwithhint: 629, timesincorrect: 333, timesincorrectwithhint: 186},
{year: 2024, month: 8, day: 7, questionid: 50, timesasked: 1561,timescorrect: 565, timescorrectwithhint: 667, timesincorrect: 214, timesincorrectwithhint: 115},
{year: 2024, month: 8, day: 7, questionid: 51, timesasked: 1421,timescorrect: 345, timescorrectwithhint: 505, timesincorrect: 364, timesincorrectwithhint: 207},
{year: 2024, month: 8, day: 7, questionid: 52, timesasked: 1563,timescorrect: 396, timescorrectwithhint: 565, timesincorrect: 385, timesincorrectwithhint: 217},
{year: 2024, month: 8, day: 7, questionid: 53, timesasked: 1531,timescorrect: 281, timescorrectwithhint: 490, timesincorrect: 483, timesincorrectwithhint: 277},
{year: 2024, month: 8, day: 7, questionid: 54, timesasked: 1283,timescorrect: 430, timescorrectwithhint: 527, timesincorrect: 210, timesincorrectwithhint: 116},
{year: 2024, month: 8, day: 7, questionid: 55, timesasked: 1148,timescorrect: 281, timescorrectwithhint: 410, timesincorrect: 292, timesincorrectwithhint: 165},
{year: 2024, month: 8, day: 7, questionid: 56, timesasked: 1483,timescorrect: 382, timescorrectwithhint: 540, timesincorrect: 359, timesincorrectwithhint: 202},
{year: 2024, month: 8, day: 7, questionid: 57, timesasked: 1012,timescorrect: 392, timescorrectwithhint: 448, timesincorrect: 113, timesincorrectwithhint: 59},
{year: 2024, month: 8, day: 7, questionid: 58, timesasked: 1950,timescorrect: 472, timescorrectwithhint: 693, timesincorrect: 502, timesincorrectwithhint: 283},
{year: 2024, month: 8, day: 7, questionid: 59, timesasked: 1528,timescorrect: 527, timescorrectwithhint: 637, timesincorrect: 236, timesincorrectwithhint: 128},
{year: 2024, month: 8, day: 7, questionid: 60, timesasked: 1048,timescorrect: 228, timescorrectwithhint: 356, timesincorrect: 295, timesincorrectwithhint: 169},
{year: 2024, month: 8, day: 7, questionid: 61, timesasked: 1449,timescorrect: 323, timescorrectwithhint: 498, timesincorrect: 400, timesincorrectwithhint: 228},
{year: 2024, month: 8, day: 7, questionid: 62, timesasked: 1239,timescorrect: 320, timescorrectwithhint: 452, timesincorrect: 298, timesincorrectwithhint: 169},
{year: 2024, month: 8, day: 7, questionid: 63, timesasked: 1149,timescorrect: 342, timescorrectwithhint: 446, timesincorrect: 231, timesincorrectwithhint: 130},
{year: 2024, month: 8, day: 7, questionid: 64, timesasked: 1254,timescorrect: 350, timescorrectwithhint: 473, timesincorrect: 276, timesincorrectwithhint: 155},
{year: 2024, month: 8, day: 7, questionid: 65, timesasked: 1386,timescorrect: 519, timescorrectwithhint: 602, timesincorrect: 173, timesincorrectwithhint: 92},
{year: 2024, month: 8, day: 7, questionid: 66, timesasked: 1349,timescorrect: 247, timescorrectwithhint: 431, timesincorrect: 427, timesincorrectwithhint: 244},
{year: 2024, month: 8, day: 7, questionid: 67, timesasked: 1727,timescorrect: 479, timescorrectwithhint: 650, timesincorrect: 383, timesincorrectwithhint: 215},
{year: 2024, month: 8, day: 7, questionid: 68, timesasked: 1960,timescorrect: 706, timescorrectwithhint: 835, timesincorrect: 273, timesincorrectwithhint: 146},
{year: 2024, month: 8, day: 7, questionid: 69, timesasked: 1429,timescorrect: 366, timescorrectwithhint: 520, timesincorrect: 347, timesincorrectwithhint: 196},
{year: 2024, month: 8, day: 7, questionid: 70, timesasked: 1954,timescorrect: 394, timescorrectwithhint: 647, timesincorrect: 582, timesincorrectwithhint: 331},
{year: 2024, month: 8, day: 7, questionid: 71, timesasked: 1809,timescorrect: 299, timescorrectwithhint: 559, timesincorrect: 604, timesincorrectwithhint: 347},
{year: 2024, month: 8, day: 7, questionid: 72, timesasked: 1310,timescorrect: 300, timescorrectwithhint: 455, timesincorrect: 354, timesincorrectwithhint: 201},
{year: 2024, month: 8, day: 7, questionid: 73, timesasked: 1701,timescorrect: 614, timescorrectwithhint: 725, timesincorrect: 235, timesincorrectwithhint: 127},
{year: 2024, month: 8, day: 7, questionid: 74, timesasked: 1568,timescorrect: 544, timescorrectwithhint: 655, timesincorrect: 239, timesincorrectwithhint: 130},
{year: 2024, month: 8, day: 7, questionid: 75, timesasked: 1446,timescorrect: 452, timescorrectwithhint: 575, timesincorrect: 270, timesincorrectwithhint: 149},
{year: 2024, month: 8, day: 7, questionid: 76, timesasked: 1611,timescorrect: 287, timescorrectwithhint: 511, timesincorrect: 517, timesincorrectwithhint: 296},
{year: 2024, month: 8, day: 7, questionid: 77, timesasked: 1863,timescorrect: 707, timescorrectwithhint: 815, timesincorrect: 223, timesincorrectwithhint: 118},
{year: 2024, month: 8, day: 7, questionid: 78, timesasked: 1814,timescorrect: 290, timescorrectwithhint: 555, timesincorrect: 616, timesincorrectwithhint: 353},
{year: 2024, month: 8, day: 7, questionid: 79, timesasked: 1294,timescorrect: 398, timescorrectwithhint: 510, timesincorrect: 248, timesincorrectwithhint: 138},
{year: 2024, month: 8, day: 7, questionid: 80, timesasked: 1183,timescorrect: 393, timescorrectwithhint: 484, timesincorrect: 198, timesincorrectwithhint: 108},
{year: 2024, month: 8, day: 7, questionid: 81, timesasked: 1419,timescorrect: 481, timescorrectwithhint: 586, timesincorrect: 228, timesincorrectwithhint: 124},
{year: 2024, month: 8, day: 7, questionid: 82, timesasked: 1350,timescorrect: 495, timescorrectwithhint: 580, timesincorrect: 179, timesincorrectwithhint: 96},
{year: 2024, month: 8, day: 7, questionid: 83, timesasked: 1628,timescorrect: 478, timescorrectwithhint: 628, timesincorrect: 335, timesincorrectwithhint: 187},
{year: 2024, month: 8, day: 7, questionid: 84, timesasked: 1957,timescorrect: 766, timescorrectwithhint: 870, timesincorrect: 211, timesincorrectwithhint: 110},
{year: 2024, month: 8, day: 7, questionid: 85, timesasked: 1388,timescorrect: 419, timescorrectwithhint: 542, timesincorrect: 274, timesincorrectwithhint: 153},
{year: 2024, month: 8, day: 7, questionid: 86, timesasked: 1011,timescorrect: 341, timescorrectwithhint: 417, timesincorrect: 163, timesincorrectwithhint: 90},
{year: 2024, month: 8, day: 7, questionid: 87, timesasked: 1201,timescorrect: 208, timescorrectwithhint: 377, timesincorrect: 392, timesincorrectwithhint: 224},
{year: 2024, month: 8, day: 7, questionid: 88, timesasked: 1291,timescorrect: 495, timescorrectwithhint: 568, timesincorrect: 150, timesincorrectwithhint: 78},
{year: 2024, month: 8, day: 7, questionid: 89, timesasked: 1103,timescorrect: 370, timescorrectwithhint: 454, timesincorrect: 180, timesincorrectwithhint: 99},
{year: 2024, month: 8, day: 7, questionid: 90, timesasked: 1027,timescorrect: 340, timescorrectwithhint: 420, timesincorrect: 172, timesincorrectwithhint: 95},
{year: 2024, month: 8, day: 7, questionid: 91, timesasked: 1337,timescorrect: 297, timescorrectwithhint: 459, timesincorrect: 371, timesincorrectwithhint: 210},
{year: 2024, month: 8, day: 7, questionid: 92, timesasked: 1320,timescorrect: 333, timescorrectwithhint: 477, timesincorrect: 326, timesincorrectwithhint: 184},
{year: 2024, month: 8, day: 7, questionid: 93, timesasked: 1094,timescorrect: 262, timescorrectwithhint: 387, timesincorrect: 284, timesincorrectwithhint: 161},
{year: 2024, month: 8, day: 7, questionid: 94, timesasked: 1446,timescorrect: 240, timescorrectwithhint: 448, timesincorrect: 482, timesincorrectwithhint: 276},
{year: 2024, month: 8, day: 7, questionid: 95, timesasked: 1842,timescorrect: 718, timescorrectwithhint: 817, timesincorrect: 202, timesincorrectwithhint: 105},
{year: 2024, month: 8, day: 7, questionid: 96, timesasked: 1005,timescorrect: 159, timescorrectwithhint: 306, timesincorrect: 342, timesincorrectwithhint: 198},
{year: 2024, month: 8, day: 7, questionid: 97, timesasked: 1713,timescorrect: 552, timescorrectwithhint: 691, timesincorrect: 303, timesincorrectwithhint: 167},
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