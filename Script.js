chances = function(sel1, copPts, ents, nom, chc) {
 var failChance = 1;
 var enrolledFailChance = 1;
 var toTest = $(sel1).length;
 $(sel1).each(function() {
   toCount = $(this).hasClass('is-faded')
   var copiesAndPoints = $(this).find(copPts);
   var copies = 1
   if (copiesAndPoints.length > 1) {
    copies = copiesAndPoints[0].innerText.replace( /[^0-9,]/g, '' ).replace( ',', '');
    var points = copiesAndPoints[1].innerText.replace( /[^0-9,]/g, '' ).replace( ',', '');
   } else {
    points = copiesAndPoints[0].innerText.replace( /[^0-9,]/g, '' ).replace( ',', '');
   }
   
   var entriesText = $(this).find(ents);
   var entries = entriesText[0].innerText.replace( /[^0-9,]/g, '' ).replace( ',', '');
 
   var winchance = copies / entries * 100;
   var winchancePerPoint = winchance / points;
   if (winchance > 100) {
    winchance = 100
   } else {
    if (toCount) {
     enrolledFailChance *= (100-winchance)/100
    } else {
     failChance *= (100-winchance)/100
    }
   }
   if (winchancePerPoint > 100) {
    winchancePerPoint = 100
   }
   
   var toAddTo = $(this).find(nom);
   toAddTo.append(' ['+Math.ceil(1000*winchance)/100+'‰, '+Math.ceil(1000*winchancePerPoint)/100 + '‰/P]');

  toTest -= 1;
  if (toTest == 0) {
   toAddChance = $(chc);
   if (enrolledFailChance == 1) {
    toAddChance.append("<div>&nbsp;(est. "+Math.ceil(10000*(1-failChance))/100 + "% wins, no 100%'s)</div>");
   } else {
    toAddChance.append("<div>&nbsp;(est. "+Math.ceil(10000*(1-failChance))/100 + "% wins, "+Math.ceil(10000*(1-enrolledFailChance))/100+"% wins for enrolled; no 100%'s)</div>");
   }
  }
 });
}

if (window.location.toString().includes("/giveaways/entered")) {
 console.log('Giveaways tab, checking .table type')
 chances('.table__row-inner-wrap', '.is-faded', '.table__column--width-small', '.table__column__heading', '.page__heading__breadcrumbs')
} else {
 console.log('Frontpage, checking .giveaway type')
 chances('.giveaway__row-inner-wrap', '.giveaway__heading__thin', '.giveaway__links span', '.giveaway__heading__name', '.page__heading__breadcrumbs')
}
