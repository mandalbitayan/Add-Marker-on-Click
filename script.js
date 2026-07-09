require(["esri/Map","esri/views/MapView","esri/layers/GraphicsLayer","esri/Graphic"],
    function(Map,MapView,GraphicsLayer,Graphic){

        const map = new Map({
            basemap:"streets"
        });

        const view = new MapView({
            container:"viewDiv",
            map:map,
            center:[88.3639,22.5726],
            zoom:12
        });
        
        const graphiclayer = new GraphicsLayer()
        map.add(graphiclayer)

// add points on click 
        view.on("click",function(e){
            const point = {
                type:"point",

                longitude:e.mapPoint.longitude,
                latitude:e.mapPoint.latitude
            };

            const symbol = {
                type :"simple-marker",
                color:"red",
                size:10,
                style:"triangle"
            };

            const graphic = new Graphic({
                geometry:point,
                symbol:symbol
            });
            graphiclayer.add(graphic)

        });
    });
