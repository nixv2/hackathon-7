Ext.define('PriceCom.model.Producto', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id',   type: 'int'},
            'producto',
            'marca',
            'img',
            {name: 'precio',   type: 'int'},
            'tienda_locacion',
            'tienda_nombre',
            'likes',
            'tags'
        ]
    }
});