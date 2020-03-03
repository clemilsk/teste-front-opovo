// Definindo novo componente chamado menu
Vue.component('app-menu', {
    data: function () {
      return {
        logo: 'OPOVO RECRUTA'
      }
    },
    template: `
      <div>
      <!-- Nenu -->
      <nav class="navbar navbar-expand-lg navbar-primary bg-light fixed-top py-3" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#"> {{ logo }} </a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto my-2 my-lg-0">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#mainNav">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#vaga">Vaga Descrição</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#aplicar">Aplicar à Vaga</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    `
})

// Definindo novo componente chamado header
Vue.component('app-header', {
    data: function () {
      return {
        tituloh: 'Teste Prático Front-end O POVO',
        descricaovaga: 'Criado com intuito de disponibilizar os pré-requisitos prático para se tornar um desenvolvedor Jr. Front-end do Grupo de Comunicação O POVO.',
        button: 'Saiba Mais'
      }
    },
    template: `
    <div>
        <header class="masthead">
            <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center text-center">
                <div class="col-lg-10 align-self-end">
                <h1 class="text-uppercase text-white font-weight-bold"> {{ tituloh }} </h1>
                <hr class="divider my-4">
                </div>
                <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 font-weight-light mb-5"> {{ descricaovaga }} </p>
                <a class="btn btn-primary btn-xl js-scroll-trigger" href="#vaga"> {{ button }} </a>
                </div>
            </div>
            </div>
        </header>
    </div>
    `
})

// Definindo componente da section descrição da vaga
Vue.component('app-vaga', {
    data: function () {
      return {
          titulovaga: 'A Vaga de Front-End',
          introdvaga: 'Introducao',
          txtintrodvaga: 'Esta etapa do processo seletivo desejamos que você desenvolva um projeto prático de front-end. Deverá ser criado a estrutura front-end RESPONSIVA do layout que se encontra neste repositório.',
          requisitvaga: 'Requisitos',
          items: [
            { requisito: 'HTML 5' },
            { requisito: 'CSS 3' }, 
            { requisito: 'Fontes Web' },
            { requisito: 'JavaScript' }, 
            { requisito: 'Bootstrap 4' }, 
            { requisito: 'Template rendering' }, 
            { requisito: 'Wai ARIA' }, 
            { requisito: 'GitHub' }
          ],
          atividade: 'Atividades',
          ativdesc: 'Criar landpage responsiva contendo Menu, Descrição da Vaga e Formulário de Envio',
          criterio: 'Critérios de Avaliação',
          criteriodesc: 'Caso o projeto entregue seja enviado com todos os critérios acima, serão levados em consideração também os seguintes conhecimentos:',
          criterioitem: [
            { requisito: 'Sintaxe e semântica do HTML' },
            { requisito: 'Baixo tempo de renderização' }, 
            { requisito: 'Noções de SEO' },
            { requisito: 'Scripts no geral' }, 
            { requisito: 'Organização do projeto' }, 
            { requisito: 'Documentação' }, 
            { requisito: 'Uso de controle de versão' }
          ],
          submissao: 'Processo de Submissão',
          subdesc: 'O teste deve ser versionado e disponibilizado no GitHub do candidado.', 
          sublink: 'Enviar o link para:',
          subemail:'brendacamara@opovodigital.com',
          subs: 'Boa sorte a todos e Bom trabalho!!'
      }
    },
    template: `
    <div>
        <!-- Services Section -->
        <section class="page-section" id="vaga">
            <div class="container">
                <h2 class="text-center mt-0">{{ titulovaga }}</h2>
                <hr class="divider my-4">
                    <div class="row">
                        <div class="col-lg-12 text-left">
                            <div class="mt-5">
                                <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                                <h3 class="h4 mb-2"> {{ introdvaga }} </h3>
                                <p class="text-muted mb-0"> {{ txtintrodvaga }} </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 text-left">
                            <div class="mt-5">
                                <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                                <h3 class="h4 mb-2"> {{ requisitvaga }} </h3>
                                <ul>
                                   <li v-for="item in items">
                                         {{ item.requisito }}
                                   </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 text-left">
                            <div class="mt-5">
                                <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                                <h3 class="h4 mb-2"> {{ atividade }} </h3>
                                <p class="text-muted mb-0"> {{ ativdesc }} </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 text-left">
                            <div class="mt-5">
                                <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                                <h3 class="h4 mb-2"> {{ criterio }} </h3>
                                <p class="text-muted mb-0"> {{ criteriodesc }} </p>
                                <ul>
                                   <li v-for="itemc in criterioitem">
                                         {{ itemc.requisito }}
                                   </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 text-left">
                            <div class="mt-5">
                                <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                                <h3 class="h4 mb-2"> {{ submissao }} </h3>
                                <p class="text-muted mb-0"> {{ subdesc }} <br> {{ sublink }} <a href="#">{{ subemail }}</a> <br> {{ subs }}</p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    </div>
    `
})

// Definindo componente formulário
Vue.component('app-form', {
    data: function () {
      return {
        formtitle: 'Aplicar Agora'
      }
    },
    template: `
    <div>
    <!-- Services Section -->
    <section class="page-section" id="aplicar" style="background-color: #eee">
            <div class="container">
                <h2 class="text-center mt-0">{{ formtitle }}</h2>
                <hr class="divider my-4">
                    <form>
                    <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Primeiro Nome *</label>
                        <input type="text" class="form-control" id="inputnome1">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Segundo Nome *</label>
                        <input type="text" class="form-control" id="inputnome2">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email *</label>
                        <input type="email" class="form-control" id="inputEmail">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Telefone *</label>
                        <input type="text" class="form-control" id="inputFone">
                    </div>
                    </div>
                    <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">Cidade</label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">Estado</label>
                        <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputZip">CEP</label>
                        <input type="text" class="form-control" id="inputZip">
                    </div>
                    </div>
                    <div class="mb-3">
                        <label for="validationTextarea">Breve descrição</label>
                        <textarea class="form-control" id="validationTextarea" placeholder="Escreva aqui..." required></textarea>
                        <div class="invalid-feedback">
                        Please enter a message in the textarea.
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Aplicar</button>
                </form>
        </div>
    </section>
    </div>
    `
})

// Definindo componente footer
Vue.component('app-footer', {
    data: function () {
      return {
        copyright: '2020 - OPOVO VAGAS'
      }
    },
    template: `
    <div>
        <!-- Footer -->
        <footer class="bg-light py-5">
        <div class="container">
            <div class="small text-center" style="color:#fff"> Copyright &copy; {{ copyright }} </div>
        </div>
        </footer>
    </div>
    `
})

new Vue({ el: '#app' })