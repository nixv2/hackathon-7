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
                        text: 'Agregar',
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
                hidden  : true,
                items   : [{
                    xtype   : 'searchfield',
                    flex    : 1,
                    height  : 27,
                    placeHolder : 'Busque producto'
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
        itemCls:'producto',
        itemTpl : [
            '<img class="img" src={img}>',
            '<p class="nombre">{nombre}</p>',
            'a <p class="precio">${precio}</p>',
            ' en <p class="tienda">{tienda_nombre}</p>'
        ].join('')
    }
});
