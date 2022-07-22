'use strict';

function tabs(
	selectorTabsContent,
	selectorParentMenu,
	selectorMenu,
	activeClass,
	showClass,
	hideClass,
	animationClass
) {
	const tabsContent = document.querySelectorAll(selectorTabsContent),
		tabsMenuItems = document.querySelector(selectorParentMenu),
		tabsMenuItem = document.querySelectorAll(selectorMenu);

	function hideTabContents() {
		tabsContent.forEach((tab) => {
			tab.classList.add(hideClass);
			tab.classList.remove(showClass, animationClass);
		});

		tabsMenuItem.forEach((tab) => {
			tab.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add(animationClass, showClass);
		tabsContent[i].classList.remove(hideClass);
		tabsMenuItem[i].classList.add(activeClass);
	}

	function changeTabContent(event) {
		const target = event.target;
		if (target && target.classList.contains(selectorMenu.slice(1))) {
			tabsMenuItem.forEach((tab, index) => {
				if (target == tab) {
					hideTabContents();
					showTabContent(index);
				}
			});
		}
	}

	hideTabContents();
	showTabContent();

	tabsMenuItems.addEventListener('click', changeTabContent);
}

export default tabs;
