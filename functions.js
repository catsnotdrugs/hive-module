function setActiveStates(activeHexId, activeButtonId, activeArrowId) {
    const activeButton = document.querySelector('.active-button');
    if (activeButton) {
        activeButton.classList.remove('active-button');
    }

    const activateButton = document.getElementById(activeButtonId);
    if (activateButton) {
        activateButton.classList.add('active-button');
    }

    const currentlyActive = document.querySelector('.hex-wrapper-active');
    if (currentlyActive) {
        currentlyActive.classList.remove('hex-wrapper-active');
    }

    const activateElement = document.getElementById(activeHexId);
    if (activateElement) {
        activateElement.classList.add('hex-wrapper-active');
    }


    const activeArrow = document.querySelector('.arrow-active');
    if (activeArrow) {
        activeArrow.classList.remove('arrow-active');

    }

    const activateArrow = document.getElementById(activeArrowId);
    if (activateArrow) {
        activateArrow.classList.add('arrow-active');
    }

}

