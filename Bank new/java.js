function getelement(firstfield){
    const dipositeField = document.getElementById(firstfield);
    const dipositeTotal = dipositeField.value;
    const dipositepart = parseFloat(dipositeTotal);
    dipositeField.value = '';
    return dipositepart;

}
function getmoney(totalfield,apart){
    const fildTotal = document.getElementById(totalfield);
    const filder = fildTotal.innerText
    const partdiposite = parseFloat(filder);
    const totalprt =  partdiposite + apart ;           
    fildTotal.innerText = totalprt;


}
function addition(withapart,addfivo){
    const totalTk =  document.getElementById('total-amount')
    const fieldtk = totalTk.innerText;
    const tka = parseFloat(fieldtk);
    if(addfivo == true){
        totalTk.innerText = tka + withapart;
      }
      else{
        totalTk.innerText = tka - withapart;
      }
 

}






document.getElementById('diposite-btn').addEventListener('click' , function(){
    // const dipositeField = document.getElementById('Diposite-input');
    // const dipositeTotal = dipositeField.value;
    // const dipositepart = parseFloat(dipositeTotal);
    const dipositepart = getelement('Diposite-input');
            
            // const fildTotal = document.getElementById('diposite-amount');
            // const filder = fildTotal.innerText
            // const partdiposite = parseFloat(filder);
            // const totalprt =  partdiposite + dipositepart ;           
            // fildTotal.innerText = totalprt;
            const titi = getmoney('diposite-amount',dipositepart);


        //   const totalTk =  document.getElementById('total-amount')
        //   const fieldtk = totalTk.innerText;
        //   const tka = parseFloat(fieldtk);
        // const tktk = tka + dipositepart;
        // totalTk.innerText = tktk;
        const talai = addition(dipositepart,true);

        // dipositeField.value = '';

})

document.getElementById('withdraw-btn').addEventListener('click',function(){
    // const withdrawMoney = document.getElementById('withdraw-input');
    // const withdrawhoney = withdrawMoney.value;
    // const money = parseFloat(withdrawhoney);
    const money = getelement('withdraw-input');

    // const moneywid = document.getElementById('withdraw-amount');
    // const moneyWithdraw = moneywid.innerText;
    // const newmoney = parseFloat(moneyWithdraw);
    // const totalMONey = newmoney + money;
    // moneywid.innerText = totalMONey;
    const width = getmoney('withdraw-amount',money);

    // const totalwid = document.getElementById('total-amount');
    // const moneytk = totalwid.innerText;
    // const tookmoney = parseFloat(moneytk);
    // const tooktotalmoney = tookmoney - money;
    // totalwid.innerText = tooktotalmoney;
    const moneter = addition(money,false);

    // withdrawMoney.value ='';
})