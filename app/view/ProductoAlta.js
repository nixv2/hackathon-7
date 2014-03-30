Ext.define('PriceCom.view.ProductoAlta',{
	extend : 'Ext.form.Panel',
	alias : 'widget.productoAlta',
	config : {
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