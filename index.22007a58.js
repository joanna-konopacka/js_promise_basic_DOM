var e=document.createElement("div"),n=new Promise(function(e,n){document.querySelector(".logo").addEventListener("click",function(){e("Promise was resolved!")})}),o=new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected!"))},3e3)});n.then(function(n){e.className="message",e.innerText=n,document.body.append(e)}),o.catch(function(n){e.className="message error-message",e.innerText=n,document.body.append(e)});//# sourceMappingURL=index.22007a58.js.map

//# sourceMappingURL=index.22007a58.js.map
