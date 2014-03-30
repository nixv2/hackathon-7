Ext.define('PriceCom.model.Producto', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'id',
            'nombre',
            'img',
            {name: 'precio',   type: 'int'},
            'tienda_locacion',
            'tienda_nombre',
            'likes',
            'tags'
        ]
    }
});