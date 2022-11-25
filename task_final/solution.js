// }

function sendRequest(name, phone, address, goods, sum) {
    //let data = {goods: [], order: {}};    
    let data = {client: `${name} ${phone}`, order: {address, sum}, goods: []};

    data.order.address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`;    
    data.order.sum = sum;    


    let countOfGoods = goods.length;
    //data.client = `${name} ${phone}`;
    /*for (let i = 0; i <= countOfGoods; i += 1) {
        data.goods.push(goods[i].title);
    }*/

    for (let i = 0; i < countOfGoods; i++) {                
        let goodsItem = {title: goods[i].title, count: goods[i].count};        
        data.goods.push(goodsItem);        
    }

    dataObject = {data};

    //let jsonData = JSON.stringify(data);
    let jsonData = JSON.stringify(dataObject);    

    return jsonData;
}