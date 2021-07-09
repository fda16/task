module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: ' @import "@/assets/variables.scss"; @import "@/assets/mixins.scss";'
            }
        }
    }
}