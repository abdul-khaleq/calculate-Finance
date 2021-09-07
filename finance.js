
// Calculate the P/E ratio
function calculatePERatio() {
    const netProfitText = document.getElementById('net-profit').value;
    const netProfit = parseInt(netProfitText);
    const numberOfEquityShareText = document.getElementById('number-of-equityequity-share').value;
    const numberOfEquityShare = parseInt(numberOfEquityShareText);
    const marketPricePerShareText = document.getElementById('market-price-per-share').value;
    const marketPricePerShare = parseInt(marketPricePerShareText);
    const peResult = document.getElementById('pe-result');
    const EPS = netProfit / numberOfEquityShare;
    const resut = marketPricePerShare / EPS;
    peResult.innerText = resut;
    document.getElementById('net-profit').value = '';
    document.getElementById('number-of-equityequity-share').value = '';
    document.getElementById('market-price-per-share').value = '';
}
// Calculate the EPS
function calculateTheEPS() {
    const peRatioText = document.getElementById('pe-ration').value;
    const peRatio = parseInt(peRatioText);
    const marketPricePerShareOfEPSText = document.getElementById('market-price-per-share-of-eps').value;
    const marketPricePerShareOfEPS = parseInt(marketPricePerShareOfEPSText);
    const epsResult = document.getElementById('eps-result');

    const resutOfEPS = marketPricePerShareOfEPS / peRatio;
    epsResult.innerText = resutOfEPS;
    document.getElementById('pe-ration').value = '';
    document.getElementById('market-price-per-share-of-eps').value = '';
}
// Calculate NAV
function CalculateNAV() {
    const securitiesWorthText = document.getElementById('securities-worth').value;
    const securitiesWorth = parseInt(securitiesWorthText);
    const fundOwesText = document.getElementById('fund-owes').value;
    const fundOwes = parseInt(fundOwesText);
    const anotherRentText = document.getElementById('another-rent').value;
    const anotherRent = parseInt(anotherRentText);
    const sharesOutstandingText = document.getElementById('shares-outstanding').value;
    const sharesOutstanding = parseInt(sharesOutstandingText);
    const navResult = document.getElementById('nav-result');

    const fundOwesAnotherRent = fundOwes + anotherRent;
    const resultOfNAM = (securitiesWorth - fundOwesAnotherRent) / sharesOutstanding;
    navResult.innerText = resultOfNAM;

    document.getElementById('securities-worth').value = '';
    document.getElementById('fund-owes').value = '';
    document.getElementById('another-rent').value = '';
    document.getElementById('shares-outstanding').value = '';
}
// Determine the number of share outstanding.
function CalculateNumberOfShareOutstanding() {
    const securitiesWorthText2 = document.getElementById('securities-worth2').value;
    const securitiesWorth2 = parseInt(securitiesWorthText2);
    const fundOwesText2 = document.getElementById('fund-owes2').value;
    const fundOwes2 = parseInt(fundOwesText2);
    const anotherRentText2 = document.getElementById('another-rent2').value;
    const anotherRent2 = parseInt(anotherRentText2);
    const valueOfNAVText = document.getElementById('value-of-nav').value;
    const valueOfNAV = parseInt(valueOfNAVText);
    const nvalueOfNAVResult = document.getElementById('number-of-share-outstanding-result');

    const fundOwesAnotherRent2 = fundOwes2 + anotherRent2;
    const numberOfOutstandingResult = (securitiesWorth2 - fundOwesAnotherRent2) / valueOfNAVText;
    nvalueOfNAVResult.innerText = numberOfOutstandingResult;

    // document.getElementById('securities-worth').value = '';
    // document.getElementById('fund-owes').value = '';
    // document.getElementById('another-rent').value = '';
    // document.getElementById('shares-outstanding').value = '';
}