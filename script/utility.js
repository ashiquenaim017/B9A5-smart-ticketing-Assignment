function seatLeft(idName){
    let numberOfSeatLeft=parseInt(document.getElementById(idName).innerText);
    numberOfSeatLeft--;
    if(numberOfSeatLeft<0)
    {
      alert('No Seat Left');
      document.getElementById(idName).innerText=0;
    }
    else{
        document.getElementById(idName).innerText=numberOfSeatLeft;
    }
    
 }

 function addSeatClassPrice(idName){
    const seatNumber=document.getElementById(idName).innerText;
    const seatClassPr=document.getElementById('seat-class-price');
    const p1=document.createElement('p');
    p1.innerText=seatNumber;
    p1.setAttribute('class','text-lg');
    p1.classList.add('raleway-medium');
    seatClassPr.appendChild(p1);

    const p2=document.createElement('p');
    p2.innerText='Economy';
    p2.setAttribute('class','text-lg');
    p2.classList.add('raleway-medium');
    seatClassPr.appendChild(p2);

    const p3=document.createElement('p');
    p3.innerText='550';
    p3.setAttribute('class','text-lg');
    p3.classList.add('raleway-medium','price');
    seatClassPr.appendChild(p3);

 }

 function seatCountFunc(){
    const applybtn=document.getElementById('apply-btn');
    const couponInputField=document.getElementById('input-field-of-coupon');
    let seatCount=parseInt(document.getElementById('seat-count').innerText);
    seatCount++;
    document.getElementById('seat-count').innerText=seatCount;
    if(seatCount===4)
    {
    applybtn.classList.add('bg-[#1DD100]');
    applybtn.removeAttribute('disabled');
    couponInputField.removeAttribute('disabled');
    

    for(const passengerSeat of passengerSeats)
    {
        passengerSeat.setAttribute('disabled',true);
    }
    
    }
  
    
 }

 function totalPrice(){
    
    let total=parseInt(document.getElementById('total-price').innerText);
    total+=parseInt(document.getElementsByClassName('price')[0].innerText);
    document.getElementById('total-price').innerText=total;
    let grandTotal=parseInt(document.getElementById('grand-total').innerText);
    grandTotal=total;
    document.getElementById('grand-total').innerText=total;

 }