                //<![CDATA[
                var bacaJugaJudul=[],bacaJugaNum=0,bacaJugaUrl=[];function bacaJuga(a){for(var u=0;u<a.feed.entry.length;u++){var e=a.feed.entry[u];bacaJugaJudul[bacaJugaNum]=e.title.$t;for(var l=0;l<e.link.length;l++)if("alternate"==e.link[l].rel){bacaJugaUrl[bacaJugaNum]=e.link[l].href,bacaJugaNum++;break}}}function showBacaJuga(a){var u=document.querySelector("#baca-juga"),e=document.createElement("div"),l=document.querySelector(".post-body-artikel").querySelectorAll("div > br, span > br, div > p, span > p"),t=Math.ceil(.5*l.length),r=document.getElementById("related");e.setAttribute("class","baca-juga-wrap");var n={bacaJuga:!0,jumlahBacaJuga:3,judulBacaJuga:"Baca Juga"};optionVioMagz(n);function c(a,u){u.parentNode.insertBefore(a,u.nextSibling)}if(!0===n.bacaJuga&&void 0!==l[t]){c(u,null!==r?r:l[t]);for(var g=0;g<bacaJugaUrl.length;g++)bacaJugaUrl[g]==a&&(bacaJugaUrl.splice(g,1),bacaJugaJudul.splice(g,1));var J=Math.floor((bacaJugaJudul.length-1)*Math.random()),g=0;if(0<bacaJugaJudul.length&&0<n.jumlahBacaJuga){u.appendChild(e),function(a){a=a.previousElementSibling;null!=a&&"BR"===a.tagName&&(a.style.display="none")}(u);for(var i="<strong>"+n.judulBacaJuga+"</strong><ul>";g<bacaJugaJudul.length&&g<n.jumlahBacaJuga;g++)i+='<li><a href="'+bacaJugaUrl[J]+'">'+bacaJugaJudul[J]+"</a></li>",J<bacaJugaJudul.length-1?J++:J=0;e.innerHTML=i+="</ul>"}}}
                //]]>
