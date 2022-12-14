module.exports = {
  title: 'TypeScript4',
  description: 'TypeScript4',
  base: '/BlogDoc/',
  theme: 'reco',
  // 修改时间
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
        // subSidebar: 'auto',
        nav: [
            { text: 'home', link: '/' },
            { 
                text: 'blog', 
                items: [
                    { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                    { text: 'ss', link: 'https://juejin.cn/user/712139234359182/posts' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" },
                    { title: "学前必读", path: "/" },
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics" }
              ],
            }
          ]
    }
}