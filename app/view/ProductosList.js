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
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype : 'button',
                        iconCls :'search',
                        action : 'search'
                    }
                ]
            },
            {
                xtype   : 'toolbar',
                docked  : 'top',
                itemId  : 'searchbar',
                items   : [{
                    xtype   : 'searchfield',
                    flex    : 1,
                    height  : 27,
                    placeHolder : 'Busque por palabras o número'
                },{
                    xtype   : 'button',
                    text    : 'Buscar',
                    action  : 'buscarProducto',
                    hidden  : true
                }]
            }
        ],
        store: {
            type : 'productos'
        },
        itemTpl : '{producto}'
    }
});
