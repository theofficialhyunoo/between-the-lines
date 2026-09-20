/* =========================================================
   UNSPOKEN
   Main JavaScript
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const landingView = document.getElementById("landingView");
const archiveView = document.getElementById("archiveView");
const thingsView = document.getElementById("thingsView");
const lettersView = document.getElementById("lettersView");
const letterReaderView = document.getElementById("letterReaderView");
const anotherUniverseView = document.getElementById("anotherUniverseView");
const onlyKnewView = document.getElementById("onlyKnewView");
const twoAMView =
    document.getElementById("twoAMView");



const transitionView = document.getElementById("transitionView");

const enterButton = document.getElementById("enterButton");
const returnBeginning = document.getElementById("returnBeginning");

const openThings = document.getElementById("openThings");
const backArchive = document.getElementById("backArchive");

const openLetters = document.getElementById("openLetters");
const backArchiveLetters = document.getElementById("backArchiveLetters");

const openOnlyKnew = document.getElementById("openOnlyKnew");
const backArchiveOnlyKnew = document.getElementById("backArchiveOnlyKnew");

const openAnotherUniverse =
    document.getElementById("openAnotherUniverse");

const backArchiveUniverse =
    document.getElementById("backArchiveUniverse");

    const open2AM =
    document.getElementById("open2AM");

const backArchive2AM =
    document.getElementById("backArchive2AM");

const twoAMThoughts =
    document.getElementById("twoAMThoughts");

const onlyKnewStack = document.getElementById("onlyKnewStack");
const onlyKnewPrevious = document.getElementById("onlyKnewPrevious");
const onlyKnewNext = document.getElementById("onlyKnewNext");
const onlyKnewProgress = document.getElementById("onlyKnewProgress");


const music = document.getElementById("backgroundMusic");

const confessionGrid = document.getElementById("confessionGrid");

const lettersGrid = document.getElementById("lettersGrid");

const backToLetters = document.getElementById("backToLetters");

const letterReaderNumber = document.getElementById("letterReaderNumber");
const letterReaderTitle = document.getElementById("letterReaderTitle");
const letterReaderBody = document.getElementById("letterReaderBody");

openAnotherUniverse.addEventListener("click", () => {
    showView(anotherUniverseView);
});

backArchiveUniverse.addEventListener("click", () => {
    showView(archiveView);
});

open2AM.addEventListener("click", () => {
    showView(twoAMView);
});

backArchive2AM.addEventListener("click", () => {
    showView(archiveView);
});


/* =========================================================
   VIEW CONTROLLER
========================================================= */

function showView(view) {

    document.querySelectorAll(".view").forEach((page) => {
        page.classList.remove("active");
    });

    view.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* =========================================================
   MUSIC
========================================================= */

function startMusic() {

    if (!music) return;

    music.volume = 0;

    const playPromise = music.play();

    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                let volume = 0;

                const fade = setInterval(() => {

                    volume += 0.02;

                    if (volume >= 0.35) {
                        volume = 0.35;
                        clearInterval(fade);
                    }

                    music.volume = volume;

                }, 80);

            })
            .catch(() => {
                /* Browser blocked playback */
            });

    }

}


/* =========================================================
   ENTER QUIETLY
========================================================= */

enterButton.addEventListener("click", () => {

    /* Music begins after user interaction */
    if (music && music.paused) {
        startMusic();
    }


    /* Show cinematic transition */

    transitionView.classList.add("active");

    transitionView.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
       Give the quote time to breathe.
       Then reveal the archive.
    */

    setTimeout(() => {

        showView(archiveView);

        document.body.classList.add("inside");

    }, 3200);


    /*
       Fade the transition screen away.
    */

    setTimeout(() => {

        transitionView.classList.remove("active");

        transitionView.setAttribute(
            "aria-hidden",
            "true"
        );

    }, 4300);

});


/* =========================================================
   RETURN TO LANDING
========================================================= */

returnBeginning.addEventListener("click", () => {

    document.body.classList.remove("inside");

    showView(landingView);

});


/* =========================================================
   OPEN — THINGS I NEVER SAID
========================================================= */

openThings.addEventListener("click", () => {

    showView(thingsView);

});


/* =========================================================
   BACK TO ARCHIVE
========================================================= */

backArchive.addEventListener("click", () => {

    showView(archiveView);

});

/* =========================================================
   OPEN — LETTERS I NEVER SENT
========================================================= */

openLetters.addEventListener("click", () => {

    showView(lettersView);

});


openOnlyKnew.addEventListener("click", () => {
    showView(onlyKnewView);
});

backArchiveOnlyKnew.addEventListener("click", () => {
    showView(archiveView);
});

/* =========================================================
   BACK TO ARCHIVE — LETTERS
========================================================= */

backArchiveLetters.addEventListener("click", () => {

    showView(archiveView);

});


/* =========================================================
   THINGS I NEVER SAID
   We'll start with 10 to test the design.
========================================================= */

const confessions = [

    "I think about you more often than I would ever admit to you.",

    "Sometimes I open our conversation just because seeing your name makes the distance feel a little smaller.",

    "I notice when you're gone, even when I pretend I don't.",

    "I miss you on days when I have absolutely no right to miss you.",

    "Every time you message me first, some stupid little part of me gets happy.",

    "I learned how to be patient because rushing you was never worth losing you.",

    "I know you have your own life. I just secretly wish there were a little more room for me in it.",

    "I never needed you to talk to me all day. I just liked knowing that somewhere in your day, you thought of me too.",

    "There were so many times I wanted to say I miss you, but I was afraid those three words would tell you everything else.",

    "I have typed messages to you and deleted them because sometimes caring about you means knowing what not to say.",

    "I wonder if you've ever looked at my name on your screen and smiled the way I do when I see yours.",

    "You have no idea how much the smallest things you do stay with me.",

    "I remember things you've probably already forgotten telling me.",

    "Sometimes one kind sentence from you can carry me through an entire day.",

    "I know your silence isn't always about me. I still have to remind my heart of that sometimes.",

    "There were nights I wanted to reach for you, but chose to leave you alone instead.",

    "I wanted to be someone you could come to without ever feeling like you owed me anything.",

    "When you were hurting, I wished there were something I could do besides exist thousands of kilometers away.",

    "If distance weren't real, there were days I would've brought you food, sat beside you, and asked for nothing more.",

    "When I told you I would be there, I meant it more seriously than you probably realized.",

    "I wasn't being nice just because I'm a nice person. Sometimes it was simply the only safe way I knew how to love you.",

    "I tried very hard not to make my feelings your responsibility.",

    "I wanted you without wanting to own you.",

    "I never wanted my feelings to become something heavy you had to carry.",

    "When you told me not to stop messaging you, you probably didn't know how badly I needed to hear that.",

    "When you said we'd be a great match, I carried those words much longer than I should have.",

    "When you said I could stay with you someday, my mind accidentally imagined a hundred ordinary moments that will probably never happen.",

    "I imagined Colombia before I had ever seen it, simply because you were there.",

    "Somehow a city thousands of kilometers away started feeling important to me because it contained you.",

    "I wondered what it would feel like to finally stand in front of you instead of seeing you through a screen.",

    "I imagined having dinner with you and pretending my heart wasn't doing something ridiculous across the table.",

    "I imagined hearing your voice without headphones between us.",

    "I imagined walking beside you somewhere in Bogotá and thinking, “So this is what all that distance was leading to.”",

    "I imagined meeting you halfway somewhere in the world.",

    "And secretly, I hoped halfway wouldn't be the closest we would ever get.",

    "Sometimes I looked at the sky and remembered that the same one eventually reaches you.",

    "It became my favorite way of making the distance sound less cruel.",

    "I don't know when exactly you became important to me. Somewhere between ordinary conversations, you just did.",

    "I wasn't looking for you. That's probably why finding you affected me so much.",

    "You became part of my days without ever really being part of my life.",

    "And I don't know how to explain how someone can feel so close while being so far away.",

    "I tried to detach from you more than once. I never completely knew how.",

    "Every time I thought I had finally put my feelings somewhere quieter, you'd say something sweet and I'd find them again.",

    "Sometimes I wished you would stop being so easy to care about.",

    "Sometimes I wished I could want you less. But I never did.",

    "There were moments when I wondered whether I was imagining something that only existed on my side.",

    "I wondered whether you knew.",

    "I was scared that telling you everything would turn something beautiful into something uncomfortable.",

    "I chose having you in my life quietly over risking losing you loudly.",

    "I told you I would support whatever made you happy. I meant it.",

    "I just never told you how difficult it might be for me if that happiness was someone else.",

    "I wanted to be mature enough to watch you choose somebody else and still be happy for you.",

    "Sometimes I wondered what they had that I didn't.",

    "Sometimes I hated that geography got a vote in something my heart never asked permission to feel.",

    "I knew there were people who could give you something I couldn't: proximity.",

    "I could only send words across an ocean and hope they arrived feeling warm.",

    "I never wanted to compete for you. I just wished, at least once, that life had made choosing me a little easier.",

    "I don't need you to choose me because I cared about you.",

    "But somewhere deep inside me, I desperately wanted to know what it would feel like if you did.",

    "Sometimes I asked myself, “When will someone choose me with the same certainty that I choose them?”",

    "And sometimes, selfishly, I wanted that someone to be you.",

    "I don't know what we are.",

    "Maybe we're nothing that needs a name.",

    "Maybe we're simply two people who found each other at a strange point in our lives.",

    "But whatever this was, it mattered to me.",

    "You mattered to me. More than I planned. Probably more than you will ever completely know.",

    "I don't regret meeting you, even if nothing ever comes from this.",

    "Some people don't have to stay forever to permanently change the way a certain season of your life feels.",

    "You became one of those people for me.",

    "If we never become anything more than this, I hope you never mistake my silence for a lack of feeling.",

    "My silence was full of you.",

    "There were entire paragraphs behind every simple “take care.”",

    "There was longing behind every “good morning.”",

    "There was tenderness behind every “how are you?”",

    "There was “I wish I were there” behind every time I asked whether you were okay.",

    "And sometimes there was “please don't disappear from my life” hiding behind a completely ordinary goodbye.",

    "Maybe one day you'll find this page. Maybe you'll recognize yourself between these lines.",

    "Maybe you'll finally understand why some of my words always seemed to carry something underneath them. And if you do, I hope you don't feel guilty.",

    "I hope you don't feel like you owe me a different ending.",

    "These feelings were mine. I chose to carry them gently.",

    "I never needed you to become mine for what I felt to have been real.",

    "I only wish there had been a universe where the distance was smaller, the timing kinder, and wanting each other was enough.",

    "In this one, I am simply grateful that somewhere in my life, there was you.",

    "I wanted it to be you. God, I really wanted it to be you.",


];


/* =========================================================
   CREATE CONFESSION TILES
========================================================= */

function createConfessionTiles() {

    if (!confessionGrid) return;

    confessionGrid.innerHTML = "";


    confessions.forEach((confession, index) => {

        const tile = document.createElement("article");

        tile.className = "confession-tile";


        const number =
            String(index + 1).padStart(2, "0");


        tile.innerHTML = `

            <div class="confession-top">

                <span class="confession-number">
                    ${number}
                </span>

                <span class="confession-category">
                    UNSAID
                </span>

            </div>


            <p class="confession-text">
                ${confession}
            </p>


            <div class="confession-actions">

                <span class="share-label">
                    SHARE
                </span>

                <button
                    class="share-button threads-share"
                    type="button"
                    data-index="${index}"
                >
                    THREADS ↗
                </button>

                <button
                    class="share-button story-share"
                    type="button"
                    data-index="${index}"
                >
                    IG STORY ↗
                </button>

            </div>

        `;


        confessionGrid.appendChild(tile);

    });

}


/* Build tiles when website loads */

createConfessionTiles();

/* =========================================================
   LETTERS I NEVER SENT
========================================================= */

const letters = [

    {
        title: "Somewhere Between Our Conversations",

        preview:
            "Somewhere between ordinary conversations, you became someone I started carrying through my days.",

        body: `
I don't know exactly when it happened.

I wish I did.

I wish there were one particular conversation I could return to and say, there. That was the moment you became something more to me.

But there isn't.

It happened quietly.

Somewhere between the ordinary conversations, the little things you told me about your day, the laughter, the silences, and all those moments that probably didn't seem important at the time, you became someone I started carrying with me.

I'd find myself thinking about something you said hours after we'd stopped talking.

I'd see something and wonder if it would make you laugh.

Some days, I'd catch myself hoping to see your name appear on my screen.

And whenever it did, there was this small happiness I never quite knew what to do with.

You didn't arrive loudly.

You didn't turn my world upside down.

You simply became part of it.

Slowly. Quietly.

And somehow, that felt even more dangerous.

Because by the time I realized how much you had come to mean to me, I was already afraid of saying too much.

There were so many things I wanted to tell you.

Things I almost typed.

Things I rewrote until they sounded smaller than what I actually felt.

Things I deleted because I was afraid that honesty might change something I had grown too fond of to lose.

So I learned to leave certain feelings between the lines.

To say take care when sometimes I meant I wish I could be there.

To ask how are you? when sometimes I meant you've been on my mind.

To say goodnight when a part of me wanted the conversation to last a little longer.

Maybe you never noticed.

Maybe you did.

I don't know which possibility scares me more.

But I never wanted my feelings to become something you had to carry just because I couldn't keep them to myself.

So I kept some of them here instead.

In words you were never expected to read.

In a little corner of the world where I could finally be honest without asking anything from you in return.

Maybe that's what this letter is.

Not a confession.

Not a question.

Not even something that needs an answer.

Just a place for all the words that wanted so badly to reach you, but loved what we had enough to stay quiet.

And if you ever find this someday, I hope you'll understand that somewhere between all those ordinary conversations,

you became anything but ordinary to me.

— HYUNOO
        `
    },

    {
        title: "If Distance Were Kinder",

        preview:
            "Sometimes I wonder what this would have looked like if the world had placed us a little closer.",

        body: `
Sometimes I wonder what this would have looked like if the world had placed us a little closer.

Not across oceans.

Not separated by time zones.

Not living in two different parts of the world where even something as simple as seeing you has to begin with a plane ticket.

I wonder what it would have been like to know you without all of that between us.

Maybe I would've asked you to dinner on an ordinary Friday, without having to imagine the flight first.

Maybe I would've brought you coffee just because I remembered how you liked it.

Maybe after a long day, I could've asked if you wanted to go somewhere, even if somewhere only meant sitting together and doing absolutely nothing.

Maybe I would've gotten to know the version of you that exists outside messages and calls.

The way you look when you're tired.

The things that make you laugh when you're not trying to be funny.

The songs you play when no one else is listening.

The places you go when you need to clear your head.

All those little things about a person that you only learn by being there.

I think that's what makes the distance difficult sometimes.

It's not only that you're far away.

It's knowing there are so many ordinary moments with you that I will probably never get to have.

I don't need anything extraordinary.

I don't need some perfect story.

Sometimes I just wish knowing you didn't have to happen from so far away.

Because there are moments when something happens in my day and my first thought is that I want to tell you.

There are places I see and wonder what they would feel like with you beside me.

There are nights when I look at the time and realize your day is only beginning while mine is already ending.

And somehow, we've learned to meet in the hours between.

Maybe that's why I've become so fond of the little time we do have.

Because with you, even something as ordinary as a conversation can feel like getting a few kilometers back.

And sometimes I let myself wonder.

If we lived in the same city, would we have found each other this way?

Would I have made you laugh?

Would you have gotten used to having me around?

Would there have been a favorite restaurant, a familiar street, a coffee shop where someone eventually knew our orders?

Would I have been able to look at you across a table instead of imagining what that would feel like?

I don't know.

Maybe nothing would have happened.

Maybe everything would have.

That's the part I'll probably always wonder about.

But there's something strangely beautiful about the fact that out of all the places we could have been born, all the lives we could have lived, and all the people we could have met, somehow I still found you.

From this far away.

And somehow, despite all those kilometers, you still became part of my days.

So no, I don't hate the distance.

I just wish it were kinder to us sometimes.

Kind enough to give me one ordinary day with you.

No countdown.

No flight home waiting.

No wondering when I'd see you again.

Just you somewhere close enough that seeing you wouldn't have to be a dream for someday.

I don't know what would have happened if life had placed us closer.

I only know that a small part of me will probably always wish it had given us the chance to find out.

— HYUNOO
        `
       },

    {
        title: "In All Your Seasons",

        preview:
            "I don't only want to know you when life is being gentle with you.",

        body: `
There is something I've never quite known how to say.

I don't only want the easy parts of knowing you.

Not only the conversations when you're happy, or the days when you have time, or the version of you that has enough energy to laugh and tell me about your day.

I want to know the quieter versions too.

The tired one.

The overwhelmed one.

The one who disappears for a while because life has become too loud.

The one who doesn't feel like talking.

The one who needs space without having to explain why.

I think that's one of the strangest things about caring for someone; you slowly realize that you don't just care about the parts of them that make you feel good.

You begin caring about the parts that have nothing to do with you at all.

Whether you've eaten.

Whether you've slept enough.

Whether something has been weighing on your mind.

Whether you've had at least one reason to smile that day.

And maybe I'll never be the person who gets to ask all of those things.

Maybe there will always be a line I shouldn't cross.

So sometimes I stay on my side of it and quietly hope you're okay.

I hope you know that my silence doesn't always mean I stopped thinking about you.

Sometimes silence is simply the gentlest way I know how to care.

Because I don't want to become another thing demanding something from you.

I don't want you to feel like you have to be present for me when you're struggling to be present for yourself.

And if there are days when all you can give the world is your absence, I hope you take them.

I'll never be angry with you for needing room to breathe.

I suppose what I'm trying to say is,

if I were ever lucky enough to know you beyond these scattered conversations, I wouldn't only want your spring.

I'd want your winters too.

Your changing skies.

Your quiet days.

Your storms.

The versions of you that bloom, and the versions that need time before they can.

Not because I think I could fix any of them.

I wouldn't want to.

I'd simply want you to know that you wouldn't have to be sunshine every day for me to still find something beautiful in the sky.

Maybe that's too much to say.

So I've never said it.

I just hope, wherever life takes you, there is always someone beside you who knows how to love your seasons without asking you to remain the same.

And in some quiet, selfish corner of my heart,

I wish I could be one of them.

— HYUNOO
        `
    }

];


/* =========================================================
   CREATE LETTER TILES
========================================================= */

function createLetterTiles() {

    if (!lettersGrid) return;

    lettersGrid.innerHTML = "";

    letters.forEach((letter, index) => {

        const tile = document.createElement("button");

        tile.className = "letter-tile";
        tile.type = "button";
        tile.dataset.index = index;


        const number =
            String(index + 1).padStart(2, "0");


        tile.innerHTML = `
            <div class="letter-tile-top">

                <span class="letter-number">
                    ${number}
                </span>

                <span class="letter-status">
                    UNSENT
                </span>

            </div>


            <div class="letter-tile-content">

                <h3>
                    ${letter.title}
                </h3>

                <p>
                    ${letter.preview}
                </p>

            </div>


            <span class="read-letter">
                READ LETTER →
            </span>
        `;


        lettersGrid.appendChild(tile);

    });

}


createLetterTiles();

/* =========================================================
   OPEN LETTER
========================================================= */

lettersGrid.addEventListener("click", (event) => {

    const tile = event.target.closest(".letter-tile");

    if (!tile) return;


    const index = Number(tile.dataset.index);

    const letter = letters[index];

    if (!letter) return;


    /* Number */

    letterReaderNumber.textContent =
        String(index + 1).padStart(2, "0");


    /* Title */

    letterReaderTitle.textContent =
        letter.title;


    /* Full letter */

    letterReaderBody.innerHTML = "";

    const paragraphs = letter.body
        .trim()
        .split(/\n\s*\n/);


    paragraphs.forEach((paragraph) => {

        const p = document.createElement("p");

        p.textContent = paragraph.trim();

        letterReaderBody.appendChild(p);

    });


    /* Open reader */

    showView(letterReaderView);

});


/* =========================================================
   BACK TO LETTERS
========================================================= */

backToLetters.addEventListener("click", () => {

    showView(lettersView);

});


/* =========================================================
   SHARE — THREADS
========================================================= */

document.addEventListener("click", (event) => {

    const threadsButton =
        event.target.closest(".threads-share");

    if (!threadsButton) return;


    const index =
        Number(threadsButton.dataset.index);

    const confession =
        confessions[index];


    const shareText =
        `${confession}\n\n— UNSPOKEN`;


    const threadsURL =
        "https://www.threads.net/intent/post?text=" +
        encodeURIComponent(shareText);


    window.open(
        threadsURL,
        "_blank",
        "noopener,noreferrer"
    );

});


/* =========================================================
   IF YOU ONLY KNEW
========================================================= */

const onlyKnewCards = [

    {
        text:
            "how often you cross my mind in the middle of completely ordinary days."
    },

    {
        text:
            "how seeing your name on my screen still gives me a little happiness I never know how to explain."
    },

    {
        text:
            "how many things I see throughout the day and immediately think, I want to show her this."
    },

    {
        text:
            "how many times I've wanted to tell you I missed you, but stayed quiet because I never wanted my feelings to become pressure."
    },

    {
        text:
            "how many messages I've typed, stared at for a while, and deleted because they sounded a little too much like the truth."
    },

    {
        text:
            "how often “how are you?” actually means “you've been on my mind.”"
    },

    {
        text:
            "how sometimes “take care” really means “I wish I could be there.”"
    },

    {
        text:
            "how sometimes “goodnight” means “I wish we could talk a little longer.”"
    },

    {
        text:
            "how much I remember. Little things you've said, stories you've told me, things you probably don't even remember telling me."
    },

    {
        text:
            "how much I've learned to appreciate the smallest pieces of your day simply because you chose to share them with me."
    },

    {
        text:
            "how your silence never makes me care about you any less. Sometimes I just miss you quietly until you come back."
    },

    {
        text:
            "how many times I've wanted to reach for you, but chose to give you space instead."
    },

    {
        text:
            "how difficult it can be to care this much while trying so hard to make it look effortless."
    },

    {
        text:
            "how often I've wished I could be closer, not for anything extraordinary, but just to know what an ordinary day beside you feels like."
    },

    {
        text:
            "how many imaginary cups of coffee, dinners, walks, and conversations I've already shared with you in my head."
    },

    {
        text:
            "how strange it is that someone so far away can somehow feel present in so many parts of my life."
    },

    {
        text:
            "how many songs became about you without you ever knowing."
    },

    {
        text:
            "how many times I've looked at the sky and thought about the fact that somewhere beneath it, there is you."
    },

    {
        text:
            "how careful I've been with my feelings because the last thing I ever wanted was for them to become something you had to carry."
    },

    {
        text:
            "how much I've tried to protect what we have, even when that meant keeping parts of myself quiet."
    },

    {
        text:
            "how scared I've been that saying too much might make me lose the little pieces of you I'm lucky enough to have."
    },

    {
        text:
            "how many times I've wondered if you already know."
    },

    {
        text:
            "how sometimes I think you do, and I wonder if that's why you've always been so gentle with me."
    },

    {
        text:
            "how many times I've told myself not to hope for anything and then caught myself hoping anyway."
    },

    {
        text:
            "how hard I've tried not to imagine a future that neither of us ever promised."
    },

    {
        text:
            "how badly a part of me wishes life had made this easier for us."
    },

    {
        text:
            "how much I wish distance were the only thing standing between what we are and what we could have been."
    },

    {
        text:
            "that I never needed you to feel the same way for what I felt to be real."
    },

    {
        text:
            "that even if nothing ever comes from this, meeting you will still be one of those things I'm quietly grateful happened to me."
    },

    {
        text:
            "how much of what I've written here was really just me finding different ways to talk about you without saying your name."
    },


    /* 31 */

    {
        title: "THE TRUTH",

        text:
            "I think somewhere along the way, I stopped wondering whether I liked you and started wondering what I was supposed to do with how much I did."
    },


    /* 32 */

    {
        title:
            "THE THING I NEVER WANTED TO ASK",

        text:
            "I never wanted my feelings to become a question you had to answer.\n\nBut somewhere inside me, there has always been one.\n\nCould you ever feel this too?"
    },


    /* 33 */

    {
        title:
            "THE ONE I COULDN'T SAY",

        text:
            "Of all the impossible things I could have wished for, somehow my heart settled on you.\n\nAnd God, I really wanted it to be you."
    },


    /* 34 */

    {
        title:
            "IF YOU EVER FIND THIS",

        text:
            "Please don't feel like you owe me anything.\n\nNot an explanation.\nNot an apology.\nNot the same feelings.\n\nJust know that somewhere in this world, someone was incredibly grateful to have met you.\n\nAnd for a little while, that someone carried you through almost every ordinary day.",

        signature:
            "— HYUNOO"
    }

];

let currentOnlyKnewCard = 0;


function renderOnlyKnewStack() {

    if (!onlyKnewStack) return;

    onlyKnewStack.innerHTML = "";


    const total =
        onlyKnewCards.length;


    /*
    Show the current card plus
    a few cards underneath it.
    */

    for (let offset = 3; offset >= 0; offset--) {

        const index =
            currentOnlyKnewCard + offset;

        if (index >= total) {
            continue;
        }


        const cardData =
            onlyKnewCards[index];


        const card =
            document.createElement("article");


        card.className =
            "only-knew-card";


        card.style.setProperty(
            "--stack-position",
            offset
        );


        const number =
            String(index + 1)
                .padStart(2, "0");


        const title =
            cardData.title ||
            "IF YOU ONLY KNEW";


        card.innerHTML = `
            <div class="only-knew-card-number">
                ${number}
            </div>

            <div class="only-knew-card-content">

                <p class="only-knew-card-title">
                    ${title}
                </p>

                <p class="only-knew-card-text"></p>

                ${
                    cardData.signature
                        ? `
                            <p class="only-knew-signature">
                                ${cardData.signature}
                            </p>
                        `
                        : ""
                }

            </div>
        `;


        const textElement =
            card.querySelector(
                ".only-knew-card-text"
            );


        textElement.textContent =
            cardData.text;


        /*
        Only the front card can
        be clicked.
        */

        if (offset === 0) {

            card.classList.add(
                "is-front"
            );


            card.addEventListener(
                "click",
                () => {

                    if (
                        currentOnlyKnewCard <
                        total - 1
                    ) {

                        currentOnlyKnewCard++;

                        renderOnlyKnewStack();

                    }

                }
            );

        }


        onlyKnewStack.appendChild(card);

    }


    onlyKnewProgress.textContent =
        `${String(currentOnlyKnewCard + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;


    onlyKnewPrevious.disabled =
        currentOnlyKnewCard === 0;


    onlyKnewNext.disabled =
        currentOnlyKnewCard ===
        total - 1;

}
onlyKnewPrevious.addEventListener(
    "click",
    () => {

        if (currentOnlyKnewCard > 0) {

            currentOnlyKnewCard--;

            renderOnlyKnewStack();

        }

    }
);


onlyKnewNext.addEventListener(
    "click",
    () => {

        if (
            currentOnlyKnewCard <
            onlyKnewCards.length - 1
        ) {

            currentOnlyKnewCard++;

            renderOnlyKnewStack();

        }

    }
);


renderOnlyKnewStack();


/* =========================================================
   2:00 AM THOUGHTS
========================================================= */

const twoAMEntries = [

    {
        time: "2:03 AM",
        position: "center",
        text: `I miss you tonight.

There. I said it somewhere.

Just not to you.`
    },

    {
        time: "2:06 AM",
        position: "left",
        text: `I wonder if you ever think about me when we're not talking.

Not for any particular reason.

Just because something reminded you of me.`
    },

    {
        time: "2:09 AM",
        position: "right",
        text: `Sometimes I see your name on my screen and smile before I've even read what you said.

You probably don't know that.`
    },

    {
        time: "2:12 AM",
        position: "left",
        text: `I wonder if you've ever wanted to message me and stopped yourself.

I do that with you more than I'd like to admit.`
    },

    {
        time: "2:15 AM",
        position: "right",
        text: `Sometimes I reread our conversations.

Not because I've forgotten what we said.

I just like visiting moments where you were there.`
    },

    {
        time: "2:18 AM",
        position: "center",
        text: `I wonder what it feels like to be missed by you.`
    },

    {
        time: "2:21 AM",
        position: "left",
        text: `There are so many things I want to tell you during the day.

Then I think about whether I'm being too much.

So I keep them to myself.

And somehow they always find me again at night.`
    },

    {
        time: "2:24 AM",
        position: "right",
        text: `I know your silence isn't always about me.

But sometimes I still look at my phone hoping it's you.`
    },

    {
        time: "2:27 AM",
        position: "left",
        text: `I keep telling myself not to expect anything from you.

My heart is apparently terrible at following instructions.`
    },

    {
        time: "2:30 AM",
        position: "right",
        text: `Sometimes I wish you were closer.

Not because I need some grand romantic moment.

I just want to know what an ordinary day with you feels like.`
    },

    {
        time: "2:33 AM",
        position: "left",
        text: `I want coffee with you.

Dinner after a long day.

Walking somewhere without anywhere important to go.

Sitting beside you while we're both doing completely different things.

Nothing extraordinary.

Just the kind of moments distance doesn't let us have.`
    },

    {
        time: "2:36 AM",
        position: "right",
        text: `I wonder if you know how carefully I hold you.

How often I choose not to say something because I'd rather keep you comfortable than make my feelings known.`
    },

    {
        time: "2:39 AM",
        position: "left",
        text: `Sometimes I think I should let this go.

Then you talk to me again.

And somehow all the progress I thought I'd made disappears behind one stupid smile.`
    },

    {
        time: "2:41 AM",
        position: "center",
        text: `I wonder if you know.

Maybe that's the question underneath everything I've written here.

Do you know?`
    },

    {
        time: "2:42 AM",
        position: "right",
        text: `And if you do...

why have you always been so gentle with me?`
    },

    {
        time: "2:43 AM",
        position: "left",
        text: `I think about meeting you more than I tell you.

And sometimes I wonder what will happen when you're finally standing in front of me.

What if everything I've been trying to keep quiet suddenly becomes impossible to hide?`
    },

    {
        time: "2:44 AM",
        position: "right",
        text: `What if you hug me and I have to pretend it doesn't mean everything to me?`
    },

    {
        time: "2:45 AM",
        position: "left",
        text: `What if we sit across from each other at dinner and I look at you and think,

Oh.

It's really you.

The person I've been missing from the other side of the world.`
    },

    {
        time: "2:46 AM",
        position: "right",
        text: `Maybe that's what scares me.

Not that meeting you will change how I feel.

That it won't.

That I'll finally be close enough to you and realize I somehow feel even more.`
    },

    {
        time: "2:47 AM",
        position: "left",
        text: `Sometimes I wish I could ask you one question without anything changing afterward.

Could you ever see me the way I see you?

I don't need an answer tonight.

Maybe I never will.`
    },

    {
        time: "2:51 AM",
        position: "right",
        text: `I don't know what this is going to become.

Maybe nothing.

Maybe something.

Maybe you'll simply be someone I met at exactly the wrong distance and exactly the right time.

But whatever happens, I'm glad our lives crossed.`
    },

    {
        time: "2:54 AM",
        position: "left",
        text: `I think that's enough honesty for one night.

Tomorrow I'll wake up.

I'll go back to being sensible.

I'll talk to you normally.

And you'll probably never know I spent part of tonight thinking about you.`
    },

    {
        time: "2:57 AM",
        position: "center",
        text: `One last thing.

If by some impossible coincidence you're awake somewhere thinking about me too...

I hope you know I would've stayed up a little longer.`
    }

];

function createTwoAMTimeline() {

    if (!twoAMThoughts) return;

    twoAMThoughts.innerHTML = "";


    twoAMEntries.forEach((entry) => {

        const thought =
            document.createElement("article");


        thought.className =
            `two-am-entry two-am-${entry.position}`;


        const time =
            document.createElement("p");

        time.className =
            "two-am-time";

        time.textContent =
            entry.time;


        const text =
            document.createElement("p");

        text.className =
            "two-am-text";

        text.textContent =
            entry.text;


        thought.appendChild(time);
        thought.appendChild(text);

        twoAMThoughts.appendChild(thought);

    });

}


createTwoAMTimeline();