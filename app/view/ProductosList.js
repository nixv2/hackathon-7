Ext.define('PriceCom.view.ProductosList', {
    extend: 'Ext.DataView',
    xtype: 'productosList',
    
    config: {
        store: {
            type : 'productos'
        },
        itemTpl : '{producto}'
    }
});
