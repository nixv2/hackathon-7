Ext.define('PriceCom.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'PriceCom.store.Productos',
        'PriceCom.model.Producto',
        'PriceCom.view.ProductosList'
    ],

    config: {
        layout: 'card',
        setAtiveItem: 0,
        items: [
            {xtype :'productosList'}
        ]
    }
});
