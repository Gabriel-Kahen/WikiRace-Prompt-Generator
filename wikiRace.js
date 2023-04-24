class WikiRace {
	constructor() {
		this.infoArray = [];
		fetch('infoArray.txt')
			.then(response => response.text())
			.then(data => {this.infoArray = data.split('\n');});
	}
	
	start() {
		const start = this.infoArray[Math.floor(Math.random() * this.infoArray.length)];
		const destination = this.infoArray[Math.floor(Math.random() * this.infoArray.length)];
		const ret = `Start: ${start}   (<a href = https://en.wikipedia.org/wiki/${start}>https://en.wikipedia.org/wiki/${start}<\a>)<br>Destination: ${destination}` style="color:#36AE7C;";
		document.getElementById('ret').innerHTML = ret;
	}
}

const wikiRace = new WikiRace();
document.getElementById('goobsta').addEventListener('click', () => {
	wikiRace.start();
});
