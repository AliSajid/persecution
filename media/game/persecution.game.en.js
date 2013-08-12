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
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.");
    }
});

// Ahmedi Storyline

new undum.game.situations.ahmedi1 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.ahmedi2 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.ahmedi3 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.ahmedi4 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.ahmedi5 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.ahmedi6 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.ahmedi7 = new undum.SimpleSituation( "<p>Hello world!</p>" );

// Hindu Storyline

new undum.game.situations.hindu1 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.hindu2 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.hindu3 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.hindu4 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.hindu5 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.hindu6 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.hindu7 = new undum.SimpleSituation( "<p>Hello world!</p>" );


// Christian Storyline

new undum.game.situations.christian1 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.christian2 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.christian3 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.christian4 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.christian5 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.christian6 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.christian7 = new undum.SimpleSituation( "<p>Hello world!</p>" );

// Shia Storyline

new undum.game.situations.shia1 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.shia2 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.shia3 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.shia4 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.shia5 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.shia6 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.shia7 = new undum.SimpleSituation( "<p>Hello world!</p>" );


// Epilogue

new undum.game.situations.epilogue1 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.epilogue2 = new undum.SimpleSituation( "<p>Hello world!</p>" );

new undum.game.situations.epilogue3 = new undum.SimpleSituation( "<p>Hello world!</p>" );


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
undum.game.init = function(character, system) 
    vorple.core.init(system);
};
