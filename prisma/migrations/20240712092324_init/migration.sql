-- CreateTable
CREATE TABLE "highscores" (
    "playerid" SERIAL NOT NULL,
    "playername" VARCHAR(25) NOT NULL,
    "numberturns" INTEGER NOT NULL,
    "gameplayed" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "highscorespk" PRIMARY KEY ("playerid")
);

-- CreateTable
CREATE TABLE "questions" (
    "questionid" SERIAL NOT NULL,
    "badgeicon" VARCHAR(100) NOT NULL,
    "questiontype" INTEGER NOT NULL,
    "questiontext" VARCHAR(255) NOT NULL,
    "options" VARCHAR[],
    "optionstoselect" INTEGER NOT NULL,
    "answeridx" INTEGER[],
    "hintind" INTEGER NOT NULL,
    "hinttxt" VARCHAR(255) NOT NULL,
    "hinttxt1" VARCHAR(255),
    "hinttxt2" VARCHAR(255),
    "hintcards" INTEGER NOT NULL,
    "hintcardtitles" VARCHAR[],
    "hintcardtext" VARCHAR[],

    CONSTRAINT "questionspk" PRIMARY KEY ("questionid")
);
