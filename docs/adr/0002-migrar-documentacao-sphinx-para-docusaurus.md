---
sidebar_position: 2
---

# ADR-002: Migrar a documentação de Sphinx para Docusaurus 3

* **Título:** Migrar o site de documentação de Sphinx/Furo para Docusaurus 3 com `superset-docs-theme`
* **Status:** Aprovado
* **Data:** 2026-08-18

## Contexto

A documentação do SupersetBR (`docs/`) era construída com Sphinx + tema Furo, publicada via `.github/workflows/sphinx.yml`. Em paralelo, a organização `superset-by-kelsoncm` criou o pacote `superset-docs-theme`, um preset/tema reutilizável para **Docusaurus 3** — a mesma stack usada pela documentação oficial do Apache Superset (`superset.apache.org/developer-docs`), publicado no npm em `superset-docs-theme@0.1.0`.

Manter Sphinx neste repositório impedia o reuso do tema padrão da organização (que é Docusaurus, não Sphinx) e divergia da stack de documentação usada pelo próprio projeto upstream (Apache Superset).

## Decisão

Migrar `docs/` de Sphinx para Docusaurus 3, consumindo `superset-docs-theme` via npm. O conteúdo (`.rst` → `.md`) permanece nos mesmos arquivos/caminhos dentro de `docs/`, apenas trocando o motor de renderização; a aplicação Docusaurus (config, `package.json`, assets) fica isolada em `website/`, com `docs.path` apontando para `../docs` — preservando a estrutura de pastas já sugerida no DAS (`docs/adr/`, `docs/diagrams/`, `docs/compatibility-matrix.md`).

O workflow `.github/workflows/sphinx.yml` foi substituído por `.github/workflows/docs.yml`, seguindo o mesmo padrão de `ci.yml` do `superset-docs-theme`: build + `actions/upload-pages-artifact` + `actions/deploy-pages`.

## Consequências

* **Positivo:** identidade visual e paleta DSGovBR/Superset (`#1351b4`) consistentes com o restante da organização; alinhamento com a stack de documentação do próprio Apache Superset; ganho de recursos do Docusaurus (React, MDX, versionamento de docs, i18n) sobre o Sphinx.
* **Positivo:** validação do primeiro consumidor real do `superset-docs-theme`, publicado no npm.
* **Negativo:** `sphinx.ext.autodoc`/`viewcode` (não utilizados neste repositório, que não documenta uma API Python) são perdidos; qualquer necessidade futura de autodoc de código Python exigiria ferramenta equivalente no ecossistema Docusaurus/TypeDoc, ou manter Sphinx à parte para esse caso específico.
* **Negativo:** `docs/conf.py`, `docs/Makefile`, `docs/make.bat` e `docs/requirements.txt` (toolchain Sphinx) são removidos; o build agora depende de Node.js 18+ além de Python.

## Não é uma mudança na arquitetura da aplicação

Esta ADR cobre exclusivamente a ferramenta de geração do **site de documentação** (`docs/`), não a arquitetura do SupersetBR descrita no [DAS](../documento-arquitetura-software.md) (tema DSGovBR, autenticação, deploy, embeds). Nenhuma seção do DAS precisou ser atualizada.
