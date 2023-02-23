var DX5DnProgress=function(manager,popwin,progressType){var tdoc=popwin.document;var headTag=tdoc.querySelector("head");if(!headTag){headTag=tdoc.createElement("head");tdoc.documentElement.appendChild(headTag)}if(!popwin.declarationDX5PopupStyle){popwin.declarationDX5PopupStyle=[]}if(popwin.declarationDX5PopupStyle.indexOf("dextuploadx5-dn-"+progressType+"-style")===-1){var popcss=tdoc.createElement("link");popcss.setAttribute("rel","stylesheet");popcss.setAttribute("type","text/css");popcss.setAttribute("href",combinePath(manager.rootPath,"./pop/dextuploadx5-dn-"+progressType+"-style.css"));headTag.appendChild(popcss);popwin.declarationDX5PopupStyle.push("dextuploadx5-dn-"+progressType+"-style")}var pdnwin=tdoc.createElement("div");pdnwin.classList.add("dx5-pop-dn");tdoc.documentElement.appendChild(pdnwin);var pdnctn=tdoc.createElement("div");pdnctn.classList.add("dx5-pop-dn-container");pdnwin.appendChild(pdnctn);var pdnobj=tdoc.createElement("object");pdnobj.classList.add("dx5-pop-dn-svg");pdnobj.style.width="100%";pdnobj.style.height="100%";pdnobj.type="image/svg+xml";pdnobj.data=combinePath(manager.rootPath,"./pop/dextuploadx5-dn-"+progressType+".svg");pdnctn.appendChild(pdnobj);this.pwn=pdnwin;this.pob=pdnobj;this.mng=manager;this.active=false};DX5DnProgress.prototype.show=function(id){if(!id)return;var tw=this.pwn;var to=this.pob;var mn=this.mng;addClass(tw,"is-visible");this.active=true;(function detectPopup(delay){if(delay<0){mn.throwErr(id,"EX5-14",mn.errs.get("EX5-14","_The progress popdown window doesn't exist for DEXTUploadX5."));return}if(to&&to.contentDocument&&typeof to.contentDocument.updateUI=="function"){to.contentDocument.updateUI(mn.get(id))}else{setTimeout(function(){detectPopup(delay-1e3)},100)}})(3e3)};DX5DnProgress.prototype.hide=function(id,force,callback){var tw=this.pwn;var to=this.pob;var mn=this.mng;var md=mn.get(id);if(this.active)console.log("DX5: Hide progress down window("+id+") "+(force?"by force":"")+".");this.active=false;if(md&&force)md.stopDownloading();if(to&&to.contentDocument&&typeof to.contentDocument.stopUI=="function"){(function detectStop(){var ret=to.contentDocument.stopUI(!force);if(ret==true||force==true){removeClass(tw,"is-visible");if(callback&&typeof callback=="function")callback()}else{setTimeout(function(){detectStop()},100)}})()}};