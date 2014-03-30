Ext.define('PriceCom.view.ProductoAlta',{
	extend : 'Ext.form.Panel',
	alias : 'widget.productoAlta',
	requires: [
		'PriceCom.view.CapturePicture',
        'PriceCom.model.Tienda',
		'PriceCom.store.Tiendas'
	],
	config : {
		cls: 'user-form',
		items : [ {
			docket : 'top',
			xtype : 'toolbar',
			title : 'Producto',
			items : [{
				xtype : 'button',
				text : 'Produtos',
				action : 'productos'
			}]
		},{
            xtype: 'capturepicture'
        },{
			xtype : 'fieldset',
			title : 'Alta de Productos',
			instructions : 'Campo marcados con * son Obligatorios',
			items : [{
				xtype : 'textfield',
				name : 'nombre',
				label : 'Nombre'
			}, {
				xtype : 'textfield',
				name : 'marca',
				label : 'Marca'
			}, {
				xtype : 'numberfield',
				name : 'precio',
				label : 'Precio'
			}, {
				xtype : 'textfield',
				name : 'tags',
				label : 'Tags'
			},{
                xtype: 'searchfield',
                label: 'Tienda',
                name : 'tienda',
                cls : 'search-visitors-field',
                // placeHolder: 'Please start to type your name'
            },{
                xtype: 'list',
                store: {
                    type : 'tiendas'
                },
                cls : 'visitors-list',
                itemTpl: '{nombre} <span>{direccion}</span>',
                disableSelection: true,
                hidden: true
            }]
		}, {
				xtype : 'button',
				text : 'Guardar',
				width : 200,
				margin : '0 auto',
				ui : 'confirm',
				action : 'save'
			}]
	}
});