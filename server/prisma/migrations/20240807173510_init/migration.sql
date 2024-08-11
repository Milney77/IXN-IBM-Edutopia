-- CreateTable
CREATE TABLE "courselist" (
    "courseid" INTEGER NOT NULL,
    "coursename" VARCHAR(255) NOT NULL,
    "badgeicon" VARCHAR(100) NOT NULL,
    "includeind" INTEGER NOT NULL,

    CONSTRAINT "coursepk" PRIMARY KEY ("courseid")
);

-- CreateTable
CREATE TABLE "questions" (
    "questionid" SERIAL NOT NULL,
    "courseid" INTEGER NOT NULL,
    "quiznumber" INTEGER NOT NULL,
    "questiontype" INTEGER NOT NULL,
    "questiontext" VARCHAR(400) NOT NULL,
    "options" VARCHAR[],
    "matchoptions" VARCHAR[],
    "optionstoselect" INTEGER,
    "answeridx" INTEGER[],
    "hintind" INTEGER NOT NULL,
    "hinttxt" VARCHAR(255),
    "hinttxt1" VARCHAR(255),
    "hinttxt2" VARCHAR(255),
    "hintcards" INTEGER NOT NULL,
    "hintcardtitles" VARCHAR[],
    "hintcardtext" VARCHAR[],

    CONSTRAINT "questionspk" PRIMARY KEY ("questionid")
);

-- CreateTable
CREATE TABLE "questionresponses" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "timesasked" INTEGER NOT NULL,
    "timescorrect" INTEGER NOT NULL,
    "timescorrectwithhint" INTEGER NOT NULL,
    "timesincorrect" INTEGER NOT NULL,
    "timesincorrectwithhint" INTEGER NOT NULL,
    "questionid" INTEGER NOT NULL,

    CONSTRAINT "questionresponses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_courseid_fkey" FOREIGN KEY ("courseid") REFERENCES "courselist"("courseid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "questionresponses" ADD CONSTRAINT "questionresponses_questionid_fkey" FOREIGN KEY ("questionid") REFERENCES "questions"("questionid") ON DELETE RESTRICT ON UPDATE CASCADE;
