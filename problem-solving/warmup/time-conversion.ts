function timeConversion(s: string): string {

    const arrS = s.split(':')

    const isPM = s.endsWith('PM')
    const isAM = s.endsWith('AM')

    if (isAM && arrS[0] === '12') {
        arrS[0] = '00';
    }

    else if (isPM && arrS[0] !== '12') {
        if (arrS[0] !== '12') {

            arrS[0] = (parseInt(arrS[0]) + 12).toString();
        }
    }

    arrS[2] = arrS[2].slice(0, 2)
    const finalTime = arrS.join(':')

    return finalTime
}

const s = '12:00:00AM'

console.log(timeConversion(s))