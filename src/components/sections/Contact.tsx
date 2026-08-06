"use client";

import { useLanguage } from "@/lib/LanguageProvider";
import { useState } from "react";

type Status = "idle" | "sending" | "sent";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-colors duration-300 focus:border-amber-300/50";


export default function Contact() {

  const { t } = useLanguage();

  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);



  const contactInfo = [

    {
      label: t.contact.info.email,
      value: "jamaludin032000@gmail.com",
      href: "mailto:jamaludin032000@gmail.com",
      copyable: true,

      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75l9 6.5 9-6.5M4.5 19.5h15a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 6v12a1.5 1.5 0 001.5 1.5z"
        />
      ),
    },


    {
      label: t.contact.info.phone,
      value: "+62 895-3307-06176",
      href: "tel:+62895330706176",

      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.5 1.5 0 00-1.52.44l-.97 1.164a12.06 12.06 0 01-5.62-5.62l1.164-.97a1.5 1.5 0 00.44-1.52L8.16 3.102a1.125 1.125 0 00-1.091-.852H5.25a1.5 1.5 0 00-1.5 1.5v2.25z"
        />
      ),
    },


    {
      label: t.contact.info.location,
      value: "Bekasi, Jawa Barat, Indonesia",

      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </>
      ),
    },

  ];



  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/",
      icon: "GH",
    },

    {
      name: "LinkedIn",
      href: "https://linkedin.com/",
      icon: "IN",
    },
  ];



  const handleCopy = async(value:string)=>{

    try {

      await navigator.clipboard.writeText(value);

      setCopied(true);

      setTimeout(()=>{
        setCopied(false);
      },1800);


    } catch {}

  };



  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  )=>{

    e.preventDefault();

    const form = e.currentTarget;


    setStatus("sending");


    setTimeout(()=>{

      setStatus("sent");

      form.reset();


      setTimeout(()=>{

        setStatus("idle");

      },3000);


    },1200);

  };




return (

<section 
id="contact"
className="relative bg-slate-900/60 py-28"
>


<div className="mx-auto max-w-6xl px-6">



{/* HEADER */}

<div className="text-center">


<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">

<span className="h-1.5 w-1.5 rounded-full bg-amber-300"/>


<span className="text-xs font-medium uppercase tracking-[0.25em] text-amber-200/90">

{t.contact.badge}

</span>


</div>




<h2 className="font-display text-4xl font-semibold text-white lg:text-5xl">

{t.contact.heading}

</h2>




<p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">

{t.contact.description}

</p>


</div>





<div className="mt-16 grid gap-10 lg:grid-cols-5">



{/* CONTACT INFO */}


<div className="space-y-4 lg:col-span-2">


<div className="rounded-2xl border border-white/10 bg-white/5 p-2">


{contactInfo.map((item,index)=>(


<div
key={item.label}
className={`
group flex items-center gap-4 rounded-xl p-4
hover:bg-white/5
${index !== contactInfo.length-1 
? "border-b border-white/5"
:""}
`}
>



<div className="
flex h-11 w-11 items-center justify-center
rounded-xl border border-amber-300/20
text-amber-200
">

<svg
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth={1.75}
className="h-5 w-5"
>

{item.icon}

</svg>


</div>



<div className="flex-1">


<p className="text-xs uppercase tracking-wider text-slate-500">

{item.label}

</p>


<p className="text-sm text-slate-200">

{item.value}

</p>


</div>




{item.copyable && (

<button
type="button"
onClick={()=>handleCopy(item.value)}
className="text-xs text-slate-400 hover:text-amber-300"
>

{
copied
?
t.contact.form.copied
:
t.contact.form.copy
}

</button>


)}



</div>


))}



</div>





<div className="rounded-2xl border border-white/10 bg-white/5 p-6">


<p className="mb-4 text-xs uppercase tracking-wider text-slate-500">

{t.contact.socials}

</p>



<div className="flex gap-3">


{socials.map(item=>(


<a
key={item.name}
href={item.href}
target="_blank"
rel="noopener noreferrer"
className="
flex h-11 w-11 items-center justify-center
rounded-full border border-white/10
text-sm text-slate-400
hover:border-amber-300/40
hover:text-amber-300
"
>

{item.icon}

</a>


))}


</div>


</div>


</div>





{/* FORM */}


<form
onSubmit={handleSubmit}
className="
space-y-5 rounded-2xl
border border-white/10
bg-white/5 p-8
lg:col-span-3
"
>



<input

placeholder={
t.contact.form.placeholders.name
}

className={inputClass}

required

/>



<input

type="email"

placeholder={
t.contact.form.placeholders.email
}

className={inputClass}

required

/>



<input

placeholder={
t.contact.form.placeholders.subject
}

className={inputClass}

required

/>



<textarea

rows={6}

placeholder={
t.contact.form.placeholders.message
}

className={`${inputClass} resize-none`}

required

/>





<button

disabled={status !== "idle"}

className="
w-full rounded-xl
bg-amber-300
py-3
font-semibold
text-slate-950
disabled:opacity-70
"

>


{
status==="idle" &&
t.contact.form.send
}


{
status==="sending" &&
t.contact.form.sending
}


{
status==="sent" &&
t.contact.form.success
}



</button>




</form>





</div>


</div>


</section>


);

}