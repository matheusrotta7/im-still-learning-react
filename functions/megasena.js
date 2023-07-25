export default function mega(amount = 6, array = []) {
    
    // console.log("amount" + amount);
    
    if (amount < 6 || amount > 60) {
        throw "invalid number!"
    }

    if (array.length >= amount) {
        return array.sort((n1, n2) => n1 - n2)
    }

    const curRandom = Math.ceil(Math.random() * 60)
    if (!array.includes(curRandom)) {
        return mega(amount, [...array, curRandom])
    } else {
        return mega(amount, [...array])
    }

}