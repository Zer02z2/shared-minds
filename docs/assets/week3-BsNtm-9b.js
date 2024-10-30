import{R as B,H as p,r as L}from"./library-COGdlQtt.js";/* empty css              */import{s as O}from"./secrets-D0UusyeF.js";const P=(e,t)=>{const n=["twisting","surprising","peaceful","exciting","humorous","romantic","sarcasm","suspenful","mysterious","tedious"];return{type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Read the following story and expand upon it in one or two sentences. Your response should be no longer than 20 words. Make sure the logic of the story is smooth. The plot should be ${n[B.integer(0,n.length-1)]}. Add a + sign at the beginning and end of your response: ${e}`,system_prompt:`You are a professional novel writter. You speak ${t.language}.`}}}},S=(e,t)=>({type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Summerize the follow sentences into a short sentence less then 8 words. You should not alter the subject or the meaning of the sentence. Add a + sign at the beginning and end of your response: ${e}`,system_prompt:`You are a professional novel writter. You speak ${t.language}.`}}}),Y=e=>{const t=["one","two","three","a gourp of"],n=["animal","grown adult","kid","location"],a=["doing something","and the surrounding environment","and the weather"],s=["metropolis","countryside","medieval","in the nature","magical","sci-fi","warfare"],d=["everyday life","suspenful","exciting","peaceful","romantic"],u=["first-person","third-person"],[b,m,f,o,i,r]=[t,n,a,s,d,u].map(l=>l[B.integer(0,l.length-1)]);return{type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Write one sentence in ${r} point of view to describe ${b} ${m} ${f}. The setting should ${o} and the tone should be ${i}. The sentence should be no longer than 15 words. Add a + sign at the beginning and end of your response.`,system_prompt:`You are a professional novel writter. You speak ${e.language}.`}}}},j=e=>({type:"image",data:{version:"5599ed30703defd1d160a25a63321b4dec97101d98b4674bcc56e41f62f35637",input:{prompt:`${e} hd, hand-drawn, Studio Ghibli`,negative_prompt:"Worst quality, low quality, black and white"}}}),H=e=>({type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Repeat the following sentences in English. Add a + sign at the beginning and end of your response: ${e}`}}}),R=async(e,t)=>{const n=async()=>{const s=t.mode==="init"?Y({language:t.language}):P(e,{language:t.language}),d=await g(s),u=await g(S(d,{language:t.language}));return{fullChoice:d,shortChoice:u}};return await Promise.all(Array.from({length:3}).map(()=>n()))},D=async(e,t)=>{const n=t.language==="English"?e:await g(H(e)),a=await g(S(n,{language:"English"}));return await g(j(a))},g=async e=>{const t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e.data)};try{console.log("Start fetching");const a=await(await fetch(O.replicateProxy,t)).json();let s;switch(e.type){case"text":s=a.output.join("").match(/\+([^+]+)\+/)[1].trim(),console.log("Got text!");break;case"image":s=a.output,console.log("Got image!");break}return s}catch{return console.log("Trying again..."),g(e)}},y=document.getElementById("input-field"),h=document.getElementById("story"),$=document.getElementById("option"),T=document.getElementById("trash"),I=document.getElementById("loader"),x=document.getElementById("gallery"),G=document.getElementById("left-column"),A=document.getElementsByClassName("image-outer-container"),v=document.getElementById("left-bg"),E=document.getElementById("right-bg"),C=document.getElementById("language-selector"),_=()=>{if(!(y&&h&&$&&T&&I&&x&&G&&v&&E&&C&&A)){alert("Couldn't load all resources.");return}let e=[],t=0,n=0;const a=localStorage.getItem("language")||"English";C.value=a,C.addEventListener("change",()=>{localStorage.setItem("language",C.value),location.reload()}),T.addEventListener("click",()=>{location.reload()}),y.addEventListener("keydown",o=>{if(o.key!=="Enter"||y.value.length===0)return;const i=y.value;o.preventDefault(),y.value="",e=[...e,i];const r=p.createText("p",i,"my-story");s(r),d(e)}),v.addEventListener("click",()=>{n--,f(),m()}),E.addEventListener("click",()=>{n++,f(),m()}),window.addEventListener("resize",()=>{m()});const s=o=>{h.appendChild(o),h.scrollHeight>h.clientHeight&&h.scrollTo({top:h.scrollHeight,behavior:"smooth"})},d=async o=>{L($),I.style.display="block";const i=o.join(" "),r=await g(P(i,{language:a}));u(r),await b(r,{mode:"update"});const c=p.createText("p",` ${r}`,"story-block");s(c),e=[...e,r]},u=async o=>{const r=`${e[e.length-1]?e[e.length-1]:""} ${o}`,c=await D(r,{language:a}),l=p.createImage(c,"AI generated image.","story-image");l.onload=()=>{const w=p.createDiv("image-outer-container"),k=p.createDiv("image-inner-container");k.appendChild(l),w.appendChild(k),x.appendChild(w),t++,n=t,m(),f()}},b=async(o,i)=>{const r=await R(o,{mode:i.mode,language:a});I.style.display="none",r.forEach(c=>{const l=p.createText("p",`${c.shortChoice}`,"option");l.addEventListener("click",()=>{e=[...e,c.fullChoice];const w=p.createText("p",`${c.fullChoice}`,"my-story");s(w),d(e)}),$.appendChild(l)})},m=()=>{const o=A[0].clientWidth;x.style.transform=`translateX(${-o*n}px)`},f=()=>{v.style.opacity=n>=2?"1":"0",v.style.pointerEvents=n>=2?"auto":"none",E.style.opacity=n<t?"1":"0",E.style.pointerEvents=n<t?"auto":"none"};u("A path leading to multiple universes."),b("",{mode:"init"})};_();