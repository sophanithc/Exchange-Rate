$(document).ready(function(){
	var $btnAdd = $("#btnAddSender");
	var $btnSearch = $("#btnSearchSender");

	function _bindEvents(){
		$btnAdd.on("click", _addSender);
		$btnSearch.on("click", _searchSender);
	}

	function _init(){
		_bindEvents();
	}
	function _addSender(e){
		console.log($btnAdd);
	}
	function _searchSender(e){
		console.log($btnSearch);
	}

	_init();

});