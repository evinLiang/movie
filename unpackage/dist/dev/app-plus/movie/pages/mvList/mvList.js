
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"mvList .",[1],"item { position: relative; z-index: 1; margin-bottom: ",[0,32],"; }\n.",[1],"mvList .",[1],"item wx-image { width: 100%; border-radius: ",[0,10],"; box-shadow: 0 0 10px hsla(0, 0%, 51%, .3); }\n.",[1],"mvList .",[1],"item .",[1],"name { position: absolute; z-index: 2; left: ",[0,0],"; bottom: ",[0,0],"; color: #fff; background: rgba(0,0,0,0.5); display: inline-block; width: 100%; padding: ",[0,25]," ",[0,20],"; font-size: ",[0,30],"; box-sizing: border-box; border-radius: ",[0,0]," ",[0,0]," ",[0,10]," ",[0,10],"; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/mvList/mvList.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      