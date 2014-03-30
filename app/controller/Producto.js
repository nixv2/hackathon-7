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

    guardarProducto: function(button){
        var form = button.up('formpanel');
        var record = button.up('formpanel').getValues();
        record.longitud = 'asdfffff';
        record.latitud = 'asdfffff';
        record.img = 'asdfffff',
        record.tienda_nombre = 'asdfffff';
        record.likes = 0;
        console.log(record);
        Ext.util.JSONP.request({
            params: {
                nombre : record.nombre,
                marca : record.marca,
                precio : record.precio,
                tags : record.tags,
                longitud : record.longitud,
                latitud : record.latitud,
                img : record.img,
                tienda_nombre : record.tienda_nombre,
                likes : record.likes
            },
            url : 'http://10.20.218.103/pricecom/guardar_producto.php',
            success: function(response, opts) {
                Ext.Msg.alert("Success","Producto guardado Exitosamente");
                form.reset();
            },
            failure: function(response, opts) {
                Ext.Msg.alert("Ocurrio un Error");
                
            },
            error: function(msg){
            alert(msg);
            }
        });
    }
});
