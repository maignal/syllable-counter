function print(p){
    console.log(p)
}
Array.prototype.contains = function(obj){
    for(let i = 0; i < this.length; i++){
        if (this[i] === obj) {
            return true
        }
    }
    return false
}

const txtarea = document.getElementById('txtarea');

const output_p = document.getElementById('output')

const supreme_court = ['a','à','e','è','é','ê','ë','i','ï','î','o','ô','u','ù','y','A','E','I','O','U','Y']

function reset_f() {
    txtarea.value = ' '
    output_p.innerText = ''
}

function count_syllables(text) {
    console.log(text)

    var sum = 0
    var e_sum = 0

    if(text == null) {
        print('text is null')
        return
    }

    for(var i = 0; i < text.length; i++) {
        let black_scope2 = text[i - 2]
        let black_scope1 = text[i - 1]
        let scope = text[i];
        let scope1 = text[i + 1]
        let scope2 = text[i + 2]
        let scope3 = text[i + 3]
        // memes p
        console.log(scope)
        let black_list = [' ', ',', '.', ';', ':', '(', ")"]
        if(scope === 'e' && (((scope1 === ' ' || scope1 === ',') && supreme_court.contains(scope2)) || scope1 === '.')) {
            sum--
            e_sum++
        }
        // if(scope === 'e' && (black_list.contains(scope1) || black_list.contains(scope2)) && black_scope2 !== ' ') {
        //     sum--
        //     e_sum++
        // }
        if(supreme_court.contains(scope) && supreme_court.contains(scope1) && supreme_court.contains(scope2)) {
            console.log('-', scope, scope1, scope2)
            sum++
            i += 2
        } else if(supreme_court.contains(scope) && supreme_court.contains(scope1)) {
            console.log('-', scope, scope1)
            sum++
            i += 1
        } else if(supreme_court.contains(scope)) {
            console.log('-', scope)
            sum++
        } else {
            continue
        }
    }
    console.log(sum, e_sum)
    return {sum, e_sum}
}

function give_output(){
    output_p.innerText = ''
    let txt = txtarea.value

    let txt_by_lb = String(txt).split('\n')

    print(txt_by_lb)
    for (let i = 0; i < txt_by_lb.length; i++) {
        output = count_syllables(txt_by_lb[i])
        output_p.innerText += `${output.sum} - \\e(${output.e_sum})\n`
        print(output)
    }
}






