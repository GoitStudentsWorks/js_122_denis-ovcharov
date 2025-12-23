import{A as Y,a as k,S as U,N as F,P as W,i as p,b as j}from"./assets/vendor-CyB7JiL4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const A=document.getElementById("mobile-menu"),K=document.getElementById("data-burger-close"),X=document.getElementById("data-burger-open"),N=document.querySelector(".mobile-menu");function D(e){e.key==="Escape"&&A.classList.contains("is-open")&&H()}function G(e){e.target.closest("a")&&H()}function H(){A.classList.remove("is-open"),document.body.style.overflow="visible",document.removeEventListener("keydown",D),N.removeEventListener("click",G)}function J(){A.classList.add("is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",D),N.addEventListener("click",G)}K.addEventListener("click",H);X.addEventListener("click",J);const Q=[{question:"Я мрію про пухнастика! Що мені потрібно зробити, щоб забрати хвостика додому?",answer:`
    <p>Це чудово, що ви готові подарувати дім одному з наших підопічних! Ми дуже раді будемо вам у цьому допомогти. Процес «усиновлення» у нас простий та зрозумілий:</p>
    <ol class="no-bullets">
      <li> Оберіть друга: Придивіться до наших хвостиків у розділі «Знайди друга».</li>
      <li> Залиште заявку: Натисніть кнопку «Взяти додому» та заповніть коротку анкету.</li>
      <li> Поговоріть з куратором: Волонтер зателефонує вам та відповість на всі питання.</li>
      <li> Приїжджайте знайомитись: Ми домовимось про зустріч у притулку.</li>
      <li> Дорога додому:Після підписання договору ваш новий друг поїде додому.</li>
   </ol>
  `},{question:"Як мені найкраще підготувати свій дім та родину до появи хвостика?",answer:`
    <p>Чудове питання, яке показує вашу турботу! Переїзд — це завжди невеликий стрес для тваринки, але правильна підготовка зробить цей процес легким і радісним. Ось кілька порад:</p>
    <ul>
      <li>  Безпечний простір: Переконайтесь, що на вікнах є сітки, а дроти та побутова хімія сховані.</li>
      <li> Підготуйте Особисті речі: Підготуйте для хвостика дві мисочки (для їжі та води), лежанку чи будиночок, лоток з наповнювачем для котика або повідець і нашийник для собачки.</li>
      <li> Сімейна розмова: Обговоріть з рідними майбутні обов'язки. Важливо, щоб усі були готові до появи нового мешканця.</li>
      <li> Терпіння та любов:Дайте тваринці час, щоб звикнути. Не квапте її, будьте поруч, розмовляйте лагідним голосом — і ваша любов творитиме дива!</li>
    </ul>
  `},{question:"Чи можу я бути впевненим, що тваринка здорова? Розкажіть про щеплення.",answer:`
    <p>Так, звісно. Здоров'я наших підопічних — наш головний пріоритет. Кожна тваринка, яка потрапляє до нас, проходить повний огляд у ветеринара. Ми гарантуємо, що:</p>
    <ul>
      <li>Усі хвостики оброблені від бліх та глистів.</li>
      <li>Усі вакциновані комплексною вакциною за віком.</li>
      <li>Дорослі тварини (зазвичай від 6-8 місяців) стерилізовані/кастровані.</li>
      <li>Разом із тваринкою ви обов'язково отримаєте її ветеринарний паспорт з усіма відмітками.</li>
      <li>Якщо у когось є особливі потреби у догляді чи харчуванні, ми чесно і детально про це розповімо.</li>
    </ul>
  `},{question:"Я дуже хочу допомогти, але поки не готовий до адопції. Чим я можу підтримати «Хатинку лапок»?",answer:`
    <p>Дякуємо вам за велике серце та бажання допомогти! Кожна допомога для нас безцінна. Навіть якщо ви не можете взяти тваринку, ви можете стати її янголом-охоронцем. Ось як:</p>
    <ul>
      <li>Допомогти фінансово: Ваша пожертва піде на корм, ліки, оплату комунальних послуг та зарплату персоналу.</li>
      <li>Стати волонтером: Нам завжди потрібні люблячі руки для прогулянок з собачками, прибирання та, найголовніше, для спілкування з тваринками.</li>
      <li>Подарувати необхідне: Ми завжди раді кормам, лікам, наповнювачам для лотків, іграшкам, теплим ковдрам.</li>
      <li>Допомогти інформаційно: Найпростіший, але дуже дієвий спосіб — розповідати про нас у соцмережах. Можливо, саме ваш репост допоможе комусь знайти свою долю!</li>
    </ul>
  `},{question:"Мені сподобалась одна з ваших тваринок на сайті. Чи можу я приїхати, щоб познайомитися з нею особисто?",answer:`
    <p>Авжеж! Ми віримо, що справжня магія стається лише при особистій зустрічі. Щоб знайомство було комфортним і для вас, і для тваринки, ми просимо вас спочатку заповнити онлайн-заявку на нашому сайті.</p>
    <p>Після цього з вами зв'яжеться куратор тваринки, щоб домовитись про зручний час для вашого візиту. Такий підхід дозволяє нам приділити вам максимум уваги та уникнути зайвого стресу для наших підопічних. З нетерпінням чекаємо на знайомство!</p>
  `}],ee=document.getElementById("faqAccordion");ee.innerHTML=Q.map(e=>`
    <div class="ac">
      <h3 class="ac-header">
        <button type="button" class="ac-trigger">
          <span>${e.question}</span>
          <svg class="faq__icon" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"/>
          </svg>
        </button>
      </h3>
      <div class="ac-panel">
        <div class="ac-text">${e.answer}</div>
      </div>
    </div>
  `).join("");new Y("#faqAccordion",{duration:300,showMultiple:!1});document.querySelectorAll(".ac-trigger").forEach(e=>{e.addEventListener("click",()=>{const t=e.parentElement.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"})});const te="data:image/svg+xml,%3csvg%20width='20'%20height='19'%20viewBox='0%200%2020%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.07088%200.612343C9.41462%20-0.204115%2010.5854%20-0.204114%2010.9291%200.612346L12.9579%205.43123C13.1029%205.77543%2013.4306%206.01061%2013.8067%206.0404L19.0727%206.45748C19.9649%206.52814%2020.3267%207.62813%2019.6469%208.2034L15.6348%2011.5987C15.3482%2011.8412%2015.223%2012.2218%2015.3106%2012.5843L16.5363%2017.661C16.744%2018.5211%2015.7969%2019.201%2015.033%2018.7401L10.5245%2016.0196C10.2025%2015.8252%209.7975%2015.8252%209.47548%2016.0196L4.96699%2018.7401C4.20311%2019.201%203.25596%2018.5211%203.46363%2017.661L4.68942%2012.5843C4.77698%2012.2218%204.65182%2011.8412%204.36526%2011.5987L0.353062%208.2034C-0.326718%207.62813%200.0350679%206.52814%200.927291%206.45748L6.19336%206.0404C6.5695%206.01061%206.89716%205.77543%207.04207%205.43123L9.07088%200.612343Z'%20fill='%2302060A'/%3e%3c/svg%3e",se="data:image/svg+xml,%3csvg%20width='20'%20height='19'%20viewBox='0%200%2020%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.0078%201.00098L12.0361%205.81934C12.328%206.51225%2012.9837%206.97813%2013.7275%207.03711L18.9854%207.45312L14.9893%2010.835H14.9883C14.4157%2011.3197%2014.1618%2012.086%2014.3389%2012.8193L15.5615%2017.8848C15.5599%2017.8857%2015.5589%2017.8872%2015.5576%2017.8877C15.5559%2017.8869%2015.5532%2017.8858%2015.5498%2017.8838L11.041%2015.1631C10.4014%2014.7772%209.59865%2014.7772%208.95898%2015.1631L4.4502%2017.8838C4.44677%2017.8858%204.4441%2017.8869%204.44238%2017.8877C4.44085%2017.8871%204.43936%2017.8859%204.4375%2017.8848L5.66113%2012.8193C5.8271%2012.1321%205.61431%2011.416%205.11523%2010.9297L5.01172%2010.835L1.01367%207.45312L6.27246%207.03711C7.01627%206.97814%207.67205%206.51246%207.96387%205.81934L9.99121%201.00098C9.99362%201.00054%209.99658%201%2010%201C10.003%201%2010.0056%201.00062%2010.0078%201.00098Z'%20stroke='%2302060A'%20stroke-width='2'/%3e%3c/svg%3e",oe="data:image/svg+xml,%3csvg%20width='20'%20height='19'%20viewBox='0%200%2020%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.53125%200.806641C9.70323%200.398163%2010.2968%200.398159%2010.4688%200.806641L12.4971%205.625C12.7155%206.14358%2013.2076%206.49471%2013.7676%206.53906L19.0332%206.95605C19.4909%206.99232%2019.6545%207.54121%2019.3242%207.82129L15.3115%2011.2168C14.8819%2011.5804%2014.6919%2012.1542%2014.8242%2012.7021L16.0508%2017.7783C16.1502%2018.1902%2015.6892%2018.5518%2015.291%2018.3115H15.29L10.7832%2015.5918C10.3023%2015.3016%209.6977%2015.3016%209.2168%2015.5918L4.70898%2018.3115C4.31078%2018.5518%203.84983%2018.1902%203.94922%2017.7783L5.17578%2012.7021C5.30809%2012.1543%205.11814%2011.5805%204.68848%2011.2168L0.675781%207.82129C0.345442%207.54122%200.509097%206.99231%200.966797%206.95605L6.23242%206.53906C6.79243%206.49471%207.28456%206.14369%207.50293%205.625L9.53125%200.806641Z'%20fill='url(%23paint0_linear_8242_16265)'%20stroke='%2302060A'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_8242_16265'%20x1='0'%20y1='9.37158'%20x2='20'%20y2='9.37158'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.5'%20stop-color='%2302060A'/%3e%3cstop%20offset='0.5'%20stop-color='%2302060A'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",S="https://paw-hut.b.goit.study",ne=`${S}/api/animals`,ie=`${S}/api/categories`,re=`${S}/api/orders`,ae=`${S}/api/feedbacks`;async function le({page:e=1,limit:t=10,categoryId:s}){const o={page:e,limit:t};return s&&(o.categoryId=s),(await k.get(ne,{params:o})).data}async function ce(){return(await k.get(ie)).data}async function de(e){return(await k.post(re,e)).data}async function ue(e=10,t=1){return(await k.get(ae,{params:{page:t,limit:e}})).data}async function pe(){const e=document.querySelector("#feedback");if(!e)return;const t=e.querySelector(".swiper.feedback-swiper"),s=e.querySelector(".swiper-wrapper"),o=e.querySelector(".feedback-swiper-pagination"),n=e.querySelector(".feedback-swiper-button-next"),r=e.querySelector(".feedback-swiper-button-prev");try{const l=Math.floor(Math.random()*9)+1,u=(await ue(5,l)).feedbacks;if(!Array.isArray(u)||u.length<3)throw new Error("Not enough feedbacks (min 3 required)");s.innerHTML=u.map(fe).join(""),new U(t,{modules:[F,W],speed:1e3,slidesPerView:1,spaceBetween:16,loop:!1,resistanceRatio:.85,touchRatio:1.2,breakpoints:{768:{slidesPerView:2,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}},pagination:{el:o,clickable:!0,dynamicBullets:!0},navigation:{nextEl:n,prevEl:r,disabledClass:"is-disabled"}})}catch(l){console.error(l),p.error({title:"Error",message:l.message,position:"topRight"})}}function fe(e){const t=(e==null?void 0:e.author)??"User",s=(e==null?void 0:e.description)??"",o=ge((e==null?void 0:e.rate)??0);return`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="rating">
          <div class="star-container">
            ${me(o)}
          </div>
        </div>

        <p class="feedback-comment">${s}</p>
        <p class="feedback-author">${t}</p>
      </div>
    </div>
  `}function me(e){return Array.from({length:5},(t,s)=>{const o=s+1;let n=se;return e>=o?n=te:e>=o-.5&&(n=oe),`
      <img class="star" src="${n}" alt="Rating">
    `}).join("")}function ge(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(5,t)):0}const x=document.querySelector(".scroll-top"),he=300;window.addEventListener("scroll",()=>{window.scrollY>he?x.classList.add("is-on"):x.classList.remove("is-on")});x.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function ve(){const e=document.querySelector("#about-us");if(!e)return;const t=e.querySelector(".swiper.mySwiper"),s=e.querySelector(".swiper-button-next"),o=e.querySelector(".swiper-button-prev"),n=e.querySelector(".swiper-pagination");new U(t,{modules:[F,W],cssMode:!1,navigation:{nextEl:s,prevEl:o},pagination:{el:n,clickable:!0,dynamicBullets:!1},mousewheel:!0,keyboard:!0,speed:1e3,parallax:!0})}const E="/js_122_denis-ovcharov/assets/sprite-BMUmUqG5.svg";let g=null;function be(e){g=j.create(`
   <div class="pet-modal">
    <button class="pet-modal-close" type="button">
        <svg class="icon-close-btn" width="18" height="18">
          <use href="${E}#icon-close-btn"></use>
        </svg>
      </button>
    <img
      class="pet-modal-image"
      src="${e.image}"
      alt="${e.name}"
    />

    <div class="information">
      <div class="pet-type-modal">${e.species}</div>
      <h3 class="pet-name-modal">${e.name}</h3>
      <div class="pet-meta-modal">
       <span>${e.age}</span>
       <span>${e.gender}</span>
     </div>

      <div class="description">
        <h3 class="pet-section">Опис:</h3>
        <p class="pet-description">${e.description}</p>
      </div>

      <div class="health">
        <h3 class="pet-section">Здоровʼя:</h3>
        <p class="pet-description">${e.healthStatus}</p>
      </div>

      <div class="behavior">
        <h3 class="pet-section">Поведінка:</h3>
        <p class="pet-description">${e.behavior}</p>
      </div>

      <button class="pet-modal-btn" data-animal-id="${e._id}">Взяти додому</button>
    </div>
  `,{onShow:t=>{const s=document.querySelector(".basicLightbox .pet-modal");s&&(s.style.overflow="auto"),document.body.style.overflow="hidden",t.element().querySelector(".pet-modal-close").addEventListener("click",()=>t.close()),t.element().querySelector(".pet-modal-btn").addEventListener("click",()=>t.close()),document.addEventListener("keydown",P)},onClose:()=>{document.body.style.overflow="visible",document.removeEventListener("keydown",P)}}),g.show()}function P(e){e.key==="Escape"&&g.close()}function we(e){let t=e.replace(/\D/g,"");return t.length===10&&t.startsWith("0")&&(t="38"+t),t}function Le(e){const t=j.create(`
    <div class="modal-order">
      <button class="modal-order-close-btn" type="button" aria-label="Close">
        <svg class="modal-order-icon" width="8" height="8">
          <use href="${E}#icon-close-btn"></use>
        </svg>
      </button>

      <h2 class="modal-order-title">Залишіть заявку на знайомство</h2>

      <form class="modal-order-form" data-modal-order-form novalidate>
        <div class="form-field-wrapper">
          <label class="form-field-label" for="user-name">Ім’я*</label>
          <input
            class="form-field-text-input"
            id="user-name"
            type="text"
            placeholder="Андрій"
            required
          />
        </div>

        <div class="form-field-wrapper">
          <label class="form-field-label" for="user-phone">Телефон*</label>
          <input
            class="form-field-text-input"
            id="user-phone"
            type="tel"
            inputmode="numeric"
            autocomplete="tel"
            placeholder="+38 (095) 555 99 22"
            required
          />
        </div>

        <div class="form-field-wrapper">
          <label class="form-field-label" for="user-comment">Коментар</label>
          <textarea
            class="form-field-textarea"
            id="user-comment"
            placeholder="Напишіть ваш коментар"
          ></textarea>
        </div>

        <button class="form-submit-btn" type="submit">Надіслати</button>
      </form>
    </div>
    `,{onShow:s=>{document.body.style.overflow="hidden";const o=s.element(),n=o.querySelector(".modal-order-close-btn"),r=o.querySelector("[data-modal-order-form]"),l=o.querySelector("#user-name"),h=o.querySelector("#user-phone"),u=o.querySelector("#user-comment"),L=o.querySelector(".form-submit-btn");n.addEventListener("click",()=>s.close());const y=v=>{v.key==="Escape"&&s.close()};document.addEventListener("keydown",y),s._onEscClose=y,r.addEventListener("submit",async v=>{var T,_,O;v.preventDefault();const b=l.value.trim(),R=we(h.value),q=u.value.trim();if(!e){p.error({message:"Не обрано тварину",position:"topRight"});return}if(!b||b.length>32){p.error({message:"Імʼя обовʼязкове (до 32 символів)",position:"topRight"}),l.focus();return}if(!/^[0-9]{12}$/.test(R)){p.error({message:"Телефон має містити 12 цифр (приклад: 380955559922)",position:"topRight"}),h.focus();return}if(q&&q.length>500){p.error({message:"Коментар не може перевищувати 500 символів",position:"topRight"}),u.focus();return}const Z={name:b,phone:R,animalId:e,comment:q||void 0};try{L.disabled=!0,$(),await de(Z),p.success({title:"Успішно",message:"Заявку відправлено",position:"topRight"}),s.close()}catch(f){console.error(((T=f==null?void 0:f.response)==null?void 0:T.data)||f.message),p.error({title:"Помилка",message:((O=(_=f==null?void 0:f.response)==null?void 0:_.data)==null?void 0:O.message)||"Не вдалося відправити заявку",position:"topRight"})}finally{B(),L.disabled=!1}})},onClose:s=>{document.body.style.overflow="visible",B(),s!=null&&s._onEscClose&&document.removeEventListener("keydown",s._onEscClose)}});g==null||g.close(),$(),t.show()}//!=============================================================
let i=1,c=1,m=8,V="",w=[];//!=============================================================
async function ye(){const e=await ce(),t=["Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"],s=[...e].sort((o,n)=>{const r=t.indexOf(o.name),l=t.indexOf(n.name);return r===-1?1:l===-1?-1:r-l});Ee(s),window.innerWidth>=1440?m=9:m=8,await d()}//!=============================================================
const a={petsFilters:document.querySelector(".pets-filters"),petsList:document.querySelector(".pets-list"),loadMoreBtn:document.querySelector(".load-more"),loaderPetsList:document.querySelector(".loader"),pagination:document.querySelector(".pagination")};//!=============================================================
function Ee(e){const s=[{name:"Всі",_id:""},...e].map(n=>`<li class="pets-filters-item"><button class="pets-filters-btn" data-category-id="${n._id}">${n.name}</button></li>`).join("");a.petsFilters.innerHTML=s;const o=document.querySelector(".pets-filters-btn");o&&o.classList.add("pets-filters-btn-active")}//!=============================================================
function Ce(e,{append:t=!0}={}){const s=e.map(({_id:o,name:n,image:r,species:l,age:h,gender:u,shortDescription:L,categories:y})=>{const v=y.map(b=>`<p class="pet-category">${b.name}</p>`).join("");return`
        <li class="pet-card">
          <img class="pet-img" src="${r}" alt="${n}" />
          <div class="pet-info">
            <p class="pet-type">${l}</p>
            <h3 class="pet-name">${n}</h3>
            <div class="pet-categories">${v}</div>
            <ul class="pet-meta">
              <li>${h}</li>
              <li>${u}</li>
            </ul>
            <p class="pet-descr">${L}</p>
            <button class="pet-details-btn" data-id="${o}">Дізнатись більше</button>
          </div>
        </li>
      `}).join("");t||(a.petsList.innerHTML=""),a.petsList.insertAdjacentHTML("beforeend",s),t?w.push(...e):w=e}//!===============================================================================
async function d({reset:e=!1}={}){$();try{const{animals:t,totalItems:s}=await le({page:i,limit:m,categoryId:V}),o=!e&&window.innerWidth<768;Ce(t,{append:o}),c=Math.ceil(s/m),window.innerWidth<768?(i<c?z():(p.error({message:"Список тварин закінчився =(",position:"topRight"}),C()),e||i++,a.pagination.innerHTML=""):(C(),ke())}catch(t){console.error("API error:",t)}finally{B()}}//!===============================================================================
function ke(){if(c<=1||window.innerWidth<768){a.pagination.innerHTML="";return}a.pagination.innerHTML="";const e=document.createElement("button");e.classList.add("pagination-arrow"),e.innerHTML=`
    <svg class="pagination-arrow-img" width="16" height="16">
      <use href="${E}#icon-left"></use>
    </svg>
  `,e.disabled=i===1,e.disabled&&e.classList.add("btn-is-disabled"),e.addEventListener("click",()=>{i--,d({reset:!0}),M()}),a.pagination.appendChild(e);const t=[];if(c<=7)for(let o=1;o<=c;o++)t.push(o);else i<=3?t.push(1,2,3,4,"...",c):i>=c-2?t.push(1,"...",c-3,c-2,c-1,c):t.push(1,"...",i-1,i,i+1,"...",c);t.forEach(o=>{const n=document.createElement("button");n.classList.add("pagination-btn"),n.textContent=o,o===i&&n.classList.add("pagination-btn-active"),o!=="..."?n.addEventListener("click",()=>{i!==o&&(i=o,d({reset:!0}),M())}):(n.disabled=!0,n.classList.add("pagination-dots")),a.pagination.appendChild(n)});const s=document.createElement("button");s.classList.add("pagination-arrow"),s.innerHTML=`
    <svg class="pagination-arrow-img" width="16" height="16">
      <use href="${E}#icon-right"></use>
    </svg>
  `,s.disabled=i===c,s.disabled&&s.classList.add("btn-is-disabled"),s.addEventListener("click",()=>{i++,d({reset:!0}),M()}),a.pagination.appendChild(s)}//!===============================================================================
function M(){document.querySelector("#pets-list").scrollIntoView({behavior:"smooth",block:"start"})}//!===============================================================================
function Se(){const e=document.querySelector(".pet-card");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,left:0,behavior:"smooth"})}//!===============================================================================
function $(){document.body.style.overflowX="hidden",a.loaderPetsList.classList.remove("visually-hidden")}//!===============================================================================
function B(){a.loaderPetsList.classList.add("visually-hidden")}//!===============================================================================
function z(){a.loadMoreBtn.classList.remove("visually-hidden")}//!===============================================================================
function C(){a.loadMoreBtn.classList.add("visually-hidden")}//!===============================================================================
a.loadMoreBtn.addEventListener("click",async()=>{C(),await d(),Se()});//!===============================================================================
a.petsFilters.addEventListener("click",e=>{const t=e.target.closest(".pets-filters-btn");t&&(document.querySelectorAll(".pets-filters-btn").forEach(s=>s.classList.remove("pets-filters-btn-active")),t.classList.add("pets-filters-btn-active"),V=t.dataset.categoryId||"",i=1,a.petsList.innerHTML="",d({reset:!0}))});//!=================================================================================
document.addEventListener("click",e=>{const t=e.target.closest(".pet-modal-btn");t&&Le(t.dataset.animalId)});//!======================================================================================
document.addEventListener("click",e=>{if(e.target.classList.contains("pet-details-btn")){const t=e.target.dataset.id,s=w.find(o=>o._id===t);if(!s)return;be(s)}});//!=======================================================================================
let I=window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop";window.addEventListener("resize",()=>{const e=window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop";if(e!==I){if(I=e,e==="mobile"){m=8,a.pagination.innerHTML="",i=1,d({reset:!0}),i++,i<=c?z():C();return}if(e==="tablet"){m=8,i=1,w=[],a.petsList.innerHTML="",d({reset:!0});return}e==="desktop"&&(m=9,i=1,w=[],a.petsList.innerHTML="",d({reset:!0}))}});document.addEventListener("DOMContentLoaded",pe);document.addEventListener("DOMContentLoaded",ve);document.addEventListener("DOMContentLoaded",ye);
//# sourceMappingURL=index.js.map
