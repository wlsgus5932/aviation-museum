var DX5MultiModule=function(manager,container,configuration,isHostEqualToDndObject){var host=document.createElement("object");host.id=getIdSharp(configuration.id,false);host.style.width=configuration.width;host.style.height=configuration.height;host.type="image/svg+xml";configuration.style=configuration.style||"list";var svgfilename=null;switch(configuration.style){case"tile":svgfilename="module/dextuploadx5-main-tile.svg";break;case"single":svgfilename="module/dextuploadx5-main-single.svg";break;case"grid":svgfilename="module/dextuploadx5-main-grid.svg";break;default:svgfilename="module/dextuploadx5-main-list.svg"}var url=combinePath(configuration.path,svgfilename);host.data=url+"?elementId="+escape(configuration.id)+"&lang="+escape(configuration.lang);container.appendChild(host);var frmForDown=document.createElement("iframe");frmForDown.id=host.id+"-hidden-down-frame";frmForDown.style.width="0px";frmForDown.style.height="0px";frmForDown.style.visibility="hidden";container.appendChild(frmForDown);var anchorForDown=document.createElement("a");anchorForDown.id=host.id+"-hidden-down-anchor";anchorForDown.target=frmForDown.id;anchorForDown.style.width="0px";anchorForDown.style.height="0px";anchorForDown.style.visibility="hidden";container.appendChild(anchorForDown);this.manager=manager;this.mode=configuration.mode;this.isHostEqualToDndObject=isHostEqualToDndObject;this.domObject=host;this.component=null;this.dndObject=null;this.loaded=false;this.lang=configuration.lang;this.progressType=configuration.progressType||"0";this.downObjects={iframe:frmForDown,button:anchorForDown};this.container=container;this.data=configuration.data};var NotSupportedFunctionForMulti=function(target){var dx=target||this;var manager=dx.manager;manager.throwErr(dx?dx.domObject.id:"undefined","EX5-11",manager.errs.get("EX5-11","_Not supported function in DEXTUploadX5 Multi module"))};DX5MultiModule.prototype.allowHiddenFile=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getFileDialogTitle=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setFileDialogTitle=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getFolderDialogTitle=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setFolderDialogTitle=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getTotalLocalFolderCount=NotSupportedFunctionForMulti;DX5MultiModule.prototype.openDownloadPathDialog=NotSupportedFunctionForMulti;DX5MultiModule.prototype.exploreDownloadPath=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getDownloadPath=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setDownloadPath=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getOverwriteMode=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setOverwriteMode=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setDownloadPostData=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getLimitNetSpeed=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setLimitNetSpeed=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getCompressType=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setCompressType=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getCompressDialogTitle=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setCompressDialogTitle=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getCompressFileName=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setCompressFileName=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getCompressSavePath=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setCompressSavePath=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isCompressAutoInserting=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setCompressAutoInserting=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isCompressEnsuringFile=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setCompressEnsuringFile=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isCompressAutoDeleting=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setCompressAutoDeleting=NotSupportedFunctionForMulti;DX5MultiModule.prototype.compress=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getEncryptionDialogTitle=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setEncryptionDialogTitle=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getEncryptionSavePath=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setEncryptionSavePath=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getEncryptionPrefix=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setEncryptionPrefix=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isEncryptionAutoInserting=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setEncryptionAutoInserting=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isEncryptionEnsuringFile=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setEncryptionEnsuringFile=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isEncryptionAutoDeleting=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setEncryptionAutoDeleting=NotSupportedFunctionForMulti;DX5MultiModule.prototype.encrypt=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getDecryptionDialogTitle=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setDecryptionDialogTitle=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getDecryptionSavePath=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setDecryptionSavePath=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isDecryptionEnsuringFile=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setDecryptionEnsuringFile=NotSupportedFunctionForMulti;DX5MultiModule.prototype.decrypt=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isThumbnailAutoMaking=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setThumbnailAutoMaking=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getThumbnailWidth=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setThumbnailWidth=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getThumbnailHeight=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setThumbnailHeight=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isThumbnailAspectRatio=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setThumbnailAspectRatio=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isThumbnailAutoDeleting=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setThumbnailAutoDeleting=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isThumbnailAutoRotating=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setThumbnailAutoRotating=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getThumbnailSavePath=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setThumbnailSavePath=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getThumbnailPrefix=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setThumbnailPrefix=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getThumbnailFormat=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setThumbnailFormat=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getThumbnailProvider=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getTempPathByExecuting=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setTempPathByExecuting=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isExtractingEXIF=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setExtractingEXIF=NotSupportedFunctionForMulti;DX5MultiModule.prototype.changeLocalFileById=NotSupportedFunctionForMulti;DX5MultiModule.prototype.changeLocalFileByIndex=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getSupportClipboard=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setSupportClipboard=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getAutoDeleteClipboardFile=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setAutoDeleteClipboardFile=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getClipboardFilePrefix=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setClipboardFilePrefix=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getTempPathForClipboard=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setTempPathForClipboard=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isFolderDeletionWithSubItems=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setFolderDeletionWithSubItems=NotSupportedFunctionForMulti;DX5MultiModule.prototype.isEnableUseProfile=NotSupportedFunctionForMulti;DX5MultiModule.prototype.setEnableUseProfile=NotSupportedFunctionForMulti;DX5MultiModule.prototype.getCommonFolderPath=NotSupportedFunctionForMulti;DX5MultiModule.prototype.load=function(waitTime,success,fail){(function loadLazily(module,delay){var version="";try{module.component=module.mode==="multi"?module.domObject.contentDocument:module.domObject;module.dndObject=module.isHostEqualToDndObject===true?module.domObject:module.component;version=module.component.getVersion()}catch(e){version=""}if(version){if(typeof success==="function"){success(version)}}else if(delay<waitTime){setTimeout(function(){loadLazily(module,delay+100)},100)}else{if(typeof fail==="function"){fail()}}})(this,0)};DX5MultiModule.prototype.getProgressType=function(){return this.progressType};DX5MultiModule.prototype.setProgressType=function(progressType){this.progressType=progressType||"0"};DX5MultiModule.prototype.getVersion=function(){return this.component.getVersion()};DX5MultiModule.prototype.getSplitString=function(){return this.component.getSplitString()};DX5MultiModule.prototype.setSplitString=function(str){this.component.setSplitString(str)};DX5MultiModule.prototype.getEmptyString=function(){return this.component.getEmptyString()};DX5MultiModule.prototype.setEmptyString=function(str){this.component.setEmptyString(str)};DX5MultiModule.prototype.getAuthkey=function(){return this.component.getAuthkey()};DX5MultiModule.prototype.setAuthkey=function(key){this.component.setAuthkey(key)};DX5MultiModule.prototype.getUploadURL=function(){return this.component.getUploadURL()};DX5MultiModule.prototype.setUploadURL=function(url){this.component.setUploadURL(url)};DX5MultiModule.prototype.getUploadMode=function(){return this.component.getUploadMode()};DX5MultiModule.prototype.setUploadMode=function(mode){this.component.setUploadMode(mode)};DX5MultiModule.prototype.setUploadBlockSize=function(size){this.component.setUploadBlockSize(size)};DX5MultiModule.prototype.enableResumingUpload=function(enable){this.component.enableResumingUpload(enable)};DX5MultiModule.prototype.openFileDialog=function(){this.component.openFileDialog();return true};DX5MultiModule.prototype.addFileList=function(list){this.component.addFileList(list)};DX5MultiModule.prototype.addEntriesForChrome=function(list){this.component.addEntriesForChrome(list)};DX5MultiModule.prototype.addVirtualFile=function(vf){this.component.addVirtualFile(vf)};DX5MultiModule.prototype.addVirtualFileList=function(vfs){this.component.addVirtualFileList(vfs)};DX5MultiModule.prototype.getEnableDnd=function(){return this.component.getEnableDnd()};DX5MultiModule.prototype.setEnableDnd=function(enable){this.component.setEnableDnd(enable)};DX5MultiModule.prototype.setFilterSilence=function(enable){this.component.setFilterSilence(enable)};DX5MultiModule.prototype.getMaxFileCount=function(){return this.component.getMaxFileCount()};DX5MultiModule.prototype.setMaxFileCount=function(count,withVF){this.component.setMaxFileCount(count,withVF)};DX5MultiModule.prototype.getMinFileSize=function(){return this.component.getMinFileSize()};DX5MultiModule.prototype.setMinFileSize=function(size){this.component.setMinFileSize(size)};DX5MultiModule.prototype.getMaxFileSize=function(){return this.component.getMaxFileSize()};DX5MultiModule.prototype.setMaxFileSize=function(size){this.component.setMaxFileSize(size)};DX5MultiModule.prototype.getMaxTotalSize=function(){return this.component.getMaxTotalSize()};DX5MultiModule.prototype.setMaxTotalSize=function(tsize,withVF){this.component.setMaxTotalSize(tsize,withVF)};DX5MultiModule.prototype.getExtensionFilter=function(reverse){return this.component.getExtentionFilter(reverse)};DX5MultiModule.prototype.setExtensionFilter=function(filterString,reverse){this.component.setExtentionFilter(filterString,reverse===true)};DX5MultiModule.prototype.isAllowNoExtension=function(){return this.component.isAllowNoExtension()};DX5MultiModule.prototype.setAllowNoExtension=function(allow){this.component.setAllowNoExtension(allow)};DX5MultiModule.prototype.clearItems=function(flag){this.component.clearItems(flag)};DX5MultiModule.prototype.getTotalItemCount=function(onlyLocal){return this.component.getTotalItemCount(onlyLocal)};DX5MultiModule.prototype.getTotalFileSize=function(onlyLocal){return this.component.getTotalFileSize(onlyLocal)};DX5MultiModule.prototype.setUploadableFilesFrom=function(dx){if(!dx||!dx.getItems)return;var byOrder=this.$isUploadByOrder();var tfiles=dx.getItems(true,true,byOrder);if(!tfiles||tfiles.length==0)return;this.component.addItems(tfiles)};DX5MultiModule.prototype.setUploableFilesFrom=function(dx){this.setUploadableFilesFrom(dx)};DX5MultiModule.prototype.getSelectedItems=function(onlyLocal){return this.component.getSelectedItems(onlyLocal)};DX5MultiModule.prototype.getItemIds=function(onlyLocal){return this.component.getItemIds(onlyLocal)};DX5MultiModule.prototype.getSelectedItemIds=function(onlyLocal){return this.component.getSelectedItemIds(onlyLocal)};DX5MultiModule.prototype.getSelectedIndices=function(onlyLocal){return this.component.getSelectedIndices(onlyLocal)};DX5MultiModule.prototype.getSelectedCount=function(onlyLocal){return this.component.getSelectedIndices(onlyLocal).length};DX5MultiModule.prototype.getItemById=function(id){return this.component.getItemById(id)};DX5MultiModule.prototype.getItemByIndex=function(index){return this.component.getItemByIndex(index)};DX5MultiModule.prototype.getTotalRemovedFileCount=function(){return this.component.getTotalRemovedFileCount()};DX5MultiModule.prototype.getTotalRemovedFileSize=function(){return this.component.getTotalRemovedFileSize()};DX5MultiModule.prototype.getRemovedFileIds=function(){return this.component.getRemovedFileIds()};DX5MultiModule.prototype.getRemovedFiles=function(){return this.component.getRemovedFiles()};DX5MultiModule.prototype.getRemovedFileById=function(id){return this.component.getRemovedFileById(id)};DX5MultiModule.prototype.removeById=function(id,perma,fireEvent){return this.component.removeById(id,perma,fireEvent)};DX5MultiModule.prototype.removeByIndex=function(index,perma,fireEvent){return this.component.removeByIndex(index,perma,fireEvent)};DX5MultiModule.prototype.removeSelected=function(perma,fireEvent){return this.component.removeSelected(perma,fireEvent)};DX5MultiModule.prototype.removeAll=function(perma,fireEvent){return this.component.removeAll(perma,fireEvent)};DX5MultiModule.prototype.removeChecked=function(perma,fireEvent){return this.component.removeChecked(perma,fireEvent)};DX5MultiModule.prototype.purgeRemovedVirtual=function(id){this.component.purgeRemovedVirtual(id)};DX5MultiModule.prototype.revokeVirtualFile=function(id){return this.component.revokeVirtualFile(id)};DX5MultiModule.prototype.revokeAllVirtualFiles=function(){return this.component.revokeAllVirtualFiles()};DX5MultiModule.prototype.checkAll=function(allOrNot){this.component.checkAll(allOrNot)};DX5MultiModule.prototype.checkById=function(id,checked){this.component.checkById(id,checked)};DX5MultiModule.prototype.checkByIndex=function(index,checked){this.component.checkByIndex(index,checked)};DX5MultiModule.prototype.changeStatus=function(id,status){this.component.changeStatus(id,status)};DX5MultiModule.prototype.checkDuplication=function(enable){this.component.checkDuplication(enable)};DX5MultiModule.prototype.getMetaDataById=function(id,name){return this.component.getMetaDataById(id,name)};DX5MultiModule.prototype.getMetaDataByIndex=function(index,name){return this.component.getMetaDataByIndex(index,name)};DX5MultiModule.prototype.setMetaDataById=function(id,name,value){return this.component.setMetaDataById(id,name,value)};DX5MultiModule.prototype.setMetaDataByIndex=function(index,name,value){return this.component.setMetaDataByIndex(index,name,value)};DX5MultiModule.prototype.deleteMetaDataById=function(id,name){return this.component.deleteMetaDataById(id,name)};DX5MultiModule.prototype.deleteMetaDataByIndex=function(index,name){return this.component.deleteMetaDataByIndex(index,name)};DX5MultiModule.prototype.getResponses=function(index){return this.component.getResponse(index)};DX5MultiModule.prototype.getUploadStatus=function(){return this.component.getUploadStatus()};DX5MultiModule.prototype.hasUploadableItems=function(){return this.component.hasUploadableItems()};DX5MultiModule.prototype.upload=function(flag){this.component.upload(flag)};DX5MultiModule.prototype.stopUploading=function(){this.component.stopUploading()};DX5MultiModule.prototype.downloadById=function(id){this.component.downloadById(id)};DX5MultiModule.prototype.download=function(flag,useMD){this.component.download(flag,useMD)};DX5MultiModule.prototype.stopDownloading=function(){this.component.stopDownloading()};DX5MultiModule.prototype.selectAll=function(){this.component.selectAll()};DX5MultiModule.prototype.unselectAll=function(){this.component.unselectAll()};DX5MultiModule.prototype.selectByIndex=function(index){this.component.selectByIndex(index)};DX5MultiModule.prototype.unselectByIndex=function(index){this.component.unselectByIndex(index)};DX5MultiModule.prototype.isSelectedByIndex=function(index){return this.component.isSelectedByIndex(index)};DX5MultiModule.prototype.getEnableColumnSorting=function(){return this.component.getEnableColumnSorting()};DX5MultiModule.prototype.setEnableColumnSorting=function(enable){this.component.setEnableColumnSorting(enable)};DX5MultiModule.prototype.setSortPriorityVirtualFile=function(enable){this.component.setSortPriorityVirtualFile(enable)};DX5MultiModule.prototype.getAutoSortingType=function(){return this.component.getAutoSortingType()};DX5MultiModule.prototype.setAutoSortingType=function(stype){this.component.setAutoSortingType(stype)};DX5MultiModule.prototype.sortColumnIndex=function(index,ascending){this.component.sortItems(index,ascending)};DX5MultiModule.prototype.moveItemUp=function(index){this.component.moveItemUp(index)};DX5MultiModule.prototype.moveItemDown=function(index){this.component.moveItemDown(index)};DX5MultiModule.prototype.getDownloadStatus=function(){return this.component.getDownloadStatus()};DX5MultiModule.prototype.getTotalLocalFileCount=function(){return this.component.getTotalItemCount(true)};DX5MultiModule.prototype.getTotalVirtualFileCount=function(){return this.component.getTotalItemCount()-this.component.getTotalItemCount(true)};DX5MultiModule.prototype.isPreviewEnable=function(){return this.component.isPreviewEnable()};DX5MultiModule.prototype.setPreviewEnable=function(enable){this.component.setPreviewEnable(enable)};DX5MultiModule.prototype.getPreviewMethod=function(){return this.component.getPreviewMethod()};DX5MultiModule.prototype.setPreviewMethod=function(method){this.component.setPreviewMethod(method)};DX5MultiModule.prototype.preview=function(index){this.component.preview(index)};DX5MultiModule.prototype.getPreviewBackgroundColor=function(){return this.component.getPreviewBackgroundColor()};DX5MultiModule.prototype.setPreviewBackgroundColor=function(hexrgb){this.component.setPreviewBackgroundColor(hexrgb)};DX5MultiModule.prototype.executeItem=function(index,_origin,_parameter){this.component.executeItem(index)};DX5MultiModule.prototype.getCheckedItems=function(onlyLocal){return this.component.getCheckedItems(onlyLocal)};DX5MultiModule.prototype.getCheckedIds=function(onlyLocal){return this.component.getCheckedIds(onlyLocal)};DX5MultiModule.prototype.getItemId=function(index){return this.component.getItemId(index)};DX5MultiModule.prototype.getItemIndex=function(id){return this.component.getItemIndex(id)};DX5MultiModule.prototype.lockById=function(id){return this.component.lockById(id)};DX5MultiModule.prototype.lockByIndex=function(index){return this.component.lockByIndex(index)};DX5MultiModule.prototype.unlockById=function(id){return this.component.unlockById(id)};DX5MultiModule.prototype.unlockByIndex=function(index){return this.component.unlockByIndex(index)};DX5MultiModule.prototype.isUsingProgressDialog=function(){return this.component.isUsingProgressDialog()};DX5MultiModule.prototype.useProgressDialog=function(enable){this.component.useProgressDialog(enable)};DX5MultiModule.prototype.getSupportPHP=function(){return this.component.getSupportPHP()};DX5MultiModule.prototype.setSupportPHP=function(enable){this.component.setSupportPHP(enable)};DX5MultiModule.prototype.setLimitMultiDownloadSize=function(size){this.component.setLimitMultiDownloadSize(size)};DX5MultiModule.prototype.updateUI=function(){this.component.updateUI()};DX5MultiModule.prototype.getCompressURL=function(){return this.component.getCompressURL()};DX5MultiModule.prototype.setCompressURL=function(url){this.component.setCompressURL(url)};DX5MultiModule.prototype.downloadCompressed=function(flag){this.component.downloadCompressed(flag)};DX5MultiModule.prototype.stopCompressWaiting=function(){this.component.stopCompressWaiting()};DX5MultiModule.prototype.setBorderVisible=function(visible){this.component.setBorderVisible(visible)};DX5MultiModule.prototype.setGridLineVisible=function(visible){this.component.setGridLineVisible(visible)};DX5MultiModule.prototype.setItemHeight=function(height){return this.component.setItemHeight(height)};DX5MultiModule.prototype.setHeaderHeight=function(height){return this.component.setHeaderHeight(height)};DX5MultiModule.prototype.setBackgroundColor=function(hexrgb){this.component.setBackgroundColor(hexrgb)};DX5MultiModule.prototype.setGridLineColor=function(hexrgb){this.component.setGridLineColor(hexrgb)};DX5MultiModule.prototype.setHeaderVisible=function(visible){this.component.setHeaderVisible(visible)};DX5MultiModule.prototype.setStatusBarVisible=function(visible){this.component.setStatusBarVisible(visible)};DX5MultiModule.prototype.setCheckerVisible=function(visible){this.component.setCheckerVisible(visible)};DX5MultiModule.prototype.setHeaderSolidColor=function(hexrgb){this.component.setHeaderSolidColor(hexrgb)};DX5MultiModule.prototype.setStatusBarSolidColor=function(hexrgb){this.component.setStatusBarSolidColor(hexrgb)};DX5MultiModule.prototype.setHeaderGradient=function(di,sc,ec){this.component.setHeaderGradient(di,sc,ec)};DX5MultiModule.prototype.setBackgroundImage=function(url,w,h){this.component.setBackgroundImage(url,w,h)};DX5MultiModule.prototype.setHeaderFontName=function(font){this.component.setHeaderFontName(font)};DX5MultiModule.prototype.setHeaderFontColor=function(hexrgb){this.component.setHeaderFontColor(hexrgb)};DX5MultiModule.prototype.setItemFontName=function(font){this.component.setItemFontName(font)};DX5MultiModule.prototype.setItemFontColor=function(hexrgb){this.component.setItemFontColor(hexrgb)};DX5MultiModule.prototype.setStatusBarFontName=function(font){this.component.setStatusBarFontName(font)};DX5MultiModule.prototype.setStatusBarFontColor=function(hexrgb){this.component.setStatusBarFontColor(hexrgb)};DX5MultiModule.prototype.setTileColumnCount=function(count){this.component.setTileColumnCount(count)};DX5MultiModule.prototype.setDownloadButtonVisible=function(visible){this.component.setDownloadButtonVisible(visible)};DX5MultiModule.prototype.setOpenButtonVisible=function(visible){this.component.setOpenButtonVisible(visible)};DX5MultiModule.prototype.setItemBackColor=function(hexrgb){this.component.setItemBackColor(hexrgb)};DX5MultiModule.prototype.setBorderColor=function(hexrgb){this.component.setBorderColor(hexrgb)};DX5MultiModule.prototype.setHeaderLineColor=function(hexrgb){this.component.setHeaderLineColor(hexrgb)};DX5MultiModule.prototype.setColumnLineColor=function(hexrgb){this.component.setColumnLineColor(hexrgb)};DX5MultiModule.prototype.setStatusBarLineColor=function(hexrgb){this.component.setStatusBarLineColor(hexrgb)};DX5MultiModule.prototype.setFilterVisible=function(visible){this.component.setFilterVisible(visible)};DX5MultiModule.prototype.setSizeColumnVisible=function(visible){this.component.setSizeColumnVisible(visible)};DX5MultiModule.prototype.setUIStyle=function(style){if(!style)return;if(isDefined(style.headerVisible))this.setHeaderVisible(style.headerVisible===true);if(isDefined(style.statusBarVisible))this.setStatusBarVisible(style.statusBarVisible===true);if(isDefined(style.checkerVisible))this.setCheckerVisible(style.checkerVisible===true);if(isDefined(style.headerSolidColor))this.setHeaderSolidColor(style.headerSolidColor);if(isDefined(style.statusBarSolidColor))this.setStatusBarSolidColor(style.statusBarSolidColor);if(isDefined(style.headerGradient)){var gradient=style.headerGradient.split(" "),di,sc,ec;if(gradient.length>=1)di=gradient[0];if(gradient.length>=2)sc=gradient[1];if(gradient.length>=3)ec=gradient[2];this.setHeaderGradient(di,sc,ec)}if(isDefined(style.headerFontName))this.setHeaderFontName(style.headerFontName);if(isDefined(style.headerFontColor))this.setHeaderFontColor(style.headerFontColor);if(isDefined(style.itemFontName))this.setItemFontName(style.itemFontName);if(isDefined(style.itemFontColor))this.setItemFontColor(style.itemFontColor);if(isDefined(style.statusBarFontName))this.setStatusBarFontName(style.statusBarFontName);if(isDefined(style.statusBarFontColor))this.setStatusBarFontColor(style.statusBarFontColor);if(isDefined(style.headerHeight))this.setHeaderHeight(style.headerHeight);if(isDefined(style.borderVisible))this.setBorderVisible(style.borderVisible===true);if(isDefined(style.itemHeight))this.setItemHeight(style.itemHeight);if(isDefined(style.backgroundColor))this.setBackgroundColor(style.backgroundColor);if(isDefined(style.backgroundImage)){var background=style.backgroundImage.split(" "),url,w,h;url=background[0];if(background.length==1)w=h=0;if(background.length==2)w=h=parseInt(background[1],10);if(background.length>=3)w=parseInt(background[1],10),h=parseInt(background[2],10);this.setBackgroundImage(url,w,h)}if(isDefined(style.tileColumnCount))this.setTileColumnCount(style.tileColumnCount);if(isDefined(style.downloadButtonVisible))this.setDownloadButtonVisible(style.downloadButtonVisible);if(isDefined(style.openButtonVisible))this.setOpenButtonVisible(style.openButtonVisible);if(isDefined(style.borderColor))this.setBorderColor(style.borderColor);if(isDefined(style.itemBackColor))this.setItemBackColor(style.itemBackColor);if(isDefined(style.gridLineColor))this.setGridLineColor(style.gridLineColor);if(isDefined(style.gridLineVisible))this.setGridLineVisible(style.gridLineVisible);if(isDefined(style.headerLineColor))this.setHeaderLineColor(style.headerLineColor);if(isDefined(style.columnLineColor))this.setColumnLineColor(style.columnLineColor);if(isDefined(style.statusBarLineColor))this.setStatusBarLineColor(style.statusBarLineColor);if(isDefined(style.filterVisible))this.setFilterVisible(style.filterVisible);if(isDefined(style.sizeColumnVisible))this.setSizeColumnVisible(style.sizeColumnVisible)};DX5MultiModule.prototype.downloadByIdToHD=function(id,duplicated){var manager=this.manager,errs=manager.errs;var item=this.getItemById(id);if(item){if(item.type!="VIRTUAL"){manager.throwErr(this.domObject.id,"EX5-20",errs.get("EX5-20","_The virtual file is only permitted to download."))}else if(!item.downUrl){manager.throwErr(this.domObject.id,"EX5-21",errs.get("EX5-21","_The target path of downloading is not set."))}else{var self=this,hd=manager.hdManager;hd.exeHD(self,function(){hd.transferToHD(self,[item],duplicated)})}}};DX5MultiModule.prototype.downloadToHD=function(flag,duplicated){var manager=this.manager,errs=manager.errs;if(!isDefined(flag)){flag="AUTO"}else if(["AUTO","CHECKED","SELECTED"].indexOf(flag.toUpperCase())==-1){manager.throwErr(this.domObject.id,"EX5-22",errs.get("EX5-22","_Choose one flag of 'AUTO, CHECKED, SELECTED."));return}else{flag=flag.toUpperCase()}var temp=null;if(flag==="AUTO")temp=this.getItems();else if(flag==="CHECKED")temp=this.getCheckedItems();else if(flag==="SELECTED")temp=this.getSelectedItems();var arr=[];for(var i=0,len=temp.length;i<len;i++){if(temp[i].type&&temp[i].type==="VIRTUAL"&&(temp[i].downUrl||temp[i].url)){arr.push(temp[i])}}if(arr.length==0){manager.throwErr(this.domObject.id,"EX5-18",errs.get("EX5-18","_There is no item for downloading."))}else{var self=this,hd=manager.hdManager;hd.exeHD(self,function(){hd.transferToHD(self,arr,duplicated)})}};DX5MultiModule.prototype.openDownloadPathDialogOfHD=function(success){var self=this;var hd=self.manager.hdManager;hd.exeHD(self,function(){hd.askDownPathOfHD(self,success)})};DX5MultiModule.prototype.getDownloadPathOfHD=function(success){var self=this;var hd=self.manager.hdManager;hd.exeHD(self,function(){hd.getDownPathOfHD(self,success)})};DX5MultiModule.prototype.setDownloadPathOfHD=function(path,success){var self=this;var hd=self.manager.hdManager;hd.exeHD(self,function(){hd.setDownPathOfHD(self,path,success)})};DX5MultiModule.prototype.isUsingHDWhenSingle=function(){return this.component.isUsingHDWhenSingle()};DX5MultiModule.prototype.setUsingHDWhenSingle=function(enable){this.component.setUsingHDWhenSingle(enable)};DX5MultiModule.prototype.getCustomHeader=function(name){return this.component.getCustomHeader(name)};DX5MultiModule.prototype.setCustomHeader=function(name,value){this.component.setCustomHeader(name,value)};DX5MultiModule.prototype.removeCustomHeader=function(name){this.component.removeCustomHeader(name)};DX5MultiModule.prototype.getTotalCustomHeaders=function(separator){if(typeof separator=="undefined")return this.component.getTotalCustomHeaders();else return this.component.getTotalCustomHeaders(separator)};DX5MultiModule.prototype.getWithCredentials=function(){return this.component.getWithCredentials()};DX5MultiModule.prototype.setWithCredentials=function(isWith){this.component.setWithCredentials(isWith)};DX5MultiModule.prototype.getOptionsOfHD=function(success){var self=this,hd=self.manager.hdManager;hd.exeHD(self,function(){hd.getEnvHD(self,success)})};DX5MultiModule.prototype.setOptionsOfHD=function(env,success){var self=this,hd=self.manager.hdManager;hd.exeHD(self,function(){hd.setEnvHD(self,env,success)})};DX5MultiModule.prototype.setAutoActivationOptionOfHD=function(enable,success){var self=this,manager=self.manager,errs=manager.errs;if(typeof enable!="boolean"){manager.throwErr(self.domObject.id,"EX5-23",errs.get("EX5-23","_The 'enable' parameter should be set to a value of Boolean type."))}else{var hd=manager.hdManager;hd.exeHD(self,function(){hd.setEnvHD(self,{autoActivation:enable},success)})}};DX5MultiModule.prototype.setAutoDownloadOptionOfHD=function(enable,success){var self=this,manager=self.manager,errs=manager.errs;if(typeof enable!="boolean"){manager.throwErr(self.domObject.id,"EX5-23",errs.get("EX5-23","_The 'enable' parameter should be set to a value of Boolean type."))}else{var hd=manager.hdManager;hd.exeHD(self,function(){hd.setEnvHD(self,{autoDownload:enable},success)})}};DX5MultiModule.prototype.setDeleteTemporaryOptionOfHD=function(enable,success){var self=this,manager=self.manager,errs=manager.errs;if(typeof enable!="boolean"){manager.throwErr(self.domObject.id,"EX5-23",errs.get("EX5-23","_The 'enable' parameter should be set to a value of Boolean type."))}else{var hd=manager.hdManager;hd.exeHD(self,function(){hd.setEnvHD(self,{deleteTemporary:enable},success)})}};DX5MultiModule.prototype.setResumeDownloadOptionOfHD=function(enable,success){var self=this,manager=self.manager,errs=manager.errs;if(typeof enable!="boolean"){manager.throwErr(self.domObject.id,"EX5-23",errs.get("EX5-23","_The 'enable' parameter should be set to a value of Boolean type."))}else{var hd=manager.hdManager;hd.exeHD(self,function(){hd.setEnvHD(self,{resumeDownload:enable},success)})}};DX5MultiModule.prototype.setSaveStatusOptionOfHD=function(value,success){var self=this,manager=self.manager,errs=manager.errs;if(typeof value==="number"&&(value>=0&&value<=15)){var hd=manager.hdManager;hd.exeHD(self,function(){hd.setEnvHD(self,{saveStatus:value},success)})}else{manager.throwErr(self.domObject.id,"EX5-24",errs.get("EX5-24","_The 'value' parameter should be one of '0 ~ 15'."))}};DX5MultiModule.prototype.getItems=function(onlyLocal,isOrigin,byOrder){return this.component.getItems(onlyLocal,isOrigin,byOrder)};DX5MultiModule.prototype.changeToVirtualFile=function(id,openUrl,downUrl){this.component.changeToVirtualFile(id,openUrl,downUrl)};DX5MultiModule.prototype.getResourceBundle=function(){return this.component.getResourceBundle()};DX5MultiModule.prototype.initDownObjects=function(){this.component.setDownObjects(this.downObjects)};DX5MultiModule.prototype.isWheelEnabled=function(){return this.component.isWheelEnabled()};DX5MultiModule.prototype.setWheelEnabled=function(enable){this.component.setWheelEnabled(enable)};DX5MultiModule.prototype.$show=function(){this.component.show()};DX5MultiModule.prototype.createColumn=function(format){this.component.createColumn(format)};DX5MultiModule.prototype.deleteColumn=function(key){this.component.deleteColumn(key)};DX5MultiModule.prototype.setColumnVisible=function(key,visible){this.component.setColumnVisible(key,visible)};DX5MultiModule.prototype.setUploadByOrder=function(byOrder){this.component.setUploadByOrder(byOrder)};DX5MultiModule.prototype.setEnableDeletionByKey=function(byKey){this.component.setEnableDeletionByKey(byKey)};DX5MultiModule.prototype.$deleteSelf=function(){var container=this.domObject.parentNode;if(container){container.removeChild(this.downObjects["iframe"]);container.removeChild(this.downObjects["button"]);container.removeChild(this.domObject);this.dndObject=null;this.component=null;this.downObjects["iframe"]=null;this.downObjects["button"]=null;this.domObject=null}};DX5MultiModule.prototype.isChecksumEnable=function(){return this.component.isChecksumEnable()};DX5MultiModule.prototype.setChecksumEnable=function(enable){this.component.setChecksumEnable(enable)};DX5MultiModule.prototype.$isUploadByOrder=function(){return this.component.isUploadByOrder()};DX5MultiModule.prototype.setCustomFilter=function(filter){return this.component.setCustomFilter(filter)};DX5MultiModule.prototype.openFolderDialog=function(){this.component.openFolderDialog()};