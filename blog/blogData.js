/* eslint-disable max-len */
/* exported blogData */
const blogData = [
	`
	@title I made a blog!
	@date 1674659869714
	@tags meta dev
	I made a blog tool that allows me to assign custom tags to specific sections of text.
	
	@p
	@tags js
	For example, in this paragraph, I'm talking about JS, so I tagged it JS.
	I hate JS. :(

	@p
	Later on this morning I also added prev/next/first/last buttons.
	I eventually want to have better search and exploration options,
	but I suppose the best mechanism to allow that will only be obvious after I use this more...
	`,
	`
	@title 25 Jan 2023
	@date 1674670610190
	Aside from making the blog,
	
	@p
	@tags weather
	I have been thinking about the weather recently.
	It has not snowed yet this winter here, although it did drop below freezing a few times.
	It rained this morning, and then stopped around noon.
	Then the rain picked up again a few hours later and contined into the evening.
	It has been in the 40s and 50s so far this week, as far as I recall.
	I wonder if I should add weather analysis tools to my to-do list...

	@p
	@tags site dev chess eremoran astrology
	I've been thinking about resuming the hyper-customizable chess variant tool I last worked on now just over two years ago.
	As cool as that idea still is, there really are other things I should be working on,
	like Eremoran astrology and the terran astrology tool I've been wanting to make for many months now.

	@p
	@tags flash
	I realized yesterday that <cite>:the game:</cite> is now 15 years old.
	I'm tempted to replay it; it would be a wormhole into the past with all its memes.
	<cite>Caesar's day off</cite> is now a decade old, and I gave that a quick replay.
	It's about as good as I remember.

	@p
	@tags ukraine russia war
	I was also reminded of the ongoing Russo-Ukrainian war today.
	I read <a href="https://time.com/6244330/russia-ukraine-war-nuclear-threat/">an article in Time</a> reiterating the looming nuclear threats.
	It appears little progress has been made from Ukraine in the past couple months, which would strengthen the likelihood of a stalemate.
	However, Ukraine did recapture Kherson a couple months ago, so I suppose the front line isn't totally frozen.

	@p
	@tags wikipedia
	Wikipedia recently redesigned their interface for the first time in over a decade.
	I have mixed feelings about it.
	If they removed the ridiculous amount of whitespace, I would say my overall impression would be positive.
	Unfortunately, the whitespace just kills it for me.
	Worse yet is that many actions that took a single click now take several.
	They said there would be a way for logged-out users to toggle the new interface,
	but initially the button did not appear at all, and now it only appears on wide enough monitors.
	There is also the minor issue of coordinates on location pages now weirdly mixing with the article body,
	but that's not <em>that</em> bad.
	The sole positive change is them moving the table of contents into the sidebar.
	On a sidenote, I am completely baffled as to how Wikipedia is the only major website to not even have considered a dark mode.
	Anyways, until and unless they fix the whitespace issues, I think I'll stick with the classic look.

	@p
	@tags earworm
	All day I have had <a href="https://youtu.be/XXlZfc1TrD0"><cite>Banana Brain</cite> by Die Antwoord</a> stuck in my head.

	@p
	@tags meta
	I have to say, I think I will enjoy writing this blog.
	I have long wanted to continue putting my thoughts to paper since I stopped journaling a decade ago.
	`,
	`
	@title 26 Jan 2023
	@date 1674763626258
	@p
	@tags site dev js
	Today I made a neat JS tool that allows me to have an error popup in the corner,
	so I know when there's been an error without checking the console.

	@p
	@tags cwc
	Someone posted on the CWC subreddit that Barb is throwing out a lot of Chris' old stuff
	(although, honestly, it all looks like trash to me).
	It's reminded me that one day I <em>would</em> actually like to take the pilgramage to CWCville and see the sights.
	From a distance, of course. No way in hell am I getting anywhere near Barb.

	@p
	@tags space_exploration uranus
	Recently I read about the <a href="https://en.wikipedia.org/wiki/Uranus_Orbiter_and_Probe">Uranus Orbiter and Probe</a> mission,
	which sounds cool, although it wouldn't even launch for another eight years at earliest and wouldn't arrive for twenty-one years...

	@p
	@tags space_exploration venus
	I also read about the <a href="https://en.wikipedia.org/wiki/DAVINCI">DAVINCI</a> and
	<a href="https://en.wikipedia.org/wiki/VERITAS_(spacecraft)">VERITAS</a> NASA Discovery Program missions,
	which would launch in 2029 and 2031, respectively.
	Again, kinda sucks that it'll take years to see to fruition, but at least these'll arrive within a decade...

	@p
	@tags space_exploration titan
	There is also the <a href="https://en.wikipedia.org/wiki/Dragonfly_(spacecraft)">Dragonfly</a> mission to Saturn's moon Titan,
	which would land a helicopter much like <a href="https://en.wikipedia.org/wiki/Perseverance_(rover)">Perseverance</a>'s
	<a href="https://en.wikipedia.org/wiki/Ingenuity_(helicopter)">Ingenuity</a>.
	This one I'm particularly excited for, because much less is known about the surface of Titan than, say, Mars.
	Will it find signs of life on Titan? Probably not. But the possibility is exciting nevertheless.

	@p
	@tags dev flash
	I spent some time mulling about flash games again.
	One game I have always wanted to remake with more content is Cellcraft.
	The developer open-sourced it many years ago, so I shouldn't have to hunt too far for the mechanics.
	That's at the very bottom of my priority list, though...
	`,
	`
	@title 27 Jan 2023
	@date 1674843828443
	@p
	@tags site dev meta
	I added a "week" option to the blog post time range filter.
	I've been thinking about adding topic/post freequency charts using my chart tool,
	but I think I'll need to wait for more good data before testing it out.
	I also added a sudoku generator to my site.
	`,
	`
	@title 28 Jan 2023
	@date 1674965139633
	@p
	@tags site dev js
	I optimized the sudoku generator as much as I think I can realistically within the limitations of javascript.
	I think I will leave it for now.

	@p
	@tags game_changer
	This evening I discovered the show <cite>Game Changer</cite> and have become totally enthralled, binge-watching as many episodes as I can.
	The musical episode in particular had me splitting my sides the entire time.
	I would definitely recommend a watch!
	`,
	`
	@title 01 Feb 2023
	@date 1675280393178
	@p
	@tags kenken
	I've been trying out kenken puzzles. Mostly 8x8 ones... they're pretty addictive.
	I'm tempted to try a 10x10 one but I'm worried they'll be unmanageable...
	`,
	`
	@title 02 Feb 2023
	@date 1675383358819
	@p
	@tags twitter dev
	Twitter has now announced API access will be a paid feature in a week.
	I guess I'm not gonna be making my Eremor bot anymore.
	On one hand I wish I did, but on the other I suppose it's nice to know I didn't waste my time.
	It's still amazing to me how fast Twitter has collapsed since Musk's acquisition.
	@p
	@tags duolingo japanese
	Today I completed unit 7 of Japanese on Duolingo. 🇯🇵
	@p
	@tags math
	On a whim I decided to try to figure out the group of rotations of a tetrahedron.
	Obviously there are twelve orientations (4 faces * 3 sides per face),
	but I wasn't sure how to name them.
	I decided to arbitrarily name three axes (going from a vertex through the center of a face) A, B, C, and D,
	and to call a clockwise rotation along the axis "_<sub>1</sub>" and a counterclockwise rotation "_<sub>2</sub>".
	I also decided to name the identity rotation "0".
	Beforehand, I thought this would be everything,
	but after writing it out I realized that would only cover 9 rotations.
	I then decided to name the remaining rotations X<sub>1</sub>, X<sub>2</sub>,
	and X<sub>3</sub> in order of when I first encountered them.
	Interesting properties I found:
	<ol>
		<li>
			The rotations are not commutative.
			All combinations of different letters are counterexamples.
			eg. A<sub>1</sub>&middot;B<sub>1</sub> = C<sub>2</sub> but B<sub>1</sub>&middot;A<sub>1</sub> = D<sub>2</sub>.
			If the two operands have the same letter, they are commutative,
			and the result also has the same letter, or is 0.
		</li>
		<li>
			Rotation by the identity rotation is period-1 (obviously),
			rotation by a _<sub>n</sub> rotation is period-3,
			but rotation by X<sub>n</sub> is period-2 -
			ie. X<sub>1</sub>, X<sub>2</sub>, and X<sub>3</sub> are their own inverses.
		</li>
		<li>
			_<sub>1</sub>&middot;_<sub>1</sub> = _<sub>2</sub>
		</li>
		<li>
			_<sub>2</sub>&middot;_<sub>2</sub> = _<sub>1</sub>
		</li>
		<li>
			_<sub>1</sub>&middot;_<sub>2</sub> <em>or</em> _<sub>2</sub>&middot;_<sub>1</sub> = X<sub>n</sub> <em>or</em> 0
		</li>
		<li>
			X<sub>n</sub>&middot;_<sub>m</sub> <em>or</em> _<sub>m</sub>&middot;X<sub>n</sub> = _<sub>m</sub>
		</li>
		<li>
			A generating set of the group is {A<sub>1</sub>, B<sub>1</sub>}.
			In fact, every set of two elements with different letters is a generating set.
			Intuitively it makes sense the minimal generating set would need two elements of different axes,
			since it is similar to geographic coordinates on a sphere.
		</li>
	</ol>
	Unfortunately I do not yet know the deeper reason behind some of these properties,
	but I will definitely keep thinking about them in the back of my mind.
	The period-3 rotations are and obviously must be rotations by 120&deg;,
	but the period-2 rotations are less clear when I try to visualize them.
	Since they are period-2, I <em>suppose</em> they are rotations by 180&deg; (at least, that is my only rationalization),
	but I have some doubt about that and perhaps there is some other weird movement going on instead.
	`,
	`
	@title 03 Feb 2023
	@date 1675434363640
	@p
	@tags site namei
	To the <a href="../namei/namei.html#Eras">Pankairan color synesthesia table</a> I added solids for the elements.
	`,
	`
	@title 08 Feb 2023
	@date 1675897960761
	@p
	@tags math
	I've continued reading about polyhedra, hyperbolic tilings, etc.
	It's interested me enough to where I've been thinking about making
	some sort of tool to automatically generate diagrams similar to what exists on wikipedia,
	although I don't think I <em>quite</em> have all the information I need yet,
	and I still need to define the scope of the project more clearly (something I have always had problems with).
	@p
	@tags math
	As part of this research I tried making an <a href="https://en.wikipedia.org/wiki/Order-5_square_tiling">Order-5 square tiling</a> out of paper squares.
	I was worried it wouldn't be physically possible, but it turned out to be easy,
	and required no stretching or contortion of the paper whatsoever,
	but did require it to stretch into the third dimension in parts.
	When holding it, the joints bend and contort weirdly.
	The closest thing I can compare it to is a planar Jacob's ladder.
	@p
	@tags weather
	Despite it being midwinter, it was warm enough today for me to have to turn on the AC in the afternoon - lol.
	`,
	`
	@title 10 Feb 2023
	@date 1676045672307
	@p
	@tags site eremoran
	I added several new words (mostly fruit) to Eremoran today, including the 900th word - <em>eresoni</em> "rambutan".
	Afterwards, I was curious as to the average number of words added per day:
	it turns out to have been about 0.46 words per day so far.
	I decided that, since I want that number to be 1 word per day,
	I should add at least 4-5 new words per day for the rest of the year,
	so that by the end of the year that number should reach one word per day average.
	Let's see if I can actually stick to this goal - lol.
	`,
	`
	@title 13 Feb 2023
	@date 1676296395888
	@p
	@tags math
	I've long known about the old trick of "cancelling out" the sixes in 16/64 to get the correct simplification of 1/4,
	but I wondered to myself if there were other fractions like that.
	Excluding trivial forms like 11/11, etc., I was able to construct a proof -
	to my level of satisfaction, at least -
	that there are exactly four non-trivial solutions:
	<ul>
		<li>19/95 &rarr; 1/5</li>
		<li>49/98 &rarr; 4/8</li>
		<li>16/64 &rarr; 1/4</li>
		<li>26/65 &rarr; 2/5</li>
	</ul>
	Unfortunately, I realized my little trick for this wouldn't work for 3-digit fractions -
	or, if it can, I couldn't figure it out.
	@p
	@tags math js
	So instead, I wrote a script to find these - and as it turns out, there are dozens and dozens of non-trivial solutions (my program found 220, but there may be others).
	One such solution is 334/835 &rarr; 34/85.
	But interestingly enough, all four of the previous solutions have one (and, as far as I can tell, <em>only</em> one) corresponding three-digit solution:
	<ul>
		<li>199/995 &rarr; 19/95</li>
		<li>499/998 &rarr; 49/98</li>
		<li>166/664 &rarr; 16/64</li>
		<li>266/665 &rarr; 26/65</li>
	</ul>
	Although I tried to use as many clever tricks to make computation as fast as possible,
	I ended up giving up trying to find a clever algorithm to find all the factors of a number.
	Yet another script to add to my useless library of hundreds of single-use scripts... lol.
	`,
	`
	@title 16 Feb 2023
	@date 1676573482819
	@p
	@tags eremoran math
	I added several new math terms to Eremoran today.
	I was curious to see how other languages translate the <a href="https://en.wikipedia.org/wiki/Platonic_solid">platonic solids</a>,
	but disappointingly they are all essentially English calques.
	I, however, have another idea: instead of classifying polygons by their faces,
	what about their vertices?
	And so now, in Eremoran, <a href="https://en.wikipedia.org/wiki/Isogonal_figure">isogonal polyhedra</a> are defined by their vertex behavior.
	For example, the <a href="https://en.wikipedia.org/wiki/Regular_icosahedron">icosahedron</a> is <em>hanuzkumkimôm</em> -
	in other words "triangles, five times [around the vertex]".
	This is sufficient to uniquely identify it as an icosahedron.
	But furthermore, this isn't just some random property of the polyhedron -
	if you turn the solid so you face a vertex, this is <em>exactly what you see</em> -
	five triangles around a single point.
	I imagine, with the level of technology available,
	it would be rather challenging to produce many of these solids -
	practically relegating them to drawings or the imagination, where this is all that would be visible!
	Theoretically, this could also be extended to non-platonic solids:
	for example, a <a href="https://en.wikipedia.org/wiki/Rhombicuboctahedron">rhombicuboctahedron</a> could be a <em>kumkimôkumkuzbabzimôm</em>.
	As a pleasant surprise, the Eremoran terms tend to use roughly the same amount of syllables as in English,
	so I don't have to worry about these being unrealistically unwieldy.
	`,
	`
	@title 23 Feb 2023
	@date 1677174924910
	@p
	@tags eremoran
	It's been almost two weeks since I made my commitment to expanding Eremoran.
	Although I haven't strictly kept to my "4-5 words a day" goals,
	The average so far has at least been within that range, which is good.
	Some days I have no problem coming up with dozens of missing words, others I struggle to think of even one.
	It's very haphazard, unfortunately.
	@p
	@tags meta js site dev
	I also added a js tool for me to get word frequency statistics from my blog:
	<pre>"blog.corpus.stats();"</pre>
	It's imperfect to be sure, but it's still pretty neat to see my blog unsurprisingly conform to normal English word frequency!
	`,
	`
	@title 1000 Eremoran Words
	@date 1677253519365
	@p
	@tags eremoran
	I have just added the one thousandth word to Eremoran - <em>adz</em>,
	a respectful title for elders.
	<em>Adz</em> is a fairly recent loan to Eremoran.
	It comes directly from Vazcud <em>adj</em>, with similar meaning and usage.
	It was originally used by Eremoran scholars towards masters of their field (cf. English "doctor"),
	but has since spread out of academia and into semi-common usage.
	@p
	@tags eremoran math
	Much of the new vocabulary recently, however, has been math.
	I've been reading Euclid's Elements to give me an idea of the mathematical knowledge available at the time,
	and trying to add as much vocabulary from that as reasonable.
	The style of writing is enticing me to make an Eremoran translation,
	but for Eremoran I have tried to shy away from translations of our world's books since it wouldn't make any in-universe sense.
	@p
	@tags weather
	In other news, it has been excessively warm recently.
	Yesterday it approached 80&deg;F and poured in the late afternoon.
	Today the temperature is forecast to fall all day,
	and reach the 40s at night.
	Well, I guess I had <em>one</em> day of summer...
	`,
	`
	@title Rewnewables in Factorio
	@date 1677517880255
	@p
	@tags factorio
	I've recently been into Factorio again, and I realized something interesting.
	There are few renewable resources, but one of the ones that is? Crude oil.
	Yes, crude oil is renewable in factorio.
	Pumpjacks bottom out at 2 crude oil per second, and never deplete.
	This means oil products are among the handful of truly renewable resources:
	<ul>
		<li>Energy, Water, Crude Oil</li>
		<li>Heavy Oil, Light Oil, Petroleum Gas</li>
		<li>Steam</li>
		<li>Sulfur</li>
		<li>Lubricant</li>
		<li>Solid Fuel</li>
		<li>Rocket Fuel</li>
	</ul>
	However, in order to acquire any of these,
	you will need a <em>small</em> quanitity of non-renewables to kickstart production,
	but after that, everything is automatic.
	A small base focused on crude oil extraction,
	with flamethrowers and laser turrets,
	could run indefinitely without maintenance.
	`,
	`
	@title Exploring the Generalized Collatz Problem
	@date 1677598875664
	@p
	@tags math js
	This morning I wondered what would happen if you replaced the coefficients in the
	<a href="https://en.wikipedia.org/wiki/Collatz_conjecture">Collatz problem</a> with others.
	So I wrote a quick program in JS to allow me to experiment with this.
	@p
	@tags math
	After some experimenting, I came across a really interesting variant:
	<ul>
		<li>Modulus: 5</li>
		<li>Formula for remainders:
		<ol>
			<li value="0">n &rarr; n/5</li>
			<li>n &rarr; 2n + 3</li>
			<li>n &rarr; 3n + 4</li>
			<li>n &rarr; 4n + 3</li>
			<li>n &rarr; 6n + 1</li>
		</ol>
		</li>
	</ul>
	This rule has four different positive cycles:
	<ul>
		<li>1 &harr; 5</li>
		<li>2 &harr; 10</li>
		<li>3 &harr; 15</li>
		<li>19 &rarr; 115 &rarr; 23 &rarr; 95 &rarr; 19</li>
	</ul>
	The distribution of which numbers falls into the cycles is interesting.
	Although most fall into the 1 cycle, quite a few fall into the 19 cycle.
	And although there are many stretches of integers that fall only into the 1 cycle,
	there are also a few stretches of integers which never fall into the 1 cycle, but instead fall into one of the others.
	For example, the range 90 to 95 inclusive all falls into 3 or 19,
	but that range is immediately preceded by a range of seven integers that all converge to 1.
	@p
	@tags math
	At this point you might just assume in all rules the majority of positive integers converge to 1.
	However, this is far from the truth. Consider:
	<ul>
		<li>Modulus: 3</li>
		<li>Formula for remainders:
		<ol>
			<li value="0">n &rarr; n/3</li>
			<li>n &rarr; 4n + 2</li>
			<li>n &rarr; 4n + 1</li>
		</ol>
		</li>
	</ul>
	This rule has two different positive cycles:
	<ul>
		<li>1 &rarr; 6 &rarr; 2 &rarr; 9 &rarr; 3 &rarr; 1</li>
		<li>7 &rarr; 30 &rarr; 10 &rarr; 42 &rarr; 14 &rarr; 57 &rarr;
		19 &rarr; 78 &rarr; 26 &rarr; 105 &rarr; 35 &rarr; 141 &rarr;
		47 &rarr; 189 &rarr; 63 &rarr; 21 &rarr; 7</li>
	</ul>
	The majority of positive integers falls into the latter cycle.
	In fact, the fraction that do seems to only increase with the range of integers considered.
	The first four positive integers all fall into the first cycle,
	5/8 of the first eight do,
	8/16 of the first sixteen do,
	12/32 of the first thirty-two do,
	and 17/64 of the first sixty-four do.
	@p
	@tags math
	There is also this interesting rule that has three cycles and one path I suspect goes to infinity:
	<ul>
		<li>Modulus: 2</li>
		<li>Formula for remainders:
		<ol>
			<li value="0">n &rarr; n/2</li>
			<li>n &rarr; 5n + 1</li>
		</ol>
		</li>
	</ul>
	Cycles:
	<ul>
		<li>1 &rarr; 6 &rarr; 3 &rarr; 16 &rarr; 8 &rarr; 4 &rarr; 2 &rarr; 1</li>
		<li>13 &rarr; 66 &rarr; 33 &rarr; 166 &rarr; 83 &rarr; 416 &rarr; 208 &rarr; 104 &rarr; 52 &rarr; 26 &rarr; 13</li>
		<li>17 &rarr; 86 &rarr; 43 &rarr; 216 &rarr; 108 &rarr; 54 &rarr; 27 &rarr; 136 &rarr; 68 &rarr; 34 &rarr; 17</li>
		<li>7 &rarr; ... &rarr; &infin;</li>
	</ul>
	There seems to be a pattern with the 7 path - the remainder modulo 10 of terms is 8, then 9, then 6,
	then one pair of 3-6. The next time around, it becomes two pairs of 3-6. Then three, then four...
	The numbers only seem to get bigger.
	`,
];