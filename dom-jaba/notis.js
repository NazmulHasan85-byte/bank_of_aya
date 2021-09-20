var blier = document.getElementById('make-blue');

blier.onclick = bluebutton;

function bluebutton(){
    document.body.style.backgroundColor = 'blue';
}

var alart = document.getElementById('make-alart');
alart.onclick= alat;

function alat(){
    document = alert('Plz cheak the form')
}

function intext(){
    const onclickpara = document.getElementById('text');
    onclickpara.innerText = 'amar para nai bro';
}

      
      const onpara = document.getElementById('clickingMathod').addEventListener('click',function(){
        const onclickpara = document.getElementById('text');
        onclickpara.innerText = 'ami parbo ma';
})

const btnSide = document.getElementById('index-btn').addEventListener('click',function(){
    const newBtn = document.getElementById('first-index');
    const onclickpa = document.getElementById('clicking-mathod');
    onclickpa.innerText = newBtn.value;
    newBtn.value = '';
})


const commenter = document.getElementById('submit-Comment').addEventListener('click',function(){
    const comments = document.getElementById('newComment');
    // console.log('dakhoui')
    const p = document.createElement('p');
    p.innerText = comments.value;
    const commentcontent = document.getElementById('comment-continer');
    commentcontent.appendChild(p);
    comments.value = '';
})
