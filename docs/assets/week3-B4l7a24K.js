import{R as T,H as m,r as E}from"./library-B-Bg-_Pf.js";/* empty css              */import{s as k}from"./secrets-JRwob07e.js";const C=(e,t)=>{const s=["twisting","surprising","peaceful","exciting","humorous","romantic","sarcasm","suspenful","mysterious","tedious"];return{type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Read the following story and expand upon it in one or two sentences. Your response should be no longer than 20 words. Make sure the logic of the story is smooth. The plot should be ${s[T.integer(0,s.length-1)]}. Add a + sign at the beginning and end of your response: ${e}`,system_prompt:`You are a professional novel writter. You speak ${t.language}.`}}}},I=(e,t)=>({type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Summerize the follow sentences into a short sentence less then 8 words. You should not alter the subject or the meaning of the sentence. Add a + sign at the beginning and end of your response: ${e}`,system_prompt:`You are a professional novel writter. You speak ${t.language}.`}}}),P=e=>{const t=["one","two","three","a gourp of"],s=["animal","grown adult","kid","location"],c=["doing something","and the surrounding environment","and the weather"],r=["metropolis","countryside","medieval","in the nature","magical","sci-fi","warfare"],f=["everyday life","suspenful","exciting","peaceful","romantic"],o=["first-person","third-person"],[a,n,l,i,d,u]=[t,s,c,r,f,o].map($=>$[T.integer(0,$.length-1)]);return{type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Write one sentence in ${u} point of view to describe ${a} ${n} ${l}. The setting should ${i} and the tone should be ${d}. The sentence should be no longer than 15 words. Add a + sign at the beginning and end of your response.`,system_prompt:`You are a professional novel writter. You speak ${e.language}.`}}}},S=e=>({type:"image",data:{version:"db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",input:{prompt:`Comic style, colored, ${e}.`}}}),A=e=>({type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Translate the following sentences into English. Add a + sign at the beginning and end of your response: ${e}`}}}),h=document.getElementById("input-field"),p=document.getElementById("story"),b=document.getElementById("option"),x=document.getElementById("trash"),w=document.getElementById("loader"),v=document.getElementById("image-container"),y=document.getElementById("language-selector"),Y=()=>{let e=[],t=localStorage.getItem("language")||"English";if(console.log(t),!(h&&p&&b&&x&&w&&v&&y)){console.error("Counldn't load all elements");return}x.addEventListener("click",()=>{location.reload()}),y.value=t,y.addEventListener("change",()=>{localStorage.setItem("language",y.value),location.reload()}),h.addEventListener("keydown",o=>{if(o.key!=="Enter"||h.value.length===0)return;const a=h.value;o.preventDefault(),h.value="",e=[...e,a];const n=m.createText("p",a,"my-story");s(n),c(e)});const s=o=>{p.appendChild(o),p.scrollHeight>p.clientHeight&&p.scrollTo({top:p.scrollHeight,behavior:"smooth"})},c=async o=>{E(b),w.style.display="block";const a=o.join(" "),n=await g(C(a,{language:t}));f(n),await r(n,{mode:"update"});const l=m.createText("p",` ${n}`,"story-block");s(l),e=[...e,n]},r=async(o,a)=>{const n=async()=>{const i=a.mode==="init"?P({language:t}):C(o,{language:t}),d=await g(i),u=await g(I(d,{language:t}));return{fullChoice:d,shortChoice:u}},l=await Promise.all(Array.from({length:3}).map(()=>n()));w.style.display="none",l.forEach(i=>{const d=m.createText("p",`${i.shortChoice}`,"option");d.addEventListener("click",()=>{e=[...e,i.fullChoice];const u=m.createText("p",`${i.fullChoice}`,"my-story");s(u),c(e)}),b.appendChild(d)})},f=async o=>{const a=e[e.length-1]?e[e.length-1]:"",n=t==="English"?`${a} ${o}`:await g(A(`${a} ${o}`)),l=await g(S(n)),i=m.createImage(l,"AI generated image.","story-image");E(v),v.appendChild(i)};f("A path leading to multiple universes."),r("",{mode:"init"})},g=async e=>{const t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e.data)};try{console.log("Start fetching");const c=await(await fetch(k.replicateProxy,t)).json();let r;switch(e.type){case"text":r=c.output.join("").match(/\+([^+]+)\+/)[1].trim(),console.log("Got it!");break;case"image":r=c.output,console.log(r);break}return r}catch{return console.log("Trying again..."),g(e)}};Y();
