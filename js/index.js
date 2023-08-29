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
        },

        detectScreenInfo()
        {
            this.screen.portrait = window.screen.height > window.screen.width;
            this.screen.small = (this.screen.portrait ? window.screen.width : window.screen.height) < 1000;
        }
    }
});

vueApp.mount("#app");