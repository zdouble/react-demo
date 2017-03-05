const storage = {
    set:function (n,c){
        localStorage.setItem(n,JSON.stringify(c));
    },
    get:function (n){
        if(localStorage.getItem(n) == null){
            return null;
        }else{
            return JSON.parse(localStorage.getItem(n));
        }

    },
    remove:function (n){
        localStorage.removeItem(n);
    }
}

const timeFormt = (time) => {
    let date = new Date(time)
    let year = date.getFullYear()
    let month = add0(date.getMonth()+1)
    let day = add0(date.getDate())
    let hours = add0(date.getHours())
    let minutes = add0(date.getMinutes())

    return `${year}-${month}-${day} ${hours}:${minutes}`

    function add0(num){
        return num > 10 ? num : '0' + num
    }
}

const findMsg = (arr,id) => {
    var obj = {}
    arr.map((data,index)=>{
        if(data.id == id){
           obj = {index,data}
        }
    })
    return obj
}

export {
    storage,
    timeFormt,
    findMsg
}
