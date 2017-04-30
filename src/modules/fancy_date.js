class FancyDate {
	constructor() {
		this.curr = new Date();
	}
	getTime() {
		return this.curr.getTime();
	}
}

module.exports = FancyDate;
