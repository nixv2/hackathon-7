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
        console.log(button.up('formpanel').getValues());
        var record = button.up('formpanel').getValues();
        var form = button.up('formpanel');
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
        Ext.Ajax.request({
            type: 'POST',
            contentType:'application/json',
            dataType: 'jsonp',
            params: {
                producto : record
            },
            url : 'http://10.20.218.103:8080/pricecom/producto/save',
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
