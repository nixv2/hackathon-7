Ext.define('PriceCom.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main : 'main',
            busquedaBarra: '#searchbar'
        },
        control: {
            'main productosList': {
                itemtap :'mostrarProducto'
            }, 
            'main toolbar button[action=productos]':{
                tap : 'mostarProductos'
            }, 
            'main toolbar button[action=add]':{
                tap : 'mostrarProductoAlta'
            },
            'main toolbar button[action=search]':{
                tap : 'barraBusqueda'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {

    },
    mostrarProducto: function(){
        var me = this,
            main = me.getMain();

        main.setActiveItem(1);
    },
    mostarProductos : function(){
        var me = this,
            main = me.getMain();
        main.setActiveItem(0);
    },
    mostrarProductoAlta : function(){
        var me = this,
            main = me.getMain();
        main.setActiveItem(2);
    },
    barraBusqueda: function(){
        var me = this,
            barra = me.getBusquedaBarra();

        if (barra.isHidden()) {
            barra.show();
        }else{
            barra.hide();
        }

    }
});
