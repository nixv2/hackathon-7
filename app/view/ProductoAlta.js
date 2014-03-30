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
			xtype : 'textfield',
			name : 'nombre',
			label : 'Nombre'
		}, {
			xtype : 'numberfield',
			name : 'precio',
			label : 'Precio'
		}, {
			xtype : 'textfield',
			name : 'img',
			label : 'Foto'
		}, {
			xtype : 'textfield',
			name : 'tags',
			label : 'Tags'
		}]
	}
});