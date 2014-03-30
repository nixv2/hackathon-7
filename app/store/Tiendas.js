Ext.define('PriceCom.store.Tiendas',{
    extend: 'Ext.data.Store',
    alias: 'store.tiendas',
    
    config :{
        model: 'PriceCom.model.Tienda',
        autoLoad: true,
        proxy: {
            type: 'jsonp',
            url : 'http://10.20.218.103/pricecom/tiendas.php',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});