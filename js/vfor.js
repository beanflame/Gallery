new Vue({
	//注意代码格式
	
	//el：element 需要获取的元素，一定是 html 中的根容器元素
	el:"#vue-app",
	data:{
		//下面数组的元素是 json 对象，用于前台 for遍历
		nameList:["Bob","Alice","Eve"],
		users:[
			{name:"刘备",age:30},
			{name:"关羽",age:25},
			{name:"张飞",age:28}
		]

	},
	methods:{
	
	}

});