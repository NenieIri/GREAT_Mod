function hello(G){
  JQueryAppend=document.createElement('script');
  JQueryAppend.setAttribute('src','https://nenieiri.github.io/GREAT_Mod/js/jquery.min.js');
  document.head.appendChild(JQueryAppend);
  
  document.getElementById('displayControl').parentElement.removeAttribute('style');
  document.getElementById('displayControl').parentElement.setAttribute('style', 'display:none;');
  
  var user_IMG = G.querySelector('#mainui_user > .user-container').img.getAttribute('src');
  console.log(user_IMG);
  var mainui_user = '<div class="user-container"><img class="user-picture" src="https://agar.io/img/profilepic_guest.png"> <div id="dnaWallet"> <span class="labelF2">20</span> <span class="sprite-main dna-small-icon"></span> <div class="plusF2"> <span>+</span> </div></div><div id="coinWallet"> <span class="labelF2">100</span> <span class="sprite-main currency-icon"></span> <div class="plusF2"> <span>+</span> </div></div><div class="user-nameF1">Guest</div><div id="progressBarF1"> <div class="progress-bar-container"> <div class="progress-barF3" style="width: 0%;"></div><span class="progress-bar-textF3">0/50 XP</span> </div><div class="progress-bar-border"></div><div class="progress-bar-starF3 sprite leaguestar-fly"> <span>1</span> </div></div><div id="xpButton"> <span class="boost-image sprite-main xpboost-3x-shop"></span> <div data-f5="" class="circle green"> <span>+</span> </div></div><div id="massButton"> <span class="boost-image sprite-main massboost-3x-shop"></span> <div data-f5="" class="circle green"> <span>+</span> </div></div></div>';
  G.getElementById('mainui-user').innerHTML=mainui_user;
}
