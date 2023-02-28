function initUI(){gvector.headerHeight=0;gvector.fileItemHeight=110;gvector.uitype="TILE";gui=new ApplicationForm;gui.updateFilterInfo();gui.updateCurrentFilesInfo();gui.updateUI();document.addEventListener("keydown",onFileItemKeyDownHandler,false);svgh.get("XHTML-INPUT-FILES").addEventListener("change",function(){var success=registerLocalFiles(this.files);if(!success){resetHtmlFiles()}},false);if(genvironment.supportedOpenFolderDialog){svgh.get("XHTML-INPUT-FOLDER").addEventListener("change",function(){var success=registerLocalFiles(this.files);if(!success){resetHtmlFiles()}},false)}var scroller=svgh.get("UIC-FILE-SCROLL-SECTION");if(scroller){svgh.get("UIC-FILE-SCROLL-UP").addEventListener("click",function(evt){evt.stopPropagation();evt.preventDefault();if(gfileEngine.acting){errorOut("ESVG-00024",gRB.get("ESVG-00024","_파일을 전송하고 있는 상태입니다."));return}gui.scrollRegion("up")},false);svgh.get("UIC-FILE-SCROLL-DOWN").addEventListener("click",function(evt){evt.stopPropagation();evt.preventDefault();if(gfileEngine.acting){errorOut("ESVG-00024",gRB.get("ESVG-00024","_파일을 전송하고 있는 상태입니다."));return}gui.scrollRegion("down")},false)}var scrollFrame=svgh.get("UIC-FILE-AREA");if(genvironment.isLegacyEdge){window.addEventListener("wheel",onFileAreaWheelHandler,false)}else if(genvironment.isFirefox){scrollFrame.addEventListener("DOMMouseScroll",onFileAreaWheelHandler,false)}else{scrollFrame.addEventListener("mousewheel",onFileAreaWheelHandler,false)}}var ApplicationForm=function(){this.uitype="TILE";this.helper=new SVGHelper;this.uRoot=this.helper.getAsUnit("UIC-DEXTUPLOADX5-MAIN");this.uMain=this.helper.getAsUnit("UIC-MAIN-AREA");this.uFArea=this.helper.getAsUnit("UIC-FILE-AREA");this.uJobTxt=this.helper.getAsUnit("UIC-JOB-WORKING-TXT");this.uJobBk=this.helper.getAsUnit("UIC-JOB-WORKING-BK")};ApplicationForm.prototype.throwError=function(code,msg,parameters){errorOut(code,msg,parameters)};ApplicationForm.prototype.getSelectedFirstSVGUnit=function(useDefault){var target=null,uitems=null;if(gselectedList.length>0){target=this.helper.getAsUnit(gselectedList[0])}else if(useDefault===true){uitems=this.helper.queryAll("#UIC-FILE-AREA .css-item");target=uitems.length>0?new SVGUnit(uitems.item(0)):null}return target};ApplicationForm.prototype.getSelectedLastSVGUnit=function(useDefault){var target=null,uitems=null;if(gselectedList.length>0){target=this.helper.getAsUnit(gselectedList[gselectedList.length-1])}else if(useDefault===true){uitems=this.helper.queryAll("#UIC-FILE-AREA .css-item");target=uitems.length>0?new SVGUnit(uitems.item(0)):null}return target};ApplicationForm.prototype.getRelativeSVGUnit=function(basis,keyboard){var target=null;var area=this.uFArea;var ch=parseInt(area.att("height"));var step=Math.floor(ch/gvector.fileItemHeight)*gvector.tileColumnCount+1;var ncount=0;if(keyboard==40||keyboard==39&&gvector.uitype=="TILE"){target=basis.element.nextSibling}else if(keyboard==38||keyboard==37&&gvector.uitype=="TILE"){target=basis.element.previousSibling}else if(keyboard==35){target=this.helper.get(gsortedList[gsortedList.length-1])}else if(keyboard==36){target=this.helper.get(gsortedList[0])}else if(keyboard==34){target=basis.element;for(ncount=step;ncount>0&&target;ncount--){if(target.nextSibling&&target.nextSibling.localName==="svg"){target=target.nextSibling}else break}}else if(keyboard==33){target=basis.element;for(ncount=step;ncount>0&&target;ncount--){if(target.previousSibling&&target.previousSibling.localName==="svg"){target=target.previousSibling}else break}}return target!=null?new SVGUnit(target):null};ApplicationForm.prototype.updateUI=function(basis){if(!basis)basis=this.uRoot;var size=basis.getComputedSize();var area=this.uFArea,ch=area.att("height"),unit=gvector.fileItemHeight,uitems=svgh.queryAll("#UIC-FILE-AREA .css-item"),len=uitems.length,trow=0;if(gvector.tileColumnCount<2)gvector.tileColumnCount=1;trow=len%gvector.tileColumnCount==0?len/gvector.tileColumnCount:parseInt(len/gvector.tileColumnCount,10)+1;var th=trow*unit;if(ch<th){gvector.vscrollbarWidth=15}else{gvector.vscrollbarWidth=0}this.uMain.updateLayout(size.w,size.h,gvector)};ApplicationForm.prototype.displayJobWorking=function(msg){this.uJobTxt.replaceText(msg)};ApplicationForm.prototype.toggleJobWorking=function(show){var enableFilterFx=genvironment.supportedFilterFx;if(enableFilterFx){this.uFArea.att("filter",show?"url(#UIS-BLURING-JOB)":"")}else{this.uJobBk.css("display",show?"block":"none")}this.uJobTxt.replaceText("").css("display",show?"block":"none").att("fill",enableFilterFx?"#000":"#fff")};ApplicationForm.prototype.createUIItem=function(item){var gTop=Math.floor(gsortedList.length/gvector.tileColumnCount)*gvector.fileItemHeight;var gLeft=Math.floor(gsortedList.length%gvector.tileColumnCount)*Math.floor(100/gvector.tileColumnCount)+"%";var gWidth=Math.floor(100/gvector.tileColumnCount)+"%";var uitem=svgh.createUnit("svg",item.id,{class:"css-item",x:gLeft,y:gTop,height:gvector.fileItemHeight,"layout-dx5":"width:"+gWidth});var ugroup=svgh.createUnit("g").into(uitem);svgh.createUnit("title").append(svgh.mkTextNode(item.name)).into(ugroup);svgh.createUnit("rect").attp({class:"css-item-back",x:0,y:0,width:"100%",height:"100%"}).into(ugroup);var uinfogroup=svgh.createUnit("g").attp({class:"css-item-info"}).into(ugroup);var uthumb=svgh.createUnit("image",item.id+"-THUMB",{x:15,y:0,width:60,height:gvector.fileItemHeight,preserveAspectRatio:"xMidYMid meet"}).into(uinfogroup);if(item.thumbnail){uthumb.att("xlink:href",item.thumbnail)}else if(isImageFile(item.ofile)){var reader=new FileReader;reader.onload=function(t){return function(evt){t.thumbnail=evt.target.result;uthumb.att("xlink:href",t.thumbnail)}}(item);reader.readAsDataURL(item.ofile)}else{uthumb.att("xlink:href","../assets/icons/"+getIconFilename(item.name,true))}svgh.createUnit("text").attp({class:"css-item-font-name css-item-font-color",x:90,y:37,"font-size":"12px"}).append(svgh.mkTextNode(item.name)).into(uinfogroup);svgh.createUnit("text").attp({class:"css-item-font-name css-item-font-color",x:90,y:57,"font-size":"11px"}).append(svgh.mkTextNode(item.size<0?"Size undefined":getFriendlySize(item.size))).into(uinfogroup);svgh.createUnit("text").attp({class:"css-item-font-name css-item-font-color",x:90,y:77,"font-size":"11px"}).append(svgh.mkTextNode(formatedDateTypeA(item.mdate))).into(uinfogroup);var uchkgroup=svgh.createUnit("g",item.id+"-CHECKER",{class:"css-item-checker"}).into(ugroup);var uchknot=svgh.createUnit("use",item.id+"-CHECKER-NOT",{style:"display:"+(item.checked?"none":"block"),"xlink:href":"#UIS-CHECKER",y:4,width:18,height:18,"layout-dx5":"x:100%-22px"}).into(uchkgroup);var uchkchk=svgh.createUnit("use",item.id+"-CHECKER-CHK",{style:"display:"+(item.checked?"block":"none"),"xlink:href":"#UIS-CHECKER-CHKED",y:4,width:18,height:18,"layout-dx5":"x:100%-22px"}).into(uchkgroup);if(gvector.checkerWidth===0)uchkgroup.att("class","hide",true);var uoparea=svgh.createUnit("svg").attp({class:"css-item-op",x:0,height:32,"layout-dx5":"width:100%;y:{fileItemHeight}-32px;"}).into(ugroup);var ubtnrun=svgh.createUnit("use",item.id+"-OPRUN",{class:"css-item-op-run",style:"display:"+(item.type=="VIRTUAL"&&item.openUrl&&gvector.openButtonVisible?"block":"none")+"; cursor: pointer",y:8,width:16,height:16,"xlink:href":"#UIS-RUN","layout-dx5":"x:100%-62px"}).into(uoparea);var ubtndown=svgh.createUnit("use",item.id+"-OPDOWN",{class:"css-item-op-down",style:"display:"+(item.type=="VIRTUAL"&&item.downUrl&&gvector.downloadButtonVisible?"block":"none")+"; cursor: pointer",y:8,width:16,height:16,"xlink:href":"#UIS-DOWNLOAD","layout-dx5":"x:100%-42px"}).into(uoparea);var ustatus=svgh.createUnit("use",item.id+"-STATUS",{y:8,width:16,height:16,"layout-dx5":"x:100%-22px"}).into(uoparea);if(item.lock===true)ustatus.att("xlink:href","#UIS-LOCK");else if(item.status=="DONE")ustatus.att("xlink:href","#UIS-UPDONE");else if(item.type=="FILE"&&item.status=="WAIT")ustatus.att("xlink:href","#UIS-UPWAIT");else ustatus.att("xlink:href","#UIS-VFWAIT");svgh.createUnit("line").attp({class:"css-item-grid css-item-grid-color",x1:"100%",y1:0,x2:"100%",y2:gvector.fileItemHeight,"shape-rendering":"crispEdges","stroke-width":1.5}).into(ugroup);svgh.createUnit("line").attp({class:"css-item-grid css-item-grid-color",x1:0,x2:"100%",y1:gvector.fileItemHeight,y2:gvector.fileItemHeight,"shape-rendering":"crispEdges","stroke-width":1.5}).into(ugroup);ugroup.atto("dataItem",item).bind("click",onItemClickHandler,false);uchknot.atto("dataItem",item).bind("click",onFileCheckHandler,false);uchkchk.atto("dataItem",item).bind("click",onFileCheckHandler,false);ubtnrun.atto("dataItem",item).bind("click",onRunFileHandler,false);ubtndown.atto("dataItem",item).bind("click",onDownloadFileHandler,false);return uitem.element};ApplicationForm.prototype.updateUIItem=function(item){var op=svgh.getAsUnit(item.id+"-STATUS");if(op.element.correspondingUseElement)op=new SVGUnit(op.element.correspondingUseElement);if(item.lock===true)op.att("xlink:href","#UIS-LOCK");else if(item.status=="DONE")op.att("xlink:href","#UIS-UPDONE");else if(item.type=="FILE"&&item.status=="WAIT")op.att("xlink:href","#UIS-UPWAIT");else op.att("xlink:href","#UIS-VFWAIT");svgh.getAsUnit(item.id+"-OPRUN").css("display",item.type=="VIRTUAL"&&item.openUrl?"block":"none");svgh.getAsUnit(item.id+"-OPDOWN").css("disolay",item.type=="VIRTUAL"&&item.downUrl?"block":"none")};ApplicationForm.prototype.deleteUIItem=function(item){var uitem=svgh.get(item.id);if(!uitem)return;var current=uitem,sibling=null,evtarget=null,cx=current.x.baseVal.value,cy=current.y.baseVal.value,sx=0,sy=0;while(current.nextSibling){sibling=current.nextSibling;sx=sibling.x.baseVal.value;sy=sibling.y.baseVal.value;sibling.x.baseVal.value=cx;sibling.y.baseVal.value=cy;cx=sx;cy=sy;current=sibling}uitem.parentNode.removeChild(uitem);evtarget=uitem;if(evtarget){evtarget.dataItem=null;evtarget.removeEventListener("click",onItemClickHandler)}evtarget=uitem.querySelector("#"+item.id+"-CHECKER");if(evtarget){evtarget.dataItem=null;evtarget.removeEventListener("click",onFileCheckHandler)}evtarget=uitem.querySelector("#"+item.id+"-OPRUN");if(evtarget){evtarget.dataItem=null;evtarget.removeEventListener("click",onRunFileHandler)}evtarget=uitem.querySelector("#"+item.id+"-OPDOWN");if(evtarget){evtarget.dataItem=null;evtarget.removeEventListener("click",onDownloadFileHandler)}};ApplicationForm.prototype.updateCurrentFilesInfo=function(){var cnt=gfileEngine.ufiles.length;var size=gfileEngine.ufiles.getTotalSize(false);var strCount=cnt==0?"0 File":cnt+" Files";var strSize=size==0?"0 Byte":getFriendlySize(size);this.helper.getAsUnit("UIC-FOOTER-CURINFO").replaceText(strSize+" / "+strCount)};ApplicationForm.prototype.updateFilterInfo=function(){var tokens=[],fsize="";if(gvector.maxFileCount>=0)tokens.push(gvector.maxFileCount+(gvector.maxFileCount==0?" File":" Files"));if(gvector.minFileSize>=0)fsize=getFriendlySize(gvector.minFileSize)+"~";if(gvector.maxFileSize>=0)tokens.push(fsize+getFriendlySize(gvector.maxFileSize));else if(fsize)tokens.push(fsize);if(gvector.maxTotalSize>=0)tokens.push(getFriendlySize(gvector.maxTotalSize)+"(A)");this.helper.getAsUnit("UIC-FILTER-TXT").replaceText(tokens.length>0?tokens.join(" / "):gRB.get("RB-LIST-MAIN-0003","_필터없음"))};ApplicationForm.prototype.updateHeaderChecker=function(){};ApplicationForm.prototype.scrollRegion=function(action){var area=this.uFArea,cw=area.att("width"),ch=area.att("height"),th=Math.ceil(gsortedList.length/gvector.tileColumnCount)*gvector.fileItemHeight,from=area.getYinViewbox(0),to=0,temp=0,frameId,isBelow;if(ch>th&&from==0){return}else if(ch>th&&from!=0){to=0;isBelow=true}else if(action=="up"){temp=from-Math.floor(ch);to=temp<0?0:temp;isBelow=false}else if(action=="down"){temp=from+Math.floor(ch);to=temp>th-ch?th-ch:temp;isBelow=true}else return;if(from==to)return;function doScrollAnimation(){if(isBelow&&from>to||!isBelow&&from<to){from=to;area.att("viewBox","0 "+from+" "+cw+" "+ch);cancelAnimationFrame(frameId)}else{area.att("viewBox","0 "+from+" "+cw+" "+ch);from+=(isBelow?1:-1)*parseInt(ch*.2);frameId=requestAnimationFrame(doScrollAnimation)}}frameId=requestAnimationFrame(doScrollAnimation)};ApplicationForm.prototype.scrollTo=function(elementIndex){var area=this.uFArea,cw=area.att("width"),ch=area.att("height"),th=Math.ceil(gsortedList.length/gvector.tileColumnCount)*gvector.fileItemHeight,from=area.getYinViewbox(0),to=0,unit=gvector.fileItemHeight,dist=Math.floor(elementIndex/gvector.tileColumnCount),frameId,isBelow;if(ch>th&&from==0){return}else if(ch>th&&from!=0){to=0;isBelow=from<to}else{to=dist*unit;to=to>th-ch?th-ch:to;isBelow=from<to}if(from===to)return;if(Math.abs(from-to)<=1e3){var doScrollAnimation=function(){if(isBelow&&from>to||!isBelow&&from<to){from=to;area.att("viewBox","0 "+from+" "+cw+" "+ch);cancelAnimationFrame(frameId)}else{area.att("viewBox","0 "+from+" "+cw+" "+ch);from+=(isBelow?1:-1)*parseInt(ch*.2);frameId=requestAnimationFrame(doScrollAnimation)}};frameId=requestAnimationFrame(doScrollAnimation)}else{area.att("viewBox","0 "+to+" "+cw+" "+ch)}};ApplicationForm.prototype.createCustomColumn=function(){};ApplicationForm.prototype.deleteCustomColumn=function(){};ApplicationForm.prototype.getAllItems=function(){return Array.from(this.uFArea.element.querySelectorAll(".css-item"))};ApplicationForm.prototype.clearAllItems=function(){var parent=this.uFArea.element;while(parent.childNodes.length>1&&parent.lastChild.nodeName=="svg"){parent.removeChild(parent.lastChild)}};ApplicationForm.prototype.attachItem=function(item,index){var x=Math.floor(index%gvector.tileColumnCount)*Math.floor(100/gvector.tileColumnCount)+"%";var y=Math.floor(index/gvector.tileColumnCount)*gvector.fileItemHeight;new SVGUnit(item).att("x",x).att("y",y).into(this.uFArea)};ApplicationForm.prototype.toggleColumnVisible=function(){};ApplicationForm.prototype.setUIColumnLineColor=function(){};ApplicationForm.prototype.preview=function(index,method){var item=gfileEngine.ufiles.getItem(gsortedList[index]);var bgstr=hexColorToRgba(gvector.previewBgColor,.75);if(isImageFile(item.ofile)==false){this.throwError("ESVG-00073",gRB.get("ESVG-00073","_미리보기에 유효하지 않은 형식입니다."))}else if(["image/jpeg","image/pjpeg","image/gif","image/bmp","image/x-windows-bmp","image/png","image/svg+xml"].indexOf(item.ofile.type.toLowerCase())<0){this.throwError("ESVG-00073",gRB.get("ESVG-00073","_미리보기에 유효하지 않은 형식입니다."))}else{dispatchDEXTX5Event("preview",createDEXTX5Event("preview",{id:gvector.elementId,itemIndex:index,itemId:item.id,method:method,itemSource:item.thumbnail,backColor:bgstr}))}};ApplicationForm.prototype.moveUpAndDown=function(index,isUp){if(index===(isUp?0:gsortedList.length-1))return;var dindex=index+(isUp?-1:1);var sid=gsortedList[index];var did=gsortedList[dindex];var parent=this.uFArea;var sitem=parent.query(getIdSharp(sid,true));var ditem=parent.query(getIdSharp(did,true));if(isUp)parent.appendBefore(ditem,sitem.getNextSibling());else parent.appendBefore(ditem,sitem);var tempX=sitem.att("x");sitem.att("x",ditem.att("x"));ditem.att("x",tempX);var tempY=sitem.att("y");sitem.att("y",ditem.att("y"));ditem.att("y",tempY);var tempA=gsortedList[index];gsortedList[index]=gsortedList[dindex];gsortedList[dindex]=tempA};