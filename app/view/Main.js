Ext.define('PriceCom.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    
    requires: [
        'PriceCom.store.Productos',
        'PriceCom.model.Producto',
        'PriceCom.view.ProductosList',
        'PriceCom.view.Producto',
        'PriceCom.view.ProductoAlta'
    ],

    config: {
        layout: 'card',
        setAtiveItem: 0,
        items: [
            {xtype :'productosList'},
            {xtype : 'producto'},
            {xtype : 'productoAlta'}
        ]
    }
});
