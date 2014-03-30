Ext.define('PriceCom.view.ProductoAlta',{
	exten : 'Ext.form.Panel',
	alias : 'witget.productoAlta'
	config : {
		items : [ {
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