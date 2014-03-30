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

        /*form.submit({
            params : {
                producto : record
            },
            url : 'http://10.20.218.103:8080/pricecom/producto/save',
            method : 'POST',
            success: function() { 
                Ext.Msg.alert("Alta de Producto."); 
            }, 
            failure: function() { 
                Ext.Msg.alert("Ocurrio un error, Intente de nuevo en un momento.");
            }
        });*/
        Ext.util.JSONP.request({
            // contentType:'application/json',
            // dataType: 'jsonp',
            params: {
                // producto : record
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
                console.log('server-side success with status code ' + response.status);
            },
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            },
            error: function(msg){
            alert(msg);
            }
        });
    }
});
