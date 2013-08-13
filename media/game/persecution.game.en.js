// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "6cad57ce-3e12-4fcc-ab2c-bafa3ce07ee0";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "0.2";

/* The situations that the game can be in. Each has a unique ID. */

undum.game.situations.start = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.tag("h3", vorple.html.link( "start2", vorple.html.tag("center","Welcome to the celestial farce that is life."))));
    }    
});

undum.game.situations.start2 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.tag("h3", vorple.html.link( "start3", vorple.html.tag("center","Welcome to the " + vorple.html.quote("Mumlikat-e-Khudadad") + "(God Given state) Known as Pakistan."))));
    }    
});

undum.game.situations.start3 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.tag("h3", vorple.html.link( "start4", vorple.html.tag("center","Welcome to hell."))));
    }    
});

undum.game.situations.start4 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("ahmedi2", "Muhammad Ahmed")) +
                                vorple.html.tag("li", vorple.html.link("shiaplaceholder", "Syed Ali Zaidi")) +
                                vorple.html.tag("li",vorple.html.link("christianplaceholder", "Sarah Masih")) +
                                vorple.html.tag("li",vorple.html.link("hinduplaceholder", "Placeholder")),
                                {classes: "options"}));
    },
    exit: function(character, system, to) {
                system.setCharacterText(
                    vorple.html.p("You are an Ahmedi, aka Qadiani, the " + vorple.html.quote("Kafirs by constitution."))
                );
            }
});

// Ahmedi Storyline

undum.game.situations.ahmedi1 = new undum.SimpleSituation( vorple.html.p("You turn off the News and sit in the darkened room.  Your parents in the other room are asleep, but the news report has driven all idea of sleep from your mind.") + vorple.html.p( vorple.html.link( "ahmedi2", "You decide to turn in." )));

undum.game.situations.ahmedi2 = new undum.SimpleSituation( 
vorple.html.p("You couldn't really sleep...") + 
vorple.html.p("Tomorrow was a big day.  Your first lecture of the semester.  It was a new class, a fresh beginning, and it was going to feel good, being on stage.  Five years of grudging university work, getting through that PhD, facing the panel and defending your thesis, and then finally the decision to return to Pakistan and help your country.") + 
vorple.html.p("Your parents had been overjoyed, but also worried. And after the news today, you understood that feeling. How long before the very students and university you joined figured out your religious affiliations? How long before that became a problem?") + 
vorple.html.p("It was impossible to tell. And yet you were still excited, buoyed up by the enthusiasm of youth, the belief that it couldn't really happen to you.") + 
vorple.html.p(vorple.html.link("ahmedi3", "And with that thought, you get up and head to bed.")));

undum.game.situations.ahmedi3 = new undum.SimpleSituation(
vorple.html.tag('h2', vorple.html.tag( 'strong', "Six months later" )) + 
vorple.html.p("It is the sixth month since you returned and you are getting ready for work.  Things have gotten along pretty smoothly, and the fears you had on that night several months back all but faded from your mind. Your collegues are nice if distant, and the students fresh and teaching them challenging.") + 
vorple.html.p("Your phone beeps.") + 
vorple.html.p("It is a text from your old friend Kashifa, who is also studying for a PhD in a different department in the same university. She is a couple years younger than you and you bumped into her a week back and exchanged numbers." ) +
vorple.html.p("The text stares at you, waiting for a reply...") +
                        vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("./reply", "Reply")) +
                                vorple.html.tag("li",vorple.html.link("./notreply", "Don't Reply")),
                                {classes: "transient options"}),
{
        actions: {
            reply: vorple.html.p("You decide to reply. Kashifa had been a good friend and you had liked her from the beginning. It would be good to catch up again." + vorple.html.link("ahmedi4", "You decide to meet up for lunch.") + vorple.html.p("You head out to work, giving your little sister and brother a hug on the way out. they are getting ready for university and college respectively.")),
            notreply: vorple.html.p("You hesitate at first. What would Kashifa think of you, if she found out about you. But you remember that  Kashifa had been a good friend and you had liked her from the beginning. It would be good to catch up again." + vorple.html.link("ahmedi4", "You decide to meet up for lunch after all.") + vorple.html.p("You head out to work, giving your little sister and brother a hug on the way out. they are getting ready for university and college respectively."))
                 }
});

undum.game.situations.ahmedi4 = new undum.SimpleSituation(
vorple.html.tag('h2', vorple.html.tag( 'strong', "Two months later" )) + 
vorple.html.p("You're at a medical store. The doctor who prescribed the medicine for you has recommended this store as the most likely to carry the medicine you need, which is a fairly expensive imported cream. Your now-fiance Kashifa is waiting in the car outside, and you are full of food and the satisfaction of an evening spent with a beautiful woman.") + 
vorple.html.p("The man serving you at the counter is has a beard the size of a bush and an ingratiating smile. He sees your prescription and hurries off to get the medication.") +
vorple.html.p("When he returns, he glances at your name, written at the top of your prescription, and pauses. His whole demeanour, which was helpful and friendly uptil now, changes.") +
vorple.html.p(vorple.html.quote("Tum Qadiani ho?") + "(You are Ahmadi?)") +
vorple.html.p("You are stuck in a very difficult position..") + 
                        vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("./accept", "You nod.")) +
                                vorple.html.tag("li",vorple.html.link("./deny1", "You shake your head in denial.")),
                                {classes: "options transient"}),
{
        actions: {
            accept: vorple.html.p("You nod, fearfully, wondering what would happen now." + vorple.html.p("The man's face becomes a mask of rage. He yanks back the medicine from your outreaching hands, and spits " + vorple.html.quote("Get out! We don't serve your kind in here.") +
                                    vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("./retaliate", "You decide to fight back.")) +
                                vorple.html.tag("li",vorple.html.link("./noretaliate", "You decide to head back. You don't want any more trouble.")),
                                {classes: "options transient"}))),
            deny1: vorple.html.p("You deny the allegtion. The shopkeeper points at your name. " + vorple.html.quote("Your name. You are clearly Qadiani. Admit it.")) +
                                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("./accept", "You nod, hurt.")) +
                                vorple.html.tag("li",vorple.html.link("./deny2", "You keep denying...")),
                                {classes: "options transient"}),
            deny2: vorple.html.p("You still deny the allegation, despite it being true. The fear of reatliation, the combined hatred of the people against you forcing you to lie about who you are. " + vorple.html.link("./accept", "The menacing look in the shopkeeper's eyes forces you to admit the truth")),
            retaliate: vorple.html.p("You try to argue with the shopkeeper, telling him how you need the medicine, but the man won't even let you talk. A few other people gather to see the commontion. The man shouts " + vorple.html.quote("Qadiani Kutta!") + " and the people jump on you." + vorple.html.link("ahmedi5", "You barely manage to get away to your car...")),
            noretaliate: vorple.html.p(vorple.html.link("ahmedi5", "You become silent and leave. This wasn't something you were unaccustomed to. This wasn't the first time this happened and you were sure this wouldn't be the last time."))
                }
});

undum.game.situations.ahmedi5 = new undum.SimpleSituation( vorple.html.p("There is news about an Ahmadi mosque being ransacked, the Imam arrested and the congregation beaten.  It was the mosque in your neighbourhood, and if you hadn't decided to work late that day you would have been part of the congregation.  You are scared now, especially since more and more people were turning a cold shoulder to you at work, and there were rumours of a complaint going around about you. Even your fiance is distant these days, part out of fear and part out of ") +
vorple.html.p(vorple.html.link("ahmedi6", "Things seem to have gone from bad to worse." )));

undum.game.situations.ahmedi6 = new undum.SimpleSituation(vorple.html.tag("h3", "A few weeks later") +
vorple.html.p("You get fired from the job, on a false charge of 'spreading propaganda' in your classes, although to the best of your knowledge the only thing you've taught up til now has been theoretical physics.") +

vorple.html.p("You go home to find your worried parents telling you Kashifa has broken off the engagement.") +

vorple.html.p("Police arrive in the evening, to 'investigate' the charges. Your accounts have been frozen. After a gruelling week in jail, you are finally released, to go home without a job, without any money, without a fiance. Your parents are half dead from grief, your sister has been expelled from college.") +

vorple.html.p("You can barely stand to see yourself in the mirror. With no money, there is no chance of even escaping abroad again. And what about your parents? Your brother and sister? there was no escape even for them. There was no escape anywhere.") +

vorple.html.p(vorple.html.link("epilogue1", "In a fog of depression, you decide to end it all.")));

undum.game.situations.ahmedi7 = new undum.SimpleSituation( "<p>Hello world!</p>" );

// Hindu Storyline
undum.game.situations.hinduplaceholder = new undum.SimpleSituation( vorple.html.p("Coming soon, in Episode 4"));

undum.game.situations.hindu1 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.hindu2 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.hindu3 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.hindu4 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.hindu5 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.hindu6 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.hindu7 = new undum.SimpleSituation( "<p>Hello world!</p>" );


// Christian Storyline
undum.game.situations.christianplaceholder = new undum.SimpleSituation( vorple.html.p("Coming soon, in Episode 3"));

undum.game.situations.christian1 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.christian2 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.christian3 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.christian4 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.christian5 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.christian6 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.christian7 = new undum.SimpleSituation( "<p>Hello world!</p>" );

// Shia Storyline
undum.game.situations.shiaplaceholder = new undum.SimpleSituation( vorple.html.p("Coming soon, in Episode 2"));

undum.game.situations.shia1 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.shia2 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.shia3 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.shia4 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.shia5 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.shia6 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.shia7 = new undum.SimpleSituation( "<p>Hello world!</p>" );


// Epilogue

undum.game.situations.epilogue1 = new undum.SimpleSituation(vorple.html.p("This death really isn't the death of a person. It is the death of the whole nation. When violence and hatred becom our partners, nothing can save us from the ultimate destuction. It will chip away a us, until every majority will suffer the fate of these minorities." + vorple.html.p(vorple.html.link("epilogue2", "We must save the people, to ensure our survival"))));

undum.game.situations.epilogue2 = new undum.SimpleSituation(vorple.html.tag("h2", vorple.html.tag("strong", vorple.html.link("credits", "The End"))));

undum.game.situations.credits = new undum.SimpleSituation(vorple.html.tag("h3", "Credits:") + 
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Programmer\t") + vorple.html.tag("emph", "Ali Sajid Imami"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Writer\t") + vorple.html.tag("emph", "Shumaila Hashmi"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Illustrator\t") + vorple.html.tag("emph", "Sana Ahmad"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Project Coordinator\t") + vorple.html.tag("emph", "Urooj Shuja'at Ali Janjua"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Outreach Coordinator\t") + vorple.html.tag("emph", "Awais Ali"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Content Review and Editing\t") + vorple.html.tag("emph", "Nyda Ahmad"))) +
vorple.html.p( vorple.html.tag("center", "Thank you all for playing this adventure." ))
);


// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    vorple.core.init( system );
    system.setCharacterText(vorple.html.p("You don't know who you are"));
};
