window.onload = () => {
    const dropDownWrapper = document.querySelector('.buttons__wrapper-mobile');
    const selectedItem = dropDownWrapper.querySelector('.buttons__mobile-selected');
    const optionsWrapper = dropDownWrapper.querySelector('.buttons__mobile-option__wrapper');
    const optionsList = dropDownWrapper.querySelectorAll('.buttons__mobile-option__item');

    const handleOption = (e) => {
        const newSelectedOption = e.currentTarget.innerHTML;
        const currentSelectedOption = selectedItem.innerHTML;

        e.currentTarget.innerHTML = currentSelectedOption;
        selectedItem.innerHTML = newSelectedOption;

        handleCloseDropDown();
    };

    const handleOptionsListAddListeners = () => {
        for (const option of optionsList) {
            option.addEventListener('click', handleOption);
        }
    };

    const handleOptionsListRemoveListeners = () => {
        for (const option of optionsList) {
            option.addEventListener('click', handleOption);
        }
    };

    const handleOpenDropDown = () => {
        dropDownWrapper.classList.add('buttons__wrapper-mobile-active');
        optionsWrapper.classList.add('dropdown-active');

        handleOptionsListAddListeners();
    };

    const handleCloseDropDown = () => {
        dropDownWrapper.classList.remove('buttons__wrapper-mobile-active');
        optionsWrapper.classList.remove('dropdown-active');

        handleOptionsListRemoveListeners();
    }

    window.addEventListener("click", (e) => {
        if (e.target.closest(".buttons__wrapper-mobile") === null) {
            handleCloseDropDown();
        }
    });

    selectedItem.addEventListener('click', () => {
        const isOpen = dropDownWrapper.classList.contains('buttons__wrapper-mobile-active');

        if (isOpen) {
            handleCloseDropDown();
        } else {
            handleOpenDropDown();
        }
    });
};
