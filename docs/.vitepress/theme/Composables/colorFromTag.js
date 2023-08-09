export function colorFromTag(tag) {
	if (tag == 'none') {
		return ''
	} else if (tag == 'experimental') {
		return 'orange'
	} else if (tag == 'beta') {
		return 'red'
	} else if (tag == 'guide') {
		return 'green'
	} else if (tag == 'help') {
		return 'blue'
	} else if (tag == 'easy') {
		return 'blue'
	} else if (tag == 'beginner') {
		return 'blue'
	} else if (tag == 'expert') {
		return 'red'
	} else if (tag == 'recipe') {
		return 'blue'
	} else if (tag == 'intermediate') {
		return 'orange'
	} else if (tag == 'red') {
		return 'red'
	} else {
		return ''
	}
}
