export default {
    title: "Avue",
    logo: "A",
    indexTitle: 'avue-cli By smallwei',
    lockPage: '/lock',
    tokenTime: 6000,
    info: {
        title: "Avue 通用管理系统快速开发框架",
        list: [
            'Avue 是一个基于vue+vuex+vue-router快速后台管理模板，采用token交互验证方式。',
            '您可以 Avue 为基础，不只限制于vue的页面，你可以嵌入第三方网站，基于iframe框架。',
            'Avue 构建简单上手快，最大程度上帮助企业节省时间成本和费用开支。',
        ]
    },
    //配置菜单的属性
    menu: {
        props: {
            label: 'label',
            path: 'path',
            icon: 'icon',
            children: 'children'
        }
    }
}