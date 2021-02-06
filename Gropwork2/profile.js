const app = {
    data() {
        return {
            names: 'Thanachok Munpisut', fac: 'KMUTT | IT', age: '20', follow: '1', BD: '7 Aug 20',
            image: 'images/profile.jpg'
        }
    }
}
mountedApp = Vue.createApp(app).mount('#app')