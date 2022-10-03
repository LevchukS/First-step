const getCovidURL = (code = 'Ukraine', year = 2020) => {
    return `https://covid-19.dataflowkit.com/${ year }/${ code }`;
}

const isValidDate = date => {
    const before = Date.parse('Wed, 22 Jan 2020 00:00:00 GMT');
    const now = Date.now();
    const then = new Date(date);

    if(now < before && now < then)  return false;

    return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

const isValidCountry = country => {
    if(country.length != 7) return false;
    if(!/[a-z]{7}/i.test(country)) return false;

    return true;
}   

const DOM = {
    inpDate : document.querySelector('.inp-date'),
    inpFrom : document.querySelector('.inp-from'),
    outAnswer : document.querySelector('.answer')
};

const showAnswer = (totalCases) => {
    const cases = totalCases ? '+new cases' : '0';
    DOM.outAnswer.innerText = `Total cases ${ cases }%`;
}


DOM.btnCount.onclick = () => {
    const date = DOM.inpDate.value;
    const from = DOM.inpFrom.value;

    const isValidD = isValidDate(date);
    const isValidCountryFrom = isValidCountry(from);
    console.log(date, from);
    console.log(isValidD, isValidCountryFrom);
    if(isValidD && isValidCountryFrom){
        const year = date.split('-')[0];
        const fFrom = fetch(getCovidURL(from, year)).then(r => r.json());

        Promise.all([fFrom]).then(values => {
            const dates = values.flat().map(el => el.date);
            console.log(dates);
            const covidCases = dates.includes(date);

            showAnswer(covidCases);
        });
    }
}
