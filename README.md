# iHero-Challenge-Evts

## Description
This is a base project for a challenge called iHero.
It`s emits websocket events randomicly to be handle by the main application.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# run server dev (watch mode)
$ npm run dev

# build production
$ npm run build

# start production
$ npm run start
```

## License

iHero is [MIT licensed](https://github.com/guiriosoficial/iHero-Challenge-Evts/blob/main/LICENSE).



# 🚨 Desafio Técnico Full Stack — Central de Heróis em Tempo Real

## 📌 Contexto

Existe uma **API WebSocket** que dispara eventos em **intervalos aleatórios**.
Cada evento representa uma **ocorrência** que está acontecendo em algum local do mundo.

Uma ocorrência possui:

* 📍 Localização (latitude e longitude)
* ⚡ Gravidade / força do evento (1 a 100)
* ⏱️ Duração do evento (tempo máximo para ser resolvido)

O objetivo é construir uma **aplicação full stack** capaz de **gerenciar heróis**, **receber ocorrências em tempo real** e **escalar automaticamente os heróis mais adequados** para resolver cada situação.

---

## 🎯 Objetivo do Desafio

Criar uma aplicação que permita:

* Cadastro e autenticação de usuários
* Controle de permissões (roles)
* Cadastro, edição e visualização de heróis
* Recebimento de eventos via WebSocket
* Seleção inteligente de heróis para resolver ocorrências
* Simulação de tempo, deslocamento, cansaço e recuperação
* Visualização de tudo em tempo real, preferencialmente em um **mapa**

---

## 🦸 Heróis

Cada herói deve possuir:

* `id`
* `nome`
* `força` (1 a 100)
* `vida / energia` (1 a 100)
* `localização` (latitude e longitude)
* `velocidade` (ex: km/h)
* `status`

    * Disponível
    * Em missão
    * Recuperando

### Regras dos Heróis

* Um herói **não pode atender mais de uma ocorrência ao mesmo tempo**
* Heróis podem atuar **sozinhos ou em grupo**
* A **soma das forças** de um grupo pode ser usada para atender ocorrências mais graves
* Quando a vida do herói for **≤ 10**, ele:

    * Fica indisponível
    * Entra em modo de recuperação
* Heróis se recuperam **1 ponto de vida por minuto** enquanto não estão em missão

---

## 🚨 Ocorrências (Eventos)

Cada ocorrência possui:

* `id`
* `localização` (latitude e longitude)
* `gravidade` (1 a 100)
* `duração` (tempo máximo para resolução)
* `status`

    * Pendente
    * Em atendimento
    * Resolvida
    * Falha (caso não seja atendida a tempo)

As ocorrências são recebidas exclusivamente via **WebSocket** no backend.

---

## 🧠 Lógica de Seleção de Heróis

O backend é responsável por decidir **automaticamente** quais heróis serão enviados para cada ocorrência.

### Critérios mínimos para seleção:

1. **Força suficiente**

    * A força do herói ou a soma do grupo deve ser ≥ gravidade da ocorrência
2. **Disponibilidade**

    * Heróis já em missão não podem ser reutilizados
3. **Distância**

    * O herói (ou grupo) deve conseguir chegar ao local **antes do tempo limite**
4. **Tempo de deslocamento**

    * Calculado com base na distância geográfica e velocidade do herói
5. **Tempo de resolução**

    * Quanto maior a diferença entre força do herói e gravidade da ocorrência, mais rápido o problema é resolvido

#### Exemplo:

* Ocorrência: gravidade 50
* Herói A: força 60 → resolução lenta
* Heróis A + B: força total 90 → resolução mais rápida

---

## ⏱️ Tempo de Resolução e Impacto na Vida

* O tempo total de uma missão é:

    * `tempo de deslocamento + tempo de resolução`
* Quanto **mais tempo** o herói leva na missão:

    * Maior será a **perda de vida**
* A perda de vida deve ser proporcional ao tempo gasto

---

## 👤 Usuários e Permissões

A aplicação deve permitir:

### Autenticação

* Cadastro de usuário
* Login

### Controle de Roles

* **Admin**

    * Pode criar, editar e remover heróis
* **Operador**

    * Pode visualizar ocorrências e heróis
* **Viewer**

    * Apenas visualização (read-only)

Somente usuários autorizados podem gerenciar heróis.

---

## 🗺️ Visualização (Frontend)

Tudo que acontece no sistema deve ser **visualizável em tempo real** no frontend.

### Requisitos mínimos:

* Mapa interativo (Google Maps, Mapbox, Leaflet, etc)
* Exibir:

    * Ocorrências em tempo real
    * Heróis e suas localizações
    * Status dos heróis (disponível, em missão, recuperando)
* Atualizações em tempo real (WebSocket ou similar)

---

## 🛠️ Tecnologias

As tecnologias são **livres**, mas espera-se:

### Backend

* API HTTP + WebSocket
* Lógica de negócio clara
* Persistência de dados
* Controle de autenticação e autorização

### Frontend

* Interface moderna
* Consumo de dados em tempo real
* Boa experiência de uso

---

## ✅ Diferenciais (Opcional)

* Testes automatizados
* Logs e métricas
* Simulação visual do deslocamento dos heróis
* Escalabilidade da lógica de seleção
* Documentação clara das decisões técnicas

---

## 📄 Entrega

* Repositório com frontend e backend
* README explicando:

    * Como rodar o projeto
    * Decisões técnicas
    * Possíveis melhorias futuras

Boa sorte — e que os heróis cheguem a tempo 🦸‍♂️🔥

