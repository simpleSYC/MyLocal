Vue.component("serco", {
    template: `<div>
    <div class="w3-container" id="menu">
    <div class="w3-content" style="max-width:700px">
    
    <h5 class="w3-center" style="position: relative;top: 70px;"><span class="w3-tag w3-wide">Search</span></h5>
    <img src="index_files/MEDIA/LogoMylocal.png" style="width:100%;max-width:1000px;border-radius: 10px;">
    
    <div style=" font-size: 18px; position: relative;top: -120px;margin-bottom: -55px;text-align: center;color:#efdf9d;font-weight: bold;">
    <h3>Cheak registred acccount</h3><a style="margin:auto;">https://mylocal.sytes.net/</a>
    <input id="cheak_user" type="text"></input></div>
    
    <button id="serch_btn" style="margin:auto;display:block">search</button>
    </div>
    
    <div  id="rez" style="transform:scale(0);">
    
    <img class="img_simmbol_0"> <span class="cheked_info"><i class='fa fa-user-circle usr_1'></i></span>
    <button class="simbol_btn"></button>
    
    <br><br>
    
    <button class="simbol_btn"></button>
    <button style="width: 50px;height: 50px;border-radius: 15px;display: inherit;position: initial;background: azure;">
    <svg style="position: relative;left: 50%;transform: translate(-50%, -50%) scale(0.3);z-index: 0;cursor: pointer;display: flex;width: 160px;height: 160px;top: 50%;">
    <defs id="SvgjsDefs1001"><linearGradient id="SvgjsLinearGradient1011"><stop id="SvgjsStop1012" stop-color="#ef4136" offset="0"></stop><stop id="SvgjsStop1013" stop-color="#fbb040" offset="1"></stop></linearGradient></defs>
    <g id="SvgjsG1007" featurekey="7KWit6-0" transform="matrix(2.0708845150030792,0,0,2.0708845150030792,57.92911548499692,-0.5672532459293986)" fill="url(#SvgjsLinearGradient1011)" style="top: -22px;transform:  scale(1.8);left: 50%;top: 50%;position: absolute;"><g xmlns="http://www.w3.org/2000/svg"><path d="M66.9,44.5c0.3-0.1,0.6-0.3,0.8-0.6c0.2-0.3,0.2-0.7,0.1-1c-0.2-0.6-0.7-1-1.3-1c-0.1,0-0.2,0-0.4,0.1   c-0.3,0.1-0.6,0.3-0.8,0.6c-0.2,0.3-0.2,0.7-0.1,1C65.5,44.3,66.2,44.7,66.9,44.5z" style="fill: none;"></path><path d="M28.1,42.1c-0.1,0-0.2,0-0.4,0.1c-0.7,0.2-1.1,0.9-0.9,1.6c0.1,0.3,0.3,0.6,0.6,0.8c0.3,0.2,0.7,0.2,1,0.1   c0.3-0.1,0.6-0.3,0.8-0.6c0.2-0.3,0.2-0.7,0.1-1C29.2,42.5,28.7,42.1,28.1,42.1z" style="fill: none;"></path><path d="M48.2,57.2c0-0.9-0.2-1.3-2.5-1.3c-2.5,0-3,0.5-3,1.3c0,0.9,1.7,2,2.7,2.5C46.5,59.2,48.2,58.1,48.2,57.2z" style="fill: none;"></path><path d="M52.3,55.9c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0-0.3-0.1-0.3-0.2c-0.1-0.2-0.1-0.4,0.1-0.5c0.3-0.2,8.2-4.9,30.6-1.9   c-0.3-11-4.9-22-5-22.1c0-0.1-0.1-0.2-0.1-0.4l1.8-21.7C75.2,11.1,62,18,57.5,22.7C57.4,22.9,57.2,23,57,23c-0.2,0-0.4-0.1-0.6-0.2   c-1.6-1.6-7.8-1.9-10.9-1.9c-2.2,0-9.8,0.5-11,1.9C34.4,22.9,34.2,23,34,23c-0.2,0-0.4-0.1-0.6-0.2C28.9,18,15.2,11.8,11,9.9   l2.4,20.9c0,0.1,0,0.3-0.1,0.4c-0.1,0.2-4.9,11.2-5.3,22.1c22-2.8,29.8,1.8,30.1,2c0.2,0.1,0.2,0.3,0.1,0.5   C38.2,55.9,38.1,56,38,56c-0.1,0-0.1,0-0.2-0.1c-0.1,0-7.9-4.7-29.7-1.9c0,2.3,0.1,4.5,0.6,6.6c20.4-5.5,28.5-3.3,28.9-3.2   c0.2,0.1,0.3,0.3,0.3,0.5c-0.1,0.2-0.3,0.3-0.5,0.3c-0.1,0-8.3-2.2-28.5,3.2c0.4,1.4,0.8,2.8,1.5,4.1c18.7-7.6,26.6-6.5,26.9-6.5   c0.2,0,0.4,0.2,0.3,0.4c0,0.2-0.2,0.4-0.4,0.3c-0.1,0-8-1.1-26.4,6.4c0.5,0.9,1.1,1.7,1.7,2.4c4.8,5.5,10.2,9.1,16.5,11.1   c0.1,0,9.6,3.1,24.7,1c11.5-1.6,19.8-5.7,24.8-12.1c0.6-0.7,1-1.5,1.5-2.3C61.1,58.7,53,59.8,53,59.8c-0.2,0-0.4-0.1-0.4-0.3   c0-0.2,0.1-0.4,0.3-0.4c0.4-0.1,8.3-1.2,27.4,6.7c0.6-1.3,1.1-2.7,1.5-4.2c-20.6-5.6-28.9-3.4-29-3.4c-0.2,0.1-0.4-0.1-0.5-0.3   c-0.1-0.2,0.1-0.4,0.3-0.5c0.4-0.1,8.6-2.3,29.4,3.4c0.5-2.2,0.6-4.4,0.6-6.7C60.3,51.1,52.4,55.9,52.3,55.9z M64.7,39   c3,0,5.4,2.4,5.4,5.4c0,3-2.4,5.4-5.4,5.4c-3,0-5.4-2.4-5.4-5.4C59.3,41.4,61.7,39,64.7,39z M27.1,49.8c-3,0-5.4-2.4-5.4-5.4   c0-3,2.4-5.4,5.4-5.4c3,0,5.4,2.4,5.4,5.4C32.5,47.3,30,49.8,27.1,49.8z M50.8,65.6c-0.1,0-0.2,0-0.2,0c-2.1,0-3.6-0.5-4.6-1.6   c-0.2-0.2-0.3-0.4-0.4-0.5c-0.2,0.3-0.3,0.5-0.6,0.8c-1,1.1-2.6,1.6-4.6,1.6c-0.1,0-0.2,0-0.2,0c-0.4,0-0.8-0.4-0.8-0.8   c0-0.4,0.4-0.7,0.8-0.8c1.7,0,3-0.3,3.7-1.1c0.8-0.8,0.7-1.8,0.7-1.8c0-0.1,0-0.2,0.1-0.3c-1.1-0.5-3.5-2-3.5-3.8   c0-2.8,3.2-2.8,4.5-2.8c1.4,0,4,0,4,2.8c0,1.9-2.3,3.3-3.4,3.8c0,0.1,0,0.1,0,0.2c0,0.1,0,1,0.8,1.8c0.7,0.8,2,1.1,3.7,1.1   c0.5,0,0.8,0.3,0.8,0.8C51.6,65.3,51.2,65.6,50.8,65.6z" style="fill: none;"></path><path d="M50.8,64.1c-1.7,0-3-0.3-3.7-1.1c-0.8-0.8-0.8-1.7-0.8-1.8c0-0.1,0-0.1,0-0.2c1.1-0.6,3.4-2,3.4-3.8c0-2.8-2.6-2.8-4-2.8   c-1.4,0-4.5,0-4.5,2.8c0,1.9,2.4,3.3,3.5,3.8c0,0.1-0.1,0.2-0.1,0.3c0,0,0,1-0.7,1.8c-0.7,0.8-2,1.1-3.7,1.1   c-0.4,0-0.8,0.3-0.8,0.8c0,0.4,0.3,0.8,0.8,0.8c0.1,0,0.2,0,0.2,0c2.1,0,3.6-0.5,4.6-1.6c0.2-0.2,0.4-0.5,0.6-0.8   c0.1,0.2,0.3,0.4,0.4,0.5c1,1.1,2.6,1.6,4.6,1.6c0.1,0,0.2,0,0.2,0c0.4,0,0.8-0.4,0.8-0.8C51.6,64.4,51.2,64.1,50.8,64.1z    M42.7,57.2c0-0.8,0.5-1.3,3-1.3c2.2,0,2.5,0.4,2.5,1.3c0,0.9-1.7,2-2.7,2.5C44.4,59.2,42.7,58.1,42.7,57.2z"></path><path d="M1.3,62.8C1.1,62.9,1,63.1,1,63.3c0.1,0.2,0.2,0.3,0.4,0.3c0,0,0.1,0,0.1,0c2-0.7,4-1.2,5.8-1.7c-0.1-0.2-0.1-0.5-0.2-0.8   C5.3,61.6,3.3,62.2,1.3,62.8z"></path><path d="M37.3,58.2c0.2,0.1,0.4-0.1,0.5-0.3c0.1-0.2-0.1-0.4-0.3-0.5c-0.4-0.1-8.5-2.3-28.9,3.2c0.1,0.3,0.1,0.5,0.2,0.8   C29.1,55.9,37.2,58.1,37.3,58.2z"></path><path d="M5.6,67.5c-0.2,0.1-0.3,0.3-0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.2c0.1,0,0.1,0,0.2,0c1.2-0.5,2.3-1,3.4-1.5   c-0.1-0.2-0.3-0.5-0.4-0.7C7.9,66.6,6.8,67,5.6,67.5z"></path><path d="M37.1,59.8c0.2,0,0.4-0.1,0.4-0.3c0-0.2-0.1-0.4-0.3-0.4c-0.3-0.1-8.2-1.2-26.9,6.5c0.1,0.2,0.2,0.5,0.4,0.7   C29.2,58.7,37.1,59.8,37.1,59.8z"></path><path d="M27.1,39c-3,0-5.4,2.4-5.4,5.4c0,3,2.4,5.4,5.4,5.4c3,0,5.4-2.4,5.4-5.4C32.5,41.4,30,39,27.1,39z M29.2,44.1   c-0.2,0.3-0.4,0.5-0.8,0.6c-0.3,0.1-0.7,0.1-1-0.1c-0.3-0.2-0.5-0.4-0.6-0.8c-0.2-0.7,0.2-1.4,0.9-1.6c0.1,0,0.2-0.1,0.4-0.1   c0.6,0,1.1,0.4,1.3,1C29.4,43.4,29.4,43.8,29.2,44.1z"></path><path d="M64.7,49.8c3,0,5.4-2.4,5.4-5.4c0-3-2.4-5.4-5.4-5.4c-3,0-5.4,2.4-5.4,5.4C59.3,47.3,61.7,49.8,64.7,49.8z M65.4,42.6   c0.2-0.3,0.4-0.5,0.8-0.6c0.1,0,0.2-0.1,0.4-0.1c0.6,0,1.1,0.4,1.3,1c0.1,0.3,0.1,0.7-0.1,1c-0.2,0.3-0.4,0.5-0.8,0.6   c-0.7,0.2-1.4-0.2-1.6-0.9C65.2,43.2,65.2,42.9,65.4,42.6z"></path><path d="M88.8,62.8c-1.9-0.6-3.7-1.1-5.5-1.6c0.5-2.1,0.7-4.4,0.7-6.9c0.4,0.1,0.7,0.1,1.1,0.2c0.2,0,0.4-0.1,0.4-0.3   c0-0.2-0.1-0.4-0.3-0.4c-0.4-0.1-0.8-0.1-1.2-0.2c0-2.7-0.3-5.5-0.9-8.5c-1.3-7.2-3.7-13.2-4.1-14.3l1.9-22.9   c0-0.3-0.1-0.5-0.3-0.7C80.3,7,80,7,79.8,7.1c-0.7,0.3-16.9,8.3-22.9,14.1c-2.7-1.7-9.1-1.9-11-1.9c-0.1,0-0.2,0-0.3,0   c-0.2,0-8.6,0.1-11.5,1.9C28,15.4,11.1,8.3,10.4,8c-0.3-0.1-0.5-0.1-0.8,0.1C9.4,8.2,9.3,8.5,9.3,8.8l2.5,22   c-0.7,1.7-5.1,12.2-5.4,22.7c-0.5,0.1-1.1,0.2-1.7,0.2c-0.2,0-0.4,0.2-0.3,0.4c0,0.2,0.2,0.4,0.4,0.3c0.5-0.1,1-0.1,1.5-0.2   c0,2.3,0.2,4.6,0.7,6.8c0.1,0.3,0.1,0.5,0.2,0.8c0.4,1.5,0.9,2.9,1.6,4.3c0.1,0.2,0.2,0.5,0.4,0.7c0.6,1,1.2,2,2,2.9   c5,5.7,10.6,9.5,17.1,11.6c0.3,0.1,5.6,1.8,14.7,1.8c3.1,0,6.7-0.2,10.7-0.8c11.9-1.7,20.6-5.9,25.8-12.6c0.6-0.8,1.2-1.7,1.7-2.6   c0.9,0.4,1.9,0.8,2.9,1.2c0.1,0,0.1,0,0.2,0c0.1,0,0.3-0.1,0.4-0.2c0.1-0.2,0-0.4-0.2-0.5c-1-0.4-1.9-0.8-2.8-1.2   c0.6-1.3,1.2-2.8,1.5-4.4c1.7,0.5,3.5,1,5.4,1.6c0,0,0.1,0,0.1,0c0.2,0,0.3-0.1,0.4-0.3C89.2,63.1,89,62.9,88.8,62.8z M81.9,60.8   c-20.8-5.7-29-3.5-29.4-3.4c-0.2,0.1-0.3,0.3-0.3,0.5c0.1,0.2,0.3,0.3,0.5,0.3c0.1,0,8.3-2.3,29,3.4c-0.4,1.5-0.8,2.9-1.5,4.2   c-19.1-7.9-27-6.7-27.4-6.7c-0.2,0-0.4,0.2-0.3,0.4c0,0.2,0.2,0.4,0.4,0.3c0.1,0,8.1-1.1,26.9,6.6c-0.4,0.8-0.9,1.5-1.5,2.3   c-5,6.4-13.4,10.5-24.8,12.1c-15.1,2.1-24.6-1-24.7-1c-6.3-2-11.7-5.6-16.5-11.1c-0.7-0.8-1.2-1.6-1.7-2.4   c-0.1-0.2-0.3-0.5-0.4-0.7c-0.7-1.3-1.2-2.7-1.5-4.1c-0.1-0.3-0.1-0.5-0.2-0.8c-0.5-2.1-0.6-4.4-0.6-6.6   c21.8-2.8,29.6,1.8,29.7,1.9c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.3-0.1,0.3-0.2c0.1-0.2,0.1-0.4-0.1-0.5c-0.3-0.2-8.1-4.8-30.1-2   c0.4-10.9,5.2-21.9,5.3-22.1c0.1-0.1,0.1-0.3,0.1-0.4L11,9.9c4.2,1.8,17.9,8.1,22.4,12.8c0.1,0.2,0.4,0.2,0.6,0.2   c0.2,0,0.4-0.1,0.6-0.3c1.2-1.3,8.8-1.9,11-1.9c3.1,0,9.3,0.3,10.9,1.9c0.1,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.5-0.2   C62,18,75.2,11.1,79.2,9.1l-1.8,21.7c0,0.1,0,0.3,0.1,0.4c0.1,0.2,4.7,11.1,5,22.1c-22.4-3-30.3,1.7-30.6,1.9   c-0.2,0.1-0.2,0.4-0.1,0.5c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0,0.1,0,0.2-0.1c0.1-0.1,8-4.8,30.2-1.8C82.5,56.4,82.4,58.6,81.9,60.8z"></path></g></g>
    </svg></button> <span class="cheked_info"> <i class='fa fa-user-circle usr_2'></i></span>
    
    </div>
    
    
    </div>

</div>`})
    var storeqqee = new Vuex.Store({
    state: {
      view:"serco"
    }
    })   

    var signqqee = new Vue({
    el:"#Serco",
    store: store
    })