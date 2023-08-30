require(
[
    "esri/Map",
    "esri/views/MapView"
],
(
    Map,
    MapView
) =>
{
    let vueApp = Vue.createApp(
    {
        data()
        {
            return {
                screen:
                {
                    small: false,
                    portrait: false
                }
            };
        },

        mounted()
        {
            this.init();
        },

        methods:
        {
            init()
            {
                this.detectScreenInfo();
                window.addEventListener("orientationchange", () => this.detectScreenInfo());
                window.addEventListener("resize", () => this.detectScreenInfo());

                this.setupMap();
            },

            detectScreenInfo()
            {
                this.screen.portrait = window.screen.height > window.screen.width;
                this.screen.small = (this.screen.portrait ? window.screen.width : window.screen.height) < 1000;
            },

            setupMap()
            {
                const map = new Map({
                basemap: "topo-vector"
                });

                const view = new MapView({
                container: "map",
                map: map,
                zoom: 10,
                center: [15, 65] // longitude, latitude
                });
            }
        }
    });

    vueApp.mount("#app");
});