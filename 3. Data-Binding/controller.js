var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope){
	$scope.nombre = "Williams";
	$scope.nuevoComentario={};
	$scope.comentarios = [
		{
			comentario : "Buen tutorial",
			username : "Hailanderth"
		},
		{
			comentario : "Malisimo tutorial",
			username : "Emperador"
		}
	];
	$scope.agregarComentario=function(){
		$scope.comentarios.push($scope.nuevoComentario);	
		$scope.nuevoComentario = {};
	}
});