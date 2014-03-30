Ext.define('PriceCom.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main : 'main',
            busquedaBarra: '#searchbar',
            producto : 'producto',
            busquedabtn : 'toolbar button[action=buscarProducto]',
            result : 'main productosList'
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
            },
            'searchfield':{
                blur    : 'blurSearch',
                focus   : 'focusSearch'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
        Ext.util.JSONP.request({
            url         : 'http://10.20.218.103:8080/pricecom/producto/index',
            callback    : this.saveData,
            scope       : this,
            callbackKey : 'callback'
        });
    },
    mostrarProducto: function(dataview, index, terget, record){
        var me = this,
            main = me.getMain();
            producto = me.getProducto();
            producto.setData(record.data);
            console.log(record.data);

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

    },
    focusSearch : function(){
        this.getBusquedabtn().show();
    },

    blurSearch  : function(field){
        if(field.getValue() === ""){
            this.clearSearch();
            this.getBusquedabtn().hide();
        }
    },
    clearSearch : function(field){
        this.getResult().getStore().clearFilter();
    },
    saveData: function(success, data){
        console.log(data)
    }

});
