import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: 'Introdução e Visão Geral',
      collapsed: false,
      items: ['visao_geral', 'documento-arquitetura-software', 'settings'],
    },
    {
      type: 'category',
      label: 'Guia de Implantação',
      items: ['implantacao', 'implantar_no_django', 'implantar_no_moodle'],
    },
    {
      type: 'category',
      label: 'Guia de Desenvolvimento',
      items: ['desenvolvimento', 'duvidas_frequentes'],
    },
    {
      type: 'category',
      label: 'Referência',
      items: ['compatibility-matrix', 'adr/migrar-documentacao-sphinx-para-docusaurus'],
    },
  ],
};

export default sidebars;
