var click = document.querySelectorAll('.click');
var content = document.querySelectorAll('.content');
for(var i = 0; i < click.length; i++) {
	click[i].index=i;
	click[i].onclick = function() {
		for(var i = 0; i < click.length; i++) {
			content[i].style.display = 'none';
		}
		content[this.index].style.display = 'block';
	}
}
