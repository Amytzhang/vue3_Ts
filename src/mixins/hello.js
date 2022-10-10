export default {
    data() {
        return {
            message: '你好的'
        }
    },
    created() {
        console.log('mixin---hello')
        this.say()
    },
    methods: {
        say() {
            console.log('窝说')
        }
    },
    destroyed() {
        console.log('mixin--hello--end')
    }
}