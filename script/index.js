const buyTicketBtn=document.getElementById('buy-tickets-btn');
const content=document.getElementById('content');
buyTicketBtn.addEventListener('click',()=>{
       content.scrollIntoView({behavior:'smooth'})
})
// passenger seat
const a1=document.getElementById('a1');
const a2=document.getElementById('a2');
const a3=document.getElementById('a3');
const a4=document.getElementById('a4');

const b1=document.getElementById('b1');
const b2=document.getElementById('b2');
const b3=document.getElementById('b3');
const b4=document.getElementById('b4');

const c1=document.getElementById('c1');
const c2=document.getElementById('c2');
const c3=document.getElementById('c3');
const c4=document.getElementById('c4');

const d1=document.getElementById('d1');
const d2=document.getElementById('d2');
const d3=document.getElementById('d3');
const d4=document.getElementById('d4');

const e1=document.getElementById('e1');
const e2=document.getElementById('e2');
const e3=document.getElementById('e3');
const e4=document.getElementById('e4');

const f1=document.getElementById('f1');
const f2=document.getElementById('f2');
const f3=document.getElementById('f3');
const f4=document.getElementById('f4');

const g1=document.getElementById('g1');
const g2=document.getElementById('g2');
const g3=document.getElementById('g3');
const g4=document.getElementById('g4');

const h1=document.getElementById('h1');
const h2=document.getElementById('h2');
const h3=document.getElementById('h3');
const h4=document.getElementById('h4');

const i1=document.getElementById('i1');
const i2=document.getElementById('i2');
const i3=document.getElementById('i3');
const i4=document.getElementById('i4');

const j1=document.getElementById('j1');
const j2=document.getElementById('j2');
const j3=document.getElementById('j3');
const j4=document.getElementById('j4');

const passengerSeats=[a1,a2,a3,a4,b1,b2,b3,b4,c1,c2,c3,c4,d1,d2,d3,d4,e1,e2,e3,e4,f1,f2,f3,f4,g1,g2,g3,g4,h1,h2,h3,h4,i1,i2,i3,i4,j1,j2,j3,j4];

for (const passengerSeat of passengerSeats)
{
    passengerSeat.addEventListener('click',()=>{
        passengerSeat.classList.add('hover:bg-[#1DD100]')
        passengerSeat.classList.add('bg-[#1DD100]')
        seatLeft('seat-left');
        addSeatClassPrice(passengerSeat.innerText.toLowerCase());
        seatCountFunc();
        totalPrice();
    })
    
}