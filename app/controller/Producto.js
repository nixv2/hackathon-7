Ext.define('PriceCom.controller.Producto', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {},
        control: {
            'main productoAlta button[action=save]': {
                tap :'guardarProducto'
            }
        }
    },
    guardarProducto: function(){
        console.log('save');
    }
});
