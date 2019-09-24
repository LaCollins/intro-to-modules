const printToDom = (divId, toPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = toPrint;
};

const makeStore = () => {
    const domString = 'Hi new Store';
    printToDom('store-container', domString);
};

// export default { makeStore: makeStore };

export default { makeStore };