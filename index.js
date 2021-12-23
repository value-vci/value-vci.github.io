const arr=["選對戰場，是一個將軍最重要的職責，在那個戰場，你可以獲得勝利。","挖掘MOT時，就要考慮TA是誰；決定了TA，再想一下還有哪些MOT。這是一個來回假設驗證的過程。","決定灘頭堡目標客戶時，一定要確定自己擁有大幅領先競品的優勢，要有能力「打透」MOT，才選擇這個市場。所謂「打透」，就是一公分寬打到一萬公尺深，要做到這種程度才叫做打透。","消費者視角與企業不同，企業一定要避免從自身的角度去做體驗設計（自嗨），這是企業最常犯的錯誤。","不同的消費者所重視的關鍵時刻MOT不同，一個沒有針對性的體驗設計，很難產生峰值。要先確立目標消費者才去設計，而不是憑靈感去做。"]

function getRandom(x){
    return Math.floor(Math.random()*x)+1
}


document.querySelector('.button').addEventListener('click', (e) => { 
    var num = getRandom(5)
		var sentence = arr[num-1]
    const sentence__content = document.querySelector('.sentence')
		sentence__content.innerText = sentence
})


