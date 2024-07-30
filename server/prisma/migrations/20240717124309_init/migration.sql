-- CreateTable
CREATE TABLE "courselist" (
    "courseid" INTEGER NOT NULL,
    "coursename" VARCHAR(255) NOT NULL,
    "badgeicon" VARCHAR(100) NOT NULL,

    CONSTRAINT "coursepk" PRIMARY KEY ("courseid")
);

-- CreateTable
CREATE TABLE "highscores" (
    "playerid" SERIAL NOT NULL,
    "playername" VARCHAR(25) NOT NULL,
    "boardname" VARCHAR(25) NOT NULL,
    "numberturns" INTEGER NOT NULL,
    "dateplayed" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "highscorespk" PRIMARY KEY ("playerid")
);

-- CreateTable
CREATE TABLE "questions" (
    "questionid" SERIAL NOT NULL,
    "courseid" INTEGER NOT NULL,
    "quiznumber" INTEGER NOT NULL,
    "questiontype" INTEGER NOT NULL,
    "questiontext" VARCHAR(255) NOT NULL,
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

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_courseid_fkey" FOREIGN KEY ("courseid") REFERENCES "courselist"("courseid") ON DELETE NO ACTION ON UPDATE NO ACTION;
