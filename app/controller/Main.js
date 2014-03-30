Ext.define('PriceCom.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main : 'main'
        },
        control: {
            'main productosList': {
                itemtap :'mostrarProcto'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {

    },
    mostrarProcto: function(){
        console.log('ala')
    }
});
