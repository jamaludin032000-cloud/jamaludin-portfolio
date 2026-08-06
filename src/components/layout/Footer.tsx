"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageProvider";


const navigation = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Education", href: "#education" },
  { title: "Certificates", href: "#certificates" },
  { title: "Contact", href: "#contact" },
];


const socials = [
  {
    name: "GitHub",
    href: "https://github.com/jamaludin032000-cloud",
    icon: (
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.393.1 2.646.64.699 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.566 4.934.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .267.18.578.688.48A10.002 10.002 0 0022 12c0-5.523-4.477-10-10-10z"
        clipRule="evenodd"
      />
    ),
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jamal-udin-6aa5b3335/",
    icon: (
      <>
        <path d="M6.5 8.5H3V21h3.5V8.5z" />
        <path d="M4.75 3a2 2 0 100 4 2 2 0 000-4z" />
        <path d="M21 14.5c0-3.5-1.8-6-5.2-6-1.7 0-3 .8-3.8 2V8.5H8.5V21H12v-6.2c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.8 2.1 3.4V21H21v-6.5z" />
      </>
    ),
  },

  {
    name: "Email",
    href: "mailto:jamaludin032000@gmail.com",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l9 6 9-6"
        />

        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
        />
      </>
    ),
  },
];



export default function Footer(){

const {t}=useLanguage();


const year = new Date().getFullYear();



const scrollToTop=()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

};



return (

<footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">


<div className="
pointer-events-none absolute
-left-40 bottom-0
h-72 w-72 rounded-full
bg-amber-400/5 blur-[120px]
"/>



<div className="
relative mx-auto max-w-7xl
px-6 py-16
">


<div className="
grid gap-12
md:grid-cols-[1.3fr_1fr_1fr]
">


{/* BRAND */}

<div>


<span className="
font-display text-2xl
font-semibold tracking-wide
text-white
">
Jamaludin
</span>


<p className="
mt-4 max-w-sm
leading-7 text-slate-400
">

{t.footer.description}

</p>



<div className="mt-6 flex gap-3">


{socials.map((social)=>(

<a
key={social.name}
href={social.href}
target="_blank"
rel="noopener noreferrer"
aria-label={social.name}

className="
flex h-10 w-10 items-center
justify-center rounded-full
border border-white/10
bg-white/5
text-slate-400
transition-all
hover:border-amber-300/40
hover:text-amber-200
"
>


<svg
viewBox="0 0 24 24"
fill="currentColor"
className="h-4 w-4"
>

{social.icon}

</svg>


</a>

))}


</div>


</div>





{/* NAVIGATION */}

<div>


<h3 className="
mb-5 text-xs
font-semibold uppercase
tracking-[0.25em]
text-slate-300
">

{t.footer.navigation}

</h3>



<ul className="space-y-3">

{navigation.map(item=>(

<li key={item.href}>

<Link

href={item.href}

className="
group inline-flex
items-center gap-2
text-sm text-slate-400
hover:text-amber-200
"

>


<span className="
h-px w-0
bg-amber-300
transition-all
group-hover:w-3
"/>


{item.title}


</Link>


</li>

))}

</ul>


</div>





{/* CONTACT */}

<div>


<h3 className="
mb-5 text-xs
font-semibold uppercase
tracking-[0.25em]
text-slate-300
">

{t.footer.contact}

</h3>



<ul className="
space-y-3
text-sm text-slate-400
">


<li>

<a
href="mailto:jamaludin032000@gmail.com"
className="hover:text-amber-200"
>

jamaludin032000@gmail.com

</a>

</li>



<li>
Bekasi, Indonesia
</li>



<li className="
flex items-center gap-2
">

<span className="
h-1.5 w-1.5
animate-pulse
rounded-full
bg-emerald-400
"/>


{t.footer.available}

</li>


</ul>


</div>


</div>





<div className="
mt-14 flex flex-col
items-center gap-4
border-t border-white/10
pt-6 sm:flex-row
sm:justify-between
">


<p className="
text-xs text-slate-500
">


© {year ?? "2026"} Jamaludin.
{t.footer.rights}


</p>



<button

onClick={scrollToTop}

className="
group flex items-center
gap-2 rounded-full
border border-white/10
bg-white/5 px-4 py-2
text-xs font-medium
uppercase tracking-wider
text-slate-400
hover:border-amber-300/40
hover:text-amber-200
"

>


{t.footer.backTop}


<svg
className="
h-3.5 w-3.5
transition-transform
group-hover:-translate-y-1
"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
strokeWidth={2}
>

<path
strokeLinecap="round"
strokeLinejoin="round"
d="M5 10l7-7m0 0l7 7m-7-7v18"
/>

</svg>


</button>


</div>


</div>


</footer>

);

}