'use strict';

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {		 
    if(request) {
   	 var storageService = new markticleStorageService();
   	 if(request.action === 'add') {
   		storageService.add(request.data);
   	 }
    }

});