import{R as A,H as p,r as B}from"./library-BI8TNwsq.js";/* empty css              */import{s as O}from"./secrets-JRwob07e.js";const P=(e,t)=>{const n=["twisting","surprising","peaceful","exciting","humorous","romantic","sarcasm","suspenful","mysterious","tedious"];return{type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Read the following story and expand upon it in one or two sentences. Your response should be no longer than 20 words. Make sure the logic of the story is smooth. The plot should be ${n[A.integer(0,n.length-1)]}. Add a + sign at the beginning and end of your response: ${e}`,system_prompt:`You are a professional novel writter. You speak ${t.language}.`}}}},S=(e,t)=>({type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Summerize the follow sentences into a short sentence less then 8 words. You should not alter the subject or the meaning of the sentence. Add a + sign at the beginning and end of your response: ${e}`,system_prompt:`You are a professional novel writter. You speak ${t.language}.`}}}),Y=e=>{const t=["one","two","three","a gourp of"],n=["animal","grown adult","kid","location"],s=["doing something","and the surrounding environment","and the weather"],o=["metropolis","countryside","medieval","in the nature","magical","sci-fi","warfare"],d=["everyday life","suspenful","exciting","peaceful","romantic"],u=["first-person","third-person"],[b,h,f,a,i,r]=[t,n,s,o,d,u].map(l=>l[A.integer(0,l.length-1)]);return{type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Write one sentence in ${r} point of view to describe ${b} ${h} ${f}. The setting should ${a} and the tone should be ${i}. The sentence should be no longer than 15 words. Add a + sign at the beginning and end of your response.`,system_prompt:`You are a professional novel writter. You speak ${e.language}.`}}}},L=e=>({type:"image",data:{version:"5599ed30703defd1d160a25a63321b4dec97101d98b4674bcc56e41f62f35637",input:{prompt:`${e} hd, hand-drawn, Studio Ghibli`,negative_prompt:"Worst quality, low quality, black and white"}}}),j=e=>({type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Repeat the following sentences in English. Add a + sign at the beginning and end of your response: ${e}`}}}),H=async(e,t)=>{const n=async()=>{const o=t.mode==="init"?Y({language:t.language}):P(e,{language:t.language}),d=await g(o),u=await g(S(d,{language:t.language}));return{fullChoice:d,shortChoice:u}};return await Promise.all(Array.from({length:3}).map(()=>n()))},R=async(e,t)=>{const n=t.language==="English"?e:await g(j(e)),s=await g(S(n,{language:"English"}));return await g(L(s))},g=async e=>{const t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e.data)};try{console.log("Start fetching");const s=await(await fetch(O.replicateProxy,t)).json();let o;switch(e.type){case"text":o=s.output.join("").match(/\+([^+]+)\+/)[1].trim(),console.log("Got it!");break;case"image":o=s.output,console.log(o);break}return o}catch{return console.log("Trying again..."),g(e)}},y=document.getElementById("input-field"),m=document.getElementById("story"),I=document.getElementById("option"),T=document.getElementById("trash"),k=document.getElementById("loader"),v=document.getElementById("gallery"),D=document.getElementById("left-column"),E=document.getElementById("left-bg"),$=document.getElementById("right-bg"),C=document.getElementById("language-selector"),_=()=>{if(!(y&&m&&I&&T&&k&&v&&D&&E&&$&&C)){alert("Couldn't load all resources.");return}let e=[],t=0,n=0,s=localStorage.getItem("language")||"English";C.value=s,C.addEventListener("change",()=>{localStorage.setItem("language",C.value),location.reload()}),T.addEventListener("click",()=>{location.reload()}),y.addEventListener("keydown",a=>{if(a.key!=="Enter"||y.value.length===0)return;const i=y.value;a.preventDefault(),y.value="",e=[...e,i];const r=p.createText("p",i,"my-story");o(r),d(e)}),E.addEventListener("click",()=>{n--,f(),h(n)}),$.addEventListener("click",()=>{n++,f(),h(n)});const o=a=>{m.appendChild(a),m.scrollHeight>m.clientHeight&&m.scrollTo({top:m.scrollHeight,behavior:"smooth"})},d=async a=>{B(I),k.style.display="block";const i=a.join(" "),r=await g(P(i,{language:s}));u(r),await b(r,{mode:"update"});const c=p.createText("p",` ${r}`,"story-block");o(c),e=[...e,r]},u=async a=>{const r=`${e[e.length-1]?e[e.length-1]:""} ${a}`,c=await R(r,{language:s}),l=p.createImage(c,"AI generated image.","story-image");l.onload=()=>{const w=p.createDiv("image-outer-container"),x=p.createDiv("image-inner-container");x.appendChild(l),w.appendChild(x),v.appendChild(w),t++,n=t,h(t),f()}},b=async(a,i)=>{console.log("hi");const r=await H(a,{mode:i.mode,language:s});k.style.display="none",r.forEach(c=>{const l=p.createText("p",`${c.shortChoice}`,"option");l.addEventListener("click",()=>{e=[...e,c.fullChoice];const w=p.createText("p",`${c.fullChoice}`,"my-story");o(w),d(e)}),I.appendChild(l)})},h=a=>{const i=v.clientWidth;v.style.transform=`translateX(${-i*a}px)`},f=()=>{E.style.opacity=n>=2?"1":"0",E.style.pointerEvents=n>=2?"auto":"none",$.style.opacity=n<t?"1":"0",$.style.pointerEvents=n<t?"auto":"none"};u("A path leading to multiple universes."),b("",{mode:"init"})};_();
