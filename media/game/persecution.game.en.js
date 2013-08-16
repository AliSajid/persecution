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
        system.write(vorple.html.tag("center", vorple.media.image('title-small.jpg')));
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
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and, thus, you deserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("ahmedi1", "Muhammad Ahmed")) +
                                vorple.html.tag("li", vorple.html.link("shia1", "Syed Ali Zaidi")) +
                                vorple.html.tag("li",vorple.html.link("christian1", "Sarah Masih")) +
                                vorple.html.tag("li",vorple.html.link("hindu1", "Avinash Khatri")),
                                {classes: "options"}));
    },
    exit: function(character, system, to) {
        switch(to)
        {
            case 'ahmedi1':
            system.setCharacterText(vorple.html.p("You are an Ahmedi, aka Qadiani, the " + vorple.html.quote("Kafirs by constitution.")));
            break;
            case 'shia1':
            system.setCharacterText(vorple.html.p("You are, as per the slogan, a Kafir Shi'a, and Wajib-ul-Qatl"));
            break;
            case 'christian1':
            system.setCharacterText(vorple.html.p("You are a christian, one of the " + vorple.html.quote("people of the book") + " who are forced to do jobs that the Good Clean People of Pakistan would rather not."));
            break;
            case 'hindu1':
            system.setCharacterText(vorple.html.p("You are, as per the slogan, a Kafir Shi'a, and Wajib-ul-Qatl"));
            break;
            default:
            system.setCharacterText(vorple.html.p("You will have to wait for the other people to appear."));
        }

                
}});

// Ahmedi Storyline

undum.game.situations.ahmedi1 = new undum.SimpleSituation(vorple.html.p("You turn off the News and sit in the darkened room.  Your parents in the other room are asleep, but the news report has driven all idea of sleep from your mind.") + vorple.html.p( vorple.html.link( "ahmedi2", "You decide to turn in." ))
    );

undum.game.situations.ahmedi2 = new undum.SimpleSituation( 
vorple.html.p("You can't really sleep...") + 
vorple.html.p("Tomorrow was a big day.  Your first lecture of the semester.  It was a new class, a fresh beginning, and it was going to feel good, being on stage.  Five years of grudging university work, getting through that PhD, facing the panel and defending your thesis,  and then, finally, the decision to return to Pakistan, and help your country.") + 
vorple.html.p("Your parents had been overjoyed, but also worried. And after the news today, you understood that feeling. How long before the very students and university you joined figured out your religious affiliations? How long before that became a problem?") + 
vorple.html.p("It was impossible to tell. And yet you were still excited, buoyed by the enthusiasm of youth, the belief that it couldn't really happen to you.") + 
vorple.html.p(vorple.html.link("ahmedi3", "And with that thought, you get up and head to bed.")));

undum.game.situations.ahmedi3 = new undum.SimpleSituation(
vorple.html.tag('h2', vorple.html.tag( 'strong', "Six months later" )) + 
vorple.html.p("It is the sixth month since you returned and you are getting ready for work.  Things have gotten along pretty smoothly, and the fears you had that night several months back all but faded from your mind.  Your colleagues are nice, if distant, the students, fresh, and teaching them, challenging.") + 
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
vorple.html.p("You're at a medical store. The doctor who prescribed the medicine for you has recommended this store as the most likely to carry the medicine you need, which is a fairly expensive imported cream. Your now-fiancée, Kashifa, is waiting in the car outside, and you are full of food and the satisfaction of an evening spent with a beautiful woman.") + 
vorple.html.p("The man serving you at the counter has a beard the size of a bush and an ingratiating smile. He sees your prescription and hurries off to get the medication.") +
vorple.html.p("As he is handing you your medication, he sees your ring and pauses. He stares at the Quranic verse etched onto the ring. His whole demeanour, which was helpful and friendly up until now, changes.") +
vorple.html.p(vorple.html.quote("Tum Qadiani ho?") + "(Are you Qadiani?)") +
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
            deny1: vorple.html.p("You deny the allegtion. The shopkeeper points at your ring. " + vorple.html.quote("Your ring. You are clearly Qadiani. Admit it.")) +
                                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("./accept", "You nod, hurt.")) +
                                vorple.html.tag("li",vorple.html.link("./deny2", "You keep denying...")),
                                {classes: "options transient"}),
            deny2: vorple.html.p("You still deny the allegation, despite it being true. The fear of reatliation, the combined hatred of the people against you forcing you to lie about who you are. " + vorple.html.link("./accept", "The menacing look in the shopkeeper's eyes forces you to admit the truth")),
            retaliate: vorple.html.p("You try to argue with the shopkeeper, telling him how you need the medicine, but the man won't even let you talk. A few other people gather to see the commontion. The man shouts " + vorple.html.quote("Qadiani Kutta!") + " and the people jump on you." + vorple.html.link("ahmedi5", "You barely manage to get away to your car...")),
            noretaliate: vorple.html.p(vorple.html.link("ahmedi5", "You become silent and leave. This wasn't something you were unaccustomed to. This wasn't the first time this happened and you were sure this wouldn't be the last time."))
                }
});

undum.game.situations.ahmedi5 = new undum.SimpleSituation( vorple.html.p("There is news about an Ahmadi mosque being ransacked, the Imam arrested and the congregation beaten.  It was the mosque in your neighbourhood, and if you hadn't decided to work late that day you would have been part of the congregation.  You are scared now, especially since more and more people were turning a cold shoulder to you at work, and there were rumours of a complaint going around about you. Even your fiance is distant these days, part out of fear and part out of distaste...") +
vorple.html.p(vorple.html.link("ahmedi6", "Things seem to have gone from bad to worse." )));

undum.game.situations.ahmedi6 = new undum.SimpleSituation(vorple.html.tag("h3", "A few weeks later") +
vorple.html.p("You get fired from the job, on a false charge of 'spreading propaganda' in your classes, although to the best of your knowledge the only thing you've taught up til now has been theoretical physics.") +

vorple.html.p("You go home to find your worried parents telling you Kashifa has broken off the engagement.") +

vorple.html.p("Police arrive in the evening, to 'investigate' the charges. Your accounts have been frozen. After a gruelling week in jail, you are finally released, to go home without a job, without any money, without a fiance. Your parents are half dead from grief, your sister has been expelled from college.") +

vorple.html.p("You can barely stand to see yourself in the mirror. With no money, there is no chance of even escaping abroad again. And what about your parents? Your brother and sister? there was no escape even for them. There was no escape anywhere.") +

vorple.html.p(vorple.html.link("epilogue1", "In a fog of depression, you decide to end it all.")));

undum.game.situations.ahmedi7 = new undum.SimpleSituation( "<p>Hello world!</p>" );

// Hindu Storyline
undum.game.situations.hinduplaceholder = new undum.SimpleSituation( vorple.html.p(vorple.html.link("credits","Coming soon, in Episode 4")));

undum.game.situations.hindu1 = new undum.SimpleSituation(
    vorple.html.p("You step out of the warm water, wrapping a towel around yourself as you move out of the bathroom and into the cool of the shaded room. You get dressed quickly and absentmindedly, your mind half engaged in thoughts about the deal to go through with the PAK-SAR company in the evening.")  +
    vorple.html.p("Adjusting your loose shalwar kameez and slipping on rubber sandals, you pad your way to the dining room, where your lovely wife has just set out the food.") +
    vorple.html.p("In the past ten years, you have tried as much as possible to eat your meals at home. not only was the fatty cooking available outside grossly, proudly non-vegetarian, but also loaded with all sorts of chemicals and injurious to health. You had not gotten to the age of 48 with a perfectly clean arteries by indulging in That gross stuff every day.") +
    vorple.html.p("Your wife serves you in silence, recognising your abstraction and knowing better than to bother you while your mind and mouth was full. ") +
    vorple.html.p("As you finish your meal, you heave a sigh. You debate cancelling the early evening meetings and taking a short afternoon rest." + vorple.html.link("hindu2" ," But in the end you head off back to work anyway."))
);

undum.game.situations.hindu2 = new undum.SimpleSituation(
    vorple.html.p("Taking your meals at home also allows you to meet your children, which you wouldn't be able to otherwise since you usually return home really late. Here they come running through the door,  your little boy Ravi, and your two daughters, Pooja and Tanya. They are both growing so fast, from the clumsy, rowdy ducklings they were but days ago, elongating like swans into beautiful elegant young women. It makes your heart rise to see them. After all, this is your family. This is who you work so hard for every day. ") +
    vorple.html.p("You give them all a hug, a kiss and then make your way out. Your driver, a grinning young muslim man you've just hired, brings the children's bags in, then comes back out and drives you to the office.") +
    vorple.html.p(vorple.html.link("hindu3", "You smile. Life seems good."))
);

undum.game.situations.hindu3 = new undum.SimpleSituation(
    vorple.html.p("The head of the PAK SAR man is a balding gentleman, fidgeting and slightly sweating despite the air conditioned room. He looks as though he would like to loosen his tie, but refrains from doing so. You smile at him to try to put him at his ease, but this seems to increase his discomfort. ") +
    vorple.html.quote("The fact of the matter is, Mr Khatri, my shareholders are unwilling for us to do this deal with you. The matter is a little sensitive. That is why I have come to you in person. The fact is, no negotiations on the matter are even allowed to be held. They simply want me to pull out.") +
    vorple.html.p("You lean back. This comes as a blow. You were keen on getting this contract, which had been a difficult one to pull off, but which would have benefited you greatly. ") +
    vorple.html.quote("But surely there is something we can work out? Is there a problem with the services?") +
    vorple.html.quote("No, no. You are the best company we have been contracted by. My stakeholders, ah, have a problem with your...well your religious affiliations.") +
    vorple.html.p("You are disappointed but not surprised." + vorple.html.quote("Mr Ahmed, I have spent all my life doing this line of work. As i see it, business is business, and religious affiliations matter least when you are set to make a profit.")) +
    vorple.html.p("Mr Ahmed looks even more upset." + vorple.html.quote("I understand, Mr Khatri. I am a man of business myself. My shareholders, however, are men of principle. They will not bend. I am very sorry. There is nothing more I can do. ")) +
    vorple.html.p("He gets up, looks about to reach over to shake your hand, then thinks better of it. He nods and walks briskly out of the office. ") +
    vorple.html.p(vorple.html.link("hindu4", "You are left slightly worried and confused."))
);

undum.game.situations.hindu4 = new undum.SimpleSituation(
    vorple.html.tag("h3","Next week") +
    vorple.html.p("You are finishing off the last of your meal when Ravi bursts into the room, his small face besmirched with tears, round and red and angry. He flings himself in your lap and sobs there. ") +
    vorple.html.p("Pooja and Tanya come into the room after him, slower and more calmly, though even they look upset. You ask them what happened, and while their mother looks on, they tell you about how students in Ravi's class had been refusing to play with him for a week. That break, they had taken to calling him all sorts of names and teasing him about being a hindu. When he got upset and lashed out at one of them, he was the one reprimanded and punished.") +
    vorple.html.p("You find yourself shaking with fury, but your wife lays a calming hand on your shoulder. She picks up the distraught boy and murmuring soothing words, carries him into the kid's room. The girls follow, leaving you alone with your buzzing thoughts.") +
    vorple.html.p(vorple.html.link("hindu5","You try to console him, to no avail..."))
);

undum.game.situations.hindu5 = new undum.SimpleSituation(
    vorple.html.tag("h3","A few months later...")+
    vorple.html.p("It is while you are in your office that you get the phone call from your wife. Pooja has disappeared.  She had not arrived to school that morning and no one had any idea where she was. Your usually calm wife is completely distraught. You promise to phone everywhere she could possibly be, and to file a police report on the way home. ")+
    vorple.html.p("An agonising week later, you get a phone call from police. They have found your daughter at the house of a local cleric. They claims she has converted 'out of free will' and married the cleric's son. You are not allowed to meet her.") +
    vorple.html.p("You are devastated, but determined to seek help for this.") +
    vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("hindu6", "Seek Legal Help  from the Human Rights Commision Pakistan")) +
                                vorple.html.tag("li",vorple.html.link("hindu7", "Give up. Your life has been completely dismantled.")),
                                {classes: "transient options"}));

undum.game.situations.hindu6 = new undum.SimpleSituation(
    vorple.html.p("You chase lawyers all around the country, sparing no cost, but no lawyer would take your case. Their position is that the case is basicall impossible under Pakistani Law. Once converted to Islam, you can not convert back to your original religion.") + 
    vorple.html.p("You go to the Human Rights Commission, begging them to recover your poor daughter but they are as powerless as you. They take your case but it gets thrown out immediately. One by one, all your hopes are gone.") +
    vorple.html.p(vorple.html.link("hindu7","You break down crying one day in front of the courts..."))
);

undum.game.situations.hindu7 = new undum.SimpleSituation(
    vorple.html.p("This is the last straw for you. You close down your business, sell off your house cheaply and leave for India.  It seems wrong to subject your family to the sufferings of refugee camps but the only thought in your head is of your beautiful daughter, laughing against the light, her childhood, innocence and life all stolen from her. ") +
    vorple.html.p("The camps are poorly equipped, overcrowded and terribly unsanitary. The rough living takes its toll on you, and within a week you are coughing with the worst cough of your life. Still you struggle on, trying to arrange matters, contact distant family, find a better place to live, a meagre job to support yourself and your family. ") +
    vorple.html.p("Your body refuses to continue the struggle. You feel it growing weaker, the cough and the fever setting fire to your blood. The strength ebbs from your body.  You cannot struggle any longer...") +
    vorple.html.p(vorple.html.link("epilogue1", "Avinash Khatri is no more. What's left is just another statistic."))
);

undum.game.situations.hindu8 = new undum.SimpleSituation( "<p>Hello world!</p>" );

// Christian Storyline
undum.game.situations.christianplaceholder = new undum.SimpleSituation( vorple.html.p(vorple.html.link("credits","Coming soon, in Episode 3")));

undum.game.situations.christian1 = new undum.SimpleSituation(vorple.html.p("You wake up in a tiny room. Out of the window you can see the first rays of the dawning sun creeping over the rim of the horizon, peeping between the irregularly built houses of your colony, touching the rooftops with orange fingers, and swiftly melding into golden yellow. In the room, your two sisters are still sleeping, and you have learnt over the past year how to get ready so as not to disturb them. ") +
vorple.html.p("You wash your face, brush your hair quickly, don your white uniform, and pick up your books.") +
vorple.html.p("It is a new day in a new ward, and you are excited for the classes and the chance to learn. Of course the matron in this ward is supposed to be pretty strict, but you are, on the whole, hardworking and brilliant, not to mention determined to get past tough exteriors to impress the hearts within. ") +
vorple.html.p(vorple.html.link("christian2", "Continue...")));

undum.game.situations.christian2 = new undum.SimpleSituation(vorple.html.p("On the way out, you quickly look into see your paralyzed father, check his sores, and give him a turn in the bed and a quick kiss before leaving. Your mother, tired from working at the factory all day and well into the night, is sleeping peacefully. ") +
vorple.html.p("Rashid, your cousin, is waiting outside on his bike, right on time as usual. Your heart leaps as you see him, and you skip down the rough steps, pulling the door closed behind you. ") +
vorple.html.p("Sitting sidesaddle, clutching onto Rashid, the wind from the rushing cycle always makes you feel like a bird in flight. It is a new and beautiful day.") +
vorple.html.p(vorple.html.link("christian3", "Continue...")));

undum.game.situations.christian3 = new undum.SimpleSituation(vorple.html.p("The Matron has already shown you how to place an IV line, and when you perfectly place the line in an old man's crinkly hand, even her stern face cracks into a smile. She tells you to properly dispose of the medical waste and briskly walks off.") +
vorple.html.p("The patient is a decrepit old man, who was lying peacefully and quietly while the matron was there. As soon as she rounds the bend, however, he reaches out to grab your hand.") +
vorple.html.p("What do you do?", {classes: 'transient'}) +
vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("./shout", "You Shout!")) +
                                vorple.html.tag("li",vorple.html.link("./dontshout", "You freeze, too surprised to react")),
                                {classes: "transient options"}),
{
        actions: {
            shout: vorple.html.quote("You shout and pull away. As you look back, you see his hands beneath his sheet, obviously masturbating. You run out of the ward.") + 
            vorple.html.p("There is no one in this part of the ward that has witnessed this act.") +
            vorple.html.p("You feel violated. What do you do now?", {classes: 'transient'}) +
            vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("./complain", "Complain to the Matron")) +
                                vorple.html.tag("li", vorple.html.link("./dontcomplain", "Do Nothing")),
                                {classes: "transient options"}),
            dontshout: vorple.html.p("You freeze. Too surprised to react.") + vorple.html.p("He grins at you with a leer, and reaches out with his other hand and quickly gives your breast a squeeze. Horrified you pull back and run off. As you look back, you see his hands beneath his sheet, obviously masturbating. ") + 
            vorple.html.p("There is no one in this part of the ward that has witnessed this act.") +
            vorple.html.p("You feel violated. What do you do now?", {classes: 'transient'}) +
            vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("./complain", "Complain to the Matron")) +
                                vorple.html.tag("li",vorple.html.link("./dontcomplain", "Pretend that nothing happened.")),
                                {classes: "transient options"}),
            complain: vorple.html.p("You decide to decide to complain to the Matron. The Matron calls you a liar, saying that the patient is a ver respectable person in the community.") + vorple.html.p(vorple.html.link("christian4", "You get sent home for the day for being \"hysteric\".")),
            dontcomplain: vorple.html.p(vorple.html.link("christian4", "You decide to let it go. This doesn't really seem like the thing anyone would believe and you would probably get ridiculed. Plus, the honor of your family is at stake."))
                 }
});

undum.game.situations.christian4 = new undum.SimpleSituation(vorple.html.p("You go home that night to find out Rashid has been arrested by local police. He had gotten into a fight with his foreman at the factory and the man had accused him of blasphemy. Your heart sinks. Conditions are bad already and you go to sleep scared and worried.") + 
    vorple.html.p(vorple.html.link("christian5", "You sleep fitfully, nightmares keeping you trapped but restless."))
);

undum.game.situations.christian5 = new undum.SimpleSituation(vorple.html.p("You wake up in the night to the sounds of screams and the smell of fire and smoke. There is a fire somewhere nearby. Your sisters wake up and are screaming, your parents are outside and there is noise and darkness and orange stifling smoke everywhere. You realise that the fire has caught from the lower floors and there is no way out but the window. You quickly pass down your sisters from the window, making them jump into the arms of bystanders below, hoping your parents and your brothers got out safely. ") +
vorple.html.p("You turn back to get your books, not wanting to leave them to be burnt, when the smoke overcomes you and the world turns black. You faint and know no more.") +
vorple.html.p(vorple.html.link("epilogue1", "Sarah Masih is gone. What's left is just another statistic.")));

undum.game.situations.christian6 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.christian7 = new undum.SimpleSituation( "<p>Hello world!</p>" );

// Shia Storyline
undum.game.situations.shiaplaceholder = new undum.SimpleSituation( vorple.html.p(vorple.html.link("credits","Coming soon, in Episode 2")));

undum.game.situations.shia1 = new undum.SimpleSituation(vorple.html.p("As the jingle signifying the end of the news report plays, you turn off the radio. Your eyes are heavy but you promise yourself a hot cup of tea and a long sleep just as soon as you reach home. There were the usual cases in the ER last night: road traffic casualties, a businessman with a heart attack, and a suicide attempt. All patched up and fairly stable by the time you signed off in the morning.") +
vorple.html.p("The news, though, now that was troubling. A part of your mind was focused on the report, worrying, turning it over again and again, thinking about the consequences and the implications. Conditions were terrible in Pakistan these days. It was best to just get out of the country alive while one still could. But you knew that wasn’t an option for you.") +
vorple.html.p("It wasn’t that a doctor of your standing couldn't find a position abroad; it was simply a deep streak of patriotism and a sense of obstinacy that kept you sticking here. And your mother of course. Adjusting to new ways would be difficult for her. Speaking of which, you had to pick her up today.") +
vorple.html.p(vorple.html.link("shia2", "You take the turning back to the school near your house and wait for your mother as the bell inside rings and the children come flooding out. ")));

undum.game.situations.shia2 = new undum.SimpleSituation(vorple.html.p(vorple.html.quote("Assalam-alaikum Beta") + ", she said affectionately, as she sat down in the car. " + vorple.html.quote("You seem really tired today.")) +
vorple.html.p(vorple.html.quote("Walaikum Salam Maa") + ", you reply. She was partly correct. You were tired, but you were also worried. However, it made no sense to worry her too." ) +
vorple.html.quote("You were the only child of your mother, who was widowed while you were still eight years old. For the past twenty years, she had spent her days teaching at a local school in the mornings and at a tuition institute in the evenings to ensure that you got a good education.") +
vorple.html.quote("It was not an easy job. She had to navigate the treacherous waters of the society with constant vigilance, lest people point fingers at her. Her struggle bore fruit, and you became a doctor, like she had always dreamed. She still taught, though, out of love for the job and a desire to stay active. And she still fussed over you as she did when you were a child. You were the centre of all her hopes and dreams and efforts then, as you are now. ") +
vorple.html.p(vorple.html.link("shia3", "You start the car.")));

undum.game.situations.shia3 = new undum.SimpleSituation(vorple.html.p("The next day you arrive at the hospital to find a note from the supervisor. You had been called to his office. While you are waiting outside, you see your fellow resident, a young man who boasted more of resources than skills at doctoring, leave the room with an unctuous smile on his face. ") +
vorple.html.p("As you enter the office, the supervisor is hastily shoving an envelope into a drawer of his desk and closing it. You wait until he straightens up. He seems redder in the face than usual, and his demeanour, never very encouraging or open to begin with, seems colder. ") +
vorple.html.p("He shuffles around papers on his desk, ignoring you long enough to make you uncomfortable. When you clear your throat, he looks up at you abruptly. ") +
vorple.html.quote("Dr Zaidi, we have decided not to take you on for the post graduate registrar position this year. Based on your performance, we feel it would be best if you continued a year more as a senior house officer. When you have enough experience you may be promoted to the post.") +
vorple.html.p("You feel your heart sink, and anger rise up. You debate asking him who HAD gotten the position.") +
vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("./ask", "Ask who got the position?")) +
                                vorple.html.tag("li",vorple.html.link("./dontask", "Don't ask that question.")),
                                {classes: "transient options"}),


{
        actions: {
            ask: vorple.html.quote("The position has been given to Dr. Umar. He is a fine young gentleman who has shown persuasively excellent performance throughout.") + vorple.html.p("No wonder the fellow resident looked so smarmy. He must have pulled some strings, or pulled out his wallet anyhow. You feel the anger turning to rage, and exit the room before you end up making a scene.")  + vorple.html.p("Back in the ward, you contemplate reporting this to the MS.") + 
            vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("./protest", "Write a letter to the MS, informing him of the Bias.")) +
                                vorple.html.tag("li", vorple.html.link("./dontprotest", "Do Nothing.")),
                                {classes: "transient options"}),
            dontask: vorple.html.p("You feel the anger turning to rage, and exit the room before you end up making a scene.") + vorple.html.p("Back in the ward, you contemplate reporting this to the MS.") + vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("./protest", "Write a letter to the MS, informing him of the Bias.")) +
                                vorple.html.tag("li",vorple.html.link("./dontprotest", "Do Nothing.")),
                                {classes: "transient options"}),
            protest: vorple.html.p("You decide to write a letter to the MS explaining the bias in the selection. A few weeks later, you recieve a censure for wasting the time of the management.") + vorple.html.p(vorple.html.link("shia4", "Nothing happens of course. As expected")),
            dontprotest: vorple.html.p(vorple.html.link("shia4", "You decide to let it go. This isn't the first time this has happened, and apparently, it won't be the last."))
                 }
});

undum.game.situations.shia4 = new undum.SimpleSituation(vorple.html.tag("h3","One week later. ") + 
vorple.html.p("It is evening, and you have just woken up from confused dreams. Your mother is standing over you, shaking you awake gently. ") +
vorple.html.quote("Beta, there is news of a blast in the city’s main Imam Baargah. The victims will be arriving at your hospital any time soon. You ought to be there.") +
vorple.html.p("You feel energy suffuse into your limbs; clearing away the sleepiness, you get up and get dressed hurriedly, hugging your mother on the way out. You knew it broke her heart to disturb your rest, but she is aware how much it means to you to help people, and after a blast the hospital needed as many hands as it could get." + vorple.html.link( "shia5" ," You leave quickly. ")));

undum.game.situations.shia5 = new undum.SimpleSituation(vorple.html.tag("h3","One month later ") +
vorple.html.p("You are heading back from your evening duty one night. You have only just noticed a van that seems to be tailing you and have begun to feel suspicious when it swerves to the side and in front of you, forcing you to stop. Four men step out. ") +
vorple.html.p("They come close to your car. One of them, wearing a black cloth over the lower half of his face, taps the window of your car with his gun. Open up, he signs. Terrified, you do so. He pulls you out of the car roughly into the ditch at the side of the road. ") +
vorple.html.p("Two of the men push you onto your knees. They shout at you to put your hands behind your head. You beg them to take anything, the car, the mobile phone, the measly amount of money in your wallet. One of them rifles your pockets, but they are not looking for money. They check your ID card.") +
vorple.html.quote("You are Dr. Ali Zaidi? Shi’a?") +
vorple.html.p("As you hear the sound of the gun being cocked, you realize what they were really after. You go cold. The last noise you hear is the bullet exploding from the barrel, the last thought you have is of your mother, waiting late into the night, while the lovingly cooked food grows cold on the dinner table.") +
vorple.html.p(vorple.html.link("epilogue1", "Dr. Zaidi is gone. What's left is just another statistic.")));

undum.game.situations.shia6 = new undum.SimpleSituation( "<p>Hello world!</p>" );

undum.game.situations.shia7 = new undum.SimpleSituation( "<p>Hello world!</p>" );


// Epilogue

undum.game.situations.epilogue1 = new undum.SimpleSituation(vorple.html.p("This death really isn't the death of a person. It is the death of the whole nation. When violence and hatred becom our partners, nothing can save us from the ultimate destuction. It will chip away a us, until every majority will suffer the fate of these minorities." + vorple.html.p(vorple.html.link("epilogue2", "We must save the people, to ensure our survival"))));

undum.game.situations.epilogue2 = new undum.SimpleSituation(vorple.html.tag ( "center", vorple.html.tag("h2", vorple.html.tag("strong", vorple.html.link("credits", "The End")))));

undum.game.situations.credits = new undum.SimpleSituation(vorple.html.tag("h3", "Credits:") + 
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Programmer\t") + vorple.html.tag("emph", "Ali Sajid Imami"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Writer\t") + vorple.html.tag("emph", "Shumaila Hashmi"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Illustrator\t") + vorple.html.tag("emph", "Sana Ahmad"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Project Coordinator and Editing\t") + vorple.html.tag("emph", "Urooj Shuja'at Ali Janjua"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Outreach Coordinator\t") + vorple.html.tag("emph", "Awais Ali"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Content Review\t") + vorple.html.tag("emph", "Nyda Ahmad"))) +
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
    vorple.media.preloadImage([ 'title-small.jpg']);
};
