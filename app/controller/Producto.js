Ext.define('PriceCom.controller.Producto', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            photo :'capturepicture',
            tiendasList: 'productoAlta list'
        },
        control: {
            'main productoAlta button[action=save]': {
                tap :'guardarProducto'
            },
            'main productoAlta [name=tienda]':{
                keyup: 'buscarTienda',
                clearicontap: 'onClearSearchVisitor'
            }

        }
    },

    guardarProducto: function(button){

        var form = button.up('formpanel');
        var record = button.up('formpanel').getValues();
        record.longitud = 'asdfffff';
        record.latitud = 'asdfffff';
        record.img = this.getPhoto().getImageDataUrl(),
        record.tienda_nombre = 'asdfffff';
        record.likes = 0;

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
            url : 'http://10.20.218.103/pricecom/guardar_productosss.php',
            success: function(response, opts) {
                console.log('server-side success with status code o' + response.status);
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
    },
    buscarTienda : function(field){
        var me=this,
            value = field.getValue(),
            list = me.getTiendasList(),
            store = list.getStore(),
            setListHidden = true;

        store.clearFilter();
        if(value){
            var thisRegEx = new RegExp(value, "i");
            store.filterBy(function(record) {
                if ( (thisRegEx.test(record.get('nombre')) || thisRegEx.test(record.get('direccion'))))
                {
                    setListHidden = false;
                    return true;
                }
                return false;
            });
        }
        list.setHidden(setListHidden);
    }
});
