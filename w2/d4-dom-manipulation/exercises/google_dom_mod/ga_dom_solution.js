var gaMod = function() {
  var nav = document.querySelector('#gb');
  var footer = document.querySelector('#fbar');

  var micImg = document.querySelector('.gsst_a')
  var newMicImg = document.createElement('img')
  var gaGearImg = 'https://dl.dropboxusercontent.com/s/whkficbkox6t66a/Screen%20Shot%202016-01-24%20at%205.43.31%20PM.png';

  var googleLogo = document.querySelector('#hplogo');
  var gaFullLogo = 'https://dl.dropboxusercontent.com/s/e2iqc2r53r6omzn/General_Assembly_logo.png'
  var gaFullLogoContainer = document.querySelector('#lga')

  var searchButton = document.getElementsByName('btnK')[0];
  var feelingLuckyButton = document.getElementsByName('btnI')[0];

  nav.remove();
  footer.remove();

  document.body.style.backgroundColor = 'black';

  gaFullLogoContainer.style.marginTop = '189px'

  googleLogo.src = gaFullLogo;
  googleLogo.srcset = '';
  googleLogo.style.height = '72px';
  googleLogo.style.paddingTop = '0px';
  googleLogo.style.backgroundColor = 'white';

  micImg.childNodes[0].remove()
  newMicImg.setAttribute('src', gaGearImg )
  micImg.appendChild( newMicImg )
  newMicImg.style.height = '28px';
  newMicImg.style.paddingTop = '8px';

  searchButton.value = "GA Search"
  feelingLuckyButton.value = "I'm feeling Hacky"
}
gaMod();
