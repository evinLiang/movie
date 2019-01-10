
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"video .",[1],"_video { width: 100%; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/mvDetail/mvDetail.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      