Ext.define('PriceCom.store.Productos',{
    extend: 'Ext.data.Store',
    alias: 'store.productos',
    
    config :{
        model: 'PriceCom.model.Producto',
        autoLoad: true,
        proxy: {
            type: 'jsonp',
            url : 'http://10.20.218.103:8080/pricecom/producto/index',
            reader: {
                type: 'json',
                rootProperty: 'productos'
            }
        }
        // data: [
        //     {id:'1',producto:'papel higienico', marca:'charmin',img:'imgs/avatar.png',precio:'100.4',tienda_locacion:'25.6206579,-100.2793085,15z',tienda_nombre:'walmart',likes:'3',tags:[{name:'papel de banio'},{name:'chiarmin'}]},
        //     {id:'2',producto:'Pasta', marca:'Maria',img:'imgs/avatar.png',precio:'10.4',tienda_locacion:'25.6206579,-100.2793085,15z',tienda_nombre:'walmart',likes:'1',tags:[{name:'pasta'},{name:'maria'},{name:'espageti'}]}
        // ]
    }
});