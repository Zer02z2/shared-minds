import{R as T,H as g,r as $}from"./library-B-Bg-_Pf.js";/* empty css              */import{s as k}from"./secrets-JRwob07e.js";const C=(e,t)=>{const s=["twisting","surprising","peaceful","exciting","humorous","romantic","sarcasm","suspenful","mysterious","tedious"];return{type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Read the following story and expand upon it in one or two sentences. Your response should be no longer than 20 words. Make sure the logic of the story is smooth. The plot should be ${s[T.integer(0,s.length-1)]}. Add a + sign at the beginning and end of your response: ${e}`,system_prompt:`You are a professional novel writter. You speak ${t.language}.`}}}},E=(e,t)=>({type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Summerize the follow sentences into a short sentence less then 8 words. You should not alter the subject or the meaning of the sentence. Add a + sign at the beginning and end of your response: ${e}`,system_prompt:`You are a professional novel writter. You speak ${t.language}.`}}}),P=e=>{const t=["one","two","three","a gourp of"],s=["animal","grown adult","kid","location"],c=["doing something","and the surrounding environment","and the weather"],a=["metropolis","countryside","medieval","in the nature","magical","sci-fi","warfare"],f=["everyday life","suspenful","exciting","peaceful","romantic"],o=["first-person","third-person"],[r,n,p,i,l,u]=[t,s,c,a,f,o].map(v=>v[T.integer(0,v.length-1)]);return{type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Write one sentence in ${u} point of view to describe ${r} ${n} ${p}. The setting should ${i} and the tone should be ${l}. The sentence should be no longer than 15 words. Add a + sign at the beginning and end of your response.`,system_prompt:`You are a professional novel writter. You speak ${e.language}.`}}}},I=e=>({type:"image",data:{version:"db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",input:{prompt:`Comic style, colored, ${e}.`}}}),A=e=>({type:"text",data:{version:"fbfb20b472b2f3bdd101412a9f70a0ed4fc0ced78a77ff00970ee7a2383c575d",input:{prompt:`Translate the following sentences into English. Add a + sign at the beginning and end of your response: ${e}`}}}),h=document.getElementById("input-field"),d=document.getElementById("story"),y=document.getElementById("option"),x=document.getElementById("trash"),b=document.getElementById("loader"),w=document.getElementById("image-container"),S=()=>{let e=[],t="Simplified Chinese";if(console.log(t),!(h&&d&&y&&x&&b&&w)){console.error("Counldn't load all elements");return}x.addEventListener("click",()=>{location.reload()}),h.addEventListener("keydown",o=>{if(o.key!=="Enter"||h.value.length===0)return;const r=h.value;o.preventDefault(),h.value="",e=[...e,r];const n=g.createText("p",r,"my-story");s(n),c(e)});const s=o=>{d.appendChild(o),d.scrollHeight>d.clientHeight&&d.scrollTo({top:d.scrollHeight,behavior:"smooth"})},c=async o=>{$(y),b.style.display="block";const r=o.join(" "),n=await m(C(r,{language:t}));f(n),await a(n,{mode:"update"});const p=g.createText("p",` ${n}`,"story-block");s(p),e=[...e,n]},a=async(o,r)=>{const n=async()=>{const i=r.mode==="init"?P({language:t}):C(o,{language:t}),l=await m(i),u=await m(E(l,{language:t}));return{fullChoice:l,shortChoice:u}},p=await Promise.all(Array.from({length:3}).map(()=>n()));b.style.display="none",p.forEach(i=>{const l=g.createText("p",`${i.shortChoice}`,"option");l.addEventListener("click",()=>{e=[...e,i.fullChoice];const u=g.createText("p",`${i.fullChoice}`,"my-story");s(u),c(e)}),y.appendChild(l)})},f=async o=>{const r=e[e.length-1]?e[e.length-1]:"",n=await m(A(`${r} ${o}`)),p=await m(I(n)),i=g.createImage(p,"AI generated image.","story-image");$(w),w.appendChild(i)};f("A path leading to multiple universes."),a("",{mode:"init"})},m=async e=>{const t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e.data)};try{console.log("Start fetching");const c=await(await fetch(k.replicateProxy,t)).json();let a;switch(e.type){case"text":a=c.output.join("").match(/\+([^+]+)\+/)[1].trim(),console.log("Got it!");break;case"image":a=c.output,console.log(a);break}return a}catch{return console.log("Trying again..."),m(e)}};S();
