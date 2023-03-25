let isOn = false;
let clickable = true;
const chromeAction = chrome.action;

chromeAction.onClicked.addListener(async tab => {
	const tabId = tab.id;
	if (clickable) {
		clickable = false;
		const [color, text] = (isOn = !isOn) ? ['#DA0037', 'OFF'] : ['#171717', 'ON'];
		await chromeAction.setBadgeBackgroundColor({
			tabId: tabId,
			color: color,
		});
		await chromeAction.setBadgeText({
			tabId: tabId,
			text: text,
		});
		clickable = true;
	}
});
