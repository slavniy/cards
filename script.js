const app = new Vue({
    el: "#app",
    data: {
        number : '',
        cardHolder : 'вапвв'
    },

    computed:{
        paySystemImg(){
            imgPath = 'img/systems/'
            var systems = {
                '2': imgPath + 'mir.png',
                '3': imgPath + 'american-exp.png',
                '4': imgPath + 'visa.png',
                '5': imgPath + 'mastercard.png',
                '6': imgPath + 'maestro.png'
                }

            return  systems[this.number[0]] 
            },
        isCorrectLength(){
                if (this.number.length != 16){
                    return false;
                }
                var sum = 0;
                for (i = 0; i < this.number.length; i++){
                    if (i % 2 != 0){
                        sum +=Number(this.number[i])
                    }
                    else{
                        num = Number(this.number[i]) * 2;
                        if (num > 9){
                            num -= 9;
                        }
                        sum += num;
                  
                    }
                }
                console.log(sum);
                return (sum % 10 == 0);
            },
        bankImg(){
            var banks ={
                'gazprombank':['521178', '548673', '548601', '415428', '676371', '477964', '479004'],
                'vtb':['427229', '527883', '447520'],
                'gazprombank':['548999', '526483'],
                'mts-bank':['533736', '540616'],
                'otkrytie':['434146', '405870', '544573', '532301'],
                'rosbank':['440503', '554761'],
                'russian_standart':['513691', '510047'],
                'raiffaizen':['462730', '462729'],
                'sberbank':['427683', '427901', '427644', '427601', '427901','427631','427638','546938','546955'],
                'tinkoff':['521324', '437773'],

            }
            sub = this.number.substring(0, 6)
            for (bank in banks){
                for(item in banks[bank]){
                   if (banks[bank][item] == sub){
                    return 'img/banks/' + bank  + '.png' 
                   };
                }
            }
        },
        nameIsCorrect(){
            var alf = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
            for (i=0; i<this.cardHolder.length; i++){
                if (alf.indexOf(this.cardHolder[i]) == -1){
                    return false;
                }
            }
            return true;
        }

        }        
})