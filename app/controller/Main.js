Ext.define('PriceCom.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main : 'main'
        },
        control: {
            'main productosList': {
                itemtap :'mostrarProducto'
            }, 
            'main toolbar button[action=productos]':{
                itemtam : 'mostarProductos'
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
            main = me.getMain(0);
    }
});
