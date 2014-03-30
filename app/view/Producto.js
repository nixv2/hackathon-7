Ext.define('PriceCom.view.Producto',{
	extend : 'Ext.Panel',
	alias : 'widget.producto',
	require : ['Ext.XTemplate'],
	config : {
		styleHtmlContent : true,
		items : [{
			docket : 'top',
			xtype : 'toolbar',
			items : [{
				xtype : 'button',
				text : 'Productos',
				action : 'productos'
			}]
		}],
		tpl : new Ext.XTemplate( 

		'<p>Producto: {producto}</p>',
		'<p>Marca: {marca}</p>',
		'<p>Tienda: {tienda}</p>',
		'<p>Imagen: {img}</p>',
		'<p>Precio: {precio}</p>',
		'<p>Locacion: {tienda_locacion}</p>',
		'<p>Nombre Tienda: {tienda_nombre}</p>',
		'<p>Likes: {likes}</p>',
		'<p>Tags:',
		'<tpl for="tags">',
			 ' {name},',
		'</tpl>',
		'</p>'
		)
	}	
});