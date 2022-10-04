const data = [
	{
		p: 'Death calls.',
		choices: ['Accept incongruity', 'Fight back'],
	},
	{
		p: 'You hear the voices of your colleagues around you, whispering behind your backs&mdash;they are disgusted by your appearance.',
		choices: ['They&apos;re right&mdash;I&apos;m a freak.', 'But... they&apos;re wrong! I can&apos; help who I am!'],
	},
	{
		p: 'You see your body morphing in front of your very eyes, into a new, grotesque form.',
		choices: ['Accept transformation', 'Search for your true self'],
	},
	{
		p: 'You look into the mirror, but do not recognize your reflection.',
	},
	{
		p: 'You feel mold growing on your face.',
	},
	{
		p: 'Your feel your clothes burning your skin.',
	},
	{
		p: 'Your existence disgusts your family.',
		choices: ['Accept their will', 'Struggle to retain your individuality'],
	},
	{
		p: 'Your breath is weak. Your body is exhausted. The depression is getting worse.',
		choices: ['No one understands', 'Where is hope?'],
	},
];

function identity(){
	if (0.1 < Math.random())
		return;
	// import CSS
	const style = document.createElement('link');
	style.href = 'css/identity.css';
	style.rel = 'stylesheet';
	document.head.appendChild(style);
	// block rest of doc
	document.body.classList.add('noOverflow');
	const div = document.createElement('div');
	div.id = 'identity';
	const datum = data[Math.floor(Math.random() * data.length)];
	const p = document.createElement('p');
	p.innerHTML = datum.p;
	div.appendChild(p);
	const choices = datum.choices || data[0].choices;
	choices.forEach(choice => {
		const span = document.createElement('span');
		span.onclick = () => {
			div.remove();
			document.body.classList.remove('noOverflow');
		};
		span.innerHTML = choice;
		div.appendChild(span);
	});
	document.body.appendChild(div);
}
identity();