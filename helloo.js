function hello(G){
  JQueryAppend=document.createElement('script');
  JQueryAppend.setAttribute('src','https://nenieiri.github.io/GREAT_Mod/js/jquery.min.js');
  document.head.appendChild(JQueryAppend);
  
  document.getElementById('displayControl').parentElement.removeAttribute('style');
  document.getElementById('displayControl').parentElement.setAttribute('style', 'display:none;');
  
  var user_IMG = G.querySelector('#mainui-user .user-container').firstChild.getAttribute('src');
  var dnaWallet = G.querySelector('#dnaWallet').firstChild.innerHTML;
  var coinWallet = G.querySelector('#coinWallet').firstChild.innerHTML;
  var user_name = G.querySelector('#mainui-user .user-container .user-name').innerHTML;
  
  var mainui_user = '<div class="user-container">';
  mainui_user += '<img class="user-picture" src="'+user_IMG+'">';
  mainui_user += '<div id="dnaWallet">';
  mainui_user +=    '<span class="labelF2">'+dnaWallet+'</span>';
  mainui_user +=    '<span class="sprite-main dna-small-icon"></span>';
  mainui_user +=    '<div class="plusF2"> <span>+</span> </div>';
  mainui_user += '</div>';
  mainui_user += '<div id="coinWallet">';
  mainui_user +=    '<span class="labelF2">'+coinWallet+'</span>';
  mainui_user +=    '<span class="sprite-main currency-icon"></span>';
  mainui_user +=    '<div class="plusF2"> <span>+</span> </div>';
  mainui_user += '</div>';
  mainui_user += '<div class="user-nameF1">'+user_name+'</div>';
  
  mainui_user += '<div id="progressBarF1"> <div class="progress-bar-container">';
  mainui_user += '<div class="progress-barF3" style="width: 0%;"></div><span class="progress-bar-textF3">0/50 XP</span> </div>';
  mainui_user += '<div class="progress-bar-border"></div><div class="progress-bar-starF3 sprite leaguestar-fly"> <span>1</span> </div>';
  mainui_user += '</div><div id="xpButton"> <span class="boost-image sprite-main xpboost-3x-shop"></span>';
  mainui_user += '<div data-f5="" class="circle green"> <span>+</span> </div></div>';
  mainui_user += '<div id="massButton"> <span class="boost-image sprite-main massboost-3x-shop"></span>';
  mainui_user += '<div data-f5="" class="circle green"> <span>+</span> </div></div></div>';
  
  G.getElementById('mainui-user').innerHTML=mainui_user;
}
