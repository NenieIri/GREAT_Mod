function hello(G){
  JQueryAppend=document.createElement('script');
  JQueryAppend.setAttribute('src','https://nenieiri.github.io/GREAT_Mod/js/jquery.min.js');
  document.head.appendChild(JQueryAppend);
  
  CSSmainAppend=document.createElement('link');
  CSSmainAppend.setAttribute('rel', "stylesheet");
  CSSmainAppend.setAttribute('href', "https://nenieiri.github.io/GREAT_Mod/css/main1.css");
  document.head.appendChild(CSSmainAppend);
  
  document.getElementById('displayControl').parentElement.removeAttribute('style');
  document.getElementById('displayControl').parentElement.setAttribute('style', 'display:none;');
  
  var user_IMG = G.querySelector('#mainui-user .user-container').firstChild.getAttribute('src');
  var dnaWallet = G.querySelector('#dnaWallet').firstChild.innerHTML;
  var coinWallet = G.querySelector('#coinWallet').firstChild.innerHTML;
  var user_name = G.querySelector('#mainui-user .user-container .user-name').innerHTML;
  var progress_bar_text = G.querySelector('#progressBar .progress-bar-text').innerHTML;
  var progress_bar_level = G.querySelector('#progressBar .progress-bar-star span').innerHTML;
  var starClass = G.querySelector('#progressBar div:nth-child(3)').getAttribute('class');
  var xpButtonTimer = G.querySelectorAll('#xpButton span');
  var xpButtonClass = G.querySelector('#xpButton div').getAttribute('class');
  var xpButtonCount = G.querySelector('#xpButton div span').innerHTML;
  var massButtonTimer = G.querySelectorAll('#massButton span');
  var massButtonClass = G.querySelector('#massButton div').getAttribute('class');
  var massButtonCount = G.querySelector('#massButton div span').innerHTML;
  
  xpButtonTimer = xpButtonTimer[1] ? xpButtonTimer[1] : '';
  massButtonTimer = massButtonTimer[1] ? massButtonTimer[1] : '';
  //alert(xpButtonTimer);
  
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

      mainui_user += '<div id="progressBarF1">';
      mainui_user +=    '<div class="progress-bar-container">';
      mainui_user +=        '<div class="progress-barF3" style="width: 0%;"></div>';
      mainui_user +=        '<span class="progress-bar-textF3">'+progress_bar_text+'</span>';
      mainui_user +=     '</div>';
      mainui_user +=     '<div class="progress-bar-border"></div>';
      mainui_user +=     '<div data-f-star="" class="'+starClass+'">';
      mainui_user +=        '<span>'+progress_bar_level+'</span>';
      mainui_user +=     '</div>';
      mainui_user += '</div>';
      
      mainui_user += '<div id="xpButton">';
      mainui_user +=    '<span class="boost-image sprite-main xpboost-3x-shop"></span>';
      //mainui_user +=     xpButtonTimer; 
      mainui_user +=    '<div data-f5="" class="'+xpButtonClass+'">';
      mainui_user +=        '<span>'+xpButtonCount+'</span>';
      mainui_user +=    '</div>';
      mainui_user += '</div>';
      mainui_user += '<div id="massButton">';
      mainui_user +=    '<span class="boost-image sprite-main massboost-3x-shop"></span>';
      //mainui_user +=     massButtonTimer; 
      mainui_user +=    '<div data-f5="" class="'+massButtonClass+'">';
      mainui_user +=        '<span>'+massButtonCount+'</span>';
      mainui_user +=    '</div>';
      mainui_user += '</div>';
      
      mainui_user += '</div>';
  
  G.getElementById('mainui-user').innerHTML=mainui_user;
}

