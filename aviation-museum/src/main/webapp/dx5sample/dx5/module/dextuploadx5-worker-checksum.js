self.onmessage=function(evt){if(evt.data.isIE)process4ie(evt.data.file);else process(evt.data.file)};function process(f){const fsize=f.size;const csize=128;const bsize=1024*1024;const checksum=new Uint8Array(csize);let count=0,total=~~(fsize/bsize)+(fsize%bsize>0?1:0);(function traverse(index){if(index>=fsize){self.postMessage({done:true,value:btoa(String.fromCharCode.apply(null,checksum))})}else{let p=f.slice(index,Math.min(index+bsize,fsize)).arrayBuffer();p.then(function(b){count++;let v=new Uint8Array(b);for(let i=0;i<v.byteLength;i++){checksum[i%csize]=(checksum[i%csize]+v[i])%256}self.postMessage({done:false,no:count,total:total});traverse(index+bsize)}).catch(function(e){throw e instanceof Error?e:new Error(e)})}})(0)}function process4ie(f){var fsize=f.size;var csize=128;var bsize=1024*1024;var index=0;var count=0,total=~~(fsize/bsize)+(fsize%bsize>0?1:0);var checksum=new Uint8Array(csize);var reader=new FileReader;function traverse(fr){if(index>=fsize){self.postMessage({done:true,value:btoa(String.fromCharCode.apply(null,checksum))})}else{var b=f.slice(index,Math.min(index+bsize,fsize));fr.readAsArrayBuffer(b)}}reader.onload=function(evt){count++;var v=new Uint8Array(evt.target.result);index+=v.byteLength;for(var i=0;i<v.byteLength;i++){checksum[i%csize]=(checksum[i%csize]+v[i])%256}self.postMessage({done:false,no:count,total:total});traverse(evt.target)};reader.onerror=function(evt){throw evt.error instanceof Error?evt.error:new Error(evt.error)};traverse(reader)}