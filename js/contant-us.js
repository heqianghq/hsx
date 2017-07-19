//地图
$(function(){
	var map = new BMap.Map('map');
	var poi = new BMap.Point(106.523035,29.545208);
    map.centerAndZoom(poi, 16);
    //map.enableScrollWheelZoom();
    map.setCurrentCity("重庆");          // 设置地图显示的城市 此项是必须设置的
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                    '<img src="../dist/images/swhf.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                    '地址：重庆市渝中区大坪街道<br/>电话：(023)59928888<br/>简介：大坪盈利国际位于重庆市渝中区大坪街道' +
                  '</div>';
    var searchInfoWindow = null;
    searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : "大坪盈利国际",      //标题
			width  : 290,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
	var marker = new BMap.Marker(poi); //创建marker对象
    marker.enableDragging(); //marker可拖拽
    marker.addEventListener("click", function(e){
	    searchInfoWindow.open(marker);
    })
    map.addOverlay(marker); //在地图中添加marker
    
})
