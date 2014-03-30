Ext.define('PriceCom.view.ProductosList', {
    extend: 'Ext.DataView',
    xtype: 'productosList',
    
    config: {
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                items : [
                    {
                        xtype: 'button',
                        text: 'add',
                        action : 'add'
                    }
                ]
            }
        ],
        store: {
            type : 'productos'
        },
        itemTpl : '{producto}'
    }
});
