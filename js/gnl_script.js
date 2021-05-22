// Generate Lotto Number

function G_loNum() {
    // alert("Generate completed!");

    setTimeout(function() {

        let arr = [];

        for(let i = 0; i < 7; i++){
            arr.push(Math.floor(Math.random()*45)+1); 
            for(let j = 0; j < i; j++){
                if (arr[i] === arr[j]) {
                    arr.pop();
                    i--;  
                }
            }
        }

        for(let i = 0 ; i < 7 ; i++) {
            $("#loNum" + i).text(arr[i]);
        }

        alert("생성 완료!")

    }, 1000);   // 1초 후 생성

}
