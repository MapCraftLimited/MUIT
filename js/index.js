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
                },
                activeMenuPanel: null,
                showFIT: true
            };
        },

        mounted()
        {
            this.init();
        },

        watch:
        {
            "screen.portrait"()
            {
                if(this.screen.portrait && this.activeMenuPanel !== null)
                    this.showFIT = false;
            }
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
                let map = new Map({ basemap: "satellite" });
                let view = new MapView(
                {
                    container: "map",
                    map: map,
                    zoom: 16,
                    center: [-6.8, 54.7]
                });
            }
        }
    });

    vueApp.mount("#app");
});