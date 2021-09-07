// Calculate the P/E ratio
function calculatePERatio() {
    const netProfitText = document.getElementById('net-profit').value;
    const netProfit = parseFloat(netProfitText);
    const numberOfEquityShareText = document.getElementById('number-of-equityequity-share').value;
    const numberOfEquityShare = parseFloat(numberOfEquityShareText);
    const marketPricePerShareText = document.getElementById('market-price-per-share').value;
    const marketPricePerShare = parseFloat(marketPricePerShareText);
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
    const peRatio = parseFloat(peRatioText);
    const marketPricePerShareOfEPSText = document.getElementById('market-price-per-share-of-eps').value;
    const marketPricePerShareOfEPS = parseFloat(marketPricePerShareOfEPSText);
    const epsResult = document.getElementById('eps-result');

    const resutOfEPS = marketPricePerShareOfEPS / peRatio;
    epsResult.innerText = resutOfEPS;
    document.getElementById('pe-ration').value = '';
    document.getElementById('market-price-per-share-of-eps').value = '';
}
// Calculate NAV
function CalculateNAV() {
    const securitiesWorthText = document.getElementById('securities-worth').value;
    const securitiesWorth = parseFloat(securitiesWorthText);
    const fundOwesText = document.getElementById('fund-owes').value;
    const fundOwes = parseFloat(fundOwesText);
    const anotherRentText = document.getElementById('another-rent').value;
    const anotherRent = parseFloat(anotherRentText);
    const sharesOutstandingText = document.getElementById('shares-outstanding').value;
    const sharesOutstanding = parseFloat(sharesOutstandingText);
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
    const securitiesWorth2 = parseFloat(securitiesWorthText2);
    const fundOwesText2 = document.getElementById('fund-owes2').value;
    const fundOwes2 = parseFloat(fundOwesText2);
    const anotherRentText2 = document.getElementById('another-rent2').value;
    const anotherRent2 = parseFloat(anotherRentText2);
    const valueOfNAVText = document.getElementById('value-of-nav').value;
    const valueOfNAV = parseFloat(valueOfNAVText);
    const nvalueOfNAVResult = document.getElementById('number-of-share-outstanding-result');

    const fundOwesAnotherRent2 = fundOwes2 + anotherRent2;
    const numberOfOutstandingResult = (securitiesWorth2 - fundOwesAnotherRent2) / valueOfNAVText;
    nvalueOfNAVResult.innerText = numberOfOutstandingResult;

    document.getElementById('securities-worth2').value = '';
    document.getElementById('fund-owes2').value = '';
    document.getElementById('another-rent2').value = '';
    document.getElementById('value-of-nav').value = '';
}
// the present value
function calculatePresentValue() {
    const dividendText = document.getElementById('dividend').value;
    const dividend = parseFloat(dividendText);
    const sellingPriceText = document.getElementById('selling-price').value;
    const sellingPrice = parseFloat(sellingPriceText);
    const discountRateText = document.getElementById('discount-rate').value;
    const discountRate = parseFloat(discountRateText);
    const k = discountRate / 100;
    const presentValueResult = document.getElementById('present-value-result');
    const presentValue = (dividend + sellingPrice) / (1 + k);
    presentValueResult.innerText = presentValue;

    document.getElementById('dividend').value = '';
    document.getElementById('selling-price').value = '';
    document.getElementById('discount-rate').value = '';
}


function calculatePresentValueForMultipleYear() {
    const dividendText1 = document.getElementById('dividend-multiple-1').value;
    const dividend1 = parseFloat(dividendText1);
    const dividendText2 = document.getElementById('dividend-multiple-2').value;
    const dividend2 = parseFloat(dividendText2);
    const dividendText3 = document.getElementById('dividend-multiple-3').value;
    const dividend3 = parseFloat(dividendText3);
    const sellingPriceForMultipleYearText = document.getElementById('selling-price-for-multiple-year').value;
    const sellingPriceForMultipleYear = parseFloat(sellingPriceForMultipleYearText);
    const discountRateForMultipleYearText = document.getElementById('discount-rate-for-multiple-year').value;
    const discountRateForMultipleYear = parseFloat(discountRateForMultipleYearText);
    const k2 = discountRateForMultipleYear / 100;

    const presentValueForMultipleYearResult = document.getElementById('present-value-for-multiple-year-result');

    const dividend1Power = dividend1 / Math.pow((1 + k2), 1);
    const dividend2Power = dividend2 / Math.pow(1 + k2, 2);
    const dividend3Power = (dividend3 + sellingPriceForMultipleYear) / Math.pow(1 + k2, 3)

    const presentValueForMultipleYear = dividend1Power + dividend2Power + dividend3Power;
    presentValueForMultipleYearResult.innerText = presentValueForMultipleYear;

    document.getElementById('dividend-multiple-1').value = '';
    document.getElementById('dividend-multiple-2').value = '';
    document.getElementById('dividend-multiple-3').value = '';
    document.getElementById('selling-price-for-multiple-year').value = '';
    document.getElementById('discount-rate-for-multiple-year').value = '';
}