

const caracater = ['lisa', 'bart', 'homer', 'flanders']
const messagesL = ["'Does It Make You Feel Superior To Tear Down People's Dreams?",
    "Bart, The Only Reason To Apologize Is If You Look Deep Down Inside Yourself And You Find A Spot, Something You Wish Wasn’t There, Because You Feel Bad You Hurt Your Sister’s Feelings.", "Remember, Dad. All Glory Is Fleeting.",
    "Pablo Neruda Said, 'Laughter Is The Language Of The Soul.", "Daaaad!", "Quit it, Bart!"]

const messagesB = ["Eat My Shorts!", "Don't Have a Cow, Man!", "¡Ay, caramba!", "Get Bent.", "I'm Bart Simpson, Who the Hell are You?", "Cowabunga!",
    "I Didn't Do it", "Nobody saw me do it. You can't prove anything!", "Aw, Man!"]

const messagesH = ["D'oh!", "Woo Hoo!", "Mmm, donuts.", "Aaargh!", "Stupid Flanders.", "BART!", "Boring!", "Whatever, I'll be at Moe's."]

const messagesF = ["Hi-Diddily-Ho!", "Okily Dokily!", "Toodily-Doo", "What can I ding-dong-diddily-do for you?", "Kids, did anybody pray for giant shoes! ?"]


const ranRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}



switch (caracater[ranRange(0, caracater.length)]) {
    case "lisa":
        console.log("Lisa: ", messagesL[ranRange(0, messagesL.length)])
        break;
    case "bart":
        console.log("Bart: ", messagesB[ranRange(0, messagesB.length)])
        break;
    case "homer":
        console.log("Homer says:", messagesH[ranRange(0, messagesH.length)])
        break;
    case "flanders":
        console.log("Falnders says:", messagesF[ranRange(0, messagesF.length)])
        break;

}
