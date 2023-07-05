import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'en-US',
  title: 'Documento de Visão - SportFind',
  description: 'Vite & Vue powered static site generator.',
  base: '/vitepress-sportsfind',

  themeConfig: {
    nav: [],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Página Inicial', link: '/index.md' },
          { text: 'Visão Geral', link: '/visao_geral.md' },
          {
            collapsed: false,
            text: 'Tópicos do Projeto',
            items: [
              { text: '1. Introdução', link: 'topicos/introducao.md' },
              {
                text: '2. Descrição do Projeto',
                link: '/topicos/descricao.md',
              },
              {
                text: '3. Principais Recursos e Funcionalidades',
                link: '/topicos/recursos.md',
              },
              {
                text: '4. Diagrama de Casos de Uso',
                link: '/topicos/casosDeUso.md',
              },
              { text: '5. Diagrama de Classes', link: '/topicos/classes.md' },
              {
                text: '6. Protótipos de Telas',
                link: '/topicos/prototipos.md',
              },
              {
                text: '7. Cronograma e Entrega',
                link: '/topicos/cronograma.md',
              },
              { text: '8. Riscos e Mitigação', link: '/topicos/riscos.md' },
              { text: '9. Custos e Orçamento', link: '/topicos/custos.md' },
              {
                text: '10. Considerações Finais',
                link: '/topicos/consideracoes.md',
              },
            ],
          },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present ISFC Chapecó',
    },
    search: {
      provider: 'local',
    },
  },
  markdown: {
    lineNumbers: true,
  },
});
