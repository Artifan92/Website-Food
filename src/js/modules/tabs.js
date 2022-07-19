const tabs = document.querySelectorAll('.tabheader__item'),
	tabsContent = document.querySelectorAll('.tabcontent'),
	tabsParent = document.querySelector('.tabheader__items');

function hideTabContent() {
	tabsContent.forEach((tab) => {
		tab.classList.add('hide');
		tab.classList.remove('show', 'fade');
	});

	tabs.forEach((tab) => {
		tab.classList.remove('tabheader__item_active');
	});
}

function showTabContent(i = 0) {
	tabsContent[i].classList.add('fade', 'show');
	tabsContent[i].classList.remove('hide');
	tabs[i].classList.add('tabheader__item_active');
}

function changeTabContent(event) {
	const target = event.target;
	if (target && target.classList.contains('tabheader__item')) {
		tabs.forEach((tab, index) => {
			if (target == tab) {
				hideTabContent();
				showTabContent(index);
			}
		});
	}
}

export { hideTabContent, showTabContent, changeTabContent, tabsParent };
